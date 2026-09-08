# WEB-AUTHORITY-003 — External Entity & Citation Foundation

## Objective

Strengthen external corroboration of ISTRIADE GROUP LLC as a real, coherent corporate entity without manufacturing backlinks, using low-risk official or controlled profiles and citations that point back to the canonical corporate website.

## Baseline

Search/indexing status at opening of this block:

- Google indexing tracker: 15 canonical URLs tracked; 1 indexed; 10 not indexed; 4 pending; 0 errors; 0 warnings.
- Google crawl freshness: 14 of 15 tracked URLs had not yet been crawled.
- Bing crawl stats: no daily rows yet for the newly released site.
- Bing inbound-link rows: 0.
- On-page technical state: production pages audited after WEB-AUTHORITY-002 were HTTP 200, indexable, and free of critical/high/medium issues.

Interpretation: the principal near-term constraint is external discovery and corroboration rather than a technical indexability defect.

## Internal entity state

The corporate website already exposes a stable `Organization` entity at:

`https://istriadegroup.com/#organization`

with legal name, alternate name, canonical URL, logo, contact email, founding date, postal address, contact point, description and topical `knowsAbout` values. Products, Insights, Trust and Article structured data connect back to the same corporate identity graph.

No replacement entity architecture is required.

## Phase A — Controlled entity anchors

### GitHub

Status: COMPLETE / VERIFIED.

The public repository README prominently identifies this repository as the official corporate website source for ISTRIADE GROUP LLC and exposes canonical links to the company website, public corporate surfaces and contact channel.

Repository-level GitHub About metadata was applied and independently verified:

- Description: `Official corporate website of ISTRIADE GROUP LLC — AI software, intelligent systems and specialized digital services for business.`
- Website: `https://istriadegroup.com/`
- Topics: `artificial-intelligence`, `business-automation`, `search-visibility`, `business-intelligence`, `nextjs`, `cloudflare-workers`
- Repository visibility remained public.

The README/entity-anchor work was merged through PR #15. The GitHub controlled corporate anchor is complete.

### LinkedIn

Status: BLOCKED BY LINKEDIN PLATFORM ELIGIBILITY / DEFERRED.

Public search did not surface a verified official ISTRIADE GROUP LLC company-page URL. A creation attempt was then made from the authenticated LinkedIn account, but LinkedIn blocked Company Page creation because the personal profile did not yet satisfy its connection/eligibility requirement.

No attempt will be made to circumvent that restriction. The next action is deferred until LinkedIn permits Company Page creation through normal platform eligibility.

Once creation is permitted:

1. Create or verify the official LinkedIn company page for `ISTRIADE GROUP LLC`.
2. Set its website to `https://istriadegroup.com/`.
3. Keep legal/company naming, location and description consistent with the corporate website.
4. Obtain the canonical public LinkedIn company URL.
5. Only then propose adding that URL to `Organization.sameAs`.

No LinkedIn search/directory URL is eligible for `sameAs`.

## Phase B — External corroboration

Status: RESEARCH COMPLETE / EXECUTION GATED.

Research checkpoint: 2026-09-07 (America/Bogota).

The Phase B priority matrix is recorded in `docs/WEB-AUTHORITY-003-PHASE-B.md`.

Priority order:

1. **Wyoming Secretary of State / WyoBiz official entity record** — highest-value legal identity corroboration. Automated retrieval is currently blocked by the registry's human-verification challenge, so the canonical public filing detail must be captured manually/read-only before it can be used as a verified external identity reference.
2. **Dun & Bradstreet / D-U-N-S** — high-value business identity layer. First perform a D-U-N-S lookup. If no record exists, any D-U-N-S request is a separate external-registration gate because it may require owner/officer verification, address, phone, legal structure and employee information.
3. **Crunchbase** — appropriate controlled technology-company profile. Public search did not surface an existing ISTRIADE profile. Crunchbase permits registered, socially authenticated users to create company profiles after checking for duplicates. Profile creation is a separate public-publication gate.
4. **OpenCorporates** — passive monitoring only. OpenCorporates does not support manual company addition and states that newly registered companies can take 30–90 days to appear.
5. **BBB** — optional / lower priority. A business profile can be managed, but accreditation is a paid, separately vetted program and is not required for corporate authority at this stage.

Explicit exclusion:

- **Google Business Profile** is not appropriate for the current digital-first ISTRIADE operating model because Google requires eligible businesses to make in-person contact with customers during stated hours. No Google Business Profile should be created solely for authority or SEO.
- Generic directory submissions, citation farms, bulk listing services, paid backlink schemes and synthetic review acquisition remain prohibited.

No new external profile or registration has been created in this research subphase. No external URL from Phase B is yet eligible for `Organization.sameAs`.

## Phase C — Topical authority

Status: OPEN FOR CONTROLLED EXPANSION.

Editorial growth should proceed by coherent topic clusters rather than mass publishing. Priority clusters:

- AI Search Visibility;
- Human-Governed AI Operations;
- AI Decision Systems;
- Business Automation;
- Search Intelligence;
- Commerce Intelligence.

New articles should deepen existing corporate expertise signals and internally link to the relevant canonical Insights, capability and product surfaces.

## Reconciled lifecycle state

- IDENTIFIED: YES
- PROPOSED: YES
- APPROVED: YES
- BASELINE: COMPLETE
- GITHUB README ANCHOR: COMPLETE
- GITHUB ABOUT METADATA: COMPLETE / VERIFIED
- PR #15: MERGED
- GITHUB CONTROLLED ENTITY ANCHOR: COMPLETE
- LINKEDIN COMPANY PAGE: NOT CREATED — BLOCKED BY LINKEDIN PLATFORM ELIGIBILITY
- PHASE B RESEARCH: COMPLETE
- PHASE B PUBLIC/EXTERNAL EXECUTION: NOT AUTHORIZED BY THIS RESEARCH SUBPHASE
- WYOMING OFFICIAL RECORD: MANUAL READ-ONLY VERIFICATION PENDING
- D-U-N-S: LOOKUP PENDING / REGISTRATION NOT AUTHORIZED
- CRUNCHBASE: PROFILE NOT CREATED / PUBLICATION NOT AUTHORIZED
- OPENCORPORATES: PASSIVE MONITORING
- GOOGLE BUSINESS PROFILE: EXCLUDED AS INAPPROPRIATE FOR DIGITAL-ONLY MODEL
- `Organization.sameAs`: NOT BUILT — correctly blocked until a canonical external identity URL exists
- PHASE C TOPICAL AUTHORITY: OPEN

This research/documentation subphase does not require a production deployment. Any future external profile creation, business-identity registration or `Organization.sameAs` website-code change remains separately gated.