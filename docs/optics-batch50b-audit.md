# 광학 병렬 복원 batch50-02 · 20개

정기수 교수님의 원작을 경상국립대학교 파랑과 회색 중심의 새 SVG 도형·텍스트·HTML 조작으로 재구현했습니다. 원본 이미지나 프레임을 화면에 복사하지 않습니다. 전체 50개 묶음 중 광학 담당 20개입니다.

## 구현

색수차·코마수차·구면수차 7개, GRIN·신기루·미소 렌즈 5개, 분산·프리즘 8개를 구현했습니다. 19개는 원래 광선 계산을 시간에 따라 진행하며, 매질 분산 그래프 1개는 원래의 정적 계산이므로 재생 버튼이나 프레임 바가 없습니다. 10종의 원본 계산 커널 차이를 보존했습니다.

| ID | 원본 | 교재 |
|---|---|---|
| `flash-48312d928701845d` | 색지움한 이중렌즈 · `aberAChromatic1.swf` | [본문](../lesson-5-2-10-4.html#native-opticsbatch50b-flash-48312d928701845d) |
| `flash-93516affb99b4e72` | 렌즈의 색수차 모의실험 · `aberAChromatic2.swf` | [본문](../lesson-5-2-10-5.html#native-opticsbatch50b-flash-93516affb99b4e72) |
| `flash-0f0cac3815eda408` | 렌즈의 색수차 · `aberChromatic1.swf` | [본문](../lesson-5-2-10-4.html#native-opticsbatch50b-flash-0f0cac3815eda408) |
| `flash-07388eb4da3a86fe` | 렌즈의 코마수차 · `aberComa1.swf` | [본문](../lesson-5-2-10-2.html#native-opticsbatch50b-flash-07388eb4da3a86fe) |
| `flash-79e619a9377f414a` | 렌즈의 구면수차 · `aberSpherical1.swf` | [본문](../lesson-5-2-10-1.html#native-opticsbatch50b-flash-79e619a9377f414a) |
| `flash-7d2fe52076b32c5f` | 구면거울의 구면수차 · `aberSpherical2.swf` | [본문](../lesson-5-2-10-1.html#native-opticsbatch50b-flash-7d2fe52076b32c5f) |
| `flash-367212c8f467ffa9` | 렌즈의 수차 모의실험 · `aberSphericalSim1.swf` | [본문](../lesson-5-2-10-3.html#native-opticsbatch50b-flash-367212c8f467ffa9) |
| `flash-e8c180cb17a1844d` | GRIN 렌즈에서의 광선의 행동 · `focalgrinsim1.swf` | [본문](../lesson-5-2-9-1.html#native-opticsbatch50b-flash-e8c180cb17a1844d) |
| `flash-b26a7903e99b96d2` | 공간주기 길이의 GRIN 렌즈 · `focalgrinsim2.swf` | [본문](../lesson-5-2-9-1.html#native-opticsbatch50b-flash-b26a7903e99b96d2) |
| `flash-84d5263a3db489ee` | 신기루 · `focalgrinsim3.swf` | [본문](../lesson-5-1-2-3.html#native-opticsbatch50b-flash-84d5263a3db489ee) |
| `flash-93b905ce5b8916d1` | GRIN 렌즈의 모의실험 · `simgrin1.swf` | [본문](../lesson-5-2-9-2.html#native-opticsbatch50b-flash-93b905ce5b8916d1) |
| `flash-e9a8b8d594d9e6eb` | 미소 렌즈 배열에서 파면의 측정 · `simMicrolens1.swf` | [본문](../lesson-5-2-9-3.html#native-opticsbatch50b-flash-e9a8b8d594d9e6eb) |
| `flash-0a5ae23ffadf7614` | 몇몇 매질의 분산 · `graph_dispersion.swf` | [본문](../lesson-5-2-6-4.html#native-opticsbatch50b-flash-0a5ae23ffadf7614) |
| `flash-1acef37d4c4d3fa6` | 분산 프리즘 · `simdisprism1.swf` | [본문](../lesson-5-2-6-4.html#native-opticsbatch50b-flash-1acef37d4c4d3fa6) |
| `flash-6ae189308a390e4c` | 프리즘을 이용한 스펙트럼 측정 · `simdisprism2.swf` | [본문](../lesson-5-2-6-5.html#native-opticsbatch50b-flash-6ae189308a390e4c) |
| `flash-9252322b7f86ca63` | 프리즘에 대한 모의실험 · `simprism1.swf` | [본문](../lesson-5-2-6-3.html#native-opticsbatch50b-flash-9252322b7f86ca63) |
| `flash-f91b55d3bb43716c` | 프리즘 · `simprism2.swf` | [본문](../lesson-5-2-6-1.html#native-opticsbatch50b-flash-f91b55d3bb43716c) |
| `flash-76b8c6a36b336ddd` | 아베 프리즘 · `simprism3.swf` | [본문](../lesson-5-2-6-2.html#native-opticsbatch50b-flash-76b8c6a36b336ddd) |
| `flash-ad51d54b1b079073` | 도브 프리즘 · `simprism4.swf` | [본문](../lesson-5-2-6-2.html#native-opticsbatch50b-flash-ad51d54b1b079073) |
| `flash-190ba027454d6737` | 반사 프리즘 · `simprism5.swf` | [본문](../lesson-5-2-6-2.html#native-opticsbatch50b-flash-190ba027454d6737) |

광원과 광학 요소를 분리해 표시합니다. 스펙트럼 측정의 두 번째 렌즈는 광원으로 잘못 표시하지 않고 렌즈로 조작합니다. 미소 렌즈에는 CCD 검출면을, 구면수차에는 원래 계산한 포락선·축상 수차·혼동원 위치를 표시합니다. 매질 21종의 분산 계수와 원래 선택 값 전달 방식을 유지했습니다.

광선·그래프의 불투명도는 0.65, 기본 도형은 파랑과 회색입니다. 실제 계산과 화면의 하단 탐색 바를 함께 갱신합니다. 자연 종료와 일시정지를 구분해 종료 후 재생도 다시 시작합니다. 화면 밖 또는 숨긴 탭에서는 재생을 멈춥니다. 320·768·1360px 본문에서 조작과 배치를 확인했습니다.

## 검증

- [독립 원본 소스 계산 대조](optics-batch50b-source-report.json): 20개 / 194개 유한 입력 사례 / 382,437개 수치 비교, 모두 통과. 원본 AS3 메서드 본문을 별도 동적 범위 해석기로 실행하고 공개된 JS 계산 포트와 비교했습니다. 소스 해석기 결과를 실제 AVM2 런타임 결과라고 부르지 않습니다.
- [실제 원본 Ruffle 런타임 대조](optics-batch50b-runtime-report.json): 20개 / 124,092개 수치 비교, 모두 통과. 원래 ABC·문서 클래스·타이머 바이트를 보존한 채 별도의 읽기 전용 관측기를 추가했습니다. 원래 UI의 시작을 누른 뒤 자연스럽게 진행한 광선의 위치·방향·경계 통과 횟수와 파장을 비교했습니다. 원본 메서드 호출, 타이머 변경, 입력 강제 주입은 하지 않았습니다.
- [실제 본문 UI 검증](optics-batch50b-ui-report.json): 20개 × 3개 화면 너비 = 60개 사례 / 1113개 검사, 모두 통과. 실제 도형 이동, 정지 상태, 재생·초기화·자연 종료 후 재시작, 하단 탐색, 원래 수치·선택·체크·버튼, 키보드 위치 조작, 가로 폭, SVG 도형, 이미지·Canvas·원본 플레이어가 없는 리마스터 표시를 확인했습니다.
- `tools/optics-batch50b-physics.test.mjs`: 32개 단위 검사 통과. 굴절·전반사·두꺼운 렌즈·재료 분산 계수 및 20개 초기 계산의 유한성을 확인했습니다.

각 보고서에 원본 SHA-256, 포트·커널·어댑터·렌더러의 현재 SHA-256을 기록했습니다. 소스 계산의 중간 두 묶음은 최종 보고서에 필요한 결과와 범위 및 증거 해시를 모두 합쳤습니다. 첫 묶음 이후의 화면용 광원·렌즈 표시 변경과 종료 후 재생 시 즉시 화면·상태·탐색 바를 다시 그리는 수정은 계산 포트 변경이 아니며 최종 UI 60개 검사에 별도로 기록했습니다. 재생 이벤트와 같은 작업 안에서 상태와 탐색 바가 0으로 복귀하는지 검사하므로 첫 타이머를 기다리는 초기화 지연도 검출합니다.

## 대조의 한계

유한한 관측과 입력 대표값 대조입니다. 모든 연속 입력의 데카르트 곱, 무한한 조작 이력, 모든 시간 위상이나 원본 이벤트 스케줄을 전수 대조했다고 주장하지 않습니다. `fullEquivalence`와 `allOriginalInputHistoriesCompared`는 false입니다.

소스 대조는 수치 입력마다 최소·기본·중간·최대 값을 독립적으로 검사하고 매질 선택, 체크, 버튼, 두 위치 조작을 검사합니다. 기본 계산은 최대 100단계, 개별 입력은 12단계입니다. 계산 내부에서 원래 0.005 간격의 조밀한 적분을 수행하는 GRIN 사례는 기본 12단계·개별 6단계로 제한합니다. 신기루는 별도로 기본 100단계·개별 12단계를 확인했고, 자연 종료가 먼저 오면 그때 종료합니다. 정확한 한도는 개별 결과에 남겨 두었습니다.

실제 런타임의 무작위 초기 조건은 최초 원본 공개 매개변수·아직 진행하지 않은 광선 위치를 읽어 네이티브 초기 조건을 맞춥니다. 미소 렌즈의 임의 초기 파면 101점도 최초에만 읽었습니다. 이후 움직이는 좌표를 화면으로 복사하거나 각 단계에 주입하지 않고 네이티브 계산을 독립 진행해 비교합니다. 실제 원본 조작의 모든 조합 대조는 여전히 별도 과제입니다.

## 남은 광학 범위

이 20개 반영 후 원래 담당 96개 중 리마스터 구현 55개, 잔여 41개입니다. 이전 구현의 원본 런타임 미검증 항목은 이 구현 수치와 별도입니다. 공용 진행표는 상위 통합 담당이 갱신합니다.

- `flash-88dcd0ec7ac4ff7a` · 코마를 가진 파면
- `flash-a88e894980293e64` · 구면수차를 가진 파면
- `flash-a503a95f16f31f43` · 수차와 회절무늬
- `flash-833b671bb8f1fdf2` · 결상계의 이상적인 파면
- `flash-c8db27599ba6e756` · 광학기기의 분해능
- `flash-5b4df2e3e2d7f004` · 렌즈의 비점수차
- `flash-e1f3b51663ebef1c` · 전반사
- `flash-bcf751c6bdf6ac2e` · 프레넬 렌즈
- `flash-326e10f58c5fc432` · 다중슬릿 간섭
- `flash-e72128ed0d1a1c0d` · 암모니아로부터의 마이크로파 발생
- `flash-58bd5e6343d0b297` · 2 준위 원자
- `flash-ba4e68a82d2bcb7e` · 3 준위 원자의 펌핑과 밀도반전의 과정
- `flash-dc2240f1cd33fdbb` · 4 준위 원자의 펌핑과 밀도반전의 과정
- `flash-3ef0b27f92a0167e` · 세 가지 추상체의 파장별 감도 그래프
- `flash-4536001836ccd77c` · 착시 1
- `flash-3faab689d25799e8` · 착시 2
- `flash-fb0581a89a156c72` · 착시 3
- `flash-40e242d41c0c96fa` · 착시 4
- `flash-7746e258bd68068f` · 착시 5
- `flash-86aa98d7539f79b0` · 착시 6
- `flash-9cddf79b62881ba6` · 착시 7
- `flash-f5fbc403edc871ab` · 착시 8
- `flash-4761a9e31f05f6a9` · 착시 9
- `flash-be465f1359e1fc24` · 착시 10
- `flash-600791362273ca0d` · 착시 11
- `flash-076f3a9b0422707e` · 착시 12
- `flash-c45b00a29f9dea7d` · 착시 13
- `flash-04e263fc3721f5df` · 착시 14
- `flash-c06501cc89d19195` · 착시 15
- `flash-b64d39d51c05193d` · 착시 16
- `flash-45e0cb978ce7c1c6` · 광활성의 물체에서의 편광면의 회전 모양
- `flash-b88fb994bb3e1f8a` · 복굴절 물질을 통과하는 빛
- `flash-a31c6f6c9dcd2fd5` · 결정__h__에서 빛의 전파
- `flash-2c0dad26bfbc41ed` · 광고립장치에서 빛이 투과 및 차단되는 상황
- `flash-8281e1704ab81337` · 커 셀
- `flash-a382e596416eab8c` · 포켈스 셀을 이용한 셔터
- `flash-4a361b3b26555a71` · 꼬인 네마틱 액정 모의실험
- `flash-62dbf7d5b9674686` · 이색성 결정에 의한 선편광
- `flash-c5aa8a53793797ab` · 광학기구의 존스 행렬
- `flash-78a4cbab0b8ef677` · 푸앵카레 구
- `flash-95128c2fde383176` · 산란된 빛의 편광 상태
