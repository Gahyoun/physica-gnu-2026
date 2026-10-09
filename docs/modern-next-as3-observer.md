# 원본 AS3 런타임의 읽기 전용 관측기

`tools/modern-next-as3-observer.mjs`는 원본 scripted AS3 SWF를 메모리에서만 계측한다. 원본 파일·root document class·기존 ABC·타이머·기존 모든 tag와 순서를 바꾸지 않는다. 새로운 빈 DefineSprite, 관측기만 포함한 DoABC, 새 character에만 연결한 SymbolClass, 별도 depth의 PlaceObject2를 첫 ShowFrame 앞에 추가한다. 압축을 풀어 FWS 진단 사본을 만들고 파일 길이만 다시 계산한다. stage, SWF version, frame rate와 frame count는 그대로다.

새 관측기는 ENTER_FRAME마다 원본 공개 scalar 필드와 공개 MovieClip 좌표를 읽어 trace한다. 원본 메서드를 호출하거나 값을 쓰지 않는다. 원본 실행과 clock은 Ruffle의 실제 AS3 bytecode/Timer가 맡는다. 새 class와 instance 이름, global character ID(중첩 child 정의 포함), root depth 충돌을 검사한다. 기존 document-class character0에는 새 SymbolClass를 만들지 않는다.

`tools/modern-next-as3-compile.mjs`는 기존 CompileRuntimeProbe.java, 로컬 FFDec와 playerglobal32_0.swc로 `tools/java/PhysicaAS3ObserverModern.as`만 컴파일한다. 출력과 javac 클래스는 ignored preview/private-tools 아래 프로세스별 경로에 둔다. 원본 ABC/root class를 컴파일 결과로 바꾸는 방식이 아니다. playerglobal은 diagnostic compiler 의존성이고 웹교재 asset이 아니다.

## 실행 가능한 검사

- `node --test tools/modern-next-as3-observer.test.mjs`: 원본 tag/ABC/root SymbolClass/stage header 보존, 중첩 character 충돌, depth 충돌, 동일 class name 거부와 read-only 검사.
- `node tools/modern-next-as3-observer-pilot.mjs`: 자체 관측기 컴파일 후 실제 원본 rot3dmo.swf. 축 없음 초기 절대 좌표, 원본 x/y/z checkbox 실제 클릭 후 연속 Timer sample의 Euler 좌표 전파 비교. 결과는 `modern-next-as3-observer-pilot-report.json`과 표준 `modern-next-rotor-runtime-report.json`에 저장.
- `node tools/nuclear-next-as3-runtime-check.mjs`: 자체 관측기 컴파일 후 5개 원본 AS3 핵반응/복사. 원본 Timer가 자연 진행하고 한 주기 reset하는 동안 관측된 입자 좌표와 Time을 native 모델과 비교. `nuclear-next-as3-runtime-report.json`에 저장. AS2 spin은 포함하지 않는다.

Playwright 접근이 필요한 환경에서는 `PHYSICA_PLAYWRIGHT`를 런타임 라이브러리 절대 경로로, `PHYSICA_BASE_URL`을 로컬 사이트 주소로 설정한다. 브라우저 실행 권한이 필요하다.

## 실제 증거의 범위

선형 회전자 1개는 bounded 원본-runtime pilot을 통과했다. 3개의 다른 회전자 내부 Molecule.balls는 package-internal 필드이므로 현재 공개 필드 관측기에서는 개별 원자 좌표를 읽지 않는다. 이 3개와 반도체3개의 완전 원본-runtime 대조는 아직 남아 있다.

핵물리5개는 실제 자연 진행 표본에서 좌표와 타이머 수치를 대조했다. 이 보고서는 원본 모든 Timer tick을 가로채거나 원본 모든 입력 조합을 강제 실행한 증거가 아니다. 반응 단계와 반복 reset을 자연스럽게 관측했고 실제 좌표의 Flash twip .05px 절삭을 .051px tolerance로 반영했다. 복사의 원형 graphics path 자체는 기존 독립 원본 소스 대조에 남아 있으며, 이번 실제 runtime report는 Time과 proton 위치를 확인한다. 모든 보고서는 `fullEquivalence:false`를 유지한다.
