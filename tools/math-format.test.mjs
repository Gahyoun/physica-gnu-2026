import test from 'node:test';import assert from 'node:assert/strict';
import {mathText,plainMathTitle,cleanTitle} from './math-format.mjs';
test('Both inline delimiters and display delimiters compile safely',()=>{
 const html=mathText(String.raw`<img> \(k_BT\), $\alpha$, \[\frac{a}{b}\], $$H_2$$`);
 assert.ok(html.startsWith('&lt;img&gt; '));assert.equal((html.match(/class="katex"/g)||[]).length,4);assert.ok(html.includes('<msub>'));assert.ok(html.includes('<mfrac>'));
 assert.throws(()=>mathText(String.raw`$\unknowncommand{x}$`));
});
test('Text-only title paths preserve Greek symbols and subscripts',()=>{
 assert.equal(plainMathTitle(String.raw`$(\alpha,p)$ 반응`),'(α,p) 반응');
 assert.equal(plainMathTitle(String.raw`$(n, \gamma)$ 반응`),'(n,γ) 반응');
 assert.equal(plainMathTitle('$H_1$'),'H₁');
 assert.equal(plainMathTitle(String.raw`$\vec{F}_{\mathrm{net}}$`),'F⃗ₙₑₜ');
 assert.equal(cleanTitle('소금 결정__h__'),'소금 결정');
});

import fs from 'node:fs';import crypto from 'node:crypto';
test('All compiled mathematical reading pages retain current responsive browser evidence',()=>{
 const root=new URL('../',import.meta.url),r=JSON.parse(fs.readFileSync(new URL('docs/math-ui-report.json',root)));
 assert.equal(r.passed,true);assert.deepEqual(r.widths,[320,768,1360]);assert.equal(r.observed,r.expected);assert.equal(r.expected,r.pages*3);assert.ok(r.pages>=570);assert.equal(r.errors.length,0);
 for(const [f,h]of Object.entries(r.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL(f,root))).digest('hex'),h,'Stale formula evidence: '+f);
 for(const v of r.results){assert.equal(v.passed,true,v.file+'/'+v.width);assert.equal(v.mathErrors,0);assert.deepEqual(v.raw,[]);assert.deepEqual(v.clipped,[]);assert.equal(v.pageOverflow,false);}
});
