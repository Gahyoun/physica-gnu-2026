# Parallel 225 cohort independent review

Reviewed on 2026-10-10. Scope: the 56 newly implemented individual models in `src/native-*next*.json` (nuclear 8, optics 15, modern 19, general 14). This is a review of source arithmetic, native implementation and bounded evidence, not proof of every original runtime input history.

## Outcome

No new critical calculation or playback blocker was found after the replay-at-end repair. All 56 independent scene checks passed: animated scenes changed actual SVG geometry, paused scenes held that geometry, every checked curve used computed stroke opacity 0.65, no scene used raster images/Canvas artwork, and static scenes had no fake play/timeline. The independent checker excludes text, frame counters and time cursors from its geometry signature. The 1.2 Hz original timers for `angleuncertainty` and `angleuncertainty2` require at least 0.833 seconds before the first update; their initial 0.64-second observations were too short. Both passed a repeated 1.9-second actual geometry observation. This is an expected source rate, not evidence of a broken play button.

The root audit separately identified an end replay bug in general phasor/molecule/boundary UI. It is repaired in the three owned renderers: phasor resets step/time/history at end replay and loops its added 10,000-step window, molecular rotation resets before end replay and remains bounded, and boundary stops at step 300 with its final scene preserved and resets when played again. These finite native inspection windows are explicitly documented in `general-next-remaster-audit.md`; they are additions to original continuous timing, not claims about original movie termination. Per-family UI reports cover 320/768/1360 px, max→play actual SVG movement and near-max loop/stop behavior.

## Source and numeric review

| Cohort | Checked interpretation | Evidence and limit |
|---|---|---|
| Nuclear reactions, radiation and spin (6) | Reaction boundary/hold phases, original product/target positions, all radiation arc vertices and both spin directions. The radiation 200 Hz rate comes from its original 5 ms timer; its phase counter is not mislabeled as seconds. | `nuclear-next-source-report.json`: 485,516 comparisons; every finite source cycle step. Runtime reports are bounded separately. |
| Nuclear structure (2) | Lattice centers/radii, original 3D camera arithmetic and jitter distribution, seeded species/motion reproducibility. Fixed random selection is explicitly explained to readers. | `nuclear-next-structure-source-report.json`: 110,514 comparisons using matching controlled source/native random streams. Unmodified arbitrary random histories are outside scope. |
| Optics polarization/crystals (11) | Original scalar ranges and defaults, phase degree/radian conversion, Jones intensities, stress checkbox states, crystal segment endpoints and electric-field states. Extra static stress-apparatus Jones transmittance is explicitly marked as an explanatory addition. Fixed crystal random placement is explicitly explained. | `optics-next-source-report.json`: 1,566,909 comparisons. Each scalar increment with other inputs at defaults and min/max cross-product corners; not all full multi-input histories. Native nematic redraw is deliberately idempotent while repeated original same-state remake can drift, as the source report discloses. |
| Optics lattice (1) | Every original mass x/y position over 0–600 steps. Gray spring coils are newly drawn vectors, rather than exported artwork. | `optics-next-lattice-source-report.json`: 9,616 comparisons; bounded source/native cycle. |
| Optics vector/surface/refraction (3) | Original scalar ranges, ordinary/extraordinary modes, vector and ellipse bases, ordinary/extraordinary wave directions and rounded ray-angle/speed readouts. Angle conversions agree with the original. | `optics-next-surface-source-report.json`: 53,916 comparisons, scalar increments/defaults and Cartesian extreme corners; continuous products are not claimed. |
| Modern core (12) | Original spin directions, angular-momentum quantum ranges, sampled random position/plane states, ionic shell counts, energy/transition coordinates, Zeeman range, all harmonic solver steps and packet phase/group motion. Packet's apparent double translation follows the original source and gives phase speed twice the envelope speed; it is not a new phase error. | `modern-next-source-report.json`: 204,499 comparisons. Random states and microscope/photon offset histories use bounded sampled domains. Microscope runtime checks include Flash 1/20-twip quantization separately. |
| Modern rotors (4) | Original molecular atom/bond topology, every x/y/z/no-axis source rotation state and camera projection. Native default x-axis differs from original unselected state and is explicitly disclosed. No-axis hides the timeline and disables playback. | `modern-next-rotor-source-report.json`: 417,280 comparisons, every step 0–500 for finite axis choices. |
| Modern semiconductors (3) | Original lattice/carrier coordinates, finite carrier-cycle positions and diode current law. Voltage −0.496…+0.496 in steps of 0.008 follows the original integer-slider conversion. Reverse current plot amplification is explicitly labeled, and diode has no fake timer. | `modern-next-semiconductor-source-report.json`: 2,965 comparisons. Scripted AVM2 runtime instrumentation remains separate/pending. |
| General (14) | Original phasor/wave shared time and sign conventions, harmonic/Fourier modes, molecular 3D coordinates/bond clipping, 4 field configurations and numeric boundary reflection/transmission. Original random wave shape is replaced with an explicit shape selector and disclosed. | Four `general-next-*-source-report.json` files: 21,293,764 comparisons. Separate original AVM1 runtime reports cover EM and boundary; scripted AVM2 source oracles are not runtime-equivalence evidence. |

