'use client';

import { useEffect, useState } from 'react';
import HeroScene from './HeroScene';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger almost immediately after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full">
      
      {/* 1. HERO TEXT LAYER */}
      <div className="relative h-full w-full flex flex-col items-center pt-24 z-10 pointer-events-none">
        <div className="text-center space-y-4">
          
          {/* SUBTITLE */}
          <h2 
            className={`
              text-[#C6A87C] text-xs md:text-sm font-bold tracking-[0.3em] uppercase
              transition-all duration-700 ease-out 
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            // Quick 100ms delay
            style={{ transitionDelay: '100ms', willChange: 'transform, opacity' }}
          >
            All-In-One Solution
          </h2>
          
          {/* MAIN TITLE */}
          <h1 
            className={`
              text-[#2C2C2C] text-5xl md:text-7xl font-serif font-medium leading-tight
              transition-all duration-700 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            // Tighter stagger (250ms)
            style={{ transitionDelay: '250ms', willChange: 'transform, opacity' }}
          >
            The Digital Heart <br />
            of Your <span className="italic text-[#C6A87C]">Jewelry</span> Business
          </h1>

        </div>
      </div>

      {/* 2. 3D SCENE BACKGROUND */}
      <HeroScene />
      
    </section>
  );
}