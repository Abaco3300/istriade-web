import fs from "node:fs";
import path from "node:path";

const out = path.join(process.cwd(), "out");
const productVisuals = [
  "sygvana.webp",
  "seo-agent.webp",
  "doesaiseeme.webp",
  "ai-video-studio.webp",
  "irmya.webp",
];

for (const filename of productVisuals) {
  const assetPath = path.join(out, "product-visuals", filename);
  if (!fs.existsSync(assetPath)) {
    throw new Error(`Static export missing product visual asset: ${filename}`);
  }
}

for (const relativePage of ["index.html", "products/index.html"]) {
  const html = fs.readFileSync(path.join(out, relativePage), "utf8");

  if (html.includes("/_next/image/?url=%2Fproduct-visuals") || html.includes("/_next/image?url=%2Fproduct-visuals")) {
    throw new Error(`Product visuals on ${relativePage} depend on the Next.js image optimizer, which is unavailable in the static Cloudflare Worker deployment`);
  }

  for (const filename of productVisuals) {
    const publicPath = `/product-visuals/${filename}`;
    if (!html.includes(publicPath)) {
      throw new Error(`Product visual ${publicPath} is not referenced by ${relativePage}`);
    }
  }
}

console.log("Product visual static-export verification PASS");
