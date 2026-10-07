import fs from 'node:fs';
import {pages} from '../src/book.mjs';
import {oscillatorSpecs} from '../assets/native-oscillators.mjs';
import {mechanicsSpecs} from '../assets/native-mechanics.mjs';
import {waveSpecs} from '../assets/native-waves.mjs';
import {chainSpecs} from '../assets/native-chain.mjs';
const timelines=JSON.parse(fs.readFileSync(new URL('../src/native-timelines.json',import.meta.url)));
const timelineSpecs=Object.fromEntries(timelines.map(r=>['timeline-'+r.id,{...r}]));
const analytics=JSON.parse(fs.readFileSync(new URL('../src/native-analytic.json',import.meta.url)));
const analyticSpecs=Object.fromEntries(analytics.map(r=>['analytic-'+r.id,{...r}]));
const optics=JSON.parse(fs.readFileSync(new URL('../src/native-optics.json',import.meta.url)));
const opticsSpecs=Object.fromEntries(optics.map(r=>['optics-'+r.id,{...r}]));
const refraction=JSON.parse(fs.readFileSync(new URL('../src/native-refraction.json',import.meta.url)));
const refractionSpecs=Object.fromEntries(refraction.map(r=>['refraction-'+r.id,{...r}]));
fs.writeFileSync(new URL('../assets/refraction-specs.mjs',import.meta.url),'export const refractionSpecs='+JSON.stringify(refractionSpecs)+';\n');
fs.writeFileSync(new URL('../assets/optics-specs.mjs',import.meta.url),'export const opticsSpecs='+JSON.stringify(opticsSpecs)+';\n');
fs.writeFileSync(new URL('../assets/analytic-specs.mjs',import.meta.url),'export const analyticSpecs='+JSON.stringify(analyticSpecs)+';\n');
fs.writeFileSync(new URL('../assets/timeline-specs.mjs',import.meta.url),'export const timelineSpecs='+JSON.stringify(Object.fromEntries(timelines.map(r=>[r.id,r])))+';\n');
const expansion=JSON.parse(fs.readFileSync(new URL('../src/native-expansion.json',import.meta.url)));
const structureData=JSON.parse(fs.readFileSync(new URL('../src/structure-data.json',import.meta.url)));
const expansionSpecs=Object.fromEntries(expansion.map(r=>['expansion-'+r.id,{...r}]));
fs.writeFileSync(new URL('../assets/expansion-specs.mjs',import.meta.url),'export const expansionSpecs='+JSON.stringify(expansionSpecs)+';\nexport const structureData='+JSON.stringify(structureData)+';\n');
const fundamentals=JSON.parse(fs.readFileSync(new URL('../src/native-fundamentals.json',import.meta.url)));
const fundamentalSpecs=Object.fromEntries(fundamentals.map(r=>['fundamental-'+r.id,r]));
fs.writeFileSync(new URL('../assets/fundamental-specs.mjs',import.meta.url),'export const fundamentalSpecs='+JSON.stringify(fundamentalSpecs)+';\n');
const fields=JSON.parse(fs.readFileSync(new URL('../src/native-fields.json',import.meta.url)));
const fieldSpecs=Object.fromEntries(fields.map(r=>['field-'+r.id,r]));
fs.writeFileSync(new URL('../assets/field-specs.mjs',import.meta.url),'export const fieldSpecs='+JSON.stringify(fieldSpecs)+';\n');
const scenes=JSON.parse(fs.readFileSync(new URL('../src/native-scenes.json',import.meta.url)));
const sceneSpecs=Object.fromEntries(scenes.map(r=>['scene-'+r.id,r]));
fs.writeFileSync(new URL('../assets/scene-specs.mjs',import.meta.url),'export const sceneSpecs='+JSON.stringify(sceneSpecs)+';\n');
const quantum=JSON.parse(fs.readFileSync(new URL('../src/native-quantum.json',import.meta.url)));
const quantumSpecs=Object.fromEntries(quantum.map(r=>['quantum-'+r.id,r]));
fs.writeFileSync(new URL('../assets/quantum-specs.mjs',import.meta.url),'export const quantumSpecs='+JSON.stringify(quantumSpecs)+';\n');
const light=JSON.parse(fs.readFileSync(new URL('../src/native-light.json',import.meta.url)));
const lightSpecs=Object.fromEntries(light.map(r=>['light-'+r.id,r]));
fs.writeFileSync(new URL('../assets/light-specs.mjs',import.meta.url),'export const lightSpecs='+JSON.stringify(lightSpecs)+';\n');
const dynamics=JSON.parse(fs.readFileSync(new URL('../src/native-dynamics.json',import.meta.url)));
const dynamicsSpecs=Object.fromEntries(dynamics.map(r=>['dynamics-'+r.id,r]));
fs.writeFileSync(new URL('../assets/dynamics-specs.mjs',import.meta.url),'export const dynamicsSpecs='+JSON.stringify(dynamicsSpecs)+';\n');
const electromagnet=JSON.parse(fs.readFileSync(new URL('../src/native-electromagnet.json',import.meta.url)));
const electromagnetSpecs=Object.fromEntries(electromagnet.map(r=>['electromagnet-'+r.id,r]));
fs.writeFileSync(new URL('../assets/electromagnet-specs.mjs',import.meta.url),'export const electromagnetSpecs='+JSON.stringify(electromagnetSpecs)+';\n');
const nativeSpecs={...electromagnetSpecs,...dynamicsSpecs,...lightSpecs,...quantumSpecs,...sceneSpecs,...fieldSpecs,...fundamentalSpecs,...expansionSpecs,...refractionSpecs,...opticsSpecs,...analyticSpecs,...oscillatorSpecs,...mechanicsSpecs,...chainSpecs,...waveSpecs,...timelineSpecs};
const quantumNative={distributionftn:'distribution-comparison.html#distributions',distributionftnx:'distribution-comparison.html#scaled-distributions',fddistftn:'distribution-comparison.html#fermi-edge',mode1dim:'density-of-states.html#mode-1d',mode2dim:'density-of-states.html#mode-2d',mode3dim:'density-of-states.html#mode-3d',grblackbody:'blackbody.html#blackbody',solidosc:'heat-capacity.html#lattice',freeelectronftn:'free-electrons.html#free-electrons'};
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function flash(root){
 const path=root+'/src/flash-manifest.json';
 const manifest=fs.existsSync(path)?JSON.parse(fs.readFileSync(path)): {files:[],failures:[]};
 const byLesson=new Map(),bySource=new Map();
 for(const r of manifest.files){
  const first=pages.find(p=>p.id===r.lessons[0]);
  r.title=r.titles[0]||first?.title||'원본 애니메이션';
  r.sections=[...new Set(r.lessons.map(id=>pages.find(p=>p.id===id)?.section).filter(Boolean))];
  r.href='flash.html?id='+r.id;
  const spec=Object.entries(nativeSpecs).find(([,s])=>r.source.endsWith('/'+s.source));
  const nativeLesson=spec?.[1].lesson||(r.source.endsWith('/harmoniccircular.swf')?'1-2-1-3':null);
  const quantum=quantumNative[r.source.split('/').pop().replace(/\.swf$/,'')];if(quantum)r.nativeHref=quantum;
  if(nativeLesson)r.nativeHref='lesson-'+nativeLesson+'.html#native-'+(spec?.[0]||'harmonic');
  r.readingLinks=r.lessons.map(id=>pages.find(p=>p.id===id)).filter(Boolean).map(p=>({title:p.subtitle,href:p.file+'#remaster-animations',id:p.id}));
  for(const id of r.lessons){if(!byLesson.has(id))byLesson.set(id,[]);byLesson.get(id).push(r);}
  for(const u of [r.source,...r.wrappers])bySource.set(u,r);
 }
 const normalize=u=>u.split('#')[0].replace(/\/bank\/(sim|ani|exp|graph|graphic)\//,'/bank/flash/');
 const record=u=>bySource.get(u.split('#')[0])||bySource.get(normalize(u));
 const target=u=>{const r=record(u);return r?.nativeHref||r?.href||null;};
 const nativeTarget=u=>record(u)?.nativeHref||null;
 const figure=r=>`<figure class="interactive flash-figure" id="${r.id}" data-flash-id="${r.id}" data-flash-file="${esc(r.file)}" data-flash-width="${r.width}" data-flash-height="${r.height}"><header class="figure-heading"><h3>${esc(r.title)}</h3><a href="${r.href}" aria-label="${esc(r.title)} 크게 보기">크게 보기</a></header><div class="flash-toolbar"><button class="primary" data-flash-start>애니메이션 열기</button><button data-flash-toggle hidden>일시정지</button><button data-flash-reset hidden>초기화</button><button data-flash-fullscreen hidden>전체화면</button><button data-flash-close hidden>닫기</button></div><p class="flash-status" data-flash-status role="status" aria-live="polite">원본의 화면 안에서 버튼과 슬라이더를 조작할 수 있습니다.</p><div class="flash-stage" data-flash-stage hidden></div><figcaption>정기수 교수님 원작 · 원본 웹 호환 재생 · <a href="${esc(r.source)}" target="_blank" rel="noopener">원본 출처 ↗</a><details class="flash-details"><summary>자료 정보</summary><p>${esc(r.source.split('/').pop())} · ${r.width} × ${r.height} · ${r.frameRate} fps</p><p>원본의 움직임·계산·그래프를 웹 호환 엔진으로 재생합니다. HTML 재구현본과 구별하며 개별 조작과 계산 결과의 대조는 복원 기록에 남깁니다.</p></details></figcaption><noscript>원본 애니메이션 재생에는 JavaScript가 필요합니다.</noscript></figure>`;
 const hasNative=id=>(byLesson.get(id)||[]).some(r=>r.nativeHref?.startsWith('lesson-'));
 const renderNative=(rs,math)=>{
  let nativeHTML='';
  for(const r of rs){
   if(!r.nativeHref)continue;
   const spec=Object.entries(nativeSpecs).find(([,s])=>r.source.endsWith('/'+s.source));
   const kind=spec?.[0]||(r.source.endsWith('/harmoniccircular.swf')?'harmonic':null);
   if(!kind){nativeHTML+=`<p><a href="${r.nativeHref}">${esc(r.title)} · 리마스터</a> · <a href="${r.href}">원본과 비교</a></p>`;continue;}
   const equations=kind==='potential'?`<div class="remaster-equations"><p>${math('u=(x-200)/200',false)} · 위치는 원본 눈금입니다.</p>${['u^2','|u|','u^4','u^8','2.5(u-0.6)^2(u+0.6)^2',String.raw`\begin{cases}4(u-0.5)^2&u>0.5\\(u-0.5)^2/2.25&u\le0.5\end{cases}`].map((eq,i)=>`<div data-potential-equation="${i+1}" ${i?'hidden':''}>${math('V/200='+eq,true)}</div>`).join('')}</div>`:'';
   nativeHTML+=`<figure class="interactive" id="native-${kind}"><header class="figure-heading"><h3>${esc(spec?.[1].title||'조화진동과 시간 그래프')}</h3><a href="${r.href}">원본과 비교</a></header>${kind.startsWith('timeline-')?`<div data-flash-timeline="${r.id}" data-timeline-title="${esc(r.title)}" data-timeline-width="${r.width}" data-timeline-height="${r.height}" data-timeline-fps="${r.frameRate}" data-timeline-cycle="${spec[1].cycle}"></div>`:`<div data-flash-native="${kind}"></div>`}${equations}<figcaption>리마스터 애니메이션 · 정기수 교수님 원작 · ${kind.startsWith('timeline-')?'새 SVG 도형과 텍스트로 다시 구성했습니다.':(kind.startsWith('refraction-')||kind.startsWith('expansion-'))&&!spec[1].animated?'공간 도형과 시점 조작을 HTML/SVG로 다시 구성했습니다.':'움직임과 그래프를 같은 계산으로 연결합니다.'}</figcaption></figure>`;
  }
  return nativeHTML;
 };
 const inline=(page,title,math)=>renderNative((byLesson.get(page.id)||[]).filter(r=>Object.values(nativeSpecs).some(s=>s.section===title&&r.source.endsWith('/'+s.source))),math);
 const section=(page,math)=>{
  const rs=byLesson.get(page.id)||[];if(!rs.length)return '';
  const order=(page.media||[]).map(m=>m.source);
  const index=r=>{const i=order.findIndex(u=>u===r.source||r.wrappers.includes(u));return i<0?1000:i;};
  const nativeHTML=renderNative(rs.filter(r=>!Object.values(nativeSpecs).some(s=>s.section&&r.source.endsWith('/'+s.source))).sort((a,b)=>index(a)-index(b)),math);
  return `<section class="content-row" id="remaster-animations"><a id="original-flash" class="source-anchor"></a><h2>${nativeHTML?'리마스터 애니메이션':'원본 애니메이션'}</h2><div class="row-body">${nativeHTML}<nav class="remaster-original-links" aria-label="이 페이지의 원본 애니메이션"><strong>원본 애니메이션</strong>${rs.slice().sort((a,b)=>index(a)-index(b)).map(r=>`<a href="${r.href}">${esc(r.title)} ↗</a>`).join('')}</nav></div></section>`;
 };
 fs.writeFileSync(root+'/assets/flash-catalog.json',JSON.stringify({author:manifest.author,engine:manifest.engine,files:manifest.files.map(({tags,dependencyCandidates,...r})=>r),failures:manifest.failures}));
 const extra=`<div class="page-heading"><div><p class="chapter-name">물리의 이해 · 웹교재</p><h1>원본 애니메이션</h1></div></div><p>정기수 교수님께서 제작하신 원본 애니메이션을 웹에서 재생합니다. 움직이는 그림과 계산 그래프, 화면 안의 조작 기능을 함께 살펴볼 수 있습니다.</p><div data-flash-viewer></div><div data-flash-library><form class="catalog-filters" role="search"><label>애니메이션 검색<input type="search" data-flash-search placeholder="제목 또는 단원 이름"></label><label>대단원<select data-flash-chapter><option value="">전체</option>${[...new Set(pages.map(p=>p.section))].map(s=>`<option>${esc(s)}</option>`).join('')}</select></label></form><p data-flash-count role="status"></p><ol class="catalog-list" data-flash-list></ol><div class="catalog-paging"><button data-flash-previous>← 이전 목록</button><span data-flash-page></span><button data-flash-next>다음 목록 →</button></div></div><noscript>애니메이션 목록과 재생에는 JavaScript가 필요합니다. 교재 페이지 안에서는 원본 출처를 확인할 수 있습니다.</noscript>`;
 const remasters=manifest.files.filter(r=>r.nativeHref).sort((a,b)=>a.title.localeCompare(b.title,'ko',{numeric:true}));
 const remasterExtra=`<div class="page-heading"><div><p class="chapter-name">물리의 이해 remaster</p><h1>리마스터 애니메이션</h1></div></div><p>정기수 교수님의 원본 모형을 HTML 인터랙션으로 다시 구현했습니다. 자료를 선택하면 교재 안의 실험으로 이동합니다. 원본은 <a href="flash.html">원본 애니메이션</a>에서 비교할 수 있습니다.</p><div data-catalog><form class="catalog-filters" role="search"><label>목록 내 검색<input type="search" data-filter placeholder="제목 또는 단원 이름"></label></form><p class="catalog-count" data-count role="status"></p><ol class="catalog-list">${remasters.map(r=>`<li data-catalog-row data-restored="true"><div><a href="${r.nativeHref}">${esc(r.title)}</a><small class="catalog-path">${esc(r.sections.join(' · '))}</small></div><div class="catalog-meta"><small class="status restored">HTML 인터랙션</small><a href="${r.href}">원본과 비교</a></div></li>`).join('')}</ol><p data-empty hidden>일치하는 자료가 없습니다.</p><div class="catalog-paging" data-paging hidden><button data-previous>← 이전 목록</button><span data-page-count></span><button data-next>다음 목록 →</button></div></div>`;
 const nativeAnchor=id=>(byLesson.get(id)||[]).find(r=>r.nativeHref?.startsWith('lesson-'))?.nativeHref.split('#')[1];
 return {section,inline,target,nativeTarget,nativeAnchor,extra,remasterExtra,hasNative,files:manifest.files,figure,count:manifest.files.length};
}
