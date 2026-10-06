import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';
import {sceneSpecs,angularVector,sphericalPoint,projectScene} from '../assets/scene-physics.mjs';
import {chainSpecs,chainInitial,chainTrajectory} from '../assets/native-chain.mjs';
const root=new URL('../',import.meta.url),read=f=>JSON.parse(fs.readFileSync(new URL(f,root)));
const current=r=>{for(const [f,hash]of Object.entries(r.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL(f,root))).digest('hex'),hash,'Stale scene evidence '+f);};
test('Quantum vectors preserve length, z quantization, phase periodicity and the zero state',()=>{
 for(const l of [0,.5,1,1.5,2,3])for(let m=-l;m<=l;m++)for(let n=0;n<100;n++){
  const q=angularVector(l,m,45,n);assert.ok(Math.abs(Math.hypot(...q.position)/45-Math.sqrt(l*(l+1)))<1e-12);assert.equal(q.position[2],45*m);
  const wrap=angularVector(l,m,45,n+100);q.position.forEach((v,i)=>assert.ok(Math.abs(v-wrap.position[i])<1e-10));
 }
});
test('Spherical poles, full-turn azimuth and Flash upward projection are retained',()=>{
 assert.deepEqual(sphericalPoint(125,0,45),[0,0,125]);
 for(const r of [25,125,180])for(const t of [0,5,50,90,175,180])for(const p of [0,45,180,360,450]){
  const q=sphericalPoint(r,t,p);assert.ok(Math.abs(Math.hypot(...q)-r)<1e-10);sphericalPoint(r,t,p+360).forEach((v,i)=>assert.ok(Math.abs(v-q[i])<1e-10));
 }
 assert.deepEqual(projectScene([20,30,100],[[1,0,0],[0,1,0],[0,0,1]],1000),[20/.9,-30/.9,100]);
});
test('All ten-mass basis perturbations propagate with the original linear recurrence',()=>{
 for(const kind of ['chain10longitudinal','chain10transverse','chain10planar']){
  const spec=chainSpecs[kind],eq=chainInitial(spec);assert.equal(spec.n,10);assert.equal(spec.damping,.995);assert.equal(spec.fps,20);
  for(const dim of spec.mode===1?['y']:spec.mode===2?['x']:['x','y'])for(let i=0;i<10;i++)for(const amplitude of [-300,-1,1,300]){
   const initial=eq.map(p=>({...p}));initial[i][dim]+=amplitude;const result=chainTrajectory(initial,spec);let positions=initial.map((p,j)=>p[dim]-eq[j][dim]),velocities=Array(10).fill(0);
   for(let n=0;n<=2000;n++){
    result[n].forEach((p,j)=>{assert.ok(Math.abs(p[dim]-eq[j][dim]-positions[j])<1e-8);assert.ok(Math.abs(p[dim==='x'?'vx':'vy']-velocities[j])<1e-8);assert.equal(p[dim==='x'?'y':'x'],eq[j][dim==='x'?'y':'x']);});
    velocities=positions.map((v,j)=>.995*velocities[j]+((positions[j-1]||0)+(positions[j+1]||0)-2*v)/20);positions=positions.map((v,j)=>v+velocities[j]);
   }
  }
 }
});
test('New source and actual-runtime evidence stays separate and matches current models',()=>{
 const source=read('docs/scene-source-report.json'),runtime=read('docs/scene-runtime-report.json');current(source);current(runtime);
 assert.equal(source.results.length,13);assert.equal(runtime.files,16);assert.equal(runtime.comparisons,runtime.results.reduce((n,v)=>n+v.comparisons,0));
 for(const v of [...source.results,...runtime.results]){assert.equal(v.passed,true,v.type);assert.equal(v.fullEquivalence,false);assert.ok(v.scope);assert.ok(v.comparisons>0);}
 for(const v of runtime.results){assert.equal(v.sha256Verified,true);assert.deepEqual(v.mismatches,[]);assert.ok(v.controls.every(c=>c.passed));}
 for(const type of ['spin2','angularmomentum2']){const a=source.results.find(v=>v.type===type),b=runtime.results.find(v=>v.type===type);assert.equal(a.states,type==='spin2'?1000:1500);assert.equal(b.finiteInputCombinations.observed,type==='spin2'?10:15);assert.equal(b.finiteInputCombinations.complete,true);}
 assert.equal(runtime.results.find(v=>v.type==='sphericalcoord').sphericalPointerTuples,8);
});
test('New HTML controls have actual browser evidence including every planar bob',()=>{
 const r=read('docs/scene-ui-report.json');current(r);assert.equal(r.passed,true);assert.deepEqual(r.errors,[]);assert.equal(r.results.length,32);
 for(const width of [320,1360]){for(const s of Object.values(sceneSpecs)){const v=r.results.find(v=>v.id===s.id&&v.width===width);assert.ok(v);for(const key of ['keyboardCamera','pointerCamera','surfaceVisibility','csvFiniteCoordinates','defaultDrawingFits','passed'])assert.equal(v[key],true,s.type+' '+key);if(s.animated)assert.equal(v.validSliderTuples,s.type==='spin2'?10:15);if(s.type==='sphericalcoord')assert.equal(v.radiusAngleTuples,90);}
 for(const kind of ['chain10longitudinal','chain10transverse','chain10planar']){const chain=r.results.find(v=>v.type===kind&&v.width===width);assert.equal(chain.everyBobIndependent,true);assert.equal(chain.pointerMovesSelectedBob,true);assert.equal(chain.csvFiniteCoordinates,true);if(kind==='chain10planar')assert.equal(chain.everyBobIndependentXY,true);}}
});
