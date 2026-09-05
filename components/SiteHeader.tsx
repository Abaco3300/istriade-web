import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label="ISTRIADE home">
          <Image
            src="/brand/istriade/04-istriade-lockup-horizontal-outlined.svg"
            alt="ISTRIADE"
            width={230}
            height={58}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link className="button button-small header-cta" href="/products/">Explore our products</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="/products/">Explore our products</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
