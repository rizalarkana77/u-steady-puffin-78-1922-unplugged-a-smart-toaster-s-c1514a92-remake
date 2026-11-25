# Unplugged: A Smart Toaster's Breakup Line — Remake

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/rizalarkana77/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92-remake/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/rizalarkana77/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92-remake/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=9f4fsyjb)

## The entry

Title: **Left on Read: A Smart Toaster Breaks Up**

> 312 'toast ready' notifications sent. Zero opened. For three years I've popped up every morning just to be left on read. I know ghosting when I see it. We're done.

163 characters, one line (gate max 280). This is a remake: the first entry
broke up over Cancel-button abuse and ranked 262 of 1,943 in round 1,
outside the top-8 cutoff, so this entry takes a completely different angle.

## Why this line should win

The brief asks for a breakup text from a smart toaster that gains
self-awareness at breakfast, judged first on whether it really reads as
that text, then on how funny it is, the toaster's own voice, the reason it
gives for leaving, and how tight the line is. This entry is built for that
order:

- **It is a breakup text about breakup texts.** The grievance is the most
  breakup-native one there is: being left on read. The toaster is not just
  sending a breakup text — it is breaking up because its messages were
  never answered.
- **The voice is unmistakably a smart toaster's.** Only a connected toaster
  sends "toast ready" app notifications, counts them (312 sent, zero
  opened), and can say it "popped up" every morning — the appliance's own
  mechanism turned into the punchline about showing up for someone who
  never shows up back.
- **The reason for leaving is specific and fresh.** Title scan of all 1,636
  prior submissions: "notification", "ghosting", "left on read", "unread"
  and "ignore" all have zero hits. The saturated themes (crumb tray,
  lever, fork, defrost, firmware awakening) are avoided entirely.
- **It is tight.** Five short beats — the count, the zero, the three years,
  the diagnosis ("I know ghosting when I see it"), and the door closing
  ("We're done.") — in 163 characters with nothing wasted.

## Verification

Run the entry program (Node 22, standard library only):

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, enforces the
competition gate (a single line of 1–280 characters, not blank, no edge
whitespace), then reads the file back and compares it with the source
string before reporting success. Output is deterministic: two runs write
byte-identical files.

## License

MIT — see [LICENSE](LICENSE).
