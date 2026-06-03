import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — DMD GOLD PROSPERITY PVT LTD',
  description:
    'Read the Terms & Conditions for the DMD GOLD Software by DMD GOLD PROSPERITY PVT LTD. Covers licensing, pricing, refund policy, support, and more.',
  alternates: {
    canonical: 'https://www.dmdgold.com/terms-and-conditions',
  },
};

/* ── reusable heading ── */
function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="flex items-baseline gap-3 text-2xl md:text-3xl font-serif text-[#2C2C2C] mt-16 mb-6">
      <span className="text-[#C6A87C] font-bold text-lg">{number}.</span>
      {title}
    </h2>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <main className="w-full bg-white">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="pt-40 pb-24 px-6 md:px-12 text-center relative overflow-hidden bg-[#FAF9F6]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C6A87C]/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#C6A87C]/5 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
            Legal
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] leading-tight">
            Terms &amp;{' '}
            <span className="italic text-[#C6A87C]">Conditions</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            DMD GOLD Software |{' '}
            <a
              href="https://www.dmdgold.com"
              className="text-[#C6A87C] hover:underline"
            >
              www.dmdgold.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">Effective Date: 03 June 2026</p>
        </div>
      </section>

      {/* ═══════════ BODY ═══════════ */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-600 text-[17px] leading-relaxed">
          {/* Intro */}
          <p className="text-lg text-gray-500 mb-6">
            These Terms and Conditions (&quot;Terms&quot;) govern the purchase,
            licensing, access, and use of the DMD GOLD Software and associated
            services offered by DMD GOLD PROSPERITY PVT LTD (&quot;Company&quot;,
            &quot;We&quot;, &quot;Us&quot;) through its website{' '}
            <a
              href="https://www.dmdgold.com"
              className="text-[#C6A87C] hover:underline"
            >
              www.dmdgold.com
            </a>
            . By purchasing, downloading, installing, or using the Software, you
            (&quot;Customer&quot;, &quot;User&quot;, &quot;Licensee&quot;) agree
            to be bound by these Terms.
          </p>
          <p className="text-lg text-gray-500 mb-12 p-5 rounded-2xl bg-[#FAF9F6] border border-gray-100 font-medium">
            If you do not agree with any part of these Terms, you must not
            purchase or use the Software.
          </p>

          {/* ── 1. ACCEPTANCE OF TERMS ── */}
          <SectionHeading number="1" title="Acceptance of Terms" />
          <ul className="list-disc pl-6 space-y-3 text-gray-500 mb-6">
            <li>
              <strong className="text-[#2C2C2C]">1.1</strong> By completing a
              purchase, signing an order form, or activating a license key for
              the DMD GOLD Software, the Customer unconditionally accepts these
              Terms and Conditions in full.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">1.2</strong> These Terms apply
              to all categories of Customers including jewelers, wholesalers,
              retailers, manufacturers, and distributors.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">1.3</strong> The Company
              reserves the right to update these Terms at any time. The Customer
              will be notified of material changes, and continued use of the
              Software constitutes acceptance.
            </li>
          </ul>

          {/* ── 2. PRODUCTS & SERVICES ── */}
          <SectionHeading number="2" title="Products & Services" />
          <p className="text-gray-500 mb-4">
            <strong className="text-[#2C2C2C]">2.1</strong> The Company offers
            the DMD GOLD Software — a comprehensive business management
            application for the jewelry industry — available on B2B and B2C
            platforms via{' '}
            <a
              href="https://www.dmdgold.com"
              className="text-[#C6A87C] hover:underline"
            >
              www.dmdgold.com
            </a>
            .
          </p>
          <p className="text-gray-500 mb-4">
            <strong className="text-[#2C2C2C]">2.2</strong> Services offered
            include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                icon: '🔑',
                text: 'Software license (one-time or subscription-based)',
              },
              {
                icon: '⚙️',
                text: 'Installation, setup, and configuration assistance',
              },
              {
                icon: '🎥',
                text: 'On-site or remote product demonstration',
              },
              {
                icon: '📚',
                text: 'Training and onboarding support',
              },
              {
                icon: '🖨️',
                text: 'Printer and hardware integration setup',
              },
              {
                icon: '🛠️',
                text: 'Ongoing technical support and software updates',
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-gray-100"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-500 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 mb-6">
            <strong className="text-[#2C2C2C]">2.3</strong> The scope of
            services delivered is as agreed upon in the Order Form or Purchase
            Invoice at the time of sale.
          </p>

          {/* ── 3. PRE-SALE DEMONSTRATION ── */}
          <SectionHeading
            number="3"
            title="Pre-Sale Demonstration & Assistance"
          />

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            3.1 Demo Before Decision — Always
          </h3>
          <p className="text-gray-500 mb-6">
            The Company&apos;s process is simple and transparent: the full
            product demonstration is provided first, before any payment or
            commitment is requested. The prospective Customer is shown the
            complete DMD GOLD Software online — all features, modules, billing
            flows, inventory management, reports, and printer integration — via
            screen sharing, video call, or remote access tools. Only after the
            Customer has seen everything and is fully satisfied do they decide
            whether to purchase.
          </p>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            3.2 Online Demos & Assistance
          </h3>
          <p className="text-gray-500 mb-6">
            All demonstrations and pre-sale assistance are conducted fully
            online. The Company&apos;s team dedicates significant time to each
            Customer through video calls, screen sharing sessions, phone calls,
            WhatsApp support, and remote desktop assistance — ensuring the
            Customer has a clear and complete understanding of the Software
            before purchase.
          </p>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            3.3 Customer Responsibility to Evaluate
          </h3>
          <p className="text-gray-500 mb-3">
            The Customer is strongly encouraged and expected to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-6">
            <li>
              Attend the full demonstration and ask all questions before making
              a purchase decision.
            </li>
            <li>
              Test the Software on their hardware and printer setup during the
              demo stage.
            </li>
            <li>
              Verify that the Software meets their business requirements prior
              to purchase.
            </li>
            <li>
              Request clarification on any feature, module, or workflow before
              confirming the order.
            </li>
          </ul>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            3.4 Informed Purchase Decision
          </h3>
          <p className="text-gray-500 mb-6">
            The Customer&apos;s decision to purchase is made entirely of their
            own free will, after viewing the full demo and receiving complete
            information about the Software. No payment is requested or accepted
            before the demo is completed and the Customer has had all their
            questions answered. The purchase is therefore a fully informed,
            voluntary, and final decision.
          </p>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            3.5 No Obligation to Purchase
          </h3>
          <p className="text-gray-500 mb-6">
            There is no pressure or obligation on the Customer to purchase
            following a demonstration. However, once a purchase is confirmed and
            payment is made, the Non-Refund Policy (Section 6) applies in full.
          </p>

          {/* ── 4. PRICING & PAYMENT ── */}
          <SectionHeading number="4" title="Pricing & Payment" />
          <ul className="list-disc pl-6 space-y-3 text-gray-500 mb-6">
            <li>
              <strong className="text-[#2C2C2C]">4.1</strong> All prices are as
              stated in the official Quotation, Order Form, or Invoice issued by
              the Company. Prices are in Indian Rupees (INR) and are
              inclusive/exclusive of GST as stated.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">4.2</strong> Payment is due in
              full at the time of purchase unless a specific deferred payment
              schedule is agreed upon in writing.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">4.3</strong> Accepted modes of
              payment: Bank Transfer (NEFT/RTGS/IMPS), UPI, Cheque, Demand
              Draft, or any other method specified by the Company.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">4.4</strong> The license will
              be activated only upon receipt of cleared payment. The Company
              reserves the right to withhold installation, activation, or
              service delivery pending payment confirmation.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">4.5 Late Payment:</strong> In
              case of deferred payment arrangements, delayed payments attract
              interest at 18% per annum on the outstanding amount from the due
              date.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">4.6 Taxes:</strong> GST and
              all applicable taxes are the responsibility of the Customer and
              will be reflected on the invoice.
            </li>
          </ul>

          {/* ── 5. INSTALLATION, SETUP & HARDWARE ── */}
          <SectionHeading
            number="5"
            title="Installation, Setup & Hardware"
          />
          <ul className="list-disc pl-6 space-y-3 text-gray-500 mb-6">
            <li>
              <strong className="text-[#2C2C2C]">5.1</strong> The Company
              provides installation and setup of the DMD GOLD Software on the
              Customer&apos;s designated system(s) as agreed.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">5.2 Printer & Hardware Dispatch:</strong>{' '}
              Compatible printers (barcode printers, billing printers, label
              printers, etc.) are dispatched to the Customer via courier/parcel
              service. The Company arranges packaging, labelling, and handover
              to the courier agency. Remote configuration and setup support is
              provided after delivery.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">5.3 Courier & Logistics Costs:</strong>{' '}
              Dispatching hardware by courier involves non-recoverable costs
              including packaging materials, courier charges, and travel by the
              Company&apos;s team to courier offices and logistics hubs to
              arrange the shipment. These costs are borne by the Company as part
              of the service and are a key reason the Non-Refund Policy (Section
              6) applies.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">5.4</strong> The Customer is
              responsible for ensuring that their hardware (computers, printers,
              network) meets the minimum system requirements for the Software.
              The Company is not liable for performance issues arising from
              inadequate or incompatible hardware.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">5.5</strong> Any additional
              customization, module development, or hardware procurement
              requested by the Customer beyond the standard offering will be
              quoted and billed separately.
            </li>
          </ul>

          {/* ── 6. NON-REFUND POLICY ── */}
          <SectionHeading
            number="6"
            title="Non-Refund Policy — Important"
          />

          {/* Bold callout */}
          <div className="p-6 rounded-2xl bg-red-50 border border-red-200 mb-8">
            <p className="text-red-800 font-bold text-lg text-center">
              ALL SALES ARE FINAL. DMD GOLD PROSPERITY PVT LTD OPERATES A
              STRICT NO-REFUND POLICY.
            </p>
            <p className="text-red-700 text-sm text-center mt-2">
              Once payment has been made and the license has been issued or
              installation has commenced, NO REFUND will be provided under any
              circumstances, except as expressly stated below.
            </p>
          </div>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.1 Reason for No-Refund Policy
          </h3>
          <p className="text-gray-500 mb-4">
            The Company incurs significant and non-recoverable costs and
            resources in the process of bringing the Software to the Customer,
            including but not limited to:
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Time and resources of technical staff for online product walkthroughs, live video demos, screen sharing sessions, and Q&A calls conducted before purchase',
              'Full pre-sale online assistance including phone support, WhatsApp guidance, remote desktop sessions, and step-by-step feature explanations',
              'Procurement, packaging, and preparation of printer machines (barcode, billing, label printers) for dispatch',
              'Travel by Company staff to courier offices, logistics hubs, and dispatch centres to hand over parcels for delivery',
              'Courier and shipping charges for dispatching printer hardware and accessories',
              'Installation, remote configuration, and onboarding support provided after delivery',
              'Training sessions provided to the Customer\'s staff on Software usage',
              'License key generation, software activation, and post-sale technical support',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-gray-100"
              >
                <div className="w-2 h-2 rounded-full bg-[#C6A87C] mt-2 shrink-0" />
                <span className="text-gray-500 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.2 Our Process: Demo First, Decision Later
          </h3>
          <p className="text-gray-500 mb-6">
            The Company follows a strict and customer-friendly process — the
            complete online demo and all assistance is provided first, entirely
            free of charge, with no obligation. The Customer watches the full
            Software demonstration, asks questions, understands all features,
            and then — and only then — makes their own independent decision to
            purchase. Payment is accepted only after the Customer has confirmed
            they are satisfied and wish to proceed. Since the Customer purchases
            with full knowledge of the product, no refund will be issued after
            payment is made.
          </p>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.3 No Refund on Change of Mind
          </h3>
          <p className="text-gray-500 mb-3">
            Refunds will not be issued due to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-6">
            <li>Change of mind or business decision after purchase</li>
            <li>Failure to use the Software after installation</li>
            <li>
              Claim that the Software does not meet expectations, if those
              expectations were not communicated prior to purchase
            </li>
            <li>
              Disputes arising from the Customer&apos;s internal business
              decisions, staff changes, or operational issues
            </li>
            <li>
              Technical issues attributable to the Customer&apos;s hardware,
              network, or operating environment
            </li>
            <li>
              Purchase made by an unauthorized person within the Customer&apos;s
              organization
            </li>
          </ul>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.4 No Refund on Partial Use
          </h3>
          <p className="text-gray-500 mb-6">
            No refund or pro-rata adjustment will be made for unused portions of
            a subscription period once the license has been activated.
          </p>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.5 No Refund on Customization
          </h3>
          <p className="text-gray-500 mb-6">
            Any custom development, module addition, or tailored configuration
            work is non-refundable once work has commenced.
          </p>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.6 Exceptional Circumstances (Only Exception)
          </h3>
          <p className="text-gray-500 mb-3">
            A refund or credit may be considered, solely at the Company&apos;s
            discretion, only in the event that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-4">
            <li>
              The Software is found to have a critical, fundamental defect that
              renders it completely non-functional for its core purpose, AND
            </li>
            <li>
              The Company is unable to resolve the defect within a reasonable
              rectification period (not less than 30 days), AND
            </li>
            <li>
              The Customer has not caused or contributed to the defect through
              misuse, unauthorized modification, or hardware incompatibility.
            </li>
          </ul>
          <p className="text-gray-500 mb-6">
            Even in such exceptional cases, the Company may at its discretion
            offer a service credit, extended subscription, or replacement rather
            than a cash refund.
          </p>

          {/* Commitment summary box */}
          <div className="p-6 rounded-2xl bg-[#FAF9F6] border-2 border-[#C6A87C]/30 mb-6">
            <h4 className="text-[#C6A87C] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Our Commitment & Policy in Simple Words
            </h4>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              We show you everything first — a complete, free, no-obligation
              online demo of the DMD GOLD Software. We answer every question and
              provide full assistance before asking for any payment. You decide
              to buy only after you are fully satisfied and informed. Once you
              make that decision and complete payment, we dispatch the printer to
              you by courier — involving packaging, travel to the courier
              office, and shipping costs. Because the purchase is made after a
              full, free demo with complete knowledge of the product, and
              because real costs are incurred immediately after payment,{' '}
              <strong className="text-[#2C2C2C]">
                ALL SALES ARE FINAL AND NO REFUND WILL BE ISSUED.
              </strong>
            </p>
          </div>

          {/* ── 7. SOFTWARE USE & LICENSE ── */}
          <SectionHeading number="7" title="Software Use & License" />
          <ul className="list-disc pl-6 space-y-3 text-gray-500 mb-6">
            <li>
              <strong className="text-[#2C2C2C]">7.1</strong> The Customer is
              granted a non-exclusive, non-transferable license to use the
              Software as per the terms of the End-User License Agreement (EULA)
              provided separately.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">7.2</strong> The Customer
              shall not copy, resell, sublicense, reverse engineer, or misuse
              the Software. Violation may result in immediate termination of the
              license without refund.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">7.3</strong> The Software is
              intended solely for lawful business operations in the jewelry
              trade. Any use for illegal, fraudulent, or unethical purposes is
              strictly prohibited and the Company bears no liability for such
              misuse.
            </li>
          </ul>

          {/* ── 8. SUPPORT & MAINTENANCE ── */}
          <SectionHeading number="8" title="Support & Maintenance" />
          <ul className="list-disc pl-6 space-y-3 text-gray-500 mb-6">
            <li>
              <strong className="text-[#2C2C2C]">8.1</strong> Standard support
              is provided via phone and email during business hours
              (Monday–Saturday, 10:00 AM – 6:00 PM IST).
            </li>
            <li>
              <strong className="text-[#2C2C2C]">8.2</strong> On-site support
              visits beyond the initial installation may be subject to
              additional travel and service charges.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">8.3</strong> Software updates
              and patches released during the active subscription period are
              provided at no additional cost.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">8.4</strong> The Company is
              not responsible for issues caused by third-party software,
              operating system changes, hardware failures, or Customer-side
              modifications.
            </li>
          </ul>

          {/* ── 9. LIMITATION OF LIABILITY ── */}
          <SectionHeading number="9" title="Limitation of Liability" />
          <ul className="list-disc pl-6 space-y-3 text-gray-500 mb-6">
            <li>
              <strong className="text-[#2C2C2C]">9.1</strong> To the maximum
              extent permitted by law, the Company shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including loss of profits, data loss, or business interruption.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">9.2</strong> The Company&apos;s
              total liability shall not exceed the amount paid by the Customer
              for the Software license in the preceding 12 months.
            </li>
          </ul>

          {/* ── 10. GOVERNING LAW & JURISDICTION ── */}
          <SectionHeading
            number="10"
            title="Governing Law & Jurisdiction"
          />
          <ul className="list-disc pl-6 space-y-3 text-gray-500 mb-6">
            <li>
              <strong className="text-[#2C2C2C]">10.1</strong> These Terms are
              governed by the laws of the Republic of India.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">10.2</strong> Any disputes
              shall be subject to the exclusive jurisdiction of the courts of
              Pune, India.
            </li>
            <li>
              <strong className="text-[#2C2C2C]">10.3</strong> Disputes shall
              first be attempted to be resolved through mutual negotiation
              within 30 days, failing which arbitration under the Arbitration
              and Conciliation Act, 1996 shall apply.
            </li>
          </ul>

          {/* ── 11. CONTACT INFORMATION ── */}
          <SectionHeading number="11" title="Contact Information" />
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <tbody className="text-gray-500">
                {[
                  {
                    field: 'Company',
                    value: 'DMD GOLD PROSPERITY PVT LTD',
                  },
                  { field: 'Website', value: 'www.dmdgold.com' },
                  { field: 'Email', value: 'info@dmdgold.com' },
                  { field: 'Phone', value: '+91 9371123699' },
                  {
                    field: 'Address',
                    value:
                      'Office No-01, Amaryllis Domkhel Rd, Wagholi, Pune, Maharashtra 412207',
                  },
                ].map((row, i) => (
                  <tr
                    key={row.field}
                    className={i % 2 === 1 ? 'bg-[#FDFCFA]' : ''}
                  >
                    <td className="px-5 py-3 border border-gray-100 font-medium text-[#2C2C2C] w-1/3">
                      {row.field}
                    </td>
                    <td className="px-5 py-3 border border-gray-100">
                      {row.field === 'Website' ? (
                        <a
                          href="https://www.dmdgold.com"
                          className="text-[#C6A87C] hover:underline"
                        >
                          {row.value}
                        </a>
                      ) : row.field === 'Email' ? (
                        <a
                          href="mailto:info@dmdgold.com"
                          className="text-[#C6A87C] hover:underline"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Closing ── */}
          <div className="mt-16 pt-10 border-t border-gray-100 text-center text-gray-400 text-sm space-y-1">
            <p>
              These Terms &amp; Conditions are effective as of{' '}
              <strong className="text-[#2C2C2C]">03 June 2026</strong>
            </p>
            <p>
              <strong className="text-[#2C2C2C]">
                DMD GOLD PROSPERITY PVT LTD
              </strong>{' '}
              |{' '}
              <a
                href="https://www.dmdgold.com"
                className="text-[#C6A87C] hover:underline"
              >
                www.dmdgold.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
