# Legacy 3D quantum applet recovery

Date: 2026-10-10. Author of the original web textbook and applets: 정기수 교수님.

## Source evidence

| Native HTML port | Original bank page | Applet class | Lesson |
| --- | --- | --- | --- |
| 3차원 상자에 갇힌 파동묶음의 운동 | <http://physica.gnu.ac.kr/phtml/bank/sim/MotionBox3DApp.html> | `MotionBox3DApp.class` | 6-4-8-1 |
| 조화력을 받는 3차원 파동묶음의 운동 | <http://physica.gnu.ac.kr/phtml/bank/sim/MotionHarmonic3DApp.html> | `MotionHarmonic3DApp.class` | 6-4-8-2 |
| 수소원자에서 파동묶음의 운동 | <http://physica.gnu.ac.kr/phtml/bank/sim/MotionHydrogen3DApp.html> | `MotionHydrogen3DApp.class` | 6-4-8-3 |
| 수소원자에서 결맞는 상태 운동 | <http://physica.gnu.ac.kr/phtml/bank/sim/MotionHydrogen3DKeplerApp.html> | `MotionHydrogen3DKeplerApp.class` | 6-4-8-4 |

The four original pages load `/applets/vtkapp/signedCWFtn.jar` and use Swing/VTK applets (720 × 760 box/harmonic, 720 × 720 hydrogen). JAR SHA-256: `b17d7ce3e9d24912ddfdf8efdddda44ed2c0dafa60aaf880eaa8dc2a402728fe`. The page and archive hashes, recovered input bounds and defaults are recorded in `src/legacy-quantum.json`. Retrieved originals remain outside the production runtime. The new models use browser JavaScript and SVG, without Java or VTK dependencies.

The reconstruction reads `javap -c -p` bytecode from the four applet classes, `quantumMath.Box3D`, `Box1D`, `HarmonicOsc3D`, `HarmonicOsc1D`, `Hydrogen3D`, `HydrogenWaveFtn`, and `Gaussian3DWaveFtn`. This is a reconstruction of their numerical algorithms and original controls, not the unrelated one-dimensional supplementary lesson model.

## Recovered behavior

The initial Gaussian has center `(x₀,0,0)`, envelope `exp(−|r−r₀|²/(4Δ²))`, and phase `k·(r−r₀)`. The original implementation projects it on a 51³ grid over `[-1,1]³`. The sine basis for the hard-wall box has energy `π²(nx²+ny²+nz²)/4`. The harmonic model uses the normalized Hermite basis, fixed angular frequency `ω = 50`, and energy `50(nx+ny+nz+3/2)`. The harmonic display box is a viewing window, not a hard wall.

The source's `build(1000)` selects states below its semiclassical energy threshold; it does not select exactly 1,000 states. This yields 829 box states and 969 harmonic states. It then discards amplitudes at or below 4% of the largest box coefficient, or 2% for the harmonic model. These original finite-basis rules are preserved, including their approximation at very narrow Gaussian widths.

The recovered source controls include:

- Box: `kx,ky,kz = −2…4` (step 0.1, default `2,0,0`); `x₀ = 0…0.75` (step 0.05, default 0); `Δ = 0.01…0.30` (step 0.01, default 0.10).
- Harmonic: `kx,ky,kz = −2…10` (step 0.1, default `0,5,0`); `x₀ = 0…0.75` (step 0.05, default 0.50); `Δ = 0.01…0.40` (step 0.01, default 0.10).
- Both: the original nonlinear isovalue slider 1…82 maps to 0.1%…98% of the **initial** maximum amplitude, default value 28 = 10%. Start/pause, restart, forward/backward time and ×10 speed are supported. The source clock changes by 0.001 per 200 ms, or 0.010 at ×10 speed. The remaster starts with ×10 speed and provides the requested “느리게” checkbox. Time is unbounded as in the original; the scrubber expands as needed.

