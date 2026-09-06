# ISTRIADE GROUP LLC — Corporate Website

Official corporate website: **https://istriadegroup.com/**

This public repository contains the source for the official corporate website of **ISTRIADE GROUP LLC**, a Wyoming technology company developing AI-powered software, intelligent systems and specialized digital services for business.

Corporate contact: **contact@istriadegroup.com**

## Public corporate surfaces

- Company: https://istriadegroup.com/about/
- Products: https://istriadegroup.com/products/
- Capabilities: https://istriadegroup.com/capabilities/
- Approach: https://istriadegroup.com/approach/
- Insights: https://istriadegroup.com/insights/
- Trust & Transparency: https://istriadegroup.com/trust/
- Contact: https://istriadegroup.com/contact/

## Current state

- Production website: **live** at `https://istriadegroup.com/`
- Current production runtime: Cloudflare Worker `tiny-pond-1463`
- Current verified production deployment: GitHub Actions run `34066286885`
- Current verified production source commit: `4446c7d7f7014e987f7d605c8ca194338890934c`
- Historical verified production deployment baseline: GitHub Actions run `34008750674`
- Historical verified production source baseline: `511de7bd1174a3d3494ba46f22951d06eaf08b7b`
- Canonical brand assets: integrity-pinned
- Product Registry: active; public links are enabled only when individually authorized
- Corporate legal surface: `/legal/`, `/privacy/`, `/terms/`, `/commercial-policies/`
- Corporate authority surface: `/insights/`, `/trust/`, `llms.txt`, structured data and AI/search discovery controls
- Accessibility, metadata, static-export and deployment guards: CI-verified
- Production deployment: manual-only with live verification and automatic rollback on failure

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

`npm run check` verifies content boundaries, canonical brand integrity, accessibility guarantees, distribution metadata, IndexNow verification assets, the production-deployment contract, TypeScript, the static production build and exported deployment artifacts.

GitHub Actions additionally serves the exported `out/` directory for route checks, captures private desktop/mobile QA screenshots, and packages a verified Cloudflare deployment ZIP with source-commit evidence.

## Deployment governance

Production deployment is a separate Founder gate from technical merge.

The Cloudflare production workflow remains **manual-only** (`workflow_dispatch`) and targets the existing Worker `tiny-pond-1463`. It rebuilds and verifies `main`, captures pre-deploy state, deploys verified static assets, runs live smoke checks across the corporate, product-discovery, Insights, Trust, AI-discovery and metadata surfaces, and automatically invokes rollback if live verification fails.
