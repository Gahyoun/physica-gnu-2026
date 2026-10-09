import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';
import {scattering,scatteringWave,norm2,oscillatorWave,hydrogenRadial,sphericalAmplitude,quantumWave,quantumSpecs,quantumDefaults,boxProbability,dispersionSpeeds} from '../assets/quantum-physics.mjs';
const close=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<t,`${a} / ${b}`);
const integral=(fn,a,b,n)=>{let sum=0;const dx=(b-a)/n;for(let i=0;i<=n;i++)sum+=(i===0||i===n?.5:1)*fn(a+i*dx);return sum*dx;};
test('Step and barrier preserve flux, wave continuity and derivative continuity, including zero width and threshold',()=>{
 for(const barrier of [false,true])for(const energy of [.1,1,10,20])for(const height of [-100,-5,0,.1,1,10,20,100])for(const width of [0,.02,1,4]){const z=scattering({energy,height,width},barrier);close(z.reflection+z.transmission,1,1e-9);assert.ok(z.transmission>=-1e-12&&z.transmission<=1+1e-12);for(const x of barrier?[-width/2,width/2]:[0]){const e=1e-6,left=scatteringWave(z,x-e,.37),mid=scatteringWave(z,x,.37),right=scatteringWave(z,x+e,.37);for(const k of ['x','y']){close(left[k],right[k],2e-5);close((mid[k]-left[k])/e,(right[k]-mid[k])/e,1e-3);}}}
});
test('Harmonic eigenfunctions have the original √π normalization and are orthogonal',()=>{
 for(let n=0;n<=17;n++)close(integral(x=>oscillatorWave(n,x)**2,-12,12,12000),Math.sqrt(Math.PI),1e-9);
 for(const [n,m] of [[0,1],[0,2],[2,4],[7,9],[13,17]])close(integral(x=>oscillatorWave(n,x)*oscillatorWave(m,x),-12,12,12000),0,1e-9);
});
test('Hydrogen radial normalization and mean radius agree with analytic moments for all 28 allowed tuples',()=>{
 for(let n=1;n<=7;n++)for(let l=0;l<n;l++){close(integral(r=>r*r*hydrogenRadial(n,l,r)**2,0,600,24000),1,1e-7);close(integral(r=>r**3*hydrogenRadial(n,l,r)**2,0,600,24000),(3*n*n-l*(l+1))/2,1e-6);}
});
test('Every allowed nonnegative angular state is normalized on the sphere',()=>{
 for(let l=0;l<=7;l++)for(let m=0;m<=l;m++)close(2*Math.PI*integral(theta=>sphericalAmplitude(l,m,theta)**2*Math.sin(theta),0,Math.PI,12000),1,1e-6);
});
test('Box eigenstate density is stationary, whereas unequal-state interference changes in time',()=>{
 for(let mode=1;mode<=6;mode++)for(const x of [.1,1,2.5,4.9]){const v=norm2(quantumWave('standingwave',{mode},x,0));for(const t of [.05,1.25,10,99])close(norm2(quantumWave('standingwave',{mode},x,t)),v);close(norm2(quantumWave('standingwave',{mode},0,1)),0);close(norm2(quantumWave('standingwave',{mode},5,1)),0);}
 assert.ok(Math.abs(norm2(quantumWave('standingwavemix',{mode1:2,mode2:3},1,0))-norm2(quantumWave('standingwavemix',{mode1:2,mode2:3},1,1)))>.01);
});
test('Box interval integral is normalized and ordering-independent while original sin⁴ display is documented separately',()=>{for(let n=1;n<=6;n++){close(boxProbability(n,0,400),1);close(boxProbability(n,123,321),boxProbability(n,321,123));close(boxProbability(n,123,321),integral(x=>2/400*Math.sin(n*Math.PI*x/400)**2,123,321,4000),1e-7);}});
test('Beat envelope exactly reconstructs the two waves and nondispersive presets translate the same packet',()=>{
 for(const p of [{k1:20,k2:25,w1:20,w2:30},{k1:40,k2:10,w1:10,w2:40},{k1:20,k2:20,w1:20,w2:20}])for(const x of [0,117,560])for(const t of [0,.05,4.9]){const a=(p.k1*x/100-p.w1*t),b=(p.k2*x/100-p.w2*t);close(quantumWave('wavepacket',p,x,t).x,50*Math.sin((a+b)/2)*Math.cos((a-b)/2));}
 const p=Object.fromEntries(dispersionSpeeds(1).map((v,i)=>['a'+(i+1),v]));for(const x of [0,315,720])for(const t of [.05,2,9.9])close(quantumWave('wavemixdispersion',p,x,t).x,quantumWave('wavemixdispersion',p,x-50*t,0).x,1e-10);
});
const root=new URL('../',import.meta.url);function readCurrent(file){const r=JSON.parse(fs.readFileSync(new URL(file,root)));for(const [f,h]of Object.entries(r.nativeModelHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL(f,root))).digest('hex'),h,'Stale '+file+' '+f);return r;}
test('All 17 quantum originals have current source, runtime and responsive control evidence, without a full-equivalence claim',()=>{
 const source=readCurrent('docs/quantum-source-report.json'),runtime=readCurrent('docs/quantum-runtime-report.json'),ui=readCurrent('docs/quantum-ui-report.json');assert.equal(Object.keys(quantumSpecs).length,17);for(const r of [source,runtime]){assert.equal(r.results.length,17);assert.ok(r.results.every(v=>v.passed&&v.comparisons>0&&v.scope&&v.fullEquivalence===false));}assert.equal(ui.results.length,34);assert.equal(ui.passed,true);assert.deepEqual(ui.errors,[]);
 const manifest=JSON.parse(fs.readFileSync(new URL('src/flash-manifest.json',root)));for(const s of Object.values(quantumSpecs)){const r=runtime.results.find(r=>r.id===s.id);assert.equal(r.sha256,manifest.files.find(r=>r.id===s.id).sha256);assert.equal(r.sha256Verified,true);assert.ok(r.controls.every(c=>c.passed));for(const width of [320,1360])assert.equal(ui.results.find(r=>r.id===s.id&&r.width===width).passed,true);}
});

test('The two independently inspected wavepacket originals retain their own source and HTML destination',()=>{
 const c=JSON.parse(fs.readFileSync(new URL('assets/flash-catalog.json',root))),wave=c.files.find(r=>r.id==='flash-eb06907beb17a943'),modern=c.files.find(r=>r.id==='flash-82557e88691f925e');
 assert.ok(wave.nativeHref?.includes('quantum-flash-eb06907beb17a943'));
 assert.ok(modern.nativeHref?.includes('modern-batch50b-dynamics-flash-82557e88691f925e'));
 assert.notEqual(wave.source,modern.source);assert.notEqual(wave.sha256,modern.sha256);assert.notEqual(wave.nativeHref,modern.nativeHref);
 const spec=JSON.parse(fs.readFileSync(new URL('src/native-modern-batch50b-dynamics.json',root))).simulations.find(r=>r.id===modern.id);
 assert.equal(spec.source,modern.source);
 const runtime=readCurrent('docs/modern-batch50b-dynamics-runtime-report.json').results.find(r=>r.id===modern.id);
 assert.ok(runtime.passed);assert.equal(runtime.sha256||runtime.originalSHA256,modern.sha256);
 for(const s of Object.values(quantumSpecs)){const r=c.files.find(r=>r.id===s.id);assert.equal(r.source,s.originalSource);assert.ok(r.nativeHref);}
});
