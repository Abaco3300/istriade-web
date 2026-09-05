# DOAISEEME-READINESS-001 — Public & Commercial Readiness Review

Status: IN REVIEW
Product: DoesAISeeMe — AI Search Visibility Report
Portfolio role: FIRST REVENUE CANDIDATE
Primary ISTRIADE launch product remains: ISTRIADE SEO Agent

## 1. Canonical identity

- Canonical product name: **DoesAISeeMe**
- Commercial offer name in Stripe: **DoesAISeeMe — AI Search Visibility Report**
- Non-canonical variants such as `DoAISeeMe?` should not be used in product metadata, URLs or public copy.
- Product category: AI Search Visibility
- Delivery model: manual / semi-manual customized digital diagnostic

## 2. Current landing and deployment reality

Previously recorded landing:

- `https://doesaiseeme-mvp.vercel.app`

Current verification result on 2026-09-05:

- the previously recorded Vercel project ID returns 404;
- the connected Vercel team does not list a `doesaiseeme` project;
- therefore the old Vercel deployment is **NOT VERIFIED** and must not be treated as the canonical production destination.

## 3. Repository / build environment

Previously recorded source repository:

- `Abaco3300/doesaiseeme`

Current GitHub connector cannot resolve that repository. Therefore:

- historical repository existence is recorded;
- current connected-access verification is **NOT VERIFIED**;
- controlled migration Option B has been approved;
- the replacement product environment must remain independent from the corporate `istriade-web` repository.

ISTRIADE corporate source of truth:

- `Abaco3300/istriade-web`

This readiness branch stages a disabled Product Registry entry only. It does not publish DoesAISeeMe.

## 4. Canonical public destination

Target architecture:

- Corporate discovery: `https://istriadegroup.com/products/`
- Intended product environment: `https://doesaiseeme.istriadegroup.com`

Rationale: the corporate repository explicitly separates corporate product discovery from product-level commercial truth and prohibits product pricing / checkout from being embedded in the corporate website. A dedicated ISTRIADE subdomain preserves that boundary while making DoesAISeeMe visibly part of ISTRIADE.

Current destination state: **APPROVED TARGET / NOT DEPLOYED / NOT DNS-VERIFIED**.

## 5. Stripe Live verified state

Verified 2026-09-05:

- Product ID: `prod_VCZUG1kBuvIGMu`
- Product: `DoesAISeeMe — AI Search Visibility Report`
- Active product: YES
- Type: service
- Default price: `price_1UCALBCFnK3sr8WzItlZvl5h`
- Price: USD 19.00
- Billing: one-time
- Payment Link: `plink_1UCALVCFnK3sr8WzAGqrqqf8`
- Live checkout URL: `https://buy.stripe.com/14A3cu5ev3eQ8yDg6MejK00`
- Payment Link current state: **INACTIVE**
- Stripe Tax: OFF
- Market policy metadata: US validation only
- Fulfillment metadata: manual_or_semi_manual

Governance target for this readiness review:

- LIVE checkout must remain HOLD until all readiness gates pass.
- An existing Stripe product / price / Payment Link is not equivalent to commercial authorization.

## 6. Checkout data capture

Current Payment Link captures:

- business name;
- billing address;
- email through Checkout;
- website / domain;
- main product or service;
- target market / location.

Hosted confirmation states report delivery by email within 24 hours.

Fiscal-location requirement before external charging:

- `business_establishment_country=US` is not sufficient for US state-level tax governance;
- buyer country must be known before charge;
- buyer state must be known before charge;
- billing address capture remains required;
- the tax decision for the transaction must be based on the buyer jurisdiction plus applicable nexus and product/service taxability rules;
- an API/search failure, absent tax configuration or unresolved classification must never silently default to a taxable/non-taxable conclusion.

## 7. Legal, refund / cancellation and support

ISTRIADE's new corporate Commercial Policies source includes:

- product/service fulfillment timing governed by the relevant product / checkout;
- cancellation/refund before digital delivery or substantive work begins when no product-specific rule overrides it;
- reduced or unavailable refund after substantive work / delivery, subject to applicable law;
- support for billing, refund, cancellation, access and delivery questions;
- support email: `contact@istriadegroup.com`.

Required before external sale:

1. Ensure the new Commercial Policies are the deployed/current legal source.
2. DoesAISeeMe checkout / order confirmation must link or clearly point to applicable ISTRIADE legal and commercial policies.
3. Product-specific wording must clarify customized diagnostic service, 24-hour target delivery, point-in-time nature and no guaranteed AI recommendation outcome.
4. Cancellation rule must be operationally clear: cancellation/refund request before substantive analysis begins; after analysis begins, refund availability may be limited subject to law and case review.

## 8. Intake and fulfillment

Validated:

- Tally form: `DoesAISeeMe — Customer Intake`
- Form ID: `5B79VZ`
- Published intake URL: `https://tally.so/r/5B79VZ`
- Tally Free plan sufficient for MVP
- completed test submission successfully retrieved

Fulfillment architecture consolidated as DoesAISeeMe Customer Fulfillment System v1.0:

PAYMENT -> INTAKE -> INTAKE QA -> NORMALIZED BUSINESS PROFILE -> QUERY PACK -> 48 OBSERVATIONS -> SCORING -> EVIDENCE PACK -> EXACTLY 5 PRIORITY ACTIONS -> 8-PAGE PDF -> QA -> EMAIL DELIVERY -> DELIVERY VERIFICATION

Validated E2E controlled flow:

