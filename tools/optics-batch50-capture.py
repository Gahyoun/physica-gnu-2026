"""Port the original optical calculation programs to JS; display is a new SVG renderer.
Private ActionScript stays outside publication. No SWF artwork, frame image or player is used.
"""
from pathlib import Path
import json,re,hashlib
ROOT=Path(__file__).resolve().parents[1]
SRC=ROOT/'preview/private-scripts'
NAMES='focallenssim1 focallenssim2 focalsphericalsim1 focalsphericalsim2 simlens1 simspherical1 focal2Thicklens1 focal2Thicklens2 focalThicklens1 focalThicklens2 sim2lens1 simThicklens1 focalellipsesim1 focalmirrorsim1 focalmirrorsim2 focalparabolasim1 simmirror1 toy_Mirage_physica toy_Lens toy_Fresnel'.split()
HASH=lambda s:hashlib.sha256(s.encode()).hexdigest()
rows=json.loads((ROOT/'docs/parallel-remaster-225.json').read_text())['groups']['optics']
TOK=re.compile(r'"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|//[^\n]*|/\*[\s\S]*?\*/|[A-Za-z_$][\w$]*|\s+|.',re.M)
def balanced(s,pos):
 depth=1;end=pos+1
 for t in TOK.finditer(s,pos+1):
  z=t.group()
  if z=='{':depth+=1
  if z=='}':depth-=1
  if depth==0:return s[pos+1:t.start()],t.end()
 raise ValueError('unbalanced')
def methods(s):
 out=[]
 for m in re.finditer(r'(public|private|internal|protected)\s+(static\s+)?function\s+(?:(get|set)\s+)?(\w+)\s*\(([^)]*)\)\s*:\s*[^\s{]+\s*\{|(public|private|internal)\s+function\s+(\w+)\s*\(([^)]*)\)\s*\{',s):
  name=m[4] or m[7];args=m[5] if m[4] else m[8];body,end=balanced(s,m.end()-1)
  out.append(dict(name=name,args=args,body=body,static=bool(m[2]),access=m[3],start=m.start(),end=end))
 return out
def fields(s,ms):
 # Exclude local vars in methods before examining fields.
 z=s
 for m in reversed(ms):z=z[:m['start']]+z[m['end']:]
 return [dict(static=bool(m[2]),name=m[3],type=m[4],value=m[5]) for m in re.finditer(r'(public|private|internal|protected)\s+(static\s+)?(?:var|const)\s+(\w+)\s*:\s*([\w.*<>]+)(?:\s*=\s*([^;]+))?;',z)]
def striptypes(s):
 s=re.sub(r'\b(var|const)\s+(\w+)\s*:\s*[\w.*<>]+',r'let \2',s)
 s=re.sub(r'catch\((\w+)\s*:\s*\w+\)',r'catch(\1)',s)
 s=re.sub(r'\bsuper\(\);','',s)
 s=re.sub(r'\baddFrameScript\([^;]+;', '',s)
 return s
def prefix(s,members,locals,cls,statics):
 ts=list(TOK.finditer(s));out=[]
 for i,t in enumerate(ts):
  z=t.group();prev=next((x.group() for x in reversed(ts[:i]) if not x.group().isspace()),'')
  if z in members and z not in locals and prev!='.':
   z=(cls+'.' if z in statics else 'this.')+z
  out.append(z)
 return ''.join(out)
def compile_class(s,main=False):
 cls=re.search(r'class\s+(\w+)',s)[1];ms=methods(s);fs=fields(s,ms);statics={f['name'] for f in fs if f['static']}|{m['name'] for m in ms if m['static']};members={f['name'] for f in fs}|{m['name'] for m in ms if m['name']!=cls}|({'width','height','stage','addChild','mouseX','mouseY'} if main else set())|{'i','dist'}
 out=['class '+cls+(' extends Sprite' if main else '')+' {']
 for f in fs:
  default='0' if f['type'] in ['Number','int','uint'] else 'false' if f['type']=='Boolean' else 'null'
  if main and f['type'] not in ['Number','int','uint','Boolean','String'] and not f['value']:default='new Sprite()'
  val=f['value'] or default;val=prefix(val,members,set(),cls,statics)
  out.append(('static ' if f['static'] else '')+f['name']+' = '+val+';')
 for m in ms:
  args=re.sub(r'(\w+)\s*:\s*[\w.*<>]+',r'\1',m['args'])
  locals=set(re.findall(r'(?:var|const)\s+(\w+)',m['body']))|set(re.findall(r'\b(param\d+)\b',args))|set(re.findall(r'catch\((\w+)',m['body']))
  body=prefix(striptypes(m['body']),members,locals,cls,statics)
  if m['name']==cls:
   name='constructor';pre='super();' if main else ''
   if main:pre+='this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);'
   body=pre+body
  else:name=('static ' if m['static'] else '')+(m['access']+' ' if m['access'] else '')+m['name']
  out.append(name+'('+args+'){'+body+'}')
 out.append('}')
 return '\n'.join(out)
