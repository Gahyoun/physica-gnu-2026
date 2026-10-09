package {
 import flash.display.MovieClip;
 import flash.events.Event;
 public dynamic class PhysicaOpticsBatch50bObserver extends MovieClip {
  public function PhysicaOpticsBatch50bObserver(){super();addEventListener(Event.ENTER_FRAME,observe);}
  private function observe(e:Event):void {
   var r:Object=root;if(r==this)return;
   try {
    var text:String="PHYSICA_RT";
    var fields:Array=["aniMode","xOrigin","yOrigin","xposi","yposi","wavefrontStep0","numOfPoint","dir","apex","fL","n","n0","angle"];
    for each(var key:String in fields)if(key in r)text+="|root."+key+"="+r[key];
    for each(var name:String in ["t1","t2"]){
     if(name in r&&r[name]!=null){var o:Object=r[name];
      for each(key in ["R1","R2","R","rIndex","thickness","length","e","a","b","num","f","material","nMax"])if(key in o){try{text+="|"+name+"."+key+"="+o[key];}catch(unreadable:Error){}}
      for each(var vertex:String in ["vertex1","vertex2","vertex3"])if(vertex in o)for each(key in ["x","y","dir"])text+="|"+name+"."+vertex+"."+key+"="+o[vertex][key];
      if("p" in o)for each(key in ["x","y","dir"])text+="|"+name+".p."+key+"="+o.p[key];
     }
    }
    if("data" in r&&r.data is Array){for(var di:int=0;di<r.data.length;di++)for(var dj:int=0;dj<r.data[di].length;dj++)text+="|data."+di+"."+dj+".x="+r.data[di][dj].x+"|data."+di+"."+dj+".y="+r.data[di][dj].y;}
    for each(var marker:String in ["marker","marker2"])if(marker in r&&r[marker]!=null)for each(key in ["x","y"])text+="|"+marker+"."+key+"="+r[marker][key];
    if("wf" in r&&r.wf!=null){
     if("indexField" in r&&r.indexField!=null&&r.indexField.boundRect!=null)for each(key in ["x","y","width","height"])text+="|bounds."+key+"="+r.indexField.boundRect[key];
     for(var i:int=0;i<r.wf.ray.length;i++){var ray:Object=r.wf.ray[i];if("waveLength" in ray)text+="|ray."+i+".wavelength="+ray.waveLength;text+="|ray."+i+".x="+ray.p.x+"|ray."+i+".y="+ray.p.y+"|ray."+i+".dir="+ray.p.dir;if("countReflection" in ray)text+="|ray."+i+".reflection="+ray.countReflection;if("countRefraction" in ray)text+="|ray."+i+".refraction="+ray.countRefraction;}
    }
    trace(text);
   }catch(error:Error){trace("PHYSICA_RT|observerError="+error.message);}
  }
 }
}
