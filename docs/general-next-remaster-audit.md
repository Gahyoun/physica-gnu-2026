# General remaster audit

The assigned 44-file group has 14 newly implemented individual native SVG models: eight phasor/Fourier, two molecular rotation, two static 3D fields, one EM wave, and one boundary reflection/transmission. Thirty assigned files remain; their exact IDs are in `general-next-remaster-progress.json`. These counts describe HTML/SVG implementation, not proof of every original runtime input history.

## Evidence

- Phasor/Fourier: 206,460 values compared against private original ActionScript function execution; 24 native UI viewport cases.
- Molecular rotation: 184,184 atom and clipped bond endpoint values from original functions and 1,001 numerical steps; six native UI viewport cases.
- Fields and EM wave: 1,672,832 original-function values; nine native UI viewport cases. Actual original EM AVM1 runtime: 25,584 comparisons across 40 naturally observed states. Sixteen collapsed arrows have undefined direction, so only their centers and lengths are compared; nonzero arrows include rotation.
- Boundary waves: 19,230,288 original-function values covering all four original random shape outcomes, all 33 discrete velocity levels, 301 timeline samples, and 121 original spatial samples. Actual original AVM1 controls and numerical queries: 10,904 comparisons across 30 bounded states, including the original speed slider's special 100/1,000 values, play/pause, speed toggle and component checkbox. Numerical function queries can update original temporary variables, and the original random shape is observed rather than replaced.

Original AVM2 script execution in Ruffle has not been instrumented for these scripted movies; no full AVM2 runtime equivalence claim is made. The private original function oracle is an independent source comparison and is recorded separately. Continuous pointer histories and all physical input combinations are not claimed to be exhaustively enumerated.

The new graphics use fresh SVG paths/circles/text with GNU blue and gray, .65-opacity curve strokes, static models without playback bars, paused offscreen animation, bottom progress controls and responsive layouts. Source wave modes, numeric parameters, sign conventions and original masking are retained. Native camera drag uses incremental movement for smoother touch interaction; source trajectories are unaffected. The boundary's originally random shape selection is made explicit in a native selector.

## Native finite timeline replay

The original phasor and molecular rotations use continuous counters. Their remaster timeline is an added, finite 0–10,000 step inspection window: playback loops within that window, and pressing play from its last step immediately resets the step (and the phasor time/history) before advancing. Boundary playback stops at the end of its 0–300 step window with the final scene preserved; pressing play from the end resets and starts again. These UI limits are native additions, not assertions that the original continuous movie ended there. The matching per-family browser checks exercise seek-to-max → play with SVG scene movement, near-max bounded loop/stop, and paused stability at 320, 768 and 1360 pixels.

## Next source notes

`refract1` is complete in this cohort. `drivenosc1` has a spring oscillator plus pendulum driven by dragging their supports; it has no automatic sinusoidal drive. Preserve the two support drag controls and actual per-step force equations rather than substituting a generic forced oscillator. `oscv2d7_7` is a 7×7 coupled displacement lattice with ten numerical substeps and held fixed boundary objects; inspect the original fixed-object coercion and drag behavior in runtime before committing a native solver. `wavemove1` randomizes four pulse artworks and signs/scales after crossing the screen; fresh vector pulse geometry needs its own source/artwork analysis, not a renamed frame export.
