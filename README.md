# ISTRIADE Corporate Website

Corporate hub for **ISTRIADE GROUP LLC**.

## Current state

- Architecture: approved and implemented
- Canonical brand assets: recovered and integrity-pinned
- Product Registry: active; public links are enabled only when individually authorized
- Corporate legal surface: `/legal/`, `/privacy/`, `/terms/`, `/commercial-policies/`
- Corporate authority surface: `/insights/`, `/trust/`, `llms.txt`, structured data and AI/search discovery controls
- Accessibility hardening: merged and CI-verified
- Social/distribution metadata and web manifest: merged and CI-verified
- Clean-environment CI: pass
- HTTP smoke tests: pass
- Private desktop/mobile visual QA: pass
- Current production runtime: Cloudflare Worker `tiny-pond-1463`
- Production website: **live** at `https://istriadegroup.com`
- Last verified production deployment baseline: GitHub Actions run `34008750674`
- Last verified production source commit: `511de7bd1174a3d3494ba46f22951d06eaf08b7b`
- Current `main` contains additional validated corporate improvements that are intentionally not yet deployed

## Stack

- Next.js 16.3.4 App Router
- React 19.2
- TypeScript
- Static export for Cloudflare (`output: "export"`)
- No database
- No authentication
- No CMS
- No Stripe in the corporate site
- No contact-form backend
- No non-essential analytics

## Verification

```bash
npm install
npm run check
```

`npm run check` verifies content boundaries, canonical brand integrity, accessibility guarantees, distribution metadata, the production-deployment contract, TypeScript, the static production build and exported deployment artifacts.

GitHub Actions additionally serves the exported `out/` directory for route checks, captures private desktop/mobile QA screenshots, and packages a verified Cloudflare deployment ZIP with SHA-256 and source-commit evidence.

## Deployment governance

Production deployment is a separate Founder gate from technical merge.

The Cloudflare production workflow remains **manual-only** (`workflow_dispatch`) and targets the existing Worker `tiny-pond-1463`. It rebuilds and verifies `main`, captures pre-deploy state, deploys the verified static assets, runs live smoke checks across the corporate, product-discovery, Insights, Trust, AI-discovery and metadata surfaces, and automatically invokes rollback if live verification fails.

## Current gate

The current release candidate is being reconciled under `WEB-RELEASE-001` before the next grouped production deployment. Merging release-readiness changes does not itself publish anything to `istriadegroup.com`.
