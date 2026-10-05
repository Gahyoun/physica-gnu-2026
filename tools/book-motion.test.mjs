import test from 'node:test';import assert from 'node:assert/strict';
import {models} from '../assets/book-models.mjs';import {motionState,probeHistory} from '../assets/book-motion.mjs';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10);
test('Supplementary motion companions use the same time and physical coordinates as their curves',()=>{
 const s={a:1.2,w:2};for(const t of [0,1,6,12]){const r=models.oscillator.calculate(s,t);near(motionState('oscillator',s,t,r).positions[0],1.2*Math.cos(2*t));}
 const m={m:2,v:-1,F:3};for(const t of [0,1,5,10]){const r=models.momentum.calculate(m,t),x=motionState('momentum',m,t,r).positions[0];near(x,-t+.75*t*t);near(r.curves[0].fn(t),2*(-1+1.5*t));}
 for(const key of ['decay','decay-chain']){const s=key==='decay'?{half:2}:{a:.3,b:1};for(const t of [0,1,15]){const r=models[key].calculate(s,t),m=motionState(key,s,t,r);assert.ok(m.fractions.every(f=>f>=0&&f<=1));if(key==='decay-chain')assert.ok(m.fractions.reduce((a,b)=>a+b)<=1+1e-12);}}
});
test('Probe histories distinguish fixed-position oscillation from spatial wave propagation',()=>{
 const s={a:.5,k:2,v:1};for(const x of [0,5,10])for(const p of probeHistory(models.wave,s,x))near(p.y,.5*Math.cos(2*(x-p.t)));
 for(const n of [1,2,8])for(const x of [0,1])for(const p of probeHistory(models.standing,{n},x))assert.ok(Math.abs(p.y)<1e-12);
 for(const p of probeHistory(models.reflection,{r:-1},0))assert.ok(Math.abs(p.y)<1e-12);
});
