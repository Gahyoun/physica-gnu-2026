import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-a95275a0a29e44e0.mjs';
const SPEC={"placements": {"resetBtn": {"x": 2.4, "y": 176.3, "width": 70.00534057617188, "height": 20}}, "id": "flash-190ba027454d6737", "source": "simprism5.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/prism/simprism5.swf", "title": "반사 프리즘", "lesson": "5-2-6-2", "width": 300, "height": 200, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "685af8d21d58877897b831b873bd4064f733a6bfe6654c470047435b09d8820d", "kernelSha256": "a95275a0a29e44e0ae93a883a335efa0961f348ef781067757a4739ea8f882d1", "kernelModule": "optics-batch50b-kernel-a95275a0a29e44e0.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "d15b6f0e57916f9134d2e5c7600887edbf44923fadfb82cddf2f87eee190532e"}, {"path": "RayTracer/FillStyle.as", "sha256": "7c808b587a9e43968f87f4570580e2fe5036183c393c19054c61c86efe029f57"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "52045b527721fd87b742c9884bf5bcb46ab01ffc718007f9884b5b744e0dc324"}, {"path": "RayTracer/Prism.as", "sha256": "b163d9c7694b374a2b30152a6c226590d807a2b7566f4f47f7f81af413f0d341"}, {"path": "RayTracer/Prototype.as", "sha256": "2bbc6b3a7a047daa56db2b5bdf22ee2d11d07c26d6234a75b9bc1b92b3bb6bbe"}, {"path": "RayTracer/RayTrace.as", "sha256": "7c10914df6a17c9f552e8f3c2cf21fa4cb21c22628051c140b5cc77c3b2e4fd9"}, {"path": "RayTracer/Rindex.as", "sha256": "76041fc879eb37a912febc556ab30b2fbfb5353c1167d680b1d3ba66501b72c1"}, {"path": "RayTracer/WaveFront.as", "sha256": "dc3ec811588a2562fb51b1da08e7ed1f270646c2b0948bab60a420e2ab6b6022"}], "methods": ["MainTimeline", "Init", "InitInstrument", "InitWave", "setWhiteBG", "frame1", "indexReset", "ButtonEventHandler", "aniReset", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-190ba027454d6737.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prism,Prototype,RayTrace,Rindex,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
apex = 0;
wavefrontStep0 = 0;
t1 = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
n = 0;
backGraphics = new Sprite();
numOfPoint = 0;
midPoint = 0;
resetBtn = new Sprite();
dir = 0;
xOrigin = 0;
wf = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
         this.__setProp_resetBtn__1();
      }
Init(){
         let _loc1_ = 0;
         this.setWhiteBG(true);
         this.InitInstrument();
         this.aniReset();
         _loc1_ = int(0);
         while(_loc1_ < this.numOfPoint)
         {
            this.wf.ray[_loc1_].isShowRay = false;
            _loc1_ += 2;
         }
      }
InitInstrument(){
         this.t1 = new Prism(1.5,new Point2D(0,0,0),new Point2D(0,150,0),new Point2D(150,0,0));
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.positionCenter();
         this.indexField.AddInstrument(this.t1);
         this.indexField.boundRect = new Rectangle(-this.xOrigin,-100,500,200);
      }
__setProp_resetBtn__1(){
         try
         {
            this.resetBtn["componentInspectorSetting"] = true;
         }
         catch(e)
         {
         }
         this.resetBtn.backOffColor = 21947;
         this.resetBtn.backOnColor = 22015;
         this.resetBtn.backOverColor = 13369548;
         this.resetBtn.enabled = true;
         this.resetBtn.fontBold = true;
         this.resetBtn.fontColor = 14548957;
         this.resetBtn.fontEmbed = false;
         this.resetBtn.fontName = "_sans";
         this.resetBtn.fontSize = 12;
         this.resetBtn.boxHeight = 20;
         this.resetBtn.lineColor = 8421504;
         this.resetBtn.lineThickness = 1;
         this.resetBtn.isON = false;
         this.resetBtn.skin = 0;
         this.resetBtn.textOFF = "리셋";
         this.resetBtn.textON = "정지";
         this.resetBtn.isToggle = false;
         this.resetBtn.visible = true;
         this.resetBtn.boxWidth = 70;
         try
         {
            this.resetBtn["componentInspectorSetting"] = false;
         }
         catch(e)
         {
         }
      }
InitWave(){
         this.wf.isShowFront = Math.random() > 0.6 ? true : false;
         this.wf.SetParallelWave(10 - this.xOrigin,25,0,108);
         this.wf.ShowRayStatus(25,new LineStyle(2,16711935,1),6);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,26112,1);
            this.wf.huyLineStyle = new LineStyle(1,170,1,false,LineScaleMode.NONE);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,47872,1);
            this.wf.huyLineStyle = new LineStyle(1,255,1,false,LineScaleMode.NONE);
         }
      }
frame1(){
         this.xOrigin = 150;
         this.yOrigin = 100;
         this.numOfPoint = 55;
         this.wavefrontStep0 = 10;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.addChild(this.resetBtn);
         this.wf = this.pt.wf;
         this.wf.isShowRay = true;
         this.wf.isShowFront = true;
         this.midPoint = Math.floor(this.numOfPoint / 2);
         this.indexField = this.pt.indexField;
         this.Init();
         this.indexReset();
         this.resetBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
      }
indexReset(){
         this.indexField.Draw();
      }
ButtonEventHandler(param1){
         if(param1.target == this.resetBtn)
         {
            this.aniReset();
         }
      }
aniReset(){
         this.pt.clearWaveFront();
         this.indexReset();
         this.pt.stopAni();
         this.InitWave();
         this.pt.startAni();
      }
stopAniEventHandler(param1){
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
