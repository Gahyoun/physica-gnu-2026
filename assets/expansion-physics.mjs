// Numerical models and semantic geometry; no Flash artwork or scripts are shipped.
import {expansionSpecs,structureData} from './expansion-specs.mjs';
export {expansionSpecs,structureData};
export const defaults=s=>Object.fromEntries(s.controls.map(c=>[c.key,c.initial]));
const tau=Math.PI*2,sin=Math.sin,cos=Math.cos;
export function structureFaces(type,n=0){
 if(type!=='wavefronta')return structureData[type].faces;
 const phase=((n%20)+20)%20,a=55*Math.PI/180,dx=phase*sin(a),dy=-phase*cos(a);
 return structureData[type].faces.map(face=>face.map(([x,y,z])=>[x+dx,y+dy,z]));
}
export function hsv(h,s,v,original=true){h=h===1?0:h>=0&&h<1?h:((h%1)+1)%1;const q=h*6,i=Math.floor(q),f=q-i,a=v*(1-s),b=v*(1-s*f),c=v*(1-s*(1-f)),rgb=[[v,c,a],[b,v,a],[a,v,c],[a,b,v],[c,a,v],[v,a,b]][i];return rgb.map(x=>Math.min(255,Math.max(0,original?Math.floor(x*256):Math.round(x*255))));}
export function colorValue(type,p){return type==='RGBmodel'?[p.r,p.g,p.b]:type==='CMYmodel'?[255-p.c,255-p.m,255-p.y]:hsv(p.h,p.s,p.v);}
// Complex characteristic matrices at normal incidence; imaginary entries stored separately.
const cmul=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],cadd=(a,b)=>[a[0]+b[0],a[1]+b[1]],cscale=(a,k)=>a.map(x=>x*k),norm=a=>a[0]**2+a[1]**2;
const mm=(a,b)=>a.map(r=>b[0].map((_,j)=>r.reduce((sum,v,k)=>cadd(sum,cmul(v,b[k][j])),[0,0])));
export function filmLayers(type,p){
 const H=[2,p.central/8],L=[1.2,p.central/4.8],pair=[H,L],repeated=n=>Array.from({length:n},()=>pair).flat();
 if(type==='multilayer2')return [[p.n,p.thickness]];
 if(type==='multilayer3')return [[p.n1,p.thickness1],[p.n2,p.thickness2]];
 if(type==='multilayer31')return Array.from({length:p.layers},()=>[[p.n1,p.thickness1],[p.n2,p.thickness2]]).flat();
 if(type==='multilayer4')return repeated(p.layers);
 if(type==='multilayer5')return [L,...repeated(p.layers),[2,p.central/4],L,...repeated(p.layers)];
 return [[p.n1,p.central/4/p.n1],[p.n2,p.central/2/p.n2],[p.n3,p.central/4/p.n3]];
}
export function filmValue(type,p,wavelength){let m=[[[1,0],[0,0]],[[0,0],[1,0]]];for(const [n,d] of filmLayers(type,p)){const phase=6.28318530718*n*d/wavelength,c=cos(phase),s=-sin(phase);m=mm(m,[[[c,0],[0,s/n]],[[0,s*n],[c,0]]]);}const nt=type==='multilayer31'||type==='multilayer5'?1:1.5,A=cadd(m[0][0],cscale(m[1][1],nt)),B=cadd(cscale(m[0][1],nt),m[1][0]),numA=cadd(m[0][0],cscale(m[1][1],-nt)),numB=cadd(cscale(m[0][1],nt),cscale(m[1][0],-1)),den=norm(A)+norm(B),R=(norm(numA)+norm(numB))/den,T=4*nt/den;return {R,T,value:type==='multilayer5'?T:R};}
export function angularState(type,n){const a=n*Math.PI/36,r=type==='angularenergy'?[145,60]:[120],v=type==='angularenergy'?r.map(x=>x/1.5):[type==='angulargyro'?80:60];return {positions:r.map((radius,i)=>[radius*cos(a+i*Math.PI),radius*sin(a+i*Math.PI),0]),velocities:r.map((_,i)=>[v[i]*sin(-a+i*Math.PI),v[i]*cos(a+i*Math.PI),0]),radii:r};}
export function polarization(type,p,n,x=0){
 if(['xpol','ypol','rightcircular','leftcircular'].includes(type)){const a=(type==='leftcircular'?-1:1)*tau*n/50,c=50*cos(a),s=50*sin(a);return type==='xpol'?{E:[0,s],B:[-s,0]}:type==='ypol'?{E:[s,0],B:[0,s]}:{E:[s,c],B:[-c,s]};}
 const wavelength=p.wavelength??250,velocity=type==='qwpx'?2:3,k=6.2831852/wavelength,phase=x*k-n*velocity*k;
 if(type==='qwpx'){const len=p.thickness,partial=Math.min(Math.max(x-50,0),len),base=x*k;return {E:[65*sin(base+.5*partial*k-n*velocity*k),65*sin(base+partial*k-n*velocity*k)],B:null};}
 if(type==='emwave')return {E:[65*sin(phase),0],B:[0,65*sin(phase)]};
 if(type==='emwave2'){const v=65*cos(phase),a=(p.angle??0)*Math.PI/180;return {E:[v*cos(a),v*sin(a)],B:[-v*sin(a),v*cos(a)]};}
 return {E:[75*cos(phase),75*cos(phase+(p.angle??-90)*Math.PI/180)],B:null};
}
export function moleculeState(type,p,n){
 if(type==='springmot1xy'){const a=sin(n*.1);return {positions:[[50-80/3*a,0],[400+80*a,0]],displacements:[-80/3*a,80*a],centre:137.5};}
 if(type==='laser_CO2N2'){const a=25*sin(.49*n);return {positions:[[-100+a,0],[100-a,0]],displacements:[a,-a],centre:0};}
 const mode=p.mode??0,a=25*sin(([.13,.25,.5])[mode]*n),positions=mode===0?[[-100,a],[0,-a],[100,a]]:mode===1?[[-100+a,0],[0,0],[100-a,0]]:[[-100+a,0],[-a,0],[100+a,0]];return {positions,displacements:mode===0?[a,-a,a]:mode===1?[a,0,-a]:[a,-a,a],centre:0};
}
export function pulse(shape){return Array.from({length:68},(_,i)=>{let v=0;if(shape===0){if(i>=46)v=i<58?50*(i-46)/10:50*(68-i)/10;}else if(shape===1){if(i>=38)v=i<48?50*(i-38)/10:i<58?50:50*(68-i)/10;}else if(i>=68-(shape===2?22:30))v=50*sin((i-68-(shape===2?18:26))/(shape===2?20:14)*3.1415926);if(shape>=2&&i===67)v=0;return v;});}
export function incidentShape(shape,sign,x){const a=sign? -48:48;if(shape===0)return x< -200&&x> -350?a*sin(tau*(x+350)/150):0;if(shape===1)return x< -200&&x> -350?a*sin(tau*(x+350)/300):0;if(shape===2)return x< -200&&x> -300?a*(1-Math.abs((x+250)/50)):0;if(shape===3)return x< -200&&x> -400?a*Math.min((x+400)/50,1,(-x-200)/50):0;return x< -200?48*sin(tau*(x-300)/100):0;}
export function waveValue(type,p,n,x){
 if(type==='phasorprin2Inv'){const phase=tau/p.wavelength*(20*n*.05-x)+.1;return [100*sin(phase),100*cos(phase)*(p.sign??-1)];}
 if(type==='harmonicwave2')return [x<100?50*sin(6.283*x/40):-50*sin(6.283*x/30)];
 if(type==='waveexpweb')return [p.amplitude*sin(6.283185307*(x/p.wavelength-p.frequency*n*.05))];
 if(type==='reflect1'||type==='reflect2'){const q=pulse(p.shape),a=q[x+n]??0,b=(type==='reflect1'?-1:1)*(q[n-x]??0);return [a,b,a+b];}
 const a=incidentShape(p.shape1,p.direction1,x-10*n),b=incidentShape(p.shape2,p.direction2,-x-10*n);return [a,b,a+b];
}
export function moireGeometry(type,p,n=0){
 const lines=[],circles=[],polys=[],sources=[];const line=(a,b,c,w)=>lines.push({a,b,c,w}),circle=(x,y,r,c,w)=>circles.push({x,y,r,c,w});
 if(type==='moire2'){for(let i=-15;i<=15;i++){line([i*6,-110],[i*6,110],0,1.5);line([-110,i*6],[110,i*6],0,1.5);}for(let r=6;r<=110;r+=6)circle(p.dx,p.dy,r,1,3);}
 else if(type==='moire3'){for(const [count,r,c,offset,part] of [[100,110,0,0,.52],[p.divisions,100,1,-n/100,.5]])for(let j=0;j<count;j++)polys.push({p:[[110,110],[110+r*sin(tau*j/count+offset),110+r*cos(tau*j/count+offset)],[110+r*sin(tau*(j+part)/count+offset),110+r*cos(tau*(j+part)/count+offset)]],c});}
 else if(type==='moire4'){for(let i=0;i<=Math.ceil(350/6);i++)line([i*6,0],[i*6,100],0,3);for(let i=0;i<=Math.ceil(350/7);i++)line([i*7+p.dx,10+p.dy],[i*7+p.dx,110+p.dy],1,4);}
 else if(type==='moireint2'){for(let i=-3;i<53;i++)line([4*i,10],[4*i,160],0,2);const a=p.tilt,space=4*Math.sqrt(22500+4*a*a)/150;for(let i=-10;i<60;i++)line([space*i-a,0],[space*i+a,150],1,2);}
 else{const src=type==='moireint4'?Array.from({length:p.count},(_,i)=>[10,150-p.space/2+p.space/(p.count-1)*i]):type==='moireint3'?[[10,130],[p.x2,p.y2]]:[[100,60],[p.x2,p.y2]],wl=type==='moireint3'?p.wavelength:type==='moireint4'?20:10;src.forEach(([x,y],j)=>{sources.push([x,y]);if(type==='moireint'){for(let i=0;i<(j===0?15:20);i++)circle(x,y,i*10,j,5);}else for(let r=wl;r<(type==='moireint4'?550:500);r+=wl)circle(x,y,r,j%3,wl/(type==='moireint4'?p.count:2));});}
 return {lines,circles,polys,sources};
}
export function moireProfile(type,p,n,x,g=moireGeometry(type,p,n)){ // Supplementary geometry coverage, not a claim of optical intensity.
 const y=type==='moire2'?0:type==='moire3'?110:type==='moireint3'?150:75;let a=0,b=0;
 for(const l of g.lines){const dx=l.b[0]-l.a[0],dy=l.b[1]-l.a[1],d=Math.abs(dy*(x-l.a[0])-dx*(y-l.a[1]))/Math.hypot(dx,dy);const proj=((x-l.a[0])*dx+(y-l.a[1])*dy)/(dx*dx+dy*dy);if(d<=l.w/2&&proj>=0&&proj<=1){if(l.c===0)a=1;else b=1;}}
 for(const c of g.circles)if(Math.abs(Math.hypot(x-c.x,y-c.y)-c.r)<=c.w/2){if(c.c===0)a=1;else b=1;}
 if(type==='moire3'){const a1=Math.atan2(x-110,y-110),r=Math.hypot(x-110,y-110);a=r<=110&&((a1/tau*100%1)+1)%1<.52?1:0;b=r<=100&&(((a1+n/100)/tau*p.divisions%1)+1)%1<.5?1:0;}
 return [a,b,a*b];
}
export function modelValues(s,p,n){const t=s.type;if(s.group==='structure')return {nodes:structureData[t].nodes.length,lines:structureData[t].lines.length,planes:structureData[t].faces.length,...(t==='wavefronta'?{phase:n%20,planeCentre:structureFaces(t,n)[11].reduce((sum,q)=>sum.map((v,i)=>v+q[i]/4),[0,0,0])}:{})};if(s.group==='angular')return angularState(t,n);if(s.group==='polarization')return polarization(t,p,n,p.probe);if(s.group==='molecule')return moleculeState(t,p,n);if(s.group==='film')return filmValue(t,p,p.probe);if(s.group==='color')return {rgb:colorValue(t,p)};if(s.group==='complex')return {real:p.real,imag:p.imag,norm:Math.hypot(p.real,p.imag),phase:Math.atan2(p.imag,p.real)};if(s.group==='moire'){const g=moireGeometry(t,p,n);return {lines:g.lines.length,circles:g.circles.length,sectors:g.polys.length,sources:g.sources};}return {values:waveValue(t,p,n,p.probe)};}
