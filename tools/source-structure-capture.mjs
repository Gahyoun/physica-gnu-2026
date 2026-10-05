// Test-only numerical scene capture. No original source is included in the build.
import vm from 'node:vm';

export function captureStructure(code, {legacyCaseInsensitive=false}={}) {
  const nodes=[], lines=[], faces=[];
  const c=vm.createContext({Math,inAng:55*Math.PI/180,points:0,lines:0,surfaces:0,arrows:0,
    copyObj(tag, pts, size) { for(const p of pts){ nodes.push({tag,p:Array.from(p),size});c.points++; } },
    make3Dobj(type, pts) {
      const vertices=Array.from(pts,p=>Array.from(p));
      if(type==='surface'){ faces.push(vertices);c.surfaces++;return; }
      const segments=type==='arrow'?[vertices]:vertices.slice(1).map((p,i)=>[vertices[i],p]);
      for(const segment of segments){
        const counter=type==='arrow'?'arrows':'lines', prefix=type==='arrow'?'arrow':'line';
        c[prefix+'_'+c[counter]++]={pointarray:segment};
        lines.push({type,pts:segment});
      }
    },
    make3DobjLine(displacement,pts) {
      for(let i=1;i<pts.length;i++){
        const a=pts[i-1],b=pts[i],delta=b.map((v,j)=>v-a[j]),length=Math.hypot(...delta);
        if(!length)throw Error('Zero-length bond');
        c.make3Dobj('line',[a.map((v,j)=>v+delta[j]*displacement/length),b.map((v,j)=>v-delta[j]*displacement/length)]);
      }
    }
  });
  // SWF version 6 uses case-insensitive AVM1 identifiers. This legacy alias is
  // needed by Ruby's InitScene; modern JavaScript identifiers are case-sensitive.
  if(legacyCaseInsensitive)Object.defineProperty(c,'hexaArray',{get(){return c.hexaarray;},set(v){c.hexaarray=v;}});
  vm.runInContext(code,c);c.InitScene();
  return {nodes,lines,faces};
}
