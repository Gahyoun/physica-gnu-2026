"""Compare numeric scene data against private original FFDec SVG exports.

Export the five preserved SWFs with FFDec 26.3.0, -Djava.awt.headless=true,
-format frame:svg -export frame, into preview/nuclear50-original/<flash-id>.
Exported artwork is only a private reference; it is never deployed.
These are authored artwork/timeline checks, not ActionScript solver checks.
"""
import hashlib,json,re,xml.etree.ElementTree as E
from pathlib import Path
from datetime import datetime,timezone
root=Path(__file__).resolve().parents[1]
specs=json.loads((root/'src/native-nuclear-batch50-diagrams.json').read_text())
manifest={r['id']:r for r in json.loads((root/'src/flash-manifest.json').read_text())['files']}
ns={'s':'http://www.w3.org/2000/svg'}
cid='{https://www.free-decompiler.com/flash}characterId'
results=[]
for s in specs:
    r=manifest[s['id']]
    digest=hashlib.sha256((root/r['file']).read_bytes()).hexdigest()
    assert digest==r['sha256']
    directory=root/'preview/nuclear50-original'/s['id']
    comparisons=0
    def eq(x,y):
        global comparisons
        comparisons+=1
        assert abs(x-y)<1e-6,(s['type'],x,y)
    for n in range(1,r['frames']+1):
        tree=E.parse(directory/f'{n}.svg').getroot()
        uses=tree.find('s:g',ns).findall('s:use',ns)
        def mat(u):return list(map(float,re.findall(r'[-+]?\d*\.?\d+(?:[Ee][-+]?\d+)?',u.get('transform'))))
        if s['type']=='stopping':
            u=next(u for u in uses if u.get(cid)=='13');m=mat(u)
            for x,y in zip([m[4]+10*m[0],m[5]+10*m[3]],s['positions'][n-1]['projectile']):eq(x,y)
            electrons=[mat(u) for u in uses if u.get(cid)=='3']
            assert len(electrons)==len(s['positions'][n-1]['electrons'])
            for m,p in zip(electrons,s['positions'][n-1]['electrons']):
                for x,y in zip([m[4]+7*m[0],m[5]+8*m[3]],p):eq(x,y)
        elif s['type'] in ['gamma','yield','reactor']:
            keys=['21','24','33'] if s['type']=='yield' else ['5','6'] if s['type']=='reactor' else ['3','6']
            particles=[u for u in uses if u.get(cid) in keys]
            assert len(particles)==len(s['particleFrames'][n-1])
            for u,p in zip(particles,s['particleFrames'][n-1]):
                m=mat(u)
                expected=[m[4]+4*m[0],m[5]+4*m[3],4] if s['type']=='reactor' else [m[4],m[5],73*m[0]]
                for x,y in zip(expected,p[:3]):eq(x,y)
                assert p[3]==(u.get(cid)==keys[0])
        elif s['type']=='iter':
            # Both original button-selected views must remain inventoried.
            assert n in [1,2]
            eq(r['frames'],2)
    if s['type']=='yield':
        path=next(p for p in E.parse(directory/'1.svg').findall('.//s:path',ns) if p.get('stroke')=='#777700')
        ts=re.findall(r'[MLQZ]|[-+]?\d*\.?\d+',path.get('d'));i=0;points=[];cmd=None
        while i<len(ts):
            if ts[i].isalpha():cmd=ts[i];i+=1
            if cmd in ['M','L']:
                pos=list(map(float,ts[i:i+2]));points.append(pos);i+=2
            elif cmd=='Q':
                control=list(map(float,ts[i:i+2]));end=list(map(float,ts[i+2:i+4]));i+=4
                for j in range(1,33):
                    t=j/32
                    points.append([(1-t)**2*pos[k]+2*t*(1-t)*control[k]+t*t*end[k] for k in [0,1]])
                pos=end
            else:raise AssertionError(cmd)
        assert len(points)==len(s['curveSamples'])
        for a,b in zip(points,s['curveSamples']):
            for x,y in zip(a,b):eq(x,y)
    if s['type']=='iter':
        labels=' '.join(p.read_text() for p in (directory/'texts').glob('*.txt')).replace('--- RECORDSEPARATOR ---',' ')
        for label in ['Blanket Module','Vacuum Vessel','Cryostat','Toroidal Field Coil','Poloidal Field Coil','Centeral Solenoid','Divertor','Torus Cryopump','Port Plug']:
            assert label in labels;comparisons+=1
        assert 'Machine Gravity' in labels and 'Supports' in labels
        assert 'Outer Intercoil' in labels and 'Structure' in labels
        comparisons+=2
    results.append({'id':s['id'],'sha256':digest,'sha256Verified':True,'comparisons':comparisons,'framesCompared':r['frames'],'passed':True,'fullEquivalence':False,'scope':'Private original authored timeline placements and curve geometry. All listed particle positions/radii at each frame, original ITER two-view/component inventory. Fresh simplified circuit/ITER diagram geometry is intentionally different. Not an original runtime or solver-equivalence claim.'})
    print(s['type'],comparisons)
files=['src/native-nuclear-batch50-diagrams.json','assets/nuclear-batch50-diagrams-specs.mjs','assets/nuclear-batch50-diagrams-model.mjs','assets/native-nuclear-batch50-diagrams.mjs']
hashes={f:hashlib.sha256((root/f).read_bytes()).hexdigest() for f in files}
report={'date':datetime.now(timezone.utc).isoformat(),'files':5,'comparisons':sum(r['comparisons'] for r in results),'nativeModelHashes':hashes,'method':'Original authored SVG export numeric geometry versus fresh scene data; original artwork remains private. Native UI and actual runtime are separate evidence.','fullEquivalence':False,'results':results}
(root/'docs/nuclear-batch50-diagrams-source-report.json').write_text(json.dumps(report,indent=2)+'\n')
