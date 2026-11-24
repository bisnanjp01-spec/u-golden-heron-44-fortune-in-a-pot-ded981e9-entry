# Fortune in a Pot

[![Fortune in a Pot — make.fun](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![Rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/bisnanjp01-spec/u-golden-heron-44-fortune-in-a-pot-ded981e9-entry/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![Reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/bisnanjp01-spec/u-golden-heron-44-fortune-in-a-pot-ded981e9-entry/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)

One kind, funny fortune for a houseplant, written for the plant on the
windowsill — a single line of at most 120 characters, judged by a gardener
who reads fortunes in pairs and keeps the one that lands better.

## The fortune

> By spring, the tallest leaf on this sill will lean so far toward the sun that the window will ask it to move over.

## How it works

`main.ts` writes that one line to `/output/entry.txt`. Nothing else is
written, no network is used, and the file holds exactly the line above —
114 characters, no trailing newline. A guard in `main.ts` refuses to write
the line at all if it ever drifts outside the gate's 1–120 characters.

## Run

```sh
node main.ts
```
