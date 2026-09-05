import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Legal Information — ISTRIADE GROUP LLC",
  description: "Corporate legal information for the ISTRIADE GROUP LLC website.",
  path: "/legal/",
});

export default function LegalPage() {
  return <>
    <PageHero eyebrow="Legal" title="Legal information" lead="This corporate website is operated by ISTRIADE GROUP LLC. The documents below govern the corporate website and explain how ISTRIADE handles personal information in this context." />
    <section className="section"><div className="container legal-cards"><article><h2>Privacy Policy</h2><p>Explains how ISTRIADE GROUP LLC collects, uses and protects personal information associated with this corporate website and corporate communications.</p><Link className="text-link" href="/privacy/">Privacy Policy →</Link></article><article><h2>Website Terms</h2><p>Sets the rules governing access to and use of the ISTRIADE corporate website.</p><Link className="text-link" href="/terms/">Website Terms →</Link></article></div></section>
    <section className="section section-tinted"><div className="container prose legal-note"><h2>Product-specific terms</h2><p>Individual ISTRIADE products and services may operate under additional or product-specific terms, privacy notices, service terms, refund policies or cancellation policies. Where applicable, those documents are provided through the relevant product website, order process or commercial relationship.</p></div></section>
  </>;
}
