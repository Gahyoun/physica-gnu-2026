import {mountLegacyNuclearMotion} from './legacy-nuclear-motion.mjs';
import {decaySeries,originalAmounts,decayEdges,decayStep,decayHistory} from './legacy-nuclear-physics.mjs';
import {observePlayback} from './render-utils.mjs';
const fmt=x=>Math.abs(x)<1e-10?'0':Number(x.toPrecision(5)).toString();
const colors=['#0069B4','#009EDB','#43525A','#78858B'];
const labels={alpha:'α',beta:'β⁻'};
const natural=['Th232','Pu241','U238','U235'];
const options=keys=>keys.map(k=>`<option value="${k}">${decaySeries[k].label}</option>`).join('');
const text=(x,y,s,size=13)=>`<text x="${x}" y="${y}" font-size="${size}">${s}</text>`;
const save=(filename,contents)=>{const a=document.createElement('a'),u=URL.createObjectURL(new Blob(['\uFEFF'+contents],{type:'text/csv;charset=utf-8'}));a.href=u;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};

export function mountLegacyNuclear(h,spec){
 if(['rutherfordScatter','rutherfordCapture','rutherfordOrbits','fission'].includes(spec.kind))return mountLegacyNuclearMotion(h,spec);
 if(spec.kind==='seriesTable')return table(h);
 return curves(h);
}
function table(h){
 let selected='all',nuclide='th232';
 h.innerHTML=`<div class="native-controls"><label>붕괴 계열<select data-legacy-series><option value="all">전체 계열</option>${options(natural)}</select></label><label>핵종<select data-legacy-nuclide></select></label></div><div class="remaster-scene"><svg viewBox="0 0 720 640" role="img" aria-label="원자번호와 중성자 수로 나타낸 자연 방사성 붕괴 계열"><g></g></svg></div><p class="legacy-readout" data-legacy-info></p><p class="editor-note">α 붕괴는 Z와 N이 각각 2 줄고, β⁻ 붕괴는 Z가 1 늘고 N이 1 줄어듭니다. 핵종을 선택해 원본 데이터의 반감기와 분기율을 확인하세요.</p><button data-legacy-csv>핵종 데이터 CSV</button>`;
 const $=q=>h.querySelector(q),x=z=>70+(z-80)*36,y=n=>565-(n-124)*19;
 const elements=()=>[...new Map((selected==='all'?natural:[selected]).flatMap(k=>decaySeries[k].elements).map(a=>[a.id,a])).values()];
 function draw(){
  const keys=selected==='all'?natural:[selected],all=elements(),focus=all.find(e=>e.id===nuclide)||all[0];nuclide=focus.id;
  let svg='<defs><marker id="legacy-decay-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="context-stroke"/></marker></defs>';
  for(let z=80;z<=96;z++)svg+=`<path d="M${x(z)},60V${y(124)+12}" stroke="var(--ui-border)"/>`+text(x(z),600,z);
  for(let n=124;n<=150;n+=2)svg+=`<path d="M65,${y(n)}H680" stroke="var(--ui-border)"/>`+text(26,y(n)+5,n);
  svg+=text(300,635,'원자번호 Z',16)+text(65,30,'중성자 수 N',16);
  keys.forEach((k,ki)=>{
   const e=decaySeries[k].elements,c=colors[natural.indexOf(k)];
   for(const edge of decayEdges(k)){
    const a=e.find(e=>e.id===edge.from),b=e.find(e=>e.id===edge.to),active=nuclide===a.id||nuclide===b.id;
    svg+=`<path d="M${x(a.Z)},${y(a.N)}L${x(b.Z)},${y(b.N)}" fill="none" stroke="${c}" stroke-width="${active?3:1.7}" stroke-opacity=".65" ${edge.kind==='beta'?'stroke-dasharray="4 3"':''} marker-end="url(#legacy-decay-arrow)"/>`;
   }
   for(const a of e)svg+=`<g data-nuclide="${a.id}" role="button" tabindex="0" aria-label="${a.symbol}-${a.Z+a.N}"><rect x="${x(a.Z)-15}" y="${y(a.N)-8}" width="30" height="17" rx="3" fill="var(--surface,#fff)" stroke="${c}" stroke-width="${a.id===nuclide?3:1}"/>${text(x(a.Z)-12,y(a.N)+4,a.symbol+(a.Z+a.N),9)}</g>`;
   svg+=`<rect x="${80+ki*145}" y="47" width="10" height="10" fill="${c}"/>`+text(95+ki*145,57,decaySeries[k].label,11);
  });
  $('svg g').innerHTML=svg;
  $('[data-legacy-nuclide]').innerHTML=all.map(a=>`<option value="${a.id}">${a.symbol}-${a.Z+a.N}</option>`).join('');$('[data-legacy-nuclide]').value=nuclide;
  $('[data-legacy-info]').textContent=`${focus.symbol}-${focus.Z+focus.N} · Z=${focus.Z} · N=${focus.N} · 원본 반감기 ${focus.lambda===0?'안정핵종':fmt(focus.halfLife)+' 년'}${focus.lambda===0?'':` · α ${focus.alphaPercent}% / β⁻ ${100-focus.alphaPercent}%`}`;
  h.dataset.legacyState=JSON.stringify({series:selected,nuclide,Z:focus.Z,N:focus.N,halfLife:focus.halfLife,alphaPercent:focus.alphaPercent});h.dataset.nativeReady='true';
 }
 $('[data-legacy-series]').onchange=e=>{selected=e.target.value;nuclide=elements()[0].id;draw();};
 $('[data-legacy-nuclide]').onchange=e=>{nuclide=e.target.value;draw();};
 $('svg').onclick=e=>{const a=e.target.closest('[data-nuclide]');if(a){nuclide=a.dataset.nuclide;draw();}};
 $('svg').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){const a=e.target.closest('[data-nuclide]');if(a){e.preventDefault();nuclide=a.dataset.nuclide;draw();}}};
 $('[data-legacy-csv]').onclick=()=>save('decay-series.csv','id,Z,N,A,lambda_per_year,half_life_years,alpha_percent\n'+elements().map(a=>[a.symbol,a.Z,a.N,a.Z+a.N,a.lambda,a.halfLife,a.alphaPercent].join(',')).join('\n'));
 draw();return {dispose(){},redraw:draw};
}
function curves(h){
 let key='Test',speed=5,t=0,playing=false,raf=0,last=0,carry=0,history=null,historyKey='';
 h.innerHTML=`<div class="native-toolbar"><button class="primary" data-legacy-play aria-pressed="false">재생</button><button data-legacy-reset>초기화</button><button data-legacy-csv>데이터 CSV</button></div><div class="native-controls"><label>붕괴 계열<select data-legacy-series>${options(['Test','Pu241','Th232','U238','U235','RadiosactiveEquiv'])}</select></label><label>시간 진행 지수<output data-legacy-speed-output>5</output><input data-legacy-speed type="range" min="1" max="9" step="1" value="5"></label></div><p class="legacy-readout" data-legacy-info></p><div class="remaster-scene"><svg viewBox="0 0 720 590" role="img" aria-label="붕괴 계열의 핵종별 개수와 시간 그래프"><g></g></svg></div><div class="legacy-legend" data-legacy-legend></div><div class="native-controls"><label>시간 / 최초 핵종 반감기<output data-legacy-time-output>0</output><input data-legacy-time type="range" min="0" max="10" step=".01" value="0"></label></div><p class="editor-note">원본 핵종 데이터와 계산식을 따릅니다. 시간 진행 지수는 1칸마다 10배가 됩니다. 자연 계열의 반감기와 분기 계산에는 오래된 원본 수치를 유지했습니다.</p>`;
 const $=q=>h.querySelector(q);
 function stop(){playing=false;last=carry=0;cancelAnimationFrame(raf);$('[data-legacy-play]').textContent='재생';$('[data-legacy-play]').setAttribute('aria-pressed','false');}
 function draw(){
  const seq=decaySeries[key],e=seq.elements,amounts=originalAmounts(key,t),until=Math.max(seq.elements[0].halfLife*5,t*1.1),hk=key+':'+until;
  if(hk!==historyKey){history=decayHistory(key,until);historyKey=hk;}
  const barMax=Math.max(seq.initial,...amounts),plotMax=Math.max(seq.initial,...history.flatMap(q=>q.amounts)),w=620/e.length;
  let svg=text(55,26,'핵종별 개수 · 원본 수치')+text(55,317,'시간 그래프 · 같은 계산 결과');
  svg+='<path d="M55 50V245H685M55 340V530H685" fill="none" stroke="var(--plot-muted,#43525A)"/>';
  e.forEach((a,i)=>{
   const c=colors[i%4],bh=Math.max(0,amounts[i])/barMax*175;
   svg+=`<rect x="${58+i*w}" y="${245-bh}" width="${Math.max(3,w-5)}" height="${bh}" fill="${c}" fill-opacity=".65"/>`+text(58+i*w,265,a.symbol,11)+text(58+i*w,282,a.Z+a.N,10);
   const d=history.map((q,j)=>(j?'L':'M')+(55+630*q.t/until).toFixed(2)+','+(530-180*Math.max(0,q.amounts[i])/plotMax).toFixed(2)).join(' ');
   svg+=`<path d="${d}" fill="none" stroke="${c}" stroke-width="2" stroke-opacity=".65" stroke-dasharray="${['none','5 3','2 3','9 3 2 3'][Math.floor(i/4)%4]}"/>`;
  });
  svg+=`<path d="M${55+630*t/until},335V535" stroke="var(--plot-muted,#43525A)" stroke-dasharray="4 4"/>`+text(55,556,'0')+text(560,556,fmt(until)+' 년');
  $('svg g').innerHTML=svg;
  $('[data-legacy-legend]').innerHTML=e.map((a,i)=>`<span><svg viewBox="0 0 30 12" aria-hidden="true"><path d="M0 6H30" stroke="${colors[i%4]}" stroke-width="2" stroke-opacity=".65" stroke-dasharray="${['none','5 3','2 3','9 3 2 3'][Math.floor(i/4)%4]}"/></svg>${a.symbol}-${a.Z+a.N}</span>`).join('');
  $('[data-legacy-info]').textContent='t = '+fmt(t)+' 년 · '+e.map((a,i)=>a.symbol+'-'+(a.Z+a.N)+': '+fmt(amounts[i])).join(' / ');
  const tau=t/e[0].halfLife;$('[data-legacy-time]').max=Math.max(10,Math.ceil(tau));$('[data-legacy-time]').value=tau;$('[data-legacy-time-output]').textContent=fmt(tau);$('[data-legacy-speed-output]').textContent=speed+' · ×'+fmt(10**(speed-5));
  h.dataset.legacyState=JSON.stringify({key,time:t,speed,amounts});h.dataset.nativeReady='true';
 }
 function tick(now){if(!playing)return;carry+=last?Math.min(.15,(now-last)/1000):0;last=now;let changed=false;while(carry>=.05){t+=decayStep(key,speed);carry-=.05;changed=true;}if(changed){draw();if(originalAmounts(key,t).at(-1)>decaySeries[key].initial*.9995)stop();}if(playing)raf=requestAnimationFrame(tick);}
 $('[data-legacy-play]').onclick=()=>{if(playing)stop();else{playing=true;last=carry=0;$('[data-legacy-play]').textContent='일시정지';$('[data-legacy-play]').setAttribute('aria-pressed','true');raf=requestAnimationFrame(tick);}};
 $('[data-legacy-reset]').onclick=()=>{stop();t=0;draw();};
 $('[data-legacy-series]').onchange=e=>{stop();key=e.target.value;t=0;draw();};
 $('[data-legacy-speed]').oninput=e=>{speed=+e.target.value;draw();};
 $('[data-legacy-time]').oninput=e=>{stop();t=+e.target.value*decaySeries[key].elements[0].halfLife;draw();};
 $('[data-legacy-csv]').onclick=()=>save('decay-curves.csv','time_years,'+decaySeries[key].elements.map(a=>a.symbol+'-'+(a.Z+a.N)).join(',')+'\n'+history.map(q=>[q.t,...q.amounts].join(',')).join('\n'));
 observePlayback(h,v=>{if(!v)stop();});document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});draw();
 return {dispose:stop,redraw:draw};
}
