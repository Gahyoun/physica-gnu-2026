from pathlib import Path
import re,json,hashlib
ROOT=Path(__file__).resolve().parents[1];SRC=ROOT/'preview/private-scripts';H=lambda b:hashlib.sha256(b).hexdigest()
# Shared older capture is read solely to reuse its lexical scanner, not emitted modules.
z=(ROOT/'tools/optics-batch50b-capture.py').read_text();helpers=z[z.index('TOK='):z.index('specs=[];kernels={}')];helpers=helpers.replace("|{'i','dist'}","|{'i','dist'}|({'xDir','yDir','center'} if not main else set(re.findall(r'(?<![.:\\w])([A-Za-z_]\\w*)\\s*=(?!=)',s))-set(re.findall(r'(?:var|const)\\s+(\\w+)',s)))");exec(helpers)
rows=json.loads((ROOT/'docs/parallel-remaster-final69.json').read_text())['groups']['optics'];manifest=json.loads((ROOT/'src/flash-manifest.json').read_text())['files'];placements=json.loads((ROOT/'preview/optics-final69-placements.json').read_text())
labels={'bSlider':'구경 / 원본 눈금','aSlider':'두 광원 간격','lSlider':'파장 / nm','numSlider':'슬릿 수','spaceSlider':'슬릿 간격','wavelengthSlider':'파장 / 원본 눈금','fSlider':'초점 거리','lengthSlider':'길이 / µm','twistSlider':'비틀림 / °','neSlider':'이상 굴절률','noSlider':'정상 굴절률','pol1AngleSlider':'입사 편광판 / °','pol2AngleSlider':'출사 편광판 / °','lambdaSlider':'파장 / nm','zPosSlider':'관측 깊이 / µm'}
types={'aberComa2':'ray','aberSpherical4':'ray','phaseAberImage':'aberration','pupilSpherical':'pupil','rp2':'resolution','astigmatism':'astigmatism','totalref3':'total','fresnelshape':'fresnel','moireint4cs3':'moire','activity':'activity','disample':'birefringence','light_crystal':'crystal','faradayef':'faraday','kerrcell':'kerr','pockels':'pockels','stnsimV2':'stn','polarizer5':'polarizer','jonesmatrix':'jones','poincaresphereV3':'poincare','scattering':'scattering'}

def lexical(src,main=False):
 out=compile_class(src,main)
 cls=re.search(r'class\s+(\w+)(?:\s+extends\s+(\w+))?',src);parent=cls[2]
 if not main and parent:
  out=out.replace('class '+cls[1]+' {','class '+cls[1]+' extends '+parent+' {')
  out=out.replace('constructor(', 'constructor(',1);
  ctor=re.search(r'constructor\([^)]*\)\{',out)
  if ctor and not re.search(r'\bsuper\(',out[ctor.end():balanced(out,ctor.end()-1)[1]]):out=out[:ctor.end()]+'super();'+out[ctor.end():]
 if not main and not any(m['name']==cls[1]for m in methods(src)):pass
 # ActionScript class cast is an identity check rather than calling a JS class as a function.
 out=re.sub(r'(?<!new )\b(?:Sprite3D|MovieClip|Sprite|PolarizationState)\(',r'identity(',out)
 out=out.replace('getQualifiedClassName(', 'getQualifiedClassName(')
 return out

def as2methods(s):
 out=[]
 for m in re.finditer(r'function\s+(\w+)\s*\(([^)]*)\)\s*\{',s):
  body,end=balanced(s,m.end()-1);out.append(dict(name=m[1],args=m[2],body=body,start=m.start(),end=end,static=False,access=None))
 return out

def as2class(s):
 cl=re.search(r'class\s+(\w+)(?:\s+extends\s+(\w+))?',s);cls=cl[1];ms=as2methods(s);members=set(re.findall(r'\bvar\s+(\w+)',s[:ms[0]['start']]))|{m['name']for m in ms if m['name']!=cls}
 outside=s
 for m in reversed(ms):outside=outside[:m['start']]+outside[m['end']:]
 out=['class '+cls+(' extends '+cl[2]if cl[2]else'')+' {']+[n+' = '+v+';'for n,v in re.findall(r'var\s+(\w+)\s*=\s*([^;]+);',outside)]
 for m in ms:
  locals=set(re.findall(r'\bvar\s+(\w+)',m['body']))|set(re.findall(r'\w+',m['args']));body=prefix(m['body'],members,locals,cls,set());body=body.replace('duplicateMovieClip(', 'AS2.duplicateMovieClip(')
  out.append(('constructor'if m['name']==cls else m['name'])+'('+m['args']+'){'+body+'}')
 out.append('}');return '\n'.join(out)

