import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-mark" aria-hidden="true">
            <Image src="/brand/istriade/02-istriade-symbol-white.svg" alt="" width={52} height={52} />
          </div>
          <strong>{site.legalName}</strong>
          <p>{site.oneLine}</p>
          <span>{site.businessAddressText}</span>
        </div>
        <div>
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.externalLinkEnabled && product.websiteUrl ? (
                  <a href={product.websiteUrl} rel="noopener noreferrer">{product.name} ↗</a>
                ) : (
                  <span>{product.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>{navItems.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Legal & Commercial</h2>
          <ul>
            <li><Link href="/privacy/">Privacy</Link></li>
            <li><Link href="/terms/">Website Terms</Link></li>
            <li><Link href="/commercial-policies/">Commercial Policies</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 {site.legalName}</span>
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </div>
    </footer>
  );
}
