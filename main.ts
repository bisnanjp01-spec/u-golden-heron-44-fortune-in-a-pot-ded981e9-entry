import { mkdirSync, writeFileSync } from "node:fs";

// Fortune in a Pot — one kind, funny fortune for the houseplant on the
// windowsill. The gardener judge weighs, in order: a fortune for a
// houseplant, a small joke a plant lover would laugh at, kindness with no
// doom, the cadence of a prediction, and one clean line of at most
// 120 characters. This line is written for this plant in this window:
// its tallest leaf, the sun it leans toward, and the window it shares.
const fortune =
  "By spring, the tallest leaf on this sill will lean so far toward the sun that the window will ask it to move over.";

// The gate only accepts 1 to 120 characters, so refuse to write a line
// that would fail it instead of silently submitting an invalid entry.
if (fortune.length < 1 || fortune.length > 120) {
  throw new Error(`fortune is ${fortune.length} characters, not 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
