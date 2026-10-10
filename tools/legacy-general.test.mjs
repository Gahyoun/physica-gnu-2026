import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {collisionModels,collisionInitial,collisionStep,collisionTotals,sourceBessel,membraneState,membraneRoots,rippleState,dopplerState,standingWaveState,fieldInitial,fieldStep,fieldSummary} from '../assets/legacy-general-physics.mjs';
const close=(a,b,tolerance=1e-9)=>assert.ok(Math.abs(a-b)<tolerance,`${a} != ${b}`);
const specs=JSON.parse(fs.readFileSync(new URL('../src/legacy-general.json',import.meta.url)));
test('general legacy catalog has 15 Java identities and two p5 identities with checked source hashes',()=>{
 assert.equal(specs.length,17);assert.equal(new Set(specs.map(s=>s.id )).size,17);
 assert.equal(specs.filter(s=>s.provenance.format==='java-applet').length,15);
 for(const s of specs){assert.match(s.provenance.sha256,/^[a-f0-9]{64}$/);assert.match(s.verificationStatus,/original-runtime-pending/);assert.match(s.lessonId,/^[1-4]-/);}
});
for(const model of Object.keys(collisionModels))test(`${model}: real movement, reproducible seed, finite state at parameter corners`,()=>{
 const p={speed:50,mass:1,y:70,angle:10},start=collisionInitial(model,p,15),copy=collisionInitial(model,p,15);assert.deepEqual(start,copy);
 let state=start;for(let i=0;i<100;i++)state=collisionStep(state,model,p);
 assert.ok(state.some((b,i)=>Math.hypot(b.x-start[i].x,b.y-start[i].y)>.01));
 for(const b of state)for(const key of ['x','y','vx','vy','m'])assert.ok(Number.isFinite(b[key]));
 const other=collisionInitial(model,{mass:99,speed:150,angle:80,y:260},999);
 for(const b of collisionStep(other,model,{mass:99,friction:true,gravity:true,recoil:0}))for(const key of ['x','y','vx','vy'])assert.ok(Number.isFinite(b[key]));
});
test('source overlap force conserves pair total momentum before wall contact',()=>{
 const state=[{x:100,y:75,r:35,m:25,vx:50,vy:0},{x:160,y:75,r:35,m:75,vx:-5,vy:0}];
 const before=collisionTotals(state),after=collisionTotals(collisionStep(state,'Collision2D12'));
 close(before.px,after.px,1e-8);close(after.py,0);
});
test('source projectile uses gravity 9.8 and semi-implicit dt .005 × 10',()=>{
 const initial=collisionInitial('Collision2D11',{speed:75,angle:60})[0],after=collisionStep([initial],'Collision2D11')[0];
 close(after.x,50+initial.vx*.05);close(after.vy,initial.vy+9.8*.05);
 close(after.y,300+initial.vy*.05+9.8*.005*.005*55);
});
test('source bounce uses square root of energy restitution for both velocity components',()=>{
 const b={x:100,y:316,r:30,m:10,vx:20,vy:10},after=collisionStep([b],'Collision2D111',{recoil:.25,gravity:false})[0];
 close(after.vx,10);close(after.vy,-5);close(after.x,102);close(after.y,315);
});
test('mass estimation has a unique permutation of 50..300 and hides no physical mass from model state',()=>{
 assert.deepEqual(collisionInitial('Collision2DK',{},22).map(b=>b.m).sort((a,b)=>a-b),[50,100,150,200,250,300]);
});
test('equipartition reproduces source kinetic-energy regulation',()=>{
 const start=collisionInitial('Collision2DKG'),target=collisionTotals(start).kinetic;
 const after=collisionStep(start,'Collision2DKG',{targetKinetic:target});close(collisionTotals(after).kinetic,target,1e-8);
});
test('source Bessel series keeps its non-normalized m! amplitude',()=>{
 close(sourceBessel(0,0),1);close(sourceBessel(1,0),0);close(sourceBessel(2,1),.229806969863801,1e-12);
 for(let m=0;m<4;m++)for(let n=0;n<4;n++)assert.ok(Math.abs(sourceBessel(m,membraneRoots[m][n]))<.0002);
});
for(const model of ['d2wave3p','d2wave3'])test(`${model}: distinct source amplitude, phase, rotation and frequency`,()=>{
 const a=membraneState(model,2,1,.4,.3,0),b=membraneState(model,2,1,.4,.3,50);close(a.z,0);assert.notEqual(b.z,0);
 close(b.frequency,membraneRoots[2][1]/membraneRoots[0][0]*(model==='d2wave3'?100:1));close(b.rotation,model==='d2wave3p'?.5:.15);
 for(let m=0;m<4;m++)for(let n=0;n<4;n++)assert.ok(Number.isFinite(membraneState(model,m,n,1,.7,400).z));
});
test('ripple symmetry and phase give expected constructive/destructive interference',()=>{
 const s=rippleState(200,130,{wavelength:60,separation:100,step:0});close(s.difference,0);close(s.intensity,4);
 close(rippleState(200,130,{wavelength:60,separation:100,step:60}).y1,s.y1);
});
test('moving source uses exact p5 scale, wave emission centres and Doppler wavelengths',()=>{
 const s=dopplerState('doppler1',{frequency:200,velocity:150,step:40});close(s.time,.02);close(s.sourceX,330);assert.equal(s.waves.length,4);
 close(s.waves[1].x,307.5);close(s.waves[1].r,51);close(s.leftWavelength,2.45);close(s.rightWavelength,.95);
});
test('moving observer crosses source and changes received frequency without changing wavelength',()=>{
 const before=dopplerState('doppler2',{frequency:200,velocity:399,step:50}),after=dopplerState('doppler2',{frequency:200,velocity:399,step:170});
 assert.ok(before.observerX<300&&after.observerX>300);assert.ok(before.observedFrequency>200);assert.ok(after.observedFrequency>0&&after.observedFrequency<200);close(before.wavelength,after.wavelength);close(after.time,.0425);
});
test('closed pipe keeps original integer wavelength division and temporal phase',()=>{
 const s=standingWaveState('resonan1',400,{mode:3,step:10});assert.equal(s.wavelength,320);close(s.pressure,-25*Math.sin(6.2831852*5*20/1600*10)*Math.cos(6.2831852*400/320));
 close(standingWaveState('resonan1',0,{mode:1,step:10}).displacement,0);
 assert.equal(standingWaveState('resonan1',10,{mode:7}).wavelength,123);
});
test('string keeps source wave phase and independently rounded audible wavelength/frequency',()=>{
 const s=standingWaveState('string1',100,{mode:2,length:400,step:10});assert.equal(s.wavelength,400);close(s.displacement,55*Math.sin(1));assert.equal(s.soundWavelength,2);assert.equal(s.soundFrequency,165.7);
 close(standingWaveState('string1',400,{mode:2,length:400,step:10}).displacement,0,1e-12);
});

