package {
 import flash.display.MovieClip;
 import flash.events.Event;
 public dynamic class PhysicaNuclearBatch50TimelineObserver extends MovieClip {
  public function PhysicaNuclearBatch50TimelineObserver(){super();addEventListener(Event.ADDED_TO_STAGE,attach);addEventListener(Event.ENTER_FRAME,observe);}
  private function attach(e:Event):void {
   var r:MovieClip=root as MovieClip;
   if(r!=null&&r!=this)r.addEventListener(Event.FRAME_CONSTRUCTED,observe);
  }
  private function observe(e:Event):void {
   var r:MovieClip=root as MovieClip;
   if(r==null||r==this)return;
   trace("PHYSICA_RT|_root._currentframe="+r.currentFrame+"|_root._totalframes="+r.totalFrames);
  }
 }
}
