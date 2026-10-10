import quantumMath.*;import spMath.*;import java.lang.reflect.*;import java.util.*;
public class QuantumHydrogenReference {
 static Object f(Object x,String n)throws Exception{Field z=x.getClass().getDeclaredField(n);z.setAccessible(true);return z.get(x);}
 public static void main(String[]args)throws Exception {
  double[][] cases={{.05,0,15,5},{-.15,.15,25,2},{.15,-.15,0,10}};
  System.out.println("[");
  for(int ci=0;ci<cases.length;ci++) {double[]p=cases[ci];Hydrogen3D b=new Hydrogen3D(50,200,36,36);b.build(500);Gaussian3DWaveFtn g=new Gaussian3DWaveFtn(0,0,p[2],0,p[0],p[1],p[3]);b.setAmplitude(g.waveFtnSpherical(b.beamInfo));ArrayList<?> q=b.getQListSelected();
  System.out.printf(java.util.Locale.ROOT,"{\"parameters\":[%g,%g,%g,%g],\"selected\":%d,\"initialMax\":%.17g,\"coefficient0\":[",p[0],p[1],p[2],p[3],q.size(),(Double)f(b,"maxAmplitude"));Object first=q.get(0);Complex a=(Complex)f(first,"amplitude");System.out.printf(java.util.Locale.ROOT,"%d,%d,%d,%.17g,%.17g],\"samples\":[",(Integer)f(first,"n"),(Integer)f(first,"l"),(Integer)f(first,"m"),a.re(),a.im());
  double[][] points={{15,.6,.5,0},{12,1.2,1.7,5e-17},{25,.4,2.2,7.5e-16},{8,1.5,.1,-5e-16}};for(int i=0;i<points.length;i++){double[]pt=points[i];Complex s=new Complex(0,0);for(Object o:q){int n=(Integer)f(o,"n"),l=(Integer)f(o,"l"),m=(Integer)f(o,"m");double e=(Double)f(o,"E");Complex c=(Complex)f(o,"amplitude");s=s.add(c.mul(Complex.polar(1,-e*pt[3]/6.58211928e-16)).mul(HydrogenWaveFtn.Psi(n,l,m,pt[0],pt[1],pt[2])));}System.out.printf(java.util.Locale.ROOT,"%s{\"point\":[%g,%g,%g,%g],\"re\":%.17g,\"im\":%.17g}",i>0?",":"",pt[0],pt[1],pt[2],pt[3],s.re(),s.im());}System.out.print("]}"+(ci<cases.length-1?",":""));
 }
 System.out.println("]"); }
}
