# Java 광학 애플릿 복구 감사 기록

검증일: 2026-10-10. 이 문서는 Flash 518종의 복구와 구분되는 **실제 Java 애플릿 14종**의 HTML 재구현을 다룬다. 원본 실행 클래스, 슬라이더 범위, 함수와 출력은 원본 HTML/object 및 Java 바이트코드에서 확인했다. 단순히 원본 프레임을 재생하는 방식이 아니라 새 입력 요소·SVG 그래프·Canvas 필드를 사용한다. 미복구 Java 애플릿 전체의 완료를 뜻하지 않는다.

## 복구 범위

| 모델 | 원본 실행 클래스 | 복구한 입력·출력 |
|---|---|---|
| 가우스 빔의 3차원 모습 | `GaussianBeamApp` | 등값면, 빔 허리·레이리 길이, 3D 회전, z/y 단면; 세기·복소 진폭 |
| 에르미트-가우스 빔의 3차원 모습 | `HermiteGaussianBeamApp` | TEM x/y 차수, 등값면, 허리·레이리 길이, 회전·단면; 세기·복소 진폭 |
| 타원형 가우스 빔의 3차원 모습 | `EllipticBeamApp` | x/y 허리, 허리 위치차, 파장, 등값면·회전·단면 |
| 단일슬릿 회절의 진폭과 밝기 분포 | `diffpatern.SingleSlit` | 파장, 슬릿 폭, 노출; 회절무늬·진폭·세기 |
| 원형구멍 회절무늬 그래프 | `diffpatern.Circular` | 파장, 개구 반경, 노출; Airy 회절무늬·진폭·세기 |
| 이중슬릿 및 다중슬릿 회절의 진폭과 밝기 분포 | `diffpatern.ManySlit` | N=1–30, 간격·개방비율, 파장·노출; 다중슬릿 회절무늬·그래프 |
| 직사각형구멍의 회절 무늬 | `diffpatern.Retangular` | 가로·세로 개구 폭, 파장·노출; 2D 무늬·중앙 단면 |
| 1차원 회절과 푸리에 변환 | `twodimfft.diff1D` | 12개 투과함수, 배율·위치·진폭 오프셋·노출; 512점 FFT 세기/복소값 |
| 2차원 회절과 푸리에 변환결과 | `twodimfft.diff2D` | 12개 해석적 개구+임의 배열, 가로/세로 배율·회전·노출; 512² FFT |
| 빔의 회절과 전파 | `onedimquantum.gaussianBeam` | 원본 구현 4개 빔, 초기 폭·통과 개구 폭, 재생/정지, 빠른 기본/느리게; 현재장과 그래프 동기화 |
| rgb 색대응함수 | `CIErgbGraph` | 파장 슬라이더·그래프 클릭; 원본 NTSC RGB 색대응함수·음수값·CSV |
| XYZ 색대응 함수 | `CIEXYZGraph` | 파장 슬라이더·그래프 클릭; 원본 XYZ 색대응함수·CSV |
| 매질의 경계면에서의 파동의 반사와 위상변화 | `ReflectPhase` | 반사 위상 -180°–180°, 0°/180° 버튼, 재생/정지; 입사/반사/합성파 |
| 에르미트-가우스 빔의 가로 단면 | `beamoptics.hermiteGaussian` | TEM x/y 차수 0–5, z=-50–50; 원본 250² 가로 단면과 복소값 그래프 |

기본 경로는 `src/legacy-optics.json`의 원본 bank URL이다. 부모 빌드가 실행 클래스/제목과 일치하는 실제 원본 링크 별칭을 연결한다. VTK의 Hermite 빔과 별도 250² 가로 단면 애플릿은 다른 프로그램이므로 둘 다 제공한다. 두 프로그램의 제목을 구분하여 같은 본문 anchor가 두 모델을 가리키는 오류를 피했다.

## 원본 수치 실행 대조

원본 바이너리는 `/private/tmp/physica-legacy-optics`에 내려받아 CFR 0.152 및 javap로 조사했다. 바이너리 자체는 public assets로 복사하지 않았다. 원본의 **순수 수학 클래스**를 JVM에서 실행하고 같은 입력에 대한 새 JavaScript 함수와 대조했다. 원본 애플릿 창/VTK GUI를 실행한 것은 아니다.

| 실제 JVM 실행 대상 | 대조한 값 수 | 최대 정규화 오차 | 결과 |
|---|---:|---:|---|
| spMath Gaussian/Hermite/Elliptic 복소 빔 + MathSpc Bessel/N슬릿 + twodimfft 512점 FFT | 5,055 | 1.21 × 10⁻¹³ | 실패 0 |
| onedimquantum FFT1D/Complex, 입사 모드 4종 × 단계 0/200/800/999 × 1024점 × 실수/허수 | 32,768 | 1.60 × 10⁻¹⁴ | 실패 0 |
| CIEdata/Point3D, 파장 359–830.5nm를 0.5nm 간격으로 944점 × XYZ/NTSC RGB | 5,664 | 1.10 × 10⁻¹⁶ | 실패 0 |
| 합계 | **43,487** | **1.21 × 10⁻¹³ 이하** | **실패 0** |

오차 정의는 `abs(native-original)/(1+abs(original))`이다. 첫 묶음은 3개 빔별 100좌표의 세기/실수/허수 900값, Bessel 101값, 슬릿수 1–30의 3,030값, FFT 1,024값이다. 전파 원본은 1024점 중앙 재배열·(-1)^k 보정·INV 정규화를 사용한다. 새 구현은 일반 FFT 인덱스를 사용하며 원본 물리장과 동등함을 위 대조에서 확인했다. CIE 원본의 NTSC 행렬과 음수 RGB 성분을 유지한다.

