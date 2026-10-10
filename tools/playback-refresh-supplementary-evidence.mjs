// Preserve Flash playback evidence only for an isolated supplementary drawing change.
// Fresh supplementary UI evidence is mandatory; no Flash implementation hash may change.
import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const root=new URL('../',import.meta.url),read=f=>fs.readFileSync(new URL(f,root),'utf8'),json=f=>JSON.parse(read(f)),hash=f=>crypto.createHash('sha256').update(read(f)).digest('hex');
const file='assets/book-coupling.mjs',report=json('docs/playback-ui-report.json'),catalog=json('assets/flash-catalog.json').files.filter(v=>v.nativeHref);
assert.equal(report.expected,catalog.length*3);assert.equal(report.observed,report.expected);assert.equal(report.summary.failed,0);assert.deepEqual(report.errors,[]);assert.ok(report.results.every(v=>v.passed));
for(const row of report.results)assert.equal(row.href,catalog.find(v=>v.id===row.id)?.nativeHref);
const changed=Object.entries(report.nativeModelHashes).filter(([f,h])=>hash(f)!==h).map(([f])=>f);assert.deepEqual(changed,[file]);
const old=execFileSync('git',['show','HEAD:'+file],{cwd:root,encoding:'utf8'}),current=read(file);
const surrounding=s=>{const start=s.indexOf('export function flowDiagram('),end=s.indexOf('export function apparatusDiagram(',start);assert.ok(start>=0&&end>start);return [s.slice(0,start),s.slice(end)];};assert.deepEqual(surrounding(current),surrounding(old),'Only the supplementary flow drawing may change');
assert.equal(current,old.replace('r="5" fill="${color}"/>','r="6" fill="var(--ui-bg)" fill-opacity=".65" stroke="none"/>'),'This preservation applies only to the reviewed marker style change');
const roots=['assets/flash-native.mjs','assets/app.mjs'],reachable=new Set();
function walk(f){if(reachable.has(f))return;reachable.add(f);for(const match of read(f).matchAll(/["'](\.\/[\w./-]+\.mjs)["']/g)){const u=new URL(match[1],new URL(f,root));assert.ok(u.href.startsWith(root.href));walk(decodeURIComponent(u.href.slice(root.href.length)));}}
roots.forEach(walk);assert.ok(!reachable.has(file),'Supplementary drawing is reachable from a Flash renderer');
assert.ok(read('assets/book-labs.mjs').includes("document.querySelectorAll('[data-book-lab]')"));
for(const f of ['docs/book-coupling-ui-report.json','docs/book-apparatus-ui-report.json']){const evidence=json(f);assert.equal(evidence.passed,true);assert.deepEqual(evidence.errors,[]);for(const [dep,h]of Object.entries(evidence.nativeModelHashes))assert.equal(hash(dep),h,'Stale supplementary evidence '+dep);}
report.dependencyRefreshes=[...(report.dependencyRefreshes||[]),{date:new Date().toISOString(),file,previousHash:report.nativeModelHashes[file],currentHash:hash(file),scope:'Only flowDiagram changed. Its module is unreachable from either audited Flash host renderer; book-labs mounts separate data-book-lab hosts. All other audit hashes and Flash routes are unchanged. Flash test timestamps remain original.',roots,reachableModules:[...reachable].sort(),supplementaryEvidence:['docs/book-coupling-ui-report.json','docs/book-apparatus-ui-report.json']}];
report.nativeModelHashes[file]=hash(file);fs.writeFileSync(new URL('docs/playback-ui-report.json',root),JSON.stringify(report,null,2)+'\n');console.log('Preserved '+report.observed+' Flash cases after verifying isolated supplementary drawing and fresh UI evidence.');
