import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Legal & Commercial Information — ISTRIADE GROUP LLC",
  description: "Corporate legal, privacy and commercial policy information for ISTRIADE GROUP LLC.",
  path: "/legal/",
});

export default function LegalPage() {
  return <>
    <PageHero eyebrow="Legal" title="Legal & commercial information" lead="This corporate website is operated by ISTRIADE GROUP LLC. The documents below explain website use, privacy practices and the general commercial policies that apply to direct purchases when no more specific product terms control." />
    <section className="section"><div className="container legal-cards"><article><h2>Privacy Policy</h2><p>Explains how ISTRIADE GROUP LLC collects, uses and protects personal information associated with this corporate website and corporate communications.</p><Link className="text-link" href="/privacy/">Privacy Policy →</Link></article><article><h2>Website Terms</h2><p>Sets the rules governing access to and use of the ISTRIADE corporate website.</p><Link className="text-link" href="/terms/">Website Terms →</Link></article><article><h2>Commercial Policies</h2><p>Explains payment, digital fulfillment, refund, cancellation, subscription, promotion and customer-support policies for direct purchases from ISTRIADE when no more specific product terms apply.</p><Link className="text-link" href="/commercial-policies/">Commercial Policies →</Link></article></div></section>
    <section className="section section-tinted"><div className="container prose legal-note"><h2>Product-specific terms</h2><p>Individual ISTRIADE products and services may operate under additional or product-specific terms, privacy notices, service terms, refund policies or cancellation policies. Where applicable, those documents are provided through the relevant product website, checkout, order process or commercial relationship and take precedence over general policies to the extent expressly stated.</p></div></section>
  </>;
}
