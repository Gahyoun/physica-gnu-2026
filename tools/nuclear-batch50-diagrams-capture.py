"""Capture numeric authored placements from private FFDec frame exports.

Uses preview/nuclear50-original; deploys only numeric JSON specifications.
Run from the repository root after the headless SVG export described in
nuclear-batch50-diagrams-source-check.py. No original image is deployed.
"""
import json,xml.etree.ElementTree as E,re,math
N={'s':'http://www.w3.org/2000/svg'};cid='{https://www.free-decompiler.com/flash}characterId'
def root(id,n):return E.parse(f'preview/nuclear50-original/{id}/{n}.svg').getroot()
def matrix(u):return [float(x) for x in re.findall(r'[-+]?\d*\.?\d+(?:[Ee][-+]?\d+)?',u.get('transform',''))]
def uses(id,n):return root(id,n).find('s:g',N).findall('s:use',N)
a='flash-f98f67fb2483d843';frames=[]
for n in range(1,121):
 us=uses(a,n);b=next(u for u in us if u.get(cid)=='13');m=matrix(b);es=[]
 for u in us:
  if u.get(cid)=='3':
   t=matrix(u);es.append([round(t[4]+7*t[0],5),round(t[5]+8*t[3],5)])
 frames.append({'projectile':[round(m[4]+10*m[0],5),round(m[5]+10*m[3],5)],'electrons':es})
g='flash-a85b993cc859a8e7';balls=[]
for u in uses(g,1):
 if u.get(cid) in ['3','6']:
  t=matrix(u);balls.append([t[4],t[5],round(73*t[0],5),u.get(cid)=='3'])
f='flash-d9b2ee521a3d507e';paths=root(f,1).findall('.//s:path',N);p=next(p for p in paths if p.get('stroke')=='#777700').get('d');tokens=re.findall('[MLQZ]|[-+]?\d*\.?\d+',p);i=0;pos=None;curve=[]
while i<len(tokens):
 cmd=tokens[i] if tokens[i].isalpha() else cmd
 if tokens[i].isalpha():i+=1
 if cmd=='M':pos=[float(tokens[i]),float(tokens[i+1])];i+=2;curve.append(pos)
 elif cmd=='Q':
  c=[float(tokens[i]),float(tokens[i+1])];q=[float(tokens[i+2]),float(tokens[i+3])];i+=4
  for j in range(1,33):
   t=j/32;curve.append([(1-t)**2*pos[k]+2*(1-t)*t*c[k]+t*t*q[k]for k in range(2)])
  pos=q
 elif cmd=='L':pos=[float(tokens[i]),float(tokens[i+1])];i+=2;curve.append(pos)
 else:raise Exception(cmd)
curve=[[round(x,7),round(y,7)]for x,y in curve]
manifest={r['id']:r for r in json.load(open('src/flash-manifest.json'))['files']};configs=[]
for id,typ in [('flash-1cb9e93772e898a6','iter'),('flash-9500e9cfc1d0ee73','reactor'),(a,'stopping'),(g,'gamma'),(f,'yield')]:
 r=manifest[id];s={'id':id,'type':typ,'source':r['source'].split('/')[-1],'originalSource':r['source'],'title':r['titles'][0],'lesson':r['lessons'][0],'animated':typ!='iter','fps':r['frameRate'],'max':r['frames']-1,'controls':[]}
 if typ=='stopping':s['positions']=frames;s['width']=350;s['height']=180
 if typ in ['gamma','yield','reactor']:
  poses=[]
  for n in range(1,13):
   ps=[]
   for u in uses(id,n):
    c=u.get(cid);t=matrix(u)
    if typ=='gamma' and c in ['3','6']:ps.append([t[4],t[5],round(73*t[0],5),c=='3'])
    elif typ=='yield' and c in ['21','24','33']:ps.append([t[4],t[5],round(73*t[0],5),c=='21'])
    elif typ=='reactor' and c in ['5','6']:ps.append([t[4]+4*t[0],t[5]+4*t[3],4,c=='5'])
   poses.append(ps)
  s['particleFrames']=poses
 if typ=='yield':s['curveSamples']=curve
 configs.append(s)
json.dump(configs,open('src/native-nuclear-batch50-diagrams.json','w'),ensure_ascii=False,indent=2);print('120 alpha states',len(balls),'gamma display spheres',len(curve),'yield knots')
