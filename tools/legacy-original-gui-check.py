#!/usr/bin/env python3
"""Probe cached original applets; no original binaries or screenshot pixels are published."""
import argparse, concurrent.futures, hashlib, json, pathlib, subprocess, time
parser=argparse.ArgumentParser();parser.add_argument('--configs',nargs='+',required=True);parser.add_argument('--report',required=True);parser.add_argument('--workers',type=int,default=3);parser.add_argument('--timeout',type=int,default=35);args=parser.parse_args()
repo=pathlib.Path(__file__).resolve().parents[1];runtime=pathlib.Path('/private/tmp/physica-original-gui');runtime.mkdir(exist_ok=True)
harness_hash=hashlib.sha256((repo/'tools/legacy-original-gui-reference/OriginalAppletProbe.java').read_bytes()).hexdigest()
subprocess.run(['/usr/bin/javac','-d',str(runtime),str(repo/'tools/legacy-original-gui-reference/OriginalAppletProbe.java')],check=True)
configs=[]
for name in args.configs:
 for x in json.load(open(name)):
  p=x.get('p',x).copy();p['cache']=x.get('cache',x.get('localDir'));p['sources']=x.get('sources',[x.get('source')]);configs.append(p)
def probe(c):
 ident=[c['codebase'],c['class'],c.get('archives',[]),c.get('parameters',{})];tag=hashlib.sha256(json.dumps(ident,sort_keys=True).encode()).hexdigest()[:16];out=pathlib.Path('/private/tmp/physica-gui80')/tag;out.mkdir(parents=True,exist_ok=True)
 root=pathlib.Path(c['cache']);params=c.get('parameters',{});urls=[root.as_uri()+'/']
 for jar in root.glob('*.jar'):urls.append(jar.as_uri())
 cmd=['/usr/bin/java']+(['-Xverify:none'] if c['class']=='Hologram1.class' else [])+['-cp',str(runtime),'OriginalAppletProbe',c['class'],';'.join(urls),params.get('width','600'),params.get('height','450'),str(out)]+[f'{k}={v}' for k,v in params.items()]
 start=time.monotonic()
 try:
  p=subprocess.run(cmd,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True,timeout=args.timeout)
  result=json.loads((out/'result.json').read_text()) if (out/'result.json').exists() else {'status':'blocked','error':'No result: '+p.stderr[-1200:]}
  result['runtimeDiagnostics']=p.stderr[-4000:]
  if 'Exception' in p.stderr or 'Error' in p.stderr:
   if result['status']=='passed':result['status']='partial';result['error']='Original runtime emitted errors; inspect diagnostics before claiming GUI parity.'
 except subprocess.TimeoutExpired as e:result={'status':'blocked','error':f'Original GUI exceeded {args.timeout}s; process terminated','runtimeDiagnostics':(e.stderr or b'').decode(errors='replace')[-4000:] if isinstance(e.stderr,bytes) else str(e.stderr or '')[-4000:]}
 if result.get('status')=='blocked' and (out/'progress.json').exists():result.update(json.loads((out/'progress.json').read_text()))
 if result.get('status')=='blocked' and (out/'controls.json').exists():
  result.update(json.loads((out/'controls.json').read_text()));result['status']='partial';result['partialReason']='GUI initialized, controls captured; input exploration exceeded runtime limit.'
 result.update({'class':c['class'],'verificationDisabled':c['class']=='Hologram1.class','codebase':c['codebase'],'sources':c['sources'],'parameters':params,'elapsedSeconds':round(time.monotonic()-start,2),'cacheClassHashes':{str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob('*.class')}})
 print(c['class'],result['status'],result.get('discreteCombinations',0),result.get('rangeBoundaryCases',0),flush=True)
 return result
with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as ex:results=list(ex.map(probe,configs))
report={'date':time.strftime('%Y-%m-%d'),'programConfigurations':len(results),'scope':'Actual original AWT/Swing applet GUI; finite choice/checkbox Cartesian product up to65536; slider min/mid/max/default; button actions. Text field and pointer gesture combinations are NOT exhaustive. Source/JVM numerical comparisons are separate.','harnessSha256':harness_hash,'results':results,'summary':{s:sum(r['status']==s for r in results) for s in ['passed','partial','blocked']}}
pathlib.Path(args.report).write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report['summary']),flush=True)
