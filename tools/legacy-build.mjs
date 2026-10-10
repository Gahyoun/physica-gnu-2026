import fs from 'node:fs';
import {pages} from '../src/book.mjs';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const titleKey=s=>String(s).replace(/\s*\((?:애플릿|Canvas)\)\s*$/,'').replace(/\s+/g,'').toLowerCase();

// Java programs have their own registry. They do not change the 518-SWF ledger.
export function legacyPrograms(root, math){
 const catalog=JSON.parse(fs.readFileSync(root+'/src/catalog.json'));
 const inventoryFile=root+'/docs/legacy-inventory.json';
 const inventory=fs.existsSync(inventoryFile)?JSON.parse(fs.readFileSync(inventoryFile)):null;
 const identity=p=>JSON.stringify([p.codebase,p.class,p.archives]);
 const records=['quantum','optics','general','nuclear'].flatMap(group=>{
  const file=root+'/src/legacy-'+group+'.json';
  return fs.existsSync(file)?JSON.parse(fs.readFileSync(file)).map(r=>({...r,group})):[];
 });
 const ids=new Set(),sources=new Map(),lessons=new Map();
 for(const r of records){
  if(!/^[a-z0-9-]+$/.test(r.id)||ids.has(r.id))throw Error('Invalid or duplicate legacy program ID: '+r.id);
  ids.add(r.id);
  const page=pages.find(p=>p.id===r.lessonId);
  if(!page)throw Error('Missing textbook page for Java program: '+r.id);
  r.href=page.file+'#native-legacy-'+r.id;
  r.chapter=page.section;
  r.isJava=/\bjava\b/i.test(r.provenance?.format||r.provenance?.originalFormat||'');
  if(!lessons.has(page.id))lessons.set(page.id,[]);
  lessons.get(page.id).push(r);
  const aliases=new Set([r.source,...(r.sourceAliases||[])]);
  const origin=inventory?.records.find(i=>i.source===r.source);
  const identities=new Set(origin?.programs.filter(p=>p.format==='Java').map(identity)||[]);
  for(const wrapper of inventory?.records||[])if(wrapper.programs.some(p=>p.format==='Java'&&identities.has(identity(p))))aliases.add(wrapper.source);
  for(const b of catalog.browse)if(b.type==='애플릿'&&titleKey(b.title)===titleKey(r.title)&&b.source.split('#')[0]===catalog.lessons.find(l=>l.id===page.id)?.source)aliases.add(b.source);
  for(const u of aliases){
   if(sources.has(u)&&sources.get(u).id!==r.id)throw Error('Ambiguous legacy source: '+u);
   sources.set(u,r);
  }
  r.sourceAliases=[...aliases].filter(u=>u!==r.source);
 }
 fs.writeFileSync(root+'/assets/legacy-specs.json',JSON.stringify(records)+'\n');
 const figure=r=>`<figure class="interactive legacy-figure" id="native-legacy-${r.id}"><header class="figure-heading"><h3>${esc(r.title)}</h3><a href="${esc(r.source)}" target="_blank" rel="noopener">원본 출처 ↗</a></header><div data-legacy-id="${r.id}" data-legacy-group="${r.group}"><p class="legacy-loading" role="status">인터랙션을 불러오는 중…</p><noscript>실험 조작에는 JavaScript가 필요합니다.</noscript></div>${(r.equations||[]).length?`<div class="remaster-equations" tabindex="0" aria-label="실험의 수식">${r.equations.map(e=>math(e,true)).join('')}</div>`:''}<figcaption>리마스터 애니메이션 · 정기수 교수님 원작 · ${r.isJava?'Java 원본 모형의 HTML 재구현':'원본 웹 모형의 HTML 재구현'} · <a href="docs/legacy-${r.group}-audit.md">복원 기록</a></figcaption></figure>`;
 const row=r=>`<li data-catalog-row data-restored="true"><div><a href="${r.href}">${esc(r.title)}</a><small class="catalog-path">${esc(r.chapter)}</small></div><div class="catalog-meta"><small class="status restored">HTML 인터랙션${r.isJava?' · Java 이식':''}</small><a href="${esc(r.source)}" target="_blank" rel="noopener">원본 ↗</a></div></li>`;
 const section=page=>lessons.has(page.id)?`<section class="content-row" id="legacy-animations"><h2>리마스터 인터랙션</h2><div class="row-body">${lessons.get(page.id).map(figure).join('')}</div></section>`:'';
 const target=u=>sources.get(u)?.href||null;
 const appendLibrary=html=>html.replace('</ol>',records.slice().sort((a,b)=>a.title.localeCompare(b.title,'ko')).map(row).join('')+'</ol>');
 if(inventory){
  const wrappers=inventory.records.filter(r=>r.programs.some(p=>p.format==='Java')).map(r=>({...r,htmlPort:target(r.source),status:target(r.source)?'source-derived-html':'not-ported'}));
  const programs=new Map();
  for(const wrapper of wrappers)for(const p of wrapper.programs.filter(p=>p.format==='Java')){
   const k=identity(p);if(!programs.has(k))programs.set(k,{...p,sources:[],htmlPort:null});
   const program=programs.get(k);program.sources.push(wrapper.source);program.htmlPort||=wrapper.htmlPort;
  }
  const units=[...programs.values()];
  fs.writeFileSync(root+'/docs/legacy-restoration-ledger.json',JSON.stringify({date:new Date().toISOString(),scope:'Java bank wrappers, independent of Flash 518',htmlPrograms:records.length,javaHTMLPrograms:records.filter(r=>r.isJava).length,javaExecutables:units.length,portedJavaExecutables:units.filter(r=>r.htmlPort).length,unportedJavaExecutables:units.filter(r=>!r.htmlPort).length,javaWrappers:wrappers.length,linkedWrappers:wrappers.filter(r=>r.htmlPort).length,unportedWrappers:wrappers.filter(r=>!r.htmlPort).length,verification:'Per-program source equations and inputs, plus recorded numerical/browser tests; original GUI exhaustive equivalence is not asserted.',programs:units,records:wrappers},null,2)+'\n');
 }
 return {records,target,section,has:id=>lessons.has(id),appendLibrary};
}
