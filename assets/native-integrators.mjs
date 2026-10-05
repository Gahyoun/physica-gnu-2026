// Euler-Cromer steps independently expressed in physical/normalized coordinates.
// Source osc_damp: dt=.1, 10 substeps, dx=.002 m/pixel, bounds y=50..250.
export function dampedStep({x,v},{b,m,k},dt=.1){const h=dt/10;for(let i=0;i<10;i++){v+=(-b*v-k*x)/m*h;x+=v*h;}if(x>.2){x=.2;v=0;}if(x<-.2){x=-.2;v=0;}return {x,v,a:(-b*v-k*x)/m,energy:(m*v*v+k*x*x)/2};}
// Source drivenosc2: m=.01, k=1, dx=.01, support amplitude=25 pixels.
// The source multiplies damping by dx: effective damping=.01*b, so b/m=b.
export function drivenStep({x,v,measured=0,wasRising=false},{b,w},t,dt=1/15){const h=dt/5;for(let i=0;i<5;i++){const support=-Math.sin(w*(t+i*h));const old=x;v+=(-b*v-100*(x-support))*h;x+=v*h;if(wasRising&&x>old)measured=-x;wasRising=x<old;}return {x,v,measured,wasRising,a:-b*v-100*(x+Math.sin(w*(t+dt))),amplitude:Math.abs(x)};}
export function trajectory(kind,p,duration=20){const damp=kind==='dampedExperiment',dt=damp?.1:1/15;let s={x:damp?p.x0:0,v:0};const samples=[{t:0,...s,a:damp?-p.k*s.x/p.m:0,energy:damp?p.k*s.x*s.x/2:0,measured:0}];for(let i=1;i<=Math.round(duration/dt);i++){s=damp?dampedStep(s,p):drivenStep(s,p,(i-1)*dt);samples.push({t:i*dt,...s});}return samples;}
export const experimentSpecs={
 dampedExperiment:{source:'osc_damp.swf',lesson:'1-2-5-3',title:'감쇠진동 모의실험 · 질점과 기록 그래프',parameters:[['b','감쇠계수 b / N·s·m⁻¹',0,10,.01,1],['m','질량 m / kg',.5,5,.1,1],['k','용수철 상수 k / N·m⁻¹',1,10,1,5],['x0','초기 변위 x₀ / m',-.2,.2,.002,.2]]},
 drivenExperiment:{source:'drivenosc2.swf',lesson:'1-2-6-2',title:'강제진동 모의실험 · 운동과 측정 진폭',parameters:[['b','원본 감쇠계수 눈금 b',1,5,1,2],['w','구동 각진동수 ω / rad·s⁻¹',0,20,1,4]]}
};
