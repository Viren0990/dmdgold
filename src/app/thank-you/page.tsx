import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | DMD Gold',
  description: 'Thank you for your interest in DMD Gold. We will be in touch shortly.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#FAF9F6] min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center border border-[#C6A87C]/10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-6">
            Thank You!
          </h1>
          
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            We have received your demo request. One of our jewellery software experts will be in touch with you shortly to schedule your personalized walkthrough.
          </p>
          
          <Link href="/">
            <button className="bg-[#C6A87C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#b0956b] transition-all duration-300 shadow-lg shadow-[#C6A87C]/25 hover:shadow-xl hover:shadow-[#C6A87C]/30 flex items-center justify-center gap-2 mx-auto group">
              Explore More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
