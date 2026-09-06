import fs from "node:fs";
import path from "node:path";

const out = path.join(process.cwd(), "out");
const homePath = path.join(out, "index.html");
const manifestPath = path.join(out, "manifest.webmanifest");

if (!fs.existsSync(homePath)) {
  throw new Error("Static export missing index.html for metadata verification");
}
if (!fs.existsSync(manifestPath)) {
  throw new Error("Static export missing manifest.webmanifest");
}

const home = fs.readFileSync(homePath, "utf8");
for (const required of [
  'rel="manifest"',
  'href="/manifest.webmanifest"',
  'property="og:type"',
  'content="website"',
  'property="og:site_name"',
  'content="ISTRIADE GROUP LLC"',
  'property="og:url"',
  'content="https://istriadegroup.com"',
  'property="og:title"',
  'name="twitter:card"',
  'content="summary"',
  'name="twitter:title"',
  'name="theme-color"',
  'content="#071015"',
]) {
  if (!home.includes(required)) {
    throw new Error(`Exported home metadata missing required detail: ${required}`);
  }
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const expected = {
  name: "ISTRIADE GROUP LLC",
  short_name: "ISTRIADE",
  start_url: "/",
  display: "standalone",
  background_color: "#071015",
  theme_color: "#071015",
};
for (const [key, value] of Object.entries(expected)) {
  if (manifest[key] !== value) {
    throw new Error(`Exported manifest has unexpected ${key}: ${manifest[key]}`);
  }
}
if (!Array.isArray(manifest.icons) || !manifest.icons.some((icon) => icon.src === "/brand/istriade/07-istriade-favicon.svg")) {
  throw new Error("Exported manifest missing canonical ISTRIADE icon");
}

console.log("Exported distribution metadata PASS");
