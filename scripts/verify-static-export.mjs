import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");

const visibleHtml = (html) => html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<!--[\s\S]*?-->/g, "");

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
  "llms.txt",
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

const rawHome = fs.readFileSync(path.join(out, "index.html"), "utf8");
const home = visibleHtml(rawHome);
for (const heldDomain of ["https://sygvana.com", "https://irmya.com"]) {
  if (home.includes(`href=\"${heldDomain}`) || home.includes(`href='${heldDomain}`)) {
    throw new Error(`Held homepage product domain rendered as active link: ${heldDomain}`);
  }
}
if (home.includes(">DoesAISeeMe</h3>")) {
  throw new Error("DoesAISeeMe must remain absent from the corporate homepage while featured=false");
}
if (!rawHome.includes('rel="describedby"') || !rawHome.includes('href="/llms.txt"')) {
  throw new Error("Home document does not expose llms.txt through rel=describedby");
}
for (const entityId of ["https://istriadegroup.com/#organization", "https://istriadegroup.com/#website"]) {
  if (!rawHome.includes(entityId)) {
    throw new Error(`Corporate structured data missing stable entity ID: ${entityId}`);
  }
}

const rawProductsPage = fs.readFileSync(path.join(out, "products/index.html"), "utf8");
const productsPage = visibleHtml(rawProductsPage);
if (!productsPage.includes(">DoesAISeeMe</h3>")) {
  throw new Error("Prepared DoesAISeeMe Product Registry card is missing from Products page");
}
if (!productsPage.includes("An ISTRIADE product")) {
  throw new Error("DoesAISeeMe ownership label is missing from Products page");
}
if (!productsPage.includes('href="https://doesaiseeme.istriadegroup.com')) {
  throw new Error("DoesAISeeMe canonical discovery link is missing from Products page");
}
if (!productsPage.includes("Explore DoesAISeeMe")) {
  throw new Error("DoesAISeeMe discovery CTA is missing from visible Products markup");
}
if (productsPage.includes(">First Revenue Candidate<")) {
  throw new Error("Internal portfolio role leaked into visible Products page copy");
}
for (const forbiddenTransactionalCopy of ["Buy DoesAISeeMe", "Purchase DoesAISeeMe", "Get your report", "Start report", "Checkout"]) {
  if (productsPage.includes(forbiddenTransactionalCopy)) {
    throw new Error(`Transactional DoesAISeeMe copy leaked into corporate discovery page: ${forbiddenTransactionalCopy}`);
  }
}
if (productsPage.includes("$19") || productsPage.includes("USD 19")) {
  throw new Error("Product-level DoesAISeeMe pricing leaked into visible corporate Products page");
}
for (const schemaType of ['"@type":"CollectionPage"', '"@type":"ItemList"']) {
  if (!rawProductsPage.includes(schemaType)) {
    throw new Error(`Products page structured data missing ${schemaType}`);
  }
}
if (!rawProductsPage.includes("https://istriadegroup.com/products/#itemlist")) {
  throw new Error("Products page structured data missing stable ItemList ID");
}

const notFound = fs.readFileSync(path.join(out, "404.html"), "utf8");
if (!notFound.includes("Page not found")) {
  throw new Error("Custom 404 content missing from static export");
}

const robots = fs.readFileSync(path.join(out, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://istriadegroup.com/sitemap.xml")) {
  throw new Error("robots.txt does not reference the canonical sitemap");
}
if (!robots.includes("OAI-SearchBot")) {
  throw new Error("robots.txt does not explicitly identify OAI-SearchBot");
}

const llms = fs.readFileSync(path.join(out, "llms.txt"), "utf8");
for (const requiredText of [
  "# ISTRIADE GROUP LLC",
  "https://istriadegroup.com/about/",
  "https://istriadegroup.com/products/",
  "https://doesaiseeme.istriadegroup.com/",
  "contact@istriadegroup.com",
]) {
  if (!llms.includes(requiredText)) {
    throw new Error(`llms.txt missing canonical corporate discovery detail: ${requiredText}`);
  }
}
for (const heldDomain of ["https://sygvana.com", "https://irmya.com"]) {
  if (llms.includes(heldDomain)) {
    throw new Error(`llms.txt leaked an unreleased product destination: ${heldDomain}`);
  }
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
