import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { StructuredData } from "@/components/StructuredData";
import { featuredProducts } from "@/data/products";
import { site } from "@/lib/site";

const capabilities = [
  ["01", "Intelligence", "Turning complex information into clearer understanding and better-supported decisions."],
  ["02", "Search & Visibility", "Understanding and improving how businesses are discovered across modern search environments."],
  ["03", "Automation & Execution", "Connecting analysis with controlled workflows and operational action."],
  ["04", "Commerce", "Helping businesses understand commercial performance, scenarios and opportunities."],
  ["05", "Content & Media", "Building structured, AI-assisted systems for modern audiovisual and digital content production."],
  ["06", "Business Systems", "Connecting tools, workflows, information and intelligent capabilities into more coherent operating systems."],
] as const;

const process = [
  ["Understand", "Start with the real problem, available evidence and operating context."],
  ["Define", "Make the intended outcome, constraints and boundaries explicit."],
  ["Design", "Determine the appropriate product, system, workflow or intervention."],
  ["Execute", "Use software, AI, automation and controlled implementation to move from analysis to action."],
  ["Verify", "Check what actually changed and whether the intended result was achieved."],
  ["Improve", "Use evidence from execution to improve the next decision cycle."],
] as const;

const principles = [
  ["Evidence before assumptions", "Decisions should start from observable information."],
  ["Clear scope", "Products and services should be explicit about what they do — and what they do not do."],
  ["Human governance", "AI and automation can increase capacity without removing appropriate oversight."],
  ["Controlled execution", "Execution should remain observable and accountable."],
  ["Transparent status", "A concept, a prototype, a tested system and a production product are not the same thing."],
  ["Verification", "Building something is not the same as proving that it works."],
] as const;

export default function HomePage() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.legalName,
    alternateName: site.displayName,
    url: site.url,
    description: site.organizationDescription,
    inLanguage: "en-US",
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <StructuredData data={websiteData} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">ISTRIADE GROUP LLC · Technology · AI · Digital Systems</p>
            <h1>We build intelligent products for real business operations.</h1>
            <p className="hero-lead">ISTRIADE develops and operates AI-powered software, intelligent systems and specialized digital services designed to improve how businesses understand information, make decisions and execute work.</p>
            <div className="button-row">
              <Link className="button" href="/products/">Explore our products</Link>
              <Link className="text-link" href="/about/">About ISTRIADE →</Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Signal Vector: complexity becoming structured direction">
            <div className="signal-field" aria-hidden="true">
              <span className="signal-dot d1" /><span className="signal-dot d2" /><span className="signal-dot d3" />
              <span className="signal-line l1" /><span className="signal-line l2" /><span className="signal-line l3" />
              <div className="signal-core">
                <Image src="/brand/istriade/01-istriade-symbol-color.svg" alt="" width={210} height={210} priority />
              </div>
              <span className="signal-output" />
            </div>
            <p className="visual-caption">Signal → Structure → Decision → Execution</p>
          </div>
        </div>
      </section>

      <section className="section section-intro">
        <div className="container split-intro">
          <div>
            <p className="eyebrow">What is ISTRIADE?</p>
            <h2>Technology built around real business problems.</h2>
          </div>
          <div>
            <p className="lead-copy">ISTRIADE combines products, reusable systems and specialized execution. We build technology where a repeatable system makes sense, and apply focused professional capabilities where software alone is not enough.</p>
            <div className="triple-columns">
              <div><span>Products</span><p>Focused digital products designed around specific business problems.</p></div>
              <div><span>Systems</span><p>Reusable intelligence, automation and operating capabilities that can support multiple products and workflows.</p></div>
              <div><span>Specialized Services</span><p>Focused professional execution where analysis, technology and implementation need to work together.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Capability territories</p><h2>Where we build.</h2><p>Our work spans a small number of connected capability territories where information, technology and execution increasingly overlap.</p></div>
          <div className="capability-matrix">
            {capabilities.map(([num, title, copy]) => <article key={title}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="section-heading wide"><p className="eyebrow">Products & systems</p><h2>Focused products. Distinct business problems.</h2><p>ISTRIADE develops focused products and systems with their own purpose, operating context and product-specific source of truth.</p></div>
          <div className="product-grid">{featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </div>
      </section>

      <section className="section ecosystem-section">
        <div className="container ecosystem-grid">
          <div><p className="eyebrow">Connected portfolio</p><h2>Different products. One operating philosophy.</h2><p>ISTRIADE develops products independently while reusing proven thinking, technology and operating capabilities across the portfolio. When a capability works in more than one context, we strengthen and reuse it rather than rebuilding it from zero.</p></div>
          <div className="ecosystem-diagram" aria-label="ISTRIADE shared capability ecosystem">
            <div className="ecosystem-center">ISTRIADE</div>
            {['AI','INTELLIGENCE','SEARCH','AUTOMATION','CONTENT','EXECUTION'].map((item, i) => <span key={item} className={`eco-node n${i+1}`}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">How we work</p><h2>From complexity to controlled execution.</h2></div>
          <ol className="process-list">{process.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container principles-grid">
          <div className="principles-statement"><p className="eyebrow">Operating principles</p><h2>Built with control, not hype.</h2><blockquote>AI-operated where useful. Human-governed where it matters.</blockquote><p>We use AI and automation to increase analytical capacity, speed and consistency. Material decisions and execution remain subject to appropriate controls, evidence and verification.</p></div>
          <div className="principles-list">{principles.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-card">
          <Image src="/brand/istriade/02-istriade-symbol-white.svg" alt="" width={72} height={72} />
          <div><p className="eyebrow">Corporate identity</p><h2>ISTRIADE GROUP LLC</h2><p>A Wyoming-based technology company developing and operating digital products, intelligent systems and specialized business services.</p></div>
          <dl><div><dt>Location</dt><dd>{site.location}</dd></div><div><dt>Website</dt><dd>istriadegroup.com</dd></div><div><dt>Contact</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div></dl>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container"><p className="eyebrow">Next</p><h2>Explore what ISTRIADE is building.</h2><div className="button-row"><Link className="button" href="/products/">View products</Link><Link className="text-link" href="/contact/">Contact ISTRIADE →</Link></div></div>
      </section>
    </>
  );
}