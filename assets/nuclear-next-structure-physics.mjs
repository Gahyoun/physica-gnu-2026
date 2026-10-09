export const nuclearMatrix=[[.919178106315053,.100725466635946,.380743994361098],[.0516563548681413,.927558041371352,-.37009147637993],[-.390439790329839,.359847829308877,.847387933516213]];
export function nuclearRandom(seed){let v=seed>>>0;return ()=>((v=(Math.imul(1664525,v)+1013904223)>>>0)/4294967296);}
export function nuclearLattice(type,seed=12673){const excited=type==='excited',d=excited?42:40,bound=excited?105:110,a1=[d,0,0],a2=[-d*.5000000000000001,d*.8660254037844386,0],a3=[0,0,1.633*d],rng=nuclearRandom(seed),out=[];
 for(let i=-10;i<=10;i++)for(let j=-10;j<=10;j++)for(let k=-10;k<=10;k++){
 const p=a1.map((x,l)=>i*x+j*a2[l]+k*a3[l]),other=p.map((x,l)=>x+.666*a1[l]+.333*a2[l]+.5*a3[l]);
 for(const pos of [p,other])if(Math.sqrt(pos.reduce((a,b)=>a+b*b,0))<bound){rng();out.push({pos,proton:rng()>(excited?.55:.6),radius:excited?19.5:19});}
 }return out;
}
export function nuclearRotate(matrix,x,y,z){const norm=Math.sqrt(x*x+y*y+z*z);if(norm<=.0001)return matrix.map(v=>v.slice());x/=norm;y/=norm;z/=norm;const a=norm/500,c=Math.cos(a),s=Math.sin(a),v=1-c,R=[[v*x*x+c,v*x*y-s*z,v*x*z+s*y],[v*x*y+s*z,v*y*y+c,v*y*z-s*x],[v*x*z-s*y,v*y*z+s*x,v*z*z+c]];return R.map(row=>[0,1,2].map(i=>row.reduce((a,b,j)=>a+b*matrix[j][i],0)));}
export function nuclearCloud(lattice,type,matrix=nuclearMatrix,seed=1,zoom=1.2){const rng=nuclearRandom(seed),osc=type==='excited'?5:1;return lattice.map((p,index)=>{const v=p.pos.map(x=>x+(rng()-1)*osc),rot=matrix.map(row=>row.reduce((a,b,i)=>a+b*v[i],0)),centerRot=matrix.map(row=>row.reduce((a,b,i)=>a+b*p.pos[i],0)),r=p.radius+(rng()-1)*.5,den=1-rot[2]/1000;return {index,proton:p.proton,x:150+zoom*rot[0]/den,y:150-zoom*rot[1]/den,radius:zoom*r/(1-centerRot[2]/1000),depth:Math.floor(1000000-Math.sqrt(rot[0]**2+rot[1]**2+(1000-rot[2])**2)*300)};});}
export function nuclearAutoMatrix(matrix,n,seed=12673){const rng=nuclearRandom(seed);let q=matrix.map(v=>v.slice());for(let i=0;i<n;i++)q=nuclearRotate(q,2+2*rng(),3+2*rng(),0);return q;}
export function nuclearStructureCSV(cloud,n){return 'step,index,nucleon,x_original,y_original,radius_original\n'+cloud.map(p=>[n,p.index,p.proton?'proton':'neutron',p.x,p.y,p.radius].join(',')).join('\n')+'\n';}
