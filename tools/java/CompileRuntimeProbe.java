// Compile only our diagnostic observer; no original ActionScript is imported or published.
import java.io.*;
import com.jpexs.decompiler.flash.SWF;
import com.jpexs.decompiler.flash.configuration.Configuration;
import com.jpexs.decompiler.flash.abc.avm2.parser.script.ActionScript3Parser;
public final class CompileRuntimeProbe {
 public static void main(String[] args) throws Exception {
  Configuration.playerLibLocation.set(args[3]);
  SWF swf = new SWF(new FileInputStream(args[0]), true);
  ActionScript3Parser.compile(swf,args[1],args[2],0,0);
  if(!new File(args[2]).isFile() || new File(args[2]).length()==0)throw new IOException("Diagnostic ABC compilation failed");
 }
}
