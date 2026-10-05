# 원본 런타임 대조 기록 · 2026-10-06

원본 SWF **518개 전체의 Ruffle 실행 검사**를 완료했다. 원본 파일은 SHA-256으로 확인하며 수정하지 않았다. 수치 모델·슬라이더·프레임 순서는 서로 다른 검증 범위로 기록한다. Adobe Flash Player와의 호환성 인증이나 모든 리마스터의 완전한 동등성 선언은 아니다.

| 검사 | 확인 결과 | 범위 |
|---|---:|---|
| 원본 로드·재생 관찰·렌더러 정지·재개·재로딩 | 518/518 | Chromium, 로컬 Ruffle 0.6.0, Canvas 렌더러 |
| 원본 버튼 위치 클릭 | 456회 | 화면 변화 관찰. 버튼 의미·모든 분기 검증은 별도 |
| 실제 원본 실행값과 HTML 수치 모델 | 58개, 45,926회 | 역학 15개·해석 그래프 23개·줄/음파 등 9개·전기장 5개·광학 6개, 기록한 상태·위치·시간 표본 |
| AS2 슬라이더 후보 | 125개 모두 조작 | 250개 끝값: nominal 범위 일치 244개, 원본 특수 변환 6개 |
| 루트 타임라인 | 29개, 805프레임 | 자연 재생에서 전체 루트 프레임 방문·순서 확인 |

합산 기록은 [original-runtime-evidence.json](original-runtime-evidence.json), 파일별 이식 현황은 [flash-migration-ledger.json](flash-migration-ledger.json)에 있다. 보고서는 [`flash-runtime`](flash-runtime-report.json), [`fundamental-runtime`](fundamental-runtime-report.json), [`analytic-runtime`](analytic-runtime-report.json), [`wave-runtime`](wave-runtime-report.json), [`field-runtime`](field-runtime-report.json), [`optics-runtime`](optics-runtime-report.json), [`flash-slider-runtime`](flash-slider-runtime-report.json), [`timeline-runtime`](timeline-runtime-report.json)로 나누었다.

## 실제로 수정한 차이

`harmonicwave1.swf`의 진동자는 MovieClip의 `_y`를 다음 힘 계산에 사용한다. 이 표시 좌표는 정수 twip(1/20 px)으로 저장된다. HTML이 소수 좌표를 그대로 누적하면 한 단계 계산은 허용 오차 안에 들어가도 누적 경로가 달라진다.

`driverTrajectory()`에 원본의 좌표 저장 방식을 반영했다. 실제 Ruffle의 기본 시작 조건으로 관찰한 **0…120단계, 121개 좌표**에서 수정 후 위치 오차는 0이었다. 수정 전 방식은 같은 구간에서 최대 약 **0.213 px** 차이가 났다. 속도 및 단계별 계산도 별도로 대조했다. 모든 드래그 조합이나 2000단계 전체 실측을 뜻하지 않는다. 비공개 원본 함수의 별도 2000단계 계산 검사에는 관찰된 좌표 저장 규칙을 명시적으로 적용했다.

수정 후 파동 모형 18개의 브라우저 조작·그래프 동기화·화면 밖 정지·CSV·반응형 표시 검사를 통과했다. 전체 자동 검사 85개도 통과했다.

전기장·쌍극자·전위 5개는 **35개 실제 입력 상태, 36,954개 좌표·방향·길이 대조**를 추가했다. 점전하 두 모형과 쌍극자장의 모든 격자 화살표를 읽고 전하 끌기, 부호 전환, 관측점 클릭 이후의 상태를 확인했다. 관측된 최대 좌표 오차 0.049991 px는 원본의 0.05 px twip 저장 범위 안이며 방향·길이 오차도 지정된 0.0001 범위 안이었다. 읽기 전용 관찰자이며 원본 함수를 호출하지 않는다. 단면 그래프, 전위 보간, 새 관측점 초기값과 GNU 색상은 리마스터 추가 표현으로 구분한다.

원본에서 전하·경계점을 끌 때는 그림 영역 가장자리에서 20 눈금 안쪽까지만 이동할 수 있었다. HTML의 이동 범위를 실제 원본 한계로 수정했다. 점전하 x/y는 **30…280**, 쌍극자장은 x **30…440**·y **30…290**, 쌍극자는 x/y **30…170**, 전위 경계는 x **40…360**·y **30…210**이다. HTML 슬라이더와 SVG 끌기가 같은 범위를 쓴다. 수정 후 5개 모형의 브라우저 검사(106개 상태, 320/768/1360 px, 라이트/다크, 끌기·CSV)를 통과했다.

광학 6개는 **81개 관찰 상태, 1,749개 수치 대조**를 추가했다. 원본 슬라이더마다 양 끝과 중간 3개 위치를 실제로 조작했다. 파동 위상자·합성 파동의 위치 선택과 재생/정지 시간값, 이중슬릿 경로차·위상차·원본 반올림 세기, 프레넬 계수·위상과 각도 선택/표시 전환을 확인했다. 수치 최대 절대 오차는 약 4.4×10⁻¹³이다. 광학 함수 질의는 실제 Ruffle에서 실행하며 임시 계산 변수에 영향을 줄 수 있다. 파장 컴포넌트는 최종 마우스 이벤트까지 처리되어야 목표 값이 반영되었으므로, 최종 위치에 도달한 뒤 sub-twip 이동 이벤트까지 전달했다. 이 검사에 포함한 클래스형 파장 컴포넌트 2개는 기존 125개 슬라이더 후보 집계와 별도로 기록한다.

