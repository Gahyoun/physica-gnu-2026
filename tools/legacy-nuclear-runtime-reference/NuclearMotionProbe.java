import java.net.*;import java.lang.reflect.*;import java.awt.image.*;
/** Numeric probe of original bytecode, without running animation threads. */
public class NuclearMotionProbe {
 static Field field(Class<?> c,String name)throws Exception{Field f=c.getDeclaredField(name);f.setAccessible(true);return f;}
 static void set(Object o,String k,Object v)throws Exception{field(o.getClass(),k).set(o,v);}
 static Object call(Object o,String name,double...v)throws Exception{Class<?>[] t=new Class<?>[v.length];Object[] a=new Object[v.length];for(int i=0;i<v.length;i++){t[i]=double.class;a[i]=v[i];}return o.getClass().getMethod(name,t).invoke(o,a);}
 public static void main(String[] args)throws Exception{
  URLClassLoader loader=new URLClassLoader(new URL[]{new URL(args[0])});String cls=args[1];Class<?> c=loader.loadClass(cls),particle=loader.loadClass("net.multiedu.nuclear.Particle");Object app=c.getConstructor().newInstance();set(app,"scaleFactor",1.0);set(app,"bi_g",new BufferedImage(400,400,BufferedImage.TYPE_INT_RGB).createGraphics());Object nucleus=field(c,"nucleus").get(app);call(nucleus,"setCenterXY",200,200);
  boolean rep=cls.equals("rutherford0");Method next=c.getDeclaredMethod("calcNextPosition",particle);next.setAccessible(true);
  for(boolean radiation:new boolean[]{false,true}){if(rep&&radiation)continue;if(!rep)set(app,"isRadiating",radiation);
   for(double x:new double[]{-220,-100,60,175})for(double y:new double[]{-130,0,90})for(double vx:new double[]{-4,10,20}){
    Object p=particle.getConstructor().newInstance();call(p,"setCenterXY",200+x,200+y);call(p,"setVelocity",vx,3);p.getClass().getMethod("setName",String.class).invoke(p,"free");next.invoke(app,p);
    System.out.printf(java.util.Locale.ROOT,"%s,%s,%.17g,%.17g,%.17g,%.17g,%.17g,%.17g,%.17g,%.17g%n",cls,radiation,x,y,vx,3.0,((Number)call(p,"getCenterX")).doubleValue()-200,((Number)call(p,"getCenterY")).doubleValue()-200,call(p,"getVelocityX"),call(p,"getVelocityY"));
   }
  }
 }
}
