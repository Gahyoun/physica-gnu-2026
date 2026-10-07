// Independently authored recurrences. Coordinates retain the source's numerical scales.
import {dynamicsSpecs} from './dynamics-specs.mjs';
export {dynamicsSpecs};
export const dynamicsDefaults=s=>Object.fromEntries(s.controls.map(c=>[c.key,c.value]));
export const dynamicsDt=type=>type==='springpen'?.05:.1;
export function springRelease(length,angle){const a=angle*Math.PI/180;return {x:angle===90?0:length*Math.cos(a),y:angle===0||angle===180?0:length*Math.sin(a),vx:0,vy:0};}
export function dynamicsInitial(type,p){
 if(type==='springpen')return springRelease(p.length,p.angle);
 if(type==='boxphasespace')return {x1:p.x1,x2:p.x2,v1:-Math.sqrt(p.energy1)/50,v2:Math.sqrt(p.energy2)/50,collision:0};
 if(type==='oscphasespace')return {x1:p.x1,v1:0,force:0,collision:0};

 return {x1:p.x1,x2:p.x2,v1:0,v2:0,f1:0,f2:0,collision:0};
}
export function dynamicsAdvance(type,state,p,held=0){
 const q={...state};
 if(type==='springpen'){
  if(held)return q;for(let i=0;i<10;i++){const r=Math.sqrt(q.x*q.x+q.y*q.y),a=Math.atan2(q.y,q.x),fx=-.1*(r-1)*Math.cos(a)-.0001*q.vx,fy=-.1*(r-1)*Math.sin(a)+9.8*.01-.0001*q.vy;q.vx+=fx/.01*.005;q.vy+=fy/.01*.005;q.x+=q.vx*.005;q.y+=q.vy*.005;}return q;
 }
 if(type==='boxphasespace'){
  q.collision=0;for(let i=0;i<20;i++){q.x1+=q.v1*.1/20/.001;if(q.x1<=80||q.x1>=480){q.v1=(q.x1<=80?1:-1)*Math.abs(q.v1);q.collision=1;break;}q.x2+=q.v2*.1/20/.001;if(q.x2<=80||q.x2>=480){q.v2=(q.x2<=80?1:-1)*Math.abs(q.v2);q.collision=2;break;}}return q;
 }
 if(type==='oscphasespace'){
  q.collision=0;const damping=p.damping?.015:.00001;for(let i=0;i<20;i++){q.force=-damping*q.v1+(p.model?-.05444444444444445:(280-q.x1)*.001);if(!held){q.v1+=q.force*.1/20;q.x1+=q.v1*.1/20/.001;if(p.model&&q.x1<=80){q.v1=Math.abs(q.v1);q.collision=1;break;}}}return q;
 }
 const three=type==='springmot3',damping=three?.01:.2,m2=three?p.m1:p.m2,contact=three?50:80;
 for(let i=0;i<3;i++){
  const gap=q.x2-q.x1;q.f1=-damping*q.v1-p.k1*(q.x1-5-200)*.001+p.k2*(gap-200)*.001;q.f2=three?-damping*q.v2+p.k1*(605-q.x2-200)*.001-p.k2*(gap-200)*.001:-damping*q.v2-p.k2*(gap-200)*.001;
  q.collision=0;if(gap<contact){q.f1+=-500*(contact-gap)*.001;q.f2+=500*(contact-gap)*.001;q.collision=1;}if(q.x1-5<contact){q.f1+=500*(contact-(q.x1-5))*.001;q.collision=1;}if(three&&605-q.x2<contact){q.f2+=-500*(contact-(605-q.x2))*.001;q.collision=1;}
  if(held!==1){q.v1+=q.f1/p.m1*(.1/3);q.x1+=q.v1*(.1/3)/.001;}if(held!==2){q.v2+=q.f2/m2*(.1/3);q.x2+=q.v2*(.1/3)/.001;}
 }return q;
}
export function dynamicsForce(q){const r=Math.sqrt(q.x*q.x+q.y*q.y),a=Math.atan2(q.y,q.x);return {fx:-.1*(r-1)*Math.cos(a)-.0001*q.vx,fy:-.1*(r-1)*Math.sin(a)+9.8*.01-.0001*q.vy};}
export function dynamicsEnergy(type,q,p){
 if(type==='springpen'){const r=Math.sqrt(q.x*q.x+q.y*q.y);return .005*(q.vx*q.vx+q.vy*q.vy)+.05*(r-1)**2-.098*q.y;}
 if(type==='boxphasespace')return (q.v1*q.v1+q.v2*q.v2)/2;
 if(type==='oscphasespace')return q.v1*q.v1/2+(p.model?.05444444444444445*(q.x1-80)*.001:.5*((q.x1-280)*.001)**2);
 return .5*p.m1*q.v1*q.v1+.5*(type==='springmot3'?p.m1:p.m2)*q.v2*q.v2+.5*p.k1*((q.x1-205)*.001)**2+.5*p.k2*((q.x2-q.x1-200)*.001)**2+(type==='springmot3'?.5*p.k1*((405-q.x2)*.001)**2:0);
}
export function dynamicsHistory(type,p,steps,seed=dynamicsInitial(type,p)){const a=[{...seed}];for(let i=0;i<steps;i++)a.push(dynamicsAdvance(type,a.at(-1),p));return a;}
