import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {expansionSpecs,structureData,structureFaces,defaults,filmValue,filmLayers,polarization,moleculeState,colorValue,angularState,waveValue,moireGeometry} from '../assets/expansion-physics.mjs';
const near=(a,b,eps=1e-9)=>assert.ok(Math.abs(a-b)<eps,`${a} vs ${b}`),spec=t=>Object.values(expansionSpecs).find(s=>s.type===t);
test('fifty distinct source-backed files have matching catalogue reading targets and evidence',()=>{const ss=Object.values(expansionSpecs),catalog=JSON.parse(fs.readFileSync(new URL('../assets/flash-catalog.json',import.meta.url))),report=JSON.parse(fs.readFileSync(new URL('../docs/expansion-source-report.json',import.meta.url)));assert.equal(ss.length,50);assert.equal(new Set(ss.map(s=>s.id)).size,50);assert.equal(report.files,50);for(const [kind,s] of Object.entries(expansionSpecs)){assert.equal(catalog.files.find(r=>r.id===s.id).nativeHref,'lesson-'+s.lesson+'.html#native-'+kind);const r=report.results.find(r=>r.id===s.id);assert.ok(r.passed&&r.comparisons>0);assert.equal(r.sourceRuntimeExhaustive,false);assert.equal(r.sha256,s.sha256);}});
test('lossless dielectric matrix conserves energy across all six thin-film families',()=>{for(const s of Object.values(expansionSpecs).filter(s=>s.group==='film')){const p=defaults(s);for(let wl=300;wl<=800;wl+=7){const a=filmValue(s.type,p,wl);near(a.R+a.T,1,1e-11);assert.ok(a.R>=0&&a.R<=1+1e-11&&a.T>=0&&a.T<=1+1e-11);}}});
test('quarter-wave pair stack increases reflection at the design wavelength',()=>{const p=defaults(spec('multilayer4'));const a=filmValue('multilayer4',{...p,layers:1},550),b=filmValue('multilayer4',{...p,layers:10},550);assert.ok(b.R>a.R&&b.R>.999);assert.equal(filmLayers('multilayer31',{...defaults(spec('multilayer31')),layers:30}).length,60);});
test('electric and magnetic fields are perpendicular with equal drawing magnitude',()=>{for(const t of ['xpol','ypol','rightcircular','leftcircular','emwave','emwave2'])for(const n of [0,1,5,17,51,100]){const p=defaults(spec(t)),v=polarization(t,p,n,173);near(v.E[0]*v.B[0]+v.E[1]*v.B[1],0,1e-8);near(Math.hypot(...v.E),Math.hypot(...v.B));}});
test('quarter-wave slab is continuous at its entrance and exit',()=>{const p=defaults(spec('qwpx'));for(const x of [50,50+p.thickness])for(let n=0;n<=10;n++){const a=polarization('qwpx',p,n,x-1e-8),b=polarization('qwpx',p,n,x+1e-8);a.E.forEach((v,i)=>near(v,b.E[i],1e-6));}});
test('source molecular modes and unequal masses preserve their constraints',()=>{for(let n=0;n<=1000;n++){const a=moleculeState('springmot1xy',{},n);near((a.positions[0][0]*3+a.positions[1][0])/4,a.centre);const b=moleculeState('laser_CO2',{mode:1},n);near(b.positions[0][0],-b.positions[2][0]);near(b.positions[1][0],0);const c=moleculeState('laser_CO2N2',{},n);near(c.positions[0][0]+c.positions[1][0],0);}});
test('fixed and free end signs yield the source boundary conditions',()=>{for(let shape=0;shape<4;shape++)for(let n=0;n<=136;n++){const a=waveValue('reflect1',{shape},n,0),b=waveValue('reflect2',{shape},n,0);near(a[2],0);near(b[2],2*b[0]);}const p=defaults(spec('super1'));for(let n=0;n<=70;n+=.25)for(let x=-300;x<=300;x+=15){const a=waveValue('super1',p,n,x);near(a[0]+a[1],a[2]);}});
test('angular orbit radii remain invariant',()=>{for(const t of ['angularenergy','angularmomentum','angulargyro'])for(let n=0;n<=720;n++){const a=angularState(t,n);a.positions.forEach((v,i)=>near(Math.hypot(...v),a.radii[i]));}});
test('colour channel boundary values and HSV hue wrap are exact',()=>{assert.deepEqual(colorValue('RGBmodel',{r:0,g:0,b:0}),[0,0,0]);assert.deepEqual(colorValue('CMYmodel',{c:0,m:0,y:0}),[255,255,255]);assert.deepEqual(colorValue('CMYmodel',{c:255,m:255,y:255}),[0,0,0]);assert.deepEqual(colorValue('HSVmodel',{h:1,s:1,v:1}),[255,0,0]);assert.deepEqual(colorValue('HSVmodel',{h:.5,s:0,v:.5}),[128,128,128]);});
test('crystal coordinate data remain finite and contain distinct species',()=>{for(const d of Object.values(structureData))for(const v of d.nodes)assert.ok(v.p.every(Number.isFinite));assert.equal(new Set(structureData.ZnS_diamondp.nodes.map(v=>v.species)).size,2);assert.equal(structureData.al2o3_rubby.nodes.filter(v=>v.species==='Cr').length,1);});
test('runtime-discovered calcite atoms and legacy Ruby outline remain present',()=>{
 assert.equal(structureData.calcite.nodes.length,66);assert.equal(structureData.calcite.lines.length,55);
 assert.equal(structureData.al2o3_rubby.lines.length,48);assert.equal(structureData.al2o3_rubby.faces.length,2);
 assert.equal(structureData.wavevector.lines.filter(l=>l.type==='arrow').length,4);
 for(const t of ['calcite','al2o3_rubby'])assert.ok(structureData[t].lines.every(l=>l.pts.length===2));
});
test('diamond-family bonds end at the source atom clearance rather than atom centres',()=>{
 for(const [t,clearance]of [['diamond2',10],['diamond3p',3.5],['ZnS_diamondp',5]]){
  const d=structureData[t];for(const line of d.lines)for(const p of line.pts)near(Math.min(...d.nodes.map(n=>Math.hypot(...p.map((v,i)=>v-n.p[i])))),clearance);
 }
});
test('plane wave advances normal to the planes and wraps its source 20-step cycle',()=>{
 const a=structureFaces('wavefronta',0),b=structureFaces('wavefronta',1),s=spec('wavefronta');
 assert.equal(s.animated,true);assert.equal(s.rate,s.sourceFrameRate/2);
 for(let i=0;i<22;i++){
  const delta=b[i][0].map((v,j)=>v-a[i][0][j]),tangent=a[i][2].map((v,j)=>v-a[i][0][j]);
  near(Math.hypot(...delta),1);near(delta.reduce((n,v,j)=>n+v*tangent[j],0),0,1e-10);
 }
 assert.deepEqual(structureFaces('wavefronta',20),a);assert.deepEqual(structureFaces('wavefronta',21),b);
 assert.deepEqual(structureFaces('wavevector',19),structureData.wavevector.faces);
});
test('geometric moire controls vary pattern rather than treating coverage as optical intensity',()=>{const s=spec('moireint4'),p=defaults(s);assert.equal(moireGeometry(s.type,{...p,count:10}).sources.length,10);assert.equal(moireGeometry('moire3',{divisions:105}).polys.length,205);assert.notDeepEqual(moireGeometry('moire3',{divisions:105},0).polys,moireGeometry('moire3',{divisions:105},10).polys);});

test('free end preserves original amplitude 48 while fixed end uses 50',()=>{near(waveValue('reflect2',{shape:1},48,0)[0],48);near(waveValue('reflect2',{shape:1},48,0)[2],96);near(waveValue('reflect1',{shape:1},48,0)[0],50);near(waveValue('reflect1',{shape:1},48,0)[2],0);});
