import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/StructuredData";
import { getInsight, insights } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import styles from "../insights.module.css";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};

  return pageMetadata({
    title: `${insight.title} — ISTRIADE Insights`,
    description: insight.description,
    path: `/insights/${insight.slug}/`,
  });
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const articleUrl = `${site.url}/insights/${insight.slug}/`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: insight.title,
    description: insight.description,
    image: `${site.url}/opengraph-image`,
    datePublished: insight.published,
    dateModified: insight.updated,
    inLanguage: "en-US",
    mainEntityOfPage: articleUrl,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    isPartOf: { "@id": `${site.url}/#website` },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <article>
        <header className="page-hero">
          <div className={`container ${styles.heroShell}`}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href="/insights/">Insights</Link><span>/</span><span>{insight.category}</span>
            </nav>
            <p className="eyebrow">{insight.category}</p>
            <h1>{insight.title}</h1>
            <p className="page-lead">{insight.description}</p>
            <p className={styles.byline}>By ISTRIADE GROUP LLC · Published {insight.published} · {insight.readingTime}</p>
          </div>
        </header>

        <section className="section">
          <div className={`container ${styles.layout}`}>
            <aside className={styles.aside}>
              <p className="eyebrow">Framework</p>
              <p>{insight.summary}</p>
              <Link className="text-link" href="/insights/">All insights →</Link>
            </aside>
            <div className={styles.body}>
              {insight.sections.map((section) => (
                <section key={section.heading} className={styles.section}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? (
                    <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  ) : null}
                </section>
              ))}
              <div className={styles.boundary}>
                <p><strong>About this article.</strong> This is an ISTRIADE corporate perspective intended to explain an operating framework. It is not a product specification, contractual commitment or guarantee of a business outcome.</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
