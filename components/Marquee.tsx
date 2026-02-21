"use client";
import React, { useEffect, useState } from "react";

const brands = [
  "Crust",
  "Forgwrite",
  "Artcore",
  "Electic",
  "Divante",
  "Spotify",
  "AMD",
  "Puma",
  "Harvard",
];

const Marquee: React.FC = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Detect low performance devices
    const detectLowPerformance = () => {
      // Check for old iPhones/Android devices
      const userAgent = navigator.userAgent;
      const isOldDevice = /iPhone OS [1-9]_|Android [1-6]\./.test(userAgent);
      
      // Check for low memory
      const deviceMemory = (navigator as any).deviceMemory;
      const hasLowMemory = deviceMemory && deviceMemory < 2;
      
      // Check for old processors
      const hardwareConcurrency = navigator.hardwareConcurrency;
      const hasFewCores = hardwareConcurrency && hardwareConcurrency <= 2;
      
      setIsLowPerformance(isOldDevice || hasLowMemory || hasFewCores);
    };

    detectLowPerformance();

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Use static grid for low performance devices
  if (isLowPerformance || isReducedMotion) {
    return (
      <div className="w-full py-8 md:py-12 bg-brand-black border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
            {brands.slice(0, 6).map((brand, index) => (
              <div
                key={index}
                className="text-center text-xl md:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 uppercase opacity-70 select-none"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12 bg-brand-black border-y border-white/5 overflow-hidden flex items-center relative">
      {/* Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-brand-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-brand-black to-transparent z-10"></div>

      <div className="flex w-full whitespace-nowrap overflow-hidden">
        {/* First Loop - Optimized animation speed */}
        <div className="flex animate-loop-scroll" style={{ animationDuration: '40s' }}>
          {brands.map((brand, index) => (
            <span
              key={index}
              className="mx-8 md:mx-16 text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 uppercase opacity-70 select-none"
            >
              {brand}
            </span>
          ))}
        </div>
        {/* Second Loop (Duplicate for seamlessness) */}
        <div className="flex animate-loop-scroll" aria-hidden="true" style={{ animationDuration: '40s' }}>
          {brands.map((brand, index) => (
            <span
              key={`dup-${index}`}
              className="mx-8 md:mx-16 text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 uppercase opacity-70 select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;