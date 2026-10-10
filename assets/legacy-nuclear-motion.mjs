import {coulombStep,circularElectron,seededRandom,fissionHistory} from './legacy-nuclear-motion-physics.mjs';
import {observePlayback,patchMarkup} from './render-utils.mjs';
const blue='#0069B4',gray='#43525A',pale='#6B98BD',f=x=>Number(x.toFixed(4));
const txt=(x,y,t)=>`<text x="${x}" y="${y}" font-size="14">${t}</text>`;
const circle=(x,y,r,c=blue)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const save=(id,rows)=>{const a=document.createElement('a'),u=URL.createObjectURL(new Blob(['\uFEFF'+rows],{type:'text/csv;charset=utf-8'}));a.href=u;a.download=id+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};
export function mountLegacyNuclearMotion(h,spec){
 const mode=spec.kind;let n=0,playing=false,last=0,carry=0,raf=0,history=[],particles=[],paths=[],electrons=[],r=seededRandom(2026);
 h.innerHTML=`<div class="native-toolbar"><button class="primary" data-play aria-pressed="false">재생</button><button data-reset>초기화</button><button data-csv>데이터 CSV</button><label><input type="checkbox" data-trails checked> 궤적 표시</label>${mode==='rutherfordScatter'||mode==='fission'?'<label><input type="checkbox" data-fast> 빠른 입자</label>':''}${mode==='rutherfordCapture'?'<label><input type="checkbox" data-radiation> 전자기파 방출 · 감쇠</label>':''}</div><p class="legacy-readout" data-info></p><div class="remaster-scene"><svg viewBox="0 0 720 640" role="img" aria-label="${spec.title}"><g></g></svg></div><div class="native-controls"><label>계산 단계 n<output data-n>0</output><input type="range" data-frame min="0" max="${mode==='fission'?170:300}" step="1" value="0"></label></div><p class="editor-note">${mode==='rutherfordOrbits'?'원본처럼 화면을 누르면 전자가 추가됩니다. 오른쪽 버튼 또는 Shift를 누른 채 선택하면 회전 방향이 바뀝니다.':mode==='fission'?'원본은 느린 중성자에서 34단계에 들뜸, 61단계에 분열합니다. 빠른 중성자는 19단계에서 산란하며 분열하지 않습니다. 이 그림은 핵종·에너지의 정량 모형이 아닌 원본의 개념 애니메이션입니다.':'원본 Java의 쿨롱 힘과 갱신 순서를 유지합니다. 무작위 초기 위치는 재현 가능한 예시로 고정했고, 궤적과 그래프는 같은 계산 상태를 사용합니다.'}</p>`;
 const $=q=>h.querySelector(q),fast=()=>!!$('[data-fast]')?.checked,radiating=()=>!!$('[data-radiation]')?.checked;
 const point=p=>({x:360+p.x*1.1,y:260+p.y*1.1});
 function init(){n=0;history=[];particles=[];paths=[];electrons=[];r=seededRandom(2026);
  if(mode==='fission'){history=fissionHistory(fast());$('[data-frame]').max=history.length-1;}
  else if(mode==='rutherfordOrbits'){for(let i=0;i<15;i++){const a=i*2.39996,rad=25+i*9;electrons.push({x:rad*Math.cos(a),y:rad*Math.sin(a),clockwise:i%2===0,t0:0});}}
  else{const count=mode==='rutherfordScatter'?6:8;for(let i=0;i<count;i++){if(mode==='rutherfordScatter')particles.push({x:-220-i*5,y:-165+i*60,vx:fast()?20:10,vy:0});else{const a=i*2.39996,rad=70+i*16,v=150/Math.sqrt(rad);particles.push({x:rad*Math.cos(a),y:rad*Math.sin(a),vx:v*Math.sin(a),vy:-v*Math.cos(a)});}paths.push([{...particles.at(-1)}]);}history.push(particles.map(p=>({...p})));}
 }
 function stop(){playing=false;cancelAnimationFrame(raf);last=carry=0;$('[data-play]').textContent='재생';$('[data-play]').setAttribute('aria-pressed','false');}
 function step(){n++;
  if(mode==='rutherfordScatter'||mode==='rutherfordCapture'){
   particles=particles.map((p,i)=>{if(mode==='rutherfordScatter'&&(p.x>250||p.x<-250||Math.abs(p.y)>230)){paths[i]=[];p={x:-220,y:-175+350*r(),vx:fast()?20:10,vy:0};}const next=coulombStep(p,{repulsive:mode==='rutherfordScatter',radiating:radiating()});paths[i].push({...next});if(paths[i].length>200)paths[i].shift();return next;});history.push(particles.map(p=>({...p})));
  }
 }
 function draw(){let s='',state={mode,n,fast:fast(),radiating:radiating()};
  if(mode==='fission'){
   const v=history[n],project=p=>({x:140+p.x*1.1,y:35+p.y*1.1});
   function nucleus(p,rad,aspect=1){const q=project(p);let a=`<ellipse cx="${q.x}" cy="${q.y}" rx="${rad/aspect}" ry="${rad*aspect}" fill="${pale}" fill-opacity=".18" stroke="${gray}"/>`;for(let i=0;i<18;i++){const angle=i*2.39996,d=rad*.8*Math.sqrt(i/18);a+=circle(q.x+d*Math.cos(angle)/aspect,q.y+d*Math.sin(angle)*aspect,4,i%2?gray:blue);}return a;}
   s+=v.phase==='fragments'?nucleus(v.left,31)+nucleus(v.right,29):nucleus({x:200,y:200},42,v.aspect);
   for(const p of v.neutrons){const q=project(p);s+=circle(q.x,q.y,6,gray);}
   s+=txt(55,465,{scattering:'빠른 중성자 · 산란',incident:'중성자 입사',excited:'들뜬 핵 · 변형',fragments:'두 핵조각과 중성자 방출'}[v.phase]);
   s+='<path d="M55 500V600H680" fill="none" stroke="'+gray+'"/>';
   const ys=history.map(q=>q.neutrons[0]?.y??200);s+=`<path d="${ys.map((y,i)=>(i?'L':'M')+(55+625*i/(history.length-1))+','+(600-Math.min(100,Math.max(0,y/4)))).join(' ')}" fill="none" stroke="${blue}" stroke-opacity=".65"/>`+txt(55,628,'중성자 y 위치 / 같은 계산 단계');
   state={...state,phase:v.phase,aspect:v.aspect,neutrons:v.neutrons,left:v.left,right:v.right};
  }else{
   s+=circle(360,260,11,gray)+txt(350,265,'+');
   const current=mode==='rutherfordOrbits'?electrons.filter(e=>e.t0<=n).map(e=>circularElectron(e,n)):particles;
   current.forEach((p,i)=>{const q=point(p),c=i%2?gray:blue;
    if($('[data-trails]').checked){if(mode==='rutherfordOrbits')s+=`<circle cx="360" cy="260" r="${p.r*1.1}" fill="none" stroke="${gray}" stroke-opacity=".35"/>`;else s+=`<path d="${paths[i].map((p,j)=>{const q=point(p);return(j?'L':'M')+f(q.x)+','+f(q.y);}).join(' ')}" fill="none" stroke="${c}" stroke-opacity=".65"/>`;}
    s+=circle(q.x,q.y,5,c);
   });
   s+=txt(35,510,'입자 1 위치 · 계산 단계와 같은 상태');
   s+='<path d="M55 525V602H680" fill="none" stroke="'+gray+'"/>';
   const values=mode==='rutherfordOrbits'?Array.from({length:301},(_,i)=>circularElectron(electrons[0],i).x):history.map(a=>a[0].x);
   s+=`<path d="${values.map((v,i)=>(i?'L':'M')+(55+625*i/300)+','+(565-v*.15)).join(' ')}" fill="none" stroke="${blue}" stroke-width="2" stroke-opacity=".65"/>`;
   state.particles=current.map(p=>({x:f(p.x),y:f(p.y),vx:p.vx==null?null:f(p.vx),vy:p.vy==null?null:f(p.vy),captured:!!p.captured}));state.electronCount=electrons.length;
  }
  patchMarkup($('svg g'),s);$('[data-frame]').value=n;$('[data-n]').textContent=n;$('[data-info]').textContent=`계산 단계 ${n} · ${mode==='rutherfordOrbits'?electrons.length+'개 전자':mode==='fission'?state.phase:particles.filter(p=>p.captured).length+'개 포획'}`;h.dataset.legacyState=JSON.stringify(state);h.dataset.nativeReady='true';
 }
 function tick(now){if(!playing)return;carry+=last?Math.min(.12,(now-last)/1000):0;last=now;const dt=mode==='rutherfordOrbits'?.05:.12;let changed=false;while(carry>=dt){if(n>=+$('[data-frame]').max){stop();break;}step();carry-=dt;changed=true;}if(changed)draw();if(playing)raf=requestAnimationFrame(tick);}
 $('[data-play]').onclick=()=>{if(playing)stop();else{if(n>=+$('[data-frame]').max)init();playing=true;last=carry=0;$('[data-play]').textContent='일시정지';$('[data-play]').setAttribute('aria-pressed','true');raf=requestAnimationFrame(tick);}};
 $('[data-reset]').onclick=()=>{stop();init();draw();};for(const q of ['[data-fast]','[data-radiation]'])if($(q))$(q).onchange=()=>{stop();init();draw();};$('[data-trails]').onchange=draw;
 $('[data-frame]').oninput=e=>{stop();const target=+e.target.value;if(mode==='rutherfordOrbits')n=target;else{init();while(n<target)step();}draw();};
 if(mode==='rutherfordOrbits'){$('svg').oncontextmenu=e=>e.preventDefault();$('svg').onpointerdown=e=>{const box=$('svg').getBoundingClientRect(),x=((e.clientX-box.left)/box.width*720-360)/1.1,y=((e.clientY-box.top)/box.height*640-260)/1.1;if(Math.hypot(x,y)<197&&Math.hypot(x,y)>3){electrons.push({x,y,clockwise:e.button===2||e.shiftKey,t0:n});draw();}};}
 $('[data-csv]').onclick=()=>{const rows=mode==='fission'?'n,phase,aspect\n'+history.map(q=>[q.n,q.phase,q.aspect].join(',')).join('\n'):mode==='rutherfordOrbits'?'n,x,y\n'+Array.from({length:301},(_,i)=>{const p=circularElectron(electrons[0],i);return[i,p.x,p.y].join(',');}).join('\n'):'n,x,y,vx,vy\n'+history.map((q,i)=>[i,q[0].x,q[0].y,q[0].vx,q[0].vy].join(',')).join('\n');save(spec.id,rows);};
 observePlayback(h,v=>{if(!v)stop();});document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});init();draw();return {redraw:draw,dispose:stop};
}
