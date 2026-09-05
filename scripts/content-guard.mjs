import fs from "node:fs";
import path from "node:path";

const projectRoot = new URL("../", import.meta.url);
const roots = ["app", "components", "data", "lib"].map((item) => new URL(item + "/", projectRoot));
const banned = [
  /Amazon\s+FBA/i,
  /Amazon\s+Seller/i,
  /\bNSF\b/,
  /\bSGS\b/,
  /Shopify\s+Growth\s+Signals/i,
  /\bPanelize\b/i,
  /HEY-Commerce/i,
  /\bdropshipping\b/i,
];

function walk(dirUrl) {
  const dir = dirUrl.pathname;
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(new URL(`file://${full}/`)) : [full];
  });
}

const files = roots.flatMap((root) => walk(root)).filter((file) => /\.(ts|tsx|css)$/.test(file));
const hits = [];
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of banned) {
    if (pattern.test(text)) hits.push(`${file}: ${pattern}`);
  }
}

if (hits.length) {
  console.error("Historical-content guard failed:\n" + hits.join("\n"));
  process.exit(1);
}
console.log(`Historical-content guard passed across ${files.length} source files.`);
