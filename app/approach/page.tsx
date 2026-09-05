import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How ISTRIADE Works — Evidence, AI & Controlled Execution",
  description: "ISTRIADE combines evidence, technology, AI, reusable systems and controlled execution to move from business problems toward measurable outcomes.",
  path: "/approach/",
});

const principles = [
  ["Evidence before assumptions", "We begin by understanding the current state, available evidence and real operating constraints."],
  ["Define the outcome", "Technology is useful only when the intended outcome and boundaries are sufficiently clear."],
  ["Productize repeatable problems", "When a problem repeats, we look for ways to convert the solution into a reusable product, capability or workflow."],
  ["Controlled execution", "Recommendations have limited value when they cannot be translated into appropriate action. Where scope permits, we connect analysis with controlled implementation and verification."],
  ["AI-operated, human-governed", "AI can increase analytical and execution capacity. It does not remove accountability. We apply human oversight where the consequence, uncertainty or operating context requires it."],
  ["Reuse what works", "Strong capabilities should become reusable assets rather than being rebuilt independently for every product or project."],
  ["Verify reality", "A completed build is not automatically a validated outcome. We distinguish between implementation, testing and evidence that something works in the real operating environment."],
] as const;

export default function ApproachPage() {
  return <>
    <PageHero eyebrow="Approach" title="Technology should reduce operational complexity, not add to it." lead="We combine evidence, software, AI and controlled execution to move from unclear problems toward more measurable outcomes." />
    <section className="section"><div className="container approach-principles">{principles.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div></section>
    <section className="section section-tinted"><div className="container"><div className="section-heading"><p className="eyebrow">Operating sequence</p><h2>Understand → Define → Design → Execute → Verify → Improve</h2></div><div className="button-row"><Link className="button" href="/products/">Explore our products</Link><Link className="text-link" href="/contact/">Contact ISTRIADE →</Link></div></div></section>
  </>;
}
