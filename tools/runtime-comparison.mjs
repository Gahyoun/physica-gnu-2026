// Missing/nonfinite telemetry must never count as a successful finite comparison.
export function compareFinite(expected,observed,absolute=0,relative=0){
 const error=Number.isFinite(expected)&&Number.isFinite(observed)?Math.abs(expected-observed):Infinity;
 const tolerance=absolute+relative*Math.max(1,Math.abs(expected),Math.abs(observed));
 return {error,tolerance,passed:Number.isFinite(error)&&Number.isFinite(tolerance)&&error<=tolerance};
}
