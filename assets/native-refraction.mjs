// Independent geometric equations and fresh SVG typography for five originals.
import {refractionSpecs} from './refraction-specs.mjs';
import {patchMarkup,frameBatch} from './render-utils.mjs';
export {refractionSpecs};
const ai=55*Math.PI/180,at=30*Math.PI/180,si=Math.sin(ai),ci=Math.cos(ai),st=Math.sin(at),ct=Math.cos(at);
const add=(a,b)=>a.map((v,i)=>v+b[i]),mul=(a,b)=>a.map(v=>v*b),dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0);
export const identity=()=>[[1,0,0],[0,1,0],[0,0,1]];
export const matrixVector=(a,p)=>a.map(r=>dot(r,p));
export const matrixProduct=(a,b)=>a.map(r=>b[0].map((_,i)=>r.reduce((s,v,k)=>s+v*b[k][i],0)));
export function cameraRotation(v,m=identity()){
 const norm=Math.hypot(...v);if(norm<=.0001)return m.map(r=>r.slice());
 const [x,y,z]=mul(v,1/norm),a=norm/500,c=Math.cos(a),s=Math.sin(a),d=1-c;
 return matrixProduct([[d*x*x+c,d*x*y-s*z,d*x*z+s*y],[d*y*x+s*z,d*y*y+c,d*y*z-s*x],[d*z*x-s*y,d*z*y+s*x,d*z*z+c]],m);
}
export function projectPoint(p,m){const [x,y,z]=matrixVector(m,p),w=1-z/1000;return [x/w,-y/w];}
const directions=[[si,-ci,0],[si,ci,0],[st,-ct,0]],bases=[[-si,ci,0],[si,ci,0],[st,-ct,0]],normal=[0,1,0];
export function refractionFields(type,length,time=0){
 const p=type.startsWith('p-'),animated=type.endsWith('-wave');
 const scalars=animated?[50*Math.sin(-length/15-time/10),30*Math.sin(length/15-time/10),30*Math.sin(length/10-time/10)]:[50,50,50];
 const EBp=animated?[[[-ci,-si,0],[0,0,-1]],[[ci,-si,0],[0,0,-1]],[[-ct,-st,0],[0,0,-1]]]:[[[ci,si,0],[0,0,1]],[[-ci,si,0],[0,0,1]],[[ct,st,0],[0,0,1]]];
 const EBs=[[[0,0,1],[-ci,-si,0]],[[0,0,1],[ci,-si,0]],[[0,0,1],[-ct,-st,0]]];
 return scalars.map((amplitude,i)=>({branch:i,base:mul(bases[i],length),E:mul((p?EBp:EBs)[i][0],amplitude),B:mul((p?EBp:EBs)[i][1],amplitude),k:directions[i].slice(),amplitude}));
}
export function refractionSegments(s,time=0){
 if(s.animated){let segments=[];for(let j=0;j<25;j++){const f=refractionFields(s.type,j*4,time); // Source ordering: Bi,Br,Ei,Er,Bt,Et (p), Ei,Er,Bi,Br,Et,Bt (s).
  for(const [branch,key] of [[0,s.type==='p-wave'?'B':'E'],[1,s.type==='p-wave'?'B':'E'],[0,s.type==='p-wave'?'E':'B'],[1,s.type==='p-wave'?'E':'B'],[2,s.type==='p-wave'?'B':'E'],[2,s.type==='p-wave'?'E':'B']])segments.push({branch,key,points:[f[branch].base,add(f[branch].base,f[branch][key])]});
 }return segments;}
 if(s.type==='wavefronts')return [{key:'normal',points:[[0,-100,0],[0,0,0]]},{key:'normal',points:[[0,0,0],[0,100,0]]},{key:'normal-arrow',points:[[0,0,0],[0,30,0]]},{key:'k',branch:0,points:[mul(bases[0],50),add(mul(bases[0],50),mul(directions[0],30))]},{key:'k',branch:1,points:[mul(bases[1],80),add(mul(bases[1],80),mul(directions[1],30))]},{key:'k',branch:2,points:[mul(bases[2],60),add(mul(bases[2],60),mul(directions[2],40))]}];
 const fields=refractionFields(s.type,50);
 return [{key:'normal',points:[[0,-100,0],[0,0,0]]},{key:'normal',points:[[0,0,0],[0,100,0]]},...fields.flatMap(f=>[{key:'B',branch:f.branch,points:[f.base,add(f.base,f.B)]},{key:'E',branch:f.branch,points:[f.base,add(f.base,f.E)]},{key:'k',branch:f.branch,points:[f.base,add(f.base,mul(f.k,100/3))]}])];
}
export function wavefrontPlanes(){return bases.flatMap((b,i)=>(i===2?[40,60]:[50,80]).map(len=>{const center=mul(b,len),tangent=i===0?[ci,si,0]:i===1?[ci,-si,0]:[ct,st,0];return [add(center,add(mul(tangent,30),[0,0,-30])),add(center,add(mul(tangent,30),[0,0,30])),add(center,add(mul(tangent,-30),[0,0,30])),add(center,add(mul(tangent,-30),[0,0,-30]))];}));}
const fmt=n=>Number(n.toFixed(5)).toString(),text=(x,y,t,extra='')=>`<text x="${fmt(x)}" y="${fmt(y)}" ${extra}>${t}</text>`,path=p=>p.map((v,i)=>(i?'L':'M')+v.map(fmt).join(',')).join(' '),color=k=>k==='E'?0:k==='B'?1:2;
function init(h){
 const kind=h.dataset.flashNative,s=refractionSpecs[kind];let matrix=cameraRotation(s.camera),time=0,probe=48,playing=false,last=0,carry=0,raf=0,visible=false,drag=null,graphDirty=true,lastFrame=-1;
 h.innerHTML=`<div class="native-toolbar refraction-toolbar">${s.animated?'<button class="primary" data-refraction-play aria-pressed="false">재생</button>':''}<button data-refraction-reset>초기화</button><button data-refraction-camera>기본 시점</button><button data-refraction-front>입사면 정면</button><button data-refraction-side>옆면</button>${s.animated?'<button data-refraction-csv>그래프 데이터 CSV</button>':''}<label><input type="checkbox" data-refraction-plane checked>입사면 표시</label>${s.type!=='wavefronts'?'<label><input type="checkbox" data-refraction-B checked>자기장 표시</label>':''}</div><p class="figure-note refraction-help">화면을 끌어 시점을 바꿀 수 있습니다. 화면 선택 후 화살표 키로 회전하고 Home 키로 기본 시점을 복구합니다.</p><div class="remaster-scene refraction-scene"><svg data-refraction-scene viewBox="0 0 720 520" tabindex="0" role="img" aria-label="${s.title} · 드래그 또는 화살표 키로 회전"><g data-refraction-surfaces></g><g data-refraction-vectors></g><g data-refraction-labels></g></svg></div>${s.animated?`<div class="timeline-progress"><label>원본 계산 단계 n<output data-refraction-step-label></output><input data-refraction-step type="range" min="0" max="${s.timeEnd}" step="1" value="0" aria-label="원본 계산 단계"></label></div><div class="native-controls"><label>관측 거리 · 원본 눈금<output data-refraction-probe-label></output><input data-refraction-probe type="range" min="0" max="96" step="4" value="48" aria-label="관측 거리"></label></div>`:''}<div class="legend optics-legend remaster-legend refraction-legend">${s.type!=='wavefronts'?'<span><i class="optics-series-0"></i>전기장 E</span><span data-refraction-B-legend><i class="optics-series-1"></i>자기장 B</span>':''}<span><i class="optics-series-2"></i>진행 방향 k</span></div>${s.animated?'<div class="native-graphs refraction-graph"><svg viewBox="0 0 720 240" role="img" aria-label="관측점의 입사·반사·굴절파 시간 그래프"><path d="M55 20V190H690" class="native-axis"/><g data-refraction-graph></g><g data-refraction-cursor></g><g data-refraction-axis-labels></g></svg></div><div class="legend optics-legend remaster-legend refraction-legend"><span><i class="optics-series-0"></i>입사파</span><span><i class="optics-series-1"></i>반사파</span><span><i class="optics-series-2"></i>굴절파</span></div>':''}<dl class="book-readouts" data-refraction-readouts></dl><p class="editor-note">원본의 입사각 55°·굴절각 30°를 유지합니다. ${s.type==='wavefronts'?'파면과 진행 방향을 새 SVG로 구성했습니다.':s.animated?'전기장·자기장 방향과 파형을 유지하고 관측점 시간 그래프와 CSV를 추가했습니다. 진폭 50·30은 원본 시연 눈금이며 프레넬 반사·투과 계수를 뜻하지 않습니다.':'전기장·자기장·진행 방향의 부호 규약을 새 SVG로 구성했습니다. 벡터 길이는 원본 시연 눈금입니다.'}</p>`;
 const get=q=>h.querySelector(q),svg=get('[data-refraction-scene]'),surfaces=get('[data-refraction-surfaces]'),vectors=get('[data-refraction-vectors]'),labels=get('[data-refraction-labels]'),P=p=>projectPoint(p,matrix).map((v,i)=>v*1.2+(i===0?360:260));
 function arrow(a,b,c){const v=[b[0]-a[0],b[1]-a[1]],n=Math.hypot(...v);if(n<1e-7)return '';const [x,y]=v.map(v=>v/n);return `<path class="native-curve optics-series-${c}" d="${path([a,b])}M${fmt(b[0]-8*x-3*y)},${fmt(b[1]-8*y+3*x)}L${fmt(b[0])},${fmt(b[1])}L${fmt(b[0]-8*x+3*y)},${fmt(b[1]-8*y-3*x)}"/>`;}
 function draw(){
  let polys=[{points:[[100,0,100],[100,0,-100],[-100,0,-100],[-100,0,100]],key:'interface'}];if(get('[data-refraction-plane]').checked)polys.push({points:[[-100,-100,0],[-100,100,0],[100,100,0],[100,-100,0]],key:'plane'});
  if(s.type==='wavefronts')polys.push(...wavefrontPlanes().map(points=>({points,key:'wavefront'})));
  // Painter order is based on rotated mean depth; no exported display-list layers.
  polys.sort((a,b)=>a.points.reduce((v,p)=>v+matrixVector(matrix,p)[2],0)/a.points.length-b.points.reduce((v,p)=>v+matrixVector(matrix,p)[2],0)/b.points.length);
  patchMarkup(surfaces,polys.map(q=>`<path d="${path(q.points.map(P))}Z" class="refraction-${q.key}"/>`).join(''));
  const segments=refractionSegments(s,time),hasB=get('[data-refraction-B]')?.checked??false;let body='';
  if(s.animated){for(const key of ['E','B'])if(key!=='B'||hasB)for(let branch=0;branch<3;branch++){const points=segments.filter(v=>v.key===key&&v.branch===branch).map(v=>v.points.map(P));body+=`<path class="native-curve optics-series-${color(key)}" d="${points.map(path).join(' ')}"/>`;}
   // Connect field endpoints into curves, reusing the same 25 source samples.
   for(const key of ['E','B'])if(key!=='B'||hasB)for(let branch=0;branch<3;branch++){const points=segments.filter(v=>v.key===key&&v.branch===branch).map(v=>P(v.points[1]));body+=`<path class="native-curve optics-series-${color(key)}" d="${path(points)}"/>`;}
   for(const f of refractionFields(s.type,probe,time)){const a=P(f.base);body+=arrow(a,P(add(f.base,f.E)),0);if(hasB)body+=arrow(a,P(add(f.base,f.B)),1);body+=`<circle cx="${fmt(a[0])}" cy="${fmt(a[1])}" r="3" fill="var(--plot-action)"/>`;}
  }else for(const v of segments){if(v.key==='B'&&!hasB)continue;body+=v.key==='normal'?`<path d="${path(v.points.map(P))}" class="native-axis"/>`:arrow(...v.points.map(P),color(v.key));}
  for(let i=0;i<3;i++){const a=mul(bases[i],85),b=add(a,mul(directions[i],20));body+=arrow(P(a),P(b),2);}
  patchMarkup(vectors,body);let t=text(20,35,s.type==='wavefronts'?'파면 · 법선 · 진행 방향':s.type.startsWith('p-')?'p 편광 · E는 입사면 안':'s 편광 · E는 입사면에 수직');
  t+=text(20,490,'입사 55° · 반사 55° · 굴절 30°')+text(20,515,'경계면과 입사면 · 시점 회전');
  for(const [i,name] of ['입사파','반사파','굴절파'].entries()){const a=P(mul(bases[i],115));t+=text(a[0]+4,a[1]-7,name);}
  patchMarkup(labels,t);
  get('[data-refraction-B-legend]')?.toggleAttribute('hidden',!hasB);
  if(s.animated){const windowStart=t=>Math.min(Math.floor(t/200)*200,s.timeEnd-200),start=windowStart(time),X=x=>55+635*(x-start)/200,Y=y=>105-75*y/50;
   if(graphDirty||windowStart(time)!==windowStart(lastFrame)){patchMarkup(get('[data-refraction-graph]'),[0,1,2].map(i=>`<path class="native-curve optics-series-${i}" d="${path(Array.from({length:201},(_,j)=>[X(start+j),Y(refractionFields(s.type,probe,start+j)[i].amplitude)]))}"/>`).join(''));patchMarkup(get('[data-refraction-axis-labels]'),[0,100,200].map(j=>text(X(start+j),213,String(start+j),'text-anchor="'+(j===0?'start':j===200?'end':'middle')+'"')).join('')+text(55,238,'원본 계산 단계 n')+text(55,15,'장 파형값 · 원본 눈금')+text(45,30,'50','text-anchor="end"')+text(45,110,'0','text-anchor="end"')+text(45,185,'−50','text-anchor="end"'));graphDirty=false;}
   const selected=refractionFields(s.type,probe,time);patchMarkup(get('[data-refraction-cursor]'),`<path d="M${X(time)} 20V190" class="native-cursor"/>`+selected.map((f,i)=>`<circle cx="${fmt(X(time))}" cy="${fmt(Y(f.amplitude))}" r="4" class="optics-dot optics-series-${i}"/>`).join(''));
   get('[data-refraction-step]').value=time;get('[data-refraction-step-label]').textContent=time;get('[data-refraction-probe-label]').textContent=probe;
  }
  const values=refractionFields(s.type,probe,time);patchMarkup(get('[data-refraction-readouts]'),[['입사각 / °',55],['굴절각 / °',30],...(s.animated?[['입사파 관측값 · 원본 눈금',values[0].amplitude],['반사파 관측값 · 원본 눈금',values[1].amplitude],['굴절파 관측값 · 원본 눈금',values[2].amplitude]]:[])].map(([k,v])=>`<div><dt>${k}</dt><dd>${fmt(v)}</dd></div>`).join(''));
  Object.assign(h.dataset,{nativeReady:'true',refractionTime:String(time),refractionProbe:String(probe),refractionCamera:JSON.stringify(matrix),refractionValues:JSON.stringify(values)});lastFrame=time;
 }
 function pause(){playing=false;cancelAnimationFrame(raf);last=0;carry=0;if(s.animated){get('[data-refraction-play]').textContent='재생';get('[data-refraction-play]').setAttribute('aria-pressed','false');}}
 function tick(now){if(!playing)return;if(last)carry+=Math.min(.2,(now-last)/1000)*s.rate;last=now;if(carry>=1){const n=Math.floor(carry);carry-=n;time+=n;if(time>s.timeEnd){time=0;graphDirty=true;}draw();}raf=requestAnimationFrame(tick);}
 const batch=frameBatch(draw);
 get('[data-refraction-play]')?.addEventListener('click',()=>{batch.flush();if(playing)pause();else if(visible){playing=true;last=0;get('[data-refraction-play]').textContent='일시정지';get('[data-refraction-play]').setAttribute('aria-pressed','true');raf=requestAnimationFrame(tick);}});
 get('[data-refraction-reset]').addEventListener('click',()=>{pause();batch.flush();matrix=cameraRotation(s.camera);time=0;probe=48;if(s.animated)get('[data-refraction-probe]').value=probe;get('[data-refraction-plane]').checked=true;if(get('[data-refraction-B]'))get('[data-refraction-B]').checked=true;graphDirty=true;draw();});
 for(const [q,value] of [['camera',()=>cameraRotation(s.camera)],['front',identity],['side',()=>cameraRotation([0,-Math.PI*250,0])]])get('[data-refraction-'+q+']').addEventListener('click',()=>{matrix=value();draw();});
 for(const e of h.querySelectorAll('input[type=checkbox]'))e.addEventListener('change',draw);
 get('[data-refraction-step]')?.addEventListener('input',e=>{pause();time=+e.target.value;draw();});get('[data-refraction-probe]')?.addEventListener('input',e=>{probe=+e.target.value;graphDirty=true;batch.schedule();});
 svg.addEventListener('pointerdown',e=>{if(e.button!==0)return;svg.focus({preventScroll:true});drag={id:e.pointerId,x:e.clientX,y:e.clientY};svg.setPointerCapture(e.pointerId);});
 svg.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.x=e.clientX;drag.y=e.clientY;matrix=cameraRotation([dy*2,dx*2,0],matrix);batch.schedule();});
 const release=e=>{if(!drag||drag.id!==e.pointerId)return;drag=null;batch.flush();};svg.addEventListener('pointerup',release);svg.addEventListener('pointercancel',release);svg.addEventListener('lostpointercapture',release);
 svg.addEventListener('keydown',e=>{const keys={ArrowUp:[-30,0,0],ArrowDown:[30,0,0],ArrowLeft:[0,-30,0],ArrowRight:[0,30,0]};if(keys[e.key]){e.preventDefault();matrix=cameraRotation(keys[e.key],matrix);draw();}else if(e.key==='Home'){e.preventDefault();matrix=cameraRotation(s.camera);draw();}});
 get('[data-refraction-csv]')?.addEventListener('click',()=>{batch.flush();const rows=Array.from({length:s.timeEnd+1},(_,time)=>[time,...refractionFields(s.type,probe,time).map(f=>f.amplitude)].join(',')),url=URL.createObjectURL(new Blob(['# '+JSON.stringify({source:s.originalSource,probe,units:'original dimensionless drawing and frame scales'})+'\nframe,incident_value,reflected_value,transmitted_value\n'+rows.join('\n')],{type:'text/csv;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=s.id+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(!visible)pause();}).observe(h);document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});draw();
}
if(typeof document!=='undefined')for(const h of document.querySelectorAll('[data-flash-native]'))if(refractionSpecs[h.dataset.flashNative])init(h);
