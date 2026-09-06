import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");

const layout = read("app/layout.tsx");
const accessibilityCss = read("app/accessibility.css");
const header = read("components/SiteHeader.tsx");

for (const required of [
  'className="skip-link"',
  'href="#main-content"',
  'id="main-content"',
  'tabIndex={-1}',
  'lang="en"',
]) {
  if (!layout.includes(required)) {
    throw new Error(`Accessibility layout invariant missing: ${required}`);
  }
}

for (const required of [
  ':focus-visible',
  'prefers-reduced-motion: reduce',
  'forced-colors: active',
  'min-height: 44px',
]) {
  if (!accessibilityCss.includes(required)) {
    throw new Error(`Accessibility CSS invariant missing: ${required}`);
  }
}

for (const required of [
  'aria-label="Primary navigation"',
  'aria-label="Mobile navigation"',
  'aria-label="Open navigation"',
  'aria-label="ISTRIADE home"',
]) {
  if (!header.includes(required)) {
    throw new Error(`Navigation accessibility invariant missing: ${required}`);
  }
}

console.log("Accessibility guard PASS");
