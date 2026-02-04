'use client';

import React from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
    isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div
            className={`
        fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF9F6]
        transition-transform duration-[1000ms] ease-in-out
        ${isLoading ? 'translate-y-0' : '-translate-y-full'}
      `}
            style={{
                // Ensure it stays visible during the transition, then effectively mostly gone
                // We use translate-y-full so it goes UP.
                willChange: 'transform',
            }}
        >
            <div className="flex flex-col items-center gap-2">
                {/* 1. WELCOME TO */}
                <div className={`
            overflow-hidden
            transition-all duration-700 ease-out delay-100
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
                    <span className="text-[#2C2C2C] text-sm md:text-base font-medium tracking-[0.2em] uppercase font-serif">
                        Welcome to
                    </span>
                </div>

                {/* 2. DMD GOLD SOFTWARE */}
                <div className={`
          overflow-hidden
          transition-all duration-700 ease-out delay-300
          ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
                    <h1 className="text-[#C6A87C] text-2xl md:text-3xl font-serif font-bold tracking-wide text-center">
                        DMD GOLD SOFTWARE
                    </h1>
                </div>

                {/* 3. LOGO CONTAINER */}
                <div className={`
            relative w-24 h-24 md:w-32 md:h-32 mt-4
            transition-all duration-1000 delay-500
            ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
                    <Image
                        src="/images/logo.png"
                        alt="DMD Gold Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
