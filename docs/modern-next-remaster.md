# 현대물리: 원자·각운동량·분자·불확정성·반도체

19개 원본을 새 SVG 도형, 텍스트와 HTML 조작으로 다시 구성했다. Ruffle·원본 이미지·원본 프레임을 리마스터로 집계하지 않는다.

| 원본 | 이식된 계산·화면 | 원본 입력 |
|---|---|---|
| spin.swf | 24개 쐐기 자전과 같은 방향의 각운동량 화살표 | 방향 반전 |
| addangular.swf | j(j+1) 길이와 모든 m1+m2 조합 | j1=.5…3, j2=.5…2, 간격.5 |
| angleuncertainty.swf | 5개 임의 위치, Lz와 φ, 원본 투영 | 시점 끌기 |
| angleuncertainty2.swf | Lz 원뿔, L, 회전평면과 궤도 | m=−2…2, 시점 끌기 |
| ion.swf | 중성 원자/이온의 핵·전자·껍질 | NaCl, LiF, MgS, NaF |
| menergytran.swf | 24개 회전-진동 준위와 30개 전이 | 원본 정적 자료 |
| molspec.swf | 원본의 두 Lennard-Jones 곡선 | 원본 정적 자료 |
| henergytran.swf | 7개 수소 준위, l 열과 46개 전이 | 원본 정적 자료 |
| zeeman.swf | 자기장 분리 준위·9개 전이·3선 스펙트럼 | B=0…25 |
| springmot1x.swf | 원본 10단계 적분, 회색 용수철과 같은 상태의 위치 그래프 | 공 끌기 |
| uncertainty.swf | 원본 충돌 사건과 광자·전자 운동, Bessel 확률 곡선 | 원본 임의 입사 위치 |
| uncertainty3.swf | 원본 Gaussian 파동묶음, 위치 폭과 시계 | 원본 시간 이동 |
| pnjuctionivchar.swf | 원본 I(V), 역방향 전류1000배 곡선, 현재 선택값 | 원본은 정적; 전압 선택을 추가 |
| semiconntype.swf | 30개 핵·120개 결합 전자, 두 자유전자 | 원본 동작/정지 |
| semiconptype.swf | 같은 격자, 원본의 두 양공 이동 | 원본 동작/정지 |
| rot3dmo.swf | 두 원자와 선형 연결의 Euler 회전 | 축4개·시점·확대 |
| rot3dmo2.swf | 비대칭5개 원자, 원자 표면 사이7개 연결 | 축4개·시점·확대 |
| rot3dmo3.swf | 대칭4개 원자·6개 연결 | 축4개·시점·확대 |
| rot3dmo4.swf | 구형5개 원자·10개 연결 | 축4개·시점·확대 |

## 증거

- `modern-next-source-report.json`: 12개 AS2의 비공개 원본 함수를 독립 실행하여 204,499개 수치/경로 성분 대조. 원본 selector의 모든 유한 값, 5,000개 진동자 시간 단계, 351개 파동묶음 시간 단계와 표본 난수/시점 포함.
- `modern-next-runtime-report.json`: 실제 원본 Ruffle 12개, 1,693개 수치 대조. 원본 j1/j2 조합, m 5개, 이온4개, B26개의 실제 포인터 입력 및 자연 진행 상태 포함. 계측은 읽기 전용 AVM1 observer로 메모리 사본에만 추가하며 원본 SWF/clock을 변경하지 않는다.
- 현미경 좌표는 원본 MovieClip setter의 매 프레임 .05px 절삭을 반영한다. 독립 계산 모델은 비양자화된 원본 산술도 함께 유지한다.
- `modern-next-ui-report.json`: 320/768/1360px 36개 UI 검사. 재생, 정지, 탐색, 끌기, CSV, static timeline 부재와 라이트/다크 확인.
- `modern-next-semiconductor-source-report.json`: private AS3 원본 method에서 type annotation만 제거한 독립 실행. 2,965개 산술/경로 대조. 원본 전체 격자와 유한 256개 carrier step 포함.
- `modern-next-semiconductor-ui-report.json`: 반도체 3개×3 viewport, 9개 검사. 데스크톱에서 전압125개와 각 이동단계257개를 전수 선택하고 실제 SVG 좌표를 확인한다.
- 반도체3개 scripted AS3 원본-runtime numerical telemetry는 아직 확인되지 않았다. 독립 원본 소스 대조를 실제 원본 런타임 증거로 바꾸어 집계하지 않는다.

## 표시 변경과 검증 범위

색상은 GNU 파랑과 회색으로 정리하고 경로 투명도.65를 사용한다. 정적 원본에는 재생·프레임바가 없다. 현대 브라우저에서 재생/정지, 느리게, 탐색, CSV와 offscreen pause를 추가했다. 원본의 일부 자동 시작 애니메이션은 리마스터에서는 재생 버튼으로 시작한다. 고준위 라벨은 겹치지 않도록 수치 판독으로 옮겼다. 각운동량 조합 도형은 같은 벡터/투영을 넓은 칸으로 재배치했다.

일반 좌표는 SVG 실수로 유지한다. 실제 원본 display 속성의 .05px twip 오차는 명시된 tolerance로만 대조한다. 원본 physics/data를 현대 데이터로 임의 교체하지 않는다. 모든 연속 시점, 모든 난수, 모든 무한 시간/입력 이력에 대한 동등성은 주장하지 않는다.

## 회전자 4개 추가 검증

`modern-next-rotor-source-report.json`: 원본 AS3의 Remake/run, Point3D Euler 변환, Molecule.rePosition, LinkByTwoAtom 및 Cam 투영을 독립 실행하여 417,280개 성분을 대조했다. 축 없음/x/y/z의 각 0…500 모든 단계와 7개 확대값을 확인했다. 실제 원본 AS3 런타임 수치 대조는 대기 중이다.

`modern-next-rotor-ui-report.json`: 320/768/1360px의 12개 화면에서 재생/정지, 축 변경, 시점 끌기, 확대, CSV를 확인한다. 데스크톱에서는 모든 축의 모든 유한 단계 선택과 실제 SVG 좌표를 검증한다. 축 선택 없음에서는 재생 버튼을 비활성화하고 진행바를 숨긴다. 원본 선형 회전자는 축 선택 없음, 일부 다른 원본은 x축 선택으로 시작한다. 리마스터는 모두 x축 선택·일시정지로 시작하여 조작이 명확하도록 했다. 기본 원본 timer50Hz, 느리게.25배를 제공한다. 원본 press-origin 누적 시점 대신 incremental pointerdrag를 쓴다.
