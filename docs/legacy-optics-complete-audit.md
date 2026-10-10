# 광학 Java 프로그램 잔여 25종 이식 및 대조

2026-10-10. 기존 광학 Java 14종에 25개 실행 클래스의 HTML 이식을 추가했다. 총 39개 실행 클래스이며, 볼록/오목 렌즈의 동일 클래스 HTML 래퍼는 별칭으로 통합했다. 원본 Flash 518종과는 별개의 Java 프로그램이다.

## 원본 자료와 방법

원본 HTML의 code/codebase/param을 확인하고 .class 의존성을 재귀 수집했다. 원본 바이너리는 공개 assets에 포함하지 않고 `/private/tmp/physica-legacy-optics/closure/`에서만 실행했다. CFR 0.152로 수식·모형·입력 구성을 읽었고, Java 11 AWT/Swing을 실행하여 실제 초기화, 화면 렌더링, 입력 이벤트 결과를 조사했다. 원본 GUI의 결과 및 해시는 `legacy-original-gui-report.json`, 실행 클래스 SHA256는 `src/legacy-optics.json`의 provenance에 남겼다.

## 실행 클래스별 이식

| 클래스 | 원본 자료 | HTML 모형 | 원본 GUI 유한 조합 |
|---|---|---|---|
| huyray1.class | [파면과 광선의 전파](http://physica.gnu.ac.kr/phtml/bank/sim/huyray1.html) | ray /  | 1 (passed) |
| ChromaDiagram.class | [CIE 색도표](http://physica.gnu.ac.kr/phtml/bank/sim/ChromaDiagram.html) | cie /  | 256 (passed) |
| lens01.class | [볼록렌즈의 결상과정을 알아보는 모의실험](http://physica.gnu.ac.kr/phtml/bank/sim/lens01.html) | lens / simple | 1 (passed) |
| lens02.class | [볼록렌즈에 의한 상의 왜곡 모의실험](http://physica.gnu.ac.kr/phtml/bank/sim/lens02.html) | lens / object2d | 1 (passed) |
| single.class | [얇은 렌즈의 결상](http://physica.gnu.ac.kr/phtml/bank/sim/single.html) | instrument / single | 1,152 (passed) |
| twolens.class | [두 렌즈에 의한 결상](http://physica.gnu.ac.kr/phtml/bank/sim/twolens.html) | instrument / twolens | 960 (passed) |
| threelens.class | [세 렌즈에 의한 결상](http://physica.gnu.ac.kr/phtml/bank/sim/threelens.html) | instrument / threelens | 960 (passed) |
| singlestop.class | [조리개의 원리를 알아보는 모의실험](http://physica.gnu.ac.kr/phtml/bank/sim/singlestop.html) | instrument / singlestop | 960 (passed) |
| Polarize3.class | [x 선편광의 전기장과 자기장이 진동하는 모양](http://physica.gnu.ac.kr/phtml/bank/sim/Polarize3.html) | polar / em | 1 (passed) |
| Polarize5.class | [일반적인 편광](http://physica.gnu.ac.kr/phtml/bank/sim/Polarize5.html) | polar / circular | 1 (passed) |
| Polari7.class | [자연광의 편광상태](http://physica.gnu.ac.kr/phtml/bank/ani/Polari7.html) | polar / ensemble | 2 (passed) |
| Polari8.class | [편광판의 작동](http://physica.gnu.ac.kr/phtml/bank/ani/Polari8.html) | polar / analyzer | 4 (passed) |
| Phasor2.class | [두 원운동의 합성운동과 위상자](http://physica.gnu.ac.kr/phtml/bank/ani/Phasor2.html) | phasor /  | 4 (passed) |
| Hologram1.class | [두 평면파의 간섭무늬](http://physica.gnu.ac.kr/phtml/bank/ani/Hologram1.html) | hologram /  | 1 (passed) |
| wavefront2.class | [굴절의 법칙에 대한 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/wavefront2.html) | refraction /  | 2 (passed) |
| rainbow.class | [무지개의 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/rainbow.html) | rainbow /  | 4 (passed) |
| optfiber.class | [광섬유의 원리에 대한 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/optfiber.html) | fiber /  | 6 (passed) |
| lens01m.class | [확대경의 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/lens01m.html) | lens / magnifier | 1 (passed) |
| microscope.class | [현미경의 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/microscope.html) | instrument / microscope | 6,720 (passed) |
| kepler.class | [케플러식 굴절망원경의 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/kepler.html) | instrument / kepler | 3,200 (passed) |
| newton.class | [뉴턴식 반사망원경의 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/newton.html) | instrument / newton | 3,200 (passed) |
| binoculars.class | [쌍안경의 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/binoculars.html) | instrument / binoculars | 160 (passed) |
| ThinFilmTheory.class | [박막에서의 빛의 간섭 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/ThinFilmTheory.html) | filmtheory /  | 32 (passed) |
| NewtonRing.class | [뉴턴 링의 간섭 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/NewtonRing.html) | ring /  | 2 (passed) |
| ThinFilm1.class | [막의 간섭 모의실험](http://physica.gnu.ac.kr/phtml/bank/exp/ThinFilm1.html) | film /  | 16 (passed) |

각 모델은 선명한 새 SVG 도형 또는 계산된 Canvas 간섭무늬로 재구성했다. GNU 파랑/회색을 사용하고 그래프 곡선 불투명도는 0.65이다. CIE 색도표의 색 채움은 색 자체가 실험 결과이므로 원본 RGB 변환값을 표시한다. 정적 렌즈·색도·간섭무늬에는 재생과 프레임바를 만들지 않았다. 파면, 편광 파동열, 위상자, 박막 파동, 홀로그램, 광선 상추적은 실제 도형/수치가 변하며 재생/일시정지/느리게를 제공한다.

## 원본 JVM 수치 비교

`tools/legacy-optics-rest-reference.java`는 원본 .class의 메서드를 reflection으로 호출한다. 대조 대상 구현을 원본으로 삼지 않았다. `tools/legacy-optics-rest-compare.mjs`가 HTML 물리 커널과 비교한다.

| 원본 커널 | 비교한 스칼라 수 | 최대 정규화 오차 | 실패 |
|---|---:|---:|---:|
| ThinLens | 8,100 | 2.45e-16 | 0 |
| ThinLensDistance | 2,700 | 1.95e-15 | 0 |
| rIndex | 16,000 | 1.1e-15 | 0 |
| raytrace1 | 4,800 | 4.8e-14 | 0 |
| RGBcolor | 12,000 | 0 | 0 |
| SpecColor | 6,000 | 0 | 0 |
| 합계 | **49,600** | **4.80×10⁻¹⁴ 이하** | **0** |

기존 14종의 43,487개 비교와 합하면 광학 Java JVM 수치 비교는 총 93,087개이다. 자세한 기존 비교는 `legacy-optics-audit.md`를 참고한다. 위 비교는 공통 광학 커널의 유한 표본이며, 25개 모든 프로그램의 모든 화면 픽셀·입력 조합이 동일함을 의미하지 않는다.

## 브라우저 확인

**25종 × 2 테마 × 2 화면 폭 = 100 시나리오 모두 통과, JavaScript 오류 0.** 폭 320/1280에서 모든 노출 슬라이더의 최소/최대, 선택 항목 각각, 체크박스 상태, 초기화, CSV 저장, 수평 넘침을 조사했다. 시간 모형은 실제 SVG/Canvas 도형 및 시간 값의 변화와 일시정지 후 동일한 상태를 확인했다. 화면 밖/탭 숨김에서는 rAF를 멈추고 다시 보이면 시간 기준을 재설정한다.

`tools/legacy-optics-browser-test.mjs`로 반복할 수 있다. 물리 단위 테스트는 `node --test tools/legacy-optics.test.mjs` 21개 통과.

## 확인 범위와 남는 차이

- 원본 GUI의 모든 유한 Choice/Checkbox 조합을 실행했다. 하지만 텍스트 필드의 무한 값, 연속 포인터 좌표/드래그 경로와 모든 입력 조합 전체를 전수 증명하지는 않았다. HTML 브라우저 검증은 개별 조작 중심으로 수행했다.
- 원본 lens01/02의 볼록/오목 HTML 래퍼는 동일 실행 클래스를 공유한다. 별칭을 한 모델로 연결하고 모형 내 볼록/오목 선택을 제공한다.
- 원본 Polari7/8의 무작위 진폭·파장·위치·위상·유한 파동열 분포와 편광판의 실제 구획을 보존했다. 반복 검증을 위해 난수 시드를 고정했으므로 원본의 매 실행 난수 실현과 동일하지 않다.
- Hologram1 원본은 Java 11 verifier가 오래된 LocalVariableTable을 거부하여 원본 GUI를 `-noverify`로 실행했다. HTML 필름은 원본 10개 임의 픽셀 샘플의 누적을 기대 감광 확률로 표시한다. 원본과의 확률별 픽셀 일치는 주장하지 않는다.
- ThinFilmTheory의 원본 정수 화면 경계 반올림에 의한 위상량을 HTML의 연속 물리 두께 식으로 표현했다. 원본 화면 해상도에 의한 차이는 남는다.
- 원본 포인터 전용 물체/초점/광학면 조작에 명시적인 HTML 슬라이더와 SVG 드래그를 추가했다. 이 슬라이더의 끝값을 원본 수치 입력 범위로 오인하지 않도록 provenance에 기록했다.
- 렌즈 초점 특이점은 무한대 안내로 처리하고 그래프를 끊어 연결 오류를 피했다. 렌즈, 거울, 조리개의 원본 rayTrace 0/1/2 aperture mode와 차단/stray 방향 규칙은 JVM 수치 대조를 통과했다.

추가 실제 포인터 QA에서 물체·렌즈·초점·광학면 중심/끝점/초점·물체 기준점/끝점·색도점·광원 등 16개 드래그를 확인했다. 광선이 손잡이를 가리는 SVG hit-testing 문제를 수정했다. 광섬유의 빠른 재생/느린 재생 시간은 동일 350 ms 표본에서 약 6.832/1.367 단계로 5배 차이가 났으며 화면 밖에서는 상태가 멈췄다. 이는 실제 포인터의 대표 동작 확인이며 모든 연속 경로의 전수 검증은 아니다.
