// Independently written browser renderer for source-derived SVG frames.
function installSVGTimeline(metadata){
 window.canvas=document.getElementById('myCanvas');window.ctx=canvas.getContext('2d');let version=0;const cache=new Map();
 function load(step){if(!cache.has(step)){const image=new Image();image.src='frame-'+step+'.svg';const promise=image.decode().then(()=>image);cache.set(step,promise);promise.catch(()=>cache.delete(step));}return cache.get(step);}
 window.renderTimeline=async function(step){if(!Number.isInteger(step)||step<0||step>=metadata.cycle)throw Error('Frame outside timeline');const requested=++version,image=await load(step);if(requested!==version)return;ctx.fillStyle=metadata.background;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(image,0,0,canvas.width,canvas.height);window.renderedStep=step;for(let i=1;i<=3;i++)load((step+i)%metadata.cycle).catch(()=>{});while(cache.size>16){const oldest=cache.keys().next().value;if(oldest===step)break;cache.delete(oldest);}};
 renderTimeline(0);
}
