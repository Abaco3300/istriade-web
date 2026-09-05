import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "AI, Search, Automation & Digital Capabilities — ISTRIADE",
  description: "Explore ISTRIADE capabilities across artificial intelligence, decision intelligence, search visibility, automation, digital products, commerce and content systems.",
  path: "/capabilities/",
});

const capabilities = [
  ["Artificial Intelligence", "AI-enabled analysis, assistants, agents and structured workflows designed to increase capacity while retaining appropriate controls."],
  ["Decision Intelligence", "Evidence aggregation, comparison, prioritization and decision-support systems designed to turn complex information into clearer next actions."],
  ["Search & Discovery", "Search visibility, SEO, opportunity discovery and emerging AI-search observation designed to improve how businesses understand and strengthen digital discoverability."],
  ["Automation & Execution", "Workflow automation, operational orchestration and controlled implementation designed to reduce repetitive work and connect decisions with action."],
  ["Digital Products", "Focused SaaS products, applications, tools, dashboards and specialized systems built around recurring business problems."],
  ["Commerce Intelligence", "Commercial analysis, scenario modeling and decision support designed to improve understanding of performance, profitability and opportunity."],
  ["Content & Media Systems", "Structured content and audiovisual production workflows combining AI, automation and human creative control."],
] as const;

export default function CapabilitiesPage() {
  return <>
    <PageHero eyebrow="Capabilities" title="Capabilities that connect technology with execution." lead="ISTRIADE develops reusable capabilities across artificial intelligence, decision intelligence, search, automation, digital products, commerce and content systems." />
    <section className="section"><div className="container capability-list">{capabilities.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div></section>
    <section className="section section-tinted"><div className="container editorial-grid"><div><p className="eyebrow">Reuse principle</p><h2>Strengthen what works.</h2></div><div className="prose"><p>When a capability proves useful across multiple products, ISTRIADE can reuse and strengthen it across the portfolio rather than rebuilding the same function repeatedly.</p><Link className="text-link" href="/products/">Explore our products →</Link></div></div></section>
  </>;
}
