import fs from 'node:fs';import {inspectSWF} from './swf-runtime-probe.mjs';
const specs=JSON.parse(fs.readFileSync('src/native-optics-batch50-rays.json')),manifest=JSON.parse(fs.readFileSync('src/flash-manifest.json')).files,result={};
for(const s of specs){const r=manifest.find(r=>r.id===s.id);const swf=inspectSWF(fs.readFileSync(r.file));result[s.id]=Object.fromEntries(swf.rootPlacements.filter(p=>p.name&&p.m).map(p=>[p.name,{x:p.m.x,y:p.m.y,width:p.bounds?(p.bounds[1]-p.bounds[0])*p.m.a:null,height:p.bounds?(p.bounds[3]-p.bounds[2])*p.m.d:null}]));}
fs.writeFileSync('src/native-optics-batch50-placements.json',JSON.stringify(result,null,2)+'\n');console.log(Object.entries(result).map(([id,p])=>[id,p.marker]));
