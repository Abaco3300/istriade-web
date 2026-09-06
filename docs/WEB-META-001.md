# WEB-META-001 — Social & Distribution Metadata Foundation

## Status

BUILD / QA

## Objective

Strengthen how the ISTRIADE corporate website identifies itself when URLs are shared, previewed or interpreted by external platforms, without introducing unsupported social-profile claims or product-commercial changes.

## Included

- Global Open Graph metadata for the corporate website.
- Global Twitter/X summary-card metadata without claiming an account handle.
- Explicit dark color-scheme and theme color metadata.
- Canonical `manifest.webmanifest` generated from `app/manifest.ts`.
- Manifest identity tied to existing ISTRIADE corporate truth and brand favicon.
- Source-level metadata guard.
- Post-build/export metadata guard.

## Truth boundaries

- No social-network account or profile URL is asserted.
- No promotional social image is introduced in this block.
- No new marketing claim is introduced.
- No product pricing, checkout, payment, fulfillment or product-repository change is included.
- No legal-policy content is changed.

## Deployment boundary

This package is prepared for BUILD/QA only.

Merge to `main` requires a separate Founder gate.
Cloudflare production deployment requires a separate Founder gate.
