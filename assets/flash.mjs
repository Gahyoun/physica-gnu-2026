// Ruffle is loaded only when an original animation is opened.
const root=new URL('../',import.meta.url);
let enginePromise;
export function engine(){
 if(!enginePromise)enginePromise=new Promise((resolve,reject)=>{
  window.RufflePlayer={...(window.RufflePlayer||{}),config:{polyfills:false,publicPath:new URL('vendor/ruffle/',root).href}};
  const script=document.createElement('script');script.src=new URL('vendor/ruffle/ruffle.js',root).href;
  script.onload=()=>resolve(window.RufflePlayer.newest());
  script.onerror=()=>{enginePromise=undefined;script.remove();reject(Error('웹 재생 엔진을 불러오지 못했습니다.'));};document.head.append(script);
 });
 return enginePromise;
}
export function config(file){
 const url=new URL(file,root);
 if(!url.href.startsWith(new URL('assets/flash/original/',root).href)||!url.pathname.endsWith('.swf'))throw Error('등록되지 않은 애니메이션 주소');
 return {url:url.href,base:new URL('.',url).href,autoplay:'on',unmuteOverlay:'hidden',splashScreen:false,allowScriptAccess:false,allowNetworking:'internal',openUrlMode:'deny',upgradeToHttps:false,showSwfDownload:false,backgroundExecutionMode:'none',letterbox:'on',scale:'showAll',forceScale:true,logLevel:'error',deviceFontRenderer:'canvas',preferredRenderer:'canvas',urlRewriteRules:[[/^https?:\/\/physica\.gnu\.ac\.kr\/(.*)$/,new URL('assets/flash/original/',root).href+'$1']]};
}
const instances=new Map();
let observer;
function bind(figure){
 if(figure.dataset.flashBound)return;figure.dataset.flashBound='true';
 const get=name=>figure.querySelector('[data-flash-'+name+']'),stage=get('stage'),status=get('status'),start=get('start'),toggle=get('toggle');
 let player=null,nonce=0;
 function pause(){if(player&&!player.ruffle().suspended){player.ruffle().suspend();toggle.textContent='재생';figure.dataset.flashPlaying='false';}}
 function close(){nonce++;if(player)player.remove();player=null;stage.replaceChildren();stage.hidden=true;start.hidden=false;start.disabled=false;for(const name of ['toggle','reset','fullscreen','close'])get(name).hidden=true;figure.dataset.flashLoaded='false';status.textContent='원본의 화면 안에서 버튼과 슬라이더를 조작할 수 있습니다.';}
 async function load(){
  const token=++nonce;figure.dataset.flashLoaded="false";delete figure.dataset.flashError;
  for(const [f,i] of instances)if(f!==figure)i.close();
  start.disabled=true;status.textContent='원본 애니메이션을 불러오는 중입니다.';
  try{
   const api=await engine();if(token!==nonce)return;
   if(player)player.remove();stage.replaceChildren();stage.hidden=false;
   stage.style.aspectRatio=Number(figure.dataset.flashWidth)+' / '+Number(figure.dataset.flashHeight);stage.style.width='min(100%, '+Math.min(1100,Math.max(480,Number(figure.dataset.flashWidth)*1.5))+'px, '+(75*Number(figure.dataset.flashWidth)/Number(figure.dataset.flashHeight))+'vh)';
   player=api.createPlayer();player.style.width='100%';player.style.height='100%';player.setAttribute('aria-label',figure.querySelector('h3')?.textContent||'원본 애니메이션');stage.append(player);
   await player.ruffle().load(config(figure.dataset.flashFile));const deadline=performance.now()+20000;while(token===nonce&&player&&player.ruffle().readyState<2){if(performance.now()>deadline)throw Error('애니메이션 로딩 시간 초과');await new Promise(r=>setTimeout(r,50));}if(token!==nonce)return;
   start.hidden=true;start.disabled=false;for(const name of ['toggle','reset','fullscreen','close'])get(name).hidden=false;
   toggle.textContent='일시정지';figure.dataset.flashLoaded='true';figure.dataset.flashPlaying='true';status.textContent='화면 안의 버튼과 슬라이더로 조작하세요. 일시정지하면 움직임과 그래프가 함께 멈춥니다.';
  }catch(error){if(token!==nonce)return;close();figure.dataset.flashError='true';status.textContent='재생하지 못했습니다. 다시 열거나 원본 출처를 확인해 주세요.';console.error(error);}
 }
 start.addEventListener('click',load);get('reset').addEventListener('click',load);get('close').addEventListener('click',close);
 toggle.addEventListener('click',()=>{if(!player)return;if(player.ruffle().suspended){player.ruffle().resume();toggle.textContent='일시정지';figure.dataset.flashPlaying='true';}else pause();});
 get('fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await stage.requestFullscreen();}catch{status.textContent='이 브라우저에서는 전체화면을 사용할 수 없습니다. 크게 보기를 이용하세요.';}});
 instances.set(figure,{pause,close});
 observer?.observe(figure);
}
function observe(){document.querySelectorAll('[data-flash-id]').forEach(bind);}
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function figureHTML(r){return `<figure class="interactive flash-figure" data-flash-id="${r.id}" data-flash-file="${esc(r.file)}" data-flash-width="${r.width}" data-flash-height="${r.height}"><header class="figure-heading"><h3>${esc(r.title)}</h3></header><div class="flash-toolbar"><button class="primary" data-flash-start>애니메이션 열기</button><button data-flash-toggle hidden>일시정지</button><button data-flash-reset hidden>초기화</button><button data-flash-fullscreen hidden>전체화면</button><button data-flash-close hidden>닫기</button></div><p class="flash-status" data-flash-status role="status" aria-live="polite"></p><div class="flash-stage" data-flash-stage hidden></div><figcaption>정기수 교수님 원작 · 원본 웹 호환 재생 · <a href="${esc(r.source)}" target="_blank" rel="noopener">원본 출처 ↗</a>${r.nativeHref?`<p><a href="${esc(r.nativeHref)}">운동과 그래프 · HTML 복원 →</a></p>`:''}<p>${esc(r.source.split('/').pop())}</p></figcaption></figure>`;}
async function library(){
 const viewer=document.querySelector('[data-flash-viewer]');if(!viewer)return;
 const response=await fetch(new URL('assets/flash-catalog.json',root));if(!response.ok)throw Error('애니메이션 목록 읽기 실패');const {files}=await response.json();
 const id=new URLSearchParams(location.search).get('id'),selected=files.find(r=>r.id===id);
 if(selected){document.title=selected.title+' | 물리의 이해 remaster';viewer.innerHTML=figureHTML(selected)+`<nav class="section-menu" aria-label="이 애니메이션이 나오는 교재">${selected.readingLinks.map(p=>`<a href="${p.href}">${esc(p.title)} →</a>`).join('')}</nav>`;observe();}
 else if(id){viewer.textContent='이 애니메이션을 찾을 수 없습니다. 아래 목록에서 선택하세요.';}
 let current=0;
 const input=document.querySelector('[data-flash-search]'),chapter=document.querySelector('[data-flash-chapter]'),list=document.querySelector('[data-flash-list]');
 function draw(){
  const q=input.value.trim().toLocaleLowerCase(),filtered=files.filter(r=>(!q||(r.title+' '+r.source+' '+r.sections?.join(' ')).toLocaleLowerCase().includes(q))&&(!chapter.value||r.sections?.includes(chapter.value)));
  const max=Math.max(1,Math.ceil(filtered.length/40));current=Math.min(current,max-1);
  list.innerHTML=filtered.slice(current*40,(current+1)*40).map(r=>`<li><div><a href="${r.href}">${esc(r.title)}</a><small class="catalog-path">${esc(r.sections?.join(' · ')||'원본 자료')} · ${esc(r.source.split('/').pop())}</small></div><div class="catalog-meta"><small>원본 웹 재생</small><a href="${esc(r.source)}" target="_blank" rel="noopener">원본 ↗</a></div></li>`).join('');
  document.querySelector('[data-flash-count]').textContent=filtered.length+'개';document.querySelector('[data-flash-page]').textContent=(current+1)+' / '+max;
  document.querySelector('[data-flash-previous]').disabled=current===0;document.querySelector('[data-flash-next]').disabled=current>=max-1;
 }
 input.addEventListener('input',()=>{current=0;draw();});chapter.addEventListener('change',()=>{current=0;draw();});
 document.querySelector('[data-flash-previous]').addEventListener('click',()=>{current--;draw();});document.querySelector('[data-flash-next]').addEventListener('click',()=>{current++;draw();});
 input.closest('form').addEventListener('submit',e=>e.preventDefault());draw();
}
if(typeof document!=='undefined'){
 observer=new IntersectionObserver(entries=>{for(const e of entries)if(!e.isIntersecting)instances.get(e.target)?.pause();},{rootMargin:'150px'});
 observe();library().catch(e=>{const v=document.querySelector('[data-flash-viewer]');if(v)v.textContent='애니메이션 목록을 불러오지 못했습니다.';console.error(e);});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)for(const i of instances.values())i.pause();});
 window.addEventListener('pagehide',()=>{for(const i of instances.values())i.close();});
}
