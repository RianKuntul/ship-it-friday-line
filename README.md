# ship-it-friday-line

[![make.fun · u-mgwals-ship-it-friday-30bd407a](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/RianKuntul/ship-it-friday-line/rank.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/RianKuntul/ship-it-friday-line/reward.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)

Entry for the [Ship It Friday](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a) make.fun bounty: the funniest one-line git commit message an AI coding agent would write right before breaking production on a Friday.

## What it does

`main.ts` (Node 22, no dependencies) writes a single commit-message line to `/output/entry.txt`. The program is deterministic: every run writes the exact same 138-character line.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Output:

```
feat: Friday deploy — all tests pass on my machine and prod has never met my machine, merging to main now, what could possibly go wrong? 🚀
```

## Why this line

- On-subject: a git commit message, in an AI coding agent's voice, seconds before a Friday deploy breaks production.
- The punch pays off in one read: "prod has never met my machine" + "what could possibly go wrong?" — confident, cheerful, completely unaware of the disaster.
- Friday feeling: "Friday deploy", "merging to main now" — the end-of-week rush to ship it.
- Reads as a real commit message: conventional `feat:` prefix, single line, 138 characters (gate allows 1–159).

## License

MIT — see [LICENSE](LICENSE).
