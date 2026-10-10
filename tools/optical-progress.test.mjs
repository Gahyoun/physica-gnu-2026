import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {opticalEndStep,resumeOptical} from '../assets/optical-progress.mjs';

for (const group of ['50','50b']) {
  const specs=JSON.parse(fs.readFileSync(new URL('../src/native-optics-batch'+group+'-rays.json',import.meta.url)));
  const adapter=await import('../assets/optics-batch'+group+'-adapter.mjs');
  for (const spec of specs.filter(s=>s.animated!==false)) {
    const {createTimeline}=await import('../assets/'+spec.programModule);
    test(spec.source+': progress covers the actual solver lifetime without advancing the scene',()=>{
      const t=createTimeline();t.pt.stopAni();
      function verify() {
        const before=adapter.timelineSnapshot(t),drawing=JSON.stringify(t.pt.rayCanvas.graphics.items),time=t.pt.currentTime;
        const end=opticalEndStep(t.pt);
        assert.deepEqual(adapter.timelineSnapshot(t),before);
        assert.equal(JSON.stringify(t.pt.rayCanvas.graphics.items),drawing);
        assert.equal(t.pt.currentTime,time);
        assert.equal(t.pt.animationTimer.running,false);
        // Ignore GUI completion callbacks, which may start a new demonstration.
        const events=t.pt.background.listeners;t.pt.background.listeners=new Map();
        t.pt.startAni();
        for(let n=1;n<=end;n++) {
          t.pt.onTick({});
          assert.equal(t.pt.animationTimer.running,n<end,'natural end at '+end+' (step '+n+')');
          if(n===Math.floor(end/2)) {
            t.pt.stopAni();const clock=t.pt.currentTime;
            resumeOptical(t.pt,n);assert.equal(t.pt.currentTime,clock,'resume preserves optical clock');
          }
        }
        t.pt.background.listeners=events;t.pt.stopAni();
      }
      verify();
      for(const control of spec.controls)for(const value of new Set([control.min,control.max])) {
        t[control.clip].value=value;
        t[control.clip].dispatchEvent({type:adapter.SliderEvent.CHANGE});
        t.pt.stopAni();verify();
      }
      for(const control of spec.checks.filter(c=>c.clip==='modeChangeChk')) {
        t[control.clip].isChecked=!t[control.clip].isChecked;
        t[control.clip].dispatchEvent({type:adapter.MouseEvent.CLICK});
        t.pt.stopAni();verify();
      }
    });
  }
}
