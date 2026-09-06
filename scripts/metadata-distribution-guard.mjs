import fs from "node:fs";

const layout = fs.readFileSync("app/layout.tsx", "utf8");
const manifest = fs.readFileSync("app/manifest.ts", "utf8");

for (const required of [
  'export const viewport: Viewport',
  'themeColor: "#071015"',
  'colorScheme: "dark"',
  'manifest: "/manifest.webmanifest"',
  'openGraph:',
  'type: "website"',
  'locale: "en_US"',
  'url: site.url',
  'siteName: site.legalName',
  'twitter:',
  'card: "summary"',
]) {
  if (!layout.includes(required)) {
    throw new Error(`Global distribution metadata missing required source detail: ${required}`);
  }
}

for (const required of [
  'name: site.legalName',
  'short_name: site.displayName',
  'description: site.organizationDescription',
  'start_url: "/"',
  'display: "standalone"',
  'background_color: "#071015"',
  'theme_color: "#071015"',
  'src: "/brand/istriade/07-istriade-favicon.svg"',
  'type: "image/svg+xml"',
]) {
  if (!manifest.includes(required)) {
    throw new Error(`Corporate manifest missing required source detail: ${required}`);
  }
}

for (const unsupportedProfile of [
  "twitter.com/",
  "x.com/",
  "linkedin.com/company/",
  "facebook.com/",
  "instagram.com/",
]) {
  if (layout.includes(unsupportedProfile) || manifest.includes(unsupportedProfile)) {
    throw new Error(`Unsupported social profile claim added to metadata: ${unsupportedProfile}`);
  }
}

console.log("Distribution metadata guard PASS");
