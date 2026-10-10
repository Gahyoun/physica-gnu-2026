# 마지막 69개 HTML/SVG 리마스터 검토

2026-10-10. 기존 449개에 남은 69개의 개별 대응본을 추가해 원본 SWF 518개 모두에 HTML/SVG 화면을 제공한다. 원저자 정기수 명예교수님과 원본 출처를 유지하며 원본 Ruffle 목록은 별도로 보존한다. 새 SVG의 원·선·면·텍스트를 사용하고 원본 비트맵/프레임 이미지를 리마스터로 재생하지 않는다.

## 구현과 검사

광학20, 현대물리21, 일반물리7, 착시·색감도·레이저21을 병렬로 나눴다. 개별 사양은 원본 전체 URL과 SHA256을 가진다. 파일명이 같은 서로 다른 원본을 혼동하지 않는다. 대응본은 교재 페이지와 리마스터 목록에서 직접 조작한다.

파랑·회색과 GNU 지정색, 0.65 투명도 곡선, 회색 용수철, 아래쪽 타임라인, 기본 빠르게/느리게를 적용한다. 정적인 나침반·편광 스위치·광학 도식에는 가짜 재생바를 두지 않는다. 화면 밖과 숨겨진 탭은 멈추고 격자·양자 계산은 worker로 수행한다. 착시·레이저의 큰 수치 이력은 모델별 모듈로 나눠 해당 모델에서만 불러온다. 공통 사양 초기 로드는 약13KB다.

원본 계산식을 독립 소스 VM/수치 디코더와 비교하고 실제 원본 Ruffle 결과는 별도 메모리 진단 사본으로 관측했다. 원본 파일 및 기존 태그/ABC/타이머의 보존을 검사한다. 세 화면 크기320/768/1360의 개별 UI207건과 누적 실제 읽기 재생1554건을 따로 기록한다. 최종 합격 수치와 현재 해시는 parallel-remaster-final69-report.json 및 각 보고서가 기준이다. 수식은 빌드 단계에서 KaTeX로 컴파일되며 수식 페이지571개×3폭1713건의 잘림/원문TeX/오류 표시 검사를 통과한다.

통합 검사는 3D전위의 끝 탐색 직후 재생 경합을 발견했다. 아직 처리 중인 끝 단계와 현재 표시 단계를 함께 확인해 재시작하고, 뒤늦은 계산 응답을 현재 화면에 적용하지 않는다. 경계 값 변경도 표시된 장의 스냅샷을 기준으로 처리해 미래 계산 단계가 입력값에 섞이지 않도록 한다. 빠른 복합 입력은 이벤트 순서를 유지하며 물리·표시 변경 108조합을 회귀 검사했다. 해당 모델군은 최종 수정 후 세 화면 크기에서 다시 검사했다.

## 원본 대조의 한계와 표현 차이