const originalOracle=JSON.parse(fs.readFileSync(new URL('../docs/legacy-general-original-oracle.json',import.meta.url)));
test('original Java bytecode oracle: 20 Bessel, 48 membrane shape, 112 closed-pipe method cases',()=>{
 for(const [m,x,v] of originalOracle.bessel)close(sourceBessel(m,x),v,1e-7);
 for(const [m,n,r,theta,v] of originalOracle.membraneShape)close(membraneState('d2wave3p',m,n,r,theta,0).shape,v,1e-8);
 for(const [mode,step,x,displacement,pressure] of originalOracle.pipe){const s=standingWaveState('resonan1',x,{mode,step});close(s.displacement,displacement,1e-12);close(s.pressure,pressure,1e-12);}
});

for(const model of ['StringMotion','MembraneMotion'])test(`${model}: driven movement, endpoint/shape corners, finite dense grid`,()=>{
 const s=fieldInitial(model);for(let i=0;i<100;i++)fieldStep(s);assert.ok(fieldSummary(s).maxDisplacement>0);assert.equal(s.step,100);
 for(const shape of ['circle','square'])for(const boundary of ['fixed','open']){const p={shape,boundary,gravity:true,frequency:3,tension:200,left:'free',right:'free'},q=fieldInitial(model,p);q.z[Math.floor(q.z.length/2)]=.4;for(let i=0;i<40;i++)fieldStep(q,p);assert.ok(Array.from(q.z).every(Number.isFinite));for(let k=0;k<q.z.length;k++)if(q.fixed[k])assert.equal(q.z[k],0);}
});
test('string source driven endpoint uses preincremented macro time and .2 amplitude',()=>{const s=fieldInitial('StringMotion');fieldStep(s);close(s.time,.02);close(s.z[80],-.2*Math.sin(2*Math.PI*2*.02));assert.equal(s.z[0],0);});
test('membrane source grid 43² and open-boundary mean shift clamp',()=>{const p={boundary:'open'},s=fieldInitial('MembraneMotion',p);assert.equal(s.z.length,1849);fieldStep(s,p);let sum=0,count=0;for(let k=0;k<s.z.length;k++)if(!s.fixed[k]){sum+=s.z[k];count++;}close(sum/count,0,1e-12);assert.ok(s.virtual.some(Boolean));});
