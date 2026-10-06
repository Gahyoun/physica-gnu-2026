// Independent numerical models. Source artwork and ActionScript are not loaded.
import {quantumSpecs} from './quantum-specs.mjs';
export {quantumSpecs};
export const quantumDefaults=s=>Object.fromEntries(s.controls.map(c=>[c.key,c.value]));
const C=(x=0,y=0)=>({x,y}),add=(a,b)=>C(a.x+b.x,a.y+b.y),sub=(a,b)=>C(a.x-b.x,a.y-b.y),mul=(a,b)=>C(a.x*b.x-a.y*b.y,a.x*b.y+a.y*b.x),scale=(a,v)=>C(a.x*v,a.y*v),div=(a,b)=>{const d=b.x*b.x+b.y*b.y;return C((a.x*b.x+a.y*b.y)/d,(a.y*b.x-a.x*b.y)/d);},polar=(v,a)=>C(v*Math.cos(a),v*Math.sin(a));
export const norm2=z=>z.x*z.x+z.y*z.y;
export function factorial(n){let v=1;for(let i=2;i<=n;i++)v*=i;return v;}
export function hermite(n,x){let a=1,b=2*x;if(!n)return a;for(let i=2;i<=n;i++)[a,b]=[b,2*x*b-2*(i-1)*a];return b;}
export const oscillatorWave=(n,x)=>hermite(n,x)*Math.exp(-x*x/2)/Math.sqrt(2**n*factorial(n));
export function laguerre(n,k,x){let a=1,b=k+1-x;if(!n)return a;for(let i=2;i<=n;i++)[a,b]=[b,((2*i+k-1-x)*b-(i+k-1)*a)/i];return b;}
export const hydrogenRadial=(n,l,r)=>2/n**2*Math.sqrt(factorial(n-l-1)/factorial(n+l))*Math.exp(-r/n)*(2*r/n)**l*laguerre(n-l-1,2*l+1,2*r/n);
export function legendre(l,m,x){const k=Math.abs(m);if(k>l||Math.abs(x)>1)return 0;let a=1;for(let i=1;i<=k;i++)a*=-(2*i-1)*Math.sqrt((1-x)*(1+x));let b=x*(2*k+1)*a,v=l===k?a:b;for(let i=k+2;i<=l;i++){v=((2*i-1)*x*b-(i+k-1)*a)/(i-k);[a,b]=[b,v];}return m<0?v*(-1)**k*factorial(l-k)/factorial(l+k):v;}
export const sphericalAmplitude=(l,m,theta)=>Math.sqrt((2*l+1)*factorial(l-m)/(4*Math.PI*factorial(l+m)))*legendre(l,m,Math.cos(theta));
export const boxDensity=(n,x)=>Math.sin(n*Math.PI*x/400)**4;
export function boxProbability(n,x1,x2){const a=Math.min(x1,x2),b=Math.max(x1,x2);return (b-a-200/(n*Math.PI)*(Math.sin(2*n*Math.PI*b/400)-Math.sin(2*n*Math.PI*a/400)))/400;}
export function dispersionSpeeds(mode){return Array.from({length:9},(_,i)=>{const k=16+i;return Math.max(0,Math.min(100,Math.round([50,50*k/20,50*Math.sqrt(20/k),50*Math.sqrt(k/20),1000/k,50*(60/k-2),50*(1-10*(k/20-1)**2),50*(1+10*(k/20-1)**2)][mode-1])));});}
export function scattering(p,barrier=true){const E=p.energy===0?.01:p.energy,V=p.height,k=Math.sqrt(E),a=(p.width||0)/2,w=.2*Math.PI*E;
 if(!barrier){const q=Math.sqrt(Math.abs(E-V))||1e-10,above=E>V;const R=above?C((k-q)/(k+q)):div(C(k,-q),C(k,q)),T=above?C(2*k/(k+q)):div(C(2*k),C(k,q));return {step:true,E,V,k,q,a:0,w,above,R,T,reflection:norm2(R),transmission:1-norm2(R)};}
 // The threshold solution avoids cancellation of divergent A/B coefficients.
 if(E===V){const T=div(polar(1,-2*k*a),C(1,-k*a)),R=mul(polar(1,-2*k*a),div(C(0,-k*a),C(1,-k*a)));return {E,V,k,q:0,a,w,above:false,R,T,reflection:norm2(R),transmission:norm2(T),threshold:true};}
 const q=Math.sqrt(Math.abs(E-V)),above=E>V,e=polar(1,-2*k*a);let A,B,R,T;
 if(above){const z=2*q*a,d=C(2*k*q*Math.cos(z),-(k*k+q*q)*Math.sin(z)),den=sub(scale(polar(1,-z),(k+q)**2),scale(polar(1,z),(k-q)**2));A=div(scale(polar(1,-(k+q)*a),2*k*(k+q)),den);B=div(scale(polar(1,-(k-q)*a),-2*k*(k-q)),den);R=div(scale(mul(e,C(0,1)),(q*q-k*k)*Math.sin(z)),d);T=div(scale(e,2*k*q),d);}
 else{const u=Math.exp(-q*a),u2=u*u,v2=1/u2,sh=(v2-u2)/2,ch=(v2+u2)/2,d=C(-(k*k-q*q)*sh,-2*k*q*ch),den=C((k*k-q*q)*(u2-v2),-2*k*q*(u2+v2)),base=polar(1,-k*a);A=div(mul(scale(base,2*k*u),C(k,-q)),den);B=div(mul(scale(base,-2*k/u),C(k,q)),den);R=div(scale(e,(-q*q-k*k)*sh),d);T=div(mul(e,C(0,-2*k*q)),d);}
 return {E,V,k,q,a,w,above,A,B,R,T,reflection:norm2(R),transmission:norm2(T)};
}
export function scatteringWave(z,x,t){const {k,q,a,w,R,T,A,B}=z,phase=polar(1,-w*t);if(x<-a)return mul(add(polar(1,k*x),mul(polar(1,-k*x),R)),phase);if(z.step)return mul(z.above?polar(1,q*x):C(Math.exp(-q*x)),mul(T,phase));if(x>=a)return mul(polar(1,k*x),mul(T,phase));if(z.threshold){const right=mul(T,polar(1,k*a));return mul(mul(right,C(1,k*(x-a))),phase);}return mul(z.above?add(mul(polar(1,q*x),A),mul(polar(1,-q*x),B)):add(scale(A,Math.exp(q*x)),scale(B,Math.exp(-q*x))),phase);}
export function quantumWave(type,p,x,t=0,prepared){
 switch(type){
 case 'tftn':return polar(1,-2*Math.PI*t/5);
 case 'standingwave':return polar(Math.sin(p.mode*Math.PI*x/5),-.2*Math.PI*p.mode*p.mode*t);
 case 'standingwavemix':return scale(add(polar(Math.sin(p.mode1*Math.PI*x/5),-.2*Math.PI*p.mode1*p.mode1*t),polar(Math.sin(p.mode2*Math.PI*x/5),-.2*Math.PI*p.mode2*p.mode2*t)),.5);
 case 'planestate':{const k=Math.sqrt(p.energy),w=.2*Math.PI*p.energy;if(p.mode===1)return polar(1,k*x-w*t);if(p.mode===2)return polar(1,-k*x-w*t);return add(polar(p.mix/100,k*x-w*t),polar(1-p.mix/100,-k*x-w*t));}
 case 'barriergraph':{const z=scattering({...p,energy:x});return C(z.reflection,z.transmission);}
 case 'potentialstep':case 'potentialbarrier':return scatteringWave(prepared||scattering(p,type==='potentialbarrier'),x,t);
 case 'complexwave':{const a=2.5*x-1.2566370614359172*t;return C([1,2,4].includes(p.mode)?Math.cos(a):0,p.mode===4?Math.cos(a):[1,3].includes(p.mode)?Math.sin(a):0);}
 case 'probality':{const u=x/p.wavelength,a=u+p.phase;return C(p.shape===0?Math.sin(a):p.shape===1?Math.sin(x/480*3.1415926)*Math.sin(a):p.shape===2?Math.sin(x/480*3.1415926)*Math.sin(u*u/10+p.phase):Math.sin(u*1.5)*Math.sin(a));}
 case 'boxprobality':return C(boxDensity(p.n||1,x));
 case 'wavepacket':return C(25*(Math.sin(p.k1*x/100-p.w1*t)+Math.sin(p.k2*x/100-p.w2*t)));
 case 'wavemix':{let v=0;for(let i=1;i<=16;i++)v+=p['a'+i]/7*Math.cos((8+i*2)*(x-230)/100);return C(v);}
 case 'wavemix2':{let sum=0,total=0;for(let k=0;k<60;k++){const a=Math.exp(-((k-p.center)**2)/(4*p.bandwidth**2));total+=a;sum+=a*Math.cos(k*(x-315)/100);}return C(sum/total);}
 case 'wavemixdispersion':{let v=0;for(let i=1;i<=9;i++){const k=i+15,a=15*Math.exp(-((k-20)**2)/9),w=p['a'+i]*k/100;v+=a*Math.sin(k*(x-10)/100-w*t);}return C(v);}
 case 'harmonichermite':return C(oscillatorWave(p.mode,x));
 case 'laguerreradial':return C(hydrogenRadial(p.n,p.l,x));
 case 'sphericalharmonics':return C(sphericalAmplitude(p.l,p.m,x*Math.PI/180));
 default:throw Error('Unknown quantum model '+type);
 }
}
export function quantumSeries(s,p,t){const count=s.type==='sphericalharmonics'?361:341,z=['potentialstep','potentialbarrier'].includes(s.type)?scattering(p,s.type==='potentialbarrier'):null;return Array.from({length:count},(_,i)=>{const x=s.x[0]+(s.x[1]-s.x[0])*i/(count-1),v=quantumWave(s.type,p,x,t,z);return {x,re:v.x,im:v.y,density:norm2(v)};});}
