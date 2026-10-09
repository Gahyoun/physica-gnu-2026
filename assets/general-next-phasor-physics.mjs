export {generalNextPhasorSpecs} from './general-next-phasor-specs.mjs';
export const harmonic=(a,p,w,t)=>[a*Math.cos(p-w*t),a*Math.sin(p-w*t)];
export function coefficient(mode,n){let a=0,p=0;const A=100,pi=Math.PI;
 if(mode===0)a=n%2?A*4/pi/n:0;
 else if(mode===1)a=n?A*2/pi/n*(n%2?1:-1):0;
 else if(mode===2){a=n===0?A*(4/pi-1):n%2?0:-A*8/pi/(n*n-1);p=n%2?0:pi/2;}
 else if(mode===3){a=n===0?A*(2/pi-1):n===1?A:n%2?0:-A*4/pi/(n*n-1);p=n%2?0:pi/2;}
 else if(mode===4){a=n%2?-A*8/n/n/pi/pi:0;p=n%2?pi/2:0;}
 else if(mode===5){if(n===0){a=-.5*A;p=pi/2;}else if(n%2){const c=-4/n/n/pi/pi,d=2/n/pi;a=A*Math.hypot(c,d);p=Math.atan2(c,d);}else a=-A*2/n/pi;}
 else if(mode===6){a=n===0?A*(2/3-1):A*8/n/n/pi/pi*(n%2?-1:1);p=pi/2;}
 return {a,p};}
export function fourierValue(mode,n,x){let total=0;for(let i=0;i<=n;i++){if(mode===0&&i%2)total+=300/Math.PI/i*Math.sin(i*2*Math.PI/200*x);else if(mode===1&&i)total+=150/Math.PI/i*(i%2?1:-1)*Math.sin(i*2*Math.PI/200*x);else if(mode===2)total+=i===0?150/Math.PI:i%2?0:-300/Math.PI/(i*i-1)*Math.cos(i*Math.PI/200*x);}return total;}
export const exactFourier=(mode,x)=>mode===0?(Math.trunc(x/100)%2===0?75:-75):mode===1?.75*((x+100)%200-100):75*Math.sin(Math.PI*(x%200)/200);
export function phasorState(spec,p,t){const type=spec.type,dir=p.direction?1:-1,w=10*(p.omega??1),selected=p.selected??0,phi=(p.phase??0)*Math.PI/180;let vectors=[],waves=[],grid=[],meta={};
 const samples=f=>Array.from({length:201},(_,i)=>[2*i,f(2*i)]);
 if(type==='phasor1'){const k=dir*w/200;vectors=[harmonic(70,k*selected,w,t)];waves=[samples(x=>70*Math.sin(k*x-w*t))];grid=Array.from({length:11},(_,i)=>({x:40*i,y:0,v:harmonic(20,k*40*i,w,t)}));meta={k,omega:w};}
 else if(type==='phasor2'){const k=dir*w/500;grid=Array.from({length:88},(_,i)=>{const x=40*Math.floor(i/8),y=40*(i%8),r=Math.hypot(x+200,y);return{x,y,v:harmonic(30*Math.sqrt(200/r),k*r,w,t)};});const r=Math.hypot((p.selected??0)+200,p.selectedY??0);vectors=[harmonic(75,p.pickedPhase??50,w,t)];meta={k,omega:w};}
 else if(type==='phasor3'){const w1=10*p.omega1,w2=10*p.omega2,k1=dir*w1/200,k2=w2/200,a2=35*p.amp2;vectors=[harmonic(35,k1*selected,w1,t),harmonic(a2,k2*selected,w2,t)];const f=x=>35*Math.sin(k1*x-w1*t),g=x=>a2*Math.sin(k2*x-w2*t);waves=[samples(f),samples(g),samples(x=>f(x)+g(x))];meta={k1,k2,omega1:w1,omega2:w2};}
 else if(type==='phasor4'){vectors=Array.from({length:p.number+1},(_,n)=>{const{a,p:phase}=coefficient(p.mode??0,n);return harmonic(a,phase,p.omega*n*5,t);});meta={order:p.number,mode:p.mode};}
 else if(type==='phasor5'){waves=[Array.from({length:300},(_,i)=>[2*i,45*Math.sin(2*i/50)*Math.sin(-10*t)])];grid=Array.from({length:31},(_,i)=>({x:i*20,y:0,v:harmonic(45*Math.sin(i*20/50),0,10,t)}));meta={omega:10};}
 else if(type==='phasor6'){const k=2*Math.PI/p.wavelength,omega=k*200,y1=175-p.slitWidth/2,y2=175+p.slitWidth/2,x=p.selected??300,y=p.selectedY??100,r1=Math.hypot(x-5,y-y1),r2=Math.hypot(x-5,y-y2);vectors=[harmonic(40,k*r1,omega,t),harmonic(40,k*r2+phi,omega,t)];meta={k,omega,y1,y2,r1,r2,phaseDifference:k*(r2-r1)+phi,srcx:5,x,y,wavelength:p.wavelength};}
 else if(type==='phasor7'){vectors=[harmonic(p.A1,0,10,t),harmonic(p.A2,phi,10,t)];meta={amplitude:Math.sqrt(p.A1*p.A1+p.A2*p.A2+2*p.A1*p.A2*Math.cos(phi)),phase:phi};}
 else if(type==='fourier1new'){waves=[Array.from({length:201},(_,i)=>[2*i,exactFourier(p.mode,2*i)]),samples(x=>fourierValue(p.mode,p.order,x))];meta={mode:p.mode,order:p.order};}
 const components=type==='fourier1new'?Array.from({length:Math.min(29,p.order)+1},(_,j)=>j).filter(j=>p.mode===1?j>=1:p.mode===0?j%2:j%2===0).map(j=>({order:j,points:Array.from({length:201},(_,i)=>[2*i,fourierValue(p.mode,j,2*i)-fourierValue(p.mode,j-1,2*i)])})):[];
 const sum=vectors.reduce((a,v)=>[a[0]+v[0],a[1]+v[1]],[0,0]);return{t,vectors,waves,grid,sum,meta,components};}
export function phasorCSV(q){return 'time,series,x,y\n'+q.waves.flatMap((a,j)=>a.map(([x,y])=>[q.t,j,x,y].join(','))).concat(q.vectors.map(([x,y],j)=>[q.t,'vector'+j,x,y].join(',')),(q.history||[]).map(([x,y],i)=>[q.t,'history'+i,x,y].join(',')),(q.components||[]).flatMap(c=>c.points.map(([x,y])=>[q.t,'harmonic'+c.order,x,y].join(',')))).join('\n')+'\n';}
