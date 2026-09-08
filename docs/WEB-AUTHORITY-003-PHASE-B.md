# WEB-AUTHORITY-003 — Phase B External Corroboration Research

Research checkpoint: 2026-09-07 (America/Bogota)

## Objective

Identify legitimate external identity and authority anchors for ISTRIADE GROUP LLC without manufacturing citations, backlinks, reviews or physical-presence claims.

This document records research and prioritization only. It does not authorize public profile creation, business-identity registration, paid accreditation, website-code changes or `Organization.sameAs` additions.

## Evaluation criteria

A Phase B anchor should satisfy most of the following:

- independently controlled or independently verifiable;
- relevant to a U.S. technology/business entity;
- capable of identifying the legal entity consistently;
- capable of referencing `https://istriadegroup.com/` where appropriate;
- low risk of creating misleading location, size, customer or launch claims;
- durable enough to function as an entity corroboration source;
- not dependent on artificial reviews, reciprocal links or paid backlink placement.

## Priority matrix

### P1 — Wyoming Secretary of State / WyoBiz

**Category:** official legal registry  
**Priority:** highest  
**Current state:** canonical detail not independently captured  
**Action type:** read-only verification

The Wyoming Secretary of State business filing search is the strongest legal corroboration source for a Wyoming LLC. The public search endpoint currently presents a human-verification challenge to automated access. That blocks automated extraction; it does not indicate that the company record is absent.

Next action:

1. Open the official WyoBiz filing search manually.
2. Search exact legal name `ISTRIADE GROUP LLC`.
3. Capture the exact public entity detail URL or other stable public identifier if the registry exposes one.
4. Verify legal name, entity type, status and filing identity against internal corporate records.
5. Do not expose registered-agent or correspondence details beyond what is already legitimately public and necessary.

No website `sameAs` should be added until a stable canonical public identity URL is verified.

Official search entry point:
`https://wyobiz.wyo.gov/Business/FilingSearch.aspx`

### P2 — Dun & Bradstreet / D-U-N-S

**Category:** business identity / commercial data  
**Priority:** high  
**Current state:** D-U-N-S status not established  
**Action type:** lookup first; external registration only if separately authorized

Dun & Bradstreet describes the D-U-N-S Number as a unique nine-digit business identifier and provides a lookup tool. If no existing D-U-N-S Number exists, D&B allows a verified business owner/officer to request one at no charge; standard processing may take up to 30 business days.

Potential requested data includes legal name, business address, business phone, owner/president/CEO, legal structure, founding year, industry and employee count. Because those fields can create a durable external business record, a D-U-N-S request is not treated as a routine reversible website action.

Next action:

1. Perform a lookup for `ISTRIADE GROUP LLC` using exact business details.
2. If found, verify the profile before using it as an authority anchor.
3. If not found, stop at a Human Gate before requesting a new D-U-N-S Number.

Official references:
- `https://www.dnb.com/en-us/smb/duns/duns-lookup.html`
- `https://www.dnb.com/en-us/smb/duns/get-a-duns.html`

### P3 — Crunchbase

**Category:** technology/company profile  
**Priority:** medium-high  
**Current state:** no ISTRIADE company profile surfaced in public web search  
**Action type:** public profile creation; Human Gate required

Crunchbase states that registered and socially authenticated users can create organization profiles after first checking for an existing duplicate. Appropriate profile fields include company logo, founded date, website/social links, descriptions, headquarters, industries and founders.

This is a relevant technology-company entity surface, but creation publishes company and founder information to an external database. It must therefore be separately authorized.

If authorized, the profile must:

- use legal/company naming consistently;
- use `https://istriadegroup.com/` as the website;
- avoid funding, employee, customer, traction or launch claims that are not externally supportable;
- avoid presenting a registered-agent/mailroom address as an operational office;
- use only accurate industries and descriptions already supported by the corporate website.

Official creation guidance:
`https://support.crunchbase.com/hc/en-us/articles/115011823988-How-do-I-create-a-Crunchbase-profile`

### P4 — OpenCorporates

**Category:** corporate registry aggregator  
**Priority:** passive / medium  
**Current state:** no ISTRIADE profile surfaced in current public search  
**Action type:** monitor only

OpenCorporates states that it does not currently provide a process to manually add a company. Newly registered companies can take approximately 30–90 days to appear automatically.

Therefore:

- do not create substitutes or duplicates;
- do not use third-party submission services claiming to force inclusion;
- re-check after the normal ingestion window;
- if a profile appears, verify its source jurisdiction and details before treating it as a corroborating reference.

Official guidance:
`https://knowledge.opencorporates.com/knowledge-base/how-can-i-add-my-company-details-to-your-website/`

### P5 — Better Business Bureau

**Category:** consumer/business trust directory  
**Priority:** optional / lower  
**Current state:** not pursued  
**Action type:** optional external profile; accreditation separately paid and vetted

BBB allows businesses to manage profiles and separately offers paid accreditation subject to its review standards. At the current stage this is not required to establish ISTRIADE's core corporate identity.

Do not purchase BBB accreditation merely as an SEO/backlink mechanism.

Official references:
- `https://www.bbb.org/account/register/business`
- `https://www.bbb.org/apply`

## Explicitly excluded — Google Business Profile

Google's current eligibility guidance requires a business to make in-person contact with customers during its stated hours, with limited exceptions. ISTRIADE is represented on its corporate website as digital-first. A Google Business Profile created solely to obtain a local citation would therefore be inappropriate and potentially inconsistent with Google's rules.

Decision:

`GOOGLE BUSINESS PROFILE = DO NOT CREATE UNDER CURRENT OPERATING MODEL`

Official guidance:
`https://support.google.com/business/answer/13763036`

## Existing external corroboration retained

### GitHub

Official controlled repository authority anchor: COMPLETE / VERIFIED.

### LinkedIn

Personal-directory search results currently associate `Jose Angel Gomez` in Sheridan, WY with `Istriade Group LLC`, but no canonical official company-page URL is verified. LinkedIn Company Page creation remains blocked by LinkedIn's own account eligibility requirement.

Search-directory results are corroborative signals only and are not eligible for `Organization.sameAs`.

## Rejected tactics

Do not use:

- bulk business-directory packages;
- citation farms;
- reciprocal backlink networks;
- paid guest-post backlinks;
- fabricated press releases;
- synthetic customer reviews;
- misleading local-office listings;
- duplicate company profiles;
- inflated employee, customer, funding, revenue or traction claims.

## Execution sequence

Recommended next sequence:

1. **Wyoming official record** — manual read-only verification and canonical URL capture.
2. **D-U-N-S lookup** — read-only lookup; stop before registration if absent.
3. **Crunchbase profile** — separate Human Gate before public creation.
4. **OpenCorporates** — passive re-check after ingestion window.
5. **LinkedIn** — resume only when LinkedIn itself removes the eligibility block.
6. **`Organization.sameAs`** — consider only after one or more canonical external identity URLs are independently verified.

## Phase B lifecycle

- RESEARCH: COMPLETE
- PRIORITIZATION: COMPLETE
- EXTERNAL PUBLICATION: NOT PERFORMED
- WYOMING RECORD VERIFICATION: PENDING MANUAL READ
- D-U-N-S LOOKUP: PENDING
- D-U-N-S REGISTRATION: NOT AUTHORIZED
- CRUNCHBASE PROFILE CREATION: NOT AUTHORIZED
- OPENCORPORATES: PASSIVE MONITORING
- BBB: OPTIONAL / DEFERRED
- GOOGLE BUSINESS PROFILE: EXCLUDED
- `Organization.sameAs`: NOT ELIGIBLE YET
