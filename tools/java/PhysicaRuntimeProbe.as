package {
 import flash.display.MovieClip;
 import flash.events.Event;
 public dynamic class PhysicaRuntimeProbe extends MovieClip {
  public function PhysicaRuntimeProbe() { super(); addEventListener(Event.ENTER_FRAME, observe); }
  private function observe(e:Event):void { trace("PHYSICA_RT|_root._currentframe=" + currentFrame); }
 }
}
