import { Breadcrumb } from "@/components/Breadcrumb";

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumb label={eyebrow} />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lead">{lead}</p>
      </div>
    </section>
  );
}
