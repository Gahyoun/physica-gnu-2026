// Display-only annotations. Positions come from each model's existing optical state.
const number=v=>Number(v.toFixed(5)),escape=v=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export function opticalLabel(x,y,label){return `<text x="${number(x)}" y="${number(y)}" fill="var(--ink)" font-size="14" font-weight="600" stroke="var(--ui-bg)" stroke-width="4" paint-order="stroke" stroke-linejoin="round">${escape(label)}</text>`;}
export function sourcePoint(x,y,label='',options={}){
 const {kind='point',labelX=x+12,labelY=y-12,radius=7}=options;
 return `<g data-optical-source="${kind}" pointer-events="none"><title>${escape(label||'광선 출발점')}</title><circle data-optical-origin cx="${number(x)}" cy="${number(y)}" r="${radius}" fill="var(--ui-bg)" stroke="var(--plot-action)" stroke-width="2.5"/><circle cx="${number(x)}" cy="${number(y)}" r="2.5" fill="var(--plot-action)"/>${label?opticalLabel(labelX,labelY,label):''}</g>`;
}
export function lightDirection(x,y,dx,dy,label='',options={}){
 const length=Math.hypot(dx,dy);if(length<1e-9)return '';
 const ux=dx/length,uy=dy/length,end=[x+dx,y+dy],{labelX=x,labelY=y-12,kind='incident'}=options;
 return `<g data-optical-direction="${kind}" pointer-events="none"><title>${escape(label||'빛의 진행 방향')}</title><path d="M${number(x)},${number(y)}L${end.map(number).join(',')}M${number(end[0]-8*ux+4*uy)},${number(end[1]-8*uy-4*ux)}L${end.map(number).join(',')}L${number(end[0]-8*ux-4*uy)},${number(end[1]-8*uy+4*ux)}" fill="none" stroke="var(--plot-action)" stroke-width="2" stroke-opacity=".65" stroke-linecap="round" stroke-linejoin="round"/>${label?opticalLabel(labelX,labelY,label):''}</g>`;
}
export function rayOrigins(rays,selected,label){
 const visible=rays.filter(r=>!r.isOut&&100-r.r>=7&&100-r.r<=193),chosen=rays[selected];
 let out=visible.map(r=>sourcePoint(r.z,100-r.r,'',{kind:'ray-start',radius:r===chosen?7:3})).join('');
 if(chosen&&!chosen.isOut&&Math.abs(chosen.r)<=90)out+=lightDirection(chosen.z,100-chosen.r,26*Math.cos(chosen.rp),-26*Math.sin(chosen.rp));
 return `<g pointer-events="none" data-optical-origins>${out}${opticalLabel(8,-45,label)}${opticalLabel(8,-26,'○ 출발 위치 · 화살표는 처음 진행 방향')}</g>`;
}
