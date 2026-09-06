import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { publicProducts } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Products & Systems — ISTRIADE GROUP",
  description: "Explore the focused products and systems developed by ISTRIADE GROUP across commerce intelligence, search visibility, AI-assisted content and business operations.",
  path: "/products/",
});

export default function ProductsPage() {
  return <>
    <PageHero eyebrow="Products" title="Focused products for distinct business problems." lead="ISTRIADE develops products and specialized systems around clearly defined operating problems. Each maintains its own focus and product-specific source of truth." />
    <section className="section"><div className="container product-grid">{publicProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
    <section className="section section-tinted"><div className="container editorial-grid"><div><p className="eyebrow">Product independence</p><h2>Corporate discovery. Product-level truth.</h2></div><div className="prose"><p>The ISTRIADE corporate website presents each product at a high level. Detailed capabilities, commercial terms, access conditions and other product-specific information belong to the relevant product environment.</p><p>External product links become active only after the corresponding public destination is verified and authorized.</p></div></div></section>
  </>;
}
