import fs from 'node:fs';
import {pages} from '../src/book.mjs';
import {oscillatorSpecs} from '../assets/native-oscillators.mjs';
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
  const spec=Object.entries(oscillatorSpecs).find(([,s])=>r.source.endsWith('/'+s.source));
  const nativeLesson=spec?.[1].lesson||(r.source.endsWith('/harmoniccircular.swf')?'1-2-1-3':null);
  const quantum=quantumNative[r.source.split('/').pop().replace(/\.swf$/,'')];if(quantum)r.nativeHref=quantum;
  if(nativeLesson)r.nativeHref='lesson-'+nativeLesson+'.html#native-'+(spec?.[0]||'harmonic');
  r.readingLinks=r.lessons.map(id=>pages.find(p=>p.id===id)).filter(Boolean).map(p=>({title:p.subtitle,href:p.file+'#original-flash',id:p.id}));
  for(const id of r.lessons){if(!byLesson.has(id))byLesson.set(id,[]);byLesson.get(id).push(r);}
  for(const u of [r.source,...r.wrappers])bySource.set(u,r);
 }
 const normalize=u=>u.split('#')[0].replace(/\/bank\/(sim|ani|exp|graph|graphic)\//,'/bank/flash/');
 const target=u=>{const r=bySource.get(u.split('#')[0])||bySource.get(normalize(u));return r?.href||null;};
 const figure=r=>`<figure class="interactive flash-figure" id="${r.id}" data-flash-id="${r.id}" data-flash-file="${esc(r.file)}" data-flash-width="${r.width}" data-flash-height="${r.height}"><header class="figure-heading"><h3>${esc(r.title)}</h3><a href="${r.href}" aria-label="${esc(r.title)} 크게 보기">크게 보기</a></header><div class="flash-toolbar"><button class="primary" data-flash-start>애니메이션 열기</button><button data-flash-toggle hidden>일시정지</button><button data-flash-reset hidden>초기화</button><button data-flash-fullscreen hidden>전체화면</button><button data-flash-close hidden>닫기</button></div><p class="flash-status" data-flash-status role="status" aria-live="polite">원본의 화면 안에서 버튼과 슬라이더를 조작할 수 있습니다.</p><div class="flash-stage" data-flash-stage hidden></div><figcaption>정기수 교수님 원작 · 원본 웹 호환 재생 · <a href="${esc(r.source)}" target="_blank" rel="noopener">원본 출처 ↗</a><details class="flash-details"><summary>자료 정보</summary><p>${esc(r.source.split('/').pop())} · ${r.width} × ${r.height} · ${r.frameRate} fps</p><p>원본의 움직임·계산·그래프를 웹 호환 엔진으로 재생합니다. HTML 재구현본과 구별하며 개별 조작과 계산 결과의 대조는 복원 기록에 남깁니다.</p></details></figcaption><noscript>원본 애니메이션 재생에는 JavaScript가 필요합니다.</noscript></figure>`;
 const section=page=>{
  const rs=byLesson.get(page.id)||[];if(!rs.length)return '';
  const order=(page.media||[]).map(m=>m.source);
  const index=r=>{const i=order.findIndex(u=>u===r.source||r.wrappers.includes(u));return i<0?1000:i;};
  const native=rs.find(r=>r.source.endsWith('/harmoniccircular.swf'));
  let nativeHTML=native?`<figure class="interactive" id="native-harmonic"><header class="figure-heading"><h3>조화진동과 시간 그래프 · HTML 복원</h3><a href="${native.href}">원본과 비교</a></header><div data-flash-native="harmonic"></div><figcaption>원운동·변위·속도·가속도 그래프의 시간과 조절값이 함께 바뀝니다.</figcaption></figure>`:'';
  for(const [kind,spec] of Object.entries(oscillatorSpecs)){const r=rs.find(r=>r.source.endsWith('/'+spec.source));if(r)nativeHTML+=`<figure class="interactive" id="native-${kind}"><header class="figure-heading"><h3>${spec.title} · HTML 복원</h3><a href="${r.href}">원본과 비교</a></header><div data-flash-native="${kind}"></div><figcaption>움직임과 시간 그래프는 같은 계산을 사용합니다. 원본 곡선과 보강한 운동 화면의 차이를 함께 표시합니다.</figcaption></figure>`;}
  return `<section class="content-row" id="original-flash"><h2>원본 애니메이션</h2><div class="row-body"><p>원본의 버튼과 슬라이더로 움직임과 그래프를 함께 살펴보세요.</p>${nativeHTML}${rs.slice().sort((a,b)=>index(a)-index(b)).map(figure).join('')}</div></section>`;
 };
 fs.writeFileSync(root+'/assets/flash-catalog.json',JSON.stringify({author:manifest.author,engine:manifest.engine,files:manifest.files.map(({tags,dependencyCandidates,...r})=>r),failures:manifest.failures}));
 const extra=`<div class="page-heading"><div><p class="chapter-name">물리의 이해 · 웹교재</p><h1>원본 애니메이션</h1></div></div><p>정기수 교수님께서 제작하신 원본 애니메이션을 웹에서 재생합니다. 움직이는 그림과 계산 그래프, 화면 안의 조작 기능을 함께 살펴볼 수 있습니다.</p><div data-flash-viewer></div><div data-flash-library><form class="catalog-filters" role="search"><label>애니메이션 검색<input type="search" data-flash-search placeholder="제목 또는 단원 이름"></label><label>대단원<select data-flash-chapter><option value="">전체</option>${[...new Set(pages.map(p=>p.section))].map(s=>`<option>${esc(s)}</option>`).join('')}</select></label></form><p data-flash-count role="status"></p><ol class="catalog-list" data-flash-list></ol><div class="catalog-paging"><button data-flash-previous>← 이전 목록</button><span data-flash-page></span><button data-flash-next>다음 목록 →</button></div></div><noscript>애니메이션 목록과 재생에는 JavaScript가 필요합니다. 교재 페이지 안에서는 원본 출처를 확인할 수 있습니다.</noscript>`;
 const hasNative=id=>(byLesson.get(id)||[]).some(r=>r.source.endsWith('/harmoniccircular.swf')||Object.values(oscillatorSpecs).some(s=>r.source.endsWith('/'+s.source)));
 return {section,target,extra,hasNative,files:manifest.files,figure,count:manifest.files.length};
}
