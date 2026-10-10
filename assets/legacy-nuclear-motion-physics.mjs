// Equations and update order verified against the original Java classes.
export function coulombStep(p,{repulsive=true,radiating=false,scale=1}={}){
 let {x,y,vx,vy}=p;
 if(!repulsive&&radiating&&x*x+y*y<260*scale*scale)return {...p,captured:true};
 if(p.captured)return {...p};
 const mass=repulsive?100:10,dt=repulsive?.05:.04,loops=repulsive?10:5,sign=repulsive?1:-1;
 for(let i=0;i<loops;i++){
  const r=Math.hypot(x,y)/scale;
  // The original has a Coulomb singularity; do not silently smooth its force.
  if(r===0)throw new RangeError('원본 쿨롱 모형은 r = 0에서 정의되지 않습니다.');
  const a=sign*250000/(mass*r*r*r);vx+=x*a*dt;vy+=y*a*dt;x+=vx*dt;y+=vy*dt;
 }
 if(!repulsive&&radiating){vx*=1-1/(700*scale);vy*=1-1/(700*scale);}
 return {x,y,vx,vy,captured:false};
}
export function circularElectron({x,y,clockwise=false,t0=0},t){const r=Math.hypot(x,y),angle=Math.atan2(y,x)+(clockwise?-1:1)*25/r**1.5*(t-t0);return {x:r*Math.cos(angle),y:r*Math.sin(angle),r,omega:(clockwise?-1:1)*25/r**1.5};}
export function seededRandom(seed=2026){let s=seed>>>0;return()=>((s=(1664525*s+1013904223)>>>0)/4294967296);}
export function fissionHistory(fast=false,seed=2026){
 const r=seededRandom(seed),initial={x:180+40*r(),y:15,vx:(fast?1.4:1)*r()-(fast?.7:.5),vy:fast?10:5};let neutron={...initial},neutrons=[],left={x:200,y:200},right={x:200,y:200};const history=[];
 for(let n=0;n<=(fast?60:170);n++){
  const phase=fast?'scattering':n>60?'fragments':n>33?'excited':'incident';
  if(fast&&n===19){neutron.vx=20*r()-10;neutron.vy=10+2*r();}
  if(!fast&&n===61){left={x:170,y:200};right={x:230,y:200};neutrons=[];if(r()>.4)neutrons.push({x:200,y:210,vx:2*r(),vy:3+4*r()});neutrons.push({x:185,y:210,vx:-4+2*r(),vy:3+4*r()},{x:215,y:210,vx:4-2*r(),vy:3+4*r()});}
  if(n>0){if(phase==='incident'||phase==='scattering'){neutron.x+=neutron.vx;neutron.y+=neutron.vy;}else if(phase==='fragments'){for(const p of neutrons){p.x+=p.vx;p.y+=p.vy;}left.x-=2;left.y+=1;right.x+=2;right.y-=1;}}
  history.push({n,phase,aspect:phase==='excited'?.7-Math.sin(n/2)/4:1,neutrons:phase==='fragments'?neutrons.map(p=>({...p})):phase==='excited'?[]:[{...neutron}],left:{...left},right:{...right}});
 }
 return history;
}