The SVG renderer reconstructs complex-wave amplitude isosurfaces with marching tetrahedra and phase colors in GNU blue and charcoal. Rotation works with mouse, touch or arrow keys. Three synchronized marginal-probability curves, position means, selected-state count, energy and CSV are additional learning aids. Their densities normalize the selected quantum state; the original amplitude threshold uses the original initial peak instead. Harmonic probability readouts explicitly refer to the finite viewing region. Curve opacity is 0.65.

The coefficient projection is algebraically separable and the 3D reconstruction uses three tensor contractions. This preserves the selected basis while avoiding a per-voxel/per-mode loop. The 51³ projection and initial reference peak are retained; display meshing uses 25³ samples, and marginal graphs use 33³ samples. This is an explicit rendering-resolution tradeoff, not a claim that native VTK pixels are identical.

## Verification

The original JAR numerical classes were **executed** on a Java runtime, without instantiating the native VTK viewer. A reflection harness constructed the original models, projected their original Gaussian and extracted selected coefficients, initial maximum amplitude and complex-wave values. `docs/legacy-quantum-reference.json` preserves the actual results: three input configurations per model (including minimum Gaussian width and a displaced broad packet), four position/time probes per configuration, both positive and negative times. The browser port agrees on selected basis counts, initial peak, first coefficient and all 48 complex-wave probes and nine additional Kepler runtime-table probes within `2e−10` relative tolerance (box/harmonic absolute roundoff floor `1e−11`, hydrogen `1e−12`, Kepler `1e−20`). The selected defaults and nonlinear slider mapping are separately tested.

`tools/legacy-quantum.test.mjs` has seventeen meaningful tests. Additional tests compare the tensor reconstruction to direct eigenstate sums, verify zero hard-wall amplitude and conserved normalized box probability, check changing 3D density, and exercise isosurface height.

`docs/legacy-quantum-ui-report.json` records direct-module Chromium checks: play/pause really advances/stops time; the slow option changes speed by 10×; time direction, all 40 slider-boundary changes, keyboard rotation, time scrubbing, CSV download and 320/768/1100-pixel layouts pass. Parent integration separately checks the generated lesson hosts and catalog links.

## Limits

The native VTK viewer and its pixels were not run. Original numerical-runtime comparison is verified for the documented samples; exhaustive combinations of continuous controls have not been enumerated. The source itself truncates the eigenstate basis and spatial grid; the port preserves those numerical approximations. The newly drawn SVG surface intentionally differs from the historical VTK rendering.

The fourth port below reconstructs the distinct `MotionHydrogen3DKeplerApp`; it does not substitute the lower-n Gaussian-packet model.

## Hydrogen spherical packet

The hydrogen model preserves the original 201 × 37 × 37 spherical projection over r = 0.05…50 Bohr radii, θ = 0.001…π−0.001 and φ = 0…2π. Source `build(500)` produces all 650 bound eigenstates through n = 12, followed by a 1% coefficient threshold. Energies are −13.5984/n² eV, and the source Planck constant is ħ = 6.58211928 × 10⁻¹⁶ eV·s. The source defines its spherical-harmonic phase convention separately, which is preserved.

The original Gaussian sampler divides by 201/37/37 while the basis and projection quadrature divide by 200/36/36. This off-by-one coordinate discrepancy is **present in the original**, and preserving it is necessary for exact coefficient/runtime correspondence. The browser performs the same trapezoidal sums with separable Fourier/θ/r contractions and reuses the original spherical complex field for the display. Cartesian SVG meshing and probability graphs interpolate this field; the finite grid probability estimate may slightly exceed 1 through interpolation/quadrature error, so the readout explicitly identifies numerical integration.

Recovered controls: ky/kz = −0.15…0.15 a₀⁻¹ (step 0.01, defaults 0.05/0), z₀ = 0…25 a₀ (default 15), Gaussian width 2…10 a₀ (step 0.1, default 5), and original isovalue 1…82 (default 48 = 30%). Clock steps are 0.05 fs or 0.5 fs per 200 ms. The remaster uses **fs** throughout the visible timeline and CSV, explicitly converting to seconds for the eigenstate phase.

