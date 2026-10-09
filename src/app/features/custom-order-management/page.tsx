import { Metadata } from 'next';
import Link from 'next/link';
import {
  ClipboardList,
  CheckCircle2,
  Users,
  CalendarClock,
  RefreshCcw,
  FileText,
  Receipt,
  Store,
  Briefcase,
  NotebookPen,
  PhoneCall,
  UserX,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { featureJsonLd, featureMetadata } from '@/components/FeaturePageView';
import { featurePages, getFeaturePage, type FeaturePage } from '@/lib/featurePages';

const page = getFeaturePage('custom-order-management')!;

export const metadata: Metadata = featureMetadata(page);

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=919371123699';

const lifecycle = [
  {
    icon: ClipboardList,
    stage: 'Create',
    title: 'Take the order at the counter',
    text: 'Record each item the customer wants — the design, approximate weight and the delivery date you promise. Hand over a printed order receipt straight away.',
  },
  {
    icon: CheckCircle2,
    stage: 'Confirm',
    title: 'Mark the order confirmed',
    text: 'Once the customer confirms, change the order status to Confirmed. Only confirmed orders move on to your karigars.',
  },
  {
    icon: Users,
    stage: 'Assign',
    title: 'Give each item to the right karigar',
    text: 'Assign every item individually. The necklace can go to one karigar and the earrings to another — all inside the same order.',
  },
  {
    icon: CalendarClock,
    stage: 'Return date',
    title: 'Set when each piece comes back',
    text: 'Give every assignment its own return date, so you know exactly what is due back from which karigar, and when.',
  },
  {
    icon: RefreshCcw,
    stage: 'Revoke',
    title: 'Reassign if plans change',
    text: 'If a karigar can’t finish a piece, revoke that item and assign it to someone else — without touching the rest of the order.',
  },
  {
    icon: FileText,
    stage: 'Deliver',
    title: 'Track it through to delivery',
    text: 'Follow the order from counter to karigar and back, until it is handed over to the customer. The full cycle, in one place.',
  },
];

const oldWay = [
  { icon: NotebookPen, title: 'Order books and loose slips', text: 'Orders written in a register or on paper slips get lost, smudged or misread.' },
  { icon: UserX, title: 'Who has which piece?', text: 'When one order is split across karigars, it’s hard to remember which item went to whom.' },
  { icon: PhoneCall, title: '“Is my order ready?”', text: 'Without dates in one place, every customer call means digging through books and phoning karigars.' },
];

function OrderBoard() {
  const items = [
    { item: 'Rani Haar Necklace', wt: '42 g', karigar: 'Ramesh K.', due: '12 Nov', status: 'With karigar', tone: 'text-[#8B6220] bg-[#C6A87C]/10' },
    { item: 'Jhumka Earrings', wt: '14 g', karigar: 'Suresh P.', due: '08 Nov', status: 'With karigar', tone: 'text-[#8B6220] bg-[#C6A87C]/10' },
    { item: 'Kada Bangles (2)', wt: '36 g', karigar: 'Ramesh K.', due: '15 Nov', status: 'With karigar', tone: 'text-[#8B6220] bg-[#C6A87C]/10' },
    { item: 'Engagement Ring', wt: '6 g', karigar: '—', due: '—', status: 'To assign', tone: 'text-orange-600 bg-orange-50' },
  ];
  return (
    <div className="w-full bg-white rounded-3xl border border-[#C6A87C]/20 shadow-2xl p-5 md:p-6 text-left">
      <div className="flex justify-between items-start gap-3 mb-4">
        <div>
          <div className="text-[#8B6220] text-[10px] font-bold tracking-widest uppercase">Order #ORD-2214 · Sample</div>
          <div className="text-lg md:text-xl font-serif text-[#2C2C2C]">Bridal Set — Mrs. Kulkarni</div>
          <div className="text-xs text-gray-500 mt-0.5">Delivery promised: 20 Nov</div>
        </div>
        <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full border border-green-100 uppercase shrink-0">Confirmed</span>
      </div>
      <div className="flex items-center gap-1 mb-5">
        {['Created', 'Confirmed', 'With karigar', 'Ready', 'Delivered'].map((step, i) => (
          <div key={step} className="flex-1">
            <div className={`h-1.5 rounded-full ${i <= 2 ? 'bg-[#C6A87C]' : 'bg-gray-200'}`} />
            <div className={`mt-1 text-[8px] md:text-[9px] font-bold uppercase text-center ${i <= 2 ? 'text-[#8B6220]' : 'text-gray-400'}`}>{step}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-[1.6fr_0.7fr_1fr_0.8fr] gap-2 px-3 py-2 bg-gray-50 text-[9px] font-bold uppercase tracking-wider text-gray-400">
          <span>Item</span><span>Approx wt</span><span>Karigar</span><span>Return by</span>
        </div>
        {items.map((row) => (
          <div key={row.item} className="grid grid-cols-[1.6fr_0.7fr_1fr_0.8fr] gap-2 px-3 py-2.5 border-t border-gray-50 items-center">
            <div>
              <div className="text-xs font-medium text-[#2C2C2C]">{row.item}</div>
              <span className={`inline-block mt-0.5 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase ${row.tone}`}>{row.status}</span>
            </div>
            <span className="text-xs font-bold text-[#2C2C2C]">{row.wt}</span>
            <span className="text-xs text-[#2C2C2C]">{row.karigar}</span>
            <span className="text-xs text-gray-500">{row.due}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="py-2.5 bg-[#1A1A1A] text-white text-[10px] font-bold rounded-lg text-center uppercase tracking-wider">Download job cards</div>
        <div className="py-2.5 bg-[#C6A87C] text-white text-[10px] font-bold rounded-lg text-center uppercase tracking-wider">Order receipt</div>
      </div>
    </div>
  );
}

function JobCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 font-mono text-xs text-[#2C2C2C]">
      <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-3 mb-3">
        <span className="font-sans font-bold tracking-widest text-[#8B6220]">JOB CARD</span>
        <span className="text-gray-400">Sample</span>
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
        <dt className="text-gray-400">Order</dt><dd>#ORD-2214</dd>
        <dt className="text-gray-400">Karigar</dt><dd>Ramesh K.</dd>
        <dt className="text-gray-400">Item</dt><dd>Rani Haar Necklace</dd>
        <dt className="text-gray-400">Approx wt</dt><dd>42 g</dd>
        <dt className="text-gray-400">Return by</dt><dd>12 Nov</dd>
      </dl>
      <div className="mt-4 h-16 rounded-lg bg-[#FAF9F6] border border-dashed border-[#C6A87C]/40 flex items-center justify-center text-[10px] text-gray-400 font-sans">Design reference</div>
      <div className="mt-4 pt-3 border-t border-dashed border-gray-300 flex justify-between text-[10px] text-gray-400 font-sans">
        <span>Issued by: ________</span><span>Karigar: ________</span>
      </div>
    </div>
  );
}

function OrderReceipt() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-xs text-[#2C2C2C]">
      <div className="text-center border-b border-gray-100 pb-3 mb-3">
        <div className="font-serif text-base">Your Jewellers</div>
        <div className="text-[10px] tracking-widest uppercase text-[#8B6220] font-bold mt-0.5">Order Receipt · Sample</div>
      </div>
      <div className="flex justify-between mb-3 text-[11px]">
        <span>Mrs. Kulkarni</span><span className="text-gray-500">#ORD-2214</span>
      </div>
      <div className="space-y-1.5">
        {[['Rani Haar Necklace', '42 g'], ['Jhumka Earrings', '14 g'], ['Kada Bangles (2)', '36 g'], ['Engagement Ring', '6 g']].map(([item, wt]) => (
          <div key={item} className="flex justify-between"><span>{item}</span><span className="text-gray-500">~{wt}</span></div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between font-bold">
        <span>Delivery date</span><span className="text-[#8B6220]">20 Nov</span>
      </div>
    </div>
  );
}

export default function CustomOrderManagementPage() {
  const related = page.related
    .map((slug) => featurePages.find((p) => p.slug === slug))
    .filter((p): p is FeaturePage => Boolean(p));

  return (
    <main className="w-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featureJsonLd(page)) }} />
      <Navbar />

      {/* HERO */}
      <section className="pt-36 md:pt-40 pb-20 px-6 md:px-12 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <nav aria-label="Breadcrumb" className="text-xs text-gray-400">
              <Link href="/" className="hover:text-[#8B6220]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-[#8B6220]">Features</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600">{page.navLabel}</span>
            </nav>
            <p className="text-[#8B6220] text-xs font-bold tracking-[0.3em] uppercase">{page.eyebrow} · Retail &amp; Wholesale</p>
            <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] leading-tight">
              Every custom order, from the <span className="italic text-[#8B6220]">counter</span> to the <span className="italic text-[#8B6220]">karigar</span> and back.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <a href="#contact" className="px-8 py-4 bg-[#1A1A1A] text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[#C6A87C] transition-colors text-center">
                Book a Free Demo
              </a>
              <Link href="/pricing" className="px-8 py-4 border border-[#C6A87C] text-[#8B6220] text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[#C6A87C] hover:text-white transition-colors text-center">
                Included from ₹6,000/year
              </Link>
            </div>
          </div>
          <OrderBoard />
        </div>
      </section>

      {/* THE OLD WAY */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-[#8B6220] text-xs font-bold tracking-[0.3em] uppercase">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">Order books weren’t built for split orders and busy seasons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {oldWay.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-gray-100 bg-[#FAF9F6] p-6">
                <Icon className="w-6 h-6 text-[#C6A87C] mb-4" />
                <h3 className="font-bold text-[#2C2C2C] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="py-20 px-6 md:px-12 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">How it works</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">The complete order cycle, step by step</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycle.map(({ icon: Icon, stage, title, text }, i) => (
              <li key={stage} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#C6A87C] text-[#1A1A1A] font-bold flex items-center justify-center">{i + 1}</span>
                  <Icon className="w-5 h-5 text-[#C6A87C]" />
                  <span className="text-[#C6A87C] text-xs font-bold tracking-widest uppercase">{stage}</span>
                </div>
                <h3 className="text-white font-serif text-xl mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="space-y-5 text-center lg:text-left">
            <p className="text-[#8B6220] text-xs font-bold tracking-[0.3em] uppercase">Proper paperwork</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">Job cards for karigars. Receipts for customers.</h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p className="flex gap-3 text-left"><FileText className="w-5 h-5 text-[#C6A87C] shrink-0 mt-0.5" /><span><strong className="text-[#2C2C2C]">Job cards</strong> — download a proper job card for each karigar with the item, approximate weight and return date, instead of handwritten notes.</span></p>
              <p className="flex gap-3 text-left"><Receipt className="w-5 h-5 text-[#C6A87C] shrink-0 mt-0.5" /><span><strong className="text-[#2C2C2C]">Order receipts</strong> — give your customer a professional receipt listing what they ordered and when it will be ready.</span></p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <JobCard />
            <OrderReceipt />
          </div>
        </div>
      </section>

      {/* RETAIL vs WHOLESALE */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="text-[#8B6220] text-xs font-bold tracking-[0.3em] uppercase">Both editions</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">Built for showrooms and wholesalers alike</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-[#C6A87C]/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Store className="w-6 h-6 text-[#C6A87C]" />
                <h3 className="text-xl font-serif text-[#2C2C2C]">Retail showrooms</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-4">Take made-to-order and wedding orders from walk-in customers, send each piece to your karigars, and give the customer a receipt with the promised date.</p>
              <div className="text-sm font-bold text-[#8B6220]">Retailer Edition · ₹6,000/year</div>
            </div>
            <div className="rounded-3xl border border-[#C6A87C]/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-[#C6A87C]" />
                <h3 className="text-xl font-serif text-[#2C2C2C]">Wholesalers &amp; manufacturers</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-4">Take orders from retailers or customers, split them across your karigars item by item, and keep every return date and job card in one place.</p>
              <div className="text-sm font-bold text-[#8B6220]">Wholesaler Edition · ₹12,000/year</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] text-center mb-10">Common questions</h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-2xl border border-gray-100 p-6">
                <summary className="cursor-pointer font-bold text-[#2C2C2C] list-none flex justify-between gap-4">
                  {faq.question}
                  <span className="text-[#C6A87C] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-500 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Want to see it with your own orders?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-[#8B6220] hover:underline">
              Ask us on WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#8B6220] mb-6 text-center">Works with</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.slug} href={r.path} className="group block rounded-2xl border border-gray-200 p-6 hover:border-[#C6A87C]/50 hover:shadow-md transition-all">
                <div className="font-bold text-[#2C2C2C]">{r.navLabel}</div>
                <div className="text-sm text-gray-500 mt-1 flex items-center gap-1">{r.eyebrow} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></div>
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
