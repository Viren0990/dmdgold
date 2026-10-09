import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { guides, getGuide, type GuideBlock } from '@/lib/guides';
import { FOUNDER } from '@/lib/constants';

const BASE_URL = 'https://www.dmdgold.com';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  const url = `${BASE_URL}/guides/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    authors: [{ name: FOUNDER.name }],
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.description, url, type: 'article', publishedTime: guide.published, modifiedTime: guide.updated },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'p':
      return <p className="text-gray-600 text-lg leading-relaxed">{block.text}</p>;
    case 'ul':
      return (
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg leading-relaxed marker:text-[#C6A87C]">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol className="list-decimal pl-6 space-y-2 text-gray-600 text-lg leading-relaxed marker:text-[#8B6220] marker:font-bold">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ol>
      );
    case 'callout':
      return <div className="border-l-4 border-[#C6A87C] bg-[#FAF9F6] rounded-r-xl px-5 py-4 text-[#2C2C2C] leading-relaxed">{block.text}</div>;
    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[560px] text-sm text-left">
            <thead className="bg-[#FAF9F6]">
              <tr>{block.head.map((h, i) => <th key={i} className="px-4 py-3 font-bold text-[#2C2C2C]">{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-t border-gray-100 align-top">
                  {row.map((cell, i) => <td key={i} className={`px-4 py-3 ${i === 0 ? 'font-semibold text-[#2C2C2C]' : 'text-gray-600'}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const url = `${BASE_URL}/guides/${guide.slug}`;
  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.description,
      datePublished: guide.published,
      dateModified: guide.updated,
      mainEntityOfPage: url,
      author: { '@type': 'Person', name: FOUNDER.name, jobTitle: FOUNDER.role, url: `${BASE_URL}/our-story` },
      publisher: { '@type': 'Organization', name: 'DMD Gold', logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/logo.png` } },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides` },
        { '@type': 'ListItem', position: 3, name: guide.title, item: url },
      ],
    },
  ];

  return (
    <main className="w-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article>
        <header className="pt-40 pb-12 px-6 md:px-12 bg-[#FAF9F6]">
          <div className="max-w-3xl mx-auto space-y-5">
            <nav aria-label="Breadcrumb" className="text-xs text-gray-400">
              <Link href="/" className="hover:text-[#8B6220]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-[#8B6220]">Guides</Link>
            </nav>
            <p className="text-[#8B6220] text-xs font-bold tracking-[0.3em] uppercase">{guide.category} · {guide.readMinutes} min read</p>
            <h1 className="text-3xl md:text-5xl font-serif text-[#2C2C2C] leading-tight">{guide.title}</h1>
            <p className="text-sm text-gray-500">
              By <Link href="/our-story" className="font-semibold text-[#2C2C2C] hover:text-[#8B6220]">{FOUNDER.name}</Link>, {FOUNDER.role} · Updated {formatDate(guide.updated)}
            </p>
          </div>
        </header>

        <div className="px-6 md:px-12 py-12">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="rounded-2xl bg-[#1A1A1A] text-white p-6">
              <div className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase mb-2">Short answer</div>
              <p className="leading-relaxed">{guide.summary}</p>
            </div>

            {guide.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif text-[#2C2C2C]">{section.heading}</h2>
                {section.blocks.map((block, i) => <Block key={i} block={block} />)}
              </section>
            ))}

            {guide.regulatoryNote && (
              <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-4">
                Rules and thresholds change. This guide reflects our understanding as of {formatDate(guide.updated)} and is not legal or tax advice — always check the latest BIS / GSTN notifications or ask your CA.
              </p>
            )}

            {guide.disclaimer && (
              <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-4">{guide.disclaimer}</p>
            )}

            <div className="rounded-2xl border border-[#C6A87C]/30 bg-[#FAF9F6] p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <p className="text-[#2C2C2C] leading-relaxed">{guide.cta.text}</p>
              <Link href={guide.cta.href} className="shrink-0 px-6 py-3 bg-[#1A1A1A] text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#C6A87C] transition-colors text-center">
                {guide.cta.label}
              </Link>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif text-[#2C2C2C]">Frequently asked questions</h2>
              {guide.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-bold text-[#2C2C2C] mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </article>

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#8B6220] mb-6 text-center">More guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {others.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="block rounded-2xl border border-gray-200 p-6 hover:border-[#C6A87C]/50 hover:shadow-md transition-all">
                <div className="font-serif text-lg text-[#2C2C2C]">{g.title}</div>
                <div className="text-sm text-gray-500 mt-2">{g.readMinutes} min read &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
