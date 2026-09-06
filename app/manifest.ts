import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.displayName,
    description: site.organizationDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#071015",
    theme_color: "#071015",
    icons: [
      {
        src: "/brand/istriade/07-istriade-favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
