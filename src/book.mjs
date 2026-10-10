import fs from 'node:fs';
import {pages as detailedPages} from './content.mjs';
import {guides} from './topic-guides.mjs';
import {sectionContent} from './section-content.mjs';
export const sourceOf=p=>p.source.startsWith('http')?p.source:'http://physica.gnu.ac.kr/phtml/modern/q_statistics/'+p.source;
const catalog=JSON.parse(fs.readFileSync(new URL('./catalog.json',import.meta.url)));
const survey=JSON.parse(fs.readFileSync(new URL('./book-survey.json',import.meta.url)));
const original=new Map(survey.pages.map(p=>[p.id,p]));
const detailed=new Map(detailedPages.map(p=>[sourceOf(p),p]));
export function normalizeTex(raw){
 return raw.replace(/\\label\{[^}]*\}/g,'').replace(/\\require\{[^}]*\}/g,'')
  .replace(/\{split\}/g,'{aligned}').replace(/\{multline\}/g,'{gathered}')
  .replace(/_\\bar\{([^}]*)\}/g,'_{\\bar{$1}}')
  .replace(/\\bbox\[[^\]]*\]/g,'\\boxed').replace(/\bk\s*T\b/g,'k_BT');
}
export const legacyMacros={'\\array':'\\begin{matrix}#1\\end{matrix}','\\matrix':'\\begin{matrix}#1\\end{matrix}','\\eqalign':'\\begin{aligned}#1\\end{aligned}','\\cases':'\\begin{cases}#1\\end{cases}','\\scr':'\\mathcal'};
const p=text=>({type:'p',text});
const eq=tex=>({type:'equation',tex:normalizeTex(tex),legacy:true});
function sourceEquation(lessonId,tex){
 // Keep the archived survey intact; correct identified source typos in the reading edition.
 if(lessonId==='7-3-1-1')return tex.replace('{^{43}_{21}\\mathrm{Se}^*}','{^{43}_{21}\\mathrm{Sc}^*}');
 if(lessonId==='4-7-2-4')return tex.replace('\\varepsilon \\mu \\omega +','\\varepsilon \\mu \\omega^2 +');
 return tex;
}
export const pages=catalog.lessons.map(lesson=>{
 if(detailed.has(lesson.source)){
  const page=detailed.get(lesson.source),sections=page.sections.slice();
  if(!sections.some(s=>s.blocks.some(b=>b.type==='questions')))sections.push({id:'explore',title:'질문과 탐구',blocks:[{type:'questions',items:['같은 에너지 간격의 두 준위에서 온도를 올리면 볼츠만 확률의 비는 어떻게 바뀌는가?','입자를 구별할 때와 구별하지 않을 때 점유 배열의 상태수가 달라지는 이유를 설명하라.']}]});
  return {...page,sections,...{id:lesson.id,section:lesson.section,subsection:lesson.subsection,page:lesson.page,edition:'restored'}};
 }
 const guide=guides[lesson.title];if(!guide)throw Error('Missing topic guide: '+lesson.title);
 const record=original.get(lesson.id);if(!record)throw Error('Missing source survey: '+lesson.id);
 const safeSections=lesson.title==='핵무기'?[]:record.sections.map(s=>({...s,equations:s.equations.filter(tex=>!(lesson.id==='1-1-1-1'&&tex.includes('\\frac{dm}{dt}'))).map(tex=>sourceEquation(lesson.id,tex))}));
 const anchors=new Set();
 const sections=[{id:'guide',title:'학습 핵심',blocks:[p(guide.intro),p(guide.insight)]},
  ...safeSections.map((s,i)=>{const anchor=s.anchor&&!anchors.has(s.anchor)?s.anchor:'';if(anchor)anchors.add(anchor);return {id:'source-'+i,title:s.title,originalAnchor:anchor,blocks:sectionContent[lesson.id]?.[s.title]|| (s.equations.length?s.equations.map(eq):(()=>{throw Error('Missing section explanation: '+lesson.id+' / '+s.title);})())};})];
 sections.push({id:'summary',title:'핵심 관계와 탐구',blocks:[eq(guide.tex),{type:'questions',items:[guide.question]}]});
 if(guide.model)sections.push({id:'lab',title:'직접 살펴보기',blocks:[{type:'lab',id:'topic-lab',model:guide.model,topic:lesson.title,caption:'이 주제의 기본 관계를 살펴보는 보충 탐구입니다. 원본의 개별 애니메이션을 재현한 프로그램은 아닙니다.'}]});
 return {...lesson,file:'lesson-'+lesson.id+'.html',subtitle:lesson.title+' · '+lesson.page+'쪽',group:lesson.subsection,edition:'learning',sections,
  media:lesson.title==='핵무기'?[]:record.media};
});
export const pageBySource=new Map(pages.map(p=>[sourceOf(p),p]));
export function localHref(source){
 const [base,hash]=source.split('#'),page=pageBySource.get(base);if(!page)return null;
 if(!hash)return page.file;
 const anchor=decodeURIComponent(hash),section=page.sections.find(s=>s.originalAnchor===anchor||s.title===anchor);
 return page.file+(section?(section.originalAnchor?'#'+encodeURIComponent(section.originalAnchor):'#section-'+section.id):'');
}
