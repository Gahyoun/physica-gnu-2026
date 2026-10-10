"""Capture only numeric authored pose data; private shape paths/bitmaps never ship."""
import json,xml.etree.ElementTree as E,math,hashlib
from pathlib import Path
R=Path(__file__).resolve().parents[1]
manifest={r['id']:r for r in json.load(open(R/'src/flash-manifest.json'))['files']}
batch=json.load(open(R/'docs/parallel-remaster-final69.json'))['groups']['visionlaser']

def timeline(tags):
 state={};out=[]
 for t in tags:
  ty=t.get('type');d=int(t.get('depth',0))
  if ty in ['PlaceObject2Tag','PlaceObject3Tag']:
   z=state.get(d,{'cid':0,'m':[1,0,0,1,0,0],'alpha':1}).copy()
   if t.get('placeFlagHasCharacter')=='true':
    z['cid']=int(t.get('characterId'));z['born']=len(out)
   m=t.find('matrix')
   if m is not None:z['m']=[float(m.get('scaleX',1)),float(m.get('rotateSkew0',0)),float(m.get('rotateSkew1',0)),float(m.get('scaleY',1)),float(m.get('translateX',0))/20,float(m.get('translateY',0))/20]
   a=t.find('colorTransform')
   if a is not None:z['alpha']=int(a.get('alphaMultTerm',256))/256
   if t.get('name'):z['name']=t.get('name')
   state[d]=z
  elif ty=='RemoveObject2Tag':state.pop(d,None)
  elif ty=='ShowFrameTag':out.append({str(k):v.copy()for k,v in sorted(state.items())})
 return out
