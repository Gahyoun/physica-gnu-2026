// Derive progress from actual per-file evidence, never from assignment counts.
import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),read=p=>JSON.parse(fs.readFileSync(new URL(p,root)));
const assignment=read('docs/parallel-remaster-225.json'),catalog=read('assets/flash-catalog.json').files,runtime=read('docs/original-runtime-evidence.json');
const groups=['nuclear-next','nuclear-next-structure','modern-next','modern-next-semiconductor','modern-next-rotor','general-next-phasor','general-next-molecule','general-next-field','general-next-boundary','optics-next','optics-next-lattice','optics-next-surface'];
const evidence=groups.map(group=>({group,source:read(`docs/${group}-source-report.json`),ui:read(`docs/${group}-ui-report.json`)}));
for(const {group,source,ui} of evidence)for(const report of [source,ui]){
 for(const [file,hash]of Object.entries(report.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL(file,root))).digest('hex'),hash,`Stale ${group}: ${file}`);
 assert.ok(report.results.every(row=>row.passed),`Failed ${group} evidence`);
}
const allIDs=Object.values(assignment.groups).flat().map(row=>row.id);
assert.equal(new Set(allIDs).size,assignment.total);
const results=Object.fromEntries(Object.entries(assignment.groups).map(([group,rows])=>[group,rows.map(row=>{
 const item=catalog.find(item=>item.id===row.id);assert.ok(item);
 const proof=evidence.find(proof=>proof.source.results.some(item=>item.id===row.id));
 const source=proof?.source.results.find(item=>item.id===row.id),ui=proof?.ui.results.filter(item=>item.id===row.id)||[];
 const implemented=Boolean(item.nativeHref),verified=implemented&&source?.passed&&ui.length>0&&ui.every(item=>item.passed);
 if(implemented)assert.ok(verified,`Missing current proof: ${row.id}`);
 return {id:row.id,title:item.title,source:item.source,originalSHA256:item.sha256,htmlHref:item.nativeHref||null,htmlImplemented:implemented,sourceAndNativeUIVerified:Boolean(verified),sourceReport:proof?`docs/${proof.group}-source-report.json`:null,sourceComparisons:source?.comparisons||0,uiReport:proof?`docs/${proof.group}-ui-report.json`:null,originalNumericalRuntime:runtime.files.find(item=>item.id===row.id)?.numerical||null,allOriginalInputHistoriesCompared:false};
})]));
const files=Object.values(results).flat(),implemented=files.filter(row=>row.htmlImplemented).length;
const report={date:new Date().toISOString(),assigned:assignment.total,baselineHTML:assignment.baselineNative,newHTML:implemented,totalHTML:catalog.filter(row=>row.nativeHref).length,remainingAssigned:assignment.total-implemented,sourceComparisons:files.reduce((sum,row)=>sum+row.sourceComparisons,0),groups:Object.fromEntries(Object.entries(results).map(([group,rows])=>[group,{assigned:rows.length,implemented:rows.filter(row=>row.htmlImplemented).length,remaining:rows.filter(row=>!row.htmlImplemented).length,files:rows}])),fullOriginalEquivalence:false,scope:'Individual fresh HTML/SVG implementation, current private source-function comparisons and native UI evidence. Actual original runtime samples are separate bounded reports. An assigned file, exported script or successful Ruffle startup never counts as an HTML port or all input histories.'};
assert.equal(report.totalHTML,report.baselineHTML+report.newHTML);
fs.writeFileSync(new URL('docs/parallel-remaster-progress.json',root),JSON.stringify(report,null,2)+'\n');
console.log(`${report.newHTML}/${report.assigned} assigned ports verified; ${report.totalHTML}/518 HTML; ${report.remainingAssigned} remain.`);
