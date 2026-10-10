/** MotionBox3DApp / quantumMath.Box3D bytecode port. ħ²/(2m) = 1, cube [-1,1]³. */
export const BOX_DEFAULTS=Object.freeze({kx:2,ky:0,kz:0,x0:0,uncertainty:.1,iso:28});
export const HARMONIC_DEFAULTS=Object.freeze({...BOX_DEFAULTS,kx:0,ky:5,x0:.5,omega:50});
export function isoFraction(v){return v<=9?.001*v:v<=28?.005*(v-8):v<=48?.01*(v-18):.02*(v-33);}
const multiply=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]];
const basis=(n,x)=>Math.sin(n*Math.PI*(x+1)/2);
export function boxBasisList(count=1000){
  // The original build(count) uses the octant Weyl energy radius, not the lowest count states.
  const emax=(count*(Math.PI/2)**3*6/Math.PI)**(2/3),limit=Math.floor(Math.sqrt(emax)/(Math.PI/2)),list=[];
  for(let x=1;x<=limit;x++)for(let y=1;y<=limit;y++)for(let z=1;z<=limit;z++){
    const energy=(x*x+y*y+z*z)*Math.PI*Math.PI/4;if(energy<=emax)list.push({x,y,z,energy});
  }return list;
}
export function buildBoxPacket(parameters={}){
  return projectPacket({...BOX_DEFAULTS,...parameters},boxBasisList(),basis,'box3d');
}
export function harmonicBasis(n,x,omega=50){
  const u=x*Math.sqrt(omega/2),a=(omega/(2*Math.PI))**.25*Math.exp(-u*u/2);if(n===0)return a;
  let h0=a,h1=Math.SQRT2*u*a;if(n===1)return h1;
  for(let k=2;k<=n;k++){const h=Math.sqrt(2/k)*u*h1-Math.sqrt((k-1)/k)*h0;h0=h1;h1=h;}return h1;
}
export function harmonicBasisList(omega=50,count=1000){
  const emax=(count*omega**3*6)**(1/3),limit=Math.floor(emax/omega-.5),list=[];
  for(let x=0;x<=limit;x++)for(let y=0;y<=limit;y++)for(let z=0;z<=limit;z++){const energy=(x+y+z+1.5)*omega;if(energy<=emax)list.push({x:x+1,y:y+1,z:z+1,energy});}return list;
}
export function buildHarmonicPacket(parameters={}){
  const p={...HARMONIC_DEFAULTS,...parameters};return projectPacket(p,harmonicBasisList(p.omega),(n,x)=>harmonicBasis(n-1,x,p.omega),'harmonic3d');
}
function projectPacket(p,all,basisFn,kind){
  const N=Math.max(...all.map(q=>q.x)),axes=[];
  for(let axis=0;axis<3;axis++){
    const center=axis===0?p.x0:0,k=[p.kx,p.ky,p.kz][axis],a=[];
    for(let n=1;n<=N;n++){
      let re=0,im=0;
      for(let j=0;j<51;j++){
        const x=-1+j*.04,d=x-center,amp=Math.exp(-d*d/(4*p.uncertainty**2))*basisFn(n,x),phase=k*d;
        re+=amp*Math.cos(phase);im+=amp*Math.sin(phase);
      }a.push([re,im]);
    }axes.push(a);
  }
  const divisor=(2*Math.PI)**1.5*(Math.SQRT2*p.uncertainty)**3;
  for(const q of all){const c=multiply(multiply(axes[0][q.x-1],axes[1][q.y-1]),axes[2][q.z-1]);q.re=c[0]/divisor;q.im=c[1]/divisor;}
  const maxCoefficient=Math.max(...all.map(q=>Math.hypot(q.re,q.im))),cutoff=kind==='harmonic3d'?.02:.04,terms=all.filter(q=>Math.hypot(q.re,q.im)>cutoff*maxCoefficient);
  const norm=terms.reduce((n,q)=>n+q.re*q.re+q.im*q.im,0),model={parameters:p,terms,N,norm,basisCount:all.length,basisFn,kind};
  const initial=boxGrid(model,0,51);model.initialMax=initial.maxAmplitude;
  model.energy=terms.reduce((v,q)=>v+(q.re*q.re+q.im*q.im)*q.energy,0)/norm;
  return model;
}
export function boxSample(model,x,y,z,time=0){
  let re=0,im=0;
  const f=model.basisFn||basis;
  for(const q of model.terms){const phase=-q.energy*time,c=Math.cos(phase),s=Math.sin(phase),v=f(q.x,x)*f(q.y,y)*f(q.z,z);re+=(q.re*c-q.im*s)*v;im+=(q.re*s+q.im*c)*v;}
  return {re,im,density:(re*re+im*im)/model.norm,phase:Math.atan2(im,re),relativeAmplitude:Math.hypot(re,im)/(model.initialMax||1)};
}
/** Three tensor contractions keep the original selected basis, avoiding per-voxel per-mode loops. */
export function boxGrid(model,time=0,size=25){
  const f=model.basisFn||basis,N=model.N,M=size,ns=N*N,cRe=new Float64Array(N**3),cIm=new Float64Array(N**3),B=Array.from({length:N},(_,n)=>Float64Array.from({length:M},(_,j)=>f(n+1,-1+2*j/(M-1))));
  for(const q of model.terms){const idx=(q.x-1)*ns+(q.y-1)*N+q.z-1,a=-q.energy*time,c=Math.cos(a),s=Math.sin(a);cRe[idx]=q.re*c-q.im*s;cIm[idx]=q.re*s+q.im*c;}
  const aRe=new Float64Array(M*ns),aIm=new Float64Array(M*ns);
  for(let x=0;x<M;x++)for(let y=0;y<N;y++)for(let z=0;z<N;z++){let r=0,i=0;for(let n=0;n<N;n++){const k=n*ns+y*N+z,b=B[n][x];r+=b*cRe[k];i+=b*cIm[k];}const k=x*ns+y*N+z;aRe[k]=r;aIm[k]=i;}
  const bRe=new Float64Array(M*M*N),bIm=new Float64Array(M*M*N);
  for(let x=0;x<M;x++)for(let y=0;y<M;y++)for(let z=0;z<N;z++){let r=0,i=0;for(let n=0;n<N;n++){const k=x*ns+n*N+z,b=B[n][y];r+=b*aRe[k];i+=b*aIm[k];}const k=(x*M+y)*N+z;bRe[k]=r;bIm[k]=i;}
  const re=new Float64Array(M**3),im=new Float64Array(M**3),amplitude=new Float64Array(M**3);let maxAmplitude=0;
  for(let x=0;x<M;x++)for(let y=0;y<M;y++)for(let z=0;z<M;z++){let r=0,i=0;for(let n=0;n<N;n++){const k=(x*M+y)*N+n,b=B[n][z];r+=b*bRe[k];i+=b*bIm[k];}const k=(x*M+y)*M+z;re[k]=r;im[k]=i;amplitude[k]=Math.hypot(r,i);maxAmplitude=Math.max(maxAmplitude,amplitude[k]);}
  return {size:M,re,im,amplitude,maxAmplitude};
}
export function boxMarginals(model,time=0,size=51){
  const g=boxGrid(model,time,size),step=2/(size-1),curves=Array.from({length:3},()=>new Float64Array(size)),mean=[0,0,0];let mass=0;
  for(let x=0;x<size;x++)for(let y=0;y<size;y++)for(let z=0;z<size;z++){
    const k=(x*size+y)*size+z,d=(g.re[k]**2+g.im[k]**2)/model.norm;
    curves[0][x]+=d*step*step;curves[1][y]+=d*step*step;curves[2][z]+=d*step*step;
    mass+=d*step**3;[x,y,z].forEach((v,a)=>{mean[a]+=(-1+v*step)*d*step**3;});
  }return {curves,mean,mass,step};
}
/** Isosurface mesh with interpolated complex phase, replacing native VTK marching cubes. */
export function boxIsosurface(grid,level){
  const M=grid.size,triangles=[],corners=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],tetra=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]],edges=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
  for(let x=0;x<M-1;x++)for(let y=0;y<M-1;y++)for(let z=0;z<M-1;z++){
    const v=corners.map(([dx,dy,dz])=>{const k=((x+dx)*M+y+dy)*M+z+dz;return {p:[-1+2*(x+dx)/(M-1),-1+2*(y+dy)/(M-1),-1+2*(z+dz)/(M-1)],a:grid.amplitude[k],re:grid.re[k],im:grid.im[k]};});
    const low=Math.min(...v.map(c=>c.a)),high=Math.max(...v.map(c=>c.a));if(low>level||high<level)continue;
    for(const t of tetra){const p=[];for(const [a,b] of edges){const u=v[t[a]],w=v[t[b]];if((u.a>=level)===(w.a>=level))continue;const f=(level-u.a)/(w.a-u.a);p.push({position:u.p.map((s,i)=>s+f*(w.p[i]-s)),re:u.re+f*(w.re-u.re),im:u.im+f*(w.im-u.im)});}if(p.length===3)triangles.push(p);else if(p.length===4){triangles.push([p[0],p[1],p[2]],[p[1],p[2],p[3]]);}}
  }return triangles;
}
