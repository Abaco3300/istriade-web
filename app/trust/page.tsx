import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Trust & Transparency — ISTRIADE GROUP LLC",
  description:
    "Verify ISTRIADE GROUP LLC corporate identity, official channels, governance principles and published legal and commercial policies.",
  path: "/trust/",
});

export default function TrustPage() {
  const trustUrl = `${site.url}/trust/`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${trustUrl}#webpage`,
    url: trustUrl,
    name: "Trust & Transparency — ISTRIADE GROUP LLC",
    description:
      "Corporate identity, official channels, governance principles and policy references for ISTRIADE GROUP LLC.",
    inLanguage: "en-US",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <PageHero
        eyebrow="Trust & Transparency"
        title="Clear identity. Clear boundaries. Published policies."
        lead="This page brings together the corporate facts, official channels and governance principles that help customers, partners and automated systems verify ISTRIADE GROUP LLC."
      />

      <section className="section trust-section">
        <div className="container identity-panel">
          <p className="eyebrow">Corporate identity</p>
          <dl>
            <div><dt>Legal name</dt><dd>{site.legalName}</dd></div>
            <div><dt>Business correspondence address</dt><dd>{site.businessAddressText}</dd></div>
            <div><dt>Official website</dt><dd><a href={site.url}>{site.url.replace("https://", "")}</a></dd></div>
            <div><dt>Customer support</dt><dd><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></dd></div>
            <div><dt>Operating model</dt><dd>Digital-first</dd></div>
            <div><dt>Corporate location</dt><dd>{site.location}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Official sources</p>
            <h2>Corporate truth and product-level truth are kept separate.</h2>
          </div>
          <div className="prose">
            <p><strong>istriadegroup.com</strong> is the corporate source for ISTRIADE GROUP LLC identity, company information, public portfolio discovery, general policies and corporate perspectives.</p>
            <p>Where an ISTRIADE product has its own verified public environment, detailed capabilities, access conditions, pricing, checkout, product-specific terms and operational information belong there.</p>
            <p>The corporate website does not treat an internal concept, prototype, intended domain or development status as public availability.</p>
            <Link className="text-link" href="/products/">View the public product registry →</Link>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Governance</p>
            <h2>AI-operated where useful. Human-governed where it matters.</h2>
          </div>
          <div>
            <ul className="principle-lines">
              <li>Evidence before assumptions.</li>
              <li>Scope before execution.</li>
              <li>Human oversight where consequence or uncertainty requires it.</li>
              <li>Implementation, testing and real-world validation are different states.</li>
              <li>Published claims should reflect current public reality.</li>
            </ul>
            <p className="prose-tail">These principles describe the corporate operating approach. They do not replace product-specific terms, service scopes or contractual commitments.</p>
            <Link className="text-link" href="/approach/">Read our operating approach →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Published policies</p>
            <h2>Policy documents are published and linked from the corporate site.</h2>
            <p>These documents govern the corporate website and, where applicable, direct purchases when no more specific product terms control.</p>
          </div>
          <div className="legal-cards">
            <article><h2>Privacy Policy</h2><p>How ISTRIADE handles personal information associated with the corporate website and corporate communications.</p><Link className="text-link" href="/privacy/">Privacy Policy →</Link></article>
            <article><h2>Website Terms</h2><p>The rules governing access to and use of the ISTRIADE corporate website.</p><Link className="text-link" href="/terms/">Website Terms →</Link></article>
            <article><h2>Commercial Policies</h2><p>General payment, digital fulfillment, refund, cancellation and customer-support policies for direct purchases where applicable.</p><Link className="text-link" href="/commercial-policies/">Commercial Policies →</Link></article>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Verification & contact</p>
            <h2>Use the official corporate channel when something needs verification.</h2>
          </div>
          <div className="prose">
            <p>For customer support, company verification, business enquiries, partnerships or questions about information published on this website, contact ISTRIADE through the corporate email address below.</p>
            <p><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></p>
            <Link className="text-link" href="/contact/">Contact ISTRIADE →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
