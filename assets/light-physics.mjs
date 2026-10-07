import {lightSpecs} from './light-specs.mjs';
export {lightSpecs};
export const lightDefaults=s=>Object.fromEntries(s.controls.map(c=>[c.key,c.value]));
export const gamma=b=>1/Math.sqrt(1-b*b);
export const lorentz=(x,t,b)=>({x:gamma(b)*(x-b*t),t:gamma(b)*(t-b*x)});
export const inverseLorentz=(x,t,b)=>lorentz(x,t,-b);
export const pulseY=t=>{const f=t-Math.floor(t);return f<=.5?-300*f:-300+300*f;};
export const wavelengthRGB=(nm,bright=1)=>{
 const knots=[380,440,490,510,580,645],cols=[[255,10,255],[10,10,255],[10,255,255],[10,255,10],[255,255,10],[255,10,10]];
 let i=0;while(i<4&&nm>knots[i+1])i++;const u=Math.max(0,Math.min(1,(nm-knots[i])/(knots[i+1]-knots[i])));return cols[i].map((v,j)=>Math.min(255,Math.floor((v*(1-u)+cols[i+1][j]*u)*bright)));
};
export const rgbNumber=rgb=>rgb[0]*65536+rgb[1]*256+rgb[2];
export const spectrumLines={spectra_He:[388.865,396.4729,402.6191,447.1479,468.57,471.3146,492.1931,501.567,587.562,667.815],spectra_Ne:[470.4,471.5,540,585.2,603,607.4,616.3,621.7,626.6,632.8,640.2,650.6,667.8],spectra_origin:[410.174,434.047,486.133,656.2852]};
export function planck(nm,T){if(nm<5)return 0;const l=nm*1e-9,h=6.62607e-34,k=1.380658e-23,c=299792458;return 1e-14*2*Math.PI*h*c*c/l**5/Math.expm1(h*c/(l*k*T));}
export const phasePressure=T=>T<.9?.47+.18000000000000005*(T-.85)/.05:T<.95?.65+.15000000000000002*(T-.9)/.05:T<1?.8+.19999999999999996*(T-.95)/.05:1;
export const vanderPressure=(V,T)=>2.66666666*T/(V-.33333333)-3/V/V;
export function phaseCurve(T){const plateau=phasePressure(T),rows=Array.from({length:182},(_,i)=>{const v=(19+i)*.025;return {v,p:vanderPressure(v,T)};});let V1=0,V2=0,first=false,second=false,third=false;if(T<1)for(const r of rows.slice(1)){if(r.p<=plateau&&!first){first=true;V1=r.v;}if(r.p>=plateau&&first&&!second)second=true;if(r.p<=plateau&&first&&second&&!third){third=true;V2=r.v;}}return {rows,plateau,V1,V2};}
export const magnifierState=(type,p)=>{const m=type==='magnifier'?3:-3;return {m,x:205*m-(m-1)*p.x,y:205*m-(m-1)*p.y};};
export function snellState(type,p){const a=p.angle*Math.PI/180,n1=type==='snelldrawing'?p.n1:1,n2=type==='snelldrawing'?p.n2:p.index,q=n1*Math.sin(a)/n2,passed=type==='snelldrawing'?q<=1:n2>Math.sin(a);const theta=passed?Math.asin(Math.min(1,q)):null,scale=type==='snelldrawing'?70:200,x=type==='snelldrawing'?205:300,y=type==='snelldrawing'?140:300;return {q,theta,passed,A:Math.sin(a),B:passed?q:null,marker1:type==='snelldrawing'?(passed?[x+n2*scale*q,y+n2*scale*Math.cos(theta)]:[-1000,0]):[x-scale*Math.sin(a),y-scale*Math.cos(a)],marker2:type==='snelldrawing'?[x+n1*scale*Math.sin(a),y-n1*scale*Math.cos(a)]:(passed?[x+scale*q,y+scale*Math.cos(theta)]:[-1000,0])};}
// Fresh semantic ray schedules; no original graphics or frame exports.
const realRayTypes=new Set(['convex1','concavemirror']);
export function rayConstruction(type,step){const real=realRayTypes.has(type),mirror=type.includes('mirror'),ox=type==='concavemirror'?57.5:37.5,dx=type==='concavemirror'?20:0,lines={};
 const set=(tag,a,b,arrow)=>{lines[tag]={tag,a,b,arrow};};const grow=(tag,a,base,d,t,arrow=true)=>set(tag,a,[base[0]+d[0]*t,base[1]+d[1]*t],arrow);
 for(let n=0;n<=step;n++){
  if(n<20)grow('1',[ox,59],[ox,59],[209,0],n/20);
  else if(n===20){set('1',[ox,59],[247.5+dx-(dx?1:0),59],false);if(!real)set('a1',[mirror?355.5:136.9,106.3],[247.5,59],false);}
  else if(n<(real?40:30))grow('12',[246.5+dx,59],[246.5+dx,59],[mirror?-265.5:265.5,real?115.5:-115.5],(n-20)/(type==='concavemirror'?19:20));
  else if(!real&&n===30)set('a2',[31.9,59],[355.5,106.3],false);
  else if(n<(real?60:50))grow('3',[real?ox:31.9,real?62:59],[real?ox:31.9,real?62:59],real?[209,91]:[214.3,31.3],(n-(real?40:30))/20);
  else if(n===(real?60:50)){set('3',[real?ox:31.9,real?62:59],[real?246.5+dx:246.2,real?153:90.3],false);if(type==='convexmirror')delete lines.a2;}
  else if(n<(real?80:70))grow('32',[real?(type==='concavemirror'?266.5:245.5):246.2,real?153:90.3],[real?(type==='concavemirror'?266.5:245.5):245.5,real?153:90.3],[type==='concavemirror'?-281.5:type==='convexmirror'?-241.5:271.5,0],(n-(real?60:50))/20);
  else if(!real&&n===70)set('a3',[246.2,90.3],[mirror?386:100,90.3],false);
  else if(n<(real?100:90))grow('2',[ox,60.5],[ox,60.5],[208.7,type==='convex1'?45.7:45.8],(n-(real?80:70))/20);
  else if(n===(real?100:90))set('2',[ox,60.5],[246.2+dx,type==='convex1'?106.2:106.3],false);
  else if(n<(real?120:110))grow('22',[type==='convexmirror'?246.3:246.2+dx,type==='convex1'?106.2:106.3],[246.2+dx,type==='convex1'?106.2:106.3],[type==='concavemirror'?-208.7:type==='convexmirror'?-214.3:268.8,type==='convex1'?58.8:type==='convexmirror'?47.3:type==='concavemirror'?45.8:58.7],(n-(real?100:90))/(type==='concavemirror'?15:20));
  else if(type==='convexmirror'&&n===110)set('a2',[246.3,106.3],[460.5,59],true);
 }
 return {lines:Object.values(lines),object:[ox,59],opticX:246.5+dx,axis:106.3,image:step>=(real?80:110)?[type==='convex1'?462.9:type==='concavemirror'?49.5:type==='convexmirror'?317:175,real?152.5:90.3]:null};
}
// Candidate-path races use the original geometric-remaining-distance selection.
export function fermatRace(type,p,limit=400){const H=type==='ferma1'?100:200,Y=type==='ferma1'?200:0,n=type==='ferma1'?p.index:1,paths=Array.from({length:61},(_,i)=>{const x=5*i,d1=Math.sqrt(x*x+H*H),d2=Math.sqrt((p.target-x)**2+(Y-H)**2);return {x,d1,d2,arrival:(d1+n*d2)/2};}),history=[];let winner=-1,remain=10000,finished=false;
 for(let t=0;t<=limit;t++){let chosen=winner,arrived=false;const endpoints=paths.map((v,i)=>{const l1=2*t;if(l1<v.d1)return {first:true,x:v.x*l1/v.d1,y:H*l1/v.d1};const l2=(2*t-v.d1)/n,remaining=v.d2-l2;if(winner<0&&remaining<50&&remaining<remain){remain=remaining;chosen=i;}if(winner===i&&l2>v.d2)arrived=true;return {first:false,x:v.x+(p.target-v.x)*l2/v.d2,y:H+(Y-H)*l2/v.d2};});
  if(winner<0&&chosen>=0)winner=chosen;history.push({time:t,winner,remain,finished:arrived,endpoints});if(arrived){finished=true;break;}}
 return {H,Y,n,paths,history,finished,fastest:paths.reduce((i,v,j)=>v.arrival<paths[i].arrival?j:i,0)};}
