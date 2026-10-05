# 물리의 이해 remaster — 동문 복원

**원본 (경상국립대학교 물리학과 정기수 명예교수님 작)** · [물리의 이해](http://physica.gnu.ac.kr/)


정기수 교수님의 [물리의 이해](http://physica.gnu.ac.kr/)를 현대 브라우저에서 읽고 조작하도록 복원하는 동문 프로젝트다. 7개 대단원·149개 주제·566쪽 전체에 읽기 화면을 제공한다. 양자통계 3쪽·응용 5쪽은 상세 복원이며, 새 558쪽은 독립 작성한 학습 핵심·질문과 원본 절·수식을 연결한 읽기 화면이다. 원본 본문과 1,000개 이상 멀티미디어를 모두 복원한 완성본이 아니다. 링크만 있던 368개 절을 독립적으로 재서술하여 교재 안에서 바로 읽도록 했다. 총 284쪽의 387개 원본 절에 새 설명을 제공하며 파동의 수학적 표현은 유도·도식을 포함한다. 페이지별 상세 본문 대조와 개별 애니메이션 이식은 남아 있다.

경상국립대 홈페이지형 레이아웃과 이 저장소의 [GNU template](https://github.com/Gahyoun/gnu-network-science-skills/blob/main/templates/gnu-template/SKILL.md)을 적용했다. 대학 공식 서비스가 아니며 원저자의 감수·승인을 받은 것으로 표시하지 않는다.

## 읽기와 실행

Node.js 22 이상과 Python 3가 있으면 별도 npm 설치 없이 빌드할 수 있다.

```sh
cd physica-gnu-2026
node tools/build.mjs
node --test tools/*.test.mjs
python3 -m http.server 8775 --bind 127.0.0.1
```

브라우저에서 `http://127.0.0.1:8775/`를 연다. 파일을 더블클릭하는 `file://` 방식은 브라우저의 ES module 보안 제약으로 실험이 실행되지 않을 수 있다. 로컬 서버를 실행한 후에는 인터넷 연결이 필요 없다.

## 교재 탐색

- `index.html`: 원본 7개 대단원·149개 주제·566쪽의 목차. 전체 전개/감추기와 페이지별 연결.
- `lesson-ID.html`: 원본 순서 ID를 유지한 558개의 정적 읽기 화면. 본문·수식은 JavaScript 없이 읽을 수 있다. 기존 `lesson.html?id=...` 주소는 해당 읽기 화면으로 이동한다.
- `remaster.html`: 원본 SWF에 대응하는 HTML 리마스터 21종. 교재 안에서 조작하며 원본 비교 링크 제공.
- `flash.html`: 원본 애니메이션 518개를 모은 별도 Ruffle 재생 목록. 교재에서는 Flash를 로드하지 않음.
- `materials.html`: 원본 자료종류별 목록 1,072개. 시뮬레이션을 기본으로 가나다순 정렬하고, 복원 인터랙션 17개와 보충 탐구 79종의 556개 배치를 정확한 위치로 연결. 같은 모형의 반복 배치를 별도 복원 프로그램으로 세지 않는다.
- `search.html`: 전체 목차·표제어·자료 제목 및 복원 본문 내부검색. URL의 검색어를 공유할 수 있음.
- `headwords.html`, `browse.html`: 원본 표제어 1,866개와 혼합 색인 2,455개. 목록 내 검색·유형·복원 여부 필터 및 50개씩 표시.
- `network.html`: 원본 566쪽의 관련내용에서 만든 2,180개 개념·5,844개 방향 연결. 전체/ego 관계, 방향·거리·단원 필터, in/out degree·PageRank 분석 및 JSON 저장.
- `concept.html?id=...`: 개념별 학습 본문, 원본과 관련내용 연결. 본문의 녹색 용어와 표제어의 관계 보기로 이동.
- `about.html`: 정기수 교수님 소개, 논문 73편의 분야별 연대순 목록, 복원 기록, 화면 설정 및 출처.

상단 라이트/다크 버튼은 `localStorage`에 선택을 저장한다. 첫 방문은 시스템 테마를 따르며 수식·그래프도 바뀐다. 인쇄는 밝은 바탕이다. 웹·태블릿·모바일을 지원하며 좁은 화면에서는 목차가 버튼 안으로 접힌다.

## 구현

- **정적 프런트엔드:** 생성된 HTML, CSS, SVG, ES modules만 필요하다. API·DB·로그인·운영 서버는 없다.
- **빌드 단계:** 본문·목록의 LaTeX를 KaTeX 0.19.0으로 컴파일한다. HTML과 MathML을 함께 생성하고 잘못된 LaTeX는 빌드 오류로 처리한다.
- **목록:** 제목·출처·카테고리 메타데이터를 정적 HTML로 생성하므로 JavaScript 없이도 목록을 읽을 수 있다. 검색 데이터는 검색/준비 안내 화면에서만 읽는다. 검색어는 `textContent`로 처리한다. 원본 본문·프로그램은 목록에 포함하지 않는다.
- **브라우저:** 해당 쪽에 있는 실험만 초기화한다. 애니메이션은 사용자가 재생하며 초당 최대 20회 갱신하고, 화면 밖·숨겨진 탭에서는 멈춘다. 데바이 곡선의 반복 적분값을 캐시한다.
- **자산:** 서체·수식 글꼴을 포함한다. 두 본문 서체는 사용 글자만 포함해 1,633,140→268,248 bytes로 83.6% 줄였다. OFL에 따라 수정 서체의 내부 이름은 PhysicaText·PhysicaTitle로 바꿨다. 외부 CDN·Adobe·CreateJS에 의존하지 않는다.
- **접근성:** 한국어 문서, 건너뛰기 링크, MathML, 키보드 슬라이더, 포커스 표시, 그래프 결과 텍스트, 색과 선 모양의 구분, 인쇄 CSS를 제공한다. 수식은 JavaScript 없이 읽을 수 있다.
- **배포:** `node tools/stage.mjs`가 HTML·런타임·서체·라이선스·기록만 `_site/`에 모은다. 빌드용 KaTeX JS와 원본 조사자료는 배포되지 않는다.

[전체 단원 확장 기록](docs/book-expansion.md)에 읽기 화면의 범위, 수식 정리, 모형·단위와 남은 작업을 기록했다.

글을 추가할 때 새 한글이 포함되지 않은 서체로 빌드되는 것을 검사한다. 새 글자가 있다면 `python3 -m pip install fonttools brotli` 후 `python3 tools/subset-fonts.py`를 실행하고 다시 빌드한다. 축소 작업의 원본 서체는 GNU template의 `templates/gnu-template/assets/fonts`에서 받는다. 해당 디렉터리를 `PHYSICA_TEMPLATE_FONTS` 환경변수로 지정하거나 `font-sources/`에 넣는다. 원본 서체는 사이트 배포에 포함되지 않는다. 일반 빌드에는 이 Python 패키지가 필요 없다.

## GitHub Pages

게시 주소: [물리의 이해](https://gahyoun.github.io/physica-gnu-2026/).

`main`에 push하면 `Publish physics textbook` workflow가 수식 빌드·물리/네트워크 검증·배포 파일 구성을 거쳐 GitHub Pages에 게시한다. 공개 저장소 `Gahyoun/physica-gnu-2026`의 독립 사이트이며 다른 저장소의 Pages를 덮어쓰지 않는다. 커스텀 도메인은 설정하지 않았다. 학교의 정식 주소를 받은 후 GitHub Pages Custom domain과 DNS를 연결할 수 있다.

## 검증과 기록

`tools/book.test.mjs`는 전체 순서·수식 컴파일·보충 모형·충돌 보존·광학 극한·확률 정규화·붕괴 계열·라플라스 수렴을 검증한다. `tools/book-browser-check.mjs`는 566쪽 전체와 79개 모델·262개 슬라이더 조작을 검사한다.

`tools/physics.test.mjs`는 통계 극한·미시상태 수·흑체복사 적분·비열 극한·정상파·전자 입자수·압력 평형을 검증한다. `tools/browser-check.mjs`는 Playwright가 설치된 환경에서 17페이지, 320/768/1024/1360px, 슬라이더 경계값, 선택 메뉴, 재생·정지, 키보드, 200% 확대와 JavaScript 비활성 상태를 검사한다. 전체 전개·감추기, 검색·목록 필터·페이지 이동, 테마 저장·인쇄 전환, 태블릿 세로/가로와 터치 조작도 확인한다.

```sh
# 별도 개발 환경에 Playwright와 Chromium이 설치되어 있을 때
PHYSICA_BASE_URL=http://127.0.0.1:8775/ node tools/browser-check.mjs
```

[network.md](docs/network.md)에 개념 네트워크의 수집·방향·분석 기준을 기록했다.

논문 자료의 출처·날짜·DOI 확인 예외는 [publications.md](docs/publications.md)에 기록했다.

검증 결과는 [빌드 기록](docs/build-report.json)과 [브라우저 기록](docs/browser-report.json), 복원 근거는 [reconstruction.md](docs/reconstruction.md), 원본 파일의 주소·SHA-256은 [source-manifest.json](docs/source-manifest.json)에 남긴다.

## 저작물 구분

원저자의 HTML 본문·교재 사진·본문 그림·Canvas JS·추출 ActionScript는 저장소에 포함하지 않는다. 원본 SWF 518개는 사용자 요청에 따라 원저자와 출처·해시를 기록해 Ruffle 웹 호환 재생에 사용한다. 요청에 따라 제공받은 로고의 색상만 조정한 상단 로고를 포함한다. 로고 편집 근거와 프롬프트는 [logo-edit.md](docs/logo-edit.md)에 기록했다. 원본의 [저작권 안내](http://physica.gnu.ac.kr/info/info_cont.html#copyright)를 존중하며, 원본 문장·추출 코드의 추가 공개는 별도로 다룬다. 현재 공개 코드는 해당 원본의 이용 허락을 뜻하지 않는다.

독립적으로 작성한 코드는 저장소의 GPL-3.0을 따르며, KaTeX는 동봉한 MIT 라이선스, Noto Sans KR·SUITE와 KaTeX 글꼴은 각각의 동봉 라이선스를 따른다.

## 원본 Flash 웹 재생

518개 원본 SWF를 Ruffle 0.6.0으로 웹에서 재생하며 원본 안의 그래프도 함께 실행합니다. [복원 방식과 검증 기록](docs/flash-restoration.md)을 참고하세요. 원본 웹 호환 재생과 독립 HTML 재구현을 구별합니다. 조화진동은 원본 입력 범위에 맞춘 HTML 원운동·시간 그래프·CSV도 제공합니다. 모든 개별 조작과 계산값의 대조는 계속되는 작업입니다.
