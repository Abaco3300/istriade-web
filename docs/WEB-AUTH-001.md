# WEB-AUTH-001 — Corporate Authority & AI Discoverability Foundation

Status: BUILD IN PROGRESS / NOT MERGED / NOT DEPLOYED
Date: 2026-09-05
Scope: ISTRIADE corporate website only

## Objective

Strengthen `istriadegroup.com` as the canonical corporate source for ISTRIADE GROUP LLC without changing product-level commercial truth or activating any product.

This package improves machine readability, entity consistency and crawler discoverability while preserving the existing corporate/product boundary.

## Boundaries

This package does not:

- alter any product checkout, pricing, fulfillment or commercial activation;
- change DoesAISeeMe product internals;
- publish unreleased product destinations;
- change DNS or production origin;
- create an Insights section or publish editorial content;
- represent proposal-level portfolio objects as launched products.

## Work included

1. Add a root `/llms.txt` corporate discovery manifest with only public/canonical facts and links.
2. Make `OAI-SearchBot` access explicit in `robots.txt` while retaining general crawl access.
3. Link the HTML document to `/llms.txt` as a machine-readable described-by resource.
4. Strengthen Organization structured data with a stable `@id`, alternate name, contact point and capability topics.
5. Strengthen WebSite structured data with a stable `@id`, description, language and Organization reference.
6. Add machine-readable CollectionPage + ItemList structured data to `/products/`, based only on the public product registry.
7. Extend static-export verification so the new discovery assets and invariants are tested automatically.

## `llms.txt` posture

`llms.txt` is treated as an additive discovery aid, not as a replacement for established controls. Canonical HTML, robots.txt, sitemap.xml and structured data remain primary website mechanisms.

The manifest intentionally excludes:

- internal lifecycle labels;
- unreleased product URLs;
- product pricing;
- checkout information;
- internal IDs;
- claims not already supported by the public corporate site.

## Machine-readable entity contract

Canonical Organization ID:

`https://istriadegroup.com/#organization`

Canonical WebSite ID:

`https://istriadegroup.com/#website`

Corporate email:

`contact@istriadegroup.com`

Public product registry:

`https://istriadegroup.com/products/`

## Verification requirements

Before this package can be considered ready for merge:

- `npm run check` must pass;
- static export must contain `/llms.txt`;
- `robots.txt` must allow general crawlers and explicitly allow `OAI-SearchBot`;
- HTML must expose the `/llms.txt` described-by link;
- Organization and WebSite stable IDs must be present;
- `/products/` must preserve the existing corporate/product boundary;
- DoesAISeeMe may remain linked as an already authorized public product, but no product-specific commercial data may be introduced;
- canonical brand hash checks must remain PASS.

## Publication state

This document authorizes no production change by itself.

`WEB-AUTH-001 = BUILD IN PROGRESS / NOT MERGED / NOT DEPLOYED`.
