# WEB-INDEXNOW-001 — IndexNow verification foundation

## Purpose

Prepare the ISTRIADE corporate website to validate IndexNow ownership through the protocol-required public key file, without changing DNS, product systems, or commercial behavior.

## Current state

- Bing Webmaster Tools property: verified and connected through GSC Wizard.
- Bing sitemap: `https://istriadegroup.com/sitemap.xml` — Success, 15 URLs.
- Bing API: connected.
- IndexNow submission before this change: blocked because no IndexNow key is configured for the property.

## Implementation

- Public IndexNow key file: `/54b3b5449cab247db222bc6347df4bc3.txt`.
- The file contains exactly the same key value required by the IndexNow protocol.
- `scripts/indexnow-guard.mjs` validates source-level key format and filename/content identity.
- `scripts/indexnow-export-guard.mjs` validates that the key file survives the Next.js static export unchanged.
- Both guards are integrated into `npm run check` / `npm run deploy:check`.

## Boundaries

This block does **not**:

- configure the key in GSC Wizard;
- submit any URL to IndexNow;
- modify DNS or Cloudflare configuration;
- deploy production;
- change corporate content or product behavior.

## Required sequence after merge

1. Deploy the approved corporate release.
2. Verify `https://istriadegroup.com/54b3b5449cab247db222bc6347df4bc3.txt` returns HTTP 200 with the exact key content.
3. Configure that same public key in GSC Wizard IndexNow settings.
4. Submit only current/newly changed URLs to IndexNow.
5. Verify the submission response/history.

## Status

- DESIGNED: YES
- BUILT: YES
- TESTED: pending CI
- VALIDATED: pending CI
- MERGED: NO
- DEPLOYED: NO
- INDEXNOW_CONFIGURED: NO
- INDEXNOW_SUBMITTED: NO
