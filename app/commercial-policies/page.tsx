import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Policies — ISTRIADE GROUP LLC",
  description: "Payment, fulfillment, refund, cancellation and customer-support policies for purchases made directly from ISTRIADE GROUP LLC.",
  path: "/commercial-policies/",
});

export default function CommercialPoliciesPage() {
  return <section className="legal-page"><div className="container legal-container"><Breadcrumb label="Commercial Policies" /><p className="eyebrow">Commercial</p><h1>Commercial Policies</h1><p className="legal-updated">Last updated: September 5, 2026</p>
    <h2>1. Scope</h2><p>These Commercial Policies apply to purchases made directly from <strong>{site.legalName}</strong> when a product-specific order page, proposal, statement of work, subscription agreement or other written agreement does not provide more specific commercial terms.</p><p>Where product-specific terms are presented before purchase, those terms control for that product or service to the extent they differ from this general policy.</p>

    <h2>2. Products, Services and Delivery</h2><p>ISTRIADE provides online digital business services and develops software and SaaS products. Depending on the offering, delivery may include digital access, reports, analysis, implementation work, configured workflows, software access, files, professional services or other digital deliverables.</p><p>The scope, expected deliverables and applicable fulfillment or delivery timing are described in the relevant product page, checkout, proposal, order confirmation, onboarding flow or written agreement.</p><p>ISTRIADE does not sell or ship physical goods through the corporate website unless a specific offer expressly states otherwise. Physical shipping and merchandise return policies therefore do not apply to ordinary ISTRIADE software and digital-service purchases.</p>

    <h2>3. Pricing, Currency and Taxes</h2><p>Prices and charges are shown before payment in the applicable product page, checkout, invoice, proposal or order document. Unless another currency is expressly identified, ISTRIADE prices are denominated in <strong>{site.defaultCurrency}</strong>.</p><p>Applicable taxes, fees or other required charges may be added where required by law or shown during checkout or invoicing.</p>

    <h2>4. Payment Processing</h2><p>Payments may be processed by Stripe or another authorized payment service provider. Payment providers process payment-card and other payment credentials under their own security and privacy practices.</p><p>The ISTRIADE corporate website is not intended to store full payment-card numbers or card security codes.</p>

    <h2>5. Refunds</h2><p>Refund eligibility depends on the product or service purchased and the stage of delivery. Any product-specific refund terms disclosed before purchase take precedence.</p><p>If no more specific refund policy applies, a customer may request cancellation and a refund before digital delivery has occurred or substantive service work has begun. After work has started, access has been provided or digital deliverables have been supplied, any refund may be reduced or unavailable to the extent the product or service has already been delivered, except where applicable law requires otherwise.</p><p>Duplicate charges, clear billing errors or charges that a customer reasonably believes were unauthorized should be reported promptly to ISTRIADE so they can be investigated.</p><p>Approved refunds are normally returned through the original payment method. Processing time after approval can depend on the payment provider and the customer&apos;s financial institution.</p>

    <h2>6. Subscription and Recurring-Service Cancellations</h2><p>Where an ISTRIADE product or service renews automatically, the applicable checkout or product terms identify the billing frequency and renewal conditions before purchase.</p><p>Unless product-specific terms state otherwise, a customer may cancel a recurring subscription before its next renewal to prevent future recurring charges. Cancellation normally takes effect at the end of the already-paid billing period. Amounts already charged are not automatically prorated or refunded solely because the customer cancels during a billing period, except where applicable law or product-specific terms require otherwise.</p>

    <h2>7. Trials, Discounts and Promotions</h2><p>Any free trial, introductory price, discount, coupon or promotional offer is subject to the conditions displayed with that offer. Where a trial converts to a paid subscription, the applicable offer or checkout should disclose the trial period, price and recurring billing terms before the customer enrolls.</p>

    <h2>8. Customer Support and Billing Questions</h2><p>For payment, billing, refund, cancellation, access or delivery questions, contact <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. Include the product or service name and the email address used for the purchase so the request can be located efficiently.</p><p>Business correspondence address:<br /><strong>{site.legalName}</strong><br />{site.businessAddressText}</p>

    <h2>9. Disputes</h2><p>Customers are encouraged to contact ISTRIADE promptly if they believe a payment is incorrect or a purchased service has not been delivered as described. ISTRIADE will review the available order and delivery information and respond through the appropriate support channel.</p><p>Nothing in this policy limits any dispute, chargeback or consumer right that cannot lawfully be waived.</p>

    <h2>10. Legal and Geographic Restrictions</h2><p>ISTRIADE products and services are offered only where they may lawfully be provided. Availability may be limited where required by sanctions, export controls, payment-network rules, local law or other legal or regulatory restrictions.</p>

    <h2>11. Changes</h2><p>ISTRIADE may update these Commercial Policies as its products, payment practices or legal obligations change. The version applicable to a transaction is subject to any product-specific or transaction-specific terms presented at the time of purchase.</p>

    <h2>12. Contact</h2><p><strong>{site.legalName}</strong><br />{site.businessAddressText}<br /><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a><br />Official website: istriadegroup.com</p>
  </div></section>;
}
