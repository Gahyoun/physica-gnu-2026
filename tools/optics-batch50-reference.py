# Independent test-only AS3 calculation interpreter. No generated native methods imported.
from pathlib import Path
import json,re,sys
ROOT=Path(__file__).resolve().parents[1]
def parse(src):
 cls=re.search(r'class\s+(\w+)',src)[1];methods=[]
 pat=re.compile(r'(?:public|private|internal|protected)\s+(static\s+)?function\s+(?:(get|set)\s+)?(\w+)\s*\(([^)]*)\)(?:\s*:\s*[^\s{]+)?\s*\{')
 for m in pat.finditer(src):
  start=m.end();end=start;depth=1;quote=None
  while depth:
   ch=src[end]
   if quote:
    if ch==quote and src[end-1]!='\\':quote=None
   elif ch in ['"',"'"]:quote=ch
   elif ch=='{':depth+=1
   elif ch=='}':depth-=1
   end+=1
  methods.append((m.group(1),m.group(2),m.group(3),m.group(4),src[start:end-1],m.start(),end))
 outside=src
 for m in reversed(methods):outside=outside[:m[5]]+outside[m[6]:]
 fields=re.findall(r'(?:public|private|internal|protected)\s+(static\s+)?(?:var|const)\s+(\w+)\s*:\s*([\w.*<>]+)(?:\s*=\s*([^;]+))?;',outside)
 return cls,fields,methods
def jsbody(b):
 b=re.sub(r'\b(?:var|const)\s+(\w+)\s*:\s*[\w.*<>]+',r'var \1',b)
 b=re.sub(r'catch\((\w+)\s*:\s*\w+\)',r'catch(\1)',b)
 return re.sub(r'(?:\bsuper\(\);|\baddFrameScript\([^;]+;)','',b)
def emit(src,main=False):
 cls,fs,ms=parse(src);ctor=next(m for m in ms if m[2]==cls);args=re.sub(r'(\w+)\s*:\s*[\w.*<>]+',r'\1',ctor[3]);initial=[]
 for st,n,ty,v in fs:
  if st:continue
  d=v or ('0' if ty in ['Number','int','uint'] else 'false' if ty=='Boolean' else 'new Sprite()' if main and ty!='String' else 'null')
  initial.append('this.'+n+' = '+d+';')
 code='function '+cls+'('+args+'){'+('Object.assign(this,new Sprite());this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();' if main else '')+'this.i=0;this.dist=0;with('+cls+'){with(this){'+''.join(initial)
 if main:code+='for(var k of Object.getOwnPropertyNames('+cls+'.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);'
 code+=jsbody(ctor[4])+'}}}\n'
 if main:code+=cls+'.prototype=Object.create(Sprite.prototype);\n'
 access={}
 for st,ac,n,args,b,*_ in ms:
  if n==cls:continue
  fn='function('+re.sub(r'(\w+)\s*:\s*[\w.*<>]+',r'\1',args)+'){with('+cls+'){with(this){'+jsbody(b)+'}}}'
  target=cls if st else cls+'.prototype'
  if ac:access.setdefault((target,n),{})[ac]=fn
  else:code+=target+'.'+n+' = '+fn+';\n'
 for (target,n),props in access.items():code+='Object.defineProperty('+target+','+json.dumps(n)+',{'+','.join(a+':'+fn for a,fn in props.items())+'});\n'
 for st,n,ty,v in fs:
  if st:code+=cls+'.'+n+' = '+(v or '0')+';\n'
 return code
spec=json.loads((ROOT/'src/native-optics-batch50-rays.json').read_text());id=sys.argv[1];s=next(s for s in spec if s['id']==id);d=ROOT/'preview/private-scripts'/id/'scripts';files=sorted((d/'RayTracer').glob('*.as'))
code='return function createTimeline(){\n'+''.join(emit(p.read_text()) for p in files)+emit(next(d.rglob('MainTimeline.as')).read_text(),True)+'\nvar t=new MainTimeline();for(var [k,p]of Object.entries(SPEC.placements)){if(t[k])Object.assign(t[k],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(t.mk){t.mk.width=SPEC.width;t.mk.height=SPEC.height;}t.frame1();if(SPEC.authoredRayBounds)Object.assign(t.indexField.boundRect,SPEC.authoredRayBounds);return t;}';print(code)
