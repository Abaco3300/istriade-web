# WEB-LIVE-001 — Production Launch Audit & Final QA

Status: LEGAL ADOPTION APPROVED — READY FOR MERGE / PRODUCTION DEPLOYMENT

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

| Control | Baseline | Remediation | Target state |
|---|---|---|---|
| Legal business name visible | PASS | Preserve | PASS |
| Corporate website matches Stripe | PASS | Preserve | PASS |
| Product/service description | PARTIAL | Explicitly surface SEO, web/digital implementation, marketing automation, software/SaaS | PASS |
| Customer support contact | PASS/PARTIAL | Label support channel explicitly and connect billing/refund/cancellation questions | PASS |
| Business correspondence address | PARTIAL | Publish the Stripe-consistent business correspondence address | PASS |
| Privacy Policy | PRESENT | Adopted for publication under Corporate Pack v1.0 | PASS after deployment |
| Website Terms | PRESENT | Adopted for publication under Corporate Pack v1.0 and linked to commercial policy layer | PASS after deployment |
| Refund policy | GAP | Add general direct-purchase refund rules with product-specific override | PASS after deployment |
| Cancellation policy | GAP | Add subscription/recurring-service cancellation rules | PASS after deployment |
| Digital fulfillment/delivery | GAP/PARTIAL | Describe digital delivery and where delivery timing is disclosed | PASS after deployment |
| Physical shipping/returns | NOT APPLICABLE by default | State that ordinary ISTRIADE offerings are digital and no physical shipping applies unless expressly offered | PASS |
| Currency disclosure | PARTIAL | Establish USD default unless another currency is expressly identified | PASS after deployment |
| Taxes/fees disclosure | PARTIAL | Add general disclosure | PASS after deployment |
| Trials/promotions | GAP | Require offer-specific disclosure of trial, conversion, price and recurring terms | PASS after deployment |
| Billing disputes | GAP | Add customer-support-first dispute path without waiving statutory/card rights | PASS after deployment |
| Legal/export/geographic restrictions | GAP | Add general availability restriction language | PASS after deployment |
| Payment security | PARTIAL | Clarify that payment providers process credentials and corporate site does not store full card data | PASS after deployment |
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

On 2026-09-05 the owner explicitly approved:

`APROBADO — ADOPCIÓN LEGAL CORPORATE PACK v1.0`

Accordingly, the following are classified as **LEGALLY_ADOPTED / APPROVED FOR PUBLICATION**:

- Corporate Privacy Policy;
- Corporate Website Terms;
- Corporate Commercial Policies.

This adoption authorizes merge and publication of the approved wording. It does not constitute external legal certification or legal advice.

Product-specific checkout, pricing, refund, cancellation, subscription and other commercial/legal requirements remain separately governed and must be validated before each product accepts live payment.

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
