import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about/",
    "/products/",
    "/capabilities/",
    "/approach/",
    "/insights/",
    "/contact/",
    "/legal/",
    "/privacy/",
    "/terms/",
    "/commercial-policies/",
  ];

  const articleRoutes = insights.map((insight) => `/insights/${insight.slug}/`);
  const routes = [...staticRoutes, ...articleRoutes];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-05T00:00:00-05:00"),
    changeFrequency: path === "/" ? "monthly" : path.startsWith("/insights/") ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/products/" || path === "/insights/" ? 0.8 : path.startsWith("/insights/") ? 0.7 : 0.6,
  }));
}
