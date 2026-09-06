# WEB-AUTHORITY-002 — Corporate Search Authority Hygiene

## Objective

Close the objective medium-severity metadata gaps identified after WEB-INDEXNOW-001 without changing corporate positioning, commercial claims, DNS, indexing infrastructure, or deployment policy.

## Authorized scope

- Add an explicit canonical URL for the corporate home page.
- Preserve page-specific canonical URLs for internal routes.
- Add the existing corporate Open Graph image to `Article` structured data for all Insight articles.
- Extend source and static-export metadata guards so both requirements are regression-protected.

## Explicitly out of scope

- No DNS changes.
- No sitemap resubmission.
- No IndexNow resubmission as part of this build.
- No product or commercial-content changes.
- No production deployment under the BUILD authorization alone.
- No broad title, meta-description, content-length, or image-alt rewrites based solely on heuristic low-severity audit thresholds.

## Evidence baseline

The live on-page audit performed after WEB-INDEXNOW-001 found:

- 15/15 canonical URLs HTTP 200;
- 15/15 indexable;
- 0 critical issues;
- 0 high issues;
- 4 medium issues:
  - home missing explicit canonical tag;
  - three Insight articles missing `image` in `Article` JSON-LD.

## Implementation

- Root metadata exposes `https://istriadegroup.com/` as the home canonical.
- Existing `pageMetadata()` continues to provide route-specific canonicals for internal pages.
- Insight `Article` JSON-LD uses `https://istriadegroup.com/opengraph-image` as its image URL.
- `metadata-distribution-guard.mjs` validates the source contract.
- `metadata-export-guard.mjs` validates the generated home canonical, Insight canonicals, and Article image field in the static export.

## Lifecycle state

At creation of this document:

- APPROVED: YES — BUILD only
- DESIGNED: YES
- BUILT: YES
- TESTED: PENDING CI
- VALIDATED: PENDING CI / review
- MERGED: NO
- DEPLOYED: NO
