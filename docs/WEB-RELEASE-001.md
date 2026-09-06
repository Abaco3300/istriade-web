# WEB-RELEASE-001 — Production Verification Reconciliation

## Status

BUILD / QA

## Objective

Reconcile the production deployment contract with the corporate surfaces already merged into `main` so the next grouped Cloudflare release verifies the actual release candidate rather than only the older v1 route set.

## Production baseline

- Runtime: Cloudflare Worker `tiny-pond-1463`
- Live origin: `https://istriadegroup.com`
- Last verified production deployment run: `34008750674`
- Last verified production source commit: `511de7bd1174a3d3494ba46f22951d06eaf08b7b`
- Current source is ahead of that production baseline and remains intentionally undeployed until a separate Founder gate.

## Release candidate surfaces to verify

- Corporate core routes
- Product discovery and DoesAISeeMe corporate link
- Insights hub and three initial evergreen articles
- Trust & Transparency
- `robots.txt` including `OAI-SearchBot`
- `sitemap.xml` including Insights and Trust routes
- `llms.txt`
- `manifest.webmanifest`
- generated `/opengraph-image`
- home Open Graph / Twitter metadata
- security headers already required by the site
- legal/commercial-policy continuity
- redirects and 404 behavior

## Controls

- Production workflow remains `workflow_dispatch` only.
- `main` is rebuilt and reverified before upload.
- Cloudflare configuration is dry-run validated before deployment.
- Pre-deploy Cloudflare state is captured.
- Live smoke verification is performed after deployment.
- Failed live verification invokes automatic rollback.
- Deployment evidence is retained as a GitHub Actions artifact.
- `scripts/deployment-contract-guard.mjs` prevents accidental loss of the manual trigger, rollback step or release-candidate verification coverage.

## Scope boundaries

This block does not:

- change public page copy or visual design;
- change product pricing, checkout, fulfillment or product operation;
- change legal policy text;
- modify any product repository;
- deploy to Cloudflare.

## Gate

Technical merge requires a separate Founder gate.
Production deployment requires a later, separate Founder gate after the merged release-readiness CI is green.
