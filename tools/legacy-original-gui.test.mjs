import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
const root=new URL('../',import.meta.url),json=f=>JSON.parse(fs.readFileSync(new URL(f,root)));
test('All 80 added Java identities retain original GUI evidence and truthful limitations',()=>{
 const batch=json('docs/legacy-java80-batch.json'),gui=json('docs/legacy-original-gui-report.json'),specs=json('assets/legacy-specs.json');
 assert.equal(batch.programs.length,80);assert.equal(new Set(batch.programs.map(p=>p.id)).size,80);
 assert.equal(gui.programConfigurations,81);assert.equal(gui.results.length,81);
 assert.equal(gui.harnessSha256,crypto.createHash('sha256').update(fs.readFileSync(new URL('tools/legacy-original-gui-reference/OriginalAppletProbe.java',root))).digest('hex'));
 for(const p of batch.programs){const spec=specs.find(s=>s.id===p.id);assert.ok(spec?.isJava,p.id);assert.equal(spec.source,p.source);const sources=new Set([spec.source,...spec.sourceAliases]);assert.ok(gui.results.some(r=>r.sources.some(s=>sources.has(s))),p.id+' missing actual original GUI attempt');}
 const counts=Object.fromEntries(['passed','partial','blocked'].map(s=>[s,gui.results.filter(r=>r.status===s).length]));assert.deepEqual(counts,gui.summary);assert.deepEqual(counts,batch.guiSummary);
 assert.equal(gui.results.reduce((n,r)=>n+(r.discreteCombinations||0),0),batch.finiteDiscreteCases);
 assert.equal(gui.results.reduce((n,r)=>n+(r.rangeBoundaryCases||0),0),batch.sliderBoundaryCases);
 for(const r of gui.results){assert.notEqual(r.capped,true,r.class+' capped input cases');assert.equal(r.pointerGesturesExhaustive||false,false);assert.equal(r.textFieldsEdited||false,false);if(r.status!=='blocked')assert.ok(Array.isArray(r.controls),r.class);if(r.status==='passed')assert.equal(r.discreteCombinations,r.discreteProduct,r.class+' incomplete finite inputs');if(r.status!=='passed')assert.ok(r.error,r.class+' missing limitation');assert.ok(Object.keys(r.cacheClassHashes).length,r.class);}
});
