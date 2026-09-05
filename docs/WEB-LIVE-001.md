# WEB-LIVE-001 — Production Launch Audit & Final QA

Status: IN PROGRESS — STRIPE REMEDIATION PREPARED / LEGAL ADOPTION REQUIRED

Date: 2026-09-05

## Scope

WEB-LIVE-001 validates the live ISTRIADE corporate website after production cutover and adds a dedicated Stripe website-readiness control layer.

The Stripe portion evaluates whether the public corporate website presents a coherent and reviewable business identity, clear product/service information, customer-support access, privacy and website terms, and commercial policies addressing payment, digital fulfillment, refunds, cancellations, subscriptions, promotions and disputes.

## Current production baseline

- Corporate site: `https://istriadegroup.com`
- Cloudflare Worker: `tiny-pond-1463`
- Production cutover: COMPLETE
- Production smoke verification: PASS
- DNS changes during cutover: NONE
- Product external links: HELD
- Commercial activation: SEPARATE GOVERNANCE STATE

## Stripe Live account reconciliation

The connected Stripe Live account currently reports:

- business name consistent with ISTRIADE GROUP LLC;
- website: `istriadegroup.com`;
- customer-support email: `contact@istriadegroup.com`;
- business/support address in Sheridan, Wyoming;
- default currency: USD;
- business description covering online digital services, SEO/search visibility, website/digital work, marketing automation, related technology services, and AI-powered software/SaaS;
- card payments enabled;
- charges enabled;
- payouts enabled;
- no currently due verification requirements at the time of this audit.

No secret keys, tokens, bank details or private Stripe identifiers are stored in this repository.

## Stripe-readiness matrix

| Control | Baseline | Proposed remediation | Target state |
|---|---|---|---|
| Legal business name visible | PASS | Preserve | PASS |
| Corporate website matches Stripe | PASS | Preserve | PASS |
| Product/service description | PARTIAL | Explicitly surface SEO, web/digital implementation, marketing automation, software/SaaS | PASS |
| Customer support contact | PASS/PARTIAL | Label support channel explicitly and connect billing/refund/cancellation questions | PASS |
| Business correspondence address | PARTIAL | Publish the Stripe-consistent business correspondence address | PASS |
| Privacy Policy | PRESENT | Preserve; legal adoption state remains separately governed | PASS after adoption governance |
| Website Terms | PRESENT | Link to commercial policy layer | PASS after adoption governance |
| Refund policy | GAP | Add general direct-purchase refund rules with product-specific override | PASS after adoption |
| Cancellation policy | GAP | Add subscription/recurring-service cancellation rules | PASS after adoption |
| Digital fulfillment/delivery | GAP/PARTIAL | Describe digital delivery and where delivery timing is disclosed | PASS after adoption |
| Physical shipping/returns | NOT APPLICABLE by default | State that ordinary ISTRIADE offerings are digital and no physical shipping applies unless expressly offered | PASS |
| Currency disclosure | PARTIAL | Establish USD default unless another currency is expressly identified | PASS |
| Taxes/fees disclosure | PARTIAL | Add general disclosure | PASS |
| Trials/promotions | GAP | Require offer-specific disclosure of trial, conversion, price and recurring terms | PASS after adoption |
| Billing disputes | GAP | Add customer-support-first dispute path without waiving statutory/card rights | PASS after adoption |
| Legal/export/geographic restrictions | GAP | Add general availability restriction language | PASS after adoption |
| Payment security | PARTIAL | Clarify that payment providers process credentials and corporate site does not store full card data | PASS after adoption |
| Product-specific policy precedence | PASS conceptually | Make the precedence rule explicit | PASS |
| Footer accessibility of policies | GAP | Add Commercial Policies to sitewide footer | PASS after deployment |
| Legacy refund URL | MISDIRECTED | Redirect `/refund-policy` and `/refund-cancellation` to Commercial Policies | PASS after deployment |
| Automated regression guard | GAP | Add route/content/sitemap/redirect checks to CI and production smoke tests | PASS after merge |

## Remediation prepared in this branch

Branch: `audit/web-live-001-stripe-readiness`

Prepared changes:

1. `/commercial-policies/` general commercial policy page.
2. Explicit customer support and billing/refund/cancellation contact language.
3. Stripe-consistent business correspondence address.
4. Explicit USD default-currency disclosure.
5. Public business description aligned more closely with the Stripe business profile.
6. Web & Digital Implementation and marketing automation capability language.
7. Commercial Policies link from `/legal/`, `/terms/`, `/contact/` and global footer.
8. Sitemap inclusion.
9. Legacy refund/cancellation redirects to `/commercial-policies/`.
10. Static export, CI and production deployment checks that enforce the commercial-policy route and key Stripe-readiness content.

## Governance

The new Commercial Policies and any modified legal wording in this branch are **DRAFT / NOT LEGALLY ADOPTED / NOT PUBLISHED**.

This branch must not be merged or deployed merely because CI passes. Publication requires an explicit Human Gate approving/adopting the proposed commercial/legal wording.

The existing corporate Privacy Policy and Website Terms were previously classified `PRODUCTION_DRAFT_FROZEN`, not `LEGALLY_ADOPTED`. WEB-LIVE-001 does not silently change that status.

## Required Human Gate before merge/publication

The owner must explicitly approve/adopt:

- the corporate Privacy Policy for publication;
- the corporate Website Terms for publication;
- the new Commercial Policies for publication.

After adoption, the branch can be merged, production deployment can be run once, and the live Stripe-readiness checks can be executed.

## Definition of done

WEB-LIVE-001 may close only when:

- branch CI = PASS;
- legal/commercial policy adoption = APPROVED;
- remediation merged to `main`;
- Cloudflare production deployment = PASS;
- public route checks = PASS;
- `/commercial-policies/` publicly reachable;
- refund legacy redirects resolve to Commercial Policies;
- support identity/address/currency disclosures are public;
- Stripe-readiness regression checks = PASS;
- product-specific checkout/legal gates remain enforced before each product accepts live payment.
