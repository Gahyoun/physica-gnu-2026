export const KEPLER_DEFAULTS=Object.freeze({n0:100,dn:2,iso:48});
const HBAR=6.58211928e-16,NR=50,NT=10,NP=300,RMIN=1600,RMAX=40000,TMIN=.35*Math.PI,TMAX=.5*Math.PI,gridCache=new WeakMap();
// These stable product recurrences are copied from the original numerical
// routines Radial_n_n_1 and Theta_l_l, including their phase/normalization.
export function circularRadial(n,r){let v=1;for(let i=1;i<=n;i++)v=v*2*r/n/Math.sqrt(2*i*(2*i-1));return v*Math.sqrt(2*n)/(n*r)*Math.exp(-r/n);}
export function circularTheta(l,t){if(!l)return 1;let v=1;const s=Math.sin(t);for(let i=1;i<=l;i++)v*=-(2*i-1)/Math.sqrt(2*i*(2*i-1))*s;return v*Math.sqrt(2*l+1);}
export function buildKeplerPacket(parameters={}){
  const p={...KEPLER_DEFAULTS,...parameters},start=Math.floor(p.n0-4*p.dn),end=Math.ceil(p.n0+4*p.dn),terms=[];
  for(let n=start;n<=end;n++){const re=Math.exp(-((n-p.n0)**2)/(4*p.dn*p.dn)),l=n-1;terms.push({n,l,m:l,re,im:0,energy:-13.5984/(n*n),radialN:n+end-start,R:Float64Array.from({length:NR+1},(_,i)=>circularRadial(n+end-start,RMIN+i*(RMAX-RMIN)/NR)),T:Float64Array.from({length:NT+1},(_,i)=>circularTheta(l,TMIN+i*(TMAX-TMIN)/NT)),C:Float64Array.from({length:NP+1},(_,i)=>Math.cos(l*i*2*Math.PI/NP)),S:Float64Array.from({length:NP+1},(_,i)=>Math.sin(l*i*2*Math.PI/NP))});}
  const norm=terms.reduce((s,q)=>s+q.re*q.re,0)*4*Math.PI,extent=Math.min(40000,Math.max(4000,(p.n0+10*p.dn)**2*1.3)),model={parameters:p,terms,norm,extent,kind:'kepler3d',basisCount:terms.length,energy:terms.reduce((s,q)=>s+q.re*q.re*q.energy,0)/(norm/(4*Math.PI))};model.initialMax=keplerSphericalGrid(model,0).maxAmplitude;return model;
}
export function keplerSampleSpherical(model,r,t,phi,time=0){let re=0,im=0;for(const q of model.terms){const a=q.m*phi-q.energy*time/HBAR,v=q.re*circularRadial(q.radialN,r)*circularTheta(q.l,t);re+=v*Math.cos(a);im+=v*Math.sin(a);}return {re,im,density:(re*re+im*im)/model.norm,phase:Math.atan2(im,re),relativeAmplitude:Math.hypot(re,im)/(model.initialMax||1)};}
export function keplerSample(model,x,y,z,time=0){const r=Math.hypot(x,y,z);return r?keplerSampleSpherical(model,r,Math.acos(z/r),Math.atan2(y,x),time):{re:0,im:0,density:0,phase:0,relativeAmplitude:0};}
export function keplerSphericalGrid(model,time=0){
  const cached=gridCache.get(model);if(cached?.time===time)return cached.value;const re=new Float64Array((NR+1)*(NT+1)*(NP+1)),im=new Float64Array(re.length);let maxAmplitude=0;
  for(const q of model.terms){const a=-q.energy*time/HBAR,c=Math.cos(a),s=Math.sin(a),cr=q.re*c,ci=q.re*s;for(let ir=0;ir<=NR;ir++)for(let it=0;it<=NT;it++){const amp=q.R[ir]*q.T[it],base=(ir*(NT+1)+it)*(NP+1);for(let ip=0;ip<=NP;ip++){re[base+ip]+=amp*(cr*q.C[ip]-ci*q.S[ip]);im[base+ip]+=amp*(cr*q.S[ip]+ci*q.C[ip]);}}}
  for(let k=0;k<re.length;k++)maxAmplitude=Math.max(maxAmplitude,Math.hypot(re[k],im[k]));const value={re,im,maxAmplitude};gridCache.set(model,{time,value});return value;
}
export function keplerCartesianGrid(model,time=0,size=33){
  const sph=keplerSphericalGrid(model,time),re=new Float64Array(size**3),im=new Float64Array(size**3),amplitude=new Float64Array(size**3),extent=model.extent;let maxAmplitude=0;
  const interp=(array,r,t,p)=>{const rf=(r-RMIN)/(RMAX-RMIN)*NR,tf=(t-TMIN)/(TMAX-TMIN)*NT,pf=((p%(2*Math.PI)+2*Math.PI)%(2*Math.PI))/(2*Math.PI)*NP,ri=Math.min(NR-1,Math.floor(rf)),ti=Math.min(NT-1,Math.floor(tf)),pi=Math.min(NP-1,Math.floor(pf));let v=0;for(let dr=0;dr<=1;dr++)for(let dt=0;dt<=1;dt++)for(let dp=0;dp<=1;dp++)v+=(dr?rf-ri:1-rf+ri)*(dt?tf-ti:1-tf+ti)*(dp?pf-pi:1-pf+pi)*array[((ri+dr)*(NT+1)+ti+dt)*(NP+1)+pi+dp];return v;};
  for(let x=0;x<size;x++)for(let y=0;y<size;y++)for(let z=0;z<size;z++){const xx=-extent+x*2*extent/(size-1),yy=-extent+y*2*extent/(size-1),zz=-extent+z*2*extent/(size-1),r=Math.hypot(xx,yy,zz),t=r?Math.acos(zz/r):0,k=(x*size+y)*size+z;if(r<RMIN||r>RMAX||t<TMIN||t>TMAX)continue;const p=Math.atan2(yy,xx);re[k]=interp(sph.re,r,t,p);im[k]=interp(sph.im,r,t,p);amplitude[k]=Math.hypot(re[k],im[k]);maxAmplitude=Math.max(maxAmplitude,amplitude[k]);}return {size,re,im,amplitude,maxAmplitude};
}
export function keplerMarginals(model,time=0,size=33){const g=keplerCartesianGrid(model,time,size),step=model.extent*2/(size-1),curves=Array.from({length:3},()=>new Float64Array(size)),mean=[0,0,0];let mass=0;for(let x=0;x<size;x++)for(let y=0;y<size;y++)for(let z=0;z<size;z++){const k=(x*size+y)*size+z,d=(g.re[k]**2+g.im[k]**2)/model.norm;curves[0][x]+=d*step*step;curves[1][y]+=d*step*step;curves[2][z]+=d*step*step;mass+=d*step**3;[x,y,z].forEach((v,a)=>mean[a]+=(-model.extent+v*step)*d*step**3);}return {curves,mean,mass,step};}
