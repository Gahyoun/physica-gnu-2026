// Revalidate prior desktop/rendering evidence against an exact touch-only CSS diff.
// Do not change historical observation dates or claim the old cases were rerun.
import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const parent='7c7d519ac1bb42ec5bf95ef3615acbf8b1134305',file='assets/style.css';
const patch='/* SVG circles alone do not prevent Chromium from cancelling a touch drag. */\n[data-chain-scene] svg,[data-mechanics-scene] svg{touch-action:none}\n';
const before=execFileSync('git',['show',parent+':'+file],{encoding:'utf8'}),after=fs.readFileSync(file,'utf8');
assert.equal(after.split(patch).length,2);assert.equal(after.replace(patch,''),before);
const hash=v=>crypto.createHash('sha256').update(v).digest('hex'),oldHash=hash(before),newHash=hash(after);
for(const f of fs.readdirSync('assets').filter(f=>f.endsWith('.mjs'))){const path='assets/'+f;assert.equal(hash(fs.readFileSync(path)),hash(execFileSync('git',['show',parent+':'+path])),'A changed module requires separate evidence: '+path);}
const touch=JSON.parse(fs.readFileSync('docs/touch-drag-local-ui-report.json'));
assert.equal(touch.passed,true);assert.equal(touch.observed,26);assert.equal(touch.nativeModelHashes[file],newHash);
const proof={date:new Date().toISOString(),baseCommit:parent,file,beforeSHA256:oldHash,afterSHA256:newHash,exactAddedCSS:patch,scope:'Only touch-action on two SVG scene containers changes. All JavaScript, mathematical functions, SVG geometry, control values, timers, CSV and other CSS are byte-identical. Prior desktop/rendering/unrelated touch observations are retained with their original dates; they were not rerun by this revalidation. The 13 affected models have a separate real Chromium touch regression report (26 mobile/tablet cases).',touchReport:'docs/touch-drag-local-ui-report.json'};
const updated=[];
for(const f of fs.readdirSync('docs').filter(f=>f.endsWith('report.json')&&(f!=='final-qa-playback-report.json'||process.env.PHYSICA_INCLUDE_FINAL_PLAYBACK==='1'))){
 const path='docs/'+f,r=JSON.parse(fs.readFileSync(path));
 if(r.nativeModelHashes?.[file]!==oldHash)continue;
 r.nativeModelHashes[file]=newHash;r.dependencyRevalidations=[...(r.dependencyRevalidations||[]),proof];
 fs.writeFileSync(path,JSON.stringify(r,null,2)+'\n');updated.push(path);
}
const record='docs/touch-drag-dependency-revalidation.json',previous=fs.existsSync(record)?JSON.parse(fs.readFileSync(record)):null;
const retained=previous?.beforeSHA256===oldHash&&previous?.afterSHA256===newHash?previous.updatedReports:[];
fs.writeFileSync(record,JSON.stringify({...proof,updatedReports:[...new Set([...retained,...updated])]},null,2)+'\n');
console.log('Exact touch-only CSS diff verified; retained evidence revalidated:',updated.length);
