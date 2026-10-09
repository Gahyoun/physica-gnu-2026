package {
 import flash.display.MovieClip;
 import flash.events.Event;
 public dynamic class PhysicaOpticsBatch50Observer extends MovieClip {
  public function PhysicaOpticsBatch50Observer(){super();addEventListener(Event.ENTER_FRAME,observe);}
  private function observe(e:Event):void {
   var r:Object=root;if(r==this)return;
   try {
    var text:String="PHYSICA_RT";
    var fields:Array=["aniMode","xOrigin","yOrigin","xposi","yposi","wavefrontStep0","numOfPoint"];
    for each(var key:String in fields)if(key in r)text+="|root."+key+"="+r[key];
    for each(var name:String in ["t1","t2"]){
     if(name in r&&r[name]!=null){var o:Object=r[name];
      for each(key in ["R1","R2","R","rIndex","thickness","length","e","a","b","num","f"])if(key in o){try{text+="|"+name+"."+key+"="+o[key];}catch(unreadable:Error){}}
      if("p" in o)for each(key in ["x","y","dir"])text+="|"+name+".p."+key+"="+o.p[key];
     }
    }
    if("wf" in r&&r.wf!=null){
     if("indexField" in r&&r.indexField!=null&&r.indexField.boundRect!=null)for each(key in ["x","y","width","height"])text+="|bounds."+key+"="+r.indexField.boundRect[key];
     for(var i:int=0;i<r.wf.ray.length;i++){var ray:Object=r.wf.ray[i];text+="|ray."+i+".x="+ray.p.x+"|ray."+i+".y="+ray.p.y+"|ray."+i+".dir="+ray.p.dir;if("countReflection" in ray)text+="|ray."+i+".reflection="+ray.countReflection;if("countRefraction" in ray)text+="|ray."+i+".refraction="+ray.countRefraction;}
    }
    trace(text);
   }catch(error:Error){trace("PHYSICA_RT|observerError="+error.message);}
  }
 }
}
