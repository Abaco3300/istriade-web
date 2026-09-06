# DOAISEEME-CORPORATE-INTEGRATION-001 — Corporate Discovery Integration

Status: PREPARED / STAGED / NOT PUBLISHED
Date: 2026-09-05

## Purpose

Prepare DoesAISeeMe for future discovery inside `istriadegroup.com` without changing its commercial activation state.

Canonical product identity:

- Product: **DoesAISeeMe**
- Commercial offer: **DoesAISeeMe — AI Search Visibility Report**
- Owner: **ISTRIADE GROUP LLC**
- Public ownership label: **An ISTRIADE product**
- Category: **AI Search Visibility Intelligence**
- Canonical product destination: `https://doesaiseeme.istriadegroup.com`

## Information architecture

DoesAISeeMe belongs under the corporate **Products** discovery layer.

Target journey after a future publication authorization:

`istriadegroup.com/products/` → DoesAISeeMe product card → `doesaiseeme.istriadegroup.com`

The corporate website remains high-level discovery only. It must not duplicate DoesAISeeMe pricing, checkout, product-specific contractual terms, methodology detail or fulfillment workflow.

The dedicated DoesAISeeMe environment remains the product-level source of truth.

## Corporate card preparation

The staged Product Registry record is prepared with:

- canonical name;
- category `AI Search Visibility Intelligence`;
- corporate discovery copy aligned with the canonical product positioning;
- ownership label `An ISTRIADE product`;
- intended canonical domain.

The record deliberately remains:

- `featured = false`
- `cardEnabled = false`
- `externalLinkEnabled = false`
- `websiteUrl = null`
- `publicStatusLabel = null`

The internal portfolio role `FIRST REVENUE CANDIDATE` is not public website copy.

## Public rendering guard

`/products/` must render only records with `cardEnabled = true`.

Static-export verification explicitly fails if, while the current hold remains:

- `DoesAISeeMe` appears on the exported corporate Products page;
- `First Revenue Candidate` appears publicly;
- `https://doesaiseeme.istriadegroup.com` appears as an active corporate product link.

This closes the previous gap where `cardEnabled=false` existed in the registry but `/products/` mapped the complete registry without filtering.

## Future public CTA

After an explicit publication/activation gate, the corporate card may use a discovery CTA such as:

- `Explore DoesAISeeMe`

No transaction CTA belongs on the corporate site.

The corporate site must not use:

- Buy
- Purchase
- Order now
- Get your report
- Start report
- Checkout

unless a separate future governance decision changes the corporate architecture.

## Activation sequence — not authorized by this document

Future public integration requires an explicit Human Gate before changing the staged record to public. The expected sequence is:

1. product environment publication state authorized;
2. staging/noindex controls removed under product governance when authorized;
3. canonical DoesAISeeMe destination re-verified;
4. corporate Product Registry activation explicitly authorized;
5. `cardEnabled = true`;
6. `externalLinkEnabled = true` only when the destination is suitable for public discovery;
7. `websiteUrl = https://doesaiseeme.istriadegroup.com`;
8. corporate build/QA/deployment as a separately authorized change.

Live payment remains a separate product-level gate and is not implied by corporate discovery activation.

## Current governance state

- Product Registry: STAGED / DISABLED
- Product PR #1: OPEN / DRAFT / UNMERGED
- Corporate PR #5: OPEN / DRAFT / UNMERGED
- checkoutActive: false
- Stripe Payment Link: INACTIVE
- LIVE_PAYMENT: HOLD
- Commercial activation: NOT AUTHORIZED

`DOAISEEME-CORPORATE-INTEGRATION-001 = PREPARED / NOT PUBLISHED`
