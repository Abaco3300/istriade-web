# WEB-INSIGHTS-001 — Corporate Insights Foundation

Status: BUILT / NOT MERGED / NOT DEPLOYED
Date: 2026-09-05
Scope: ISTRIADE corporate website only

## Objective

Create the first editorial authority layer for `istriadegroup.com` without changing product-level commercial truth.

The section is intended to publish durable corporate frameworks that explain how ISTRIADE thinks about AI, search visibility, controlled automation and intelligent business systems.

## Editorial rules

ISTRIADE Insights must:

- publish useful explanatory material rather than thin promotional content;
- distinguish corporate frameworks from product specifications;
- avoid pricing, checkout, product activation and transactional details;
- avoid exposing internal lifecycle labels, internal IDs or unreleased product destinations;
- avoid presenting prototypes, proposals or roadmap objects as available products;
- remain consistent with the corporate identity and operating principles already published;
- preserve product-level truth in each product's own environment.

## Initial publication set

1. `AI Search Visibility: A Practical Framework for Businesses`
   - category: Search & Visibility
   - route: `/insights/ai-search-visibility-business-framework/`

2. `Human-Governed AI Operations: Where Automation Needs Control`
   - category: Automation & Execution
   - route: `/insights/human-governed-ai-operations/`

3. `From Signal to Execution: Designing AI Systems Around Business Decisions`
   - category: Business Systems
   - route: `/insights/from-signal-to-execution/`

These pieces are evergreen corporate perspectives. They do not depend on news, market statistics or unsupported external claims.

## Architecture

- `/insights/` = corporate editorial hub.
- `data/insights.ts` = structured editorial registry/source for initial articles.
- `/insights/[slug]/` = reusable statically generated article route.
- each article exposes `Article` structured data.
- the hub exposes `CollectionPage` + `ItemList` structured data.
- all published Insight routes are added to `sitemap.xml` and `llms.txt`.
- Insights is added to primary corporate navigation.

## Commercial boundary

Insights does not contain:

- product prices;
- checkout links;
- payment status;
- product-specific fulfillment commitments;
- internal revenue roles;
- customer acquisition instructions;
- unreleased product URLs.

Each article includes an explicit editorial boundary statement confirming that it is a corporate perspective rather than a product specification, contractual commitment or guarantee.

## Verification requirements

Before merge:

- content guard PASS;
- canonical brand integrity PASS;
- TypeScript PASS;
- Next.js static build PASS;
- `/insights/` and all three article routes exported;
- Article/CollectionPage/ItemList schema guards PASS;
- sitemap contains all Insight URLs;
- `llms.txt` contains the Insights hub and article URLs;
- no transactional or internal product data appears in visible Insight content;
- HTTP smoke tests PASS;
- private visual QA PASS;
- Cloudflare dry-run PASS.

## Publication state

This package authorizes no production change by itself.

`WEB-INSIGHTS-001 = BUILT / NOT MERGED / NOT DEPLOYED`.
