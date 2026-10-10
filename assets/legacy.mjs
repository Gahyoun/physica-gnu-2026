// Initialize only visible legacy ports; dormant figures load no simulation module.
const modules={quantum:()=>import('./legacy-quantum.mjs'),optics:()=>import('./legacy-optics.mjs'),general:()=>import('./legacy-general.mjs'),nuclear:()=>import('./legacy-nuclear.mjs')};
const mounts={quantum:'mountLegacyQuantum',optics:'mountLegacyOptics',general:'mountLegacyGeneral',nuclear:'mountLegacyNuclear'};
let records;
const pending=new WeakSet();
const controllers=new Set();
async function mount(host){
 if(pending.has(host))return;
 pending.add(host);
 try{
  records ||= fetch(new URL('./legacy-specs.json',import.meta.url)).then(r=>{if(!r.ok)throw Error('실험 설정을 읽지 못했습니다.');return r.json();});
  const specs=await records,spec=specs.find(s=>s.id===host.dataset.legacyId),group=host.dataset.legacyGroup;
  if(!spec||!modules[group])throw Error('실험 설정이 없습니다.');
  const module=await modules[group]();
  const controller=module[mounts[group]](host,spec);
  if(controller?.redraw)controllers.add(controller);
  host.dataset.nativeReady='true';
 }catch(e){
  console.error('Legacy interaction failed',host.dataset.legacyId,e);
  host.replaceChildren();
  const p=document.createElement('p');p.setAttribute('role','status');p.textContent='인터랙션을 불러오지 못했습니다. 다시 시도해 주세요.';
  const button=document.createElement('button');button.textContent='다시 불러오기';button.onclick=()=>{pending.delete(host);mount(host);};
  host.append(p,button);
 }
}
const hosts=[...document.querySelectorAll('[data-legacy-id]')];
if(typeof IntersectionObserver==='function'){
 const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){observer.unobserve(e.target);mount(e.target);}},{rootMargin:'100px'});
 for(const host of hosts)observer.observe(host);
}else hosts.forEach(mount);
// Canvas text, unlike SVG/CSS, needs a new draw after a reading-theme change.
let themeFrame=0;
new MutationObserver(()=>{
 if(themeFrame)return;
 themeFrame=requestAnimationFrame(()=>{themeFrame=0;for(const c of controllers)c.redraw();});
}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
