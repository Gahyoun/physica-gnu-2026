import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),katex=require('../vendor/katex/katex.min.js');
export const escapeText=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const cleanTitle=s=>String(s).replaceAll('__h__','');
const delimiter=/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$\$([\s\S]*?)\$\$|\$([^\n$]+)\$/g;
export function mathText(text,render=(tex,display)=>katex.renderToString(tex,{displayMode:display,throwOnError:true,trust:false,output:'htmlAndMathml'}),plain=escapeText){
 let result='',last=0;
 for(const m of String(text).matchAll(delimiter)){
  result+=plain(text.slice(last,m.index));
  result+=render(m[1]??m[2]??m[3]??m[4],m[2]!==undefined||m[3]!==undefined);
  last=m.index+m[0].length;
 }
 return result+plain(text.slice(last));
}
// Plain titles are also used in accessible labels and text-only search results.
// Keep their symbols readable without injecting HTML into those paths.
export function plainMathTitle(text){
 return cleanTitle(text).replace(delimiter,(_whole,a,b,c,d)=>{
  const tex=a??b??c??d;
  let html=katex.renderToString(tex,{throwOnError:true,trust:false,output:'mathml'}).replace(/<annotation[\s\S]*?<\/annotation>/g,'');
  const sub={0:'₀',1:'₁',2:'₂',3:'₃',4:'₄',5:'₅',6:'₆',7:'₇',8:'₈',9:'₉',n:'ₙ',e:'ₑ',t:'ₜ'};
  html=html.replace(/<msub>([\s\S]*?)<\/msub>/g,(_all,body)=>{
   const children=body.match(/^((?:<[^>]+>)[\s\S]*?<\/[^>]+>)([\s\S]*)$/);
   if(!children)return body;
   const base=children[1].replace(/<[^>]*>/g,''),suffix=children[2].replace(/<[^>]*>/g,'');
   return base+[...suffix].map(ch=>sub[ch]??ch).join('');
  });
  return html.replace(/<[^>]*>/g,'').replace(/([A-Za-z])→/g,'$1⃗').replaceAll('&amp;','&').replaceAll('&lt;','<').replaceAll('&gt;','>');
 });
}
