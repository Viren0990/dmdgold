import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — DMD GOLD PROSPERITY PVT LTD',
  description:
    'Read the Privacy Policy of DMD GOLD PROSPERITY PVT LTD. Learn how we collect, use, store, and protect your personal and business information on www.dmdgold.com and the DMD GOLD Software.',
  alternates: {
    canonical: 'https://www.dmdgold.com/privacy-policy',
  },
};

/* ── tiny helper for section headings ── */
function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="flex items-baseline gap-3 text-2xl md:text-3xl font-serif text-[#2C2C2C] mt-16 mb-6">
      <span className="text-[#C6A87C] font-bold text-lg">{number}.</span>
      {title}
    </h2>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="pt-40 pb-24 px-6 md:px-12 text-center relative overflow-hidden bg-[#FAF9F6]">
        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C6A87C]/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#C6A87C]/5 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
            Legal
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] leading-tight">
            Privacy <span className="italic text-[#C6A87C]">Policy</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            DMD GOLD PROSPERITY PVT LTD — Website:{' '}
            <a
              href="https://www.dmdgold.com"
              className="text-[#C6A87C] hover:underline"
            >
              www.dmdgold.com
            </a>{' '}
            | Software: DMD GOLD Software
          </p>
          <p className="text-gray-400 text-sm">Last Updated: 03 June 2026</p>
        </div>
      </section>

      {/* ═══════════ BODY ═══════════ */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-600 text-[17px] leading-relaxed">
          {/* Intro */}
          <p className="text-lg text-gray-500 mb-12">
            At DMD GOLD PROSPERITY PVT LTD, we are committed to protecting the
            privacy and security of your personal and business information. This
            Privacy Policy explains how we collect, use, store, share, and
            protect information when you visit our website{' '}
            <a
              href="https://www.dmdgold.com"
              className="text-[#C6A87C] hover:underline"
            >
              www.dmdgold.com
            </a>{' '}
            or use the DMD GOLD Software. Please read this policy carefully. By
            using our website or software, you consent to the practices
            described herein.
          </p>

          {/* ── 1. APPLICABILITY ── */}
          <SectionHeading number="1" title="Applicability" />
          <p className="mb-4">This Privacy Policy applies to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-6">
            <li>All visitors to www.dmdgold.com</li>
            <li>
              Registered users and subscribers of the DMD GOLD Software
            </li>
            <li>
              Customers, partners, jewelers, wholesalers, manufacturers, and
              retailers who interact with our platform
            </li>
            <li>
              Any individual or entity that submits information through our
              website forms, demo requests, or contact pages
            </li>
          </ul>

          {/* ── 2. INFORMATION WE COLLECT ── */}
          <SectionHeading number="2" title="Information We Collect" />

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            2.1 Information You Provide Directly
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-6">
            <li>
              Full name, business name, and contact details (phone number,
              email address, mailing address)
            </li>
            <li>
              GST number, PAN, business registration number, and other
              business identity documents
            </li>
            <li>Login credentials (username and encrypted password)</li>
            <li>
              Payment information (bank account details, UPI ID — processed
              securely; we do not store card numbers)
            </li>
            <li>
              Inventory data, billing records, customer records, and other
              business data entered into the Software
            </li>
            <li>
              Communications, queries, and feedback submitted via email,
              phone, or contact forms
            </li>
          </ul>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            2.2 Information Collected Automatically
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-6">
            <li>
              IP address, browser type, operating system, and device
              information
            </li>
            <li>
              Pages visited, time spent on pages, and navigation patterns on
              www.dmdgold.com
            </li>
            <li>
              Cookies and similar tracking technologies (see Section 8)
            </li>
            <li>
              Software usage logs, feature usage patterns, and error reports
              (for improving the Software)
            </li>
          </ul>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            2.3 Information from Third Parties
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-6">
            <li>
              Information from payment gateways and banking partners for
              transaction verification
            </li>
            <li>
              Business verification data from government or regulatory
              databases where required by law
            </li>
          </ul>

          {/* ── 3. HOW WE USE YOUR INFORMATION ── */}
          <SectionHeading number="3" title="How We Use Your Information" />
          <p className="mb-4">
            We use the information collected for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-6">
            <li>
              To provide, operate, and improve the DMD GOLD Software and
              website services
            </li>
            <li>
              To process license purchases, subscriptions, payments, and
              renewals
            </li>
            <li>
              To create and manage user accounts and provide customer support
            </li>
            <li>
              To send important service communications, updates, and
              notifications
            </li>
            <li>
              To send marketing communications about new features, offers, or
              products (you may opt out at any time)
            </li>
            <li>
              To comply with legal obligations, including KYC, AML, and tax
              regulations
            </li>
            <li>
              To detect, prevent, and investigate fraud, security incidents,
              or violations of our Terms
            </li>
            <li>
              To conduct analytics and research to improve our services
            </li>
            <li>To personalize your experience on the platform</li>
          </ul>

          {/* ── 4. LEGAL BASIS ── */}
          <SectionHeading
            number="4"
            title="Legal Basis for Processing (Indian Law)"
          />
          <p className="mb-4">
            We process personal data in compliance with applicable Indian
            laws, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 mb-6">
            <li>
              The Information Technology Act, 2000 and the IT (Reasonable
              Security Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011
            </li>
            <li>
              The Digital Personal Data Protection Act, 2023 (DPDPA) — we
              process data only for lawful purposes with appropriate consent
              or legitimate interest
            </li>
            <li>
              The Prevention of Money Laundering Act, 2002 — for KYC and AML
              compliance where applicable
            </li>
            <li>
              The Companies Act, 2013 and GST Act — for maintaining statutory
              records
            </li>
          </ul>

          {/* ── 5. DATA SHARING & DISCLOSURE ── */}
          <SectionHeading number="5" title="Data Sharing & Disclosure" />
          <p className="mb-4">
            We do not sell, rent, or trade your personal or business data. We
            may share information only in the following circumstances:
          </p>
          <div className="space-y-6 mb-6">
            {[
              {
                label: 'Service Providers',
                text: 'With trusted third-party vendors who assist in operating the Software (e.g., cloud hosting, payment processors, SMS/email services), bound by confidentiality obligations.',
              },
              {
                label: 'Legal Compliance',
                text: 'With government authorities, law enforcement, or regulatory bodies when required by law, court order, or to protect our legal rights.',
              },
              {
                label: 'Business Transfer',
                text: 'In connection with a merger, acquisition, or sale of business assets, with appropriate confidentiality protections.',
              },
              {
                label: 'Consent',
                text: 'With any third party where you have given explicit consent.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl bg-[#FAF9F6] border border-gray-100"
              >
                <span className="font-bold text-[#2C2C2C]">
                  {item.label}:
                </span>{' '}
                <span className="text-gray-500">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 mb-6">
            We require all third parties to maintain the confidentiality and
            security of your data and to process it only for specified,
            legitimate purposes.
          </p>

          {/* ── 6. DATA STORAGE & SECURITY ── */}
          <SectionHeading number="6" title="Data Storage & Security" />

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.1 Storage Location
          </h3>
          <p className="text-gray-500 mb-6">
            Your data is stored on secure servers located in India. We use
            reputable cloud infrastructure providers that comply with
            applicable data security standards.
          </p>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.2 Security Measures
          </h3>
          <p className="text-gray-500 mb-4">
            We implement industry-standard technical and organizational
            security measures, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                icon: '🔒',
                text: 'Data encryption in transit (SSL/TLS) and at rest',
              },
              {
                icon: '🛡️',
                text: 'Role-based access controls and multi-factor authentication',
              },
              {
                icon: '🔍',
                text: 'Regular security audits and vulnerability assessments',
              },
              {
                icon: '🧱',
                text: 'Firewall protection and intrusion detection systems',
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

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.3 Data Retention
          </h3>
          <p className="text-gray-500 mb-6">
            We retain your data for as long as your account is active or as
            needed to provide services, comply with legal obligations, resolve
            disputes, and enforce agreements. Upon account termination, you
            may request deletion of your data within 30 days.
          </p>

          <h3 className="text-xl font-serif text-[#2C2C2C] mt-8 mb-4">
            6.4 Breach Notification
          </h3>
          <p className="text-gray-500 mb-6">
            In the event of a data breach that is likely to affect your
            rights, we will notify you and relevant authorities as required by
            law.
          </p>

          {/* ── 7. YOUR RIGHTS ── */}
          <SectionHeading
            number="7"
            title="Your Rights as a Data Principal"
          />
          <p className="mb-4">
            Under the Digital Personal Data Protection Act, 2023, and
            applicable Indian law, you have the following rights:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                right: 'Right to Access',
                desc: 'Request a copy of the personal data we hold about you.',
              },
              {
                right: 'Right to Correction',
                desc: 'Request correction of inaccurate or incomplete data.',
              },
              {
                right: 'Right to Erasure',
                desc: 'Request deletion of your personal data, subject to legal retention requirements.',
              },
              {
                right: 'Right to Withdraw Consent',
                desc: 'Withdraw consent for data processing at any time (may affect service availability).',
              },
              {
                right: 'Right to Grievance Redressal',
                desc: 'Lodge a complaint with our Data Protection Officer or the relevant authority.',
              },
              {
                right: 'Right to Nominate',
                desc: 'Nominate another individual to exercise your rights in the event of your death or incapacity.',
              },
            ].map((item) => (
              <div
                key={item.right}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#C6A87C]/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#C6A87C] mt-2 shrink-0" />
                <div>
                  <span className="font-bold text-[#2C2C2C]">
                    {item.right}:
                  </span>{' '}
                  <span className="text-gray-500">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 mb-6">
            To exercise any of these rights, please contact us at the details
            provided in Section 11.
          </p>

          {/* ── 8. COOKIES ── */}
          <SectionHeading
            number="8"
            title="Cookies & Tracking Technologies"
          />
          <p className="mb-4">
            Our website www.dmdgold.com uses cookies and similar technologies
            to enhance your browsing experience. Cookies are small text files
            stored on your device.
          </p>
          <p className="mb-4 font-semibold text-[#2C2C2C]">
            Types of cookies we use:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="text-left px-5 py-3 font-bold text-[#2C2C2C] border border-gray-100">
                    Type
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-[#2C2C2C] border border-gray-100">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                <tr>
                  <td className="px-5 py-3 border border-gray-100 font-medium text-[#2C2C2C]">
                    Essential Cookies
                  </td>
                  <td className="px-5 py-3 border border-gray-100">
                    Required for the website to function properly (login
                    sessions, security).
                  </td>
                </tr>
                <tr className="bg-[#FDFCFA]">
                  <td className="px-5 py-3 border border-gray-100 font-medium text-[#2C2C2C]">
                    Analytics Cookies
                  </td>
                  <td className="px-5 py-3 border border-gray-100">
                    Help us understand how visitors interact with our website
                    (e.g., Google Analytics).
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border border-gray-100 font-medium text-[#2C2C2C]">
                    Preference Cookies
                  </td>
                  <td className="px-5 py-3 border border-gray-100">
                    Remember your settings and preferences.
                  </td>
                </tr>
                <tr className="bg-[#FDFCFA]">
                  <td className="px-5 py-3 border border-gray-100 font-medium text-[#2C2C2C]">
                    Marketing Cookies
                  </td>
                  <td className="px-5 py-3 border border-gray-100">
                    Used to deliver relevant advertisements (only with your
                    consent).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 mb-6">
            You can control and manage cookies through your browser settings.
            Disabling essential cookies may affect website functionality.
          </p>

          {/* ── 9. THIRD-PARTY LINKS ── */}
          <SectionHeading number="9" title="Third-Party Links" />
          <p className="text-gray-500 mb-6">
            Our website may contain links to third-party websites, payment
            gateways, or partner platforms. We are not responsible for the
            privacy practices or content of those external sites. We encourage
            you to review the privacy policies of any third-party websites
            you visit.
          </p>

          {/* ── 10. CHILDREN'S PRIVACY ── */}
          <SectionHeading number="10" title="Children's Privacy" />
          <p className="text-gray-500 mb-6">
            Our Software and website are intended for business use by adults
            (18 years and above). We do not knowingly collect personal data
            from individuals under 18 years of age. If we become aware that a
            minor has submitted personal information, we will take steps to
            delete it promptly.
          </p>

          {/* ── 11. CONTACT & GRIEVANCE REDRESSAL ── */}
          <SectionHeading
            number="11"
            title="Contact & Grievance Redressal"
          />
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
                  {
                    field: 'Response Time',
                    value:
                      'We will respond to privacy-related queries within 30 days of receipt.',
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

          {/* ── 12. CHANGES ── */}
          <SectionHeading
            number="12"
            title="Changes to This Privacy Policy"
          />
          <p className="text-gray-500 mb-4">
            We reserve the right to update or modify this Privacy Policy at
            any time. Changes will be posted on this page with an updated
            &quot;Last Updated&quot; date. We encourage you to review this
            Policy periodically. Continued use of our website or Software
            after any changes constitutes your acceptance of the updated
            Policy.
          </p>
          <p className="text-gray-500 mb-12">
            For material changes that significantly affect your rights, we
            will provide notice via email or a prominent notice on our
            website.
          </p>

          {/* ── Closing ── */}
          <div className="mt-16 pt-10 border-t border-gray-100 text-center text-gray-400 text-sm space-y-1">
            <p>
              This Privacy Policy is effective as of{' '}
              <strong className="text-[#2C2C2C]">03 June 2026</strong> and is
              governed by the laws of India.
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
