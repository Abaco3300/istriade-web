# DOAISEEME-PUBLICATION-PREP-001 — Corporate Publication Preparation

Status: PREPARED / NOT AUTHORIZED / NOT PUBLISHED
Date: 2026-09-05

## Purpose

Prepare the corporate discovery layer for a future public DoesAISeeMe listing without changing the current public website or product commercial activation state.

## Current product baseline

DoesAISeeMe product source has already been merged to product `main` in `Abaco3300/doesaiseeme`.

Verified current controls remain:

- `checkoutActive = false`;
- Stripe Payment Link = INACTIVE;
- `LIVE_PAYMENT = HOLD`;
- product meta robots = `noindex,nofollow,noarchive`;
- product `robots.txt` = `Disallow: /`;
- product `X-Robots-Tag` = `noindex, nofollow, noarchive`;
- Stripe Product URL still references the historical MVP URL;
- unknown paying customers = 0 / 3.

The product merge commit and the last controlled-migration preview head share the same Git tree, so another code rebuild is not required merely to reproduce identical product source.

## Prepared corporate publication state

This branch prepares DoesAISeeMe for future visibility under `https://istriadegroup.com/products/` with:

- `cardEnabled = true`;
- `externalLinkEnabled = true`;
- `websiteUrl = https://doesaiseeme.istriadegroup.com`;
- `featured = false`;
- ownership label `An ISTRIADE product`;
- category `AI Search Visibility Intelligence`;
- discovery CTA generated as `Explore DoesAISeeMe`.

`featured = false` is deliberate. ISTRIADE SEO Agent remains the primary ISTRIADE launch product; DoesAISeeMe can be publicly discoverable without replacing that portfolio hierarchy.

## Corporate boundary

The corporate website must remain discovery-only for DoesAISeeMe. It must not duplicate:

- USD 19 pricing;
- checkout;
- transactional CTAs;
- product-specific fulfillment workflow;
- detailed methodology;
- product-specific contractual truth.

Those belong to `https://doesaiseeme.istriadegroup.com`.

Static-export guards require:

- visible DoesAISeeMe card on `/products/` in this preparation branch;
- ownership label present;
- canonical discovery link present;
- `Explore DoesAISeeMe` CTA present;
- no internal `First Revenue Candidate` label;
- no product price on the corporate card;
- no transactional CTA on the corporate card;
- no DoesAISeeMe link from the corporate homepage while `featured = false`.

## Not authorized by this preparation

This branch does NOT authorize or perform:

- merge to corporate `main`;
- Cloudflare production deployment;
- removal of product noindex/crawl blocks;
- Stripe Product URL mutation;
- Stripe Payment Link activation;
- `checkoutActive = true`;
- `LIVE_PAYMENT = ACTIVE`;
- customer acquisition;
- representation of external market validation.

## Intended next gated sequence

When explicitly authorized, execute publication in a controlled grouped change:

1. reconcile product runtime / canonical domain against the merged product `main` build;
2. remove all three product indexing blocks atomically and deploy once;
3. verify canonical product URL, HTTPS, robots/meta/header signals and disabled checkout;
4. merge this corporate publication branch;
5. deploy the corporate site once to Cloudflare;
6. verify DoesAISeeMe appears under Products, links only to the canonical product environment, and remains absent from the homepage as a featured product;
7. keep payment activation as a separate final Human Revenue Gate.

`DOAISEEME-PUBLICATION-PREP-001 = PREPARED / NOT PUBLISHED`.