## Non-blocking follow-up findings

1. **Keyboard camera alternatives are incomplete.** `assets/native-modern-next-rotor.mjs:3` and `:7`, `assets/native-general-next-molecule.mjs:3` and `:6`, and the static camera controls in `assets/native-general-next-field.mjs:8` attach pointer drag without a focusable SVG/arrow-key camera operation. Native select/range controls remain keyboard accessible, but the camera rotation itself needs an alternative for keyboard-only readers. The nuclear structure and optics implementations already provide a suitable direction-key pattern. Priority P2.
2. **Initial toggle state announcement is incomplete in three general renderers.** General molecule, field EM and boundary play buttons acquire `aria-pressed` only after play/stop handlers run, while initial markup has no `aria-pressed="false"`. Set the initial value so screen readers receive the paused state before the first interaction. This does not prevent pointer playback. Priority P2.

These are independent review notes; no shared file was edited to address them. No additional physical seconds/unit labels or FPS controls should be inferred from source display counters. Static `fps` values in internal specs do not appear as an invented playback UI.

## Independent scene results

The checker used actual browser-rendered vector geometry at 1360×1000 with original default controls. It also checked paused stability, computed curve alpha and static absence of play controls. The original low-frequency pair was rechecked for 1.9 seconds. End replay/near-end behavior is verified by the separate per-family browser reports, not this initial-state geometry check.

