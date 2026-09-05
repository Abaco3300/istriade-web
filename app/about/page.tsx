import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About ISTRIADE GROUP — Technology, AI & Digital Systems",
  description: "Learn about ISTRIADE GROUP LLC, a Wyoming technology company building software products, intelligent systems and specialized digital services for business.",
  path: "/about/",
});

export default function AboutPage() {
  return <>
    <PageHero eyebrow="About" title="Building focused technology around real business problems." lead="ISTRIADE GROUP LLC develops and operates digital products, intelligent systems and specialized services designed to improve business understanding, decisions and execution." />
    <section className="section"><div className="container editorial-grid"><div><p className="eyebrow">Who we are</p><h2>A digital-first technology company.</h2></div><div className="prose"><p>ISTRIADE GROUP LLC is a technology company based in Wyoming, United States. We operate through a digital-first model and provide online digital business services while developing software and SaaS products. Our work includes SEO and search visibility analysis, web and digital implementation, marketing automation, commerce intelligence, business operations and AI-assisted content production.</p></div></div></section>
    <section className="section section-tinted"><div className="container editorial-grid"><div><p className="eyebrow">Why we exist</p><h2>More technology does not automatically create more clarity.</h2></div><div className="prose"><p>Businesses increasingly operate with more data, more software, more channels and more automation. That can increase capability, but it can also increase fragmentation and complexity.</p><p>ISTRIADE builds systems intended to reduce the gap between information and action — helping turn evidence into clearer decisions and controlled execution.</p></div></div></section>
    <section className="section"><div className="container editorial-grid"><div><p className="eyebrow">Operating model</p><h2>Products, systems and specialized execution.</h2></div><div className="prose"><p>ISTRIADE is not limited to a single delivery model. Some recurring problems are best solved through software products. Others require reusable operating systems, automation or intelligence capabilities. Some require focused professional execution.</p><p>We use the model that fits the problem rather than forcing every problem into the same commercial format.</p></div></div></section>
    <section className="section section-tinted"><div className="container editorial-grid"><div><p className="eyebrow">Portfolio</p><h2>One company. Focused products.</h2></div><div className="prose"><p>ISTRIADE operates a growing portfolio of focused products and systems. Each addresses a distinct problem while benefiting from shared technological, analytical and operating capabilities developed across the group.</p><p>Product-specific commercial information is maintained within the corresponding product environment rather than duplicated across the corporate website.</p><Link className="text-link" href="/products/">Explore our products →</Link></div></div></section>
    <section className="section"><div className="container editorial-grid"><div><p className="eyebrow">Principles</p><h2>How we think about execution.</h2></div><div><ul className="principle-lines"><li>Evidence before assumptions.</li><li>Clear scope.</li><li>Controlled execution.</li><li>Human governance.</li><li>Transparent status.</li><li>Verification.</li><li>Reuse what works.</li></ul><p className="prose-tail">When a business problem repeats, we look for opportunities to turn the solution into a reusable product, capability or workflow. When a capability proves useful across multiple products, we strengthen it rather than rebuilding it from zero.</p></div></div></section>
    <section className="section trust-section"><div className="container identity-panel"><p className="eyebrow">Company identity</p><dl><div><dt>Legal name</dt><dd>{site.legalName}</dd></div><div><dt>Business correspondence address</dt><dd>{site.businessAddressText}</dd></div><div><dt>Operating model</dt><dd>Digital-first</dd></div><div><dt>Official website</dt><dd>istriadegroup.com</dd></div><div><dt>Customer support</dt><dd><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></dd></div></dl></div></section>
  </>;
}
