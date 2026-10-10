import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const root=new URL('../',import.meta.url),read=f=>fs.readFileSync(new URL(f,root),'utf8');
const catalog=JSON.parse(read('assets/catalog.json'));
const rows=file=>[...read(file).matchAll(/<li data-catalog-row\b[^>]*>[\s\S]*?<\/li>/g)].map(m=>m[0]);
test('Local catalog destinations are available textbook links, not falsely pending restorations',()=>{
 for(const file of ['materials.html','browse.html','headwords.html'])for(const row of rows(file)){
  const href=row.match(/<a href="([^"]+)"/)[1],local=!href.startsWith('http');
  assert.equal(row.includes('data-restored="true"'),local,`${file}: ${href}`);
  if(local){const [target,fragment]=href.split('#');assert.ok(fs.existsSync(new URL(target.replaceAll('&amp;','&'),root)),target);if(fragment)assert.ok(read(target).includes('id="'+decodeURIComponent(fragment)+'"'),href);}
  assert.ok(!row.includes('복원 준비 중'),file);
 }
 for(const r of catalog.search)if(r.href&&!r.href.startsWith('http'))assert.equal(r.restored,true,r.title);
});
test('The 3D box Java applet links to its textbook section without claiming an HTML animation port',()=>{
 const source='http://physica.gnu.ac.kr/phtml/bank/sim/MotionBox3DApp.html';
 const r=catalog.search.find(r=>r.source===source);assert.ok(r);assert.equal(r.href,'lesson-6-4-8-1.html#section-source-1');assert.equal(r.restored,true);assert.equal(r.linkedTextbook,true);assert.equal(r.edition,'learning');
 const row=rows('materials.html').find(r=>r.includes(source));assert.ok(row.includes('교재에서 보기'));assert.ok(!row.includes('리마스터 애니메이션'));
});
