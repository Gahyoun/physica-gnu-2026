"""Independent numeric decoding of original XML placements. No drawing import."""
import json,xml.etree.ElementTree as E,math
from pathlib import Path
R=Path(__file__).resolve().parents[1];ss=json.load(open(R/'src/native-visionlaser-final69.json'));results=[]
for s in ss:
 x=E.parse(R/f"preview/visionlaser-final69-original/{s['id']}.xml").getroot();n=0;err=0;count=0
 def eq(a,b):
  global err,count
  count+=1;err=max(err,abs(a-b));assert abs(a-b)<1e-10,(s['id'],a,b)
 def compare(tags,expected):
  global n
  live={};step=0
  for tag in tags:
   typ=tag.get('type');depth=tag.get('depth')
   if typ.startswith('PlaceObject'):
    p=live.setdefault(depth,{'cid':0,'m':[1,0,0,1,0,0],'alpha':1})
    if tag.get('placeFlagHasCharacter')=='true':p['cid']=int(tag.get('characterId'))
    m=tag.find('matrix')
    if m is not None:p['m']=[float(m.get('scaleX','1')),float(m.get('rotateSkew0','0')),float(m.get('rotateSkew1','0')),float(m.get('scaleY','1')),int(m.get('translateX','0'))/20,int(m.get('translateY','0'))/20]
    c=tag.find('colorTransform')
    if c is not None:p['alpha']=int(c.get('alphaMultTerm','256'))/256
   if typ=='RemoveObject2Tag':live.pop(depth,None)
   if typ=='ShowFrameTag':
    assert set(live)==set(expected[step]);n+=1
    for d,p in live.items():
     q=expected[step][d];eq(p['cid'],q['cid']);eq(p['alpha'],q['alpha']);[eq(a,b)for a,b in zip(p['m'],q['m'])]
    step+=1
  eq(step,len(expected))
 if s['type']=='illusion':compare(x.find('tags'),s['poses'])
 elif s['type']=='laser':
  sprites={int(t.get('spriteId')):t for t in x.find('tags')if t.get('type')=='DefineSpriteTag'};compare(sprites[s['mainSprite']].find('subTags'),s['mainPoses'])
  for cid,tr in s['particleTracks'].items():compare(sprites[int(cid)].find('subTags'),tr)
 else:count=0
 results.append({'id':s['id'],'framesCompared':n,'comparisons':count,'maxAbsoluteError':err})
print(json.dumps(results))
