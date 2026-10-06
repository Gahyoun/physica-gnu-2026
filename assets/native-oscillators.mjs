import {patchMarkup,frameBatch,observePlayback} from './render-utils.mjs';
import {experimentSpecs,trajectory} from './native-integrators.mjs';
// Independently written source-derived oscillator models; extracted AS is not shipped.
export const oscillatorSpecs={
 ...experimentSpecs,
 damped:{source:'graph_damp.swf',lesson:'1-2-5-2',title:'감쇠진동 · 운동과 시간 그래프',parameters:[['b','감쇠계수 b',0,10,.1,1],['k','용수철 상수 k',0,20,.1,5]]},
 driven:{source:'graph_driven.swf',lesson:'1-2-6-1',title:'강제진동 · 운동과 공진 곡선',parameters:[['b','감쇠계수 b',0,5,.1,2],['w','구동 각진동수 ω / rad·s⁻¹',0,20,.1,8]]}
};
export function damped(b,k,t,mode='source'){
 const g=b/2,q=k-g*g;let x,v;
 if(q>1e-12){const w=Math.sqrt(q),c=Math.cos(w*t),s=Math.sin(w*t),h=mode==='source'?0:g/w,e=Math.exp(-g*t);x=e*(c+h*s);v=e*(-g*(c+h*s)+w*(-s+h*c));}
 else if(q< -1e-12){const z=Math.sqrt(-q),r1=-g-z,r2=k===0?0:-k/(g+z),c1=r2/(r2-r1),c2=1-c1;x=c1*Math.exp(r1*t)+c2*Math.exp(r2*t);v=c1*r1*Math.exp(r1*t)+c2*r2*Math.exp(r2*t);}
 else{x=(1+g*t)*Math.exp(-g*t);v=-g*g*t*Math.exp(-g*t);}
 return {x,v,a:-b*v-k*x,energy:(v*v+k*x*x)/2,regime:k===0?'복원력 없음':q>1e-12?'부족감쇠':q< -1e-12?'과감쇠':'임계감쇠'};
}
export function response(b,w){const d=100-w*w,den=Math.hypot(d,b*w);return den===0?Infinity:100/den;}
export function driven(b,w,t){
 const d=100-w*w,den=d*d+(b*w)**2;let x,v;
 if(den===0){x=5*t*Math.sin(10*t);v=5*Math.sin(10*t)+50*t*Math.cos(10*t);}
 else{x=100*(d*Math.cos(w*t)+b*w*Math.sin(w*t))/den;v=100*w*(-d*Math.sin(w*t)+b*w*Math.cos(w*t))/den;}
 return {x,v,a:100*Math.cos(w*t)-b*v-100*x,force:Math.cos(w*t),amplitude:response(b,w),phase:Math.atan2(b*w,d),resonant:den===0};
}
const fmt=n=>Number.isFinite(n)?Number(n.toFixed(4)).toString():'∞';
const path=points=>points.map((p,i)=>(i?'L':'M')+p.map(x=>x.toFixed(3)).join(',')).join(' ');
function init(host){
 const kind=host.dataset.flashNative,spec=oscillatorSpecs[kind],experiment=kind.endsWith('Experiment'),isDamped=kind.startsWith('damped');
 const range=([key,label,min,max,step,value])=>`<label>${label}<output data-value="${key}">${value}</output><input data-parameter="${key}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" aria-label="${label}"></label>`;
 host.innerHTML=`<div class="native-controls">${spec.parameters.map(range).join('')}${kind==='damped'?'<label>초기조건'+'<select data-native-mode aria-label="초기조건"><option value="source">원본 곡선의 초기조건</option><option value="rest">x(0)=1, v(0)=0 통일</option></select></label>':''}</div><div class="native-toolbar"><button data-native-play>재생</button><button data-native-reset>초기화</button><button data-native-csv>시간 데이터 CSV</button><label>시간 t / s <output data-value="time">0</output><input data-native-time type="range" min="0" max="20" step=".01" value="0" aria-label="시간 t / s"></label></div><svg viewBox="0 0 640 170" role="img" aria-label="질점의 운동과 힘"><path d="M45,30 V135 M40,120 H600" class="native-axis"/><line x1="340" y1="25" x2="340" y2="135" class="native-cursor"/><path data-spring class="native-axis"/><circle data-bob cy="80" r="13" class="native-bob"/><line data-speed y1="105" y2="105" class="native-velocity" stroke-width="3"/><text x="45" y="157">변위: 파랑 · 속도: 회색</text><text x="420" y="157" data-scene-scale></text></svg><dl class="book-readouts" data-native-readouts></dl><p class="editor-note" data-native-note></p><div class="native-graphs" tabindex="0" aria-label="운동과 동기화된 그래프"><div data-native-graphs></div></div>`;
 const mode=host.querySelector('[data-native-mode]');
 const get=q=>host.querySelector(q),inputs=Object.fromEntries([...host.querySelectorAll('[data-parameter]')].map(e=>[e.dataset.parameter,e]));
 const values=()=>Object.fromEntries(Object.entries(inputs).map(([k,e])=>[k,kind==='drivenExperiment'&&k==='w'&&+e.value===0?.1:Number(e.value)]));
 const calc=t=>{const p=values();if(experiment){const pt=grid[Math.min(grid.length-1,Math.round(t/(isDamped?.1:1/15)))];return {...pt,regime:p.b*p.b-4*p.m*p.k<0?'부족감쇠':p.b*p.b-4*p.m*p.k>0?'과감쇠':'임계감쇠',phase:Math.atan2(p.b*p.w,100-p.w*p.w),amplitude:response(p.b,p.w)};}return kind==='damped'?damped(p.b,p.k,t,mode.value):driven(p.b,p.w,t);};
 let time=0,running=false,frame=0,last=0,grid=[],magnitudes={};
 function rebuild(){
  grid=experiment?trajectory(kind,{...values(),w:values().w===0?.1:values().w}):Array.from({length:401},(_,i)=>({t:i/20,...calc(i/20)}));
  magnitudes=Object.fromEntries(['x','v','a'].map(k=>[k,Math.max(1e-6,...grid.map(p=>Math.abs(p[k])))]));
  const plots=['x','v','a'].map((key,i)=>{return `<svg viewBox="0 0 640 165" data-curve="${key}" role="img" aria-label="${['변위','속도','가속도'][i]} 시간 그래프"><text x="10" y="18">${['변위 x','속도 v','가속도 a'][i]} · ${isDamped?(experiment?['m','m/s','m/s²'][i]:['원본 눈금','눈금/s','눈금/s²'][i]):['정적 변위 기준','정적 변위/s','정적 변위/s²'][i]}</text><path d="M65,25 V140 M65,83 H605" class="native-axis"/><path d="${path(grid.map(p=>[65+27*p.t,83-53*p[key]/magnitudes[key]]))}" class="native-curve ${['native-displacement','native-velocity','native-acceleration'][i]}"/><text x="3" y="35">${fmt(magnitudes[key])}</text><text x="3" y="137">−${fmt(magnitudes[key])}</text>${[0,5,10,15,20].map(t=>`<text x="${60+t*27}" y="159">${t}</text>`).join('')}<text x="566" y="137">t / s</text><line data-cursor y1="25" y2="140" class="native-cursor"/><circle data-dot r="5" class="${['native-displacement','native-velocity','native-acceleration'][i]}"/></svg>`;}).join('');
  get('[data-native-graphs]').innerHTML=plots+(!isDamped?resonancePlot(): '');draw();
 }
 function resonancePlot(){
  const {b}=values();let d='',pen=false;
  for(let i=0;i<=200;i++){const w=i/10,A=response(b,w);if(!Number.isFinite(A)||A>10){pen=false;continue;}d+=(pen?'L':'M')+(65+27*w).toFixed(3)+','+(140-11*A).toFixed(3)+' ';pen=true;}
  return `<svg viewBox="0 0 640 185" data-resonance role="img" aria-label="선택 진동수와 공진 곡선"><text x="10" y="18">공진 곡선 · 진폭 / 정적 변위</text><path d="M65,25 V140 H605" class="native-axis"/><text x="25" y="36">10</text><text x="40" y="144">0</text><path d="${d}" class="native-curve native-displacement"/><line data-cursor y1="25" y2="140" class="native-cursor"/><circle data-dot r="5" class="native-bob"/><text data-peak x="400" y="35"></text>${kind==='drivenExperiment'?'<circle data-measured r="6" class="native-velocity"/><text x="75" y="181">회색: 측정 · 파랑: 이론</text>':''}${[0,5,10,15,20].map(w=>`<text x="${60+27*w}" y="161">${w}</text>`).join('')}<text x="470" y="181">ω / rad·s⁻¹</text></svg>`;
 }
 function draw(){
  const p=values(),s=calc(time),shownTime=s.t??time,sx=kind==='dampedExperiment'?.2:magnitudes.x,sv=magnitudes.v,bx=340+180*s.x/sx;
  get('[data-bob]').setAttribute('cx',bx);
  const pts=[[45,80],[60,80],...Array.from({length:20},(_,i)=>[60+(bx-90)*(i+1)/21,80+(i%2?10:-10)]),[bx-15,80],[bx,80]];
  get('[data-spring]').setAttribute('d',path(pts));get('[data-speed]').setAttribute('x1',bx);get('[data-speed]').setAttribute('x2',bx+60*s.v/sv);
  get('[data-scene-scale]').textContent='±'+fmt(sx)+' · 자동 축척';
  for(const key of ['x','v','a']){const svg=get('[data-curve="'+key+'"]'),cx=65+27*shownTime;for(const attr of ['x1','x2'])svg.querySelector('[data-cursor]').setAttribute(attr,cx);svg.querySelector('[data-dot]').setAttribute('cx',cx);svg.querySelector('[data-dot]').setAttribute('cy',83-53*s[key]/magnitudes[key]);}
  if(!isDamped){const svg=get('[data-resonance]'),A=s.amplitude;for(const attr of ['x1','x2'])svg.querySelector('[data-cursor]').setAttribute(attr,65+27*p.w);svg.querySelector('[data-dot]').setAttribute('cx',65+27*p.w);svg.querySelector('[data-dot]').setAttribute('cy',140-11*Math.min(10,A));if(kind==='drivenExperiment'){const dot=svg.querySelector('[data-measured]');dot.setAttribute('cx',65+27*p.w);dot.setAttribute('cy',140-11*Math.max(0,Math.min(10,measuredAmplitude(shownTime))));}
 svg.querySelector('[data-peak]').textContent=A>10?'선택 진폭 '+fmt(A)+' · 눈금 상한 초과':'';}
  const items=[['시간 / s',shownTime],['변위 x',s.x],['속도 v',s.v],['가속도 a',s.a],...(isDamped?[[experiment?'에너지 / J':'에너지 (v²+kx²)/2',s.energy??(values().k*s.x*s.x)/2],['감쇠 형태',s.regime]]:[[experiment?'정상상태 이론 진폭':'진폭 / 정적 변위',s.amplitude],...(experiment?[['측정 진폭 / 정적 변위',measuredAmplitude(shownTime)]]:[]),['위상 지연 / rad',s.resonant?'정상상태 없음':s.phase]])];
  patchMarkup(get('[data-native-readouts]'),items.map(([k,v])=>`<div><dt>${k}</dt><dd>${typeof v==='number'?fmt(v):v}</dd></div>`).join(''));
  get('[data-native-note]').textContent=experiment?(isDamped?'원본의 질량·감쇠계수·용수철 상수와 ±0.2 m 운동 범위를 따릅니다. 초기 변위를 조절하거나 질점을 끌어 놓을 수 있습니다. 화면과 그래프는 같은 수치해를 사용합니다.':'원본의 구동 각진동수(0 눈금은 0.1)와 감쇠 눈금 1…5를 따릅니다. 질점은 정지 상태에서 시작합니다. 공진 곡선은 정상상태 이론값이며 측정 진폭은 재생 중의 극값입니다.'):kind==='damped'?(mode.value==='source'?'원본의 부족감쇠 곡선은 x(0)=1, v(0)=−b/2입니다. 과감쇠·임계감쇠는 v(0)=0입니다. 임계 분기의 변수 t 오타를 시간으로 바로잡았습니다.':'모든 감쇠 영역에서 x(0)=1, v(0)=0을 사용합니다. 원본 부족감쇠 곡선의 초기 속도와 다릅니다.'):(s.resonant?'b=0, ω=10에서는 유한한 정상상태 진폭이 없습니다. 초기 정지 상태에서의 공진 성장 x=5t sin(10t)를 표시합니다.':'원본의 m=1, k=100 공진 곡선과 정상상태 운동을 결합했습니다. 구동 진폭을 정적 변위 1로 정규화했습니다. 시간 곡선은 과도응답이 빠진 정상상태입니다.');
  for(const [k,v] of Object.entries(p))get('[data-value="'+k+'"]').textContent=fmt(v);
  get('[data-value=time]').textContent=fmt(shownTime);get('[data-native-time]').value=shownTime;
  if(kind==='drivenExperiment'){get('[data-native-note]').textContent+=' 측정 진폭: '+fmt(measuredAmplitude(time))+' · 관측 구간 0…'+fmt(time)+' s';}
  Object.assign(host.dataset,{nativeReady:'true',nativeTime:String(shownTime),nativeX:String(s.x),nativeV:String(s.v),nativeA:String(s.a)});
 }
 function measuredAmplitude(t){return grid[Math.min(grid.length-1,Math.round(t/(1/15)))].measured;}
 function pause(){running=false;cancelAnimationFrame(frame);last=0;get('[data-native-play]').textContent='재생';}
 function tick(now){if(!running)return;if(last)time=Math.min(20,time+Math.min(.1,(now-last)/1000));last=now;if(!host._lastPaint||now-host._lastPaint>=1000/30){draw();host._lastPaint=now;}if(time>=20)pause();else frame=requestAnimationFrame(tick);}
 get('[data-native-play]').addEventListener('click',()=>{if(running)pause();else{if(time>=20-1e-9)time=0;running=true;last=0;draw();get('[data-native-play]').textContent='일시정지';frame=requestAnimationFrame(tick);}});
 get('[data-native-reset]').addEventListener('click',()=>{pause();time=0;for(const [k,,,,,v] of spec.parameters)inputs[k].value=v;if(mode)mode.value='source';rebuild();});
 for(const e of [...Object.values(inputs),...(mode?[mode]:[])])e.addEventListener('input',()=>{pause();time=0;rebuild();});
 get('[data-native-time]').addEventListener('input',()=>{pause();time=+get('[data-native-time]').value;if(experiment)time=Math.round(time/(isDamped?.1:1/15))*(isDamped?.1:1/15);draw();});
 get('[data-native-csv]').addEventListener('click',()=>{const csv='# '+JSON.stringify({...values(),mode:mode?.value||'steady-state'})+'\ntime_s,x,v,a\n'+grid.map(p=>[p.t,p.x,p.v,p.a].join(',')).join('\n'),url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=kind+'-motion.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 if(experiment){// A decimal serialization of 1/15 makes the range's nominal 20 s endpoint
 // unreachable in browsers. Snap in the input handler, not HTML range arithmetic.
 get('[data-native-time]').step=isDamped?.1:'any';}
 
 if(kind==='dampedExperiment'){const bob=get('[data-bob]'),svg=bob.ownerSVGElement,dragUpdate=frameBatch(rebuild);let dragging=false;bob.style.touchAction='none';bob.style.cursor='grab';bob.addEventListener('pointerdown',e=>{pause();dragging=true;bob.setPointerCapture(e.pointerId);});bob.addEventListener('pointermove',e=>{if(!dragging)return;const pt=new DOMPoint(e.clientX,e.clientY).matrixTransform(svg.getScreenCTM().inverse());inputs.x0.value=Math.max(-.2,Math.min(.2,(pt.x-340)*.2/180));time=0;dragUpdate.schedule();});bob.addEventListener('pointerup',()=>{dragUpdate.flush();dragging=false;});bob.addEventListener('pointercancel',()=>{dragUpdate.flush();dragging=false;});}
 observePlayback(host,visible=>{if(!visible)pause();});document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});rebuild();
}
if(typeof document!=='undefined')for(const host of document.querySelectorAll('[data-flash-native]'))if(oscillatorSpecs[host.dataset.flashNative])init(host);
