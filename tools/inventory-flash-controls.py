"""Private source inspection; publish only control metadata, never extracted code.
Requires FFDec and Java paths in the environment. Exports stay in /private/tmp.
This inventory is evidence for migration planning, not a controls/numerics pass.
"""
import os,json,re,subprocess,hashlib
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor,as_completed
root=Path(__file__).resolve().parents[1]
cache=Path(os.environ.get('PHYSICA_FLASH_SCRIPT_CACHE','/private/tmp/physica-all-flash-scripts'))
java=os.environ['PHYSICA_JAVA'];jar=os.environ['PHYSICA_FFDEC']
manifest=json.loads((root/'src/flash-manifest.json').read_text())
native={r['id']:r.get('nativeHref') for r in json.loads((root/'assets/flash-catalog.json').read_text())['files'] if r.get('nativeHref')}
def inspect(record):
 out=cache/record['id'];marker=out/'source-sha256.txt'
 if not marker.exists() or marker.read_text()!=record['sha256']:
  result=subprocess.run([java,'-Xmx512m','-Djava.awt.headless=true','-Duser.home=/private/tmp/physica-ffdec-home','-jar',jar,'-export','script',str(out),str(root/record['file'])],capture_output=True,text=True,timeout=90)
  if result.returncode: return {'id':record['id'],'source':record['source'],'inspection':'failed','reason':'FFDec export failed'}
  out.mkdir(parents=True,exist_ok=True);marker.write_text(record['sha256'])
 scripts=list(out.rglob('*.as'));controls=[];events={'press':0,'release':0,'drag':0,'change':0}
 for p in scripts:
  s=p.read_text(errors='replace')
  for key,pattern in [('press',r'\bon\(press'),('release',r'\bon\(release'),('drag',r'\bstartDrag\('),('change',r'\b(?:addEventListener|onChanged)\b')]:events[key]+=len(re.findall(pattern,s))
  if 'min =' in s and 'max =' in s and 'init =' in s:
   def number(k):
    m=re.search(r'\b'+k+r'\s*=\s*(-?\d+(?:\.\d+)?)\s*;',s);return float(m[1]) if m else None
   label=re.search(r'\blabel\s*=\s*"([^"\n]*)"',s)
   value={'path':str(p.relative_to(out)),'min':number('min'),'max':number('max'),'initial':number('init'),'digit':number('digit')}
   if label and '{invalid_utf8=' not in label[1]:value['label']=label[1]
   if value['min'] is not None and value['max'] is not None:controls.append(value)
 return {'id':record['id'],'source':record['source'],'sourceSha256':record['sha256'],'actionScript':record['actionScript'],'inspection':'exported','scriptFiles':len(scripts),'sliderCandidates':controls,'eventCandidates':events,'nativeMigration':'native-counterpart-available' if record['id'] in native else 'pending','nativeHref':native.get(record['id']),'originalControlsVerified':False,'originalNumericsVerified':False}
results=[]
with ThreadPoolExecutor(max_workers=2) as pool:
 for f in as_completed([pool.submit(inspect,r) for r in manifest['files']]):
  try:results.append(f.result())
  except Exception as e:results.append({'inspection':'failed','reason':type(e).__name__})
  if len(results)%25==0:print('Inspected',len(results),'/',len(manifest['files']),flush=True)
results.sort(key=lambda r:r.get('source',''))
report={'method':'FFDec private script inspection; extracted control candidates require manual source/UI comparison','files':results,'inspected':sum(r['inspection']=='exported' for r in results),'total':len(manifest['files']),'failures':sum(r['inspection']=='failed' for r in results),'sliderCandidates':sum(len(r.get('sliderCandidates',[])) for r in results),'allOriginalControlsVerified':False,'allOriginalNumericsVerified':False}
(root/'docs/flash-control-inventory.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print('Written inventory:',report['inspected'],'files,',report['sliderCandidates'],'slider candidates,',report['failures'],'failures',flush=True)
