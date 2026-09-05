# ISTRIADE Corporate Website

Corporate hub for **ISTRIADE GROUP LLC**.

## Current build state

- Architecture: approved
- Copy: frozen for build
- Canonical brand assets: recovered and integrity-pinned
- Product registry: v1 frozen with four products; external links disabled until individually authorized
- Corporate legal surface: `/legal/`, `/privacy/`, `/terms/`
- Production cutover: **not authorized**
- `BLK-017`: current production origin remains unresolved and blocks only cutover/DNS changes

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

## Local verification

```bash
npm install
npm run check
```

`npm run check` runs content guards, canonical brand hash verification, TypeScript checking, and the production build.