원본 바이너리 식별용 SHA-256:

- `signedCWFtn.jar`: `b17d7ce3e9d24912ddfdf8efdddda44ed2c0dafa60aaf880eaa8dc2a402728fe`
- `diffpatern.jar`: `f66f8068ca1d4033e28069126c5b5654ba46ee15be8ccd044b7de4b8cf06baec`
- `twodimfft.jar`: `4e734d38533e89b3d26ecebbe537ed74b69f2e3ba4e180053c60d7531cb9bb4d`
- `gaussianBeam.class`: `75d552a689edef325454e6069dfb6bf6c44b3c1c901239677f34cd8a07acdaa7`
- `CIErgbGraph.class`: `d4abfc60fc77067ac8b4bd805be99f1dab5d3474150370c0753b03c55927c3ad`
- `CIEXYZGraph.class`: `6e6b83e477133187c644634a450bf6b03bc6d79a5518bf2719023e382b418004`
- `ReflectPhase.class`: `26998366d88479f54a2fff2c78d8baddd04502f71ce4bb95f3da91f36c0b5d42`
- `beamoptics.hermiteGaussian.class`: `c2e01fe33c0d0b50d2dbc090907d05abbba80d7c48a5d374d3fbbd54af036dae`

## 브라우저·수학 검증

- `node --test tools/legacy-optics.test.mjs`: **12개 테스트 통과**. 중심/영점/대칭성, 원본 별도 실행 참조값, Hermite 노드·반전 대칭, FFT round trip·Parseval·위치 위상, 13개 2D 개구의 중앙 진폭, 전파 에너지·개구 필터, CIE 보간·음수값, 반사 경계 노드, 별도 Hermite 단면 반경을 점검했다.
- 실제 Chromium, 14종 × 라이트/다크 × 1280/320px = **56개 모델 시나리오 통과**. **400개 슬라이더 양끝 입력**, 모든 선택 목록 옵션, 초기화, CSV(제공 모델), 시간 모델의 재생/일시정지, 가로 넘침을 점검했다. pageerror 0, horizontal overflow 0.
- 3차원 빔 Canvas는 디바이스 픽셀 비율에 맞춰 렌더링하고 고정 종횡비를 사용한다. FFT는 실제 512² 원본 격자이고 노출 변경에 대해 계산 결과를 캐시한다. 시간 모델은 화면 밖/탭 숨김에서 rAF를 정지한다. 전파 시간 누적은 프레임 속도와 무관하게 빠름 100단계/초, 느림 20단계/초로 진행한다. 실제 Chromium 550ms에서 빠름 57단계/느림 11단계(5.18배)를 확인했고, 즉시 화면 밖으로 스크롤한 뒤 계산 단계가 유지되고 재진입하면 다시 진행하는 것을 확인했다.
- 그래프 선 alpha=0.65, 파랑 #0069B4/청색 #009EDB와 회색을 사용한다. 정적 광학 함수·무늬에는 불필요한 재생 버튼이나 프레임바가 없다. 입력을 변경하면 무늬와 그래프가 같은 함수로 다시 계산된다.

임시 실행 증거: `original-values.csv`, `prop-original.csv`, `cie-original.csv`, `compare.mjs`, `prop-compare.mjs`, `cie-compare.mjs`, `ui-check.mjs`, `ui-result.json`은 위 private tmp 경로에 있다. 확인용 명령은 각 compare 스크립트를 Node로 실행하거나 JVM Oracle.java/PropagationOracle.java/CIEOracle.java를 해당 원본 클래스와 함께 실행하는 것이다. 공개 저장소의 반복 검증은 원본 바이너리를 요구하지 않는 위 12개 수학 테스트로 수행한다.

## 명시적인 차이·잔여 범위

- 3차원 빔: 원본 VTK 등값면을 경량 표본 교차점으로 그린다. 원본 스칼라 빔 함수는 대조했으나 VTK GUI 픽셀·모든 회전 조작과의 동일성은 검증하지 않았다. 새 z/y 단면 그래프는 학습 보조이다.
- FFT 2D: 원본 7개 사진 투과체는 포함하지 않았다. 12개 해석적 개구와 임의 배열을 제공하며 임의 배열은 반복 검증 가능한 시드를 사용하므로 원본 Math.random과 개별 결과가 다르다. 전체 원본 FFT2D 클래스 GUI 실행 대조는 수행하지 않았다.
- 원형 개구: 원본 40항 Bessel Taylor 근사와 r>30의 인위적 0 반환을 안정적인 Bessel 계산으로 개선했다. 큰 인수에서 원본 결과와 의도적으로 다를 수 있다.
- 빔 전파: 원본 선택 목록의 Hermite 2/Cosine 항목은 원본 generateFtn switch가 구현하지 않았다. 실제 원본이 생성하는 4개 모드만 제공한다. 원본 누적 시간 3D 표면은 현재 복소장과 동기화 그래프로 대체했다. 원본 단계 0/200/800/999에서 수치 대조를 수행했다.
- 반사 위상: 원본의 별도 위상 띠/위상자 패널은 입사파·반사파·합성파 동시 그래프로 대체했다. 원본 물리식을 조사했으나 원본 GUI 실행 대조는 남아 있다.
- 별도 Hermite 단면: 원본 세기·복소값 250² 격자와 파라미터를 복구했다. 별도 3D 표면 탭은 현재의 2D 단면/단면 그래프로 대체했다. 원본 `omega0=2*z0/k=50/pi`와 1.414 Hermite 인수를 유지했다.
- 이 기록은 모든 연속 입력의 무한한 조합·원본 GUI 조작 전수 대조를 주장하지 않는다. 소스 확인, 위 유한 수치 표본과 실제 HTML 조작 검증의 범위를 구분한다.
