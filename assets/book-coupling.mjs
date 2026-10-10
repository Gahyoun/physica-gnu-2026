// Explicit links between independent exploratory models and their selected state.
// A fixed reference curve is not expected to change when only its selected x changes.
export const selectedCoordinates={
 thermo:s=>[s.Tc/s.Th],gas:s=>[s.V],equipartition:s=>[s.T],phase:s=>[s.Q],capillary:s=>[s.r],capacitor:s=>[s.d],circuit:s=>[s.V],doppler:s=>[s.v],fresnel:s=>[s.angle],mirror:s=>[s.s],polarizer:s=>[s.angle],laser:s=>[s.R],cavity:s=>[s.L],relativity:s=>[s.beta],'light-doppler':s=>[s.beta],gravity:s=>[s.height],photoelectric:s=>[s.frequency],bohr:s=>[s.ni,s.nf],spin:s=>[s.angle],shells:s=>[s.n],molecular:s=>[s.J],crystal:s=>[s.d],semiconductor:s=>[s.T],binding:s=>[s.mass],energy:s=>[s.thermal]
};
export function selectedPoints(key,s,r){return (selectedCoordinates[key]?.(s)||[]).flatMap(x=>(r.curves||[]).map((c,curve)=>({x,y:c.fn(x),curve}))).filter(p=>Number.isFinite(p.y)&&p.x>=r.xmin&&p.x<=r.xmax);}
export const apparatusModels=new Set(['gas','phase','capacitor','fresnel','polarizer','doppler','energy','quantumwell']);
const fmt=n=>Number(n.toPrecision(4)).toLocaleString('ko-KR');
const text=(x,y,s)=>`<text x="${x}" y="${y}">${s}</text>`;
const blue='var(--plot-action)',gray='var(--plot-muted)';
const rect=(x,y,w,h,fill=blue)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" fill-opacity=".2" stroke="${fill}"/>`;
const line=(x,y,xx,yy,color=gray,width=2)=>`<path d="M${x} ${y}L${xx} ${yy}" stroke="${color}" stroke-width="${width}" fill="none"/>`;
export function energyFlow(s,t=0){const ratio=s.Tc/s.Th;return {ratio,efficiency:1-ratio,heatIn:1,heatOut:ratio,work:1-ratio,phase:(t/3)%1};}
export function flowDiagram(flow,labels){
 const {heatIn,heatOut,work,phase}=flow;let b=rect(32,32,165,60)+rect(300,32,140,60,gray)+rect(545,32,165,60,gray);
 b+=text(42,55,labels[0])+text(42,78,labels[1])+text(315,67,'열기관')+text(553,55,labels[2])+text(553,78,labels[3]);
 for(const [x1,y1,x2,y2,value,label,color]of [[197,62,300,62,heatIn,'Qh',blue],[440,62,545,62,heatOut,'Qc',gray],[370,92,370,164,work,'W',blue]]){
  b+=line(x1,y1,x2,y2,color,2+14*value)+`<path d="${x1===x2?`M${x2-8} ${y2-12}L${x2} ${y2}L${x2+8} ${y2-12}Z`:`M${x2-12} ${y2-8}L${x2} ${y2}L${x2-12} ${y2+8}Z`}" fill="${color}"/>`+text(x1===x2?395:(x1+x2)/2-25,y1===y2?23:137,label+' = '+fmt(value));
  b+=`<circle data-flow-dot="${label}" cx="${x1+(x2-x1)*phase}" cy="${y1+(y2-y1)*phase}" r="6" fill="var(--ui-bg)" fill-opacity=".65" stroke="none"/>`;
 }
 return b+text(64,194,'Qh = W + Qc · 화살표 폭은 에너지 비율')+text(64,220,'열 흐름 도식 · 이동하는 점은 흐름 방향 표시');
}
export function apparatusDiagram(key,s,r){
 if(key==='quantumwell'){const w=100+150*s.L;return line(80,35,80,160,gray,5)+line(80+w,35,80+w,160,gray,5)+line(80,160,80+w,160)+text(80,25,'무한 우물')+text(80,195,'길이 '+fmt(s.L)+' nm · 에너지 '+fmt(r.values['에너지 / eV'])+' eV')+text(80,220,'x/L로 정규화한 확률밀도 모양은 길이와 무관');}
 if(key==='energy')return flowDiagram({heatIn:1,heatOut:1-s.efficiency,work:s.efficiency,phase:0},['열출력',fmt(s.thermal)+' MW','방출할 열',fmt((1-s.efficiency)*s.thermal)+' MW']);
 if(key==='gas'){const w=100+4*s.V;return rect(80,45,w,100)+line(80+w,35,80+w,155,gray,6)+text(80,25,'기체 · T = '+fmt(s.T)+' K')+text(80,180,'V = '+fmt(s.V)+' L · P = '+fmt(r.curves[0].fn(s.V))+' kPa')+text(80,211,'부피를 바꾸면 피스톤과 등온선의 선택점이 함께 이동');}
 if(key==='phase'){const temp=r.curves[0].fn(s.Q),fraction=Math.max(0,Math.min(1,(s.Q-40)/80));return rect(80,40,250,110,gray)+rect(80,150-110*fraction,250,110*fraction)+text(380,65,'공급한 열 '+fmt(s.Q)+' kJ')+text(380,100,'온도 '+fmt(temp)+' °C')+text(380,135,'녹은 비율 '+fmt(fraction*100)+' %')+text(80,205,'가상의 물질 · 융해 구간에서는 온도가 일정');}
 if(key==='capacitor'){const gap=20+35*s.d;return line(220-gap/2,35,220-gap/2,165,blue,6)+line(220+gap/2,35,220+gap/2,165,gray,6)+text(380,65,'판 간격 '+fmt(s.d)+' mm')+text(380,100,'전압 '+fmt(s.V)+' V')+text(380,135,'넓이 '+fmt(s.A)+' cm²')+text(80,205,'판 간격과 선택 전기용량을 함께 비교');}
 if(key==='fresnel'){const a=s.angle*Math.PI/180,v=r.curves.map(c=>c.fn(s.angle));return line(64,110,330,110)+line(200,25,200,170)+line(200-100*Math.sin(a),110-100*Math.cos(a),200,110,blue,3)+line(200,110,200+100*Math.sin(a),110-100*Math.cos(a),blue,3)+rect(410,50,240*v[0],22)+rect(410,100,240*v[1],22,gray)+text(410,40,'s 반사율 '+fmt(v[0]))+text(410,90,'p 반사율 '+fmt(v[1]))+text(64,205,'입사각 '+fmt(s.angle)+'° · 법선을 기준으로 측정');}
 if(key==='polarizer'){const a=s.angle*Math.PI/180,T=r.curves[0].fn(s.angle);return `<circle cx="210" cy="95" r="65" fill="none" stroke="${gray}"/>`+line(210-60*Math.sin(a),95-60*Math.cos(a),210+60*Math.sin(a),95+60*Math.cos(a),blue,4)+line(210,30,210,160,gray)+rect(410,65,250*T,40)+text(410,40,'투과 세기 '+fmt(T))+text(64,205,'회전하는 선: 투과축 · 고정 선: 입사 편광');}
 if(key==='doppler'){let b='';for(let i=1;i<=4;i++)b+=`<ellipse cx="${310-35*s.v*i}" cy="100" rx="${35*i}" ry="${18*i}" fill="none" stroke="${blue}" stroke-opacity=".65"/>`;return b+`<circle cx="310" cy="100" r="9" fill="${blue}"/>`+line(325,100,375,100,blue,3)+text(64,25,'뒤쪽 · 파면 간격 증가')+text(430,25,'앞쪽 · 파면 간격 감소')+text(64,205,'일정 시간 간격으로 방출된 파면 · 파원 속력에 연결');}
 return '';
}
