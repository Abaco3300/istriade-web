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
- Retire the current website.
- Activate product purchase links.
- Activate product-specific external links before their publication gates.
- Claim corporate legal drafts are legally adopted.

## Current production blocker

`BLK-017` remains open: current production origin/source-of-truth behind Cloudflare is not yet identified. It blocks production cutover only.

## Branch

`feat/corporate-rebuild-v1`

## Build lifecycle target

BUILD → STATIC/CONTENT CHECKS → TYPECHECK → NEXT BUILD → PREVIEW REVIEW → HUMAN GATE → MERGE/CUTOVER (later)
