# 다음 현대물리 소그룹: Kronig–Penney의 세 그래프

현재 이식에 포함되지 않은 3개 원본의 분석. 이 문서만으로 구현 완료 또는 런타임 대조 완료로 집계하지 않는다.

- `flash-53914b41579addb1` energyGraph.swf: 원본 leftFtn(E), 허용/금지 에너지띠, 세 Brillouin 영역 분산관계, 자유전자 포물선, 선택 k에서의 eigenvalue 지점과 목록. b=.01…1nm/.01, c=.01….5nm/.01, U0=.1…75eV/.1, k a/π=−3…3/.1. 원본 기본값 .25,.1,10,.5. 원본은 정적 슬라이더 재계산 자료, 재생바 없음.
- `flash-7d1bd6f3d3e471a8` densityOfStateGraph.swf: 21개 k표본의 모든 분산띠, 허용띠 shade, 410개 에너지 표본 DOS, 폭이1.5/20보다 좁은 띠의 DOS 마커, 0…80eV의4001개 CSV 수치. b/c/U0 범위는 위와 동일, 기본값 .1,.05,5. 정적 자료.
- `flash-33749597a3a3530a` reducedMassGraph.swf: 첫 번째 띠의101개 k표본, 원본 중심차분1차·2차 도함수 및 자유전자 참조3개. b=c=.1nm 고정, U0=.1…50eV/.1, 기본10. 정적 자료. 두 끝에서1차차분0,2차차분은 index±2; 2차 곡선은index2…98 범위만 출력한다. 명칭은 effective mass이지만 원본 plot은 inverse effective mass에 비례하는 곡률 값이다. 제목/설명에서 이 차이를 존중하여 표시할 필요가 있다.

공통 수치 엔진은 원본 Util/KronigPenneySQ. xScale=.1, EScale=3.80998. 에너지 원점/장벽/위상 각 특수 branch를 유지해야 한다. makeAll의501개 표본, 극점검출 후 derivative이분법 tolerance1e−6/최대23회, energy root이분법 tolerance1e−4/최대21회 그대로 보존해야 한다. 원본 getEnergyBand는 finite Emax를 잘라 표시한다. DOS는 |leftFtn|≥1에서0, 이외 2/π×|leftFtn′|/((b+c)√(1−leftFtn²)). 연속 입력과 endpoint가산된 유한슬라이더의 모든Cartesian 조합은 아직 대조하지 않았다.

다음 구현은 개별 원본 세 화면의 모든 곡선·shade·marker·선택 수치를 새 SVG로 그려야 한다. 원본 generic 그림이나 기존 임의 그래프를 끼워넣지 않는다. 리마스터 표시색은 파랑+모노크롬, 곡선 alpha=.65, CSV와 on-input 재계산; offscreen에는 정적 입력 이외 연산 없음. 원본 scripted AS3 런타임 observer를 대체할 수 없으므로 독립 소스 대조와 실제 런타임 대조의 상태를 분리해야 한다.
