import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { guides } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Guides for Jewellers — Karigars, HUID, E-Invoice & Orders',
  description: 'Practical guides for Indian jewellery shops and wholesalers: tracking karigar gold, HUID hallmarking rules, GST e-invoicing, custom orders and switching to software.',
  alternates: { canonical: 'https://www.dmdgold.com/guides' },
};

export default function GuidesIndex() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <section className="pt-40 pb-16 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-[#8B6220] text-xs font-bold tracking-[0.3em] uppercase">Guides for Jewellers</p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] leading-tight">Practical answers for running a jewellery business</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">Written from 25+ years in the jewellery trade — karigars, hallmarking, GST, orders and moving from paper to software.</p>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="group flex flex-col rounded-2xl border border-gray-200 p-6 hover:border-[#C6A87C]/50 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#8B6220] mb-3">
                <span>{g.category}</span><span className="text-gray-300">·</span><span className="text-gray-400">{g.readMinutes} min read</span>
              </div>
              <h2 className="text-xl font-serif text-[#2C2C2C] mb-3 group-hover:text-[#8B6220] transition-colors">{g.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{g.description}</p>
              <span className="mt-5 text-sm font-bold text-[#8B6220]">Read guide &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