def as2root(s,keys):
 ms=as2methods(s);members=set(keys)|{'plate1','plate2','remakeWave','position','lineUT','lineLT','vLine2'}|{m['name']for m in ms}|set(re.findall(r'(?<![.\w])([A-Za-z_]\w*)\s*(?:[+*/-]?=(?!=)|\+\+|--)',s))
 outside=s
 for m in reversed(ms):outside=outside[:m['start']]+outside[m['end']:]
 members|=set(re.findall(r'\bvar\s+(\w+)',outside))
 def clean(b,locals):
  # The original with() block only targets vector drawing; make its graphics receiver lexical.
  while (w:=re.search(r'with\(([^)]+)\)\s*\{',b)):
   body,end=balanced(b,w.end()-1);body=re.sub(r'(?<![.\w])('+ '|'.join(['clear','lineStyle','beginFill','endFill','moveTo','lineTo','curveTo']) +r')\(',w[1]+r'.\1(',body);b=b[:w.start()]+'{'+body+'}'+b[end:]
  b=prefix(b,members,locals,'',set()).replace('this.this.','this.')
  b=b.replace('eval(', 'AS2.lookup(').replace('setProperty(', 'AS2.setProperty(').replace('getProperty(', 'AS2.getProperty(').replace('duplicateMovieClip(', 'AS2.duplicateMovieClip(').replace('setInterval(', 'AS2.setInterval(').replace('clearInterval(', 'AS2.clearInterval(')
  for name in ['stop','play','gotoAndPlay','gotoAndStop']:b=re.sub(r'(?<![.\w])'+name+r'\(', 'this.'+name+'(',b)
  b=b.replace('_root.', 'this.').replace('Me.Cursor = Cursors.WaitCursor;','')
  return b
 out=[]
 for m in ms:
  locals=set(re.findall(r'\bvar\s+(\w+)',m['body']))|set(re.findall(r'\w+',m['args']));out.append('t.'+m['name']+' = function('+m['args']+'){'+clean(m['body'],locals)+'}.bind(t);')
 # Top-level declaration assignments are properties. Anonymous handlers retain their own evt parameters.
 outside=re.sub(r'\bvar\s+(\w+)\s*;',lambda m:'this.'+m[1]+' = undefined;',outside)
 outside=re.sub(r'\bvar\s+(\w+)\s*=',lambda m:'this.'+m[1]+' =',outside)
 out.append('(function(){'+clean(outside,{'evt'})+'}).call(t);');return '\n'.join(out)

def orderdeps(ps):
 out=[];pending=list(ps)
 while pending:
  chosen=next((p for p in pending if not (m:=re.search(r'class\s+\w+\s+extends\s+(\w+)',p.read_text()))or not any(q.stem==m[1]for q in pending)),pending[0]);out.append(chosen);pending.remove(chosen)
 return out

