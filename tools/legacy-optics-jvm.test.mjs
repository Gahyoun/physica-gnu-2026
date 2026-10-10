import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import crypto from 'node:crypto';
test('49,600 preserved original JVM optics outputs match the independent HTML kernels',()=>{
 const meta=JSON.parse(fs.readFileSync(new URL('../docs/legacy-optics-jvm-reference/metadata.json',import.meta.url)));
 for(const [file,hash]of Object.entries(meta.files))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('../docs/legacy-optics-jvm-reference/'+file,import.meta.url))).digest('hex'),hash,file);
 assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('./legacy-optics-rest-reference.java',import.meta.url))).digest('hex'),meta.probeSha256);
 const result=JSON.parse(execFileSync(process.execPath,[fileURLToPath(new URL('./legacy-optics-rest-compare.mjs',import.meta.url)),fileURLToPath(new URL('../docs/legacy-optics-jvm-reference',import.meta.url))],{encoding:'utf8'}));
 assert.equal(Object.values(result).reduce((n,r)=>n+r.count,0),49600);
 for(const [kernel,r]of Object.entries(result)){assert.equal(r.failed,0,kernel);assert.ok(Number.isFinite(r.max),kernel);}
});