All three actual Java reference configurations agree on selected state count (124, 143 and 392), initial maximum amplitude, first coefficient and twelve complex samples to 2×10⁻¹⁰ relative / 10⁻¹² absolute tolerance. An additional test compares spherical-grid reconstruction with direct eigenstate sums at both time directions and verifies changing Cartesian density/isosurface. Browser checks verify advancing, pausing, 10× speed, backward time, all ten slider boundaries, rotation, fs scrubbing and CSV.


## High-n Kepler packet: actual source behavior and identified discrepancy

The high-n applet uses n₀ = 50…150 (default 100), Δn = 0.5…5.0 (step 0.1, default 2), Gaussian coefficients exp[−(n−n₀)²/(4Δn²)], and all integers floor(n₀−4Δn)…ceil(n₀+4Δn). Angular states have l = m = n−1; the source has no amplitude cutoff. Its 51 × 11 × 301 spherical display covers r = 1600…40000 a₀, θ = 63°…90°, φ = 0°…360°. This upper equatorial wedge is deliberately preserved; the renderer does not fill missing regions with an unrelated spherical packet. The camera extent adapts to packet size and is explicitly labeled. The actual source angular recurrence lacks the usual 1/√(4π), which is preserved for amplitude and accounted for in normalized probability.

A **real discrepancy in the original JAR** was found: the radial table is initialized with principal quantum number `nEnd + index`, but it is looked up by `n − nStart`. Angular tables, coefficient weights and energy still use `nStart + index`. Thus the actual radial number is `n + nEnd − nStart`, rather than the n advertised by the intended circular-state formula. Initial peaks of the physically intended formula and the actual JAR consequently differ. The remaster preserves the actual original radial table, and both an explanation above the experiment and its footer state that this is historical source behavior, **not an accurate general hydrogen eigenstate solution**. The audit does not silently call that source defect physically correct.

Original Java runtime fixtures verify three parameter combinations: (100,2), (50,0.5), (150,5). They verify initial peak, source coefficients, 12 complex samples using original numerical routines and nine probes directly taken from the actual runtime's private radial/θ/φ tables. The browser engine agrees within 2×10⁻¹⁰ relative / 10⁻²⁰ absolute tolerance. It reconstructs source waves with stable original product recurrences. The synchronized graph and numerical integral cover the same source display wedge.

The clock advances 1 ps per 200 ms and supports source multipliers 1,10,50,500. The remaster starts at 10× and has “느리게” override to 1×. Forward/backward time, restart, isovalue, center/width sliders, camera rotation, expanding seek and CSV work. All four speed combinations were tested in Chromium. No original VTK GUI/pixel equivalence or full Cartesian product of controls is claimed.


## Reproducing original numerical references

The independently authored reflection probes are retained in `tools/legacy-quantum-runtime-reference/Quantum{Box,Harmonic,Hydrogen,Kepler}Reference.java`. Supply the original `signedCWFtn.jar` outside the repository, verify its recorded SHA-256, compile each probe with `javac -classpath /private/tmp/signedCWFtn.jar -d /private/tmp tools/legacy-quantum-runtime-reference/QuantumBoxReference.java`, and execute `java -classpath /private/tmp:/private/tmp/signedCWFtn.jar QuantumBoxReference`. Equivalent commands work for the other three classes. They instantiate only the original numerical classes, so native VTK libraries and the Java applet UI are not required. Outputs correspond to the four arrays in `docs/legacy-quantum-reference.json`; the JavaScript regression uses that independently produced data.

## 추가 현대물리·양자 애플릿 19종

2026-10-10 추가 복구 목록과 원본 수치·GUI·HTML 조작의 개별 검증 범위는 [현대물리·양자 Java 이식 감사](legacy-quantum-modern-audit.md)에 기록했다. 기존 4종을 포함한 양자 그룹 manifest는 23개이다.
