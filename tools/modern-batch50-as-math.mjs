// Diagnostic-only adaptation of private original numerical methods. No artwork or SWF frames.
export function adaptMathAS(code){
  let s=code;
  for(let i=0;i<5;i++)s=s.replace(/Vector\.<([^<>]*)>/g,'Array');
  s=s.replace(/new Array\(([^(),]+),true\)/g,'new Array($1).fill(0)');
  s=s.replace(/:\s*(?:Number|int|uint|Boolean|void|Array|ComplexMatrix|Matrix|Complex|FittingProtocol|PotentialPointer|EigenfunctionData|EigenfunctionFinder|Function|String|Graphics|Rectangle|Point3D|Point|Sprite|Ball|Cam|LineStyle|FillStyle|LinkBall|\*)/g,'');
  s=s.replace(/\buint\(/g,'Math.trunc(').replace(/\bint\(/g,'Math.trunc(');
  return s;
}
