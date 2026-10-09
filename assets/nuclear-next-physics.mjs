// Independent geometry model; coordinates and timer steps follow each original.
export function reactionState(type,n,initialCM=46.3){
 const limits={alpha:180,capture:162,cm:185,lab:190},cycles={alpha:250,capture:250,cm:300,lab:350};
 n=Math.max(0,Math.floor(n));if(n>=cycles[type]){if(type==='lab')initialCM=195;n%=cycles[type];}
 const q={n,incident:[0,75],target:[200,75],residual:[-100,-100],product:[-100,-100],center:[type==='lab'?initialCM:100,75],phase:'입사'};
 if(n===0)return q;
 if(type==='alpha'||type==='capture'){
  if(n<100)q.incident=[2*n,75];
  else if(n<=110){q.incident=q.target=[200+n-100,75];q.phase='복합핵';}
  else{const d=Math.min(n,limits[type])-110;q.incident=[-100,75];q.target=[-100,75];q.residual=type==='alpha'?[210+.25*d,75+.5*d]:[210+.75*d,75+.15*d];q.product=type==='alpha'?[210+d,75-d]:[210-1.5*d,75-1.35*d];q.phase='방출';}
 }else{
  if(n<100){q.incident=type==='cm'?[1.5*n,75]:[-50+2*n,75];q.target=type==='cm'?[200-.5*n,75]:[150,75];}
  else{const d=Math.min(n,limits[type])-100;q.incident=q.target=[-100,75];q.residual=type==='cm'?[150-.5*d,75-.5*d]:[150,75-.5*d];q.product=type==='cm'?[150+.75*d,75+.75*d]:[150+1.25*d,75+.75*d];q.phase='방출';}
  if(type==='lab')q.center=[100+.5*Math.min(n,limits[type]),75];
 }
 return q;
}
const radiationTimes=[0];
export function radiationState(n){n=Math.max(0,Math.floor(n));while(radiationTimes.length<=n)radiationTimes.push(radiationTimes.at(-1)+.025);const time=radiationTimes[n],p=time-Math.floor(time),arcs=[];for(let j=0;j<10;j++)for(const start of [.15,.65]){const r=20+p*15+15*j;arcs.push({width:(10-j)/3,points:Array.from({length:21},(_,i)=>[120+Math.cos((start-.25+i*.2/20)*2*Math.PI)*r,70+Math.sin((start-.25+i*.2/20)*2*Math.PI)*r])});}return {time,proton:[110,60+35*Math.sin(time*2*Math.PI)],arcs};}
export function spinState(n,reverse=false){const velocity=reverse?5:-5,wedges=[];for(let i=0;i<24;i++){const a=i*2*Math.PI/24-velocity*2*Math.PI/3*n/80,b=(i+1)*2*Math.PI/24-velocity*2*Math.PI/3*n/80;wedges.push([[120,120],[120+101*Math.sin(a),120+30.3*Math.cos(a)],[120+101*Math.sin(b),120+30.3*Math.cos(b)]]);}return {wedges,direction:reverse?-1:1,angle:-velocity*2*Math.PI/3*n/80};}
export function nuclearCSV(s,n,reverse=false,initialCM=46.3){const rows=['step,object,x_original,y_original'];for(let k=0;k<=Math.floor(n);k++){if(s.type==='radiation'){const q=radiationState(k);rows.push([k,'proton',...q.proton].join(','));}else if(s.type==='spin'){const q=spinState(k,reverse);rows.push([k,'spin_angle',q.angle,0].join(','));}else{const q=reactionState(s.type,k,initialCM);for(const key of ['incident','target','residual','product',...(s.type==='lab'?['center']:[])])rows.push([k,key,...q[key]].join(','));}}return rows.join('\n')+'\n';}
