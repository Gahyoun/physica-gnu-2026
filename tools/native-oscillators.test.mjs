import test from 'node:test';
import assert from 'node:assert/strict';
import {damped,driven,response} from '../assets/native-oscillators.mjs';
const near=(a,b,tol=1e-6)=>assert.ok(Math.abs(a-b)<=tol*(1+Math.abs(b)),`${a} ≠ ${b}`);
// Independent RK4 oracle for m=1: x'' + b*x' + k*x = F*cos(w*t).
function solve(b,k,x,v,t,F=0,w=0){const n=Math.ceil(t/.002),h=t/n;for(let i=0;i<n;i++){const at=(x,v,t)=>[v,F*Math.cos(w*t)-b*v-k*x],q=at(x,v,i*h),r=at(x+h*q[0]/2,v+h*q[1]/2,(i+.5)*h),s=at(x+h*r[0]/2,v+h*r[1]/2,(i+.5)*h),u=at(x+h*s[0],v+h*s[1],(i+1)*h);x+=h*(q[0]+2*r[0]+2*s[0]+u[0])/6;v+=h*(q[1]+2*r[1]+2*s[1]+u[1])/6;}return {x,v};}
test('Damped source curves match all slider positions in regular source branches',()=>{
 let samples=0;for(let ib=0;ib<=100;ib++)for(let ik=0;ik<=200;ik++){
  const b=ib/10,k=ik/10,g=b/2,q=k-g*g;
  for(const t of [0,.1,1,5,20]){const s=damped(b,k,t);assert.ok([s.x,s.v,s.a,s.energy].every(Number.isFinite));if(q>1e-12)near(s.x,Math.exp(-g*t)*Math.cos(Math.sqrt(q)*t),1e-12);if(q< -1e-12){const z=Math.sqrt(-q),r1=g+z,r2=g-z,c1=r2/(r2-r1);near(s.x,c1*Math.exp(-r1*t)+(1-c1)*Math.exp(-r2*t),1e-11);}samples++;}
 }assert.equal(samples,101505);
});
test('Damped native position/velocity match an independent ODE solver across regimes',()=>{
 for(const [b,k] of [[0,0],[0,5],[1,5],[4,4],[4,4-1e-8],[4,4+1e-8],[10,.1],[10,20]])for(const mode of ['source','rest']){
  const initial=damped(b,k,0,mode),s=damped(b,k,2,mode),r=solve(b,k,initial.x,initial.v,2);near(s.x,r.x,1e-7);near(s.v,r.v,1e-7);
  let E=initial.energy;for(let i=0;i<=400;i++){const e=damped(b,k,i/20,mode).energy;assert.ok(e<=E+1e-9);E=e;}
 }
 // Equal initial conditions are continuous at critical damping; source mode is intentionally not.
 for(const t of [0,1,5,20])for(const k of [4-1e-8,4+1e-8])near(damped(4,k,t,'rest').x,damped(4,4,t,'rest').x,1e-7);
});
test('Resonance curve matches every original b slider position and all 201 source samples',()=>{
 for(let ib=0;ib<=50;ib++)for(let iw=0;iw<=200;iw++){
  const b=ib/10,w=iw/10,A=response(b,w);if(b===0&&w===10){assert.equal(A,Infinity);continue;}
  near(A,100/Math.sqrt((100-w*w)**2+b*b*w*w),1e-12);
  const s=driven(b,w,.73),h=1e-5;near((driven(b,w,.73+h).x-driven(b,w,.73-h).x)/(2*h),s.v,1e-7);near((driven(b,w,.73+h).v-driven(b,w,.73-h).v)/(2*h),s.a,1e-7);
 }
});
test('Driven time traces solve the forced ODE, including the undamped resonance pole',()=>{
 for(const [b,w] of [[0,0],[0,10],[0,20],[.1,10],[2,8],[5,20]]){
  const initial=driven(b,w,0),s=driven(b,w,2),r=solve(b,100,initial.x,initial.v,2,100,w);near(s.x,r.x,2e-6);near(s.v,r.v,2e-6);
 }
 assert.equal(driven(0,10,0).x,0);assert.equal(driven(0,10,0).v,0);assert.equal(driven(0,10,1).resonant,true);
});
import {dampedStep,drivenStep,trajectory} from '../assets/native-integrators.mjs';
test('Every osc_damp slider setting reproduces the original pixel-coordinate update',()=>{
 let combinations=0;
 for(let ib=0;ib<=1000;ib++)for(let im=5;im<=50;im++)for(let k=1;k<=10;k++){
  const b=ib/100,m=im/10,x=.137,v=-.073;let y=150-x/.002,yv=-v;
  for(let i=0;i<10;i++){const force=-yv*b+k*(150-y)*.002;yv+=force/m*.01;y+=yv*.01/.002;}
  if(y<50){y=50;yv=0;}if(y>250){y=250;yv=0;}
  const s=dampedStep({x,v},{b,m,k});near(s.x,(150-y)*.002,1e-12);near(s.v,-yv,1e-12);combinations++;
 }assert.equal(combinations,460460);
 for(const b of [0,1,10])for(const m of [.5,1,5])for(const k of [1,5,10])for(const x0 of [-.2,0,.2]){
  const samples=trajectory('dampedExperiment',{b,m,k,x0});assert.equal(samples.length,201);for(const p of samples)assert.ok([p.x,p.v,p.a].every(Number.isFinite)&&Math.abs(p.x)<=.2);
 }
});
test('Driven experiment all frequency/damping settings match original five-substep recurrence and measured peak',()=>{
 for(const b of [1,2,3,4,5])for(const w of [.1,...Array.from({length:20},(_,i)=>i+1)]){
  let y=250,vy=0,oldy=250,isUpper=false,amp=0,s={x:0,v:0};
  for(let frame=0;frame<300;frame++){
   for(let i=0;i<5;i++){
    const fixed=50-25*Math.sin(w*(frame+i/5)/15),force=-b*vy*.01-(y-fixed-200)*.01;
    vy+=force/.01/75;y+=vy/75/.01;
    if(isUpper&&y>oldy)amp=250-y;isUpper=y<oldy;oldy=y;
   }
   s=drivenStep(s,{b,w},frame/15);near(s.x,(y-250)/25,1e-9);near(s.v,vy/.25,1e-9);near(s.measured,amp/25,1e-9);
  }
 }
});
