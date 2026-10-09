import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { featurePages, type FeaturePage } from '@/lib/featurePages';

const BASE_URL = 'https://www.dmdgold.com';

export default function FeaturePageView({ page }: { page: FeaturePage }) {
  const related = page.related
    .map((slug) => featurePages.find((p) => p.slug === slug))
    .filter((p): p is FeaturePage => Boolean(p));

  const jsonLd = featureJsonLd(page);

  return (
    <main className="w-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-400">
            <Link href="/" className="hover:text-[#8B6220]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-[#8B6220]">Features</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">{page.navLabel}</span>
          </nav>
          <p className="text-[#8B6220] text-xs font-bold tracking-[0.3em] uppercase">{page.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] leading-tight">{page.h1}</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">{page.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a href="#contact" className="px-8 py-4 bg-[#1A1A1A] text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[#C6A87C] transition-colors">
              Book a Free Demo
            </a>
            <Link href="/pricing" className="px-8 py-4 border border-[#C6A87C] text-[#8B6220] text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[#C6A87C] hover:text-white transition-colors">
              See Pricing — from ₹6,000/year
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] text-center mb-12">What you get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.benefits.map((b) => (
              <div key={b.title} className="bg-[#FAF9F6] rounded-2xl border border-[#C6A87C]/15 p-6">
                <h3 className="font-bold text-[#2C2C2C] mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-12 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-12">How it works</h2>
          <ol className="space-y-5">
            {page.steps.map((step, i) => (
              <li key={step} className="flex gap-5 items-start">
                <span className="w-9 h-9 shrink-0 rounded-full bg-[#C6A87C] text-[#1A1A1A] font-bold flex items-center justify-center">{i + 1}</span>
                <p className="text-gray-300 leading-relaxed pt-1.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] text-center mb-10">Common questions</h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group bg-[#FAF9F6] rounded-2xl border border-gray-100 p-6">
                <summary className="cursor-pointer font-bold text-[#2C2C2C] list-none flex justify-between gap-4">
                  {faq.question}
                  <span className="text-[#C6A87C] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-500 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            More questions?{' '}
            <a href="https://api.whatsapp.com/send?phone=919371123699" target="_blank" rel="noopener noreferrer" className="font-bold text-[#8B6220] hover:underline">
              Ask us on WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="pb-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#8B6220] mb-6 text-center">Related features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={r.path} className="block rounded-2xl border border-gray-200 p-6 hover:border-[#C6A87C]/50 hover:shadow-md transition-all">
                  <div className="font-bold text-[#2C2C2C]">{r.navLabel}</div>
                  <div className="text-sm text-gray-500 mt-1">{r.eyebrow} &rarr;</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Contact />
      <Footer />
    </main>
  );
}

export function featureMetadata(page: FeaturePage) {
  const url = `${BASE_URL}${page.path}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, siteName: 'DMD Gold', type: 'website' as const },
  };
}

export function featureJsonLd(page: FeaturePage) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Features', item: `${BASE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: page.navLabel, item: `${BASE_URL}${page.path}` },
      ],
    },
  ];
}