rows=[]
for b in batch:
 r=manifest[b['id']];x=E.parse(R/f"preview/visionlaser-final69-original/{r['id']}.xml").getroot();tags=list(x.find('tags'));defs={int(t.get('spriteId')or t.get('shapeId')or t.get('characterId')or 0):t for t in tags if t.get('type','').startswith('Define')};root=timeline(tags)
 s={**b,'sourceFile':r['source'].split('/')[-1],'lesson':r['lessons'][0],'fps':r['frameRate'],'width':r['width'],'height':r['height'],'controls':[],'animated':True}
 if 'illusion' in s['sourceFile']:
  s['type']='illusion';s['number']=int(s['sourceFile'][8:10]);s['max']=len(root)-1;s['poses']=root
  s['descriptions']={1:'斜선 배경을 걷어 내면 세로선이 평행함을 확인할 수 있습니다.',2:'주변 평행사변형을 걷어 내고 두 선분을 나란히 비교합니다.',3:'주변 고리의 크기가 달라도 가운데 원의 지름은 같습니다.',4:'원근 배경을 걷어 내면 두 가로선의 길이가 같습니다.',5:'가림판을 없애면 끊겨 보이던 선이 연결되어 있습니다.',6:'주변 원판을 걷어 내면 실제로 그리지 않은 삼각형이 사라집니다.',7:'가로·세로 줄무늬를 걷어 내고 같은 크기의 외곽을 비교합니다.',8:'밝고 어두운 줄무늬 아래 바탕은 같은 색입니다.',9:'가려진 원과 주변 원을 분리해 같은 곡률을 확인합니다.',10:'방사형 배경을 걷어 내면 세로선은 평행합니다.',11:'동심원 배경을 걷어 내면 대상은 정사각형입니다.',12:'원근 배경을 걷어 내면 대상은 정사각형입니다.',13:'원근 배경을 걷어 내고 세 물체의 같은 높이를 비교합니다.',14:'접힌 도형을 걷어 내고 두 기준선의 길이를 비교합니다.',15:'화살촉을 걷어 내고 두 선분의 같은 길이를 비교합니다.',16:'주변 원의 크기가 달라도 가운데 두 원의 크기는 같습니다.'}[s['number']].replace('斜선','빗금')
 elif 'laser' in s['sourceFile']:
  s['type']='laser';s['levels']=int(s['sourceFile'][5]);main=next(t for t in defs.values()if t.get('type')=='DefineSpriteTag'and int(t.get('frameCount'))>100);mainframes=timeline(list(main.find('subTags')));s['max']=len(mainframes)-1;s['mainSprite']=int(main.get('spriteId'));s['mainMatrix']=next(z['m']for z in root[0].values()if z['cid']==s['mainSprite']);s['mainPoses']=mainframes
  particleIDs=[]
  for cid,t in defs.items():
   if t.get('type')!='DefineSpriteTag':continue
   child=list(t.find('subTags'));ids={int(a.get('characterId',0))for a in child if a.get('type')=='PlaceObject2Tag' and a.get('placeFlagHasCharacter')=='true'}
   # Sphere sprite subtrees, excluding arrows/labels and main timeline.
   if cid not in [s['mainSprite']] and ids and all(i in [1,2,3,4,5,6]for i in ids):particleIDs.append(cid)
  # Authored sphere symbols include separately tweened wrappers around those same balls.
  for cid,t in defs.items():
   if t.get('type')=='DefineSpriteTag' and cid!=s['mainSprite']:
    ids={int(a.get('characterId',0))for a in t.find('subTags')if a.get('type')=='PlaceObject2Tag' and a.get('placeFlagHasCharacter')=='true'}
    if ids and ids.issubset(set(particleIDs)|{1,2,3,4,5,6}):particleIDs.append(cid)
  s['particleIDs']=sorted(set(particleIDs));s['particleTracks']={str(cid):timeline(list(defs[cid].find('subTags')))for cid in s['particleIDs']};s['descriptions']='전자와 펌핑·준위 전이를 새 벡터 도식으로 표현합니다. 입자 수는 원본의 모식도이며 실제 정상상태 점유율은 아닙니다.'
 elif 'maser' in s['sourceFile']:
  s['type']='maser';s['max']=500;s['matrix']=[.5815,0,0,.5815,129.25,77.85];s['period']=50;s['amplitude']=100;s['descriptions']='암모니아 분자의 질소가 세 수소의 평면을 사이에 두고 반전합니다. 원본의 50단계 주기와 좌표 눈금을 따릅니다.'
 else:
  import re
  svg=E.parse(R/f"preview/visionlaser-final69-original/{r['id']}/1.svg").getroot();curves=[]
  for c in ['#6600cc','#00cc00','#ff0000']:
   d=next(t.get('d') for t in svg.iter() if t.tag.endswith('path') and t.get('stroke')==c);tokens=re.findall('[MLQZ]|[-+]?\\d*\\.?\\d+',d);pts=[];i=0;cmd='M';pos=[0,0]
   while i<len(tokens):
    if tokens[i].isalpha():cmd=tokens[i];i+=1
    if cmd in ['M','L']:pos=[float(tokens[i]),float(tokens[i+1])];pts.append(pos);i+=2
    elif cmd=='Q':
     ctrl=[float(tokens[i]),float(tokens[i+1])];end=[float(tokens[i+2]),float(tokens[i+3])];i+=4
     for j in range(1,17):
      t=j/16;pts.append([round((1-t)**2*pos[k]+2*(1-t)*t*ctrl[k]+t*t*end[k],7) for k in range(2)])
     pos=end
    else:break
   curves.append(pts)
  s['curveSamples']=curves
  s['type']='cones' ;s['animated']=False;s['max']=0;s['descriptions']='파장별 세 원추세포 감도와 원본의 파장–RGB 대응을 살펴봅니다. 감도 곡선은 원본 도식이며 정밀 생리학 데이터가 아닙니다.'
 rows.append(s)
json.dump(rows,open(R/'src/native-visionlaser-final69.json','w'),ensure_ascii=False,indent=2)
slim={}
for row in rows:
 heavy=['poses','mainPoses','particleTracks','curveSamples'];data={k:row[k] for k in heavy if k in row};light={k:v for k,v in row.items() if k not in heavy}
 if data:
  light['dataModule']='visionlaser-final69-data-'+row['id']+'.mjs';(R/'assets'/light['dataModule']).write_text('export const data='+json.dumps(data,ensure_ascii=False,separators=(',',':'))+';\n')
 slim['visionlaser-final69-'+row['id']]=light
(R/'assets/visionlaser-final69-specs.mjs').write_text('export const visionlaserFinal69Specs='+json.dumps(slim,ensure_ascii=False,separators=(',',':'))+';\n')
print('Numeric pose capture',len(rows),'No source artwork paths shipped')
