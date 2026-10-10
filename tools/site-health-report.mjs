// Aggregate actual browser observations; never manufacture new per-model results.
import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const read=f=>JSON.parse(fs.readFileSync(f)),hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const base='https://gahyoun.github.io/physica-gnu-2026/';
const navigation=read('docs/browser-report.json'),book=read('docs/book-browser-report.json'),math=read('docs/math-ui-report.json'),remaster=read('docs/remaster-ui-report.json'),links=read('docs/internal-link-health-report.json'),play=read('docs/final-qa-playback-report.json'),touch=read('docs/touch-drag-ui-report.json'),assets=read('docs/deployed-assets-qa-report.json'),unit=read('docs/final-qa-unit-report.json');
for(const r of [navigation,book,remaster,touch,assets])assert.equal(r.base,base);
for(const r of [navigation,book,math,remaster,play,touch])assert.deepEqual(r.errors,[]);
for(const r of [math,play,touch])for(const [f,h]of Object.entries(r.nativeModelHashes))assert.equal(hash(f),h,'Stale QA dependency: '+f);
assert.equal(book.readingPages,566);assert.equal(book.modelPages,79);assert.equal(book.sliderChecks,306);
assert.equal(math.passed,true);assert.equal(math.observed,1713);assert.deepEqual(links.issues,[]);
assert.equal(play.expected,518);assert.equal(play.observed,518);assert.equal(new Set(play.results.map(r=>r.id)).size,518);assert.equal(play.summary.failed,0);assert.ok(play.results.every(r=>r.passed));
assert.equal(touch.passed,true);assert.equal(touch.observed,26);assert.equal(assets.passed,true);assert.equal(unit.failed,0);assert.equal(unit.passed,unit.tests);
assert.equal(remaster.drag,true);assert.equal(remaster.keyboard,true);assert.equal(remaster.originalPlaybackExamples,2);
const report={date:new Date().toISOString(),base,checkedCommit:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),passed:true,
 environment:'Headless Chromium on macOS; 320/768/1024/1360 viewport and actual Chromium touch input in mobile/tablet emulation. No physical-device or Safari/Firefox coverage.',
 navigation:{pages:navigation.pages.length,widths:navigation.widths,interactionChecks:navigation.interactionChecks,errors:0,report:'docs/browser-report.json'},
 textbook:{pages:book.readingPages,supplementalModels:book.modelPages,sliderBoundaryChecks:book.sliderChecks,report:'docs/book-browser-report.json'},
 math:{pages:math.pages,displayChecks:math.observed,errors:0,report:'docs/math-ui-report.json'},
 internalReferences:{pages:links.pages,references:links.references,issues:0,scope:links.scope,report:'docs/internal-link-health-report.json'},
 publicRemasters:{files:518,width:1360,...play.summary,report:'docs/final-qa-playback-report.json',scope:play.scope,dependencyRevalidations:play.dependencyRevalidations||[]},
 mobileTablet:{models:13,touchCases:touch.observed,widths:touch.widths,passed:true,report:'docs/touch-drag-ui-report.json'},
 repair:{problem:'Chromium cancelled touch dragging on an SVG mass before pointerup, preventing release-triggered playback.',fix:'Apply touch-action:none to the chain/mechanics SVG scene containers; all numerical and animation code unchanged.',affectedModels:13,localTouchCases:26,publicTouchCases:26,mouseKeyboardAndCSVPassed:true,originalRuffleExamples:2,deployedAndConfirmed:true,beforeReport:'docs/touch-drag-before-fix-report.json',report:'docs/touch-drag-ui-report.json'},
 deployedAssets:{files:assets.observed,passed:true,report:'docs/deployed-assets-qa-report.json'},
 codeTests:{tests:unit.tests,passed:unit.passed,failed:unit.failed,report:'docs/final-qa-unit-report.json'},
 fullOriginalInputEquivalence:false};
fs.writeFileSync('docs/site-health-report.json',JSON.stringify(report,null,2)+'\n');
console.log('Final public QA verified: 566 pages, 518 remasters, 1713 math checks, 26 real touch cases.');
