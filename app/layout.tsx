import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ISTRIADE GROUP — AI Software, Intelligent Systems & Business Technology",
    template: "%s",
  },
  description:
    "ISTRIADE GROUP LLC develops AI-powered software, intelligent systems and specialized digital services across commerce, search visibility, automation, content and business operations.",
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: { index: true, follow: true },
  icons: {
    icon: "/brand/istriade/07-istriade-favicon.svg",
    shortcut: "/brand/istriade/07-istriade-favicon.svg",
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.displayName,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/brand/istriade/04-istriade-lockup-horizontal-outlined.svg`,
  email: site.email,
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Wyoming",
    addressCountry: "US",
  },
  description: site.organizationDescription,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <StructuredData data={organization} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
