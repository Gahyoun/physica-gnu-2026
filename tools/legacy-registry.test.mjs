import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
const root=new URL('../',import.meta.url),read=f=>fs.readFileSync(new URL(f,root),'utf8'),json=f=>JSON.parse(read(f));
test('Registered legacy ports have actual lesson hosts, loaders, theme styles and readable audit records',()=>{
 const programs=json('assets/legacy-specs.json');assert.equal(new Set(programs.map(r=>r.id)).size,programs.length);
 for(const r of programs){const [file,anchor]=r.href.split('#'),html=read(file);assert.ok(html.includes('id="'+anchor+'"'),r.id);assert.ok(html.includes('data-legacy-id="'+r.id+'"'),r.id);assert.ok(html.includes('src="assets/legacy.mjs"'),r.id);assert.ok(html.includes('href="assets/legacy.css"'),r.id);assert.ok(read('docs/legacy-'+r.group+'-audit.md').length>100,r.id);}
});
test('Java restoration counts keep JavaScript ports and unported executable identities distinct',()=>{
 const programs=json('assets/legacy-specs.json'),r=json('docs/legacy-restoration-ledger.json');assert.equal(r.htmlPrograms,programs.length);assert.equal(r.javaHTMLPrograms,programs.filter(p=>p.isJava).length);assert.equal(r.javaExecutables,r.programs.length);assert.equal(r.portedJavaExecutables+r.unportedJavaExecutables,r.javaExecutables);assert.equal(r.javaHTMLPrograms,r.portedJavaExecutables);assert.equal(r.htmlPrograms-r.javaHTMLPrograms,2);assert.equal(r.unportedJavaExecutables,0);assert.ok(r.programs.filter(p=>!p.htmlPort).every(p=>p.sources.length));
});
test('Every current legacy port has actual integrated browser evidence for the current modules',()=>{
 const p=json('assets/legacy-specs.json'),r=json('docs/legacy-ui-report.json');assert.equal(r.passed,true);assert.equal(r.programs,p.length);assert.deepEqual(r.errors,[]);assert.deepEqual(r.widths,[320,768,1360]);assert.deepEqual(r.results.map(x=>x.id).sort(),p.map(x=>x.id).sort());assert.ok(r.results.every(x=>x.passed));for(const [file,hash]of Object.entries(r.dependencies))assert.equal(crypto.createHash('sha256').update(read(file)).digest('hex'),hash,'Stale legacy browser evidence '+file);
});