- 원본 Ruffle의 시작 성공과 HTML 재생 성공을 모든 원본 입력/이벤트 이력의 동등성으로 세지 않는다. 연속 슬라이더와 무한한 조작 이력의 완전 전수 대조는 완료되지 않았다.
- 착시1–16은 같은 길이/지름/평행/색/높이 등의 학습 의미를 새 선과 면으로 표현한다. 길이145인 착시2 두 목표선은 전50프레임×3폭에서 같은 길이를 유지한다. 착시5는 한 개의 연결된∧를 가림판으로 가린다. 새 배치와 모든 원본 장면의 안무/픽셀은 동일하다고 주장하지 않는다. 원본 좌표 CSV는 현재 SVG 좌표와 구분해 표시한다.
- 착시15·16의 원본 중첩 ‘확인’ 버튼은 현 Ruffle에서 클릭 후 타임라인을 진행하지 않았다. 이를 통과한 원본 조작이라고 기록하지 않는다. 원본 태그를 보존한 메모리 진단 사본에서 root.play 호출로 프레임을 진행해 모든50프레임의 자연 순서를 관측했다. 리마스터의 재생/확인/재시작은 실제 HTML 화면에서 별도로 검사했다.
- 레이저2/3/4준위는 원본 main timeline과 하위 입자 좌표를 숫자로 읽어 새 준위·원·화살표로 그린다. 실제 runtime은 main의 모든 프레임과 첫 입자의 제한된 위치를 관측한다. 모든 하위 입자의 위상·그림을 완전 대조한 것은 아니다.
- 원본 색감도 곡선은 수치 표본으로 읽어 다시 그렸다. 정밀 생리학 측정 데이터가 아니다. 원본 RGB 함수는381파장×5밝기 source 비교와12파장의 실제 Ruffle 호출로 검사했다. 실제 파장 색 띠에는 학습에 필요한 스펙트럼색을 사용한다.
- 번개는 원본140프레임/12fps를 따라 새 벡터 분기/밝기로 표현한다. 모든 원본 그림과 장면 시점의 정확한 동등성은 미확인이다.
- 광학 rp2의 실제 runtime은 슬라이더와 분해능 분류만 관측한다. 비공개 내부 곡선은 소스 검사로 구분한다. 결정 질점의 위치는 원본 한 twip 0.05px 양자화 오차를 기록한다.
- 나침반 원본 행렬의 주기각/고정소수점 차이0.066°를 명시한다. 복잡한3D 등전위면과 광학 투영은 새 표시이며 원본 계산 격자를 변경하지 않는다.
- 현대물리는 원본 타이머/준위/파동 계산을 유지한다. 무작위 초기값을 읽어 비교하는 경우 입력 조건만 한 번 맞추며 이후 운동 좌표를 원본에서 복사해 HTML 값으로 쓰지 않는다. 원본과 동일한 모든 무작위 실행을 주장하지 않는다.

현대물리 세부 범위는 [modern-final69-audit.md](modern-final69-audit.md), 광학 세부 범위는 [optics-final69-audit.md](optics-final69-audit.md), 일반물리는 [general-final69-remaster.md](general-final69-remaster.md), 독립 착시 검토와 수정은 [general-final69-visionlaser-review.md](general-final69-visionlaser-review.md)를 참고한다. 실제 runtime/source/UI 보고서는 서로 다른 근거다.

## 항목별 연결

