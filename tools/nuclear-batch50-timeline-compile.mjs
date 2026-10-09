import fs from 'node:fs';import path from 'node:path';import {execFileSync} from 'node:child_process';
export function compileNuclearBatch50TimelineObserver(){
 const dir=path.resolve('preview/private-tools/nuclear-batch50-timeline',String(process.pid)),jar=path.resolve('preview/private-tools/ffdec/ffdec.jar'),swc=path.resolve('preview/private-tools/ffdec/flashlib/playerglobal32_0.swc'),source=path.resolve('tools/java/PhysicaNuclearBatch50TimelineObserver.as'),original=path.resolve('assets/flash/original/phtml/modern/molecular/moenergy/rot3dmo.swf'),abc=path.join(dir,'PhysicaNuclearBatch50TimelineObserver.abc');
 fs.mkdirSync(dir,{recursive:true});execFileSync('/usr/bin/javac',['-cp',jar,'-d',dir,'tools/java/CompileRuntimeProbe.java']);execFileSync('/usr/bin/java',['-Duser.home='+dir,'-cp',dir+path.delimiter+jar,'CompileRuntimeProbe',original,source,abc,swc]);return fs.readFileSync(abc);
}
