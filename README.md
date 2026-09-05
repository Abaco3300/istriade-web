# ISTRIADE Corporate Website

Corporate hub for **ISTRIADE GROUP LLC**.

## Current build state

- Architecture: approved
- Copy: frozen for build
- Canonical brand assets: recovered and integrity-pinned
- Product registry: v1 frozen with four products; external links disabled until individually authorized
- Corporate legal surface: `/legal/`, `/privacy/`, `/terms/`
- Source implementation: built
- Clean-environment CI: pass
- HTTP smoke tests: pass
- Initial private visual QA: pass
- `BLK-017`: closed / verified
- Current production runtime: Cloudflare Workers & Pages project `tiny-pond-1463`
- Production deployment/cutover: **not authorized**

## Stack

- Next.js 16.3.4 App Router
- React 19.2
- TypeScript
- Static export for Cloudflare (`output: "export"`)
- No database
- No authentication
- No CMS
- No Stripe
- No contact form backend
- No non-essential analytics in v1

## Verification

```bash
npm install
npm run check
```

`npm run check` runs content guards, canonical brand hash verification, TypeScript checking, the static production build, and deployment-artifact verification.

GitHub Actions additionally serves the exported `out/` directory for route checks, captures private desktop/mobile QA screenshots, and packages a verified Cloudflare deployment ZIP with SHA-256 and source-commit evidence.

## Current gate

The next material gate is **production upload/cutover authorization**. Preparing or merging this deployment package does not itself publish the website to `istriadegroup.com`.
