// GNU Blue / GNU Grey. Source colours are available only to the comparison
// harness; archived SWFs remain untouched. Cache RGB mapping, never read pixels.
(function(){
 const cache=new Map();
 globalThis.remasterColor=function(c){
  if(globalThis.PHYSICA_SOURCE_COLORS)return c;
  const key=c.slice(0,3).join(',');let rgb=cache.get(key);
  if(!rgb){
   const [r,g,b]=c,max=Math.max(r,g,b),min=Math.min(r,g,b);
   if(max-min<12)rgb=[r,g,b]; // Preserve black/white backgrounds and neutral detail.
   else{
    const base=r>g*1.2&&r>b*1.2?[67,82,90]:[0,158,219];
    const luminance=(.2126*r+.7152*g+.0722*b)/255;
    const amount=Math.max(-.45,Math.min(.7,(luminance-.45)*1.1));
    rgb=base.map(v=>Math.round(amount>=0?v+(255-v)*amount:v*(1+amount)));
   }
   if(cache.size>=4096)cache.clear();cache.set(key,rgb);
  }
  return [...rgb,c[3]??1];
 };
})();
