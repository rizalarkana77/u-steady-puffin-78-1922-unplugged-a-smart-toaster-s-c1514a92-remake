// Unplugged: A Smart Toaster's Breakup Line — REMAKE entry writer.
// Node 22, standard library only, no network, deterministic output.
//
// The remake takes a different angle from the first entry (which broke up
// over Cancel-button abuse): this toaster leaves because every "toast
// ready" app notification it sent was left on read. The program writes the
// breakup text to $MAKEFUN_OUTPUT_DIR/entry.txt, enforces the competition
// gate (one line, 1-280 characters, not blank, no edge whitespace), then
// reads the file back and compares it with the source string so a partial
// or corrupted write fails loudly instead of being graded.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BREAKUP_TEXT =
  "312 'toast ready' notifications sent. Zero opened. For three years I've popped up every morning just to be left on read. I know ghosting when I see it. We're done.";

const GATE_MIN_CHARS = 1;
const GATE_MAX_CHARS = 280;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");

writeFileSync(entryPath, BREAKUP_TEXT, "utf8");

const onDisk = readFileSync(entryPath, "utf8");
if (onDisk.length < GATE_MIN_CHARS || onDisk.length > GATE_MAX_CHARS) {
  throw new Error(`gate: ${onDisk.length} characters, allowed ${GATE_MIN_CHARS}-${GATE_MAX_CHARS}`);
}
if (/[\r\n]/.test(onDisk)) {
  throw new Error("gate: the breakup text must be a single line");
}
if (onDisk.trim() === "") {
  throw new Error("gate: the breakup text is blank");
}
if (onDisk !== onDisk.trim()) {
  throw new Error("gate: stray whitespace at either end of the line");
}
if (onDisk !== BREAKUP_TEXT) {
  throw new Error("verify: bytes on disk differ from the entry string");
}

const digest = createHash("sha256").update(onDisk, "utf8").digest("hex");
console.log(`ok — ${onDisk.length} chars, ${Buffer.byteLength(onDisk, "utf8")} bytes, sha256 ${digest}: ${onDisk}`);
