# Nuclear radial models — batch 50, second set

Two separate original documents now use authored SVG, HTML controls and a module worker for the original radial finite-difference solver. No Flash frames or bitmap geometry is embedded.

- `generalradialnuclear.swf`: six original potential modes; strength, radius, optional hard-core / electrostatic / diffuseness parameter, mass and selected angular momentum. Computes original channels ℓ=0..7, seven levels per channel on501 original samples. Visible levels use the original cutoff (bound states, or75MeV harmonic range). Wavefunction and probability switches retain their original defaults. Other angular channels are faint; selected channel uses GNU blue, .65 curve opacity and .12 density fill. Reset and current-data CSV are provided.
- `generalradialnucleargraph.swf`: three original potential modes, original scalar ranges/defaults. The original `calc` does not run the eigenvalue finder: consequently this port shows potential curves only. It does not display invented energy levels or misleading playback controls.

Both are stationary calculations, not timed motion. Their frame bars and play buttons are absent. Numerical work runs in a worker, rapid slider edits debounce70ms, obsolete responses cannot replace newer inputs. Selected angular momentum and display switches redraw the existing computed data. SVG chart width adapts to the available reading panel; all text is native scalable SVG. CSV radius coordinates reflect the original solver spacing10/501 rather than the old drawing’s rounded index spacing.

Source evidence executes the original MainTimeline selector/scaling method and original private QuantumSolver classes independently of the native renderer: all potential modes, each scalar endpoint with other controls default, every angular channel, stored energies and visible wave/potential samples. It does not enumerate the Cartesian product of interior sliders or event sequences.

Original-runtime evidence uses a separate readonly observer with original ABC, document class, tags and timing preserved. It reads stored eigenvalues (level model only),51 potential samples and parameter scales at the original initial controls. It calls only pure stored-data getters, never the original solver, drawing or updater. Runtime scope remains bounded; it is not equivalence to every possible Flash input history.

Actual reading-page UI evidence covers320/768/1360 widths, all dropdown modes, input-driven geometry changes, wave/density/ℓ switches, reset, CSV and no horizontal overflow. The overall playback audit independently classifies both as static, with no framebar.
