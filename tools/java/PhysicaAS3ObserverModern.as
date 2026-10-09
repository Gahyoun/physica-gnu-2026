package {
 import flash.display.MovieClip;
 import flash.events.Event;
 public dynamic class PhysicaAS3ObserverModern extends MovieClip {
  public function PhysicaAS3ObserverModern() { super(); addEventListener(Event.ENTER_FRAME, observe); }
  private function observe(e:Event):void {
   var r:Object = root;
   if(r == this) return;
   try {
    var text:String = "PHYSICA_RT";
    if("currentTime" in r) text += "|_root.currentTime=" + r.currentTime;
    if("time" in r) text += "|_root.time=" + r.time;
    if("Time" in r) text += "|_root.Time=" + r.Time;
    var names:Array = ["He4","neutron","nuclear1","nuclear2","proton","photon","cm"];
    for each(var key:String in names) {
     if(key in r && r[key] != null) text += "|_root." + key + ".x=" + r[key].x + "|_root." + key + ".y=" + r[key].y;
    }
    if("ball1" in r) {
     text += "|_root.ball1.center.x=" + r.ball1.center.x + "|_root.ball1.center.y=" + r.ball1.center.y + "|_root.ball1.center.z=" + r.ball1.center.z;
     text += "|_root.ball2.center.x=" + r.ball2.center.x + "|_root.ball2.center.y=" + r.ball2.center.y + "|_root.ball2.center.z=" + r.ball2.center.z;
     text += "|_root.xChk.isChecked=" + r.xChk.isChecked + "|_root.yChk.isChecked=" + r.yChk.isChecked + "|_root.zChk.isChecked=" + r.zChk.isChecked;
     text += "|_root.cam.f=" + r.cam.f;
    }
    if("timeInt" in r) text += "|_root.timeInt=" + r.timeInt;
    trace(text);
   } catch(error:Error) { trace("PHYSICA_RT|observerError=" + error.message); }
  }
 }
}
