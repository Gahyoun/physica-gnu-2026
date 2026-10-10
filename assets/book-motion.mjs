import {energyFlow} from './book-coupling.mjs';
// Companion visualizations for independent supplementary models, not SWF ports.
export const motionModels=new Set(['oscillator','coupled','damped','momentum','impulse','decay','decay-chain','thermo','induction']);
export const probeModels=new Set(['wave','reflection','standing','interference']);
export function motionState(key,s,t,result){
 if(key==='thermo')return {type:'heat-engine',...energyFlow(s,t)};
 if(key==='induction')return {type:'coil',angle:s.w*t,flux:result.curves[0].fn(t),emf:result.curves[1].fn(t)};
 if(['oscillator','coupled','damped'].includes(key)){const positions=result.curves.slice(0,key==='coupled'?2:1).map(c=>c.fn(t));return {type:'bobs',positions,scale:key==='oscillator'?2:1.1,unit:'m'};}
 if(key==='momentum'){const x=u=>s.v*u+s.F*u*u/(2*s.m),positions=[x(t)],samples=Array.from({length:101},(_,i)=>x(i/10));return {type:'bobs',positions,scale:Math.max(1,...samples.map(Math.abs)),unit:'m'};}
 if(key==='impulse')return {type:'force',force:result.curves[0].fn(t),scale:s.F};
 if(key==='decay'||key==='decay-chain'){const fractions=result.curves.map(c=>c.fn(t));return {type:'population',fractions};}
 return null;
}
export function probeHistory(model,state,probe,end=20){return Array.from({length:241},(_,i)=>{const t=end*i/240,result=model.calculate(state,t);return {t,y:result.curves.at(-1).fn(probe)};});}
