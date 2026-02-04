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

          {/* SUBTITLE - DESKTOP ONLY */}
          <h2
            className={`
              hidden md:block
              text-[#C6A87C] text-xs md:text-sm font-bold tracking-[0.3em] uppercase
              transition-all duration-700 ease-out 
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            // Quick 100ms delay
            style={{ transitionDelay: '100ms', willChange: 'transform, opacity' }}
          >
            All-In-One Solution
          </h2>

          {/* MAIN TITLE - DESKTOP ONLY */}
          <h1
            className={`
              
              text-[#2C2C2C] text-[2.70rem] md:text-6xl font-serif font-medium leading-tight
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            // Tighter stagger (250ms)
            style={{ transitionDelay: '250ms', willChange: 'transform, opacity' }}
          >
            Managing Your <span className="italic text-[#C6A87C]">Jewelry Business</span> <br className="hidden md:block" /> Just Got Simpler.
          </h1>

          {/* MOBILE ONLY SUBHEADING */}
          <div
            className={`
              md:hidden
              text-[#2C2C2C] font-serif
              transition-all duration-700 ease-out p-2
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '150ms' }}
          >
            <p className="text-gray-500 text-sm">From tracking gold grams to instant GST bills—DMD Gold: easy software by jewelers, for jewelers.</p>

          </div>

          <p className={`hidden lg:block text-gray-500 max-w-2xl mx-auto leading-relaxed leading-tight
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>From tracking gold grams to instant GST bills—DMD Gold: easy software by jewelers, for jewelers.</p>


        </div>
      </div>

      {/* 2. 3D SCENE BACKGROUND */}
      <HeroScene />

    </section>
  );
}