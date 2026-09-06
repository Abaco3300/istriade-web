import type { ProductRecord } from "@/data/products";

export function ProductCard({ product }: { product: ProductRecord }) {
  return (
    <article className={`product-card accent-${product.accent}`}>
      <div className="product-signal" aria-hidden="true"><span /><span /><span /></div>
      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>
      {product.ownershipLabel ? <p className="product-category">{product.ownershipLabel}</p> : null}
      <p>{product.summary}</p>
      {product.externalLinkEnabled && product.websiteUrl ? (
        <a className="text-link" href={product.websiteUrl} rel="noopener noreferrer">Explore {product.name} ↗</a>
      ) : null}
    </article>
  );
}
