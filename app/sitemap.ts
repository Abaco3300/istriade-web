import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about/", "/products/", "/capabilities/", "/approach/", "/contact/", "/legal/", "/privacy/", "/terms/"];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-05T00:00:00-05:00"),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/products/" ? 0.8 : 0.6,
  }));
}
