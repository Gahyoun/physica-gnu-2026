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
