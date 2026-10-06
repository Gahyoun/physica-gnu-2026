// Keep SVG nodes and only change attributes/text that differ. Never patch controls.
const previous=new WeakMap();
export function patchMarkup(host,markup){
 if(previous.get(host)===markup)return;
 previous.set(host,markup);
 const template=document.createElement('template'),isSVG=host.namespaceURI==='http://www.w3.org/2000/svg';
 // Fragments placed inside <g>/<svg> must be parsed as SVG, not HTML.
 template.innerHTML=isSVG?'<svg xmlns="http://www.w3.org/2000/svg">'+markup+'</svg>':markup;
 function sync(target,source){
  const children=[...source.childNodes];
  children.forEach((next,i)=>{
   const old=target.childNodes[i];
   if(!old){target.append(next.cloneNode(true));return;}
   if(old.nodeType!==next.nodeType||old.nodeName!==next.nodeName){old.replaceWith(next.cloneNode(true));return;}
   if(next.nodeType===Node.TEXT_NODE){if(old.nodeValue!==next.nodeValue)old.nodeValue=next.nodeValue;return;}
   if(next.nodeType!==Node.ELEMENT_NODE)return;
   for(const attr of [...old.attributes])if(!next.hasAttribute(attr.name))old.removeAttribute(attr.name);
   for(const attr of next.attributes)if(old.getAttribute(attr.name)!==attr.value)old.setAttributeNS(attr.namespaceURI,attr.name,attr.value);
   sync(old,next);
  });
  while(target.childNodes.length>children.length)target.lastChild.remove();
 }
 sync(host,isSVG?template.content.firstElementChild:template.content);
}

// Pointer events can arrive faster than the display can paint. Keep the latest
// state per frame, with an explicit flush before releasing/restarting motion.
export function frameBatch(callback){
 let frame=0;
 const flush=()=>{if(!frame)return;cancelAnimationFrame(frame);frame=0;callback();};
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(()=>{frame=0;callback();});};
 return {schedule,flush};
}

// Observer notifications can lag behind a scroll or click. Confirm the current
// rectangle before treating an old offscreen notification as a stop request.
export function inViewport(host,viewport=globalThis){
 const r=host.getBoundingClientRect();
 return r.width>0&&r.height>0&&r.bottom>0&&r.right>0&&r.top<viewport.innerHeight&&r.left<viewport.innerWidth;
}
export function observePlayback(host,onVisible){
 let frame=0;
 const observer=new IntersectionObserver(()=>{
  if(frame)cancelAnimationFrame(frame);
  // Other widgets in the same observer delivery can change document layout.
  frame=requestAnimationFrame(()=>{frame=0;onVisible(inViewport(host));});
 });
 observer.observe(host);return observer;
}
