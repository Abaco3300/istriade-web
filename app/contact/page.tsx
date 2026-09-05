import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Customer Support — ISTRIADE GROUP LLC",
  description: "Contact ISTRIADE GROUP LLC for customer support, business enquiries, partnerships and product questions.",
  path: "/contact/",
});

export default function ContactPage() {
  return <>
    <PageHero eyebrow="Contact" title="Contact ISTRIADE" lead="For customer support, business enquiries, partnerships, product questions or general company matters, contact ISTRIADE by email." />
    <section className="section"><div className="container contact-grid"><div className="contact-primary"><p className="eyebrow">Customer support & primary channel</p><h2>{site.supportEmail}</h2><a className="button" href={`mailto:${site.supportEmail}`}>Email ISTRIADE</a><p>For payment, billing, refund, cancellation or service-delivery questions, include the product or service name and the email used for the purchase.</p></div><div className="contact-topics"><article><h3>Customer support</h3><p>For billing, service delivery, access, payment, cancellation, refund or other purchase-related questions.</p></article><article><h3>Business enquiries</h3><p>For general business, corporate and commercial enquiries.</p></article><article><h3>Partnerships</h3><p>For technology, distribution and strategic collaboration discussions.</p></article><article><h3>Product enquiries</h3><p>For detailed questions about a specific ISTRIADE product, use the relevant product website when a dedicated public destination is available.</p></article></div></div></section>
    <section className="section section-tinted"><div className="container identity-panel"><p className="eyebrow">Corporate identity</p><dl><div><dt>Legal name</dt><dd>{site.legalName}</dd></div><div><dt>Business correspondence address</dt><dd>{site.businessAddressText}</dd></div><div><dt>Official website</dt><dd>istriadegroup.com</dd></div><div><dt>Customer support</dt><dd><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></dd></div><div><dt>Commercial policies</dt><dd><Link href="/commercial-policies/">Payment, fulfillment, refunds and cancellations</Link></dd></div></dl></div></section>
  </>;
}
