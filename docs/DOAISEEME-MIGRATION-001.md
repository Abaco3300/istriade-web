# DOAISEEME-MIGRATION-001 — Controlled Migration Record

Status: AUTHORIZED / BUILD PREPARED / NOT PUBLISHED
Date: 2026-09-05

## Founder authorization

Option B — Controlled Migration is approved.

DoesAISeeMe is authorized to be reconstructed as a new ISTRIADE-owned product environment while preserving validated product decisions and assets:

- canonical product name: DoesAISeeMe;
- commercial offer: DoesAISeeMe — AI Search Visibility Report;
- positioning and core landing copy;
- USD 19 one-time validation price;
- public sample report;
- Tally customer intake;
- Stripe Checkout configuration;
- manual/semi-manual fulfillment architecture;
- controlled E2E findings and readiness gates.

Canonical target destination:

`https://doesaiseeme.istriadegroup.com`

## Commercial activation guard

The migration authorization does NOT authorize commercial publication or LIVE_PAYMENT.

Current rules:

- LIVE_PAYMENT = HOLD;
- Stripe Payment Link = INACTIVE;
- ISTRIADE Product Registry record = STAGED / DISABLED;
- no DNS change until product destination deployment and QA pass;
- no Product Registry activation until canonical destination is verified;
- no external commercial launch until DOAISEEME-READINESS-001 gates R1-R7 pass and Founder explicitly authorizes R8.

## New product environment build

A standalone static product package has been reconstructed outside the corporate web source tree. It includes:

- `index.html` — landing page;
- `styles.css` — responsive product styling;
- `config.js` — canonical product configuration and checkout activation guard;
- `site.js` — guarded checkout behavior;
- `sample-report.pdf` — canonical fictional public sample report;
- `robots.txt`;
- `sitemap.xml`;
- `vercel.json`;
- `README.md` with deployment and activation policy.

The checkout URL is preserved in configuration, but `checkoutActive=false`. This allows pre-publication QA without enabling payment from the product landing.

## Verified inputs preserved

- Stripe Live product: `prod_VCZUG1kBuvIGMu`;
- Stripe Live price: `price_1UCALBCFnK3sr8WzItlZvl5h` = USD 19 one-time;
- Stripe Payment Link: `plink_1UCALVCFnK3sr8WzAGqrqqf8`;
- Payment Link state after readiness reconciliation: inactive / HOLD;
- Tally intake form: `5B79VZ`;
- intake URL: `https://tally.so/r/5B79VZ`;
- support: `contact@istriadegroup.com`;
- fulfillment: manual_or_semi_manual;
- market-validation policy: U.S. businesses initially.

## QA state

Validated in the prepared package:

- required canonical copy present;
- canonical target URL encoded;
- payment CTA disabled while HOLD;
- sample report present and readable as an HTTP asset;
- legal/support destination links present;
- robots and sitemap prepared;
- responsive CSS included;
- no new product claim of official platform scoring or guaranteed AI recommendation.

Not yet PASS:

- browser visual QA in a deployable preview environment;
- independent GitHub product repository creation / source publication;
- Vercel product project creation;
- preview deployment verification;
- canonical subdomain DNS configuration;
- final public Product Registry activation;
- LIVE_PAYMENT activation.

## Repository boundary

The ISTRIADE corporate repository must remain the corporate discovery layer. Product pricing, checkout and product-specific commercial truth stay in the separate DoesAISeeMe product environment. The corporate Product Registry record remains disabled until the product destination is verified and publication is separately authorized.

## Next material gate

A separate source repository/project must be created or another explicitly approved independent deployment source must be provided before the prepared product package can be deployed and visually verified.
