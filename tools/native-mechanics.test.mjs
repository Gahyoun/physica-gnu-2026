import test from 'node:test';import assert from 'node:assert/strict';import {stickState,potentialValue,potentialForce,potentialTrajectory} from '../assets/native-mechanics.mjs';
// Independent reference in original pixel coordinates, not the drawing code.
function V(mode,x){const a=(x-200)/200,b=a*a;switch(mode){case 1:return 200*b;case 2:return 200*Math.abs(a);case 3:return 200*b*b;case 4:return 200*b*b*b*b;case 5:return 500*(a-.6)*(a-.6)*(a+.6)*(a+.6);case 6:return 200*(a-.5)*(a-.5)/(a>.5?.25:2.25);}}
test('All six potentials retain source values, force and every 2000-step trajectory across drag range',()=>{
 for(let mode=1;mode<=6;mode++)for(let x0=10;x0<=390;x0++){
  let x=x0,v=0;const trajectory=potentialTrajectory(mode,x0);
  for(let n=0;n<=2000;n++){assert.equal(trajectory[n].x,x);assert.equal(trajectory[n].v,v);assert.ok(Number.isFinite(x)&&Number.isFinite(v));assert.equal(potentialValue(mode,x),V(mode,x));const f=-(V(mode,x+1)-V(mode,x-1))/2;assert.equal(potentialForce(mode,x),f);v+=-.00001*v+f;x+=v;}
 }
});
test('Stick deflection, quartic shape and tip shortening match source calculation',()=>{
 for(let A=-70;A<=70;A++){let decay=A;for(let n=0;n<=2000;n++){const y=decay*Math.cos(n/3),state=stickState(A,n);assert.ok(Math.abs(state.end-y)<3e-12);assert.ok(Math.abs(state.tipY-(75-y))<3e-12);assert.ok(Math.abs(state.tipX-(287-y*y/320))<3e-12);for(let i=0;i<=15;i++){assert.ok(Math.abs(state.points[i].x-(10+(280-y*y/320)*i/15))<3e-12);assert.ok(Math.abs(state.points[i].y-(75-y*(i/15)**4))<3e-12);}decay*=.999;}}
});
import {chainSpecs,chainEquilibrium,chainTrajectory,chainStep,chainForces} from '../assets/native-chain.mjs';
test('Five oscillator chains follow simultaneous source force/velocity updates across initial configurations',()=>{
 for(const spec of Object.values(chainSpecs))for(const a of [-120,-60,0,60,120])for(const b of [-90,0,90]){
  const initial=chainEquilibrium(spec);initial.forEach((p,i)=>{if(spec.mode!==2)p.y+=(i%2?-1:1)*a;if(spec.mode!==1)p.x+=b;});const actual=chainTrajectory(initial,spec);let expected=initial.map(p=>({...p}));
  for(let n=0;n<=2000;n++){expected.forEach((p,i)=>{for(const key of ['x','y','vx','vy'])assert.ok(Math.abs(actual[n][i][key]-p[key])<1e-8);});const coords=[{x:30,y:spec.mode===2?25:150},...expected,{x:130+100*spec.n,y:spec.mode===2?25:150}];expected=expected.map((p,i)=>{let fx=0,fy=0;for(const j of [i,i+2]){const dx=p.x-coords[j].x,dy=p.y-coords[j].y,len=Math.sqrt(dx*dx+dy*dy);if(len){fx+=-(len-spec.rest)*dx/len;fy+=-(len-spec.rest)*dy/len;}}const vx=p.vx*spec.damping+(spec.mode===1?0:fx)/20,vy=p.vy*spec.damping+(spec.mode===2?0:fy)/20;return {x:p.x+vx,y:p.y+vy,vx,vy};});}
 }
});
test('Coincident spring endpoints stay finite and fixed endpoints/equilibrium do not move',()=>{
 for(const spec of Object.values(chainSpecs)){const initial=chainEquilibrium(spec);assert.deepEqual(chainStep(initial,spec),initial);initial[0].x=30;initial[0].y=spec.mode===2?25:150;assert.ok(chainForces(initial,spec).every(f=>Number.isFinite(f.fx)&&Number.isFinite(f.fy)));assert.ok(chainTrajectory(initial,spec).flat().every(p=>Object.values(p).every(Number.isFinite)));}
});
