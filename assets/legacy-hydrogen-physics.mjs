import {hydrogenRadial,sphericalAmplitude} from './quantum-physics.mjs';
export const HYDROGEN_DEFAULTS=Object.freeze({ky:.05,kz:0,z0:15,uncertainty:5,iso:48});
const HBAR=6.58211928e-16,NR=200,NT=36,NP=36,RMIN=.05,RMAX=50,TMIN=.001,TMAX=Math.PI-.001,NMAX=Math.ceil((3*500)**.333333);
const thetaAmplitude=(l,m,t)=>(-1)**m*sphericalAmplitude(l,m,t);
const lmIndex=(l,m)=>l*l+l+m;
let sourceBasis;
const gridCache=new WeakMap();
function basisData(){
  if(sourceBasis)return sourceBasis;
  const radial=new Map(),theta=[],cos=[],sin=[];
  for(let n=1;n<=NMAX;n++)for(let l=0;l<n;l++)radial.set(n+','+l,Float64Array.from({length:NR+1},(_,i)=>hydrogenRadial(n,l,RMIN+i*(RMAX-RMIN)/NR)));
  for(let l=0;l<NMAX;l++)for(let m=-l;m<=l;m++)theta[lmIndex(l,m)]=Float64Array.from({length:NT+1},(_,i)=>thetaAmplitude(l,m,TMIN+i*(TMAX-TMIN)/NT));
  for(let m=1-NMAX;m<NMAX;m++){cos[m+NMAX-1]=Float64Array.from({length:NP+1},(_,j)=>Math.cos(m*j*2*Math.PI/NP));sin[m+NMAX-1]=Float64Array.from({length:NP+1},(_,j)=>Math.sin(m*j*2*Math.PI/NP));}
  return sourceBasis={radial,theta,cos,sin};
}
export function buildHydrogenPacket(parameters={}){
  const p={...HYDROGEN_DEFAULTS,...parameters},b=basisData(),NM=2*NMAX-1,A=(NR+1)*(NT+1),fr=new Float64Array(A*NM),fi=new Float64Array(A*NM),div=(2*Math.PI)**1.5*(Math.SQRT2*p.uncertainty)**3;
  // Preserve a source quirk: Gaussian sampling uses dimensions+1 as divisor,
  // whereas the basis and spherical quadrature use the dimensions themselves.
  for(let ir=0;ir<=NR;ir++)for(let it=0;it<=NT;it++){
    const r=RMIN+ir*(RMAX-RMIN)/(NR+1),t=TMIN+it*(TMAX-TMIN)/(NT+1),rho=r*Math.sin(t),z=r*Math.cos(t),base=(ir*(NT+1)+it)*NM,gr=[],gi=[];
    for(let ip=0;ip<=NP;ip++){const a=ip*2*Math.PI/(NP+1),x=rho*Math.cos(a),y=rho*Math.sin(a),d=z-p.z0,amp=Math.exp(-(x*x+y*y+d*d)/(4*p.uncertainty**2))/div*(ip===0||ip===NP?.5:1),phase=p.ky*y+p.kz*d;gr[ip]=amp*Math.cos(phase);gi[ip]=amp*Math.sin(phase);}
    for(let m=0;m<NM;m++){let re=0,im=0;for(let ip=0;ip<=NP;ip++){const c=b.cos[m][ip],s=b.sin[m][ip];re+=gr[ip]*c+gi[ip]*s;im+=gi[ip]*c-gr[ip]*s;}fr[base+m]=re;fi[base+m]=im;}
  }
  const ar=Array.from({length:NMAX*NMAX},()=>new Float64Array(NR+1)),ai=Array.from({length:NMAX*NMAX},()=>new Float64Array(NR+1));
  for(let l=0;l<NMAX;l++)for(let m=-l;m<=l;m++){const lm=lmIndex(l,m),mm=m+NMAX-1,T=b.theta[lm];for(let ir=0;ir<=NR;ir++){let re=0,im=0;for(let it=0;it<=NT;it++){const t=TMIN+it*(TMAX-TMIN)/NT,w=T[it]*Math.sin(t)*(it===0||it===NT?.5:1),idx=(ir*(NT+1)+it)*NM+mm;re+=fr[idx]*w;im+=fi[idx]*w;}const r=RMIN+ir*(RMAX-RMIN)/NR,w=r*r*(ir===0||ir===NR?.5:1);ar[lm][ir]=re*w;ai[lm][ir]=im*w;}}
  const all=[];
  for(let n=1;n<=NMAX;n++)for(let l=0;l<n;l++)for(let m=-l;m<=l;m++){const R=b.radial.get(n+','+l),lm=lmIndex(l,m);let re=0,im=0;for(let ir=0;ir<=NR;ir++){re+=R[ir]*ar[lm][ir];im+=R[ir]*ai[lm][ir];}all.push({n,l,m:m+0,re,im,energy:-13.5984/(n*n)});}
  const peak=Math.max(...all.map(q=>Math.hypot(q.re,q.im))),terms=all.filter(q=>Math.hypot(q.re,q.im)>.01*peak),norm=terms.reduce((s,q)=>s+q.re*q.re+q.im*q.im,0),model={parameters:p,terms,norm,kind:'hydrogen3d',extent:50,basisCount:all.length};
  const initial=hydrogenSphericalGrid(model,0);model.initialMax=initial.maxAmplitude;model.energy=terms.reduce((v,q)=>v+(q.re*q.re+q.im*q.im)*q.energy,0)/norm;return model;
}
export function hydrogenSampleSpherical(model,r,theta,phi,time=0){
  let re=0,im=0;for(const q of model.terms){const a=q.m*phi-q.energy*time/HBAR,v=hydrogenRadial(q.n,q.l,r)*thetaAmplitude(q.l,q.m,theta),c=Math.cos(a),s=Math.sin(a);re+=(q.re*c-q.im*s)*v;im+=(q.re*s+q.im*c)*v;}
  return {re,im,density:(re*re+im*im)/model.norm,phase:Math.atan2(im,re),relativeAmplitude:Math.hypot(re,im)/(model.initialMax||1)};
}
export function hydrogenSample(model,x,y,z,time=0){const r=Math.hypot(x,y,z);return hydrogenSampleSpherical(model,r,r?Math.acos(Math.max(-1,Math.min(1,z/r))):0,Math.atan2(y,x),time);}
export function hydrogenSphericalGrid(model,time){
  const cached=gridCache.get(model);if(cached?.time===time)return cached.value;
  const b=basisData(),NM=2*NMAX-1,L=NMAX*NMAX,ar=Array.from({length:L},()=>new Float64Array(NR+1)),ai=Array.from({length:L},()=>new Float64Array(NR+1));
  for(const q of model.terms){const R=b.radial.get(q.n+','+q.l),k=lmIndex(q.l,q.m),phase=-q.energy*time/HBAR,c=Math.cos(phase),s=Math.sin(phase),r=q.re*c-q.im*s,i=q.re*s+q.im*c;for(let j=0;j<=NR;j++){ar[k][j]+=r*R[j];ai[k][j]+=i*R[j];}}
  const tr=new Float64Array((NR+1)*(NT+1)*NM),ti=new Float64Array(tr.length);
  for(let l=0;l<NMAX;l++)for(let m=-l;m<=l;m++){const k=lmIndex(l,m),T=b.theta[k],mm=m+NMAX-1;for(let ir=0;ir<=NR;ir++)for(let it=0;it<=NT;it++){const j=(ir*(NT+1)+it)*NM+mm;tr[j]+=ar[k][ir]*T[it];ti[j]+=ai[k][ir]*T[it];}}
  const re=new Float64Array((NR+1)*(NT+1)*(NP+1)),im=new Float64Array(re.length);let maxAmplitude=0;
  for(let ir=0;ir<=NR;ir++)for(let it=0;it<=NT;it++)for(let ip=0;ip<=NP;ip++){let r=0,i=0;const j=(ir*(NT+1)+it)*NM;for(let m=0;m<NM;m++){const c=b.cos[m][ip],s=b.sin[m][ip];r+=tr[j+m]*c-ti[j+m]*s;i+=tr[j+m]*s+ti[j+m]*c;}const k=(ir*(NT+1)+it)*(NP+1)+ip;re[k]=r;im[k]=i;maxAmplitude=Math.max(maxAmplitude,Math.hypot(r,i));}const value={re,im,maxAmplitude};gridCache.set(model,{time,value});return value;
}
export function hydrogenCartesianGrid(model,time=0,size=25){
  const sph=hydrogenSphericalGrid(model,time),re=new Float64Array(size**3),im=new Float64Array(size**3),amplitude=new Float64Array(size**3);let maxAmplitude=0;
  const interpolate=(array,r,t,p)=>{const rf=Math.max(0,Math.min(NR,(r-RMIN)/(RMAX-RMIN)*NR)),tf=Math.max(0,Math.min(NT,(t-TMIN)/(TMAX-TMIN)*NT)),pf=((p%(2*Math.PI)+2*Math.PI)%(2*Math.PI))/(2*Math.PI)*NP,ri=Math.min(NR-1,Math.floor(rf)),ti=Math.min(NT-1,Math.floor(tf)),pi=Math.min(NP-1,Math.floor(pf));let v=0;for(let dr=0;dr<=1;dr++)for(let dt=0;dt<=1;dt++)for(let dp=0;dp<=1;dp++){const w=(dr?rf-ri:1-(rf-ri))*(dt?tf-ti:1-(tf-ti))*(dp?pf-pi:1-(pf-pi));v+=w*array[((ri+dr)*(NT+1)+ti+dt)*(NP+1)+pi+dp];}return v;};
  for(let x=0;x<size;x++)for(let y=0;y<size;y++)for(let z=0;z<size;z++){const xx=-50+x*100/(size-1),yy=-50+y*100/(size-1),zz=-50+z*100/(size-1),r=Math.hypot(xx,yy,zz),k=(x*size+y)*size+z;if(r>50)continue;const theta=r?Math.acos(zz/r):0,phi=Math.atan2(yy,xx);re[k]=interpolate(sph.re,r,theta,phi);im[k]=interpolate(sph.im,r,theta,phi);amplitude[k]=Math.hypot(re[k],im[k]);maxAmplitude=Math.max(maxAmplitude,amplitude[k]);}return {size,re,im,amplitude,maxAmplitude};
}
export function hydrogenMarginals(model,time=0,size=33){
  const g=hydrogenCartesianGrid(model,time,size),step=100/(size-1),curves=Array.from({length:3},()=>new Float64Array(size)),mean=[0,0,0];let mass=0;
  for(let x=0;x<size;x++)for(let y=0;y<size;y++)for(let z=0;z<size;z++){const k=(x*size+y)*size+z,d=(g.re[k]**2+g.im[k]**2)/model.norm;curves[0][x]+=d*step*step;curves[1][y]+=d*step*step;curves[2][z]+=d*step*step;mass+=d*step**3;[x,y,z].forEach((v,a)=>mean[a]+=(-50+v*step)*d*step**3);}return {curves,mean,mass,step};
}
