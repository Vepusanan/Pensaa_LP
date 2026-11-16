// Verifies every line of content/landing-copy.txt appears verbatim in the built page,
// and that no ⟦COPY: …⟧ slots remain. Run after `npm run build`.
import { existsSync, readFileSync } from "node:fs";

const copyPath = new URL("../content/landing-copy.txt", import.meta.url);
const pagePath = new URL("../dist/index.html", import.meta.url);

if (!existsSync(pagePath)) {
  console.error("dist/index.html not found. Run `npm run build` first.");
  process.exit(1);
}

const html = readFileSync(pagePath, "utf8");
const entities = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const placeholders = [...html.matchAll(/placeholder="([^"]*)"/g)].map((m) => m[1]);
const text = [html, ...placeholders]
  .join(" ")
  .replace(/<(script|style)[\s\S]*?<\/\1>/g, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) =>
    e[0] === "#" ? String.fromCodePoint(Number(e[1] === "x" ? `0${e.slice(1)}` : e.slice(1))) : (entities[e] ?? m),
  )
  .replace(/\s+/g, " ");

const slots = [...text.matchAll(/⟦COPY:[^⟧]*⟧/g)].map((m) => m[0]);
if (slots.length) console.error(`${slots.length} unfilled copy slot(s) in src/data/content.ts`);

if (!existsSync(copyPath)) {
  console.error("content/landing-copy.txt not found: cannot verify copy.");
  process.exit(1);
}

// Turn the annotated copy doc into the exact strings that must render on the page.
const STRIP_LABELS = /^(Logo|Tabs|Header actions|Eyebrow|Headline|Subheadline|Buttons|Body|Button|Caption|Heading|Contact|Email box heading|Email box body|Input \/ button|Legal row): /;
const KEEP_LABELS = /^(Teachers|Students): /;
const SKIP = [
  /^Pensaa Landing Page Copy$/,
  /^Current version/,
  /^Navigation$/,
  /^\d+\. /, // section headers
  /:$/, // annotations such as "Four pain points (colored cards):"
  /^(Right side|Visual): /, // layout notes
];

const lines = readFileSync(copyPath, "utf8").split(/\r?\n/).map((l) => l.trim().replace(/\s+/g, " "));
const end = lines.indexOf("Open decisions");
const expected = [];
for (let line of lines.slice(0, end === -1 ? undefined : end)) {
  if (!line || SKIP.some((re) => re.test(line))) continue;
  const kept = line.match(KEEP_LABELS);
  if (kept) {
    expected.push(kept[1]);
    line = line.slice(kept[0].length);
  }
  line = line.replace(STRIP_LABELS, "").replace(/^\d{2} — /, "");
  const badge = line.match(/^(.*?) \[(.+)\]$/);
  if (badge) {
    expected.push(badge[1], badge[2]);
    continue;
  }
  for (const part of line.replace(/(All rights reserved\.) /, "$1 · ").split(" · ")) {
    expected.push(part.replace(/ \((link|button|primary|secondary)\)$/, ""));
  }
}

const missing = expected.filter((l) => l && !text.includes(l));

for (const line of missing) console.error(`MISSING: ${line}`);
if (missing.length || slots.length) process.exit(1);
console.log(`All ${expected.length} copy strings present verbatim.`);
