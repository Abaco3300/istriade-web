# WEB-META-001 — Social & Distribution Metadata Foundation

## Status

BUILD / QA

## Objective

Complete the corporate website's home/fallback distribution metadata and add a canonical web app manifest while preserving the page-level Open Graph/Twitter system that already existed in `lib/metadata.ts`.

## Existing baseline confirmed

Before this package:

- inner corporate pages already used `lib/metadata.ts` for page-specific Open Graph and Twitter metadata;
- the repository already contained a static-compatible 1200×630 PNG social image route at `/opengraph-image`;
- the root layout did not provide equivalent Open Graph/Twitter fallback metadata for the home page;
- no `manifest.webmanifest` was present.

## Included

- Global/home fallback Open Graph metadata aligned with the existing page-level metadata contract.
- Global/home Twitter/X `summary_large_image` metadata aligned with the existing page-level metadata contract.
- Reuse of the existing `/opengraph-image` PNG route; no new promotional image is introduced.
- Explicit dark color-scheme and theme color metadata.
- Canonical `manifest.webmanifest` generated from `app/manifest.ts` and forced static for `output: export` compatibility.
- Manifest identity tied to existing ISTRIADE corporate truth and brand favicon.
- Source-level guard covering global metadata, existing page metadata, social image contract and manifest.
- Post-build/export guard verifying emitted home metadata and manifest contents.

## Truth boundaries

- No social-network account or profile URL is asserted.
- No new marketing claim is introduced.
- No product pricing, checkout, payment, fulfillment or product-repository change is included.
- No legal-policy content is changed.

## QA history

- First CI attempt identified that Next.js static export requires `dynamic = "force-static"` on the manifest route; corrected in branch before merge.
- Second CI attempt confirmed build/static export success and identified an overly strict guard expectation for the normalized root `og:url`; the guard was corrected without changing published metadata.

## Deployment boundary

This package is prepared for BUILD/QA only.

Merge to `main` requires a separate Founder gate.
Cloudflare production deployment requires a separate Founder gate.
