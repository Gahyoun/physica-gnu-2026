// Combine unchanged original audit rows with explicitly re-tested final69 rows.
import fs from 'node:fs';import crypto from 'node:crypto';import assert from 'node:assert/strict';
const read=f=>JSON.parse(fs.readFileSync(f)),hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const all=read('docs/playback-ui-report.json'),fresh=read('docs/final69-playback-ui-report.json'),a=read('docs/parallel-remaster-final69.json');
const ids=new Set(Object.values(a.groups).flat().map(v=>v.id));
assert.equal(all.expected,1554);assert.equal(all.observed,1554);assert.equal(fresh.expected,207);assert.equal(fresh.observed,207);assert.deepEqual(fresh.errors,[]);assert.ok(fresh.results.every(v=>v.passed));
const changed=Object.entries(all.nativeModelHashes).filter(([f,h])=>hash(f)!==h).map(([f])=>f);
assert.ok(changed.every(f=>['assets/general-final69-worker.mjs','assets/native-general-final69.mjs'].includes(f)),'Only isolated general-final69 integration fixes may change between verified rechecks');
for(const [f,h]of Object.entries(fresh.nativeModelHashes))assert.equal(hash(f),h,'Stale recheck '+f);
for(const width of[320,768,1360])for(const id of ids)assert.equal(fresh.results.filter(v=>v.id===id&&v.width===width).length,1);
assert.ok(all.results.filter(v=>!ids.has(v.id)).every(v=>v.passed),'Unrelated models require additional repair');
assert.deepEqual(all.errors,[]);
const retained=all.results.filter(v=>!ids.has(v.id));
all.results=[...retained,...fresh.results];all.date=new Date().toISOString();all.nativeModelHashes=fresh.nativeModelHashes;all.summary={animated:all.results.filter(v=>v.classification==='animated').length,equilibrium:all.results.filter(v=>v.classification==='equilibrium-input-tested').length,static:all.results.filter(v=>v.classification==='static').length,failed:all.results.filter(v=>!v.passed).length};
all.revalidation={report:'docs/final69-playback-ui-report.json',changedFiles:changed,replacedCases:207,retainedUnchangedCases:retained.length,reason:'Worker seek-to-end/play race fixed. Rechecked all final69 in three screen widths; unchanged earlier remaster assets retain their full-collection checks.'};
assert.equal(all.results.length,1554);assert.equal(all.summary.failed,0);fs.writeFileSync('docs/playback-ui-report.json',JSON.stringify(all,null,2)+'\n');console.log('1554 current playback cases verified, including 207 final69 rechecks');
