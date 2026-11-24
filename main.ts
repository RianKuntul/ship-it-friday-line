// Ship It Friday — make.fun entry (v2)
// Writes one line: the funniest git commit message an AI coding agent
// would write right before breaking production on a Friday.
// The grader runs this in a sandbox and reads /output/entry.txt.
// Gate: UTF-8 text, 1-159 characters, not only whitespace.
//
// v2 revision: reworked the joke for a harder punch. v1 ended on a soft
// "see you Monday" sign-off; v2 swaps in the agent's signature oblivious
// line "what could possibly go wrong?" and "merging to main now" for the
// Friday rush, and uses a conventional "feat:" prefix so it reads as a
// real commit message at a glance. Kept the "prod has never met my
// machine" core — it is the line that lands the agent-voice criterion.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "feat: Friday deploy — all tests pass on my machine and prod has never met my machine, merging to main now, what could possibly go wrong? 🚀";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars to /output/entry.txt`);
