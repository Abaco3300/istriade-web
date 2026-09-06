import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");

const requiredFiles = [
  "index.html",
  "about/index.html",
  "products/index.html",
  "capabilities/index.html",
  "approach/index.html",
  "contact/index.html",
  "legal/index.html",
  "privacy/index.html",
  "terms/index.html",
  "commercial-policies/index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "_headers",
  "_redirects",
  "brand/istriade/01-istriade-symbol-color.svg",
  "brand/istriade/04-istriade-lockup-horizontal-outlined.svg",
  "brand/istriade/07-istriade-favicon.svg",
];

for (const relative of requiredFiles) {
  const file = path.join(out, relative);
  if (!fs.existsSync(file)) {
    throw new Error(`Static export missing required file: ${relative}`);
  }
}

const home = fs.readFileSync(path.join(out, "index.html"), "utf8");
for (const heldDomain of ["https://sygvana.com", "https://irmya.com", "https://doesaiseeme.istriadegroup.com"]) {
  if (home.includes(`href=\"${heldDomain}`) || home.includes(`href='${heldDomain}`)) {
    throw new Error(`Held product domain rendered as active link: ${heldDomain}`);
  }
}

const productsPage = fs.readFileSync(path.join(out, "products/index.html"), "utf8");
if (productsPage.includes("DoesAISeeMe")) {
  throw new Error("Disabled DoesAISeeMe Product Registry entry rendered publicly");
}
if (productsPage.includes("First Revenue Candidate")) {
  throw new Error("Internal portfolio role leaked into public Products page");
}
if (productsPage.includes("href=\"https://doesaiseeme.istriadegroup.com") || productsPage.includes("href='https://doesaiseeme.istriadegroup.com")) {
  throw new Error("Held DoesAISeeMe destination rendered as active public link");
}

const notFound = fs.readFileSync(path.join(out, "404.html"), "utf8");
if (!notFound.includes("Page not found")) {
  throw new Error("Custom 404 content missing from static export");
}

const robots = fs.readFileSync(path.join(out, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://istriadegroup.com/sitemap.xml")) {
  throw new Error("robots.txt does not reference the canonical sitemap");
}

const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
for (const canonical of [
  "https://istriadegroup.com/",
  "https://istriadegroup.com/about/",
  "https://istriadegroup.com/products/",
  "https://istriadegroup.com/privacy/",
  "https://istriadegroup.com/terms/",
  "https://istriadegroup.com/commercial-policies/",
]) {
  if (!sitemap.includes(canonical)) {
    throw new Error(`sitemap.xml missing canonical URL: ${canonical}`);
  }
}

const commercialPolicies = fs.readFileSync(path.join(out, "commercial-policies/index.html"), "utf8");
for (const requiredText of [
  "Refunds",
  "Subscription and Recurring-Service Cancellations",
  "Pricing, Currency and Taxes",
  "Customer Support and Billing Questions",
  "Products, Services and Delivery",
]) {
  if (!commercialPolicies.includes(requiredText)) {
    throw new Error(`Commercial Policies missing Stripe-readiness section: ${requiredText}`);
  }
}

const contact = fs.readFileSync(path.join(out, "contact/index.html"), "utf8");
for (const requiredText of ["Customer support", "contact@istriadegroup.com", "Sheridan", "WY 82801"]) {
  if (!contact.includes(requiredText)) {
    throw new Error(`Contact page missing Stripe-readiness detail: ${requiredText}`);
  }
}

const headers = fs.readFileSync(path.join(out, "_headers"), "utf8");
for (const expected of [
  "X-Content-Type-Options: nosniff",
  "Referrer-Policy: strict-origin-when-cross-origin",
  "X-Frame-Options: SAMEORIGIN",
]) {
  if (!headers.includes(expected)) {
    throw new Error(`_headers missing rule: ${expected}`);
  }
}

const redirects = fs.readFileSync(path.join(out, "_redirects"), "utf8");
for (const expected of [
  "/company /about/ 301",
  "/privacy-policy /privacy/ 301",
  "/terms-of-service /terms/ 301",
  "/refund-policy /commercial-policies/ 301",
]) {
  if (!redirects.includes(expected)) {
    throw new Error(`_redirects missing rule: ${expected}`);
  }
}

console.log("Static export verification PASS");
