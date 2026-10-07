import {potentialSpecs} from './potential-specs.mjs';
export {potentialSpecs};
export const seededRandom=seed=>{let n=seed>>>0;const f=()=>{n=(Math.imul(1664525,n)+1013904223)>>>0;return n/4294967296;};f.state=()=>n;return f;};
export function laplaceInitial(nx,preset=true){const size=nx+2,nodes=Array.from({length:size*size},(_,k)=>{const i=Math.floor(k/size),j=k%size;return {i,j,x:100*(i-(nx+1)/2),z:100*(j-(nx+1)/2),y:0,v:0,drag:false};});if(preset)nodes[Math.floor(size/2)].y=100;return {nx,nodes,gravity:false,damping:.999,step:0};}
export function laplaceAdvance(state){const q={...state,nodes:state.nodes.map(a=>({...a})),step:state.step+1},s=q.nx+2;
 for(let sub=0;sub<10;sub++){const old=q.nodes.map(a=>a.y);for(let i=1;i<=q.nx;i++)for(let j=1;j<=q.nx;j++){const k=i*s+j,a=q.nodes[k];if(a.drag)continue;const force=(old[k-s]+old[k+s]+old[k-1]+old[k+1])/4-old[k];a.v=a.v*q.damping+force/200-(q.gravity?.05:0);a.v-=a.v*.1;a.y+=a.v;}}
 return q;
}
export function laplaceMetrics(q){const s=q.nx+2,centre=q.nodes[Math.floor(s/2)*s+Math.floor(s/2)];let residual=0;for(let i=1;i<=q.nx;i++)for(let j=1;j<=q.nx;j++){const k=i*s+j,mean=(q.nodes[k-s].y+q.nodes[k+s].y+q.nodes[k-1].y+q.nodes[k+1].y)/4;residual=Math.max(residual,Math.abs(mean-q.nodes[k].y-(q.gravity?10:0)));}const k=Math.floor(s/2)*s+Math.floor(s/2),mean=(q.nodes[k-s].y+q.nodes[k+s].y+q.nodes[k-1].y+q.nodes[k+1].y)/4;return {centre:centre.y,mean,residual};}
export function pinInitial(seed=20261008){const r=seededRandom(seed),raw=[];for(let i=0;i<5;i++)for(let j=0;j<5;j++){const depth=i>2?2*j+1:2*j,right=i>2?50*(i-3)+75:35+65*i;raw.push({x:right+25*(r()-.5),y:50+50*depth+30*(r()-.5)});}const order=[0,1,3,4,5,6,7,8,9,10,11,14,13,2,12,15,16,17,18,19,20,21,22,23,24],balls=Array.from({length:10},(_,i)=>({x:50+100*r(),y:-20-i*50,vx:10*r()-5,vy:0}));return {pins:order.map(i=>raw[i]),balls,incline:45,g:9.8*Math.sin(45/180*3.1415926),many:true,collisions:false,numPassed:0,gTime:0,myTime:0,justStart:false,rng:r.state(),step:0};}
export function pinAdvance(state){const q={...state,balls:state.balls.map(a=>({...a})),step:state.step+1},r=seededRandom(q.rng);
 for(let sub=0;sub<3;sub++){for(const a of q.balls){const fx=(a.x-10<10?20-a.x:0)+(190<a.x+10?180-a.x:0);a.vx+=.95*fx/.01*.02/3;a.vy+=.95*(.01*q.g)/.01*.02/3;}
 if(q.collisions)for(let i=0;i<9;i++)for(let j=i+1;j<10;j++){const a=q.balls[i],b=q.balls[j],x=a.x-b.x,y=a.y-b.y,d=Math.sqrt(x*x+y*y);if(d>0&&d<20){const fx=(20-d)*x/d,fy=(20-d)*y/d;a.vx+=.95*fx/.01*.02/3;a.vy+=.95*fy/.01*.02/3;b.vx+=.95*(-fx)/.01*.02/3;b.vy+=.95*(-fy)/.01*.02/3;}}
 for(const a of q.balls){let fx=0,fy=0;for(const p of q.pins.slice(0,q.many?25:13)){const x=a.x-p.x,y=a.y-p.y,d=Math.sqrt(x*x+y*y);if(d>0&&d<15){fx=(15-d)*x/d+.01*(r()-.5);fy=(15-d)*y/d+.01*(r()-.5);}}a.vx+=.85*fx/.01*.02/3;a.vy+=.85*fy/.01*.02/3;}
 for(const a of q.balls){a.x+=a.vx*.02/3/.01;a.y+=a.vy*.02/3/.01;}}
 for(const a of q.balls)if(a.y>560){if(!q.justStart){q.numPassed=0;q.gTime=0;q.myTime=0;q.justStart=true;}a.x=50+100*r();a.y=-20;a.vx=10*r()-5;a.vy=0;q.numPassed++;}
 q.gTime++;if(q.gTime%50===0)q.myTime++;q.rng=r.state();return q;
}
export function chargeLines(charge){const lines=[];for(let i=0;i<27;i++){let first=true,active=true,theta,step,substeps=10,sign=1;
 if(charge===1){if(i<10)theta=6.2831852/10*i;else if(i<15){first=false;sign=-1;theta=6.2831852/10*(i-12);}else active=false;step=1.6;}
 else if(charge===2){if(i<20){theta=6.2831852/20*i;step=1.9;substeps=12;}else if(i<23){first=false;sign=-1;theta=12.5663704/20*(i-21);step=1.8;}else active=false;}
 else if(charge===0){if(i<10){first=false;theta=6.2831852/10*i;step=2.5;}else active=false;}
 else if(charge===-1){if(i<9)theta=6.2831852/10*(i+1);else if(i<18){first=false;theta=6.2831852/10*(i-13);}else active=false;step=1.4;}
 else{if(i<19)theta=.31415926*(i+1);else{first=false;theta=.6981316888888889*(i-4.5);}step=1.5;}
 if(!active)continue;let x=(first?160:310)+Math.cos(theta),y=160+Math.sin(theta);const points=[[x,y]],segments=[];
 for(let j=0;j<15;j++){const from=[x,y];for(let k=0;k<substeps;k++){const d1=(x-160)**2+(y-160)**2,d2=(x-310)**2+(y-160)**2,c1=charge===0?0:Math.abs(charge),c2=charge>0?-1:1,ex=sign*(c1/d1/Math.sqrt(d1)*(x-160)+c2/d2/Math.sqrt(d2)*(x-310)),ey=sign*(c1/d1/Math.sqrt(d1)*(y-160)+c2/d2/Math.sqrt(d2)*(y-160)),a=Math.atan2(ey,ex);x+=step*Math.cos(a);y+=step*Math.sin(a);}points.push([x,y]);segments.push({i,j,x:(from[0]+x)/2,y:(from[1]+y)/2,scale:Math.hypot(from[0]-x,from[1]-y),angle:180*Math.atan2(from[1]-y,from[0]-x)/3.1415926});}lines.push({i,points,segments,reverse:charge<=0||!first});}
 return lines;
}
