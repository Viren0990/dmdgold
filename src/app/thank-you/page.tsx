import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-xl w-full mx-auto text-center">
          <div className="w-24 h-24 bg-[#C6A87C]/15 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-[#C6A87C]" strokeWidth={2.5} />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-6">
            Thank You!
          </h1>
          
          <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Your request has been received. Our team will get back to you shortly to schedule your personalized demo.
          </p>

          <Link href="/">
            <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors">
              Return to Home
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