export function lengthState(b,step){const t=step===0?0:Math.min(step-1,Math.floor(200*(1+b))),tp=400*b;return {t,tp,arrival:200*(1+b),train:100+b*t,observer:100+200*(1-b*b)+b*t,marker1:100+b*t,marker2:step>0&&t>=tp?500+b*(t-tp):-1000,pulse1:t,pulse2:t>=tp?t-tp:0,span:400*(1-b*b)};}
export function lengthMeasure(b,step){const g=gamma(b),counter=-50+step,t=step===0?-50:counter-1,proper=t/g;return {counter,t,proper,x:150+b*t,ruler:300-b*proper,scale:100/g,pass:200/b,passProper:200/b/g};}
export function clockState(type,b,step){const g=gamma(b),t=Math.max(0,step-1)*.04;return {t,proper:type==='pulseclock'?t:t/g,x:type==='pulseclock'?30:30+Math.round(12*b*step),pulse:pulseY(t),movingPulse:pulseY(type==='pulseclock'?t:t/g),scale:100/g};}
export function invariantState(step){const n=Math.min(step,51),t=Math.max(0,n-1)*.02;return {t,phase:Math.max(0,(step-51)/100),xp1:300-5.4*n,xp2:300-3*n,pulse:pulseY(t)};}
export function barnState(p,step){const b=Math.sqrt(1-1/p.gamma**2),updates=step-Math.floor(step/101),train=p.trainFrame?0:5*b*updates,tunnel=p.trainFrame?500-5*b*updates:500,trainLength=p.trainFrame?300:300/p.gamma,tunnelLength=p.trainFrame?150/p.gamma:150;return {b,updates,train,tunnel,trainLength,tunnelLength,gateF:p.trainFrame?tunnel<=0:train>=500,gateR:p.trainFrame?300>=tunnel+tunnelLength:train+trainLength>=650};}
export function relativeClocks(b,time){const g=gamma(b);return Array.from({length:33},(_,j)=>{const i=j-16,n=i-Math.floor(g*time*b*5/50)-1,xp=50*n;return {i,xp,x:250+xp/g+5*b*time,t:time/g-b*xp/25};});}
export function galileanState(p,t){return {truck:p.truckFrame?100:100+4.5*t,ballX:p.truckFrame?100:100+4.5*t,road:p.truckFrame?100-4.5*t:100,ballY:280-8*t+.06*t*t};}
export function lightTimeMax(s,p){if(s.type==='lengthcont')return Math.floor(200*(1+p.beta))+1;if(s.type==='lengthmeas')return Math.floor(225/p.beta)+51;if(s.type==='lightclock')return p.beta?Math.min(s.timeMax,Math.ceil(690/(12*p.beta))):s.timeMax;if(s.type==='barnpole'&&p.gamma>1){const b=Math.sqrt(1-1/p.gamma**2),n=p.trainFrame?Math.ceil(500/(5*b)):Math.ceil(Math.max(500,650-300/p.gamma)/(5*b));return n+Math.floor((n-1)/100);}return s.timeMax;}
