# WEB-DEPLOY-001 — Production Package & Cloudflare Cutover Plan

## Scope

Prepare a deployment-ready static artifact for the existing Cloudflare Workers & Pages project `tiny-pond-1463` without publishing it.

## Production runtime

- Domain: `istriadegroup.com`
- Cloudflare project: `tiny-pond-1463`
- Delivery model: static assets
- Existing deployment model: manual/dashboard upload
- GitHub repository: source of code, not an automatic production deployment source

## Deployment architecture

```text
Next.js source
→ output: export
→ out/
→ Cloudflare _headers + _redirects
→ verified ZIP artifact
→ HUMAN GATE
→ upload to tiny-pond-1463
→ live verification
```

## Static export adaptation

Next.js server-side `headers()` and `redirects()` are intentionally removed from `next.config.ts` because they are not supported by static export. Equivalent rules are maintained in:

- `public/_headers`
- `public/_redirects`

These files are copied into `out/` and are interpreted by Cloudflare Static Assets at deployment time.

## Required pre-cutover checks

- content contamination guard: PASS
- canonical brand hashes: PASS
- TypeScript: PASS
- Next.js static export: PASS
- required `out/` routes/assets: PASS
- custom 404 artifact: PASS
- robots/sitemap: PASS
- held product links remain inactive: PASS
- `_headers`: PASS
- `_redirects`: PASS
- desktop/mobile visual QA: PASS
- deployment ZIP generated
- deployment ZIP SHA-256 recorded
- source commit recorded

## Cutover boundary

Not authorized by this package-preparation phase:

- upload to `tiny-pond-1463`
- replace the existing Cloudflare deployment
- alter the custom domain
- change DNS
- activate product external links
- claim legal drafts are legally adopted

## Rollback requirement

Before production upload, preserve the current Cloudflare deployment/version identifier or otherwise confirm that the immediately previous deployment can be restored from the Cloudflare dashboard.

Production upload and rollback readiness form a separate Human Gate.