specs=[];kernels={}
for r in rows:
 name=r['source'].rsplit('/',1)[-1][:-4]
 if name not in NAMES:continue
 directory=SRC/r['id']/'scripts';mp=next(directory.rglob('MainTimeline.as'));main=mp.read_text();dims=re.search(r'\[SWF\(width="(\d+)", height="(\d+)"',main)
 ms=methods(main);controls=[];buttons=[];checks=[]
 for m in ms:
  if not m['name'].startswith('__setProp_'):continue
  body=m['body'];clip=m['name'][10:].split('__')[0].rstrip('_')
  # Body references the component; robust to single versus double trailing underscores.
  clip=re.search(r'(\w+)\["componentInspectorSetting"\]',body)[1]
  props={k:json.loads(v) if v.startswith('"') or v in ['true','false'] else float(v) for k,v in re.findall(re.escape(clip)+r'\.(\w+) = ("[^"\n]*"|true|false|-?[\d.]+);',body)}
  if clip.endswith('Slider'):
   step=props.get('incrementOrDigit',1) if props.get('isIncrement',True) else 10**-props.get('incrementOrDigit',0)
   controls.append(dict(clip=clip,key=clip.removesuffix('Slider'),label=props.get('text') or clip.removesuffix('Slider'),min=props.get('limitLower',0),max=props.get('limitUpper',1),step=step,value=props.get('value',0)))
  elif 'Chk' in clip:checks.append(dict(clip=clip,label=props.get('text',clip),value=props.get('isChecked',False)))
  elif 'Btn' in clip:buttons.append(dict(clip=clip,label=props.get('textOFF',clip),alternate=props.get('textON',clip),toggle=props.get('isToggle',False)))
 # Additional authored buttons without component setup are still connected via events.
 fields0=fields(main,ms)
 for f in fields0:
  if f['type']=='KsButton' and not any(b['clip']==f['name'] for b in buttons):buttons.append(dict(clip=f['name'],label='재생' if f['name']=='startBtn' else f['name'],alternate='일시정지',toggle=f['name']=='startBtn'))
 kernelFiles=sorted((directory/'RayTracer').glob('*.as'));kernelText='\n'.join(p.read_text() for p in kernelFiles);kh=HASH(kernelText)[:16];kf='optics-batch50-kernel-'+kh+'.mjs'
 if kh not in kernels:
  code="import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, GradientType, Matrix, int, uint, trace } from './optics-batch50-adapter.mjs';\nexport function createKernel(){\n"+'\n'.join(compile_class(p.read_text()) for p in kernelFiles)+'\nreturn {'+','.join(p.stem for p in kernelFiles)+'};\n}\n'
  (ROOT/'assets'/kf).write_text(code);kernels[kh]=kf
 placements=json.loads((ROOT/'src/native-optics-batch50-placements.json').read_text()).get(r['id'],{}) if (ROOT/'src/native-optics-batch50-placements.json').exists() else {}
 spec=dict(placements=placements,id=r['id'],source=name+'.swf',originalSource=r['source'],title=r['title'],lesson=r['lessons'][0],width=int(dims[1]),height=int(dims[2]),animated=True,controls=controls,checks=checks,buttons=buttons,drag=any(m['name']=='dragObject' for m in ms),sourceSha256=hashlib.sha256(mp.read_bytes()).hexdigest(),kernelSha256=HASH(kernelText),kernelModule=kf,sourceFiles=[dict(path=str(p.relative_to(directory)),sha256=hashlib.sha256(p.read_bytes()).hexdigest()) for p in kernelFiles],methods=[m['name'] for m in ms if not m['name'].startswith('__')])
 # Original display bounds include the authored 1-pixel stage border (actual AVM2 read-only observation).
 if name=='toy_Lens':spec['authoredRayBounds']=dict(x=-310,y=-131,width=701,height=251)
 module='optics-batch50-program-'+r['id']+'.mjs';spec['programModule']=module
 code="import { Sprite, Shape, Timer, Rectangle, LineScaleMode, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest } from './optics-batch50-adapter.mjs';\nimport {createKernel} from './"+kf+"';\nconst SPEC="+json.dumps(spec,ensure_ascii=False)+";\nexport function createTimeline(){const {"+','.join(p.stem for p in kernelFiles)+"}=createKernel();\n"+compile_class(main,True)+"\nconst timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();"+("Object.assign(timeline.indexField.boundRect,SPEC.authoredRayBounds);" if 'authoredRayBounds' in spec else '')+"return timeline;}\n"
 (ROOT/'assets'/module).write_text(code);specs.append(spec)
(ROOT/'src/native-optics-batch50-rays.json').write_text(json.dumps(specs,ensure_ascii=False,indent=2)+'\n')
print(len(specs),'programs,',len(kernels),'kernel versions')

(ROOT/'assets/optics-batch50-specs.mjs').write_text('export const opticsBatch50Specs='+json.dumps({'opticsbatch50-'+s['id']:s for s in specs},ensure_ascii=False,separators=(',',':'))+';\n')
