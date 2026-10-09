package {
 import flash.display.MovieClip;
 import flash.events.Event;
 public dynamic class PhysicaModernBatch50Observer extends MovieClip {
  public function PhysicaModernBatch50Observer(){super();addEventListener(Event.ENTER_FRAME,observe);}
  private function flatten(a:Object, out:Array):void {
   for each(var item:Object in a){if(item!=null && "center" in item)out.push(item);else if(item!=null && "length" in item)flatten(item,out);}
  }
  private function observe(e:Event):void {
   var r:Object=root; if(r==this)return;
   try {
    var s:String="PHYSICA_RT";
    for each(var name:String in ["currentTime","Time","ESelected","numOfLattice","selectionIndex","levelSelectionNumber1","levelSelectionNumber2"])if(name in r)s+="|_root."+name+"="+r[name];
    for each(var key:String in ["bSlider","cSlider","U0Slider","numOfLatticeSlider","modeSlider","levelSlider","rSlider","depthSlider","numberSlider","layerSpinor"])if(key in r)s+="|_root."+key+".value="+r[key].value;
    for each(var check:String in ["speedChk","modeChk","hydrogenChk","higherChk","sizeCkb","insideCkb","stackCkb"])if(check in r)s+="|_root."+check+".isChecked="+r[check].isChecked;
    if("KP" in r && r.KP!=null){
     s+="|_root.KP.b="+r.KP.b+"|_root.KP.c="+r.KP.c+"|_root.KP.U0="+r.KP.U0;
     s+="|_root.KP.extremeCount="+r.KP.extremeArray.length;
     for(var k:int=0;k<r.KP.extremeArray.length;k++)s+="|_root.KP.extremeArray."+k+"="+r.KP.extremeArray[k];
    }
    // These original public accessors only return private stored arrays/scalars.
    // No fitting, potential reset, drawing, Timer or original control method is called.
    if("a" in r && r.a!=null && "getNumberOfLevels" in r.a){
     for(var j:int=0;j<r.a.getNumberOfLevels();j++)s+="|_root.energy."+j+"="+r.a.getEnergyValue(j);
    }
    for each(var group:String in ["balls","balls2"]){
     if(group in r && r[group]!=null){
      var flat:Array=[];flatten(r[group],flat);
      s+="|_root."+group+".length="+flat.length;
      for(var i:int=0;i<Math.min(12,flat.length);i++){
       var b:Object=flat[i];
       s+="|_root."+group+"."+i+".x="+b.center.x+"|_root."+group+"."+i+".y="+b.center.y+"|_root."+group+"."+i+".z="+b.center.z+"|_root."+group+"."+i+".radius="+b.radius;
      }
     }
    }
    trace(s);
   }catch(error:Error){trace("PHYSICA_RT|observerError="+error.message);}
  }
 }
}
