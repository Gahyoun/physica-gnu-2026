// Private reference execution: only numerical scene data is written to the site.
import fs from 'node:fs';import vm from 'node:vm';
export const sceneNames=['cov','h2o','covx','fourierdiff','rectwindow','michelson','young','grating','prizm','gravitylens','spin2','angularmomentum2','sphericalcoord'];
export function sourceFunction(source,name){const i=source.indexOf('function '+name+'(');if(i<0)throw Error('Missing '+name);let b=source.indexOf('{',i),j=b+1,d=1;while(d){d+=(source[j]==='{')-(source[j]==='}');j++;}return source.slice(i,j);}
export function sourceScene(record){
 const base=(process.env.PHYSICA_FLASH_SCRIPTS||'/private/tmp/physica-all-flash-scripts')+'/'+record.id+'/scripts/frame_1';
 const source=fs.readdirSync(base).filter(f=>/^DoAction.*\.as$/.test(f)).sort().map(f=>fs.readFileSync(base+'/'+f,'utf8')).join('\n');
 const clips=[],ctx={Math,RenderScene(){},convertRGB(){return 0;},toRad:.017453292519943};let c;
 ctx.copyObj=(tag,points,size)=>{for(const p of points){const clip='point_'+c.points++;c[clip]={point:Array.from(p),refSize:size};clips.push({clip,type:'point',tag,size});}};
 ctx.make3Dobj=(type,points)=>{const add=pts=>{const clip=type+'_'+c[type+'s']++;c[clip]={pointarray:pts.map(p=>Array.from(p))};clips.push({clip,type});};if(type==='line')for(let i=1;i<points.length;i++)add([points[i-1],points[i]]);else add(points);};
 c=vm.createContext(ctx);c._root=c;
 const helpers=['InitMovie','InitScene','vectorRot','eulerRot','makePz','makeRotSurf','MatrixVectorMultiply','MatrixMatrixMultiply','EulerRotation','Translation','EulerRotationObject','TranslationObject'].filter(n=>source.includes('function '+n+'('));
 vm.runInContext(helpers.map(n=>sourceFunction(source,n)).join('\n'),c);
 c.setColor=()=>{};c.InitMovie();c.InitScene();
 const geometry=()=>clips.map(q=>({...q,points:q.type==='point'?[Array.from(c[q.clip].point)]:Array.from(c[q.clip].pointarray,p=>Array.from(p))}));
 return {c,source,geometry,clips};
}
if(process.argv[1]?.endsWith('/scene-source-capture.mjs')){
 const manifest=JSON.parse(fs.readFileSync(new URL('../src/flash-manifest.json',import.meta.url))),scenes=[];
 for(const name of sceneNames){const r=manifest.files.find(r=>r.source.endsWith('/'+name+'.swf'));const ref=sourceScene(r);const s={id:r.id,type:name,source:name+'.swf',originalSource:r.source,title:r.titles[0],lesson:r.lessons[0],perspective:ref.c.f,animated:['spin2','angularmomentum2'].includes(name),fps:r.frameRate/2,geometry:ref.geometry()};
  scenes.push(s);console.log(name,s.geometry.length);
 }
 fs.writeFileSync(new URL('../src/native-scenes.json',import.meta.url),JSON.stringify(scenes,null,2)+'\n');
}
