# WEB-TRUST-001 — Trust & Transparency Foundation

Status: BUILD / QA / NOT MERGED / NOT DEPLOYED
Date: 2026-09-05
Scope: ISTRIADE corporate website only

## Objective

Create one canonical corporate trust surface that consolidates verifiable ISTRIADE GROUP LLC identity, official channels, governance principles and published policy references without inventing certifications, security attestations or product-level commercial claims.

## Public route

`https://istriadegroup.com/trust/`

## Work included

1. Add `/trust/` with:
   - legal name;
   - business correspondence address;
   - official corporate domain;
   - customer-support email;
   - digital-first operating model;
   - Wyoming corporate location;
   - corporate vs product source-of-truth boundary;
   - human-governed AI operating principles;
   - links to Privacy Policy, Website Terms and Commercial Policies;
   - verification/contact guidance.
2. Add WebPage structured data connected to the canonical Organization and WebSite IDs.
3. Expose Trust & Transparency in the corporate footer without expanding the primary navigation.
4. Add `/trust/` to sitemap.xml and `llms.txt`.
5. Extend static-export verification to require the Trust route, core identity facts, policy links and stable schema ID.
6. Add guards against unsupported certification/compliance claims and product-commercial/internal-state leakage.

## Boundaries

This package does not:

- claim SOC, ISO, HIPAA or other certifications/attestations;
- create a security certification or compliance program;
- change the Privacy Policy, Website Terms or Commercial Policies;
- alter product pricing, checkout, payment, fulfillment or product terms;
- alter any product repository;
- activate any unreleased product URL;
- deploy Cloudflare production.

## Source-of-truth hierarchy

Corporate identity, company information, public portfolio discovery, general policies and corporate perspectives:

`https://istriadegroup.com/`

Product-specific capabilities, access conditions, pricing, checkout, product terms and operational detail:

verified product environment, when publicly available.

## Verification requirements

Before merge:

- `npm run check` PASS;
- `/trust/` static export PASS;
- canonical metadata and WebPage schema PASS;
- legal name, business address and customer-support email present;
- Privacy Policy, Website Terms and Commercial Policies linked;
- footer link present;
- sitemap and `llms.txt` include `/trust/`;
- no unsupported certification/compliance claims;
- no product pricing, checkout or internal lifecycle details;
- Cloudflare deployment dry-run PASS;
- HTTP smoke tests PASS;
- private visual QA PASS.

## Publication state

This document authorizes no production change by itself.

`WEB-TRUST-001 = BUILD / QA / NOT MERGED / NOT DEPLOYED`.
