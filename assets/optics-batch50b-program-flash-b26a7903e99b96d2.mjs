import { Sprite, Shape, Timer, Rectangle, LineScaleMode,CapsStyle, TimerEvent, MouseEvent, SliderEvent, int, uint, trace, navigateToURL, URLRequest, Point, TextField, TextFormat } from './optics-batch50b-adapter.mjs';
import {createKernel} from './optics-batch50b-kernel-ae8a9f17db010661.mjs';
const SPEC={"placements": {"startBtn": {"x": 479.7, "y": 133.35, "width": 70.00534057617188, "height": 20}, "marker": {"x": -60.5, "y": 155.85, "width": 6, "height": 6.012451171875}, "marker2": {"x": -17.15, "y": 155.25, "width": 6, "height": 6}}, "id": "flash-b26a7903e99b96d2", "source": "focalgrinsim2.swf", "originalSource": "http://physica.gnu.ac.kr/phtml/optics/geometric/grinetc/focalgrinsim2.swf", "title": "공간주기 길이의 GRIN 렌즈", "lesson": "5-2-9-1", "width": 560, "height": 155, "animated": true, "controls": [], "checks": [], "buttons": [{"clip": "startBtn", "label": "재생", "alternate": "일시정지", "toggle": true}], "selects": [], "drag": false, "sourceSha256": "c5f1d76d96cc8bda5eb98c78d3ef978e33f1de4a6dd0b0d0959a78e7af4447ba", "kernelSha256": "ae8a9f17db010661a079952d20e7e91ed5fc04323d2a647e9e7f1db82df6faa2", "kernelModule": "optics-batch50b-kernel-ae8a9f17db010661.mjs", "sourceFiles": [{"path": "RayTracer/CoordTrans.as", "sha256": "a7cd8719744bc96191b40738639704b69ecc8c577e47348e4ff4a8f5fa6f8108"}, {"path": "RayTracer/EGraphics.as", "sha256": "d15b6f0e57916f9134d2e5c7600887edbf44923fadfb82cddf2f87eee190532e"}, {"path": "RayTracer/FillStyle.as", "sha256": "7c808b587a9e43968f87f4570580e2fe5036183c393c19054c61c86efe029f57"}, {"path": "RayTracer/GRIN.as", "sha256": "38ba65be222557b0498e17cda9cd0024e26466be5a1b0473214b187455fcee20"}, {"path": "RayTracer/IndexField.as", "sha256": "4ec58c10cc0b1d7f6f3b16bdc70d2cf6d491e78badacc59ad424d382058f76ad"}, {"path": "RayTracer/LineStyle.as", "sha256": "d731ffa89f43d29d89196639b26323e401f2710a54570210f0ae4d93d56482e1"}, {"path": "RayTracer/Point2D.as", "sha256": "52045b527721fd87b742c9884bf5bcb46ab01ffc718007f9884b5b744e0dc324"}, {"path": "RayTracer/Prototype.as", "sha256": "2bbc6b3a7a047daa56db2b5bdf22ee2d11d07c26d6234a75b9bc1b92b3bb6bbe"}, {"path": "RayTracer/RayTrace.as", "sha256": "7c10914df6a17c9f552e8f3c2cf21fa4cb21c22628051c140b5cc77c3b2e4fd9"}, {"path": "RayTracer/WaveFront.as", "sha256": "dc3ec811588a2562fb51b1da08e7ed1f270646c2b0948bab60a420e2ab6b6022"}], "methods": ["MainTimeline", "Init", "InitWave", "frame1", "setWhiteBG", "InitInstrument", "ButtonEventHandler", "stopAniEventHandler"], "programModule": "optics-batch50b-program-flash-b26a7903e99b96d2.mjs"};
export function createTimeline(){const {CoordTrans,EGraphics,FillStyle,GRIN,IndexField,LineStyle,Point2D,Prototype,RayTrace,WaveFront}=createKernel();
class MainTimeline extends Sprite {
pt = new Sprite();
gr = new Sprite();
xposi = 0;
marker2 = new Sprite();
t1 = new Sprite();
wavefrontStep0 = 0;
indexField = new Sprite();
canvas = new Sprite();
yposi = 0;
backGraphics = new Sprite();
startBtn = new Sprite();
marker = new Sprite();
aniMode = 0;
numOfPoint = 0;
xOrigin = 0;
isFinished = false;
wf = new Sprite();
yOrigin = 0;
constructor(){super();this.width=SPEC.width;this.height=SPEC.height;this.stage=new Sprite();for(const k of Object.getOwnPropertyNames(MainTimeline.prototype))if(typeof this[k]==="function"&&k!=="constructor")this[k]=this[k].bind(this);
         
         
      }
Init(){
         this.setWhiteBG(true);
         this.InitInstrument();
         this.InitWave();
      }
InitWave(){
         let _loc1_ = NaN;
         this.pt.clearWaveFront();
         this.isFinished = false;
         this.xposi = 20;
         this.yposi = -25 + Math.random() * 50;
         if(this.yposi > 0)
         {
            this.yposi += 25;
            _loc1_ = -Math.random() * 20;
         }
         else
         {
            this.yposi -= 25;
            _loc1_ = Math.random() * 20;
         }
         this.marker.x = this.xOrigin + this.xposi;
         this.marker.y = this.yOrigin - this.yposi;
         this.marker2.x = this.xOrigin + this.xposi;
         this.marker2.y = this.yOrigin - _loc1_;
         this.wf.SetCircularWave(this.xposi,this.yposi,0,0.7,0);
         this.wf.ray[0].p.y = _loc1_;
         this.wf.ray[0].p.dir = 0;
         this.wf.ray[1].p.y = _loc1_;
         this.wf.ray[1].p.dir = 0.3;
         this.wf.ray[2].p.y = _loc1_;
         this.wf.ray[2].p.dir = -0.3;
         this.wf.ray[3].p.dir = 0;
         this.wf.ray[4].p.dir = 0.3;
         this.wf.ray[5].p.dir = -0.3;
         this.wf.ray[0].rayLineStyle = new LineStyle(1,26112,1,false,LineScaleMode.NONE);
         this.wf.ray[1].rayLineStyle = new LineStyle(1,26112,1,false,LineScaleMode.NONE);
         this.wf.ray[2].rayLineStyle = new LineStyle(1,26112,1,false,LineScaleMode.NONE);
      }
frame1(){
         this.xOrigin = 0;
         this.yOrigin = 70;
         this.numOfPoint = 6;
         this.wavefrontStep0 = 40;
         this.pt = new Prototype(this.numOfPoint,this.wavefrontStep0,this.xOrigin,this.yOrigin);
         this.pt.background.addEventListener(TimerEvent.TIMER,this.stopAniEventHandler);
         this.pt.aniMode = 1;
         this.isFinished = false;
         this.canvas = this.pt.background;
         this.addChild(this.canvas);
         this.backGraphics = new Sprite();
         this.gr = this.backGraphics.graphics;
         this.addChild(this.backGraphics);
         this.addChild(this.marker);
         this.addChild(this.marker2);
         this.wf = this.pt.wf;
         this.wf.isShowRay = true;
         this.wf.isShowFront = false;
         this.indexField = this.pt.indexField;
         this.aniMode = 0;
         this.Init();
         this.startBtn.addEventListener(MouseEvent.CLICK,this.ButtonEventHandler);
      }
setWhiteBG(param1){
         this.pt.setWhiteBG(param1);
         if(param1)
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16711680,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,26112,1);
         }
         else
         {
            this.wf.defaultRayLineStyle = new LineStyle(1,16720418,1,false,LineScaleMode.NONE);
            this.wf.frontLineStyle = new LineStyle(1,47872,1);
         }
         this.gr.clear();
         this.gr.lineStyle(1,8421504,1);
         this.gr.moveTo(0,this.yOrigin);
         this.gr.lineTo(560,this.yOrigin);
         this.gr.moveTo(0,0);
      }
