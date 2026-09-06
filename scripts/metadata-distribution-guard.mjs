import fs from "node:fs";

const layout = fs.readFileSync("app/layout.tsx", "utf8");
const manifest = fs.readFileSync("app/manifest.ts", "utf8");
const pageMetadata = fs.readFileSync("lib/metadata.ts", "utf8");
const openGraphImage = fs.readFileSync("app/opengraph-image.tsx", "utf8");

for (const required of [
  'export const viewport: Viewport',
  'themeColor: "#071015"',
  'colorScheme: "dark"',
  'manifest: "/manifest.webmanifest"',
  'const socialImage = `${site.url}/opengraph-image`',
  'openGraph:',
  'type: "website"',
  'locale: "en_US"',
  'url: site.url',
  'siteName: site.legalName',
  'images: [{ url: socialImage, width: 1200, height: 630, alt: site.legalName }]',
  'twitter:',
  'card: "summary_large_image"',
  'images: [socialImage]',
]) {
  if (!layout.includes(required)) {
    throw new Error(`Global distribution metadata missing required source detail: ${required}`);
  }
}

for (const required of [
  'export const dynamic = "force-static"',
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

for (const required of [
  'images: [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: site.legalName }]',
  'card: "summary_large_image"',
  'images: [`${site.url}/opengraph-image`]',
]) {
  if (!pageMetadata.includes(required)) {
    throw new Error(`Existing page-level social metadata contract changed unexpectedly: ${required}`);
  }
}

for (const required of [
  'export const dynamic = "force-static"',
  'export const size = { width: 1200, height: 630 }',
  'export const contentType = "image/png"',
]) {
  if (!openGraphImage.includes(required)) {
    throw new Error(`Existing Open Graph image contract changed unexpectedly: ${required}`);
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
