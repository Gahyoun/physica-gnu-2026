// Keep runtime evidence distinct from source-function and native-UI tests.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=new URL('../',import.meta.url);
const read=p=>JSON.parse(fs.readFileSync(new URL(p,root)));

export function runtimeEvidence(){
  const manifest=read('src/flash-manifest.json');
  const startup=read('docs/flash-runtime-report.json');
  const slider=read('docs/flash-slider-runtime-report.json');
  const timeline=read('docs/timeline-runtime-report.json');
  const groups=['fundamental','analytic','wave','field','optics','refraction','film'].map(name=>({name,report:read(`docs/${name}-runtime-report.json`)}));
  const endpoints=slider.results.flatMap(r=>r.sliders.flatMap(s=>s.endpoints));
  const files=manifest.files.map(r=>{
    const original=startup.results.find(x=>x.id===r.id);
    const controls=slider.results.find(x=>x.id===r.id);
    const frames=timeline.results.find(x=>x.id===r.id);
    const group=groups.find(g=>g.report.results.some(x=>x.id===r.id));
    const numeric=group?.report.results.find(x=>x.id===r.id);
    const check=numeric?.numeric||numeric;
    return {
      id:r.id,sha256:r.sha256,fullEquivalence:false,
      originalPlayback:original?{
        report:'docs/flash-runtime-report.json',sha256:original.sha256,
        passed:original.sha256Verified&&original.loaded&&original.pausePixelsChanged===0&&original.reloadVerified&&!original.error&&!original.errors.length&&!original.requests.length,
        loaded:original.loaded,rendererSuspensionPixelsChanged:original.pausePixelsChanged,
        reloadVerified:original.reloadVerified,clickProbes:original.clickProbes.length,
        scope:'Unmodified original in Ruffle; timed playback, renderer suspension/resumption, geometry-based pointer probes and reload. Click meaning and Adobe Player equivalence are not asserted.'
      }:null,
      numerical:numeric?{
        report:`docs/${group.name}-runtime-report.json`,sha256:numeric.sha256,
        passed:check.passed,comparisons:check.comparisons,
        scope:check.scope||group.report.scope||numeric.scope,
        maxAbsoluteError:check.maxAbsoluteError??Math.max(...numeric.cases.map(c=>c.maxAbsoluteError)),
        ...(numeric.absoluteHistoryComparisons?{absoluteHistoryComparisons:numeric.absoluteHistoryComparisons,absoluteHistoryMaxError:numeric.absoluteHistoryMaxError,unquantizedHistoryMaxError:numeric.unquantizedHistoryMaxError}:{})
      }:null,
      sliders:controls?{
        report:'docs/flash-slider-runtime-report.json',sha256:controls.sha256,
        candidates:controls.sliders.length,
        endpointChecks:controls.sliders.reduce((n,s)=>n+s.endpoints.length,0),
        nominalMatches:controls.sliders.reduce((n,s)=>n+s.endpoints.filter(e=>e.passed).length,0),
        reviewedSourceExceptions:controls.sliders.reduce((n,s)=>n+s.endpoints.filter(e=>e.reviewedRuntimeBoundaryMatch).length,0),
        pending:controls.sliders.filter(s=>!s.endpoints.length).map(s=>({candidatePath:s.candidatePath,path:s.path,status:s.status})),
        scope:'Inventoried AS2 candidates only; endpoint level values, not every interior value or downstream control effect. Raw nominal mismatches are retained in the report.'
      }:null,
      rootTimeline:frames?{
        report:'docs/timeline-runtime-report.json',sha256:frames.sha256,
        passed:frames.sha256Verified&&frames.allRootFramesSeen&&!frames.sequenceErrors.length,
        framesObserved:frames.framesSeen.length,framesExpected:frames.originalFrames,
        scope:timeline.scope
      }:null
    };
  });
  return {
    date:new Date().toISOString(),engine:startup.engine,
    nativeModelHashes:Object.assign({},...groups.map(g=>g.report.nativeModelHashes)),total:manifest.files.length,originalPlaybackPassed:files.filter(r=>r.originalPlayback?.passed).length,
    originalPointerProbes:startup.clickProbes,
    numericalFiles:files.filter(r=>r.numerical).length,
    numericalFilesPassed:files.filter(r=>r.numerical?.passed).length,
    numericalComparisons:files.reduce((n,r)=>n+(r.numerical?.comparisons||0),0),
    rootTimelineFiles:files.filter(r=>r.rootTimeline).length,
    rootTimelineFilesPassed:files.filter(r=>r.rootTimeline?.passed).length,
    rootTimelineFrames:timeline.originalFramesObserved,
    sliderCandidates:slider.candidates,sliderEndpointChecks:endpoints.length,
    sliderNominalMatches:endpoints.filter(e=>e.passed).length,
    reviewedSourceBoundaryMatches:endpoints.filter(e=>e.reviewedRuntimeBoundaryMatch).length,
    sliderCandidatesPending:files.reduce((n,r)=>n+(r.sliders?.pending.length||0),0),
    allOriginalRuntimeControlsAndNumericsCompared:false,
    definition:'Ruffle startup across the whole collection is complete. Numerical sample windows, AS2 endpoint checks and selected root timelines have separate finite scopes. Source VM tests and successful native UI tests are not original-runtime equivalence.',
    files
  };
}
if(process.argv[1]&&fileURLToPath(import.meta.url)===path.resolve(process.argv[1])){
  const evidence=runtimeEvidence();
  fs.writeFileSync(new URL('docs/original-runtime-evidence.json',root),JSON.stringify(evidence,null,2)+'\n');
  console.log(JSON.stringify({...evidence,files:undefined}));
}
