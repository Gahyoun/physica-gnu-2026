# Java 방사성 붕괴 프로그램의 HTML 복구

2026-10-10. 대상은 원본 `radioactivity.seriesTable`과 `radioactivity.decayCurve` 두 프로그램이다. 원본 실행 클래스의 SHA-256은 `src/legacy-nuclear.json`에 기록했다. 원본 클래스 자체는 배포하지 않는다.

## 복구한 내용

- 4개 자연 붕괴 계열의 핵종, Z·N 좌표, α/β⁻ 연결, 핵종 선택, 반감기·분기율 안내와 CSV.
- 6개 계열의 핵종 개수 계산, 1–9 시간 진행 지수, 재생·정지·초기화·시간 이동·CSV.
- 원본 계산 결과를 공유하는 막대와 시간 그래프. 그래프 선의 불투명도는 0.65이며 파랑·회색과 선 모양으로 구별한다.
- 원본의 정적인 계열표에는 불필요한 재생·프레임 막대를 추가하지 않았다.

## 실제 원본 계산 대조

원본 `Sequence`와 `FourSeries`를 JVM에서 직접 실행해 6개 계열 × 6개 시간의 핵종별 개수를 추출했다. `docs/legacy-nuclear-numeric-reference.json`은 그 출력이다. HTML 계산은 같은 결과와 상대 오차 1e-8 이내에서 일치한다. 단위 검사에는 α/β⁻의 Z·N 변화와 시간 진행 지수의 10배 변환도 포함한다.

## 보존한 역사적 특성과 검증 한계

원본의 핵종 상수와 반감기를 그대로 유지했다. 반감기와 붕괴 상수의 일부 값은 서로 정확히 일치하지 않으며, 원본이 안정 핵종으로 처리한 데이터도 현재의 핵종 데이터와 다를 수 있다. 분기 후 개수를 나누는 원본의 근사 처리도 그대로 따른다. 최신 핵종 데이터로 교체한 과학 데이터베이스가 아니라 원본 교육 모형의 복구이다.

원본 AWT/Swing 창의 모든 조작과 모든 연속 입력 조합을 대조한 것은 아니다. 숫자 계산의 실제 JVM 대조와 브라우저에서의 HTML 조작 검증을 구분한다. 원본 렌더링을 그대로 복제하지 않고 SVG와 한국어 텍스트로 구성했다.

## 수치 실행 재현

`tools/legacy-nuclear-runtime-reference/radioactivity/LegacyProbe.java`는 새로 작성한 호출 도구이며 원본 계산 클래스를 복제하지 않는다. 별도로 확보한 원본 클래스 경로를 `ORIGINAL_CLASSES`로 지정한 뒤 다음처럼 실행한다.

```sh
javac -cp "$ORIGINAL_CLASSES" -d /tmp/physica-nuclear-probe tools/legacy-nuclear-runtime-reference/radioactivity/LegacyProbe.java
java -Djava.awt.headless=true -cp "/tmp/physica-nuclear-probe:$ORIGINAL_CLASSES" radioactivity.LegacyProbe
```

출력은 원본의 `Sequence.Amounts` 호출 결과 배열이다. 저장된 참조 출력과 HTML 함수의 비교는 `node --test tools/legacy-nuclear.test.mjs`로 반복할 수 있다.

## 2026-10-10 추가 Java 4종

- `rutherford0`: 알파입자 산란. 원본의 질량 100, 쿨롱 계수 250000, 0.05 간격의 10회 갱신을 보존한다. 빠른/보통 입자와 궤적 표시를 제공한다.
- 현대물리 경로의 `rutherford1`: 원형 전자 궤도. 원본의 ω = ±25/r^(3/2), 클릭 위치·회전 방향에 따른 전자 추가를 SVG로 복구했다.
- 핵물리 경로의 `rutherford1`: 8개 전자의 쿨롱 운동. 원본의 질량 10, 0.04 간격의 5회 갱신을 보존한다. 원본의 `isRadiating` 매개변수 기능은 체크박스로 노출했다. 원본의 포획 임계값과 단계별 감쇠율 1−1/700을 유지한다.
- `fission1`: 느린 중성자에서 34단계 들뜸·61단계 분열, 빠른 중성자에서 19단계 산란을 복구했다. 원본의 핵조각 이동량 (±2,∓1)과 중성자 방출 범위를 사용한다. 원본은 정량 핵반응 모형이 아닌 개념 애니메이션이다.

원본 클래스 이름이 같아도 현대물리와 핵물리 경로의 `rutherford1`은 서로 다른 실행 파일로 기록한다. SVG 궤적과 시간 그래프는 동일한 상태를 사용하며 프레임 조작은 하단에 고정된다. 무작위 초기 위치는 반복 검증 가능한 시드 예시로 바꾸었다. 원본과 무작위 화면의 픽셀 동일성을 주장하지 않는다.

실제 원본 JVM에서 수집한 쿨롱 108조건, 원형 궤도 150조건, 핵분열 모든 230단계의 참조 출력을 `legacy-nuclear-{motion,circular,fission}-reference.json`에 저장했다. 호출 도구는 `tools/legacy-nuclear-runtime-reference/{NuclearMotionProbe,CircularElectronProbe,FissionStageProbe}.java`이며 원본 소스를 포함하지 않는다. 4종 모두 원본 AWT/Swing 창을 실제 초기화했다. 산란·핵분열의 체크박스 4조합, 핵물리 전자 운동 2조합, 원형 궤도 기본 상태를 실행했다. 좌표 클릭의 연속 전체 조합 및 임의 난수의 모든 가능한 경로는 전수 검증이 아니다.

브라우저 추가 검사에서 클릭으로 추가한 전자의 상태가 시간 막대 이동 후에도 유지되고 초기화 시에는 기본 15개로 돌아가는 것을 확인했다. 산란의 난수 시드는 다시 계산할 때 재설정하여 같은 시간으로 반복 이동하면 같은 상태가 나온다. 로딩 실패 재시도와 볼록·오목 렌즈 원본 래퍼 설정의 검사 결과는 `legacy-loader-ui-report.json`에 함께 보존한다.
