import {selectedPoints,apparatusModels,apparatusDiagram,flowDiagram} from './book-coupling.mjs';
import {patchMarkup} from './render-utils.mjs';
import {motionModels,probeModels,motionState,probeHistory} from './book-motion.mjs';
import {models,PI} from './book-models.mjs';
import {notation} from './math-labels.mjs';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const mathLabel=s=>esc(s).replace(/kBT|kB/g,k=>notation[k]);
const colors=['var(--plot-action)','var(--plot-secondary)','var(--plot-muted)'];
const fmt=n=>typeof n==='number'?(Number.isFinite(n)?(Math.abs(n)>0&&(Math.abs(n)<.0001||Math.abs(n)>1e7)?n.toExponential(4):Number(n.toPrecision(5)).toLocaleString('ko-KR',{maximumFractionDigits:7})):'계산 범위 밖'):esc(n);
const text=(x,y,s,attrs='')=>`<text x="${x}" y="${y}" ${attrs}>${esc(s)}</text>`;
const line=(x1,y1,x2,y2,color='var(--plot-muted)',width=1,more='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${more}/>`;
const circle=(x,y,r,color=colors[0])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
function axes(r){
 const X=x=>64+(x-r.xmin)/(r.xmax-r.xmin)*640,Y=y=>268-(y-r.ymin)/(r.ymax-r.ymin)*224;
 let body=text(64,20,r.ylabel)+text(384,320,r.xlabel,'text-anchor="middle"');
 for(let i=0;i<=4;i++){
  const y=r.ymin+(r.ymax-r.ymin)*i/4;body+=line(64,Y(y),704,Y(y),'var(--plot-line)')+text(55,Y(y)+5,fmt(y),'text-anchor="end"');
  const x=r.xmin+(r.xmax-r.xmin)*i/4;body+=line(X(x),44,X(x),268,'var(--plot-line)')+text(X(x),292,fmt(x),'text-anchor="middle"');
 }
 body+=line(64,44,64,268)+line(64,268,704,268);return {body,X,Y};
}
function curvePath(c,r,X,Y){
 let d='',lastY=null;
 for(let i=0;i<=240;i++){
  const x=r.xmin+(r.xmax-r.xmin)*i/240,y=c.fn(x);
  if(!Number.isFinite(y)){lastY=null;continue;}
  if(lastY!==null&&Math.abs(y-lastY)>(r.ymax-r.ymin)*2)lastY=null;
  const yy=Math.max(r.ymin-(r.ymax-r.ymin),Math.min(r.ymax+(r.ymax-r.ymin),y));
  d+=(lastY===null?'M':'L')+X(x)+','+Y(yy);lastY=y;
 }
 return d;
}
function chart(r,time,animate,probe=null){
 const {body,X,Y}=axes(r);let paths='';
 r.curves.forEach((c,j)=>paths+=`<path class="graph-curve" d="${curvePath(c,r,X,Y)}" fill="none" stroke="${colors[j%3]}" stroke-width="2.5" ${j===1?'stroke-dasharray="8 5"':j===2?'stroke-dasharray="2 4"':''}/>`);
 if(animate&&r.xlabel.startsWith('시간'))for(const [i,c] of r.curves.entries())paths+=`<circle data-chart-time-dot="${i}" r="4" fill="${colors[i%3]}"/>`;
 if(probe!==null)paths+=line(X(probe),44,X(probe),268,'var(--plot-muted)',1,'stroke-dasharray="4 4"')+`<circle data-chart-probe-dot r="7" fill="${colors[1]}"/>`;
 return body+`<defs><clipPath id="book-plot-clip"><rect x="64" y="44" width="640" height="224"/></clipPath></defs><g clip-path="url(#book-plot-clip)">${paths}</g>`;
}
function rayDiagram(r){
 const x=380,y=168,L=130,a=r.angle*PI/180;
 let b=`<rect x="38" y="168" width="664" height="126" fill="var(--ui-surface)"/>`+line(38,y,702,y)+line(x,40,x,290,'var(--plot-muted)',1,'stroke-dasharray="5 4"');
 b+=line(x-L*Math.sin(a),y-L*Math.cos(a),x,y,colors[0],3)+line(x,y,x+L*Math.sin(a),y-L*Math.cos(a),colors[1],3);
 if(r.t!==null){const t=r.t*PI/180;b+=line(x,y,x+L*Math.sin(t),y+L*Math.cos(t),colors[2],3);}
 return b+text(64,28,'입사 매질 n₁='+r.n1)+text(64,312,'출사 매질 n₂='+r.n2)+text(390,65,'법선');
}
function sceneDiagram(r){
 const bounds={xmin:r.xmin??-5,xmax:r.xmax??5,ymin:r.ymin??-3,ymax:r.ymax??3};
 const scale=Math.min(640/(bounds.xmax-bounds.xmin),224/(bounds.ymax-bounds.ymin));
 const X=x=>384+(x-(bounds.xmax+bounds.xmin)/2)*scale,Y=y=>156-(y-(bounds.ymax+bounds.ymin)/2)*scale;
 let body=line(64,Y(0),704,Y(0),'var(--plot-line)')+line(X(0),44,X(0),268,'var(--plot-line)');
 if(r.trace)body+=`<polyline points="${r.points.filter(p=>p.r<3).map(p=>X(p.x)+','+Y(p.y)).join(' ')}" fill="none" stroke="${colors[0]}" stroke-width="2"/>`;
 r.points.filter(p=>!r.trace||p.r>=3).forEach((p,i)=>{const x=X(p.x),y=Y(p.y);body+=p.shape==='diamond'?`<path d="M${x},${y-9}L${x+9},${y}L${x},${y+9}L${x-9},${y}Z" fill="${colors[1]}"/>`:circle(x,y,p.r,colors[i%3]);if(p.label)body+=text(x,y+30,p.label,'text-anchor="middle"');});
 return body;
}
function special(r){
 if(r.rays)return rayDiagram(r.rays);
 if(r.points)return sceneDiagram(r);
 if(r.heatmap){let b='';r.heatmap.forEach((row,y)=>row.forEach((v,x)=>b+=`<rect x="${190+x*15}" y="${25+y*15}" width="15" height="15" fill="hsl(202 70% ${96-v*65}%)"/>`));return b+text(195,316,'전위: 옅음 0 V → 짙음 1 V');}
 if(r.field){let b='';for(let y=-2;y<=2;y+=.4)for(let x=-3;x<=3;x+=.4){let ex=0,ey=0;for(const [qx,q] of [[-1,r.field.q1],[1,r.field.q2]]){const dx=x-qx,rr=Math.hypot(dx,y);if(rr<.3)continue;ex+=q*dx/rr**3;ey+=q*y/rr**3;}const mag=Math.hypot(ex,ey);if(mag<1e-8)continue;const xx=380+x*80,yy=160-y*50;b+=line(xx,yy,xx+ex/mag*14,yy-ey/mag*14,colors[0],1.5,'marker-end="url(#book-arrow)"');}return `<defs><marker id="book-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${colors[0]}"/></marker></defs>`+b+circle(300,160,9,colors[0])+circle(460,160,9,colors[1])+text(300,190,'q₁','text-anchor="middle"')+text(460,190,'q₂','text-anchor="middle"');}
 if(r.colour)return `<rect x="130" y="45" width="480" height="240" rx="4" fill="rgb(${r.colour.join(',')})"/>`;
 if(r.illusion!==undefined)return `<rect x="80" y="50" width="280" height="220" fill="rgb(${r.illusion},${r.illusion},${r.illusion})"/><rect x="380" y="50" width="280" height="220" fill="rgb(240,240,240)"/><rect x="180" y="115" width="80" height="80" fill="rgb(128,128,128)"/><rect x="480" y="115" width="80" height="80" fill="rgb(128,128,128)"/>`;
 if(r.moire){let b='';for(let x=-400;x<1100;x+=14)b+=line(x,10,x,310,colors[0],3);let c='';for(let x=-400;x<1100;x+=14)c+=line(x,-400,x,700,colors[1],3);return `<defs><clipPath id="moire-clip"><rect x="40" y="20" width="660" height="280"/></clipPath></defs><g clip-path="url(#moire-clip)">${b}<g transform="rotate(${r.moire} 370 160)">${c}</g></g>`;}
 if(r.lens){const {f,s,image}=r.lens,scale=3,x=380,y=195;let b=line(30,y,710,y,'var(--plot-line)')+line(x,50,x,280,colors[1],4)+line(x-s*scale,y,x-s*scale,y-40,colors[0],4);if(f!==0){b+=circle(x+f*scale,y,3)+circle(x-f*scale,y,3)+text(x+f*scale,y+23,'F','text-anchor="middle"');b+=line(x-s*scale,y-40,x,y-40,colors[0],2);const to=710;b+=line(x,y-40,to,y-40+40*(to-x)/(f*scale),colors[0],2);if(image!==null&&Math.abs(image)<100){const ix=x+image*scale,ih=-image/s*40;b+=line(ix,y,ix,y-ih,colors[2],4)+text(ix,Math.max(25,Math.min(285,y-ih-12)),'상','text-anchor="middle"');}}return b+text(x-s*scale,130,'물체','text-anchor="middle"')+text(x,32,'얇은 렌즈','text-anchor="middle"');}
 return '';
}
for(const host of document.querySelectorAll('[data-book-lab]')){
 const model=models[host.dataset.bookLab];if(!model)throw Error('Unknown supplementary model: '+host.dataset.bookLab);
 const key=host.dataset.bookLab,hasMotion=motionModels.has(key),hasProbe=probeModels.has(key),hasApparatus=apparatusModels.has(key);
 const state=Object.fromEntries(model.controls.map(c=>[c.key,c.value]));
 const initial=model.calculate(state,0),timeGraph=model.animate&&initial.curves&&initial.xlabel.startsWith('시간'),end=timeGraph?initial.xmax:key==='thermo'?3:20;let probe=hasProbe?(initial.xmin+initial.xmax)/2:null;

 host.innerHTML=`<h4>${esc(model.title)}</h4>${hasApparatus?'<div data-book-apparatus style="overflow-x:auto;min-width:0" aria-label="그래프와 입력을 공유하는 물리 모형"></div>':''}${hasMotion?'<div data-book-motion aria-label="그래프와 연결된 운동 화면"></div>':''}<div data-book-view tabindex="0" aria-label="탐구 그림"></div><div class="legend" data-book-legend></div><div class="controls">${model.controls.map(c=>`<label class="control"><span class="control-head"><span>${esc(c.label)}</span><output data-for="${c.key}"></output></span><input type="range" data-key="${c.key}" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}" aria-label="${esc(c.label)}"></label>`).join('')}</div>${hasProbe?'<div data-book-probe-view></div><label class="book-time-control">기록점 좌표 <output data-book-probe-label></output><input data-book-probe type="range" aria-label="기록점 위치"></label>':''}${model.animate?`<label class="book-time-control">${key==='thermo'?'열 흐름 단계':'시간'} <output data-book-time-label>0</output><input data-book-time type="range" min="0" max="${end}" step=".01" value="0" aria-label="${key==='thermo'?'열 흐름 단계':'탐구 시간'}"></label>`:''}<div class="button-row">${model.animate?'<button class="primary" data-book-play aria-pressed="false">재생</button>':''}<button data-book-reset>초기화</button></div><dl class="book-readouts" data-book-readouts></dl><p class="figure-note">${esc(model.note)}</p>`;
 let time=0,running=false,visible=true,frame=0,last=0,lastPaint=0,chartSignature,chartNodes,probeCache;
 const view=host.querySelector("[data-book-view]"),motionView=host.querySelector("[data-book-motion]"),probeView=host.querySelector("[data-book-probe-view]");
 function update(){
  const result=model.calculate(state,time);
  if(result.curves){
   const signature=JSON.stringify([state,probe,result.xmin,result.xmax,result.ymin,result.ymax,result.curves.length]);
   if(chartSignature!==signature){
    patchMarkup(view,`<svg class="plot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740 340" role="img" aria-label="${esc(model.title)}"><title>${esc(model.title)}</title><desc>${esc(model.note)}</desc>${chart(result,time,model.animate,probe)}<g data-book-selected>${selectedPoints(key,state,result).map((p,i)=>`<circle data-selected-dot="${i}" r="5" fill="${colors[p.curve%3]}" stroke="var(--ui-bg)" stroke-width="2"/>`).join('')}</g></svg>`);
    chartNodes={...axes(result),paths:[...view.querySelectorAll('.graph-curve')],dots:[...view.querySelectorAll('[data-chart-time-dot]')],probe:view.querySelector('[data-chart-probe-dot]')};chartSignature=signature;
   }else if(!timeGraph&&key!=='thermo')result.curves.forEach((c,i)=>chartNodes.paths[i].setAttribute('d',curvePath(c,result,chartNodes.X,chartNodes.Y)));
   chartNodes.dots.forEach((dot,i)=>{const x=Math.max(result.xmin,Math.min(result.xmax,time)),y=result.curves[i].fn(x),valid=Number.isFinite(y)&&y>=result.ymin&&y<=result.ymax;dot.setAttribute('visibility',valid?'visible':'hidden');if(valid){dot.setAttribute('cx',chartNodes.X(x));dot.setAttribute('cy',chartNodes.Y(y));}});
   if(chartNodes.probe){const y=result.curves.at(-1).fn(probe);chartNodes.probe.setAttribute('cx',chartNodes.X(probe));chartNodes.probe.setAttribute('cy',chartNodes.Y(y));}
  }else patchMarkup(view,`<svg class="plot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 740 340" role="img" aria-label="${esc(model.title)}"><title>${esc(model.title)}</title><desc>${esc(model.note)}</desc>${special(result)}</svg>`);
  const selection=selectedPoints(key,state,result);view.querySelectorAll('[data-selected-dot]').forEach((dot,i)=>{const p=selection[i],valid=p&&p.y>=result.ymin&&p.y<=result.ymax;dot.setAttribute('visibility',valid?'visible':'hidden');if(valid){dot.setAttribute('cx',chartNodes.X(p.x));dot.setAttribute('cy',chartNodes.Y(p.y));dot.dataset.x=p.x;dot.dataset.y=p.y;}});
  if(hasMotion)drawMotion(motionState(key,state,time,result));
  if(hasApparatus)patchMarkup(host.querySelector('[data-book-apparatus]'),`<svg class="plot" viewBox="0 0 740 240" role="img" aria-label="${esc(model.title)}의 물리 모형">${apparatusDiagram(key,state,result)}</svg>`);
  if(hasProbe){const e=host.querySelector('[data-book-probe]');e.min=result.xmin;e.max=result.xmax;e.step=(result.xmax-result.xmin)/100;e.value=probe;host.querySelector('[data-book-probe-label]').textContent=fmt(probe);const signature=JSON.stringify([state,probe]);if(probeCache?.signature!==signature){const pts=probeHistory(model,state,probe),lim=Math.max(.01,...pts.map(p=>Math.abs(p.y)));probeCache={signature,lim,path:pts.map((p,i)=>(i?'L':'M')+(64+32*p.t)+','+(90-45*p.y/lim)).join(' ')};const path=probeCache.path;patchMarkup(probeView,`<svg class="plot" viewBox="0 0 740 170" role="img" aria-label="고정 기록점의 시간 변화"><text x="64" y="20">기록점의 시간 그래프 · x=${fmt(probe)}</text><path d="M64 40V140 M64 90H704" class="native-axis"/><path d="${path}" class="native-curve native-velocity"/><circle cx="${64+32*(Math.min(20,time))}" cy="${90-45*model.calculate(state,Math.min(20,time)).curves.at(-1).fn(probe)/lim}" r="5" class="native-velocity"/><text x="64" y="165">0</text><text x="350" y="165">시간 t</text><text x="685" y="165">20</text></svg>`);probeCache.dot=probeView.querySelector("circle");}probeCache.dot.setAttribute("cx",64+32*Math.min(20,time));probeCache.dot.setAttribute("cy",90-45*model.calculate(state,Math.min(20,time)).curves.at(-1).fn(probe)/probeCache.lim);}
  if(model.animate){host.querySelector('[data-book-time-label]').textContent=fmt(time);host.querySelector('[data-book-time]').value=time;}
  const dl=host.querySelector('[data-book-readouts]');const html=Object.entries(result.values||{}).map(([k,v])=>`<div><dt>${mathLabel(k)}</dt><dd>${fmt(v)}</dd></div>`).join('');patchMarkup(dl,html);
  patchMarkup(host.querySelector('[data-book-legend]'),(result.curves||[]).map((c,i)=>`<span><i style="border-color:${colors[i%3]};${i===1?'border-top-style:dashed':i===2?'border-top-style:dotted':''}"></i>${esc(c.label)}</span>`).join(''));
  for(const c of model.controls)host.querySelector(`[data-for="${c.key}"]`).textContent=fmt(state[c.key])+' '+c.unit;
  host.dataset.rendered='true';host.dataset.time=String(time);
 }
 function drawMotion(m){
  let body='';if(m.type==='heat-engine')body=flowDiagram(m,['고온 저장체',fmt(state.Th)+' K','저온 저장체',fmt(state.Tc)+' K']);if(m.type==='coil'){const cx=210,cy=75,a=m.angle;body=`<ellipse cx="${cx}" cy="${cy}" rx="${Math.max(1,60*Math.abs(Math.cos(a)))}" ry="45" fill="none" stroke="${colors[0]}" stroke-width="3"/>`+line(cx,cy,cx+70*Math.cos(a),cy+45*Math.sin(a),colors[1],3)+text(370,60,'선속 '+fmt(m.flux)+' Wb')+text(370,100,'기전력 '+fmt(m.emf)+' V');}if(m.type==='bobs'){body=line(64,70,704,70)+line(384,25,384,115,'var(--plot-muted)',1,'stroke-dasharray="4 4"');m.positions.forEach((x,i)=>{const px=384+260*x/m.scale,y=60+i*50;body+=`<path d="M64 ${y}L${px} ${y}" class="native-axis"/>`+circle(px,y,12,colors[i])+text(px,y+25,fmt(x)+' '+m.unit,'text-anchor="middle"');});}
  if(m.type==='force')body=line(100,75,100+500*m.force/m.scale,75,colors[0],5)+(m.force>0?`<path d="M${100+500*m.force/m.scale} 75l-14 -8v16Z" fill="${colors[0]}"/>`:'')+text(100,110,'힘 '+fmt(m.force)+' N');
  if(m.type==='population'){body=text(64,25,'평균 개체수 비율 · 실제 개별 붕괴 시각 아님');m.fractions.forEach((f,i)=>{body+=`<rect x="64" y="${40+i*45}" width="640" height="22" fill="var(--ui-surface)"/><rect x="64" y="${40+i*45}" width="${640*f}" height="22" fill="${colors[i]}"/>`+text(64,78+i*45,(i?'딸핵':'생존')+' '+fmt(f));});}
  patchMarkup(motionView,`<svg class="plot" viewBox="0 0 740 ${m.type==='heat-engine'?240:150}" role="img" aria-label="그래프와 시간·입력을 공유하는 운동">${body}</svg>`);host.dataset.motionTime=String(time);host.dataset.motionX=m.positions?.[0]??'';host.dataset.motionState=JSON.stringify(m);
 }
 function tick(now){frame=0;if(!running||!visible||document.hidden)return;if(last)time+=Math.min(.06,(now-last)/1000);if(timeGraph||hasProbe)time=Math.min(end,time);if(key==='thermo'&&time>=end)time%=end;last=now;if(now-lastPaint>=1000/30){update();lastPaint=now;}if((timeGraph||hasProbe)&&time>=end){running=false;host.querySelector('[data-book-play]').textContent='재생';host.querySelector('[data-book-play]').setAttribute('aria-pressed','false');update();}else frame=requestAnimationFrame(tick);}
 function resume(){if(running&&visible&&!document.hidden&&!frame){last=0;if((timeGraph||hasProbe)&&time>=end){running=false;host.querySelector('[data-book-play]').textContent='재생';host.querySelector('[data-book-play]').setAttribute('aria-pressed','false');update();}else frame=requestAnimationFrame(tick);}}
 function pause(){if(frame)cancelAnimationFrame(frame);frame=0;last=0;}
 host.addEventListener('input',e=>{const key=e.target.dataset.key;if(!key)return;state[key]=Number(e.target.value);time=0;last=0;update();});
 host.querySelector('[data-book-reset]').addEventListener('click',()=>{for(const c of model.controls){state[c.key]=c.value;host.querySelector(`[data-key="${c.key}"]`).value=c.value;}time=0;last=0;update();});
 host.querySelector('[data-book-play]')?.addEventListener('click',e=>{if((timeGraph||hasProbe)&&time>=end)time=0;running=!running;e.target.textContent=running?'일시정지':'재생';e.target.setAttribute('aria-pressed',String(running));running?resume():pause();});
 host.querySelector('[data-book-time]')?.addEventListener('input',e=>{running=false;pause();time=Number(e.target.value);const b=host.querySelector('[data-book-play]');b.textContent='재생';b.setAttribute('aria-pressed','false');update();});
 host.querySelector('[data-book-probe]')?.addEventListener('input',e=>{probe=Number(e.target.value);update();});
 if(model.animate){new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)resume();else pause();}).observe(host);document.addEventListener('visibilitychange',()=>document.hidden?pause():resume());}
 update();
}