| 분야 | 제목 | ID | 교재 | 소스 비교 | 실제 runtime 비교 |
| --- | --- | --- | --- | ---: | ---: |
| optics | 코마를 가진 파면 | `flash-88dcd0ec7ac4ff7a` | [교재](../lesson-5-5-6-1.html#native-opticsfinal69-flash-88dcd0ec7ac4ff7a) | 2,547,928 | 876 |
| optics | 구면수차를 가진 파면 | `flash-a88e894980293e64` | [교재](../lesson-5-5-6-1.html#native-opticsfinal69-flash-a88e894980293e64) | 1,839,392 | 634 |
| optics | 수차와 회절무늬 | `flash-a503a95f16f31f43` | [교재](../lesson-5-5-6-3.html#native-opticsfinal69-flash-a503a95f16f31f43) | 70,564 | 598 |
| optics | 결상계의 이상적인 파면 | `flash-833b671bb8f1fdf2` | [교재](../lesson-5-5-6-1.html#native-opticsfinal69-flash-833b671bb8f1fdf2) | 7,098 | 538 |
| optics | 광학기기의 분해능 | `flash-c8db27599ba6e756` | [교재](../lesson-5-5-2-2.html#native-opticsfinal69-flash-c8db27599ba6e756) | 31,164 | 6 |
| optics | 렌즈의 비점수차 | `flash-5b4df2e3e2d7f004` | [교재](../lesson-5-2-10-2.html#native-opticsfinal69-flash-5b4df2e3e2d7f004) | 1,306 | 106 |
| optics | 전반사 | `flash-e1f3b51663ebef1c` | [교재](../lesson-5-2-7-1.html#native-opticsfinal69-flash-e1f3b51663ebef1c) | 39,930 | 20 |
| optics | 프레넬 렌즈 | `flash-bcf751c6bdf6ac2e` | [교재](../lesson-5-2-9-3.html#native-opticsfinal69-flash-bcf751c6bdf6ac2e) | 1,390 | 12 |
| optics | 다중슬릿 간섭 | `flash-326e10f58c5fc432` | [교재](../lesson-5-4-3-2.html#native-opticsfinal69-flash-326e10f58c5fc432) | 11,046 | 16 |
| optics | 광활성의 물체에서의 편광면의 회전 모양 | `flash-45e0cb978ce7c1c6` | [교재](../lesson-5-3-6-1.html#native-opticsfinal69-flash-45e0cb978ce7c1c6) | 90,042 | 584 |
| optics | 복굴절 물질을 통과하는 빛 | `flash-b88fb994bb3e1f8a` | [교재](../lesson-5-3-4-1.html#native-opticsfinal69-flash-b88fb994bb3e1f8a) | 2,086 | 54 |
| optics | 결정에서 빛의 전파 | `flash-a31c6f6c9dcd2fd5` | [교재](../lesson-5-3-4-1.html#native-opticsfinal69-flash-a31c6f6c9dcd2fd5) | 15,826 | 26 |
| optics | 광고립장치에서 빛이 투과 및 차단되는 상황 | `flash-2c0dad26bfbc41ed` | [교재](../lesson-5-3-7-1.html#native-opticsfinal69-flash-2c0dad26bfbc41ed) | 1,086 | 66 |
| optics | 커 셀 | `flash-8281e1704ab81337` | [교재](../lesson-5-3-7-2.html#native-opticsfinal69-flash-8281e1704ab81337) | 1,098 | 201 |
| optics | 포켈스 셀을 이용한 셔터 | `flash-a382e596416eab8c` | [교재](../lesson-5-3-7-3.html#native-opticsfinal69-flash-a382e596416eab8c) | 722 | 66 |
| optics | 꼬인 네마틱 액정 모의실험 | `flash-4a361b3b26555a71` | [교재](../lesson-5-3-8-4.html#native-opticsfinal69-flash-4a361b3b26555a71) | 1,459,366 | 540 |
| optics | 이색성 결정에 의한 선편광 | `flash-62dbf7d5b9674686` | [교재](../lesson-5-3-2-3.html#native-opticsfinal69-flash-62dbf7d5b9674686) | 1 | 3 |
| optics | 광학기구의 존스 행렬 | `flash-c5aa8a53793797ab` | [교재](../lesson-5-3-5-3.html#native-opticsfinal69-flash-c5aa8a53793797ab) | 740 | 54 |
| optics | 푸앵카레 구 | `flash-78a4cbab0b8ef677` | [교재](../lesson-5-3-5-4.html#native-opticsfinal69-flash-78a4cbab0b8ef677) | 382,698 | 18 |
| optics | 산란된 빛의 편광 상태 | `flash-95128c2fde383176` | [교재](../lesson-5-3-3-1.html#native-opticsfinal69-flash-95128c2fde383176) | 1,858 | 432 |
| visionlaser | 암모니아로부터의 마이크로파 발생 | `flash-e72128ed0d1a1c0d` | [교재](../lesson-5-6-1-3.html#native-visionlaser-final69-flash-e72128ed0d1a1c0d) | 501 | 127 |
| visionlaser | 2 준위 원자 | `flash-58bd5e6343d0b297` | [교재](../lesson-5-6-2-4.html#native-visionlaser-final69-flash-58bd5e6343d0b297) | 49,714 | 800 |
| visionlaser | 3 준위 원자의 펌핑과 밀도반전의 과정 | `flash-ba4e68a82d2bcb7e` | [교재](../lesson-5-6-2-4.html#native-visionlaser-final69-flash-ba4e68a82d2bcb7e) | 31,250 | 300 |
| visionlaser | 4 준위 원자의 펌핑과 밀도반전의 과정 | `flash-dc2240f1cd33fdbb` | [교재](../lesson-5-6-2-4.html#native-visionlaser-final69-flash-dc2240f1cd33fdbb) | 45,255 | 402 |
| visionlaser | 세 가지 추상체의 파장별 감도 그래프 | `flash-3ef0b27f92a0167e` | [교재](../lesson-5-1-6-1.html#native-visionlaser-final69-flash-3ef0b27f92a0167e) | 1,905 | 65 |
| visionlaser | 착시 1 | `flash-4536001836ccd77c` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-4536001836ccd77c) | 677 | 24 |
| visionlaser | 착시 2 | `flash-3faab689d25799e8` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-3faab689d25799e8) | 2,163 | 54 |
| visionlaser | 착시 3 | `flash-fb0581a89a156c72` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-fb0581a89a156c72) | 1,465 | 44 |
| visionlaser | 착시 4 | `flash-40e242d41c0c96fa` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-40e242d41c0c96fa) | 2,013 | 62 |
| visionlaser | 착시 5 | `flash-7746e258bd68068f` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-7746e258bd68068f) | 842 | 27 |
| visionlaser | 착시 6 | `flash-86aa98d7539f79b0` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-86aa98d7539f79b0) | 842 | 29 |
| visionlaser | 착시 7 | `flash-9cddf79b62881ba6` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-9cddf79b62881ba6) | 1,690 | 45 |
| visionlaser | 착시 8 | `flash-f5fbc403edc871ab` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-f5fbc403edc871ab) | 842 | 29 |
| visionlaser | 착시 9 | `flash-4761a9e31f05f6a9` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-4761a9e31f05f6a9) | 1,777 | 42 |
| visionlaser | 착시 10 | `flash-be465f1359e1fc24` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-be465f1359e1fc24) | 512 | 17 |
| visionlaser | 착시 11 | `flash-600791362273ca0d` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-600791362273ca0d) | 842 | 29 |
| visionlaser | 착시 12 | `flash-076f3a9b0422707e` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-076f3a9b0422707e) | 842 | 29 |
| visionlaser | 착시 13 | `flash-c45b00a29f9dea7d` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-c45b00a29f9dea7d) | 2,640 | 62 |
| visionlaser | 착시 14 | `flash-04e263fc3721f5df` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-04e263fc3721f5df) | 4,138 | 45 |
| visionlaser | 착시 15 | `flash-c06501cc89d19195` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-c06501cc89d19195) | 2,595 | 58 |
| visionlaser | 착시 16 | `flash-b64d39d51c05193d` | [교재](../lesson-5-1-7-1.html#native-visionlaser-final69-flash-b64d39d51c05193d) | 2,443 | 58 |
| modern | 주기율표 | `flash-43834abb48f3463d` | [교재](../lesson-6-5-2-4.html#native-modern-final69-flash-43834abb48f3463d) | 2,596 | 693 |
| modern | 광자와 전자의 충돌 | `flash-53b1f7b53747d01e` | [교재](../lesson-6-2-1-7.html#native-modern-final69-flash-53b1f7b53747d01e) | 1,442 | 20 |
| modern | 공동 | `flash-1140491ce19ba43a` | [교재](../lesson-6-2-1-1.html#native-modern-final69-flash-1140491ce19ba43a) | 2,100 | 30 |
| modern | 프랑크-헤르츠 실험의 모의실험 | `flash-a79d576b4d9393cf` | [교재](../lesson-6-2-4-4.html#native-modern-final69-flash-a79d576b4d9393cf) | 30,030 | 32 |
| modern | 기체의 스펙트럼 | `flash-abc9f1ad0cf746d5` | [교재](../lesson-6-2-2-1.html#native-modern-final69-flash-abc9f1ad0cf746d5) | 27 | 10 |
| modern | 공유결합 모의실험 | `flash-73be9774daba6348` | [교재](../lesson-6-6-1-4.html#native-modern-final69-flash-73be9774daba6348) | 16,300 | 10 |
| modern | 속박상태의 파동함수 | `flash-9b41f82783cf8a46` | [교재](../lesson-6-4-7-1.html#native-modern-final69-flash-9b41f82783cf8a46) | 4,100 | 120 |
| modern | 마이컬슨-몰리의 실험의 비유 | `flash-dec768b8e9c2034f` | [교재](../lesson-6-1-1-2.html#native-modern-final69-flash-dec768b8e9c2034f) | 597 | 15 |
| modern | 마이컬슨-몰리의 실험 | `flash-88b7e17d5c10ff99` | [교재](../lesson-6-1-1-2.html#native-modern-final69-flash-88b7e17d5c10ff99) | 1,650 | 20 |
| modern | 휘어진 공간에서의 물체의 운동 | `flash-eb2235affe5d7d5f` | [교재](../lesson-6-1-9-2.html#native-modern-final69-flash-eb2235affe5d7d5f) | 400 | 20 |
| modern | 가속되는 우주선과 중력이 작용하는 우주선 | `flash-c8db8a44814f023b` | [교재](../lesson-6-1-9-1.html#native-modern-final69-flash-c8db8a44814f023b) | 6,300 | 100 |
| modern | 빛의 경로 | `flash-668f1814a44090a8` | [교재](../lesson-6-1-9-1.html#native-modern-final69-flash-668f1814a44090a8) | 500 | 20 |
| modern | 시공간 좌표 | `flash-2981dda64c3b445e` | [교재](../lesson-6-1-5-3.html#native-modern-final69-flash-2981dda64c3b445e) | 720 | 10 |
| modern | 쌍둥이 역설에 대한 시공간 좌표 | `flash-e80fec4ff9e94883` | [교재](../lesson-6-1-7-2.html#native-modern-final69-flash-e80fec4ff9e94883) | 1,803 | 20 |
| modern | 쌍둥이 역설의 해소 | `flash-ca65a61665935993` | [교재](../lesson-6-1-7-1.html#native-modern-final69-flash-ca65a61665935993) | 1,803 | 25 |
| modern | 시공간연속체 | `flash-113614d4bfcaccf9` | [교재](../lesson-6-1-2-1.html#native-modern-final69-flash-113614d4bfcaccf9) | 72 | 5 |
| modern | 동시성의 의미 | `flash-880647c22c26343c` | [교재](../lesson-6-1-2-1.html#native-modern-final69-flash-880647c22c26343c) | 2,200 | 25 |
| modern | 시계 맞추기 | `flash-b9557638baf4eee6` | [교재](../lesson-6-1-2-1.html#native-modern-final69-flash-b9557638baf4eee6) | 8,190 | 15 |
| modern | 원소의 결정구조 | `flash-41f497a574da2503` | [교재](../lesson-6-8-1-6.html#native-modern-final69-flash-41f497a574da2503) | 2,594 | 741 |
| modern | 불순물이 주입된 격자의 양자상태 | `flash-acf2dab16134634a` | [교재](../lesson-6-8-4-4.html#native-modern-final69-flash-acf2dab16134634a) | 99,542 | 55 |
| modern | 화합물반도체의 후보군 | `flash-c0b1169024f0a018` | [교재](../lesson-6-8-4-1.html#native-modern-final69-flash-c0b1169024f0a018) | 498 | 288 |
| general | 전류가 만드는 자기장 | `flash-b66fa4af7d939944` | [교재](../lesson-4-5-1-2.html#native-general-final69-flash-b66fa4af7d939944) | 12 | 18 |
| general | 번개 | `flash-f3ab84b3b8f2ee77` | [교재](../lesson-4-3-1-2.html#native-general-final69-flash-f3ab84b3b8f2ee77) | 143 | 8 |
| general | 정육면체 내부의 전위 분포 | `flash-1bf714eda508b5be` | [교재](../lesson-4-3-2-5.html#native-general-final69-flash-1bf714eda508b5be) | 228,494 | 3,584 |
| general | 쌍극자와 유사한 구조의 전위 분포 | `flash-7ba7f761a85e3395` | [교재](../lesson-4-3-2-5.html#native-general-final69-flash-7ba7f761a85e3395) | 272,434 | 3,136 |
| general | 가장자리 전위가 주어진 퍼텐셜 | `flash-37a9b32a0ca67516` | [교재](../lesson-4-3-2-3.html#native-general-final69-flash-37a9b32a0ca67516) | 53,792 | 567 |
| general | 중심 전위가 주어진 퍼텐셜 | `flash-ffc4e4eab856732d` | [교재](../lesson-4-3-2-2.html#native-general-final69-flash-ffc4e4eab856732d) | 33,620 | 567 |
| general | 강제진동 | `flash-60bbd9b257ac7ced` | [교재](../lesson-1-2-6-1.html#native-general-final69-flash-60bbd9b257ac7ced) | 28,800 | 44 |

## 재검사

개별 도구는 tools/{general,optics,modern,visionlaser}-final69-*-check.mjs 또는 각 분야 문서에 기록되어 있다. 전체 읽기 재생은 node tools/playback-browser-audit.mjs, 수식 화면은 node tools/math-browser-check.mjs, 통합근거는 node tools/final69-progress.mjs로 확인한다. private preview의 추출 원본 코드/그림/진단SWF는 공개 사이트와 Git에 넣지 않는다.
