'use client';

import { useEffect, useState } from 'react';
import HeroScene from './HeroScene';
import LoadingScreen from './LoadingScreen';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // 1. Start the "slide up" animation after 1.5 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    // 2. Trigger text animations slightly after the curtain starts lifting
    const textTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1900); // 1500ms + 400ms delay

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="relative h-screen w-full">
      {/* LOADER CURTAIN */}
      <LoadingScreen isLoading={showLoader} />

      {/* 1. HERO TEXT LAYER */}
      <div className="relative h-full w-full flex flex-col items-center pt-24 z-10 pointer-events-none mb-4">
        <div className="text-center space-y-4">

          {/* EYEBROW */}
          <p
            className={`
              text-[#8B6220] text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '100ms', willChange: 'transform, opacity' }}
          >
            Built by a Jeweller, for Jewellers
          </p>

          {/* MAIN TITLE — the page's only H1 */}
          <h1
            className={`
              text-[#2C2C2C] text-[2.70rem] md:text-6xl font-serif font-medium leading-tight
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '250ms', willChange: 'transform, opacity' }}
          >
            Managing Your <span className="italic text-[#8B6220]">Jewellery Business</span> <br className="hidden md:block" /> Just Got Simpler.
          </h1>

          {/* SUBLINE - ALL BREAKPOINTS */}
          <div
            className={`
              text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '400ms' }}
          >
            <p>From tracking gold grams to instant E-invoices and GST bills — billing, stock, karigars and wholesale orders in one software.</p>
          </div>

        </div>
      </div>

      {/* 2. 3D SCENE BACKGROUND */}
      <HeroScene />

    </section>
  );
}