이번 확대 대조도 기록한 입력 상태와 표본에 한정된다. 긴 시간의 위상 초기화, 모든 조합, 곡선 전체 픽셀이나 중첩 타임라인의 동등성을 의미하지 않는다.

범위 수정과 확대 기록을 반영한 전체 자동 검사 **89개**, 교재 빌드와 Pages 배포용 파일 생성 검사가 통과했다.

## 원본에서 확인한 슬라이더 예외

측정값을 nominal 범위에 맞게 고쳐 쓰지 않는다. [runtime-slider-boundaries.json](runtime-slider-boundaries.json)에 원본 해시·조건·이유를 기록한다.

- `drivenosc2`: 계산된 0을 0.1로 치환한다. 기존 HTML 모형도 이 규칙을 보존한다.
- `refract1`: 속도 눈금 31과 32를 각각 100과 1000으로 치환한다. 개별 HTML 이식은 아직 남아 있다.
- `polarizer`: 음수에서 `int(0.5 + value)`가 0 방향으로 잘리므로 nominal -90이 실제 -89가 된다. 개별 HTML 이식은 남아 있다.
- `oscstringweb`: 단계 4에서 관찰한 끌기 한계와 0.02 단위 반올림 때문에 nominal 0.4…3이 실제 0.42…3.02가 된다. 두 끝값을 각각 예외로 기록했다. 개별 HTML 이식은 남아 있다.
- `gr_1slit_phasor2`: track 폭과 오른쪽 끌기 한계 때문에 nominal 최대 4000에서 실제로 4010이 나온다. 역시 개별 HTML 이식 대기 상태다.

처음에 접근하지 못한 후보 9개도 확인했다. 이름 없는 슬라이더 5개는 실제 인스턴스의 범위·값을 읽어 찾았다. 무아레의 숨겨진 템플릿 3개는 원본에서 만든 화면 내 복제본을 조작했다. 단계별 실험은 원본의 자동 시작 상태 1에서 다음 버튼이 나타날 때까지 원래의 약 10초 대기를 지킨 후 단계 4로 진행했다. 숨겨진 컨트롤을 강제로 이동하거나 단계 변수를 바꾸지 않았다. [실행 중 복제본 연결](runtime-slider-aliases.json)과 원시 보고서의 `originalNavigation`에 근거를 남긴다. 현재 목록의 AS2 후보는 모두 조작했지만, 목록에 없는 컨트롤이나 모든 AS3 컨트롤을 포괄한다고 주장하지 않는다.

## 관찰 방법과 한계

전체 재생 검사는 **수정하지 않은 원본**을 실행한다. 수치 관찰에는 별도의 비공개 진단 사본을 쓴다. AVM1에서는 빈 클립의 EnterFrame Trace가 원본 상태를 읽는다. 해석 그래프·정상파 등은 원본 함수를 실제 Ruffle 안에서 호출하며, 이 호출이 원본의 임시 계산 변수를 갱신할 수 있음을 명시한다. 원본 함수를 Node VM에서 실행한 기존 검사는 별도 근거로 유지한다.

그림만 있는 AVM2 원본 5개는 기존 DoABC·SymbolClass가 없음을 확인한 뒤, 진단 사본의 루트에 읽기용 MovieClip 하위 클래스를 추가했다. 기존 스크립트나 문서 클래스가 있으면 이 방법을 거부한다. 원본 버전·그림·타임라인 태그는 보존하지만 진단 실행 환경이 원본과 완전히 같다고 주장하지 않는다. 컴파일된 진단 SWF/ABC, 추출 스크립트와 캡처는 배포하지 않는다.

Ruffle의 렌더러 정지는 원본 일시정지 버튼의 의미 검증과 다르다. 루트 프레임 순서 확인도 중첩 타임라인이나 새 SVG 도형의 픽셀·의미 동등성을 검증하지 않는다. Canvas 읽기 최적화 권고와 플레이어 제거 후 오디오 컨텍스트 경고는 원시 보고서에 유지한다. 이번 검사에서 로드 실패·페이지 오류·HTTP 실패는 없었다.

**남은 작업:** 개별 HTML 대응본은 181개이며 337개는 이식 대기다. 이미 구현한 나머지 모델의 실제 런타임 수치 대조, 모든 버튼 의미·중간 슬라이더 값·드래그 조합·난수/초기화·Flash 이벤트 순서·중첩 타임라인은 아직 전수 완료되지 않았다. 모든 파일의 `fullEquivalence`는 계속 `false`다.

## 재실행

로컬 사이트를 실행하고 Playwright 경로를 `PHYSICA_PLAYWRIGHT`, PNGJS 경로를 `PHYSICA_PNGJS`, 주소를 `PHYSICA_BASE_URL`로 지정한다. 원본 실행 검사에는 추출 스크립트가 필요하지 않다.

```sh
node tools/flash-runtime-audit.mjs
node tools/fundamental-runtime-check.mjs
node tools/analytic-runtime-check.mjs
node tools/wave-runtime-check.mjs
node tools/field-runtime-check.mjs
node tools/optics-runtime-check.mjs
node tools/flash-slider-runtime-check.mjs
node tools/timeline-runtime-check.mjs
node tools/runtime-evidence.mjs
node tools/migration-ledger.mjs
node --test tools/*.test.mjs
```

AVM2 타임라인 검사에 사용할 진단 ABC는 `tools/java/CompileRuntimeProbe.java`와 직접 작성한 `tools/java/PhysicaRuntimeProbe.as`로 비공개 임시 디렉터리에 컴파일한다. FFDec 라이브러리·playerglobal의 로컬 경로를 지정하며 ABC는 `PHYSICA_RUNTIME_ABC`로 전달한다. 이 클래스는 원본 코드를 추출하거나 재컴파일하지 않는다.
