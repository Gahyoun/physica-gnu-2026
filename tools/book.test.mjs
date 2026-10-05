import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {pages,localHref,legacyMacros} from '../src/book.mjs';
import {models,collision,damped,fresnel,airy,daughter,laplace,hoDensity} from '../assets/book-models.mjs';
const require=createRequire(import.meta.url),katex=require('../vendor/katex/katex.min.js');
const near=(a,b,tol=1e-8)=>assert.ok(Math.abs(a-b)<tol,`${a} ≠ ${b}`);
function integral(fn,a,b,n=4000){const h=(b-a)/n;let sum=0;for(let i=0;i<n;i++)sum+=fn(a+(i+.5)*h);return sum*h;}
test('all chapter pages keep original order and have learning material and valid mathematics',()=>{
 assert.equal(pages.length,566);assert.equal(new Set(pages.map(p=>p.file)).size,566);
 const counts=Object.values(pages.reduce((acc,p)=>(acc[p.section]=(acc[p.section]||0)+1,acc),{}));assert.deepEqual(counts,[29,65,28,43,178,164,59]);
 for(const p of pages){
  assert.ok(p.sections.flatMap(s=>s.blocks).some(b=>b.type==='p'&&b.text.length>30),p.id);
  assert.ok(p.sections.flatMap(s=>s.blocks).some(b=>b.type==='questions'),p.id);
  assert.ok(!p.sections.flatMap(s=>s.blocks).some(b=>b.type==='source-link'),`Forwarding-only block: ${p.id}`);
  for(const section of p.sections)assert.ok(section.blocks.length,`${p.id}: ${section.title}`);
  for(const b of p.sections.flatMap(s=>s.blocks)){
   if(b.type==='equation')assert.doesNotThrow(()=>katex.renderToString(b.tex,{displayMode:true,throwOnError:true,strict:'ignore',macros:b.legacy?legacyMacros:{}}),p.id);
   if(b.type==='lab')assert.ok(models[b.model],p.id);
  }
 }
 const c=JSON.parse(fs.readFileSync(new URL('../src/catalog.json',import.meta.url)));for(const r of c.lessons)assert.equal(localHref(r.source),pages.find(p=>p.id===r.id).file);
});
test('supplementary models keep finite readouts at parameter boundaries',()=>{
 for(const [name,m] of Object.entries(models)){
  const initial=Object.fromEntries(m.controls.map(c=>[c.key,c.value]));
  const states=[initial,...m.controls.flatMap(c=>[c.min,c.max].map(v=>({...initial,[c.key]:v}))),Object.fromEntries(m.controls.map(c=>[c.key,c.min])),Object.fromEntries(m.controls.map(c=>[c.key,c.max]))];
  for(const state of states)for(const t of [0,1,10]){
   const r=m.calculate(state,t);
   for(const [label,value] of Object.entries(r.values||{}))if(typeof value==='number')assert.ok(Number.isFinite(value),`${name}: ${label}`);
   for(const p of r.points||[])assert.ok(Number.isFinite(p.x)&&Number.isFinite(p.y),name);
   if(r.curves){assert.ok(r.xmax>r.xmin&&r.ymax>r.ymin,name);for(const c of r.curves){let finite=0;for(let i=0;i<=30;i++){const v=c.fn(r.xmin+(r.xmax-r.xmin)*i/30);if(Number.isFinite(v))finite++;else assert.ok(Number.isNaN(v),name);}if(name!=='photoelectric'&&name!=='mirror')assert.ok(finite>0,name);}}
  }
 }
});
test('collisions conserve momentum, restitution and elastic energy',()=>{
 for(const [m1,m2,u1,u2] of [[1,1,2,0],[3,.2,4,-2],[.2,5,1,-3]])for(const e of [0,.5,1]){
  const [v1,v2]=collision(m1,m2,u1,u2,e);near(m1*u1+m2*u2,m1*v1+m2*v2);near(v2-v1,e*(u1-u2));
  const before=m1*u1*u1+m2*u2*u2,after=m1*v1*v1+m2*v2*v2;if(e===1)near(before,after);else assert.ok(after<=before+1e-8);
 }
});
test('damped motion has correct initial conditions and a continuous critical limit',()=>{
 for(const g of [0,.1,1,2]){near(damped(0,g),1);near((damped(.0001,g)-damped(0,g))/.0001,0,.0001);}
 for(const t of [1,3,10]){near(damped(t,1-1e-7),damped(t,1),1e-6);near(damped(t,1+1e-7),damped(t,1),1e-6);}
});
test('optical limits and probability normalization',()=>{
 const normal=fresnel(1,1.5,0);near(normal.Rs,.04);near(normal.Rp,.04);near(fresnel(1,1.5,Math.atan(1.5)*180/Math.PI).Rp,0);assert.deepEqual(fresnel(1.5,1,60),{Rs:1,Rp:1,t:null});
 near(airy(0),1);assert.ok(airy(3.8317059702)<1e-15);
 for(let n=0;n<=6;n++)near(integral(x=>hoDensity(n,x),-12,12),1,1e-7);
 const q=models['quantum-superposition'];for(const mix of [0,.2,.5,1])for(const t of [0,.5,1])near(integral(q.calculate({mix},t).curves[0].fn,0,1),1,1e-7);
});
test('daughter nucleus equal-rate limit and Laplace convergence',()=>{
 const a=.5;for(const t of [0,1,10]){near(daughter(t,a,a),a*t*Math.exp(-a*t));near(daughter(t,a,a+1e-6),daughter(t,a,a),1e-6);}
 const initial=laplace(1),final=laplace(1000);assert.ok(final.residual<initial.residual/1000);for(const row of final.grid)for(const v of row)assert.ok(v>=0&&v<=1);
});

test('Source-section rewrites cover exact source headings with explanations, not forwarding links',async()=>{
 const {sectionContent}=await import('../src/section-content.mjs');
 for(const [id,sections] of Object.entries(sectionContent)){const page=pages.find(p=>p.id===id);assert.ok(page);for(const [title,blocks] of Object.entries(sections)){const section=page.sections.find(s=>s.title===title);assert.ok(section,`${id}: ${title}`);assert.ok(blocks.some(b=>b.type==='p'&&b.text.length>80));assert.ok(!section.blocks.some(b=>b.type==='source-link'));assert.deepEqual(section.blocks,blocks);}}
});
