"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  ["Work", "/#work"],
  ["Services", "/#services"],
  ["Process", "/#process"],
  ["Pricing", "/#pricing"],
  ["About", "/about"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`pointer-events-auto mx-auto flex h-16 items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:px-5 ${scrolled || open ? "max-w-[1320px] border-black/10 bg-white/85 shadow-[0_12px_40px_rgba(31,38,40,.12)] backdrop-blur-xl" : "max-w-[1440px] border-white/55 bg-white/70 shadow-[0_6px_24px_rgba(31,38,40,.06)] backdrop-blur-md"}`}
      >
        <Link
          href="/"
          className="font-display text-[30px] font-bold leading-none tracking-[-.055em] text-[#193247] transition-opacity hover:opacity-65"
        >
          sterling<span className="text-[#81957b]">.</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center lg:gap-1.5 rounded-full border border-black/[.045] bg-[#eef2f3]/80 p-1 lg:flex"
        >
          {nav.map(([label, href]) => {
            const active = href.startsWith("/#") ? false : pathname.startsWith(href);
            return (
              <Link
                key={label}
                href={href}
                className={`rounded-full px-3.5 py-2 text-[12px] font-medium transition-all duration-200 ${active ? "bg-white text-[#1f2526] shadow-sm" : "text-[#5a6365] hover:bg-white/75 hover:text-[#1f2526]"}`}
              >
                {label}
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
          className="grid h-10 w-10 place-items-center rounded-full bg-[#253031] text-white lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={`pointer-events-auto mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-2xl border border-black/10 bg-white/95 shadow-[0_20px_55px_rgba(31,38,40,.16)] backdrop-blur-xl transition-all duration-300 lg:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
      >
        <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-px bg-black/[.06] p-px">
          {nav.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between bg-white px-5 py-5 text-sm font-semibold text-[#283031] transition-colors hover:bg-[#eef2f3]"
            >
              {label}
              <ArrowUpRight
                size={14}
                className="text-[#899194] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          ))}
        </nav>
        <a
          href="/#audit"
          onClick={() => setOpen(false)}
          className="group flex items-center justify-between bg-[#253031] px-5 py-4 text-sm font-semibold text-white"
        >
          Get a free website audit{" "}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </header>
  );
}
