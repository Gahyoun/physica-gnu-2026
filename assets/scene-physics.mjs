// Independently drawn geometry; no Flash glyphs, images or display-list replay.
import {sceneSpecs} from './scene-specs.mjs';
export {sceneSpecs};
export const sceneDefaults=s=>s.type==='spin2'?{l:.5,m:.5}:s.type==='angularmomentum2'?{l:2,m:2}:s.type==='sphericalcoord'?{r:125,theta:50,phi:45}:{};
export const angularVector=(l,m,scale,time)=>{const length=Math.sqrt(l*(l+1)),radius=scale*Math.sqrt(Math.max(0,length*length-m*m)),phase=2*Math.PI*time/100;return {length,radius,position:[radius*Math.cos(phase),radius*Math.sin(phase),scale*m]};};
export const sphericalPoint=(r,theta,phi)=>{const t=theta*Math.PI/180,p=phi*Math.PI/180;return [r*Math.sin(t)*Math.cos(p),r*Math.sin(t)*Math.sin(p),r*Math.cos(t)];};
export function sceneGeometry(s,p=sceneDefaults(s),time=0){
 const g=s.geometry.map(q=>({...q,points:q.points.map(v=>v.slice())})),set=(clip,points)=>{const q=g.find(q=>q.clip===clip);if(!q)throw Error('Missing geometry '+clip);q.points=points;};
 if(['spin2','angularmomentum2'].includes(s.type)){
  const scale=s.type==='spin2'?90:45,a=angularVector(p.l,p.m,scale,time),R=a.radius,z=scale*p.m;
  for(let i=0;i<16;i++)set('surface_'+i,[[R*Math.cos(i*Math.PI/8),R*Math.sin(i*Math.PI/8),z],[R*Math.cos((i+1)*Math.PI/8),R*Math.sin((i+1)*Math.PI/8),z],[0,0,0]]);
  set('arrow_3',[[0,0,.01],[0,0,z]]);set('arrow_4',[[0,0,.01],a.position]);set('point_3',[[3,3,z]]);set('point_4',[a.position]);
 }else if(s.type==='sphericalcoord'){
  const [x,y,z]=sphericalPoint(p.r,p.theta,p.phi),t=p.theta*Math.PI/180,f=p.phi*Math.PI/180,pt=[x,y,z];
  set('arrow_3',[[0,0,0],pt]);set('surface_0',[[0,0,0],pt,[x,y,0]]);set('line_0',[pt,sphericalPoint(220,p.theta,p.phi)]);set('line_1',[[x,0,0],[x,y,0]]);set('line_2',[[0,y,0],[x,y,0]]);set('line_3',[[0,0,z],pt]);
  for(let i=0;i<8;i++){
   const a=i*Math.PI/4,b=(i+1)*Math.PI/4,c=(i+.5)*Math.PI/4,den=Math.cos(Math.PI/8),R=p.r*Math.sin(t);
   set('curve_'+i,[[R*Math.cos(a),R*Math.sin(a),z],[R*Math.cos(b),R*Math.sin(b),z],[R*Math.cos(c)/den,R*Math.sin(c)/den,z]]);
   const meridian=(a,k=1)=>[p.r*Math.sin(a)*Math.cos(f)*k,p.r*Math.sin(a)*Math.sin(f)*k,p.r*Math.cos(a)*k];
   set('curve_'+(8+i),[meridian(i*Math.PI/8),meridian((i+1)*Math.PI/8),meridian((i+.5)*Math.PI/8,1/Math.cos(Math.PI/16))]);
   const angle=(a,kxy=1,kz=1)=>[25*Math.sin(a)*Math.cos(f)*kxy,25*Math.sin(a)*Math.sin(f)*kxy,25*Math.cos(a)*kz];
   // Retain the original theta arc control point's separate z denominator.
   set('curve_'+(16+i),[angle(i*t/8),angle((i+1)*t/8),angle((i+.5)*t/8,1/Math.cos(t/16),1/Math.cos(Math.PI/16))]);
   const azimuth=(a,k=1)=>[25*Math.cos(a)*k,25*Math.sin(a)*k,0];
   set('curve_'+(24+i),[azimuth(i*f/8),azimuth((i+1)*f/8),azimuth((i+.5)*f/8,1/Math.cos(f/16))]);
  }
  set('point_3',[[x/2,y/2,z/2]]);set('point_4',[[37.5*Math.sin(t/2)*Math.cos(f),37.5*Math.sin(t/2)*Math.sin(f),37.5*Math.cos(t/2)]]);set('point_5',[[37.5*Math.cos(f/2),37.5*Math.sin(f/2),0]]);
 }
 return g;
}
export function projectScene(point,matrix,perspective){const v=matrix.map(row=>row.reduce((n,a,i)=>n+a*point[i],0)),den=1-v[2]/perspective;return [v[0]/den,-v[1]/den,v[2]];}
