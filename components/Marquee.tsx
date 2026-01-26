"use client";
import React from "react";

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
  return (
    <div className="w-full py-12 bg-brand-black border-y border-white/5 overflow-hidden flex items-center relative">
      {/* Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-brand-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-brand-black to-transparent z-10"></div>

      <div className="flex w-full whitespace-nowrap overflow-hidden">
        {/* First Loop */}
        <div className="flex animate-loop-scroll">
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
        <div className="flex animate-loop-scroll" aria-hidden="true">
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
