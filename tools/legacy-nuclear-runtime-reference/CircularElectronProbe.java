import java.net.*;import java.lang.reflect.*;
public class CircularElectronProbe {
 public static void main(String[]args)throws Exception{
  URLClassLoader l=new URLClassLoader(new URL[]{new URL(args[0])});Class<?> c=l.loadClass("Electron");Constructor<?> ctor=c.getDeclaredConstructor(double.class,double.class,boolean.class,double.class);ctor.setAccessible(true);Method calc=c.getDeclaredMethod("calcPosition",double.class);calc.setAccessible(true);Field x=c.getDeclaredField("x"),y=c.getDeclaredField("y");x.setAccessible(true);y.setAccessible(true);
  for(double px:new double[]{15,35,70,120,175})for(double py:new double[]{-40,0,80})for(boolean clockwise:new boolean[]{false,true})for(double t:new double[]{0,1,33,123,300}){
   Object e=ctor.newInstance(200+px,200+py,!clockwise,0.0);calc.invoke(e,t);System.out.printf(java.util.Locale.ROOT,"%s,%s,%s,%s,%.17g,%.17g%n",px,py,clockwise,t,x.getDouble(e)-200,y.getDouble(e)-200);
  }
 }
}
