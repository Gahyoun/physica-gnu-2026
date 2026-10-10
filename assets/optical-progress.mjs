// Measure the original solver's natural end on an isolated, drawing-free copy.
// The visible solver, optical units, random device settings and event handlers
// are never advanced by this preview.
function copySolver(value, copies = new Map()) {
  if (!value || typeof value !== 'object') return value;
  if (copies.has(value)) return copies.get(value);
  if (value instanceof Map) return new Map(); // No original GUI callbacks.
  if (value instanceof Set) return new Set();
  const copy = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value));
  copies.set(value, copy);
  for (const key of Object.keys(value)) copy[key] = copySolver(value[key], copies);
  if (Array.isArray(value.items) && typeof value.drawRect === 'function') {
    copy.items = [];
    for (const method of ['moveTo', 'lineTo', 'curveTo', 'drawRect', 'drawCircle']) copy[method] = () => {};
  }
  return copy;
}

export function opticalEndStep(prototype) {
  const probe = copySolver(prototype);
  // Focus readouts and final drawing do not affect the stopping condition.
  probe.finalTreat = () => {};
  probe.startAni();
  const ceiling = (Math.max(1, prototype.aniTimeLimit) + 2) * (prototype.hyugenceMode ? 21 : 1);
  let steps = 0;
  while (probe.animationTimer.running && steps < ceiling) {
    probe.onTick({});
    steps++;
  }
  return Math.max(1, steps);
}

// Some original startAni methods zero their counter even when resuming.
// Keep the physical clock aligned with the already rendered progress.
export function resumeOptical(prototype, step) {
  const time = prototype.currentTime;
  prototype.startAni();
  if (step > 0) prototype.currentTime = time;
}
