import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { insights } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import styles from "./insights.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Insights — ISTRIADE GROUP",
  description:
    "ISTRIADE perspectives on AI search visibility, human-governed automation, intelligent business systems and controlled execution.",
  path: "/insights/",
});

export default function InsightsPage() {
  const insightsUrl = `${site.url}/insights/`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${insightsUrl}#webpage`,
      url: insightsUrl,
      name: "Insights — ISTRIADE GROUP",
      description:
        "Corporate perspectives from ISTRIADE GROUP LLC on AI, search visibility, automation, business systems and controlled execution.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "ISTRIADE Insights",
      numberOfItems: insights.length,
      itemListElement: insights.map((insight, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${insightsUrl}${insight.slug}/`,
        name: insight.title,
      })),
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <PageHero
        eyebrow="Insights"
        title="Clear frameworks for intelligent business systems."
        lead="Practical perspectives from ISTRIADE on search visibility, AI-operated workflows, decision systems and controlled execution."
      />
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {insights.map((insight) => (
              <article className={styles.card} key={insight.slug}>
                <p className={styles.meta}>{insight.category} · {insight.readingTime}</p>
                <h2>{insight.title}</h2>
                <p>{insight.summary}</p>
                <Link className="text-link" href={`/insights/${insight.slug}/`}>Read insight →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Editorial scope</p>
            <h2>Operating ideas, not promotional noise.</h2>
          </div>
          <div className="prose">
            <p>ISTRIADE Insights explains the frameworks behind how we think about intelligent products, evidence, automation, search visibility and business execution.</p>
            <p>Articles are intended to clarify concepts and operating principles. Product-specific capabilities, availability, pricing and commercial terms remain in the relevant product environment.</p>
          </div>
        </div>
      </section>
    </>
  );
}
