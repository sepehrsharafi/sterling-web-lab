"use client";
import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      // Calculate mouse position relative to window center
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // Movement range
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      // Apply to CSS variables for smooth GPU transitions
      containerRef.current.style.setProperty("--move-x", `${x}px`);
      containerRef.current.style.setProperty("--move-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black selection:bg-brand-accent selection:text-white">
      {/* BACKGROUND LAYER - Strictly z-0 */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        {/* 1. Base Dark Grid (Dot Matrix Style) */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        ></div>

        {/* 2. Interactive Glowing Blobs - STERLING COLORS (Cyan/Blue) */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen animate-blob will-change-transform"
          style={{ transform: "translate(var(--move-x), var(--move-y))" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000 will-change-transform"
          style={{
            transform:
              "translate(calc(var(--move-x) * -1.5), calc(var(--move-y) * -1.5))",
          }}
        />

        {/* 3. Central Glow for Text Readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen" />

        {/* 4. Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* CONTENT LAYER - Strictly z-10 */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl shadow-black/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
            Lab Operational
          </span>
        </div>

        {/* Hero Typography */}
        <h1
          className="font-display font-bold leading-[0.9] tracking-tighter text-white mb-8
                    text-[16vw] md:text-[8rem] lg:text-[9rem] select-none
                    flex flex-col items-center overflow-visible"
        >
          <span className="relative inline-block z-10 drop-shadow-xl">
            Get Found.
          </span>
          <span className="relative inline-block px-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500 z-10 drop-shadow-2xl">
            Get Customers.
          </span>
        </h1>

        <p className="max-w-xl text-xl md:text-xl text-gray-300 leading-relaxed mb-10 drop-shadow-md">
          Turn “I Should Have a Website” into “I Finally Do.”
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <button
            onClick={() =>
              document
                .getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-white text-black font-bold text-lg xl:text-xl rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Experiment <ArrowRight size={18} />
            </span>
          </button>

          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-4 border border-white/20 text-lg xl:text-xl text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
          >
            View Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-10 -ml-[22px]">
        <span className="text-[10px] uppercase tracking-widest text-white">
          Scroll
        </span>
        <ArrowDown size={16} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
