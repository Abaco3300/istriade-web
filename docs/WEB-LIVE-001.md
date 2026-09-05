# WEB-LIVE-001 — Production Launch Audit & Final QA

Status: COMPLETE — PRODUCTION DEPLOYED / STRIPE CORPORATE WEBSITE READINESS PASS

Date: 2026-09-05

## Scope

WEB-LIVE-001 validates the live ISTRIADE corporate website after production cutover and establishes a dedicated Stripe website-readiness control layer.

The Stripe portion evaluates whether the public corporate website presents a coherent and reviewable business identity, clear product/service information, customer-support access, privacy and website terms, and commercial policies addressing payment, digital fulfillment, refunds, cancellations, subscriptions, promotions and disputes.

## Final production state

- Corporate site: `https://istriadegroup.com`
- Cloudflare Worker: `tiny-pond-1463`
- WEB-LIVE-001 remediation merge commit: `e948632ea398c075ae89c888dcedd9b35a212d9c`
- Production deployment source commit: `5c8cce50f5eebed35962ed4836b7e168668cdae1`
- Active Worker version: `52675752-21ea-4b9e-89e4-b391b4ab3fb5`
- Traffic: `100%`
- Production deployment workflow run: `33997214063`
- Live smoke verification: `PASS`
- Production verification: `PASS`
- Rollback on final deployment: `NOT REQUIRED`
- DNS changes: `NONE`
- Production deployment workflow: restored to `workflow_dispatch` / manual-only after the authorized deployment
- Product external links: `HELD`
- Product-specific commercial activation: `SEPARATE GOVERNANCE STATE`

## Stripe Live account reconciliation

At audit time the connected Stripe Live account reported:

- business name consistent with ISTRIADE GROUP LLC;
- website: `istriadegroup.com`;
- customer-support email: `contact@istriadegroup.com`;
- business/support address in Sheridan, Wyoming;
- default currency: USD;
- business description covering online digital services, SEO/search visibility, website/digital work, marketing automation, related technology services, and AI-powered software/SaaS;
- card payments enabled;
- charges enabled;
- payouts enabled;
- no currently due verification requirements.

No secret keys, tokens, bank details or private Stripe identifiers are stored in this repository.

## Stripe-readiness matrix — final corporate website state

| Control | Final state |
|---|---|
| Legal business name visible | PASS |
| Corporate website matches Stripe | PASS |
| Product/service description | PASS |
| Customer support contact | PASS |
| Business correspondence address | PASS |
| Privacy Policy | LEGALLY ADOPTED / PUBLISHED |
| Website Terms | LEGALLY ADOPTED / PUBLISHED |
| Commercial Policies | LEGALLY ADOPTED / PUBLISHED |
| Refund policy | PASS |
| Cancellation policy | PASS |
| Digital fulfillment/delivery | PASS |
| Physical shipping/returns | NOT APPLICABLE by default / disclosed |
| Currency disclosure | PASS — USD default unless otherwise identified |
| Taxes/fees disclosure | PASS |
| Trials/promotions disclosure rule | PASS |
| Billing disputes | PASS |
| Legal/export/geographic restrictions | PASS |
| Payment-security disclosure | PASS |
| Product-specific policy precedence | PASS |
| Footer accessibility of policies | PASS |
| Legacy refund/cancellation redirects | PASS |
| Automated regression guard | PASS |
| Production smoke tests | PASS |

## Remediation deployed

1. `/commercial-policies/` general commercial policy page.
2. Explicit customer support and billing/refund/cancellation contact language.
3. Stripe-consistent business correspondence address.
4. Explicit USD default-currency disclosure.
5. Public business description aligned more closely with the Stripe business profile.
6. Web & Digital Implementation and marketing automation capability language.
7. Commercial Policies linked from `/legal/`, `/terms/`, `/contact/` and the global footer.
8. Sitemap inclusion.
9. Legacy `/refund-policy` and `/refund-cancellation` redirects to `/commercial-policies/`.
10. Static export, CI and production deployment checks enforcing the commercial-policy route and key Stripe-readiness content.

## Legal adoption

On 2026-09-05 the owner explicitly approved:

`APROBADO — ADOPCIÓN LEGAL CORPORATE PACK v1.0`

Accordingly, the following are classified as **LEGALLY_ADOPTED / PUBLISHED**:

- Corporate Privacy Policy;
- Corporate Website Terms;
- Corporate Commercial Policies.

This adoption and publication do not constitute external legal certification or legal advice.

## Remaining product-level gate

Corporate website Stripe readiness is complete. This does **not** automatically authorize every ISTRIADE product to accept live payment.

Before a product accepts live payment, its product-specific checkout and commercial layer must still be validated for the applicable offering, including as relevant:

- exact product/service description;
- price and currency;
- fulfillment/delivery expectations;
- product-specific refund or cancellation terms;
- subscription frequency and renewal terms;
- trial or promotional conversion terms;
- privacy/terms acceptance where required;
- checkout/payment configuration;
- live payment end-to-end validation.

## Definition of done — achieved

- branch CI = PASS;
- legal/commercial policy adoption = APPROVED;
- remediation merged to `main`;
- Cloudflare production deployment = PASS;
- public route checks = PASS;
- `/commercial-policies/` deployed and verified;
- refund legacy redirects verified;
- support identity/address/currency disclosures deployed;
- Stripe-readiness regression checks = PASS;
- product-specific checkout/legal gates remain enforced before each product accepts live payment.

`WEB-LIVE-001 = CLOSED / COMPLETE`
