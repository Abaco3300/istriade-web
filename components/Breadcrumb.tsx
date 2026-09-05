import Link from "next/link";

export function Breadcrumb({ label }: { label: string }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{label}</span>
    </nav>
  );
}