specs=[]
for row in rows:
 r=next(x for x in manifest if x['id']==row['id']);assert r['source']==row['source'];id=row['id'];name=row['source'].rsplit('/',1)[-1][:-4];d=SRC/id/'scripts';mp=next(d.rglob('MainTimeline.as'),None);as3=mp is not None;main=mp.read_text()if mp else '\n'.join(p.read_text()for p in sorted((d/'frame_1').glob('DoAction*.as')));ms=methods(main)if as3 else as2methods(main);controls=[];checks=[];buttons=[];propFiles=[]
 for m in ms:
  if not m['name'].startswith('__setProp_'):continue
  body=m['body'];c=re.search(r'(\w+)\["componentInspectorSetting"\]',body)
  if not c:continue
  clip=c[1];props={k:json.loads(v)if v.startswith('"')or v in ['true','false']else float(v)for k,v in re.findall(re.escape(clip)+r'\.(\w+) = ("[^"\n]*"|true|false|-?[\d.]+);',body)}
  if 'limitUpper'in props:controls.append(dict(clip=clip,label=labels.get(clip,props.get('text')or clip),min=props.get('limitLower',0),max=props['limitUpper'],step=props.get('incrementOrDigit',1)if props.get('isIncrement',True)else 10**-props.get('incrementOrDigit',0),value=props.get('value',0)))
  elif 'Chk'in clip:checks.append(dict(clip=clip,label=props.get('text')or clip,value=props.get('isChecked',False)))
  elif 'Btn'in clip:buttons.append(dict(clip=clip,label=props.get('textOFF')or clip,alternate=props.get('textON')or clip,toggle=props.get('isToggle',False),value=props.get('isON',False)))
 if not as3:
  for clip,p in placements[id].items():
   loc=next((a for a in (d/'frame_1').glob('PlaceObject*')if a.name.endswith('_'+str(p['depth']))),None)
   if not loc:continue
   propFiles.extend(loc.glob('*.as'));a='\n'.join(v.read_text()for v in loc.glob('*.as'));props={k:json.loads(v)if v.startswith('"')or v in ['true','false']else float(v)for k,v in re.findall(r'\b(\w+) = ("[^"\n]*"|true|false|-?[\d.]+);',a)}
   if 'limitUpper'in props:controls.append(dict(clip=clip,label=labels.get(clip,('제르니케 계수 '+clip.replace('SliderS',' · sin').replace('Slider',' · cos'))if clip.startswith('a')else '회절상 수'if clip=='numOfGraphSpinor'else clip),min=props.get('limitLower',0),max=props['limitUpper'],step=props.get('incrementOrDigit',1)if props.get('isIncrement',True)else 10**-props.get('incrementOrDigit',0),value=props.get('value',0)))
   elif 'textOFF'in props:buttons.append(dict(clip=clip,label=props.get('textOFF'),alternate=props.get('textON'),toggle=True,value=props.get('isON',False)))
 if name=='kerrcell'and not buttons:buttons=[dict(clip='startBtn',label='전기장 켜기',alternate='전기장 끄기',toggle=True)]
 if name=='totalref3':controls=[dict(clip='relN',label='상대 굴절률',min=1.2,max=3,step=.1,value=1.5,property='level')]
 if name=='activity':controls=[dict(clip='rotatoryP',label='회전능 / °',min=-100,max=100,step=1,value=60,property='level')]
 animated=name in ['aberComa2','aberSpherical4','totalref3','activity','light_crystal','stnsimV2','poincaresphereV3']
 spec=dict(id=id,title=row['title'],source=row['source'],sourceFile=name+'.swf',originalSource=row['source'],originalSHA256=row['originalSHA256'],lesson=r['lessons'][0],width=r['width'],height=r['height'],fps=r['frameRate'],type=types[name],as3=as3,animated=animated,controls=controls,checks=checks,buttons=buttons,placements=placements[id])
 sources=[]
 def record(p):sources.append(dict(path=str(p.relative_to(d)),sha256=H(p.read_bytes())));return p.read_text()
 for p in propFiles:record(p)
 head="import * as A from './optics-final69-adapter.mjs';\nconst {Sprite,Shape,MovieClip,Timer,Rectangle,LineScaleMode,CapsStyle,TimerEvent,MouseEvent,SliderEvent,int,uint,trace,identity,TextField,TextFormat,ColorTransform,Point,Matrix,GradientType,getQualifiedClassName,AS2,_X,_Y,_xscale,_rotation,_alpha,_width,stopDrag,startDrag}=A;\nconst SPEC="+json.dumps(spec,ensure_ascii=False)+";\n"
 if as3:
  deps=list((d/'RayTracer').glob('*.as'))or list((d/'Sprite3D').glob('*.as'));deps=[p for p in deps if p.stem not in ['Graph_Tiny','KsSlider','KsCheckBox','KsButton']]
  # Dependencies with parent classes must precede derived classes.
  deps=orderdeps(deps)
  k='\n'.join(lexical(record(p))for p in deps)
  code=head+'export function createTimeline(){\n'+k+'\n'+lexical(record(mp),True)+'\nconst t=new MainTimeline();A.configure(t,SPEC);t.frame1();return t;}\n'
 else:
  deps=[p for p in (d/'__Packages').glob('*.as')if p.stem in ['Vector','Cam','DirObject','Cylinder','FillColor','Ellipse','PtObject','Polarizer','LineColor','Plate','Box','Pupil','Complex','SpecialFtn']]
  deps=orderdeps(deps);k='\n'.join(as2class(record(p))for p in deps)
  for p in sorted((d/'frame_1').glob('DoAction*.as')):record(p)
  code=head+'export function createTimeline(){\n'+k+'\nconst t=A.createRoot(SPEC);AS2.root=t;t.remakeWave=()=>{};\n'+as2root(main,placements[id])+'\nreturn t;}\n'
  frame= d/'frame_2'/'DoAction.as'
  if frame.exists():record(frame);code+='export function originalFrameTick(t){(function(){'+as2root(frame.read_text(),placements[id]).replace('t.','this.')+'}).call(t);}\n' if name=='totalref3'else ''
 spec['sourceFiles']=sources;spec['programModule']='optics-final69-program-'+id+'.mjs';(ROOT/'assets'/spec['programModule']).write_text(code);specs.append(spec)
(ROOT/'src/native-optics-final69.json').write_text(json.dumps(specs,ensure_ascii=False,indent=2)+'\n');(ROOT/'assets/optics-final69-specs.mjs').write_text('export const opticsFinal69Specs='+json.dumps({'opticsfinal69-'+s['id']:s for s in specs},ensure_ascii=False,separators=(',',':'))+';\n');print('captured',len(specs))
