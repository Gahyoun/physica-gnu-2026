export const iterParts=[
 ['cryostat','저온 용기','Cryostat','코일과 진공 용기를 둘러싸는 바깥 용기입니다.'],
 ['vessel','진공 용기','Vacuum Vessel','플라스마가 위치하는 환형 진공 공간을 둘러쌉니다.'],
 ['blanket','블랭킷 모듈','Blanket Module','진공 용기의 안쪽 벽에 배치된 모듈입니다.'],
 ['toroidal','토로이달 자기장 코일','Toroidal Field Coil','환형 공간을 둘러싸는 코일입니다.'],
 ['poloidal','폴로이달 자기장 코일','Poloidal Field Coil','장치의 위아래와 바깥에 배치된 코일입니다.'],
 ['solenoid','중심 솔레노이드','Central Solenoid','장치 중심축을 따라 놓인 코일입니다.'],
 ['outer','코일 사이 지지 구조','Outer Intercoil Structure','코일 사이를 연결하는 구조물입니다.'],
 ['support','장치 지지대','Machine Gravity Supports','장치를 아래에서 받치는 지지 구조입니다.'],
 ['divertor','디버터','Divertor','진공 용기 바닥에 놓인 구성 요소입니다.'],
 ['pump','환형 저온 펌프','Torus Cryopump','진공 용기와 연결된 펌프입니다.'],
 ['port','가열 포트','Port Plug (IC Heating)','진공 용기에 연결된 가열용 포트입니다.']
];
export const reactorParts=[
 ['core','노심·연료봉','핵분열에서 발생하는 열이 1차 냉각수로 전달됩니다.'],
 ['rod','제어봉','노심 안에 배치된 제어봉입니다.'],
 ['pressure','가압기','1차 냉각 회로에 연결되어 있습니다.'],
 ['generator','증기발생기','1차 냉각수와 2차 증기 회로가 열교환기를 사이에 두고 연결됩니다.'],
 ['turbine','증기터빈','증기가 터빈을 거쳐 발전기에 연결된 축을 돌립니다.'],
 ['electric','발전기','터빈에 연결된 발전기에서 전기 출력이 나옵니다.'],
 ['condenser','복수기','터빈을 지난 증기가 냉각 회로와 열을 교환합니다.'],
 ['tower','냉각탑','복수기와 연결된 냉각 회로의 구성 요소입니다.'],
 ['pump','순환 펌프','세 냉각 회로의 순환 방향을 원본 화살표로 구분합니다.']
];
export function stoppingState(s,n){return s.positions[Math.max(0,Math.min(s.max,Math.round(n)))];}
export function yieldPoint(s,mass){
 // Cursor values are read from the original illustration, not measured data.
 const x=92+(mass-80)*(471-92)/80,points=s.curveSamples;
 let i=1;while(i<points.length-1&&points[i][0]<x)i++;
 const a=points[i-1],b=points[i],u=Math.max(0,Math.min(1,(x-a[0])/(b[0]-a[0]))),y=a[1]+u*(b[1]-a[1]);
 return {mass,x,y,percent:10**((128-y)/(128-59.7))};
}
export function diagramsCSV(s,state){
 if(s.type==='stopping')return 'frame,time_s,particle,x_original,y_original\n'+s.positions.slice(0,state+1).flatMap((q,i)=>[['projectile',...q.projectile],...q.electrons.map((p,j)=>['electron_'+(j+1),...p])].map(r=>[i+1,i/s.fps,...r].join(','))).join('\n')+'\n';
 if(s.type==='yield')return '# Original illustration readout; not experimental yield data\nmass,illustration_yield_percent\n'+Array.from({length:81},(_,i)=>{const q=yieldPoint(s,80+i);return [q.mass,q.percent].join(',');}).join('\n')+'\n';
 const rows=s.type==='iter'?iterParts.map(p=>p.slice(1,3)):s.type==='reactor'?reactorParts.map(p=>[p[1],p[2]]):[['process','excited nucleus -> nucleus + gamma'],['charge_and_mass','unchanged']];
 return 'label,description\n'+rows.map(r=>r.map(v=>'"'+v.replaceAll('"','""')+'"').join(',')).join('\n')+'\n';
}
