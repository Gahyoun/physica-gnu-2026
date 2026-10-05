import {patchMarkup,frameBatch} from './render-utils.mjs';
import './native-timelines.mjs';
import './native-chain.mjs';
import './native-waves.mjs';
import './native-mechanics.mjs';
import './native-oscillators.mjs';
// Independent HTML/SVG implementation of harmoniccircular.swf.
// Source ranges: A=20..100 (75), omega=.1..5 (2), phi=-3.14..3.14 (0).
export const harmonic=(A,w,phi,t)=>({x:A*Math.sin(phi+w*t),v:A*w*Math.cos(phi+w*t),a:-A*w*w*Math.sin(phi+w*t),cx:A*Math.cos(phi+w*t),frequency:w/(2*Math.PI),period:2*Math.PI/w});
const fmt=n=>Number(n.toFixed(3)).toString();
function init(host){
 const range=(key,name,min,max,step,value)=>`<label>${name}<output data-value="${key}">${value}</output><input type="range" data-parameter="${key}" aria-label="${name}" min="${min}" max="${max}" step="${step}" value="${value}"></label>`;
 host.innerHTML=`<div class="native-controls">${range('A','진폭 A · 원본 눈금',20,100,1,75)}${range('w','각진동수 ω / rad·s⁻¹',.1,5,.05,2)}${range('phi','초기 위상 φ / rad',-3.14,3.14,.01,0)}</div><div class="native-toolbar"><button data-native-play>재생</button><button data-native-reset>초기화</button><button data-native-csv>그래프 데이터 CSV</button><label>시간 t / s <output data-value="time">0</output><input type="range" data-native-time min="0" max="20" step=".005" value="0" aria-label="시간 t / s"></label></div><svg viewBox="0 0 640 220" role="img" aria-label="원운동의 수직 투영과 조화진동"><circle data-circle cx="165" cy="110" r="80" fill="none" class="native-axis"/><line x1="80" y1="110" x2="520" y2="110" class="native-axis"/><line x1="165" y1="20" x2="165" y2="200" class="native-axis"/><line data-radius x1="165" y1="110" class="native-displacement"/><line data-projection stroke-dasharray="5 5" class="native-axis"/><circle data-orbit r="7" class="native-orbit"/><circle data-bob cx="460" r="9" class="native-bob"/><line x1="460" y1="20" x2="460" y2="200" class="native-axis"/><text x="100" y="215">원운동</text><text x="425" y="215">수직 투영</text></svg><dl class="book-readouts" data-native-readouts></dl><div class="native-graphs" tabindex="0" aria-label="동기화된 시간 그래프"><div data-native-graphs></div></div><p class="editor-note">원본의 진폭·각진동수·위상 범위와 x = A sin(φ + ωt)를 따릅니다. 원본 진폭 눈금에 길이 단위를 임의로 붙이지 않았습니다. 속도·가속도 그래프와 CSV는 HTML 복원에서 추가했습니다.</p>`;
 const inputs=Object.fromEntries([...host.querySelectorAll('[data-parameter]')].map(e=>[e.dataset.parameter,e]));
 const get=selector=>host.querySelector(selector),timeInput=get('[data-native-time]');
 let time=0,running=false,last=0,frame=0;
 const curves=[['x','변위 / 원본 눈금','native-displacement'],['v','속도 / 눈금·s⁻¹','native-velocity'],['a','가속도 / 눈금·s⁻²','native-acceleration']];
 const values=()=>Object.fromEntries(Object.entries(inputs).map(([k,e])=>[k,Number(e.value)]));
 let grid;
 function rebuild(){
  const {A,w,phi}=values();grid=Array.from({length:401},(_,i)=>({t:i/20,...harmonic(A,w,phi,i/20)}));
  const magnitudes={x:A,v:A*w,a:A*w*w};
  get('[data-native-graphs]').innerHTML=curves.map(([key,label,color])=>{
   const magnitude=magnitudes[key],Y=n=>85-55*n/magnitude;
   const d=grid.map((p,i)=>(i?'L':'M')+(65+p.t*27).toFixed(2)+','+Y(p[key]).toFixed(2)).join(' ');
   return `<svg viewBox="0 0 640 160" data-curve="${key}" role="img" aria-label="${label}와 시간"><text x="15" y="18">${label}</text><path d="M65,25 V142 M65,85 H605" class="native-axis"/>${[0,5,10,15,20].map(t=>`<text x="${58+t*27}" y="156">${t}</text>`).join('')}<text x="574" y="140">t / s</text><text x="6" y="34">${fmt(magnitude)}</text><text x="6" y="140">−${fmt(magnitude)}</text><path d="${d}" class="native-curve ${color}"/><line data-cursor y1="25" y2="142" class="native-cursor"/><circle data-dot r="5" class="${color}"/></svg>`;
  }).join('');draw();
 }
 function draw(){
  const {A,w,phi}=values(),s=harmonic(A,w,phi,time),scale=.8;
  get('[data-circle]').setAttribute('r',A*scale);const orbit=get('[data-orbit]'),bob=get('[data-bob]'),radius=get('[data-radius]'),projection=get('[data-projection]');
  orbit.setAttribute('cx',165+scale*s.cx);orbit.setAttribute('cy',110-scale*s.x);bob.setAttribute('cy',110-scale*s.x);
  radius.setAttribute('x2',165+scale*s.cx);radius.setAttribute('y2',110-scale*s.x);projection.setAttribute('x1',165+scale*s.cx);projection.setAttribute('x2',460);projection.setAttribute('y1',110-scale*s.x);projection.setAttribute('y2',110-scale*s.x);
  for(const [key,,color] of curves){const svg=get('[data-curve="'+key+'"]'),magnitude=key==='x'?A:key==='v'?A*w:A*w*w;svg.querySelector('[data-cursor]').setAttribute('x1',65+time*27);svg.querySelector('[data-cursor]').setAttribute('x2',65+time*27);svg.querySelector('[data-dot]').setAttribute('cx',65+time*27);svg.querySelector('[data-dot]').setAttribute('cy',85-55*s[key]/magnitude);}
  for(const [k,v] of Object.entries(values()))get('[data-value="'+k+'"]').textContent=fmt(v);
  get('[data-value=time]').textContent=fmt(time);timeInput.value=time;
  patchMarkup(get('[data-native-readouts]'),[['시간 / s',time],['변위 / 눈금',s.x],['속도 / 눈금·s⁻¹',s.v],['가속도 / 눈금·s⁻²',s.a],['진동수 / Hz',s.frequency],['주기 / s',s.period]].map(([k,v])=>`<div><dt>${k}</dt><dd>${fmt(v)}</dd></div>`).join(''));
  host.dataset.nativeTime=time;host.dataset.nativeX=s.x;host.dataset.nativeReady='true';
 }
 function pause(){running=false;cancelAnimationFrame(frame);get('[data-native-play]').textContent='재생';last=0;}
 function tick(now){if(!running)return;if(last)time=(time+Math.min((now-last)/1000,.1))%20;last=now;if(!host._lastPaint||now-host._lastPaint>=1000/30){draw();host._lastPaint=now;}frame=requestAnimationFrame(tick);}
 get('[data-native-play]').addEventListener('click',()=>{if(running)pause();else{running=true;get('[data-native-play]').textContent='일시정지';frame=requestAnimationFrame(tick);}});
 get('[data-native-reset]').addEventListener('click',()=>{pause();time=0;inputs.A.value=75;inputs.w.value=2;inputs.phi.value=0;rebuild();});
 for(const e of Object.values(inputs))e.addEventListener('input',()=>{time=0;rebuild();});
 timeInput.addEventListener('input',()=>{pause();time=Number(timeInput.value);draw();});
 get('[data-native-csv]').addEventListener('click',()=>{
  const {A,w,phi}=values();const csv='# A='+A+', omega_rad_s='+w+', phi_rad='+phi+'\ntime_s,displacement_original_scale,velocity_scale_per_s,acceleration_scale_per_s2\n'+grid.map(p=>[p.t,p.x,p.v,p.a].join(',')).join('\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='harmonic-motion.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 });
 const observer=new IntersectionObserver(es=>{if(!es[0].isIntersecting)pause();});observer.observe(host);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});rebuild();
}
if(typeof document!=='undefined')document.querySelectorAll('[data-flash-native="harmonic"]').forEach(init);
