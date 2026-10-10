# Independent diagnostic interpreter: original AS bodies are dynamically scoped;
# production lexical JS programs are never read or evaluated here.
from pathlib import Path
import json,re,sys
ROOT=Path(__file__).resolve().parents[1]
z=(ROOT/'tools/optics-batch50b-reference.py').read_text();exec(z[:z.index('spec=json.loads')])
s=next(s for s in json.loads((ROOT/'src/native-optics-final69.json').read_text())if s['id']==sys.argv[1]);d=ROOT/'preview/private-scripts'/s['id']/'scripts'

def order(ps):
 out=[];pending=list(ps)
 while pending:
  p=next((p for p in pending if not(m:=re.search(r'class\s+\w+\s+extends\s+(\w+)',p.read_text()))or not any(q.stem==m[1]for q in pending)),pending[0]);out.append(p);pending.remove(p)
 return out

def ref3(src,main=False):
 name=re.search(r'class\s+(\w+)',src)[1];parent=re.search(r'class\s+\w+\s+extends\s+(\w+)',src);base=parent[1]if parent and not main else None
 out=emit(src,main)
 out=re.sub(r'(?<!function )(?<!new )\b(?:Sprite3D|MovieClip|Sprite|PolarizationState)\(', 'identity(',out)
 if base:
  out=out.replace('super(',base+'.call(this,').replace('super.',base+'.prototype.')
  # Calls through a parent method still retain the current object receiver.
  out=re.sub(re.escape(base)+r'\.prototype\.(\w+)\(',base+r'.prototype.\1.call(this,',out)
  out=out.replace('this.i=0;this.dist=0;', 'Object.assign(this,new Sprite());this.i=0;this.dist=0;')if base=='Sprite'else out
  out+='\nObject.setPrototypeOf('+name+'.prototype,'+base+'.prototype);'
 # Root timeline dynamic fields initialized in later frame methods must be present in scope.
 if main:
  dyn=set(re.findall(r'(?<![.:\w])([A-Za-z_]\w*)\s*=(?!=)',src))-set(re.findall(r'(?:var|const)\s+(\w+)',src))
  out=out.replace('this.i=0;this.dist=0;', 'this.i=0;this.dist=0;'+''.join('this.'+n+'=undefined;'for n in dyn))
 return out

def funcs(src):
 result=[]
 for m in re.finditer(r'function\s+(\w+)\s*\(([^)]*)\)\s*\{',src):
  pos=m.end();end=pos;depth=1;quote=None
  while depth:
   c=src[end]
   if quote:
    if c==quote and src[end-1]!='\\':quote=None
   elif c in ['"',"'"]:quote=c
   elif c=='{':depth+=1
   elif c=='}':depth-=1
   end+=1
  result.append((m[1],m[2],src[pos:end-1],m.start(),end))
 return result

def locals(b,args=''):return set(re.findall(r'\bvar\s+(\w+)',b))|set(re.findall(r'\w+',args))
def clean2(b):
 b=b.replace('_root.', 'AS2.root.').replace('eval(', 'AS2.lookup(').replace('setProperty(', 'AS2.setProperty(').replace('getProperty(', 'AS2.getProperty(').replace('duplicateMovieClip(', 'AS2.duplicateMovieClip(').replace('setInterval(', 'AS2.setInterval(').replace('clearInterval(', 'AS2.clearInterval(').replace('Me.Cursor = Cursors.WaitCursor;','')
 return b

def ref2class(src):
 cls=re.search(r'class\s+(\w+)',src)[1];base=re.search(r'class\s+\w+\s+extends\s+(\w+)',src);base=base[1]if base else None;ms=funcs(src);outside=src
 for m in reversed(ms):outside=outside[:m[3]]+outside[m[4]:]
 fields=re.findall(r'var\s+(\w+)(?:\s*=\s*([^;]+))?;',outside);code=''
 for n,args,b,*_ in ms:
  b=clean2(b);b=b.replace('super(',base+'.call(this,')if base else b
  if base:b=re.sub(r'super\.(\w+)\(',base+r'.prototype.\1.call(this,',b)
  scope='with(scopeOf(this,'+json.dumps(list(locals(b,args)))+')){'+b+'}'
  if n==cls:code+='function '+cls+'('+args+'){'+''.join('this.'+k+' = '+(v or'undefined')+';'for k,v in fields)+scope+'}\n'
  else:code+=cls+'.prototype.'+n+'=function('+args+'){'+scope+'};\n'
 if base:code+='Object.setPrototypeOf('+cls+'.prototype,'+base+'.prototype);\n'
 return code

if s['as3']:
 deps=list((d/'RayTracer').glob('*.as'))or list((d/'Sprite3D').glob('*.as'));deps=[p for p in deps if p.stem not in ['Graph_Tiny','KsSlider','KsCheckBox','KsButton']];code=''.join(ref3(p.read_text())for p in order(deps))+ref3(next(d.rglob('MainTimeline.as')).read_text(),True)+'var t=new MainTimeline();A.configure(t,SPEC);t.frame1();return t;'
else:
 ps=[p for p in (d/'__Packages').glob('*.as')if p.stem in ['Vector','Cam','DirObject','Cylinder','FillColor','Ellipse','PtObject','Polarizer','LineColor','Plate','Box','Pupil','Complex','SpecialFtn']];src='\n'.join(p.read_text()for p in sorted((d/'frame_1').glob('DoAction*.as')));ms=funcs(src);outside=src
 for m in reversed(ms):outside=outside[:m[3]]+outside[m[4]:]
 members=set(re.findall(r'(?<![.\w])([A-Za-z_]\w*)\s*(?:[+*/-]?=(?!=)|\+\+|--)',src))|set(re.findall(r'\bvar\s+(\w+)',outside))|{m[0]for m in ms}|{'plate1','plate2','remakeWave','position'}
 code=''.join(ref2class(p.read_text())for p in order(ps))+'var t=A.createRoot(SPEC);AS2.root=t;t.remakeWave=function(){};'+''.join('if(!('+json.dumps(n)+' in t))t.'+n+'=undefined;'for n in members)
 for n,args,b,*_ in ms:code+='t.'+n+'=function('+args+'){with(scopeOf(t,'+json.dumps(list(locals(b,args)))+')){'+clean2(b)+'}}.bind(t);\n'
 outside=re.sub(r'\bvar\s+(\w+)\s*;',r't.\1=undefined;',outside);outside=re.sub(r'\bvar\s+(\w+)\s*=',r't.\1=',outside)
 code+='(function(){with(t){'+clean2(outside)+'}}).call(t);return t;'
print('const scopeOf=(o,n)=>new Proxy(o,{has:(t,k)=>typeof k==="string"&&!n.includes(k)&&k in t}); return function(){'+code+'}')
