import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div className="container"><div className="broken-signal" aria-hidden="true"><span /><span /><span /></div><p className="eyebrow">404</p><h1>Page not found.</h1><p>The page you're looking for may have moved, changed or no longer exist.</p><div className="button-row"><Link className="button" href="/">Home</Link><Link className="text-link" href="/products/">Products</Link><Link className="text-link" href="/contact/">Contact</Link></div></div></section>;
}
