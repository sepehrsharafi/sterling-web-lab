"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const nav = [
  ["Work", "/#work"],
  ["Services", "/#services"],
  ["Process", "/#process"],
  ["Pricing", "/#pricing"],
  ["About", "/about"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
] as const;

const homeSections = ["services", "work", "process", "pricing"] as const;

type PillPosition = {
  left: number;
  width: number;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillPosition, setPillPosition] = useState<PillPosition | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const desktopLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      pathname !== "/" ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    setOpen(false);

    // A link to the route we are already on is a no-op in Next.js. Handle the
    // home-page case explicitly so the logo always behaves like a "back home"
    // control, even before the user has visited a hashed navigation section.
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const updateActiveSection = () => {
      const marker = Math.min(240, window.innerHeight * 0.32);
      const current = homeSections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const bounds = element.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom > marker;
      });

      setActiveSection(current ?? null);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  const isActive = (href: (typeof nav)[number][1]) => {
    if (href === "/#services" && pathname.startsWith("/services")) return true;

    if (href.startsWith("/#")) {
      return pathname === "/" && activeSection === href.slice(2);
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeIndex = nav.findIndex(([, href]) => isActive(href));
  const highlightedIndex = hoveredIndex ?? (activeIndex >= 0 ? activeIndex : null);

  useEffect(() => {
    const updatePill = () => {
      if (highlightedIndex === null) return;

      const container = desktopNavRef.current;
      const link = desktopLinkRefs.current[highlightedIndex];
      if (!container || !link) return;

      const containerBounds = container.getBoundingClientRect();
      const linkBounds = link.getBoundingClientRect();
      setPillPosition({
        left: linkBounds.left - containerBounds.left,
        width: linkBounds.width,
      });
    };

    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [highlightedIndex]);

  return (
    <header ref={headerRef} className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`pointer-events-auto mx-auto overflow-hidden rounded-2xl border transition-[background-color,border-color] duration-300 lg:transition-[max-width,background-color,border-color,box-shadow] lg:duration-500 lg:backdrop-blur-xl ${scrolled || open ? "max-w-[1320px] border-black/10 bg-white/95 shadow-[0_10px_24px_rgba(31,38,40,.1)] lg:bg-white/85 lg:shadow-[0_12px_40px_rgba(31,38,40,.12)]" : "max-w-[1440px] border-white/55 bg-white/90 shadow-[0_6px_18px_rgba(31,38,40,.06)] lg:bg-white/70 lg:shadow-[0_6px_24px_rgba(31,38,40,.06)]"}`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-5 backdrop-blur-[2px]">
          <Link
            href="/"
            aria-label="Sterling Web Lab home"
            onClick={handleLogoClick}
            className="font-display text-[30px] font-bold leading-none tracking-[-.055em] text-[#193247] transition-opacity hover:opacity-65"
          >
            Sterling<span className="text-[#81957b]">.</span>
          </Link>

          <nav
            ref={desktopNavRef}
            aria-label="Primary navigation"
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative hidden items-center overflow-hidden rounded-full border border-white/80 bg-[linear-gradient(110deg,rgba(226,235,227,.92),rgba(235,241,246,.95)_48%,rgba(247,235,229,.90))] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,.85),0_5px_18px_rgba(34,55,62,.06)] lg:flex lg:gap-1.5"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-1 left-0 rounded-full border border-white/95 bg-[linear-gradient(135deg,rgba(255,255,255,.98),rgba(248,252,250,.91))] shadow-[0_6px_18px_rgba(50,74,71,.16),0_0_0_1px_rgba(113,142,128,.08),inset_0_1px_0_white] transition-[transform,width,opacity,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{
                width: pillPosition?.width ?? 0,
                opacity: highlightedIndex === null || !pillPosition ? 0 : 1,
                transform: `translate3d(${pillPosition?.left ?? 0}px, 0, 0)`,
              }}
            />

            {nav.map(([label, href], index) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  ref={(element) => {
                    desktopLinkRefs.current[index] = element;
                  }}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                  className={`relative z-10 rounded-full px-3.5 py-2 text-[12px] font-medium transition-colors duration-300 ${active || hoveredIndex === index ? "text-[#193247]" : "text-[#596466]"}`}
                >
                  {label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#77947f] shadow-[0_0_7px_rgba(119,148,127,.9)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <a
            href="/#audit"
            className="group hidden items-center gap-2 rounded-full bg-[#253031] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg lg:inline-flex"
          >
            Free audit{" "}
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#253031] text-white transition-transform duration-200 active:scale-95 motion-reduce:transition-none lg:hidden"
          >
            <span aria-hidden="true" className="relative h-4 w-4">
              <span
                className={`absolute left-0 top-[3px] h-0.5 w-4 origin-center rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${open ? "translate-y-1 rotate-45" : "translate-y-0 rotate-0"}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-4 origin-center rounded-full bg-current transition-[transform,opacity] duration-200 ease-out motion-reduce:transition-none ${open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-[11px] h-0.5 w-4 origin-center rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${open ? "-translate-y-1 -rotate-45" : "translate-y-0 rotate-0"}`}
              />
            </span>
          </button>
        </div>

        <div
          aria-hidden={!open}
          className={`grid transition-[grid-template-rows,opacity,visibility] ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none lg:hidden ${open ? "visible grid-rows-[1fr] opacity-100 duration-[560ms]" : "invisible grid-rows-[0fr] opacity-0 duration-[380ms]"}`}
        >
          <div
            className={`min-h-0 origin-top overflow-hidden [contain:layout_paint] ${open ? "mobile-nav-bloom-open" : "mobile-nav-bloom-close"}`}
          >
            <nav
              aria-label="Mobile navigation"
              className="grid grid-cols-2 gap-px border-t border-black/10 bg-[linear-gradient(135deg,rgba(113,148,127,.17),rgba(87,120,145,.11),rgba(187,127,105,.13))] p-px"
            >
              {nav.map(([label, href], index) => {
                const active = isActive(href);
                const closedDirection = index % 2 === 0 ? "translate-x-5" : "-translate-x-5";
                const closedRotation = index % 2 === 0 ? "rotate-2" : "-rotate-2";
                return (
                  <Link
                    key={label}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`group relative flex items-center justify-between overflow-hidden px-5 py-5 text-sm font-semibold transition-[transform,opacity] duration-[240ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${open ? "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100" : `${closedDirection} ${closedRotation} translate-y-5 scale-[.88] opacity-0`} ${active ? "bg-[radial-gradient(circle_at_12%_15%,rgba(255,255,255,1),rgba(234,242,237,.96)_58%,rgba(225,235,231,.98))] text-[#193247] shadow-[inset_3px_0_0_#7f9a86,inset_0_0_28px_rgba(132,163,143,.13)]" : "bg-white/95 text-[#4f5b5d] hover:bg-[#eef3f1] hover:text-[#193247]"}`}
                    style={{
                      transitionDelay: open ? `${90 + index * 26}ms` : `${(nav.length - index - 1) * 14}ms`,
                    }}
                  >
                    <span className="flex items-center gap-2.5">
                      {active && (
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[#76917d] shadow-[0_0_9px_rgba(118,145,125,.95)]"
                        />
                      )}
                      {label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className={`transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${active ? "text-[#698474]" : "text-[#899194]"}`}
                    />
                  </Link>
                );
              })}
            </nav>
            <a
              href="/#audit"
              onClick={() => setOpen(false)}
              className={`group flex items-center justify-between bg-[#253031] px-5 py-4 text-sm font-semibold text-white transition-[transform,opacity] duration-[240ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${open ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[.92] opacity-0"}`}
              style={{ transitionDelay: open ? "280ms" : "0ms" }}
            >
              Get a free website audit{" "}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
