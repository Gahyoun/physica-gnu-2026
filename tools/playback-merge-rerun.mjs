// A targeted rerun may replace only explicitly affected models; all other
// dependency hashes and all other viewport results must remain unchanged.
import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),read=p=>JSON.parse(fs.readFileSync(new URL(p,root)));
const base=read('docs/playback-ui-report.json'),rerun=read(process.env.PHYSICA_RERUN_REPORT||'docs/playback-rerun-report.json');
const catalog=read('assets/flash-catalog.json').files.filter(row=>row.nativeHref);
const changedAssets=(process.env.PHYSICA_CHANGED_ASSETS||'').split(',').filter(Boolean),ids=(process.env.PHYSICA_RERUN_IDS||'').split(',').filter(Boolean);
assert.ok(ids.length&&changedAssets.length,'Explicit affected IDs and changed assets required');
assert.equal(rerun.observed,ids.length*base.widths.length);
assert.equal(rerun.expected,rerun.observed);assert.equal(rerun.errors.length,0);
assert.ok(rerun.results.every(row=>row.passed));
const keys=new Set();for(const row of rerun.results){assert.ok(ids.includes(row.id));assert.ok(base.widths.includes(row.width));assert.ok(!keys.has(row.id+'/'+row.width));keys.add(row.id+'/'+row.width);}
assert.equal(keys.size,rerun.expected);
for(const row of rerun.results)assert.equal(row.href,catalog.find(r=>r.id===row.id)?.nativeHref,`Rerun targets a stale reading-page route: ${row.id}`);
for(const [file,previous] of Object.entries(base.nativeModelHashes)){
 const current=crypto.createHash('sha256').update(fs.readFileSync(new URL(file,root))).digest('hex');
 assert.equal(rerun.nativeModelHashes[file],current,`Rerun has stale dependency ${file}`);
 if(current!==previous)assert.ok(changedAssets.includes(file),`Unreviewed dependency change: ${file}`);
}
// The affected IDs must include every catalog counterpart that imports a
// changed family. No shared modules are eligible for this narrow replacement.
const families={
 'assets/native-modern-batch50-kp.mjs':'modern-batch50-kp-',
 'assets/native-modern-batch50-crystal.mjs':'modern-batch50-crystal-',
 'assets/native-modern-batch50-periodic.mjs':'modern-batch50-periodic-',
 'assets/modern-batch50-periodic-specs.mjs':'modern-batch50-periodic-',
 'assets/native-optics-batch50.mjs':'opticsbatch50-',
 'assets/native-modern-next.mjs':'modern-next-',
 'assets/native-nuclear-next.mjs':'nuclearnext-',
 'assets/nuclear-next-physics.mjs':'nuclearnext-',
 'assets/native-general-next-phasor.mjs':'general-next-phasor-',
 'assets/native-general-next-molecule.mjs':'general-next-molecule-',
 'assets/native-general-next-boundary.mjs':'general-next-boundary-'
};
// Batch02 modules are isolated by namespace. Any changed batch02 dependency
// requires rerunning its entire discipline; shared historical modules remain ineligible.
for(const file of Object.keys(base.nativeModelHashes)){
 const m=file.match(/^assets\/(?:native-)?(nuclear|general|modern|optics)-batch50b(?:-.*)?\.mjs$/);
 if(m)families[file]=m[1]==='optics'?'opticsbatch50b-':m[1]+'-batch50b-';
}
for(const file of changedAssets){assert.ok(families[file],`Shared/unknown asset requires a full rerun: ${file}`);const prefix='#native-'+families[file];for(const row of catalog.filter(row=>row.nativeHref.includes(prefix)))assert.ok(ids.includes(row.id),`Affected model omitted: ${row.id}`);}
const replacements=new Map(rerun.results.map(row=>[row.id+'/'+row.width,row]));
const superseded=base.results.filter(row=>replacements.has(row.id+'/'+row.width)&&!row.passed).map(({id,width,error,replayFromEnd})=>({id,width,error,replayFromEnd}));
base.results=base.results.map(row=>replacements.get(row.id+'/'+row.width)||row);
base.nativeModelHashes=rerun.nativeModelHashes;base.date=rerun.date;
base.rerunHistory=[...(base.rerunHistory||[]),{date:rerun.date,report:process.env.PHYSICA_RERUN_REPORT||'docs/playback-rerun-report.json',ids,changedAssets,reason:process.env.PHYSICA_RERUN_REASON||'End replay resets current time and integration history immediately; finite playback bars never silently clamp an unbounded internal step. Slow authored timers are observed for up to5seconds.',supersededFailures:superseded}];
base.summary={animated:base.results.filter(row=>row.classification==='animated').length,equilibrium:base.results.filter(row=>row.classification==='equilibrium-input-tested').length,static:base.results.filter(row=>row.classification==='static').length,failed:base.results.filter(row=>!row.passed).length};
assert.equal(base.results.length,catalog.length*base.widths.length);assert.equal(base.observed,base.expected);assert.equal(base.summary.failed,0);assert.equal(base.errors.length,0);
for(const row of base.results)assert.equal(row.href,catalog.find(r=>r.id===row.id)?.nativeHref,`Changed reading-page route requires a real rerun: ${row.id}`);
fs.writeFileSync(new URL('docs/playback-ui-report.json',root),JSON.stringify(base,null,2)+'\n');
console.log(`${base.observed} playback cases passed; ${rerun.observed} targeted replacements with verified unaffected dependencies.`);
