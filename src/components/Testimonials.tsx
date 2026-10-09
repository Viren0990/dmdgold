import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="relative z-30 w-full bg-[#FAF9F6] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-[#8B6220] text-xs font-bold tracking-[0.3em] uppercase">From Our Jewellers</h2>
          <p className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">Trusted by 500+ jewellery shops</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.shop} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5">
              <div className="text-[#8B6220] font-serif text-xl">{t.result}</div>
              <blockquote className="text-gray-600 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3">
                {t.photo && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image src={t.photo} alt={t.owner} fill sizes="48px" className="object-cover" />
                  </div>
                )}
                <div>
                  <div className="font-bold text-[#2C2C2C] text-sm">{t.owner}</div>
                  <div className="text-xs text-gray-500">{t.shop}, {t.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
