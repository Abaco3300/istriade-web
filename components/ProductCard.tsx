import Image from "next/image";
import type { ProductRecord } from "@/data/products";

export function ProductCard({ product }: { product: ProductRecord }) {
  return (
    <article className={`product-card accent-${product.accent}`}>
      <div
        aria-hidden="true"
        style={{
          height: 80,
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src={product.imageSrc}
          alt=""
          width={150}
          height={80}
          style={{
            width: 150,
            height: 80,
            objectFit: "contain",
            objectPosition: "left center",
            opacity: 0.68,
            filter: "saturate(0.82) brightness(0.88)",
          }}
        />
      </div>
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
