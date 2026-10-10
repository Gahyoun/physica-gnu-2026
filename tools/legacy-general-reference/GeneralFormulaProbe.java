import java.net.*;import java.lang.reflect.*;import java.nio.file.*;
public class GeneralFormulaProbe {
 public static void main(String[] args)throws Exception {
  URLClassLoader cl=new URLClassLoader(new URL[]{Paths.get(args[0]).toUri().toURL()},ClassLoader.getPlatformClassLoader());
  if(args[1].equals("wave")){Method f=cl.loadClass("waveform1.Wave").getMethod("getValue",int.class,double.class,double.class,double.class);for(int kind=0;kind<8;kind++)for(double freq:new double[]{200,270,450})for(double amp:new double[]{0,.7,1})for(double t:new double[]{0,.0001,.001,.017,.25,.999})System.out.println(kind+","+freq+","+amp+","+t+","+f.invoke(null,kind,freq,amp,t));}
  else if(args[1].equals("potential")){Method f=cl.loadClass("net.multiedu.vwparticle.VWpotential").getMethod("ballPotential",double.class,double.class,double.class,int.class);for(int kind=0;kind<2;kind++)for(double u:new double[]{-10,0,.5,1,10,50,135})for(double r:new double[]{.1,.25,.5})for(double d:new double[]{.07,.1,.15,.3,.6,1})System.out.println(kind+","+u+","+r+","+d+","+f.invoke(null,u,r,d,kind));}
 }
}