| Group | ID | Model | Result |
|---|---|---|---|
| nuclear-next-structure | `flash-fd22913dca9a2564` | nucleus | PASS |
| nuclear-next-structure | `flash-eb9eff83b6af5015` | excited | PASS |
| nuclear-next | `flash-f07439fbd4c95c61` | alpha | PASS |
| nuclear-next | `flash-828f6de5c2e80dae` | capture | PASS |
| nuclear-next | `flash-3eb8435919224d2c` | cm | PASS |
| nuclear-next | `flash-d6702d6db2c6746f` | lab | PASS |
| nuclear-next | `flash-fcebbc075faedcd3` | radiation | PASS |
| nuclear-next | `flash-a02de5c41a974c03` | spin | PASS |
| optics-next-lattice | `flash-a87b31c576c38eb6` | lattice | PASS |
| optics-next-surfaces | `flash-e06b32b2ecda3516` | directions | PASS |
| optics-next-surfaces | `flash-e53d7ad01f620e90` | surfaces | PASS |
| optics-next-surfaces | `flash-03bf5655767214f2` | refraction | PASS |
| optics-next | `flash-14b9db5d92e12cd7` | activity | PASS |
| optics-next | `flash-8fae081c171c0e7f` | retarder | PASS |
| optics-next | `flash-0ac1fdd561f2cc75` | stress | PASS |
| optics-next | `flash-fa07334c05e57137` | stressApparatus | PASS |
| optics-next | `flash-72fdd14414ea0bb4` | pockels | PASS |
| optics-next | `flash-39d0ed89e0662362` | cholesteric | PASS |
| optics-next | `flash-06958da63c454bc4` | nematic | PASS |
| optics-next | `flash-4a33ea8035c75ef1` | smectic | PASS |
| optics-next | `flash-471fbd63a28976d2` | stnStructure | PASS |
| optics-next | `flash-210037004e88cc11` | tnStructure | PASS |
| optics-next | `flash-df8fe70ae35e91c2` | superposition | PASS |
| modern-next-rotor | `flash-6b7f2453525617d2` | linear | PASS |
| modern-next-rotor | `flash-e22d79853840cca8` | asymmetric | PASS |
| modern-next-rotor | `flash-ffe75a7c416ca0b9` | symmetric | PASS |
| modern-next-rotor | `flash-df19d34e7a23fd8b` | spherical | PASS |
| modern-next-semiconductor | `flash-51f673b6e2e0ba51` | diode | PASS |
| modern-next-semiconductor | `flash-9c835cb54e874dd9` | ntype | PASS |
| modern-next-semiconductor | `flash-1062127f0b2ce4eb` | ptype | PASS |
| modern-next | `flash-43cae1be72e00da0` | spin | PASS |
| modern-next | `flash-ef109dfedbb89c0e` | composition | PASS |
| modern-next | `flash-20378ed38ab406bd` | position | PASS |
| modern-next | `flash-a034c53325bb5a44` | plane | PASS |
| modern-next | `flash-5c5cd22a874aa2b1` | ion | PASS |
| modern-next | `flash-1e0ff656002d034b` | rotvib | PASS |
| modern-next | `flash-a40e2e8bd85baf3e` | molpot | PASS |
| modern-next | `flash-bfbe6ef3e38e7376` | hydrogen | PASS |
| modern-next | `flash-ad95a3397c4300e3` | zeeman | PASS |
| modern-next | `flash-3c987ba991ee4873` | harmonic | PASS |
| modern-next | `flash-93a971b4d807ed76` | microscope | PASS |
| modern-next | `flash-61b4de4a4b39250d` | packet | PASS |
| general-next-boundary | `flash-69907620961b0f60` | refract1 | PASS |
| general-next-field | `flash-88a45295e0343222` | electricfield3D | PASS |
| general-next-field | `flash-03248f88cf65d710` | magneticfield3D | PASS |
| general-next-field | `flash-88b240309f887ae7` | emwavexx | PASS |
| general-next-molecule | `flash-1d59ec958ccc4eee` | rot3d | PASS |
| general-next-molecule | `flash-4d32463d3cbd52b2` | rot3d3 | PASS |
| general-next-phasor | `flash-34ec368aac272ea1` | phasor1 | PASS |
| general-next-phasor | `flash-2719277c02991730` | phasor2 | PASS |
| general-next-phasor | `flash-689f25aa00b6c60d` | phasor3 | PASS |
| general-next-phasor | `flash-1f72424931955085` | phasor4 | PASS |
| general-next-phasor | `flash-fa99f99b491eb9c9` | phasor5 | PASS |
| general-next-phasor | `flash-2e0d8ee594ee6ed5` | phasor6 | PASS |
| general-next-phasor | `flash-c6e54331b672455f` | phasor7 | PASS |
| general-next-phasor | `flash-63059d3d00cd8eb6` | fourier1new | PASS |

Reproducibility artifacts for this review: `/private/tmp/parallel225-independent-motion.mjs`, `/private/tmp/parallel225-independent-motion-report.json`, `/private/tmp/parallel225-independent-lowfps.mjs`, `/private/tmp/parallel225-independent-lowfps-report.json`. Original extracted scripts were read privately; they were not copied into the public site. The review records native/source evidence and its limits rather than labeling the entire cohort fully original-equivalent.
