// Fresh semantic SVG scenes and independent numerical models, never SWF artwork.
import {opticsSpecs} from './optics-specs.mjs';
import {patchMarkup,frameBatch} from './render-utils.mjs';
export {opticsSpecs};
export const opticsDefaults=s=>Object.fromEntries(s.controls.map(c=>[c.key,c.value]));
const SOURCE_PI=3.1415926,rad=a=>a*Math.PI/180;
export function fresnel(n,angle){
 const a=rad(angle),c=Math.cos(a),sin=Math.sin(a),q=n*n-sin*sin;
 if(q<=0)return {rs:1,rp:1,ts:0,tp:0,Rs:1,Rp:1,thetaT:null,totalInternal:true};
 const b=Math.sqrt(q),rs=(c-b)/(c+b),rp=(n*n*c-b)/(n*n*c+b);
 return {rs,rp,ts:2*c/(c+b),tp:2*n*c/(n*n*c+b),Rs:rs*rs,Rp:rp*rp,thetaT:Math.asin(sin/n)*180/Math.PI,totalInternal:false};
}
export function fresnelPhase(n,angle){
 const a=rad(angle),q=n*n-Math.sin(a)**2,brewster=Math.atan(n);
 const s=q>0?(n>1?1:0):2*Math.atan2(Math.sqrt(-q),Math.cos(a))/Math.PI;
 const p=q>0?(n>1?(a<brewster?0:1):(a<brewster?1:0)):2*Math.atan2(Math.sqrt(-q),n*n*Math.cos(a))/Math.PI;
 return {s,p,difference:Math.abs(p-s)};
}
export function wavePhasor(type,p,x,t){
 const A=type==='wave-sum'?75:100,k=2*Math.PI/p.wavelength,phase=k*(20*t-x)+.1;
 return {phase,re:A*Math.cos(phase),im:A*Math.sin(phase)};
}
export function slitPhasor(phase){
 const delta=phase*SOURCE_PI/180,re=125*(1+Math.cos(delta)),im=125*Math.sin(delta);
 return {re,im,intensity:(re*re+im*im)/625,phase:Math.atan2(im,re)};
}
export function slitPath(p){
 const path=p.distance*Math.sin(p.angle*SOURCE_PI/180),phase=path/p.wavelength*360;
 return {path,phase,intensity:50*(1+Math.cos(phase*SOURCE_PI/180))};
}
export function opticsValues(s,p,t=0){
 switch(s.type){
 case 'wave-phasor':return wavePhasor(s.type,p,p.x1,t);
 case 'wave-sum':{const a=wavePhasor(s.type,p,p.x1,t),b=wavePhasor(s.type,p,p.x2,t);return {re:a.re+b.re,im:a.im+b.im,a:a.im,b:b.im,amplitude:Math.hypot(a.re+b.re,a.im+b.im)};}
 case 'slit-phasor':return slitPhasor(p.phase);
 case 'slit-path':return slitPath(p);
 case 'fresnel':return fresnel(p.n,p.angle);
 case 'fresnel-phase':return fresnelPhase(p.n,p.angle);
 }
}
const fmt=n=>Number.isFinite(n)?Number(n.toFixed(5)).toString():'—',esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const curve=(pts,c=0,extra='')=>`<path class="native-curve optics-series-${c}" d="${pts.map((p,i)=>(i?'L':'M')+p.map(fmt).join(',')).join(' ')}" ${extra}/>`;
const line=(a,b,c=0,extra='')=>curve([a,b],c,extra),text=(x,y,s,extra='')=>`<text x="${x}" y="${y}" ${extra}>${esc(s)}</text>`;
const dot=(x,y,c=0)=>`<circle cx="${fmt(x)}" cy="${fmt(y)}" r="4" class="optics-dot optics-series-${c}"/>`;
function vector(x,y,v,c=0){
 const length=Math.hypot(...v);if(length<1e-8)return dot(x,y,c);
 const end=[x+v[0],y-v[1]],dx=v[0]/length,dy=-v[1]/length;
 return line([x,y],end,c)+curve([[end[0]-7*dx-3*dy,end[1]-7*dy+3*dx],end,[end[0]-7*dx+3*dy,end[1]-7*dy-3*dx]],c);
}
const axes=(cx,cy,w=80,h=80)=>`<path d="M${cx-w} ${cy}H${cx+w}M${cx} ${cy-h}V${cy+h}" class="native-axis"/>`;
const path=pts=>pts.map((p,i)=>(i?'L':'M')+p.map(fmt).join(',')).join(' ');
function init(h){
 const kind=h.dataset.flashNative,s=opticsSpecs[kind],p=opticsDefaults(s),wave=s.type.startsWith('wave-'),fres=s.type.startsWith('fresnel'),moving=!fres;
 const maxTime=wave?1000:2*Math.PI,step=wave?.05:.01;let time=0,playing=false,last=0,carry=0,raf=0,visible=false,dirty=true,pickSecond=false;
 const range=c=>`<label>${esc(c.label)}<output data-optics-output="${c.key}"></output><input data-optics-param="${c.key}" aria-label="${esc(c.label)}" type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}"></label>`;
 const labels=wave?(s.type==='wave-sum'?['위치 x₁','위치 x₂','합성']:['파형 · 위상자']):s.type==='slit-phasor'||s.type==='slit-path'?['첫째 성분','둘째 성분','합성 · 세기']:s.type==='fresnel'?['rₛ','rₚ','tₛ','tₚ','Rₛ','Rₚ']:['s 위상 / π','p 위상 / π','위상차 / π'];
 h.innerHTML=`<div class="native-controls">${s.controls.map(range).join('')}</div><div class="native-toolbar">${moving?'<button class="primary" data-optics-play aria-pressed="false">재생</button>':''}<button data-optics-reset>초기화</button><button data-optics-csv>그래프 데이터 CSV</button>${s.type==='fresnel'?'<label><input data-optics-transmission type="checkbox">투과계수 표시</label><label><input data-optics-reflectance type="checkbox">반사율 표시</label>':''}${s.type==='fresnel-phase'?'<label><input data-optics-difference type="checkbox">위상차 표시</label>':''}</div><div class="remaster-scene optics-scene" data-optics-scene><svg viewBox="0 0 720 300" role="img" aria-label="${esc(s.title)} · 연결된 도형"><g data-optics-drawing></g></svg></div>${moving?`<div class="timeline-progress"><label>${wave?'시간 / 원본 시간 눈금':'시연 위상 / rad'}<output data-optics-time-label></output><input data-optics-time type="range" min="0" max="${maxTime}" step="${step}" value="0" aria-label="${wave?'시간':'시연 위상'}"></label></div>`:''}<div class="legend remaster-legend optics-legend">${labels.map((l,i)=>`<span data-optics-legend="${i}"><i class="optics-series-${i}"></i>${esc(l)}</span>`).join('')}</div><div class="native-graphs optics-graph" data-optics-graph><svg viewBox="0 0 720 250" role="img" aria-label="${wave?'관측점의 시간 그래프':fres?'입사각에 따른 계수':'위상차와 간섭 세기'}"><path d="M55 20V205H690" class="native-axis"/><g data-optics-graph-curves></g><g data-optics-graph-markers></g><g data-optics-graph-labels></g></svg></div><dl class="book-readouts" data-optics-readouts></dl><p class="editor-note">${esc(s.note)}</p>`;
 const get=q=>h.querySelector(q),drawing=get('[data-optics-drawing]'),curves=get('[data-optics-graph-curves]'),markers=get('[data-optics-graph-markers]'),graphLabels=get('[data-optics-graph-labels]');
 function scene(){
  let out='';
  if(wave){
   const A=s.type==='wave-sum'?75:100,scale=.72,X=x=>35+x,Y=y=>115-y*.75;
   out+=axes(35,115,0,82)+`<path d="M35 115H435" class="native-axis"/>`;
   out+=curve(Array.from({length:101},(_,i)=>[X(i*4),Y(wavePhasor(s.type,p,i*4,time).im)]),0);
   out+=text(35,25,'진행파')+text(35,230,'관측 위치 x · 원본 눈금');
   const a=wavePhasor(s.type,p,p.x1,time),b=wavePhasor(s.type,p,p.x2??p.x1,time);
   for(const [j,x,v] of [[0,p.x1,a],...(s.type==='wave-sum'?[[1,p.x2,b]]:[])])out+=line([X(x),Y(0)],[X(x),Y(v.im)],j)+dot(X(x),Y(v.im),j);
   const cx=575,cy=125;out+=axes(cx,cy,100,100)+`<circle cx="${cx}" cy="${cy}" r="${A*scale}" class="native-axis"/>`;
   out+=vector(cx,cy,[a.re*scale,a.im*scale],0);
   if(s.type==='wave-sum'){out+=vector(cx+a.re*scale,cy-a.im*scale,[b.re*scale,b.im*scale],1);out+=vector(cx,cy,[(a.re+b.re)*scale,(a.im+b.im)*scale],2);}
   else out+=line([cx,cy],[cx,cy-a.im*scale],0,'stroke-dasharray="4 4"')+line([cx+a.re*scale,cy-a.im*scale],[cx,cy-a.im*scale],1,'stroke-dasharray="4 4"');
   out+=text(485,260,s.type==='wave-sum'?'위상자 덧셈 · 같은 시간':'위상자 · 수직 투영')+text(35,280,`λ = ${p.wavelength} · v = 20 · t = ${fmt(time)}`);
  }else if(!fres){
   const data=s.type==='slit-path'?slitPath(p):{phase:p.phase},delta=data.phase*SOURCE_PI/180,rotation=time;
   const a=[80*Math.cos(rotation),80*Math.sin(rotation)],b=[80*Math.cos(rotation+delta),80*Math.sin(rotation+delta)],cx=s.type==='slit-path'?555:350,cy=140;
   out+=axes(cx,cy,165,165)+vector(cx,cy,a,0)+vector(cx+a[0],cy-a[1],b,1)+vector(cx,cy,[a[0]+b[0],a[1]+b[1]],2)+text(cx-120,285,'두 위상자 · 합성');
   if(s.type==='slit-path'){
    const sy=145,sourceX=65,splitX=150,screenX=395,d=p.distance*.8,angle=p.angle*SOURCE_PI/180,endY=sy-(screenX-splitX)*Math.tan(angle);
    out+=`<path d="M${splitX} 30V${sy-d/2-6}M${splitX} ${sy-d/2+6}V${sy+d/2-6}M${splitX} ${sy+d/2+6}V260M${screenX} 20V270" class="native-axis"/>`;
    out+=`<defs><clipPath id="optics-field-${s.id}"><rect x="${splitX}" y="30" width="${screenX-splitX}" height="230"/></clipPath></defs><g clip-path="url(#optics-field-${s.id})">`;
    for(const sign of [-1,1]){out+=dot(splitX,sy+sign*d/2,sign<0?0:1)+line([splitX,sy+sign*d/2],[screenX,endY+sign*d/2],sign<0?0:1);for(let j=0;j<6;j++){const r=((j+time/(2*Math.PI))*p.wavelength)%245;out+=`<path d="M${splitX} ${sy+sign*d/2-r}A${r} ${r} 0 0 1 ${splitX} ${sy+sign*d/2+r}" class="native-curve optics-series-${sign<0?0:1}"/>`;}}
    out+='</g>';
    for(let j=0;j<4;j++){const x=sourceX+(j+time/(2*Math.PI))*p.wavelength/2;if(x<splitX)out+=line([x,45],[x,245],1);}
    out+=text(60,285,`경로차 Δ = ${fmt(data.path)}`);
   }else out+=text(55,40,`위상차 δ = ${fmt(p.phase)}°`)+text(55,65,'위상자 크기 125 · 원본 눈금');
  }else{
   const data=fresnel(p.n,p.angle),a=rad(p.angle),cx=195,cy=140;
   out+=`<rect x="30" y="140" width="330" height="130" fill="var(--plot-action)" fill-opacity=".06"/><path d="M30 140H360M195 20V270" class="native-axis"/>`;
   out+=vector(cx-100*Math.sin(a),cy-100*Math.cos(a),[100*Math.sin(a),-100*Math.cos(a)],0);
   out+=vector(cx,cy,[100*Math.sin(a),100*Math.cos(a)],1);
   if(!data.totalInternal){const b=rad(data.thetaT);out+=vector(cx,cy,[100*Math.sin(b),-100*Math.cos(b)],2);}
   out+=text(35,35,'입사 매질 n₁')+text(35,255,`투과 매질 n₂ / n₁ = ${fmt(p.n)}`)+text(225,125,'경계면')+text(80,292,data.totalInternal?'전반사 · 진행하는 굴절파 없음':`입사 ${fmt(p.angle)}° · 굴절 ${fmt(data.thetaT)}°`);
   const phases=fresnelPhase(p.n,p.angle);out+=axes(525,100,80,60)+axes(525,230,80,60);
   if(s.type==='fresnel-phase')out+=vector(525,100,[65*Math.cos(phases.s*Math.PI),65*Math.sin(phases.s*Math.PI)],0)+vector(525,230,[65*Math.cos(phases.p*Math.PI),65*Math.sin(phases.p*Math.PI)],1)+text(625,105,'s 위상')+text(625,235,'p 위상');
   else out+=vector(525,100,[75*data.rs,0],0)+vector(525,230,[75*data.rp,0],1)+text(625,105,'rₛ')+text(625,235,'rₚ');
  }
  patchMarkup(drawing,out);
 }
 function graphSettings(){
  if(wave)return {x:[Math.floor(time/20)*20,Math.floor(time/20)*20+20],y:s.type==='wave-sum'?[-160,160]:[-110,110],axis:'시간 / 원본 시간 눈금',count:s.type==='wave-sum'?3:1};
  if(s.type==='fresnel')return {x:[0,90],y:[-1,2],axis:'입사각 θ / °',count:6};
  if(s.type==='fresnel-phase')return {x:[0,90],y:[0,1.05],axis:'입사각 θ / °',count:3};
  return {x:s.type==='slit-path'?[-30,30]:[-540,540],y:[0,100],axis:s.type==='slit-path'?'관측 각도 θ / °':'위상차 δ / °',count:1};
 }
 function sample(x,c){
  if(wave){const a=wavePhasor(s.type,p,p.x1,x).im,b=wavePhasor(s.type,p,p.x2??p.x1,x).im;return c===2?a+b:c===1?b:a;}
  if(s.type==='fresnel')return Object.values(fresnel(p.n,x)).slice(0,6)[c];
  if(s.type==='fresnel-phase'){const q=fresnelPhase(p.n,x);return [q.s,q.p,q.difference][c];}
  return s.type==='slit-path'?slitPath({...p,angle:x}).intensity:slitPhasor(x).intensity;
 }
 function shown(i){if(s.type==='fresnel')return i<2||(i<4?get('[data-optics-transmission]').checked:get('[data-optics-reflectance]').checked);if(s.type==='fresnel-phase')return i<2||get('[data-optics-difference]').checked;return true;}
 function rebuild(){
  const g=graphSettings(),X=x=>55+635*(x-g.x[0])/(g.x[1]-g.x[0]),Y=y=>205-180*(y-g.y[0])/(g.y[1]-g.y[0]);let out='';
  for(let c=0;c<g.count;c++){get(`[data-optics-legend="${c}"]`)?.toggleAttribute('hidden',!shown(c));if(!shown(c))continue;let parts=[],prior=null;for(let i=0;i<=400;i++){const x=g.x[0]+(g.x[1]-g.x[0])*i/400,y=sample(x,c),jump=s.type==='fresnel-phase'&&prior!==null&&Math.abs(y-prior)>.5;parts.push((i===0||jump?'M':'L')+fmt(X(x))+','+fmt(Y(y)));prior=y;}
   out+=`<path d="${parts.join(' ')}" class="native-curve optics-series-${g.count===1&&!wave?2:c}"/>`;
  }
  if(fres){const b=Math.atan(p.n)*180/Math.PI,c=p.n<1?Math.asin(p.n)*180/Math.PI:null;out+=`<path d="M${X(b)} 25V205" class="native-cursor"/>`;if(c!==null)out+=`<path d="M${X(c)} 25V205" class="native-cursor"/>`;}
  patchMarkup(curves,out);patchMarkup(graphLabels,[0,.5,1].map(v=>text(55+635*v,225,fmt(g.x[0]+(g.x[1]-g.x[0])*v),'text-anchor="'+(v===0?'start':v===1?'end':'middle')+'"')+text(48,Y(g.y[0]+(g.y[1]-g.y[0])*v),fmt(g.y[0]+(g.y[1]-g.y[0])*v),'text-anchor="end"')).join('')+text(55,245,g.axis));dirty=false;
 }
 function draw(){
  if(dirty||wave&&time%20<step)rebuild();scene();const v=opticsValues(s,p,time),g=graphSettings(),x=wave?time:fres||s.type==='slit-path'?p.angle:p.phase,X=x=>55+635*(x-g.x[0])/(g.x[1]-g.x[0]),Y=y=>205-180*(y-g.y[0])/(g.y[1]-g.y[0]);
  patchMarkup(markers,`<path d="M${X(x)} 25V205" class="native-cursor"/>`+Array.from({length:g.count},(_,i)=>shown(i)?dot(X(x),Y(sample(x,i)),g.count===1&&!wave?2:i):'').join(''));
  let read=[];if(wave)read=s.type==='wave-sum'?[['위치 x₁ 변위',v.a],['위치 x₂ 변위',v.b],['합성 변위',v.im],['합성 진폭',v.amplitude]]:[['관측점 변위',v.im],['위상 / rad',v.phase]];
  else if(s.type==='slit-path')read=[['경로차 · 원본 눈금',v.path],['위상차 / °',v.phase],['간섭 세기 / 원본 0–100 눈금',v.intensity]];
  else if(s.type==='slit-phasor')read=[['합성 x · 원본 눈금',v.re],['합성 y · 원본 눈금',v.im],['간섭 세기 / 원본 0–100 눈금',v.intensity]];
  else if(s.type==='fresnel')read=[['rₛ',v.rs],['rₚ',v.rp],['tₛ',v.ts],['tₚ',v.tp],['Rₛ',v.Rs],['Rₚ',v.Rp]];
  else read=[['s 위상 / π',v.s],['p 위상 / π',v.p],['위상차 / π',v.difference]];
  if(fres)read.push(['브루스터각 / °',Math.atan(p.n)*180/Math.PI],['임계각 / °',p.n<1?Math.asin(p.n)*180/Math.PI:null]);
  for(const c of s.controls)get(`[data-optics-output="${c.key}"]`).textContent=fmt(p[c.key]);
  if(moving){get('[data-optics-time]').value=time;get('[data-optics-time-label]').textContent=fmt(time);}
  patchMarkup(get('[data-optics-readouts]'),read.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${fmt(v)}</dd></div>`).join(''));
  Object.assign(h.dataset,{nativeReady:'true',opticsParameters:JSON.stringify(p),opticsTime:String(time),opticsValues:JSON.stringify(v)});
 }
 function pause(){playing=false;cancelAnimationFrame(raf);last=0;carry=0;if(moving){get('[data-optics-play]').textContent='재생';get('[data-optics-play]').setAttribute('aria-pressed','false');}}
 function tick(now){if(!playing)return;if(last)carry+=Math.min(.1,(now-last)/1000);last=now;if(carry>=Math.max(step,1/30)){const n=Math.floor(carry/step);carry-=n*step;time+=n*step;if(time>maxTime){time=0;dirty=true;}draw();}raf=requestAnimationFrame(tick);}
 const batch=frameBatch(()=>{dirty=true;draw();});
 for(const input of h.querySelectorAll('[data-optics-param]'))input.addEventListener('input',()=>{p[input.dataset.opticsParam]=+input.value;batch.schedule();});
 for(const input of h.querySelectorAll('input[type=checkbox]'))input.addEventListener('change',()=>{dirty=true;draw();});
 get('[data-optics-play]')?.addEventListener('click',()=>{batch.flush();if(playing)pause();else if(visible){playing=true;last=0;get('[data-optics-play]').textContent='일시정지';get('[data-optics-play]').setAttribute('aria-pressed','true');raf=requestAnimationFrame(tick);}});
 get('[data-optics-time]')?.addEventListener('input',e=>{pause();time=+e.target.value;dirty=true;draw();});
 get('[data-optics-reset]').addEventListener('click',()=>{pause();batch.flush();Object.assign(p,opticsDefaults(s));time=0;pickSecond=false;for(const e of h.querySelectorAll('[data-optics-param]'))e.value=p[e.dataset.opticsParam];for(const e of h.querySelectorAll('input[type=checkbox]'))e.checked=false;dirty=true;draw();});
 get('[data-optics-scene] svg').addEventListener('pointerdown',e=>{if(!wave)return;const q=new DOMPoint(e.clientX,e.clientY).matrixTransform(e.currentTarget.getScreenCTM().inverse());if(q.x<35||q.x>435||q.y>210)return;const key=s.type==='wave-sum'&&pickSecond?'x2':'x1';p[key]=Math.round(q.x-35);get(`[data-optics-param="${key}"]`).value=p[key];pickSecond=!pickSecond;dirty=true;draw();});
 get('[data-optics-graph] svg').addEventListener('pointerdown',e=>{if(wave)return;const q=new DOMPoint(e.clientX,e.clientY).matrixTransform(e.currentTarget.getScreenCTM().inverse()),g=graphSettings(),key=fres||s.type==='slit-path'?'angle':'phase',c=s.controls.find(c=>c.key===key),value=g.x[0]+(q.x-55)/635*(g.x[1]-g.x[0]);p[key]=Math.min(c.max,Math.max(c.min,c.min+Math.round((value-c.min)/c.step)*c.step));get(`[data-optics-param="${key}"]`).value=p[key];dirty=true;draw();});
 get('[data-optics-csv]').addEventListener('click',()=>{batch.flush();const g=graphSettings(),rows=Array.from({length:401},(_,i)=>{const x=g.x[0]+(g.x[1]-g.x[0])*i/400;return [x,...Array.from({length:g.count},(_,c)=>sample(x,c))].join(',');}),url=URL.createObjectURL(new Blob(['# '+JSON.stringify({source:s.originalSource,parameters:p,time,units:'original numerical axes'})+'\nx,'+(wave?labels:fres?labels:['간섭 세기']).join(',')+'\n'+rows.join('\n')],{type:'text/csv;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=s.id+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(!visible)pause();}).observe(h);document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});draw();
}
if(typeof document!=='undefined')for(const h of document.querySelectorAll('[data-flash-native]'))if(opticsSpecs[h.dataset.flashNative])init(h);
