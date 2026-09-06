export type ProductRecord = {
  id: string;
  name: string;
  category: string;
  summary: string;
  ownershipLabel: string | null;
  accent: "cyan" | "blue" | "violet" | "teal";
  featured: boolean;
  cardEnabled: boolean;
  externalLinkEnabled: boolean;
  websiteUrl: string | null;
  intendedDomain: string | null;
  publicStatusLabel: string | null;
  order: number;
};

export const products: ProductRecord[] = [
  {
    id: "sygvana",
    name: "SYGVANA",
    category: "Commerce Intelligence",
    summary:
      "Decision intelligence for commerce businesses that need clearer visibility into performance, opportunities and next actions.",
    ownershipLabel: null,
    accent: "cyan",
    featured: true,
    cardEnabled: true,
    externalLinkEnabled: false,
    websiteUrl: null,
    intendedDomain: "https://sygvana.com",
    publicStatusLabel: null,
    order: 1,
  },
  {
    id: "seo-agent",
    name: "ISTRIADE SEO Agent",
    category: "Search Visibility & SEO Operations",
    summary:
      "Evidence-driven SEO analysis, opportunity discovery and controlled implementation for businesses seeking stronger visibility across modern search environments.",
    ownershipLabel: null,
    accent: "blue",
    featured: true,
    cardEnabled: true,
    externalLinkEnabled: false,
    websiteUrl: null,
    intendedDomain: null,
    publicStatusLabel: null,
    order: 2,
  },
  {
    id: "doesaiseeme",
    name: "DoesAISeeMe",
    category: "AI Search Visibility Intelligence",
    summary:
      "Discover how your company appears across AI-powered search and answer environments. DoesAISeeMe measures whether AI systems recognize your brand, surface it for relevant queries, recommend it, and understand the sources behind its visibility.",
    ownershipLabel: "An ISTRIADE product",
    accent: "blue",
    featured: false,
    cardEnabled: true,
    externalLinkEnabled: true,
    websiteUrl: "https://doesaiseeme.istriadegroup.com",
    intendedDomain: "https://doesaiseeme.istriadegroup.com",
    publicStatusLabel: null,
    order: 3,
  },
  {
    id: "ai-video-studio",
    name: "ISTRIADE AI Video Studio",
    category: "AI-Assisted Video & Content Production",
    summary:
      "Structured audiovisual production systems combining AI, automation and human creative control.",
    ownershipLabel: null,
    accent: "violet",
    featured: true,
    cardEnabled: true,
    externalLinkEnabled: false,
    websiteUrl: null,
    intendedDomain: null,
    publicStatusLabel: null,
    order: 4,
  },
  {
    id: "irmya",
    name: "IRMYA",
    category: "AI-Operated Business Systems",
    summary:
      "A structured operating approach for transforming objectives into governed, coordinated and verifiable execution.",
    ownershipLabel: null,
    accent: "teal",
    featured: true,
    cardEnabled: true,
    externalLinkEnabled: false,
    websiteUrl: null,
    intendedDomain: "https://irmya.com",
    publicStatusLabel: null,
    order: 5,
  },
];

export const publicProducts = products
  .filter((product) => product.cardEnabled)
  .sort((a, b) => a.order - b.order);

export const featuredProducts = publicProducts
  .filter((product) => product.featured)
  .sort((a, b) => a.order - b.order);
