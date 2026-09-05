import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: site.legalName,
      title,
      description,
      url: canonical,
      images: [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: site.legalName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}/opengraph-image`],
    },
  };
}
