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

Status: RESEARCH COMPLETE / WYOMING FORMATION EVIDENCE VERIFIED / D-U-N-S LOOKUP INCONCLUSIVE / CRUNCHBASE SPECIFICATION PREPARED.

Research checkpoint: 2026-09-07 (America/Bogota).
Wyoming evidence checkpoint: 2026-09-07 (America/Bogota).
D-U-N-S lookup checkpoint: 2026-09-07 (America/Bogota).
Crunchbase preparation checkpoint: 2026-09-08 (America/Bogota).

The Phase B priority matrix is recorded in `docs/WEB-AUTHORITY-003-PHASE-B.md`.

### Wyoming Secretary of State / WyoBiz

Status: FORMATION EVIDENCE VERIFIED; CURRENT LIVE REGISTRY STATUS NOT AUTOMATICALLY REFRESHED.

Archived official Wyoming Secretary of State filing material for ISTRIADE GROUP LLC was recovered and cross-checked. It establishes:

- legal entity name: `ISTRIADE GROUP LLC`;
- entity type: Wyoming limited liability company;
- Original ID: `2026-001899814`;
- filing date/time: `February 20, 2026 at 10:19 AM`;
- Certificate of Organization issued by the Wyoming Secretary of State.

The exact official WyoBiz filing-details URL previously associated with this entity is:

`https://wyobiz.wyo.gov/Business/FilingDetails.aspx?eFNum=221140056241109139097063177145198096024083031121`

A fresh automated access attempt to that exact official URL reached WyoBiz but was blocked by the registry's human-verification/CAPTCHA challenge. Therefore this checkpoint does **not** claim a fresh automated confirmation of current live status, current registered agent, current principal/mailing address, or good-standing status.

Historical registered-agent and address values contained in the original filing are deliberately not restated here as current facts. Any later registered-agent or address changes must be confirmed from a fresh live registry view or other authoritative current record before publication or reuse.

The Wyoming official record is a high-value legal identity corroboration source, but its public URL is not yet being added to `Organization.sameAs`. `sameAs` remains reserved for externally verifiable identity URLs that are stable, clearly attributable and useful to crawlers/users.

### Dun & Bradstreet / D-U-N-S

Status: LOOKUP INCONCLUSIVE / NO PUBLIC EVIDENCE FOUND / REGISTRATION NOT AUTHORIZED.

A read-only lookup was performed for `ISTRIADE GROUP LLC` using public web search and Dun & Bradstreet's official lookup entry point.

Findings:

- public web search did not surface an identifiable D&B company profile or D-U-N-S number for `ISTRIADE GROUP LLC`;
- exact-name searches including Sheridan, Wyoming did not surface a D&B-indexed entity result;
- the official D&B D-U-N-S lookup redirects to `https://my.dnb.com/lookup` and requires client-side JavaScript, preventing a definitive automated lookup in the current environment;
- historical ISTRIADE formation/setup records reviewed in the project archive do not contain a previously assigned D-U-N-S number or evidence of a completed D&B registration;
- a dedicated D&B Commercial Graph integration exists in the broader tool ecosystem but is not available for this account/session.

Interpretation:

This checkpoint does **not** establish that ISTRIADE GROUP LLC lacks a D-U-N-S number. It establishes only that no verifiable existing number was found through the accessible public and archived sources. The correct status is therefore `LOOKUP INCONCLUSIVE`, not `NO D-U-N-S`.

No D-U-N-S request, registration, owner/officer verification, address submission, phone submission, business-credit enrollment or other D&B write action has been initiated.

A future D-U-N-S request, if needed, remains a separate Human Gate because it can create an external business identity record and may require current company and responsible-party data.

### Crunchbase

Status: DUPLICATE CHECK COMPLETE / PROFILE SPECIFICATION PREPARED / PUBLICATION NOT AUTHORIZED.

Public exact-name and site-restricted searches did not surface an existing Crunchbase organization profile attributable to ISTRIADE GROUP LLC. Similar-name results were unrelated companies and were not treated as duplicates.

Crunchbase currently requires a registered and socially authenticated user to contribute profile data and instructs users to search for duplicates before creating a new profile. Crunchbase also requires factual/objective content and recommends third-person descriptions, a canonical website, founded date, headquarters, 3–5 industries, and general company contact information.

A controlled proposed profile dataset is recorded in:

`docs/WEB-AUTHORITY-003-CRUNCHBASE.md`

The prepared dataset uses the canonical corporate identity and descriptions, the Wyoming formation date, Sheridan headquarters, corporate website, general contact email and canonical ISTRIADE brand asset. Founder/person identity, funding, employees/team, phone and social links are deliberately held unless separately authorized and factually supported.

No Crunchbase user registration, social authentication, profile creation, founder profile, public edit or publication has been performed. Publication remains a separate Human Gate.

### Remaining Phase B priority order

1. **OpenCorporates** — passive monitoring only. OpenCorporates does not support manual company addition and states that newly registered companies can take 30–90 days to appear.
2. **BBB** — optional / lower priority. A business profile can be managed, but accreditation is a paid, separately vetted program and is not required for corporate authority at this stage.

Explicit exclusion:

- **Google Business Profile** is not appropriate for the current digital-first ISTRIADE operating model because Google requires eligible businesses to make in-person contact with customers during stated hours. No Google Business Profile should be created solely for authority or SEO.
- Generic directory submissions, citation farms, bulk listing services, paid backlink schemes and synthetic review acquisition remain prohibited.

No new external profile or registration has been created in this research/preparation subphase. No external URL from Phase B is yet eligible for `Organization.sameAs`.

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
- WYOMING FORMATION EVIDENCE: VERIFIED
- WYOMING ORIGINAL ID: `2026-001899814`
- WYOMING CURRENT LIVE STATUS: NOT REFRESHED — AUTOMATED WyoBiz ACCESS BLOCKED BY CAPTCHA
- D-U-N-S LOOKUP: INCONCLUSIVE — NO PUBLIC/ARCHIVED ASSIGNMENT EVIDENCE FOUND
- D-U-N-S REGISTRATION: NOT AUTHORIZED
- CRUNCHBASE DUPLICATE CHECK: COMPLETE — NO PUBLIC EXACT MATCH FOUND
- CRUNCHBASE PROFILE SPECIFICATION: PREPARED
- CRUNCHBASE PROFILE CREATION/PUBLICATION: NOT AUTHORIZED
- CRUNCHBASE FOUNDER/PERSON IDENTITY: HELD / REQUIRES HUMAN GATE
- PHASE B PUBLIC/EXTERNAL EXECUTION: NOT AUTHORIZED BY THIS RESEARCH/PREPARATION SUBPHASE
- OPENCORPORATES: PASSIVE MONITORING
- GOOGLE BUSINESS PROFILE: EXCLUDED AS INAPPROPRIATE FOR DIGITAL-ONLY MODEL
- `Organization.sameAs`: NOT BUILT — correctly blocked until a canonical external identity URL exists
- PHASE C TOPICAL AUTHORITY: OPEN

This research/preparation subphase does not require a production deployment. Any future external profile creation, business-identity registration or `Organization.sameAs` website-code change remains separately gated.
