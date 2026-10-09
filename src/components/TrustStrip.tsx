import { TRUST_STATS } from '@/lib/constants';

export default function TrustStrip() {
  return (
    <section aria-label="DMD Gold in numbers" className="relative z-30 w-full bg-[#FAF9F6] border-y border-[#C6A87C]/20 py-8 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {TRUST_STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl md:text-4xl font-serif text-[#8B6220]">{stat.number}</div>
            <div className="mt-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
