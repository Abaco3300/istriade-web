import fs from "node:fs";

const workflowPath = ".github/workflows/deploy-cloudflare.yml";
const readmePath = "README.md";

const workflow = fs.readFileSync(workflowPath, "utf8");
const readme = fs.readFileSync(readmePath, "utf8");

if (!workflow.includes("on:\n  workflow_dispatch:")) {
  throw new Error("Production deployment workflow must remain manual-only via workflow_dispatch");
}
for (const forbiddenTrigger of ["\n  push:", "\n  pull_request:", "\n  schedule:"]) {
  if (workflow.includes(forbiddenTrigger)) {
    throw new Error(`Production deployment workflow contains forbidden automatic trigger: ${forbiddenTrigger.trim()}`);
  }
}

for (const requiredRoute of [
  "/insights/",
  "/insights/ai-search-visibility-business-framework/",
  "/insights/human-governed-ai-operations/",
  "/insights/from-signal-to-execution/",
  "/trust/",
  "/llms.txt",
  "/manifest.webmanifest",
  "/opengraph-image",
]) {
  if (!workflow.includes(requiredRoute)) {
    throw new Error(`Production smoke contract missing required route: ${requiredRoute}`);
  }
}

for (const requiredSignal of [
  "OAI-SearchBot",
  "property=\"og:site_name\"",
  "name=\"twitter:card\"",
  "summary_large_image",
  "rel=\"manifest\"",
  "rel=\"describedby\"",
  "DoesAISeeMe",
  "Trust &amp; Transparency",
  "# ISTRIADE GROUP LLC",
  "Automatic rollback if live verification fails",
  "wrangler@${WRANGLER_VERSION} rollback",
]) {
  if (!workflow.includes(requiredSignal)) {
    throw new Error(`Production smoke contract missing required verification signal: ${requiredSignal}`);
  }
}

for (const requiredReadmeTruth of [
  "Production website: **live**",
  "34008750674",
  "511de7bd1174a3d3494ba46f22951d06eaf08b7b",
  "workflow remains **manual-only**",
  "tiny-pond-1463",
]) {
  if (!readme.includes(requiredReadmeTruth)) {
    throw new Error(`README production-state reconciliation missing: ${requiredReadmeTruth}`);
  }
}

console.log("Production deployment contract guard PASS");
