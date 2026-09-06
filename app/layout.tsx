import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./accessibility.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

const defaultTitle = "ISTRIADE GROUP — AI Software, Intelligent Systems & Business Technology";
const defaultDescription =
  "ISTRIADE GROUP LLC develops AI-powered software, intelligent systems and specialized digital services across commerce, search visibility, automation, content and business operations.";

export const viewport: Viewport = {
  themeColor: "#071015",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.legalName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
  },
  icons: {
    icon: "/brand/istriade/07-istriade-favicon.svg",
    shortcut: "/brand/istriade/07-istriade-favicon.svg",
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.displayName,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/brand/istriade/04-istriade-lockup-horizontal-outlined.svg`,
  email: site.supportEmail,
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.businessAddress.line1}, ${site.businessAddress.line2}`,
    addressLocality: site.businessAddress.city,
    addressRegion: site.businessAddress.state,
    postalCode: site.businessAddress.postalCode,
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: site.supportEmail,
    url: `${site.url}/contact/`,
  },
  knowsAbout: [
    "Artificial intelligence",
    "Business intelligence",
    "Search visibility",
    "Search engine optimization",
    "Business automation",
    "Commerce intelligence",
    "AI-assisted content production",
    "Digital business systems",
  ],
  description: site.organizationDescription,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="describedby" href="/llms.txt" type="text/markdown" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <StructuredData data={organization} />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
