import Image from 'next/image';
import Link from 'next/link';
import { FOUNDER } from '@/lib/constants';

export default function FounderNote() {
  return (
    <section className="relative z-30 w-full bg-white py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0 rounded-full overflow-hidden border-4 border-[#C6A87C]/30 shadow-lg">
          <Image src={FOUNDER.photo} alt={`${FOUNDER.name}, founder of DMD Gold`} fill sizes="208px" className="object-cover" />
        </div>
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-[#8B6220] text-xs font-bold tracking-[0.3em] uppercase">Built by a Jeweller, for Jewellers</h2>
          <blockquote className="text-xl md:text-2xl font-serif text-[#2C2C2C] leading-relaxed">
            &ldquo;{FOUNDER.quote}&rdquo;
          </blockquote>
          <div>
            <div className="font-bold text-[#2C2C2C]">{FOUNDER.name}</div>
            <div className="text-sm text-gray-500">{FOUNDER.role}</div>
          </div>
          <Link href="/our-story" className="inline-block text-sm font-bold text-[#8B6220] hover:underline">
            Read our story &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
