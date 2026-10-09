package {
 import flash.display.MovieClip;
 import flash.events.Event;
 public dynamic class PhysicaNuclearBatch50bObserver extends MovieClip {
  public function PhysicaNuclearBatch50bObserver(){super();addEventListener(Event.ENTER_FRAME,observe);}
  private function observe(e:Event):void {
   var r:Object=root;if(r==this)return;
   try {
    var s:String="PHYSICA_RT";
    for each(var name:String in ["ESCALE","MSCALE","TSCALE","amplitudeFactor","l_quantumNumber","dist","option1","modeNumber","functionType","maxECalc"])if(name in r)s+="|_root."+name+"="+r[name];
    for each(var key:String in ["slider1","slider2","slider3","slider4","slider5"])if(key in r)s+="|_root."+key+".value="+r[key].value;
    if("a" in r && r.a!=null)for(var i:int=0;i<r.a.getNumberOfLevels();i++)s+="|_root.energy."+i+"="+r.a.getEnergyValue(i);
    // Both getters return already stored private data. No solver or draw function called.
    if("b" in r && r.b!=null){var pot:Object=r.b.getPotential();for(var j:int=0;j<pot.length;j+=10)s+="|_root.V."+j+"="+pot[j];}
    if("energyTextField" in r && r.energyTextField!=null)for(var k:int=0;k<r.energyTextField.length;k++)if(r.energyTextField[k]!=null)s+="|_root.labelY."+k+"="+r.energyTextField[k].y;
    trace(s);
   }catch(error:Error){trace("PHYSICA_RT|observerError="+error.message);}
  }
 }
}
