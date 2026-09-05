# WEB-BUILD-001 — Corporate Website Build Execution State

## Authorization boundary

The Founder authorized technical/reversible build work after completion of WEB-REC-001A through WEB-REC-001K.

### Authorized
- Create a non-production build branch.
- Replace the historical static HTML implementation on that branch.
- Build the approved Next.js/TypeScript corporate website.
- Add canonical brand assets without modification.
- Add content/legal drafts frozen in WEB-REC-001K.
- Add automated guards and quality checks.
- Open a draft PR for verification.

### Not authorized
- Merge to `main`.
- Change production DNS.
- Change Cloudflare origin/routing.
- Retire or replace the current website.
- Upload this rebuild to the production Cloudflare Worker.
- Activate product purchase links.
- Activate product-specific external links before their publication gates.
- Claim corporate legal drafts are legally adopted.

## Production runtime reconciliation

`BLK-017 = CLOSED / VERIFIED`.

Current corporate production runtime:
- Cloudflare Workers & Pages project: `tiny-pond-1463`
- Custom domain: `istriadegroup.com`
- Delivery model: static assets
- Deployment model: manual upload / dashboard deployment
- Git auto-deploy from this repository: not used

This means branch work and a future merge to `main` are technically separated from the live Cloudflare deployment. A production upload/cutover remains a later explicit Human Gate.

## Branch

`feat/corporate-rebuild-v1`

## Current verified state

- Source implementation: BUILT
- Content/brand guards: PASS
- TypeScript: PASS
- Next.js production build: PASS
- HTTP smoke tests: PASS
- Real 404 behavior: PASS
- robots/sitemap checks: PASS
- Held product-link check: PASS
- Initial desktop/mobile visual QA: PASS
- Production deployment: NOT STARTED

## Build lifecycle

BUILD → TEST → PRIVATE VISUAL QA → HUMAN GATE → MERGE → PRODUCTION UPLOAD/CUTOVER (separate later gate) → LIVE VERIFICATION
