// Independently authored HTML/SVG remasters, derived from the two original models.
export const mechanicsSpecs={
 stick:{source:'stickmotion.swf',lesson:'1-2-1-1',title:'막대의 진동'},
 potential:{source:'oscpoten1.swf',lesson:'1-2-1-1',title:'1차원 진동의 여러 가지'}
};
export function stickState(A,n){const end=A*.999**n*Math.cos(n/3),length=280-end*end/320;return {end,points:Array.from({length:16},(_,i)=>({x:10+length*i/15,y:75-end*(i/15)**4})),tipX:10+length-3,tipY:75-end};}
// Keep the source's multiplication order and central difference, including its
// small integration drift at the absolute-value cusp.
function energyAt(mode,u){const u2=u*u;if(mode===1)return 200*u2;if(mode===2)return 200*Math.abs(u);if(mode===3)return 200*u2*u2;if(mode===4)return 200*u2*u2*u2*u2;if(mode===5)return 500*(u-.6)*(u-.6)*(u+.6)*(u+.6);if(mode===6)return 200*(u-.5)*(u-.5)/(u>.5?.25:2.25);throw Error('Unknown potential');}
export function potential(mode,u){return energyAt(mode,u)/200;}
export function potentialValue(mode,x){return energyAt(mode,(x-200)/200);}
export function potentialForce(mode,x){return -(potentialValue(mode,x+1)-potentialValue(mode,x-1))/2;}
export function potentialStep({x,v},mode){v+=-.00001*v+potentialForce(mode,x);return {x:x+v,v};}
export function potentialTrajectory(mode,x0,max=2000){let s={x:x0,v:0};const samples=[{n:0,...s}];for(let n=1;n<=max;n++){s=potentialStep(s,mode);samples.push({n,...s});}return samples;}
const labels=['이차형','절댓값형','사차형','팔차형','이중 우물','비대칭형'];
const fmt=n=>Number(n.toFixed(4)).toString();
const plotPath=pts=>pts.map((p,i)=>(i?'L':'M')+p.map(x=>x.toFixed(3)).join(',')).join(' ');
function init(host){
 const kind=host.dataset.flashNative,isStick=kind==='stick';
 host.innerHTML=`<div class="native-controls">${isStick?'<label>초기 끝점 변위 · 원본 눈금<output data-value="initial">40</output><input data-initial type="range" min="-70" max="70" step="1" value="40" aria-label="막대 끝점 초기 변위"></label>':`<label>진동계<select data-mode aria-label="퍼텐셜 종류">${labels.map((v,i)=>`<option value="${i+1}">${i+1}. ${v}</option>`).join('')}</select></label><label>처음 위치 · 원본 눈금<output data-value="initial">15</output><input data-initial type="range" min="10" max="390" step="1" value="15" aria-label="질점의 처음 위치"></label>`}<label>재생 속도<output data-value="rate">15 단계/s</output><input data-rate type="range" min="5" max="60" step="5" value="15" aria-label="초당 계산 단계"></label></div><div class="native-toolbar"><button class="primary" data-mechanics-play aria-pressed="false">재생</button><button data-mechanics-reset>처음 상태</button>${isStick?'<button data-equilibrium>평형위치로</button>':'<button data-random-mode>다른 진동계</button>'}<button data-mechanics-csv>그래프 데이터 CSV</button><label>계산 단계 n <output data-value="step">0</output><input data-step type="range" min="0" max="2000" step="1" value="0" aria-label="계산 단계"></label></div><div class="remaster-scene" data-mechanics-scene></div><div class="legend remaster-legend"><span><i class="remaster-green"></i>${isStick?'막대 · 변위':'퍼텐셜 · 힘'}</span><span><i class="remaster-blue"></i>${isStick?'끝점':'질점 · 운동에너지'}</span><span><i class="remaster-grey"></i>평형 · 시간 눈금</span></div><dl class="book-readouts" data-mechanics-readouts></dl><div class="native-graphs" tabindex="0" aria-label="운동과 연결된 그래프"><div data-mechanics-plot></div></div><p class="editor-note">${isStick?'끝점을 끌어 놓으면 진동합니다. 진폭과 감쇠, 막대의 굽힘 모양은 원본 모형을 따릅니다.':'질점을 끌어 놓으면 선택한 퍼텐셜 안에서 운동합니다. 퍼텐셜 위의 점과 질점은 같은 위치를 나타냅니다. 절댓값형은 원본의 수치 적분에서 발생하는 에너지 드리프트를 유지합니다. 위치 눈금은 운동 범위에 맞춰 바뀝니다.'} 시간은 원본의 계산 단계이며 실제 초와 구별합니다.</p>`;
 const get=q=>host.querySelector(q),initial=get('[data-initial]'),modeInput=get('[data-mode]'),rateInput=get('[data-rate]'),stepInput=get('[data-step]');
 let n=0,running=false,last=0,carry=0,frame=0,samples=[],bounds={lo:0,hi:400},window=-1;
 const mode=()=>Number(modeInput?.value||1),A=()=>Number(initial.value),state=()=>isStick?stickState(A(),n):samples[n];
 function updateSamples(){samples=isStick?Array.from({length:2001},(_,n)=>({n,x:stickState(A(),n).end})):potentialTrajectory(mode(),A());bounds={lo:Math.min(0,...samples.map(p=>p.x)),hi:Math.max(400,...samples.map(p=>p.x))};}
 function rebuild(){updateSamples();window=-1;rebuildScene();draw();}
 function rebuildScene(){
  if(isStick)get('[data-mechanics-scene]').innerHTML=`<svg viewBox="0 0 640 250" role="group" aria-label="한쪽 끝이 고정된 막대와 끝점"><rect x="37" y="40" width="24" height="155" rx="4" class="remaster-wall"/><path d="M65 120H590" class="native-cursor"/><path data-beam class="native-displacement" fill="none" stroke-width="9" stroke-linecap="round"/><circle data-drag-tip r="10" class="native-orbit" tabindex="0" role="slider" aria-label="막대 끝점 변위" aria-valuemin="-70" aria-valuemax="70"/><text x="34" y="224">고정 끝</text><text x="430" y="224">끝점을 끌어 놓으세요</text></svg>`;
  else get('[data-mechanics-scene]').innerHTML=`<svg viewBox="0 0 640 160" role="group" aria-label="퍼텐셜 안에서 운동하는 질점"><path d="M60 90H600" class="native-axis"/><line data-force y1="60" y2="60" stroke-width="3" class="native-displacement"/><circle data-drag-tip cy="90" r="12" class="native-orbit" tabindex="0" role="slider" aria-label="질점 위치" aria-valuemin="10" aria-valuemax="390"/><text x="60" y="140">질점을 끌어 놓으세요 · 녹색 선: 힘</text></svg>`;
  const tip=get('[data-drag-tip]');let dragging=false;
  function move(e){if(!dragging)return;const pt=new DOMPoint(e.clientX,e.clientY).matrixTransform(tip.ownerSVGElement.getScreenCTM().inverse());initial.value=isStick?Math.max(-70,Math.min(70,(120-pt.y)/1.15)):Math.max(10,Math.min(390,bounds.lo+(pt.x-60)*(bounds.hi-bounds.lo)/540));n=0;window=-1;updateSamples();draw();}
  tip.addEventListener('pointerdown',e=>{pause();dragging=true;tip.setPointerCapture(e.pointerId);move(e);});tip.addEventListener('pointermove',move);tip.addEventListener('pointerup',()=>{if(dragging){dragging=false;play();}});tip.addEventListener('pointercancel',()=>{dragging=false;pause();});
  tip.addEventListener('keydown',e=>{if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home'].includes(e.key))return;e.preventDefault();pause();initial.value=e.key==='Home'?(isStick?0:200):Math.max(+initial.min,Math.min(+initial.max,A()+(['ArrowUp','ArrowRight'].includes(e.key)?1:-1)));n=0;rebuild();get('[data-drag-tip]').focus();});
 }
 function potentialPlot(){
  const lo=Math.min(0,...samples.map(p=>p.x)),hi=Math.max(400,...samples.map(p=>p.x)),U=x=>potential(mode(),(x-200)/200),maxU=Math.max(1,...samples.map(p=>potentialValue(mode(),p.x)/200+p.v*p.v/400),...Array.from({length:241},(_,i)=>U(lo+(hi-lo)*i/240))),X=x=>65+540*(x-lo)/(hi-lo),Y=y=>190-145*y/maxU;
  return {X,Y,html:`<svg viewBox="0 0 640 235" data-potential-plot role="img" aria-label="퍼텐셜과 움직이는 질점"><text x="12" y="20">퍼텐셜 / 원본 세로 눈금 200</text><path d="M65 35V190H605" class="native-axis"/><path d="${plotPath(Array.from({length:241},(_,i)=>{const x=lo+(hi-lo)*i/240;return [X(x),Y(U(x))];}))}" class="native-curve native-displacement"/><line data-total-energy x1="65" x2="605" class="native-cursor"/><line data-kinetic stroke-width="4" class="native-velocity"/><circle data-potential-dot r="6" class="native-orbit"/><text x="8" y="45">${fmt(maxU)}</text><text x="38" y="193">0</text>${[lo,200,hi].map(x=>`<text x="${X(x)-10}" y="210">${fmt(x)}</text>`).join('')}<text x="390" y="233">위치 / 원본 눈금</text></svg>`};
 }
 let potentialAxes;
 function rebuildPlots(){
  const start=Math.floor(n/120)*120,end=Math.min(2000,start+120),points=samples.slice(start,end+1),lo=isStick?-70:Math.min(0,...samples.map(p=>p.x))-5,hi=isStick?70:Math.max(400,...samples.map(p=>p.x))+5,Y=x=>95-60*(x-(lo+hi)/2)/((hi-lo)/2),X=k=>65+540*(k-start)/Math.max(1,end-start);
  if(!isStick)potentialAxes=potentialPlot();
  get('[data-mechanics-plot]').innerHTML=(!isStick?potentialAxes.html:'')+`<svg viewBox="0 0 640 185" data-time-plot role="img" aria-label="위치와 계산 단계 그래프"><text x="12" y="20">${isStick?'끝점 변위':'질점 위치'} / 원본 눈금</text><path d="M65 35V155 M65 95H605" class="native-axis"/><path d="${plotPath(points.map(p=>[X(p.n),Y(p.x)]))}" class="native-curve native-displacement"/><line data-cursor y1="35" y2="155" class="native-cursor"/><circle data-dot r="5" class="native-orbit"/><text x="7" y="45">${fmt(hi)}</text><text x="7" y="153">${fmt(lo)}</text>${[start,Math.round((start+end)/2),end].map(k=>`<text x="${X(k)-10}" y="180">${k}</text>`).join('')}<text x="495" y="153">계산 단계 n</text></svg>`;
  window=start;return {X,Y};
 }
 let timeAxes;
 function draw(){
  if(window!==Math.floor(n/120)*120)timeAxes=rebuildPlots();
  const s=state(),tip=get('[data-drag-tip]'),x=isStick?s.end:s.x;
  if(isStick){get('[data-beam]').setAttribute('d',plotPath(s.points.map(p=>[60+(p.x-10)*1.85,120+(p.y-75)*1.15])));tip.setAttribute('cx',60+(s.tipX-10)*1.85);tip.setAttribute('cy',120+(s.tipY-75)*1.15);}
  else{const cx=60+540*(s.x-bounds.lo)/(bounds.hi-bounds.lo),F=potentialForce(mode(),s.x),U=potential(mode(),(s.x-200)/200),K=s.v*s.v/400,total=U+K,X=potentialAxes.X,Y=potentialAxes.Y;tip.setAttribute('cx',cx);get('[data-force]').setAttribute('x1',cx);get('[data-force]').setAttribute('x2',cx+F*12);const dot=get('[data-potential-dot]');dot.setAttribute('cx',X(s.x));dot.setAttribute('cy',Y(U));for(const attr of ['y1','y2'])get('[data-total-energy]').setAttribute(attr,Y(total));for(const attr of ['x1','x2'])get('[data-kinetic]').setAttribute(attr,X(s.x));get('[data-kinetic]').setAttribute('y1',Y(U));get('[data-kinetic]').setAttribute('y2',Y(total));host.dataset.potentialPosition=s.x;}
  const cursor=get('[data-time-plot] [data-cursor]'),dot=get('[data-time-plot] [data-dot]');for(const attr of ['x1','x2'])cursor.setAttribute(attr,timeAxes.X(n));dot.setAttribute('cx',timeAxes.X(n));dot.setAttribute('cy',timeAxes.Y(x));
  tip.setAttribute('aria-valuenow',fmt(isStick?s.end:s.x));get('[data-value=initial]').textContent=fmt(A());get('[data-value=step]').textContent=n;get('[data-value=rate]').textContent=rateInput.value+' 단계/s';stepInput.value=n;
  const values=isStick?[['계산 단계',n],['끝점 변위 / 원본 눈금',s.end],['남은 진폭 / 원본 눈금',Math.abs(A())*.999**n]]:[['계산 단계',n],['위치 / 원본 눈금',s.x],['속도 / 눈금·단계⁻¹',s.v],['퍼텐셜 / 원본 눈금 200',potential(mode(),(s.x-200)/200)]];
  get('[data-mechanics-readouts]').innerHTML=values.map(([k,v])=>`<div><dt>${k}</dt><dd>${fmt(v)}</dd></div>`).join('');
  host.closest('figure').querySelectorAll('[data-potential-equation]').forEach(e=>e.hidden=+e.dataset.potentialEquation!==mode());Object.assign(host.dataset,{nativeReady:'true',nativeStep:String(n),nativeX:String(x)});
 }
 function pause(){running=false;cancelAnimationFrame(frame);last=0;carry=0;get('[data-mechanics-play]').textContent='재생';get('[data-mechanics-play]').setAttribute('aria-pressed','false');}
 function play(){if(running)return;if(n>=2000)n=0;running=true;last=0;get('[data-mechanics-play]').textContent='일시정지';get('[data-mechanics-play]').setAttribute('aria-pressed','true');frame=requestAnimationFrame(tick);}
 function tick(now){if(!running)return;if(last)carry+=Math.min(.1,(now-last)/1000)*Number(rateInput.value);last=now;if(carry>=1){const inc=Math.floor(carry);carry-=inc;n=Math.min(2000,n+inc);draw();}if(n===2000)pause();else frame=requestAnimationFrame(tick);}
 get('[data-mechanics-play]').addEventListener('click',()=>running?pause():play());initial.addEventListener('input',()=>{pause();n=0;rebuild();});rateInput.addEventListener('input',draw);modeInput?.addEventListener('change',()=>{pause();n=0;rebuild();});
 stepInput.addEventListener('input',()=>{pause();n=+stepInput.value;draw();});get('[data-mechanics-reset]').addEventListener('click',()=>{pause();n=0;draw();});get('[data-equilibrium]')?.addEventListener('click',()=>{pause();initial.value=0;n=0;rebuild();});
 get('[data-random-mode]')?.addEventListener('click',()=>{pause();const previous=mode();modeInput.value=1+(previous+Math.floor(Math.random()*5))%6;n=0;rebuild();play();});
 get('[data-mechanics-csv]').addEventListener('click',()=>{const csv='# '+JSON.stringify({model:kind,initial:A(),mode:mode(),units:'original scale; time is calculation step'})+'\nstep,position'+(isStick?'':',velocity')+'\n'+samples.map(p=>[p.n,p.x,...(isStick?[]:[p.v])].join(',')).join('\n'),url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=kind+'-remaster.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 new IntersectionObserver(es=>{if(!es[0].isIntersecting)pause();}).observe(host);document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});rebuild();
}
if(typeof document!=='undefined')for(const host of document.querySelectorAll('[data-flash-native]'))if(mechanicsSpecs[host.dataset.flashNative])init(host);
