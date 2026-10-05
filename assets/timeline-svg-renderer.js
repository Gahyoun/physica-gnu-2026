// Independently written browser renderer for source-derived SVG frames.
function installSVGTimeline(metadata){
 window.canvas=document.getElementById('myCanvas');window.ctx=canvas.getContext('2d');let version=0;const cache=new Map();
 function load(step){if(!cache.has(step)){
  const promise=(async()=>{
   const response=await fetch('frame-'+step+'.svg');if(!response.ok)throw Error('SVG frame unavailable');
   let svg=await response.text();
   if(!window.PHYSICA_SOURCE_COLORS)svg=svg.replace(/((?:fill|stroke|stop-color)\s*=\s*")#([a-f\d]{6})(")/gi,(_,before,hex,after)=>{
    const rgb=remasterColor([0,2,4].map(i=>parseInt(hex.slice(i,i+2),16)));
    return before+'#'+rgb.slice(0,3).map(v=>v.toString(16).padStart(2,'0')).join('')+after;
   });
   const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'})),image=new Image();
   try{image.src=url;await image.decode();return image;}finally{URL.revokeObjectURL(url);}
  })();cache.set(step,promise);promise.catch(()=>cache.delete(step));
 }return cache.get(step);}
 window.renderTimeline=async function(step){if(!Number.isInteger(step)||step<0||step>=metadata.cycle)throw Error('Frame outside timeline');const requested=++version,image=await load(step);if(requested!==version)return;ctx.fillStyle=metadata.background;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(image,0,0,canvas.width,canvas.height);window.renderedStep=step;for(let i=1;i<=3;i++)load((step+i)%metadata.cycle).catch(()=>{});while(cache.size>16){const oldest=cache.keys().next().value;if(oldest===step)break;cache.delete(oldest);}};
 renderTimeline(0);
}
