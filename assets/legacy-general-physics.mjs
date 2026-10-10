// Numerical models recovered from the original Java bytecode and p5 sources.
// Coordinates and time are source model units; they are not SI metres/seconds.
export const collisionModels={
 Collision2D121:{width:700,height:150,dt:.001,substeps:200,border:5,oneDimensional:true},
 Collision2D12:{width:600,height:150,dt:.004,substeps:50,border:5,oneDimensional:true},
 Collision2D1:{width:600,height:300,dt:.001,substeps:200,border:-50},
 Collision2D13:{width:800,height:345,dt:.004,substeps:50,border:5},
 Collision2DK:{width:600,height:345,dt:.005,substeps:40,border:10},
 Collision2DKG:{width:600,height:345,dt:.005,substeps:40,border:10},
 Collision2D11:{width:800,height:340,dt:.005,substeps:10,border:5,projectile:true},
 Collision2D111:{width:800,height:345,dt:.008,substeps:25,border:5,bounce:true}
};
export function seededRandom(seed=12345){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
const ball=(x,y,r=35,m=50,vx=0,vy=0)=>({x,y,r,m,vx,vy});
export function collisionInitial(model,p={},seed=12345){
 const random=seededRandom(seed),speed=p.speed??100,angle=(p.angle??0)*Math.PI/180;
 if(model==='Collision2D121')return [50,300,370,440,510].map((x,i)=>ball(x,75,34,50,i===0?(p.speed??60):0));
 if(model==='Collision2D12'||model==='Collision2D1')return [ball(p.x??50,model==='Collision2D12'?75:p.y??130,35,100-(p.mass??50),speed),ball(model==='Collision2D12'?300:250,model==='Collision2D12'?75:150,35,p.mass??50)];
 if(model==='Collision2D11')return [ball(50,300,30,10,speed*Math.cos(angle),-speed*Math.sin(angle))];
 if(model==='Collision2D111')return [ball(50,50,30,10,p.speed??10)];
 if(model==='Collision2D13')return [ball(p.x??70,p.y??150,25,50,speed*Math.cos(angle),-speed*Math.sin(angle)),...[[463,174],[509,199],[510,148],[557,174],[557,121],[557,228],[602,94],[602,147],[602,199],[602,252]].map(([x,y])=>ball(x,y,25))];
 if(model==='Collision2DK'||model==='Collision2DKG'){
  const masses=[50,100,150,200,250,300];for(let i=5;i>0;i--){const j=Math.floor(random()*(i+1));[masses[i],masses[j]]=[masses[j],masses[i]];}
  const pts=model==='Collision2DK'?[[150,300,25],[350,250,30],[70,270,30],[170,200,50],[320,100,40],[240,140,20]]:[[70,70,50],[350,250,30],[70,270,30],[170,200,25],[320,100,40],[240,140,20]];
  return pts.map(([x,y,r],i)=>ball(x,y,r,masses[i],random()*100-50,random()*80-40));
 }
 throw Error('Unknown legacy collision model '+model);
}
export function collisionTotals(balls){const mass=balls.reduce((s,b)=>s+b.m,0);return {px:balls.reduce((s,b)=>s+b.m*b.vx,0),py:balls.reduce((s,b)=>s+b.m*b.vy,0),kinetic:balls.reduce((s,b)=>s+b.m*(b.vx*b.vx+b.vy*b.vy)/2,0),cx:balls.reduce((s,b)=>s+b.m*b.x,0)/mass,cy:balls.reduce((s,b)=>s+b.m*b.y,0)/mass};}
export function collisionStep(input,model,p={}){
 const cfg=collisionModels[model];if(!cfg)throw Error('Unknown collision model');const balls=input.map(b=>({...b}));
 const gravity=p.gravity??(cfg.projectile||cfg.bounce),friction=p.friction?(cfg.projectile?.02:cfg.bounce?.002:.01):0;
 for(let k=0;k<cfg.substeps;k++){
  const forces=balls.map((b,i)=>{
   let fx=-friction*b.vx,fy=(gravity?b.m*9.8/100:0)-friction*b.vy;
   for(let j=0;j<balls.length;j++)if(i!==j){const c=balls[j],dx=b.x-c.x,dy=b.y-c.y;if(cfg.oneDimensional?Math.abs(dx)<b.r+c.r:dx*dx+dy*dy<(b.r+c.r)**2){fx+=10*dx;if(!cfg.oneDimensional)fy+=10*dy;}}
   if(!cfg.projectile&&!cfg.bounce){const lo=cfg.border,hi=cfg.width-cfg.border;if(b.x+b.r>hi)fx+=50*(hi-b.x-b.r);else if(b.x-b.r<lo)fx-=50*(b.x-b.r-lo);if(!cfg.oneDimensional){const hy=cfg.height-cfg.border;if(b.y+b.r>hy)fy+=50*(hy-b.y-b.r);else if(b.y-b.r<lo)fy-=50*(b.y-b.r-lo);}}
   if(cfg.bounce&&b.y+b.r>cfg.height){if(b.vy>0){b.vx*=Math.sqrt(p.recoil??1);b.vy*=-Math.sqrt(p.recoil??1);}fy=0;}
   return {fx,fy};
  });
  for(let i=0;i<balls.length;i++){const b=balls[i],f=forces[i];b.vx+=100*f.fx/b.m*cfg.dt;b.x+=b.vx*cfg.dt;if(!cfg.oneDimensional){b.vy+=100*f.fy/b.m*cfg.dt;b.y+=b.vy*cfg.dt;}}
 }
 if(model==='Collision2DKG'&&p.targetKinetic>0){const kinetic=collisionTotals(balls).kinetic;if(kinetic>0){const factor=Math.sqrt(p.targetKinetic/kinetic);for(const b of balls){b.vx*=factor;b.vy*=factor;}}}
 return balls;
}
export const membraneRoots=[[2.4048,5.5201,8.6537,11.7915],[3.8317,7.0156,10.1735,13.3237],[5.1356,8.4172,11.6198,14.796],[6.3802,9.761,13.0152,16.2235]];
// The source's initial term deliberately omits 1/m!; preserve its amplitude.
export function sourceBessel(m,x){let sum=0,term=(x/2)**m;for(let k=0;k<30;k++){sum+=term;term=term*-1/((k+1)*(k+m+1))*x*x/2/2;}return sum;}
export function membraneState(model,m,n,r,theta,step){const root=membraneRoots[m][n];const z=model==='d2wave3p'?(2+Math.floor(Math.floor(220/(m+1))/(n+2)))*sourceBessel(m,root*r)*Math.sin(m*theta+1):(m===3?150:220)/root*sourceBessel(m,root*r)*Math.cos(m*theta);const sourceTime=model==='d2wave3p'?step*.5:step;return {z:z*Math.sin(root*sourceTime/15),shape:z,frequency:model==='d2wave3p'?root/membraneRoots[0][0]:root/membraneRoots[0][0]*100,rotation:step*(model==='d2wave3p'?.005:.0015)*m};}
export function rippleState(x,y,{wavelength=60,separation=100,step=0}={}){const r1=Math.hypot(x-(200-separation/2),y-260),r2=Math.hypot(x-(200+separation/2),y-260),phase=2*Math.PI*step/wavelength;return {r1,r2,difference:r2-r1,y1:Math.cos(2*Math.PI*r1/wavelength-phase),y2:Math.cos(2*Math.PI*r2/wavelength-phase),intensity:2+2*Math.cos(2*Math.PI*(r2-r1)/wavelength)};}
export function standingWaveState(model,x,{mode=1,length=400,step=0}={}){
 if(model==='resonan1'){const wavelength=Math.trunc(1600/(mode*2-1)),temporal=Math.sin(6.2831852*(mode*2-1)*20/1600*step);return {displacement:25*temporal*Math.sin(6.2831852*x/wavelength),pressure:-25*temporal*Math.cos(6.2831852*x/wavelength),wavelength,frequency:20/wavelength};}
 const wavelength=2*length/mode,frequency=40/wavelength,soundWavelength=Math.trunc((5*wavelength+.5)/10)/100,soundFrequency=Math.trunc(331.5/soundWavelength*10)/10;
 return {displacement:55*Math.sin(Math.PI*2*x/wavelength)*Math.sin(frequency*step),pressure:0,wavelength,frequency,soundWavelength,soundFrequency};
}
export function dopplerState(model,{frequency=200,velocity=150,step=0}={}){
 const time=.0005*(model==='doppler2'?step*.5:step),c=340,period=1/frequency,sourceX=model==='doppler1'?300+velocity*time/.1:300,observerX=model==='doppler2'?150+velocity*time/.1:150;
 const phaseAt=x=>Math.cos(2*Math.PI*(Math.abs(x-sourceX)*.1/(c/frequency)-frequency*time));
 const waves=model==='doppler1'?Array.from({length:Math.ceil(time*frequency)},(_,i)=>({x:300+velocity*i*period/.1,r:c*(time-i*period)/.1})):Array.from({length:Math.ceil(600/(c/frequency/.1))},(_,i)=>({x:300,r:i*c/frequency/.1+c/frequency/.1*(time*frequency-Math.trunc(time*frequency))}));
 return {time,sourceX,observerX,waves,stationaryPhase:phaseAt(150),observerPhase:phaseAt(observerX),wavelength:c/frequency,leftWavelength:(c+velocity)/frequency,rightWavelength:(c-velocity)/frequency,observedFrequency:model==='doppler2'?Math.abs(frequency*(1+(observerX<sourceX?velocity:-velocity)/c)):frequency*c/(c-velocity)};
}

// Neighbor force and semi-implicit integration from the original StringParticle/Particle classes.
export function fieldInitial(model,p={}){
 const side=model==='StringMotion'?81:43,count=model==='StringMotion'?side:side*side,z=new Float64Array(count),v=new Float64Array(count),fixed=new Uint8Array(count),virtual=new Uint8Array(count);
 if(model==='MembraneMotion')for(let i=0;i<side;i++)for(let j=0;j<side;j++){const k=i*side+j,x=.15*(i-Math.floor(side/2)),y=.15*(j-Math.floor(side/2));fixed[k]=p.shape==='square'?(i===0||j===0||i===side-1||j===side-1):x*x+y*y>=(.15*(side/2-1))**2;virtual[k]=fixed[k]&&p.boundary==='open'?1:0;}
 let driven=model==='StringMotion'?side-1:Math.floor(side/2)*side+Math.floor(side/2);if(model==='MembraneMotion'){const c=Math.floor(side/2),m=Math.floor(side*3/4),r=p.shape==='square'?[[c,c],[m,c],[m,m],[side-3,side-3]]:[[c,c],[m,c],[Math.floor(side*7/8),c],[side-4,c]],a=r[p.location??0]??r[0];driven=a[0]*side+a[1];}
 return {model,side,z,v,fixed,virtual,driven,time:0,step:0};
}
export function fieldStep(state,p={}){
 const {side,z,v,fixed,virtual,model}=state,one=model==='StringMotion',dt=one?.001:.0025,macro=dt*20,T=one?(p.tension??100)*100:500,friction=one?.2:.1,gravity=p.gravity?(one?9.8:-6):0,frequency=p.frequency??(one?2:.92),forces=new Float64Array(z.length);state.time+=macro;
 for(let sub=0;sub<20;sub++){
  for(let k=0;k<z.length;k++){
   let f=gravity-friction*v[k];if(one){if(k>0)f+=T*(z[k-1]-z[k]);if(k<side-1)f+=T*(z[k+1]-z[k]);}
   else {const i=Math.floor(k/side),j=k%side;for(const q of [i>0?k-side:-1,i<side-1?k+side:-1,j>0?k-1:-1,j<side-1?k+1:-1])if(q>=0&&!virtual[q])f+=T*(z[q]-z[k]);if(k===state.driven&&p.driven!==false)f+=250*Math.sin(2*Math.PI*frequency*state.time);}
   forces[k]=f;
  }
  for(let k=0;k<z.length;k++){
   if(k===p.held)continue;if(one&&k===0&&p.left!=='free'){z[k]=0;continue;}if(one&&k===side-1){if(p.right===undefined||p.right==='driven'){z[k]=-.2*Math.sin(2*Math.PI*frequency*state.time);continue;}if(p.right==='fixed'){z[k]=0;continue;}}
   if(!one&&fixed[k])continue;v[k]+=forces[k]*dt;z[k]+=v[k]*dt;
  }
 }
 if(!one&&p.boundary==='open'&&p.driven!==false&&!p.gravity){let sum=0,count=0;for(let k=0;k<z.length;k++)if(!fixed[k]){sum+=z[k];count++;}const shift=Math.max(-.05,Math.min(.05,-sum/count));for(let k=0;k<z.length;k++)if(!fixed[k])z[k]+=shift;}
 state.step++;return state;
}
export function fieldSummary(state){let kinetic=0,maxDisplacement=0;for(let i=0;i<state.z.length;i++){kinetic+=state.v[i]**2/2;maxDisplacement=Math.max(maxDisplacement,Math.abs(state.z[i]));}const centre=state.model==='StringMotion'?Math.floor(state.side/2):Math.floor(state.side/2)*state.side+Math.floor(state.side/2);return {step:state.step,time:state.time,centre:state.z[centre],drivenDisplacement:state.z[state.driven],maxDisplacement,kinetic,particles:state.z.length,displacements:Array.from(state.z)};}