InitInstrument(){
         let _loc1_ = NaN;
         _loc1_ = 0.012;
         this.t1 = new GRIN(1.75,_loc1_,2 * Math.PI / _loc1_,120);
         this.t1.p.x = 20 + this.t1.thickness / 2;
         this.t1.p.y = 0;
         this.t1.p.dir = 0;
         this.gr.moveTo(20 + Math.PI / _loc1_,0);
         this.gr.lineTo(20 + Math.PI / _loc1_,140);
         this.indexField.AddInstrument(this.t1);
         this.indexField.boundRect = new Rectangle(0,-210,560,280);
         this.indexField.Draw();
      }
ButtonEventHandler(param1){
         if(param1.target == this.startBtn)
         {
            if(this.startBtn.isON)
            {
               this.pt.startAni();
            }
            else
            {
               this.pt.stopAni();
            }
         }
      }
stopAniEventHandler(param1){
         this.InitWave();
         this.pt.startAni();
      }
}
const timeline=new MainTimeline();for(const [key,p]of Object.entries(SPEC.placements)){if(timeline[key])Object.assign(timeline[key],Object.fromEntries(Object.entries(p).filter(([,v])=>v!==null)));}if(timeline.mk){timeline.mk.width=SPEC.width;timeline.mk.height=SPEC.height;}timeline.frame1();return timeline;}
