// Entry point for this ai-excited-01 submission.
//
// The artwork lives in this repository as the file entry.png, right beside
// this program. The grader runs the program in a container whose only
// writable mount is the output folder (/output there; MAKEFUN_OUTPUT_DIR
// names a stand-in for it in a local run). All the program does is deliver
// a byte-for-byte copy of the artwork into that folder under the name the
// gate expects, entry.png, so the judge sees exactly the image in the repo.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The grader provides the output folder, but a local run may point at one
// that does not exist yet; make sure the copy below never fails for that.
mkdirSync(targetDir, { recursive: true });

copyFileSync(join(repoDir, 'entry.png'), join(targetDir, 'entry.png'));
