import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Rename the Planet — one line, under 200 characters.
// Jupiter's Great Red Spot: a storm wider than Earth, raging ~300 years.
// Joke shape (winner template): rule -> literal violation -> flat consequence.
// The storm is the group chat that never stops arguing.
const ENTRY =
  "Rename Jupiter 'The Group Chat' \u2014 its Great Red Spot, a storm wider than Earth, has been arguing nonstop for 300 years and nobody remembers what started it, but everyone keeps replying.";

const MAX_CHARS = 200;
if (ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