- live landing to live Checkout;
- real controlled founder payment;
- customer/order data capture;
- report generation;
- 8-page PDF QA;
- email delivery with attachment verification;
- controlled founder refund.

The controlled founder purchase **does not count as external market validation**.

## 9. Internal test vs external real sale

Controlled founder test proves infrastructure / fulfillment capability only.

External sale additionally requires:

- unknown third-party paying customer;
- correct customer-facing legal / commercial terms;
- canonical verified public product URL;
- order-to-intake handoff that a normal customer can complete without founder intervention;
- intake semantic QA before analysis;
- support/refund process usable by external customers;
- buyer state available before charge for US state-level tax determination;
- applicable nexus/taxability decision resolved for the transaction;
- no internal/test language or founder-only assumptions;
- fulfillment time and economics measured on a real external order.

Market validation target remains:

- unknown paid customers: 0 / 3

## 10. Readiness gates before LIVE_PAYMENT

### GATE R1 — Identity
PASS when canonical public name, product description and metadata are consistent.
Current: PARTIAL — public name is clear; Stripe metadata naming should be normalized.

### GATE R2 — Product destination
PASS when `doesaiseeme.istriadegroup.com` (or an explicitly superseding canonical destination) resolves, is deployed and is verified.
Current: FAIL / BLOCKING.

### GATE R3 — Corporate Product Registry
PASS when DoesAISeeMe record is approved for public display and its destination is verified.
Current: STAGED / DISABLED.

### GATE R4 — Legal & commercial terms
PASS when current ISTRIADE legal/commercial policy deployment is verified and product-specific pre-purchase disclosure is complete.
Current: PARTIAL / BLOCKING.

### GATE R4A — US state tax determination
PASS when the checkout/tax path can determine the buyer's US state before charge and a documented transaction decision can be made using buyer jurisdiction, ISTRIADE nexus status and DoesAISeeMe taxability for that jurisdiction.

Minimum technical conditions:

- `BUYER_COUNTRY_CAPTURE = REQUIRED`
- `BUYER_STATE_CAPTURE = REQUIRED`
- `BILLING_ADDRESS_CAPTURE = REQUIRED`
- `STATE_TAXABILITY_RULE = RESOLVED`
- `NEXUS_RULE = RESOLVED`
- `TAX_DECISION_BEFORE_CHARGE = REQUIRED`

Current: **NOT YET RESOLVED / BLOCKING**.

Current tax posture must not be overstated:

- Wyoming/current-service classification: **LIKELY NON-TAXABLE FOR CURRENT CLASSIFICATION**, not final legal opinion;
- US multi-state taxability: **NOT YET RESOLVED**;
- `LIVE_PAYMENT = HOLD` until this gate and the other readiness gates pass.

### GATE R5 — Checkout
PASS when checkout points from the canonical product destination, captures required purchase data, displays correct scope/delivery disclosure and has no test/internal copy.
Current: FUNCTIONALLY VALIDATED but activation must remain HOLD.

### GATE R6 — Intake
PASS when post-purchase intake is reachable from the external customer journey and submission retrieval works.
Current: TECHNICALLY PASS; customer-journey handoff still to connect.

### GATE R7 — Fulfillment
PASS when the controlled fulfillment pipeline remains reproducible with QA requirements and support process defined.
Current: PASS for controlled E2E; first external execution not yet observed.

### GATE R8 — Commercial activation
PASS only after R1-R7 plus R4A are satisfied and Founder explicitly authorizes LIVE_PAYMENT.
Current: NOT AUTHORIZED by this readiness review.

## 11. Conditions for public Product Registry inclusion

DoesAISeeMe may be enabled in the public `istriadegroup.com` Product Registry when all are true:

- canonical name = DoesAISeeMe;
- canonical ISTRIADE-owned destination is deployed and verified;
- no broken/unverified legacy Vercel URL is used;
- public summary accurately reflects the current $19 customized diagnostic offer without overstating automation;
- legal/commercial policy path is deployed and applicable;
- support email is operational;
- intake path is operational;
- checkout state matches governance (HOLD until authorization, ACTIVE only after explicit Founder gate);
- state-level US tax determination gate R4A is resolved before charging external customers;
- controlled E2E remains PASS;
- Product Registry entry is explicitly enabled (`cardEnabled=true`) only at the authorized publication step.

## 12. Current consolidated status

- FIRST REVENUE CANDIDATE: YES
- PRIMARY ISTRIADE LAUNCH PRODUCT: NO — remains ISTRIADE SEO Agent
- CONTROLLED MIGRATION OPTION B: APPROVED
- PRODUCT BUILD: EXISTS / controlled fulfillment proven
- OLD VERCEL DESTINATION: NOT VERIFIED
- OLD PRODUCT REPOSITORY ACCESS: NOT VERIFIED
- CANONICAL TARGET: `https://doesaiseeme.istriadegroup.com`
- STRIPE LIVE PRODUCT / PRICE / LINK: VERIFIED
- LIVE PAYMENT LINK: INACTIVE
- US MULTI-STATE TAXABILITY: NOT YET RESOLVED
- CUSTOMER INTAKE: PASS
- CONTROLLED E2E: PASS
- EXTERNAL CUSTOMER VALIDATION: 0 / 3
- PUBLIC PRODUCT REGISTRY: STAGED, DISABLED
- PUBLIC/COMMERCIAL READINESS: NOT YET PASS
- LIVE_PAYMENT AUTHORIZATION: HOLD
