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
- Merge to `main`: **complete**
- Main commit: `f5a6028ba34412154a2a1fbb9b3663e9da5d1fea`
- Production deployment/cutover: **not authorized / not started**
- `BLK-017`: **closed / verified** — current corporate production runtime is Cloudflare Workers & Pages project `tiny-pond-1463`, serving `istriadegroup.com` as a custom domain via manually uploaded static assets; no Git auto-deploy relationship is used for this repository.

## Stack

- Next.js 16.3.4 App Router
- React 19.2
- TypeScript
- Static-first Server Components
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

`npm run check` runs content guards, canonical brand hash verification, TypeScript checking, and the production build.

GitHub Actions additionally starts the built server, runs HTTP route/404/robots/sitemap smoke tests, verifies that held product domains are not rendered as active links, and captures private desktop/mobile QA screenshots.

## Current gate

The next material gate is **production package / Cloudflare deployment authorization**. Merging code to `main` does not publish the website to `istriadegroup.com`.
