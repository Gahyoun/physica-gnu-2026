// Independent numeric models; original artwork and ActionScript are not shipped here.
import {electromagnetSpecs} from './electromagnet-specs.mjs';
export {electromagnetSpecs};
export const electromagnetDefaults=s=>Object.fromEntries(s.controls.map(c=>[c.key,c.value]));
export const chargeModel=t=>t==='eforce2'||t==='mforce2';
export const inductionFlux=x=>1/(x-70)/(x-70)-1/(x-10)/(x-10);
export function inductionMeter(current){const value=Math.max(-10,Math.min(10,-current)),angle=value*9;return {angle:angle*(angle>0?.9222222222222223:1.0777777777777777),over:Math.abs(current)>10};}
export function inductionAdvance(q,held=false,position=q.x){
 let time=Math.min(10000,q.time+1),x=position,dir=q.dir;
 if(held)time=0;
 if(time>50&&time<10000){x+=dir?2:-2;if(x>150)dir=false;else if(x<80)dir=true;}
 // Original _x is a twip coordinate and feeds back into the flux recurrence.
 x=Math.floor(x*20+1e-8)/20;
 const flux=inductionFlux(x),instant=(flux-q.flux)*10000,current=Math.trunc(.5+(q.current*.1+instant*.9)*100)/100,meter=q.meter*.5+current*.5;
 return {x,y:113-.5039370078740157*(x-80),time,dir,flux,current,meter};
}
export function rotatingState(type,n){
 const phase=6.283185307179586*n/50,sin=Math.sin(phase),points=[];
 for(const [x,y,r]of [[250,100,50],[350,50,50],[250,100,10],[150,150,10]])for(const a of [-1.5707963267948966,1.5707963267948966])points.push([x+r*Math.cos(phase+a),y+r*Math.sin(phase+a)]);
 const arrowPoints=[];for(const [x,y,r]of [[280,85,65],[320,65,65],[230,110,20],[200,125,20],[360,45,30]])for(const a of [-1.5707963267948966,1.5707963267948966])arrowPoints.push([x+r*Math.cos(phase+a),y+r*Math.sin(phase+a)]);
 const positive=type==='generator'?Math.cos(phase-1.5707963267948966)>=0:Math.cos(phase-1.5707963267948966)>.25,negative=type==='motor'&&Math.cos(phase-1.5707963267948966)<-.25,active=type==='generator'||positive||negative;
 const pairs=type==='generator'?(positive?[[2,0],[1,3],[4,6],[7,5],[9,8]]:[[1,3],[2,0],[7,5],[4,6],[9,8]]):(positive?[[2,0],[1,3],[4,6],[7,5],[9,8]]:[[3,1],[0,2],[5,7],[6,4],[8,9]]);
 const arrows=active?pairs.map(([a,b])=>({a:arrowPoints[a],b:arrowPoints[b],scale:type==='generator'?sin:1})):[];
 const force=type==='motor'&&active?[{x:(points[0][0]+points[2][0])/2,y:(points[0][1]+points[2][1])/2+(positive?25:-25),dy:positive?-50:50},{x:(points[1][0]+points[3][0])/2,y:(points[1][1]+points[3][1])/2+(positive?-25:25),dy:positive?50:-50}]:[];
 const normal=[300+45*Math.cos(phase),75+45*Math.sin(phase)],opposite=[300+45*Math.cos(phase+3.141592653589793),75+45*Math.sin(phase+3.141592653589793)],magnetic=type==='motor'&&active?{a:positive?opposite:normal,b:positive?normal:opposite}:null;
 return {time:n,phase,sin,meter:Math.abs(sin),magnetic,gate:active?(positive?1:-1):0,points,arrows,force};
}
export function electromagnetInitial(type,p){
 if(chargeModel(type))return {x1:p.x1,y1:p.y1,x2:p.x2,y2:p.y2,vx1:0,vy1:0,vx2:0,vy2:0};
 if(type==='induction12')return {x:p.position,y:113-.5039370078740157*(p.position-80),time:0,dir:true,flux:0,current:0,meter:0};
 return rotatingState(type,0);
}
export function chargeForces(type,q,p){
 const dx=q.x2-q.x1,dy=q.y2-q.y1,d=Math.sqrt(dx*dx+dy*dy),coef=p.charge*p.charge/50*(type==='eforce2'&&p.same?-1:1);let fx,fy;
 if(d>40){fx=coef/d/d/d*dx;fy=coef/d/d/d*dy;}else{fx=.5*(40-d)*(-dx)/d;fy=.5*(40-d)*(-dy)/d;}
 const f=[{x:fx,y:fy},{x:-fx,y:-fy}],B=type==='mforce2'?p.charge*p.field/50000:0;
 f[0].x+=-B*q.vy1;f[0].y-=-B*q.vx1;f[1].x+=B*q.vy2;f[1].y-=B*q.vx2;
 for(let i=1;i<=2;i++){const a=f[i-1],x=q['x'+i],y=q['y'+i];if(x-20<10)a.x+=.5*(10-x+20);if(x+20>490)a.x+=.5*(490-x-20);if(y-20<10)a.y+=.5*(10-y+20);if(y+20>290)a.y+=.5*(290-y-20);}return f;
}
export function electromagnetAdvance(type,state,p,held=0){
 if(type==='induction12')return inductionAdvance(state);
 if(!chargeModel(type))return rotatingState(type,state.time+1);
 const q={...state};for(let j=0;j<50;j++){const f=chargeForces(type,q,p);for(let i=1;i<=2;i++){if(i===held)continue;const vx='vx'+i,vy='vy'+i;q[vx]+=f[i-1].x/.05*.1/50;q[vy]+=f[i-1].y/.05*.1/50;const v=q[vx]*q[vx]+q[vy]*q[vy],a=v>100?.99:v>10?.9995:v>1?.9999:.99999;q[vx]*=a;q[vy]*=a;q['x'+i]+=q[vx]*.1/50/.01;q['y'+i]+=q[vy]*.1/50/.01;}}return q;
}
export const electromagnetTime=(s,n)=>chargeModel(s.type)?n*.1:n/s.fps;
