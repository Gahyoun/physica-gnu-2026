import test from 'node:test';import assert from 'node:assert/strict';import {models} from '../assets/book-models.mjs';import {selectedCoordinates,selectedPoints,apparatusModels,apparatusDiagram,energyFlow} from '../assets/book-coupling.mjs';
const state=m=>Object.fromEntries(m.controls.map(c=>[c.key,c.value]));
for(const key of Object.keys(selectedCoordinates))test(key+' selected graph points share slider state and original curve function',()=>{const m=models[key],s=state(m);for(const c of m.controls)for(const v of [c.min,c.value,c.max]){const a={...s,[c.key]:v},r=m.calculate(a,0);for(const p of selectedPoints(key,a,r))assert.equal(p.y,r.curves[p.curve].fn(p.x));}});
test('Carnot heat flow conserves energy for every supported temperature combination',()=>{for(let Th=400;Th<=1200;Th+=10)for(let Tc=100;Tc<=390;Tc+=10){const s={Th,Tc},flow=energyFlow(s,1),r=models.thermo.calculate(s,1),point=selectedPoints('thermo',s,r)[0];assert.ok(Math.abs(flow.heatIn-flow.work-flow.heatOut)<1e-12);assert.equal(point.x,flow.ratio);assert.equal(point.y,flow.efficiency);assert.equal(r.values['선택 효율'],flow.efficiency);assert.ok(flow.work>=0&&flow.work<=1);}assert.notEqual(energyFlow({Th:600,Tc:300},0).phase,energyFlow({Th:600,Tc:300},1).phase);});
test('Apparatus drawings react to inputs that otherwise move only a selected graph point',()=>{for(const key of apparatusModels){const m=models[key],s=state(m);for(const c of m.controls){const variants=[c.min,c.max].map(value=>{const a={...s,[c.key]:value};return apparatusDiagram(key,a,m.calculate(a,0));});assert.notEqual(...variants,key+' '+c.key);assert.ok(variants.every(v=>!v.includes('NaN')&&!v.includes('Infinity')));}}});

test('Every supplementary control has a visible effect on its physical state or graph',()=>{
 for(const [key,m]of Object.entries(models)){const initial=state(m);for(const c of m.controls){const fingerprint=value=>{const s={...initial,[c.key]:value},r=m.calculate(s,1);return JSON.stringify({geometry:r.curves?.map(curve=>Array.from({length:41},(_,i)=>curve.fn(r.xmin+(r.xmax-r.xmin)*i/40)))??r,selection:selectedPoints(key,s,r),apparatus:apparatusModels.has(key)?apparatusDiagram(key,s,r):null});};assert.ok(new Set([c.min,c.value,c.max].map(fingerprint)).size>1,key+' '+c.key);}}
});

test('All79 supplementary models retain current actual-browser control and playback evidence',async()=>{
 const {default:fs}=await import('node:fs'),{createHash}=await import('node:crypto');const r=JSON.parse(fs.readFileSync(new URL('../docs/book-coupling-ui-report.json',import.meta.url)));assert.equal(r.expected,79);assert.equal(r.observed,79);assert.equal(r.passed,true);assert.deepEqual(r.errors,[]);assert.deepEqual(r.widths,[320,768,1360]);
 for(const [f,h]of Object.entries(r.nativeModelHashes))assert.equal(createHash('sha256').update(fs.readFileSync(new URL('../'+f,import.meta.url))).digest('hex'),h,f);
 for(const [key,m]of Object.entries(models)){const v=r.results.find(v=>v.key===key);assert.ok(v?.passed,key);assert.equal(v.controls.length,m.controls.length);assert.ok(v.controls.every(c=>c.visualResponds||c.readoutResponds));if(m.animate)assert.equal(v.playChangesScene,true,key);}
});

test('New physical diagrams retain dark/mobile UI evidence and bounded Carnot flow replay',async()=>{
 const {default:fs}=await import('node:fs'),{createHash}=await import('node:crypto');const r=JSON.parse(fs.readFileSync(new URL('../docs/book-apparatus-ui-report.json',import.meta.url)));assert.equal(r.passed,true);assert.deepEqual(r.errors,[]);assert.equal(r.results.length,27);
 for(const [f,h]of Object.entries(r.nativeModelHashes))assert.equal(createHash('sha256').update(fs.readFileSync(new URL('../'+f,import.meta.url))).digest('hex'),h,f);
 for(const width of [320,768,1360])for(const key of ['thermo',...apparatusModels]){const v=r.results.find(v=>v.key===key&&v.width===width);assert.ok(v?.passed&&v.darkThemeFinite,key+' '+width);if(key==='thermo'){assert.equal(v.flowLoopBounded,true);assert.equal(v.flowDotSharesPhase,true);assert.equal(v.flowMarkerContrast.length,2);for(const t of v.flowMarkerContrast)assert.ok(t.markers.every(dot=>dot.opacity===.65&&dot.stroke==='none'&&dot.contrast>=3));}}
});
