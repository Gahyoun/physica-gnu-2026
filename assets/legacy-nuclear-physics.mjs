import {decaySeries} from './legacy-nuclear-data.mjs';
export {decaySeries};

// Bateman expansion with the original Sequence class's branch convention.
// The stored lambdas/half-lives are historical source data, not new constants.
export function originalAmounts(key,time){
 const s=decaySeries[key];
 if(!s||!Number.isFinite(time)||time<0)throw RangeError('Invalid decay series/time');
 const e=s.elements,amounts=Array(e.length).fill(0);
 for(let i=0;i<e.length;i++){
  let numerator=s.initial;
  for(let k=0;k<i;k++)numerator*=e[k].lambda;
  for(let j=0;j<=i;j++){
   let denominator=1;
   for(let k=0;k<=i;k++)if(k!==j)denominator*=e[k].lambda-e[j].lambda;
   amounts[i]+=numerator/denominator*Math.exp(-e[j].lambda*time);
  }
  if(i<=e.length-3&&e[i].alphaPercent>0&&e[i].alphaPercent<100){
   amounts[i+1]=amounts[i]*(100-e[i].alphaPercent)/100;
   amounts[i+2]=amounts[i]-amounts[i+1];i+=2;
  }
 }
 return amounts;
}
export function decayEdges(key){
 const e=decaySeries[key]?.elements;if(!e)throw RangeError('Invalid series');
 const edges=[];
 for(const a of e)if(a.lambda>0)for(const [kind,Z,N,fraction] of [['alpha',a.Z-2,a.N-2,a.alphaPercent/100],['beta',a.Z+1,a.N-1,1-a.alphaPercent/100]]){
  const target=e.find(b=>b.Z===Z&&b.N===N);
  if(fraction>0&&target)edges.push({from:a.id,to:target.id,kind,fraction});
 }
 return edges;
}
export function decayStep(key,speed){return decaySeries[key].elements[0].halfLife/20*10**(speed-5);}
export function decayHistory(key,until,points=121){return Array.from({length:points},(_,i)=>{const t=until*i/(points-1);return {t,amounts:originalAmounts(key,t)};});}
