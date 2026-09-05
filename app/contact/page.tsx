import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact ISTRIADE GROUP LLC",
  description: "Contact ISTRIADE GROUP LLC for business enquiries, partnerships, product questions and general corporate matters.",
  path: "/contact/",
});

export default function ContactPage() {
  return <>
    <PageHero eyebrow="Contact" title="Contact ISTRIADE" lead="For business enquiries, partnerships, product questions or general company matters, contact ISTRIADE by email." />
    <section className="section"><div className="container contact-grid"><div className="contact-primary"><p className="eyebrow">Primary channel</p><h2>{site.email}</h2><a className="button" href={`mailto:${site.email}`}>Email ISTRIADE</a></div><div className="contact-topics"><article><h3>Business enquiries</h3><p>For general business, corporate and commercial enquiries.</p></article><article><h3>Partnerships</h3><p>For technology, distribution and strategic collaboration discussions.</p></article><article><h3>Product enquiries</h3><p>For detailed questions about a specific ISTRIADE product, use the relevant product website when a dedicated public destination is available.</p></article></div></div></section>
    <section className="section section-tinted"><div className="container identity-panel"><p className="eyebrow">Corporate identity</p><dl><div><dt>Legal name</dt><dd>{site.legalName}</dd></div><div><dt>Location</dt><dd>{site.location}</dd></div><div><dt>Official website</dt><dd>istriadegroup.com</dd></div></dl></div></section>
  </>;
}
