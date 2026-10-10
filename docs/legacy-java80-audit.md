# Java 80종 추가 이식과 원본 GUI 대조

2026-10-10. 이번 배치에서는 일반물리 32종, 광학 25종, 현대물리·양자 19종, 핵물리 4종을 추가했다. 기존 35종과 합하면 Java 실행체 115종이며, 119개의 원본 Java 자료 주소를 교재 안의 HTML 인터랙션으로 연결한다. 별도의 JavaScript 프로그램 2종을 포함한 브라우저 검사 대상은 117종이다. Flash 518종의 통계와 구분한다.

## 구현과 검증 기록

- [추가 80종과 검사 수](legacy-java80-batch.json), [전체 이식 목록](legacy-restoration-ledger.json).
- [일반물리](legacy-general-audit.md), [광학](legacy-optics-audit.md), [현대물리·양자](legacy-quantum-audit.md), [핵물리](legacy-nuclear-audit.md)의 원본 식·상수·GUI 대응 및 독립 수치 참조.
- [실제 원본 GUI 실행 기록](legacy-original-gui-report.json). 원본 AWT/Swing 애플릿을 JVM의 창에서 초기화하고 선택 항목과 체크박스의 유한 조합, 슬라이더 최솟값·중간값·최댓값·기본값, 버튼 동작을 실행했다. 창 캡처는 애플릿 자체만 검사하며 사용자 화면과 원본 바이너리를 배포하지 않는다.
- [통합 교재 브라우저 검사](legacy-ui-report.json), [배포 사이트 브라우저 검사](legacy-public-ui-report.json). 실제 재생의 상태·그림 변화와 일시정지, 입력 경계, 개별 선택값, CSV, 320/768/1360px 화면과 라이트·다크 모드를 검사한다.

80개 실행체에 원본 초기 매개변수 변형을 포함한 81개 GUI 설정을 실행했다. 유한 선택·체크 조합 18,398건, 슬라이더 경계·기본값 568건을 기록했다. 74개 설정은 검사를 마쳤고, 4개는 원본 오류가 있어 부분 대조이며, 3개는 초기화할 수 없었다. HTML의 모든 연속 입력에 대한 원본 GUI 동등성 완료를 뜻하지 않는다.

## 원본 오류와 복구 한계

| 원본 | 상태와 원인 | HTML에서의 처리 |
| --- | --- | --- |
| HydrogenApp, HydrogenMixApp | 오래된 `vtkCommonJava` 네이티브 라이브러리 부재로 원본 창 초기화 불가 | 원본 파동함수와 양자수 계산을 HTML/Canvas로 재구현하고 별도 수치 참조로 확인. 원본 VTK 화면과의 GUI 동등성은 미확인 |
| sterngerlach | 원본 3D 모델·재질 파일 누락으로 초기화 실패 | 원본 식에 따른 자기장과 분리 궤도를 벡터로 표현. 누락된 원본 3D 자산의 동일 복원은 미확인 |
| beat1.Beat1, syndi1.Syndi1 | 원본 초기화 중 리스너가 아직 생성되지 않은 필드에 접근 | 초기화 경고 이후 실행된 유한 조작 기록을 보존. HTML에서 안전하게 초기화 |
| manyCol23(kineticgas23), manyCol31 | 원본 스레드·렌더링 경합과 배열/벡터 오류 | 원본 갱신 순서와 힘을 보존하고 HTML에서 단일 상태로 그림·그래프 갱신. 오류 발생 GUI 기록은 부분 대조 |

Hologram1 원본 클래스의 잘못된 디버그 메타데이터 때문에 그 클래스만 JVM 검증을 끄고 실행했다. 해당 예외는 원본 기록의 `verificationDisabled`에 남겼으며 클래스 파일은 수정하지 않았다.

슬라이더의 모든 실수값과 그 데카르트 곱, 자유 텍스트·포인터 경로, 모든 난수열, MIDI 악기 음색·3D 원본 렌더링의 픽셀 동일성은 전수 확인 범위가 아니다. GUI 조작 기록과 원본 JVM 수치 출력 비교를 구분한다. 파랑·회색 중심의 새 SVG/Canvas와 반투명 그래프를 사용하며, 의미 없는 프레임 조작은 정적 그림에 추가하지 않는다.

## 재현

`tools/legacy-original-gui-check.py`와 `tools/legacy-original-gui-reference/OriginalAppletProbe.java`는 새로 작성한 호출·검사 도구다. 원본 클래스/JAR 경로와 원본 래퍼의 매개변수를 별도 설정 JSON으로 제공한다. 원본 바이너리는 저장소에 포함하지 않는다. 보고서에는 검사 도구와 호출한 원본 클래스의 SHA-256을 남긴다.

광학의 원본 JVM 출력 49,600개도 `legacy-optics-jvm-reference/`에 CSV와 해시로 보존하며 CI에서 HTML 커널과 다시 비교한다.

`node --test tools/*.test.mjs`로 저장된 원본 수치 출력과 HTML 계산, 이식 목록 및 검사 증거를 검증한다. Playwright가 설치된 환경에서 `tools/legacy-browser-check.mjs`로 교재의 모든 HTML 이식 프로그램을 다시 검사할 수 있다.
