// Re-run the entire final69 after integration fixes; keep the first full-collection audit separate.
import fs from 'node:fs';import {spawnSync} from 'node:child_process';
const assignment=JSON.parse(fs.readFileSync('docs/parallel-remaster-final69.json'));
const ids=Object.values(assignment.groups).flat().map(v=>v.id);
const run=spawnSync(process.execPath,['tools/playback-browser-audit.mjs'],{stdio:'inherit',env:{...process.env,PHYSICA_PLAYBACK_IDS:ids.join(','),PHYSICA_PLAYBACK_REPORT:'docs/final69-playback-ui-report.json'}});
process.exit(run.status??1);
