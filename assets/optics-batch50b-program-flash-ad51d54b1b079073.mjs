import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-f402a795ba065de6.mjs';
const SPEC={"placements": {"resetBtn": {"x": 427.4, "y": 20.35, "width": 70.00534057617188, "height": 20}, "imageTxt": {"x": 291.8, "y": 2, "width": null, "height": null}, "obj2Txt": {"x": 5.4, "y": 2, "width": null, "height": null}}, "id": "flash-ad51d54b1b079073", "source": "simprism4.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/prism/simprism4.swf", "title": "도브 프리즘", "lesson": "5-2-6-2", "width": 500, "height": 190, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "resetBtn", "label": "리셋", "alternate": "정지", "toggle": false}], "selects": [], "drag": false, "sourceSha256": "d5bd372cc9285f22d139705ac428d5129d51186bf257cbd117cbb78fb0f6a092", "kernelSha256": "f402a795ba065de6eb409aec53db6d46d162ddcfd44c44e07747b2f1595bca86", "kernelModule": "optics-batch50b-kernel-f402a795ba065de6.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "feeb9fa7ccbb3e367118d5c132d38083e3cbf5fb9c2dfb8f4eb2372939c78e67"}, {"path": "RayTracer/FillStyle.as", "sha256": "c109f1e3f01a5942521871ef18b2571d7c380231c6251d0dff6a843673a176d1"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "74c4bad9691fe0d351cac254ae9a880de8aa6a4049d30f030ed571cf9577af68"}, {"path": "RayTracer/Prism.as", "sha256": "b163d9c7694b374a2b30152a6c226590d807a2b7566f4f47f7f81af413f0d341"}, {"path": "RayTracer/Prototype.as", "sha256": "4ab654b83c6c73b593337008201d9f4980df6afde6d4e6788938d5b47748bbac"}, {"path": "RayTracer/RayTrace.as", "sha256": "4671019da1743c5f25f207dbfbfe162f034de5064384a200ad9d98e5e5938823"}, {"path": "RayTracer/Rindex.as", "sha256": "88d02247fc8d5c6fe9d48b3fd7f295d76d37fb76c961df64f3c7de3e67f81709"}, {"path": "RayTracer/ScreenCoord.as", "sha256": "a17d5fdc2eccab4d5cd41de75524660a3f6f73cfa1e87a4a4c18a8373d469cc4"}, {"path": "RayTracer/WaveFront.as", "sha256": "47a5c33b2381c0082aeb421220ba35e69ee5e1551bd6ab87891c4673981ab4ce"}], "methods": ["MainTimeline", "Init", "InitInstrument", "InitWave", "setWhiteBG", "frame1", "indexReset", "ButtonEventHandler", "aniReset", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-ad51d54b1b079073.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,IndexField,LineStyle,Point2D,Prism,Prototype,RayTrace,Rindex,ScreenCoord,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
imageTxt = new Sprite();
apex = 0;
wavefrontStep0 = 0;
t1 = new Sprite();
indexField = new Sprite();
canvas = new Sprite();
obj2Txt = new Sprite();
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
            if(_loc1_ - Math.floor(_loc1_ / 4) * 4 == 2)
            {
               this.wf.ray[_loc1_].isShowRay = true;
            }
            else
            {
               this.wf.ray[_loc1_].isShowRay = false;
            }
            _loc1_++;
         }
      }
InitInstrument(){
         this.t1 = new Prism(1.5,new Point2D(200,0,0),new Point2D(0,150,0),new Point2D(-200,0,0));
         this.t1.p.x = 0;
         this.t1.p.y = 0;
         this.t1.setApexAngle(Math.PI / 2);
         this.t1.makeIsosceles();
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
         let _loc1_ = NaN;
         this.wf.isShowFront = Math.random() > 0.6 ? true : false;
         this.wf.SetParallelWave(-this.xOrigin,-17.5,0,64);
         _loc1_ = Math.round((this.apex / 2 + this.dir) * 100) / 100;
         this.obj2Txt.text = "입사각: 45 도";
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
         this.xOrigin = 250;
         this.yOrigin = 120;
         this.numOfPoint = 65;
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
         this.imageTxt.text = "";
         this.indexReset();
         this.pt.stopAni();
         this.InitWave();
         this.pt.startAni();
      }
stopAniEventHandler(param1){
         let _loc2_ = NaN;
         _loc2_ = -180 / Math.PI * this.wf.ray[this.midPoint].p.dir;
         this.imageTxt.text = "편향각: " + Math.round(_loc2_ * 100) / 100 + "도";
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
