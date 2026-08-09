"use client";

import { useEffect, useRef } from "react";

const statement =
  "We help businesses look more credible, explain their value more clearly, and turn more visits into real conversations—without adding noise.";
const words = statement.split(" ");
const inactive = [75, 83, 85];
const stops = [
  [26, 78, 255],
  [244, 104, 18],
  [198, 34, 206],
  [29, 36, 38],
];

function targetColor(position: number) {
  const scaled = position * (stops.length - 1);
  const from = Math.min(stops.length - 2, Math.floor(scaled));
  const amount = scaled - from;
  return stops[from].map((channel, i) => Math.round(channel + (stops[from + 1][i] - channel) * amount));
}

const wordColors = words.map((_, index) => targetColor(index / (words.length - 1)));
const wordStarts = words.map((_, index) => (index / words.length) * 0.82);

// CSS `filter: saturate()` creates an off-screen rendering layer for every
// word. Applying the same saturation matrix to the colors directly preserves
// the appearance without that expensive per-word compositing work.
function saturateColor(color: number[], amount: number) {
  const [red, green, blue] = color;
  return [
    (0.213 + 0.787 * amount) * red + (0.715 - 0.715 * amount) * green + (0.072 - 0.072 * amount) * blue,
    (0.213 - 0.213 * amount) * red + (0.715 + 0.285 * amount) * green + (0.072 - 0.072 * amount) * blue,
    (0.213 - 0.213 * amount) * red + (0.715 - 0.715 * amount) * green + (0.072 + 0.928 * amount) * blue,
  ].map((channel) => Math.round(Math.min(255, Math.max(0, channel))));
}

export default function ScrollFillStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    const line = lineRef.current;
    if (!section || !glow || !line) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lastWordProgress = new Array(words.length).fill(-1);
    let frame = 0;
    let lastProgress = -1;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.84;
      const end = window.innerHeight * 0.16;
      const progress = reduced.matches ? 1 : Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

      // Once the animation is fully before or after the viewport, scroll
      // events keep producing the same clamped value. Avoid repainting every
      // word for those no-op frames.
      if (progress === lastProgress) return;
      lastProgress = progress;

      wordsRef.current.forEach((word, index) => {
        if (!word) return;
        const local = Math.min(1, Math.max(0, (progress - wordStarts[index]) / 0.13));
        const eased = 1 - Math.pow(1 - local, 3);
        if (eased === lastWordProgress[index]) return;
        lastWordProgress[index] = eased;

        const target = wordColors[index];
        const color = inactive.map((channel, i) => Math.round(channel + (target[i] - channel) * eased));
        const saturation = 0.18 + eased * 0.92;
        const visibleColor = saturateColor(color, saturation);
        const visibleShadow = saturateColor(target, saturation);
        word.style.color = `rgb(${visibleColor.join(",")})`;
        word.style.opacity = `${0.22 + eased * 0.78}`;
        word.style.textShadow = `0 8px 24px rgba(${visibleShadow.join(",")}, ${eased * 0.16})`;
        word.style.transform = `translate3d(0, ${(1 - eased) * 5}px, 0) scale(${0.985 + eased * 0.015})`;
      });

      line.style.transform = `scaleX(${progress})`;
      glow.style.transform = `translate3d(${progress * 5 - 2.5}%, ${progress * -4}%, 0) scale(${1 + progress * 0.06})`;
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    const handleMotionPreferenceChange = () => {
      lastProgress = -1;
      requestUpdate();
    };
    reduced.addEventListener("change", handleMotionPreferenceChange);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduced.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);

  return (
    <section id="approach" ref={sectionRef} className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32">
      <div
        ref={glowRef}
        className="absolute -inset-[8%] bg-[radial-gradient(circle_at_25%_45%,rgba(255,210,137,.78),transparent_30%),radial-gradient(circle_at_75%_65%,rgba(116,192,255,.6),transparent_34%),radial-gradient(circle_at_48%_12%,rgba(221,169,255,.42),transparent_30%)] will-change-transform"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="micro-label mb-14">The Sterling approach</p>
        <p className="max-w-[1040px] text-[clamp(1.95rem,3.2vw,3.6rem)] leading-[1.04] tracking-[-.038em]">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              ref={(node) => {
                wordsRef.current[index] = node;
              }}
              className="mr-[.22em] inline-block origin-left text-[#4b5355] font-[450] leading-[52px] opacity-[.22] will-change-transform"
            >
              {word}
            </span>
          ))}
        </p>
        <div className="mt-12 h-px max-w-[1040px] bg-[#9da6a8]/35">
          <div
            ref={lineRef}
            className="h-px w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#2a5eff,#ff842a,#d333d2)] will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}
