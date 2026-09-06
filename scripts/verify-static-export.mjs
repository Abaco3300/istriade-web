import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");

const visibleHtml = (html) => html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<!--[\s\S]*?-->/g, "");

const insightSlugs = [
  "ai-search-visibility-business-framework",
  "human-governed-ai-operations",
  "from-signal-to-execution",
];

const requiredFiles = [
  "index.html",
  "about/index.html",
  "products/index.html",
  "capabilities/index.html",
  "approach/index.html",
  "insights/index.html",
  ...insightSlugs.map((slug) => `insights/${slug}/index.html`),
  "trust/index.html",
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
if (!home.includes('href="/insights/"')) {
  throw new Error("Corporate navigation does not expose the Insights hub");
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

const rawInsights = fs.readFileSync(path.join(out, "insights/index.html"), "utf8");
const visibleInsights = visibleHtml(rawInsights);
for (const title of [
  "AI Search Visibility: A Practical Framework for Businesses",
  "Human-Governed AI Operations: Where Automation Needs Control",
  "From Signal to Execution: Designing AI Systems Around Business Decisions",
]) {
  if (!visibleInsights.includes(title)) {
    throw new Error(`Insights hub missing published article: ${title}`);
  }
}
for (const schemaType of ['"@type":"CollectionPage"', '"@type":"ItemList"']) {
  if (!rawInsights.includes(schemaType)) {
    throw new Error(`Insights hub structured data missing ${schemaType}`);
  }
}
for (const forbidden of ["$19", "USD 19", "checkoutActive", "Payment Link", "First Revenue Candidate"]) {
  if (visibleInsights.includes(forbidden)) {
    throw new Error(`Internal or transactional detail leaked into Insights hub: ${forbidden}`);
  }
}

for (const slug of insightSlugs) {
  const rawArticle = fs.readFileSync(path.join(out, `insights/${slug}/index.html`), "utf8");
  const article = visibleHtml(rawArticle);
  if (!rawArticle.includes('"@type":"Article"')) {
    throw new Error(`Insight article missing Article structured data: ${slug}`);
  }
  if (!rawArticle.includes(`https://istriadegroup.com/insights/${slug}/`)) {
    throw new Error(`Insight article missing canonical URL: ${slug}`);
  }
  if (!article.includes("About this article.")) {
    throw new Error(`Insight article missing editorial boundary statement: ${slug}`);
  }
  for (const forbidden of ["$19", "USD 19", "checkoutActive", "Payment Link", "First Revenue Candidate"]) {
    if (article.includes(forbidden)) {
      throw new Error(`Internal or transactional detail leaked into Insight article ${slug}: ${forbidden}`);
    }
  }
}

const rawTrust = fs.readFileSync(path.join(out, "trust/index.html"), "utf8");
const trust = visibleHtml(rawTrust);
for (const requiredText of [
  "Trust &amp; Transparency",
  "ISTRIADE GROUP LLC",
  "75 E 3rd St",
  "Sheridan",
  "WY 82801",
  "contact@istriadegroup.com",
  "Official sources",
  "Published policies",
  "Privacy Policy",
  "Website Terms",
  "Commercial Policies",
  "AI-operated where useful. Human-governed where it matters.",
]) {
  if (!trust.includes(requiredText)) {
    throw new Error(`Trust page missing required corporate truth: ${requiredText}`);
  }
}
if (!rawTrust.includes('"@type":"WebPage"') || !rawTrust.includes("https://istriadegroup.com/trust/#webpage")) {
  throw new Error("Trust page structured data or stable WebPage ID is missing");
}
for (const unearnedClaim of ["SOC 2", "ISO 27001", "HIPAA compliant", "GDPR certified"]) {
  if (trust.includes(unearnedClaim)) {
    throw new Error(`Trust page contains an unsupported certification/compliance claim: ${unearnedClaim}`);
  }
}
for (const forbidden of ["$19", "USD 19", "checkoutActive", "Payment Link", "First Revenue Candidate"]) {
  if (trust.includes(forbidden)) {
    throw new Error(`Internal or transactional detail leaked into Trust page: ${forbidden}`);
  }
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
  "https://istriadegroup.com/insights/",
  ...insightSlugs.map((slug) => `https://istriadegroup.com/insights/${slug}/`),
  "https://istriadegroup.com/trust/",
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
  "https://istriadegroup.com/insights/",
  ...insightSlugs.map((slug) => `https://istriadegroup.com/insights/${slug}/`),
  "https://istriadegroup.com/trust/",
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

const footerPages = ["index.html", "about/index.html", "products/index.html", "trust/index.html"];
for (const relative of footerPages) {
  const visible = visibleHtml(fs.readFileSync(path.join(out, relative), "utf8"));
  if (!visible.includes('href="/trust/"') || !visible.includes("Trust &amp; Transparency")) {
    throw new Error(`Footer does not expose Trust & Transparency on ${relative}`);
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
