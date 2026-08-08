"use client";

import { ArrowRight, ArrowUpRight, Instagram, Mail, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";

const nav = [["Work", "/#work"], ["Services", "/services"], ["Process", "/#process"], ["Pricing", "/#pricing"], ["About", "/about"], ["Agency", "/agency"], ["Insights", "/blog"], ["Contact", "/contact"]];
const legalCopy = {
  "Privacy Policy": "We respect your privacy and use information only to respond to enquiries and provide our services.",
  "Terms of Service": "Project terms, scope, timing, responsibilities, and approvals are agreed clearly before work begins.",
};
const smooth = "transition-all duration-[450ms] ease-[cubic-bezier(.2,.8,.2,1)]";

export default function Footer() {
  const [legal, setLegal] = useState<keyof typeof legalCopy | null>(null);

  return (
    <footer id="footer" className="relative overflow-hidden bg-[#252d2e] text-[#edf2f1]">
      <div aria-hidden className="absolute -right-24 top-10 h-72 w-72 rotate-12 bg-[#9ed7ff]/10" />
      <div aria-hidden className="absolute -right-10 top-32 h-72 w-72 rotate-12 bg-[#ffc36d]/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="my-6 flex flex-col gap-7 rounded-[1.35rem] bg-white/[.035] px-5 py-5 shadow-[inset_0_1px_rgba(255,255,255,.04)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/" className="font-display text-[2.1rem] font-bold tracking-[-.06em] text-white" aria-label="Sterling Web Lab home">sterling<span className="text-[#a4b099]">.</span></Link>
            <span className="hidden h-7 w-px bg-white/15 sm:block" />
            <span className="flex items-center gap-2 text-xs text-white/65"><span className="h-2 w-2 rounded-full bg-[#b8d8aa] shadow-[0_0_0_4px_rgba(184,216,170,.09)]" />Taking on select projects</span>
          </div>
          <Link href="/contact" className={`group inline-flex w-fit items-center gap-4 rounded-full bg-[#f2f4f2] py-2 pl-5 pr-2 text-sm font-semibold text-[#202829] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,.16)] ${smooth}`}>
            Start a conversation <span className={`grid h-8 w-8 place-items-center rounded-full bg-[#252d2e] text-white group-hover:rotate-45 group-hover:bg-[#3c4849] ${smooth}`}><ArrowUpRight size={14} /></span>
          </Link>
        </div>

        <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_.7fr_1.25fr_.8fr] lg:gap-14 lg:py-14">
          <div>
            <p className="max-w-sm text-3xl font-medium leading-[1.08] tracking-[-.045em] text-white sm:text-4xl">Clear thinking.<br />Useful websites.<br />No unnecessary noise.</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">Boutique web design and development for service businesses and growing brands.</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-[.66rem] font-bold uppercase tracking-[.18em] text-[#a9b5b3]">Explore</p>
            <div className="space-y-1 rounded-[1.1rem] bg-white/[.025] p-2">
              {nav.map(([label, href]) => <Link key={label} href={href} className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-white/65 hover:bg-white/[.075] hover:pl-4 hover:text-white ${smooth}`}>
                {label}<ArrowRight size={14} className={`-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ${smooth}`} />
              </Link>)}
            </div>
          </nav>

          <nav aria-label="Services">
            <p className="mb-4 text-[.66rem] font-bold uppercase tracking-[.18em] text-[#a9b5b3]">Services</p>
            <div className="space-y-1 rounded-[1.1rem] bg-white/[.025] p-2">
              {services.map(service => <Link key={service.slug} href={`/services/${service.slug}`} className={`group grid grid-cols-[2rem_1fr_auto] items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-white/65 hover:bg-white/[.075] hover:pl-4 hover:text-white ${smooth}`}>
                <span className="flex items-center gap-2 font-mono text-[.62rem] text-white/35"><i className="h-1.5 w-1.5 rounded-full transition-transform duration-500 group-hover:scale-[1.7]" style={{ backgroundColor: service.color }} />{service.number}</span>
                <span>{service.title}</span>
                <ArrowUpRight size={14} className={`opacity-45 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 ${smooth}`} />
              </Link>)}
            </div>
          </nav>

          <div>
            <p className="mb-4 text-[.66rem] font-bold uppercase tracking-[.18em] text-[#a9b5b3]">Say hello</p>
            <div className="space-y-2">
              <a href="mailto:sterlingweblab@gmail.com" className={`group flex items-center gap-3 rounded-xl bg-white/[.035] p-2 pr-3 text-sm text-white/65 hover:-translate-y-0.5 hover:bg-white/[.08] hover:text-white ${smooth}`}><span className={`grid h-9 w-9 place-items-center rounded-lg bg-white/[.06] group-hover:bg-[#ffc36d] group-hover:text-[#202829] ${smooth}`}><Mail size={15} /></span>Email us<ArrowUpRight size={13} className={`ml-auto opacity-45 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 ${smooth}`} /></a>
              <a href="https://instagram.com/sterlingweblab" target="_blank" rel="noreferrer" className={`group flex items-center gap-3 rounded-xl bg-white/[.035] p-2 pr-3 text-sm text-white/65 hover:-translate-y-0.5 hover:bg-white/[.08] hover:text-white ${smooth}`}><span className={`grid h-9 w-9 place-items-center rounded-lg bg-white/[.06] group-hover:bg-[#c1b2ff] group-hover:text-[#202829] ${smooth}`}><Instagram size={15} /></span>Instagram<ArrowUpRight size={13} className={`ml-auto opacity-45 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 ${smooth}`} /></a>
            </div>
            <p className="mt-5 text-xs leading-5 text-white/45">Working directly with clients worldwide.</p>
          </div>
        </div>

        <div className="mb-5 flex flex-col justify-between gap-4 rounded-2xl bg-black/10 px-5 py-4 text-[.68rem] text-white/40 sm:flex-row sm:items-center">
          <span>{"©"} 2026 Sterling Web Lab. All rights reserved.</span>
          <div className="flex gap-5">{Object.keys(legalCopy).map(label => <button key={label} onClick={() => setLegal(label as keyof typeof legalCopy)} className="transition-colors duration-300 hover:text-white">{label}</button>)}</div>
        </div>
      </div>

      {legal && <div className="fixed inset-0 z-[100] grid place-items-center bg-[#111718]/80 p-5 backdrop-blur-sm" onClick={() => setLegal(null)} role="presentation">
        <div role="dialog" aria-modal="true" aria-labelledby="legal-title" className="relative w-full max-w-lg rounded-[1.5rem] border border-black/10 bg-[#f5f5f0] p-7 text-[#263233] shadow-2xl sm:p-9" onClick={event => event.stopPropagation()}>
          <button onClick={() => setLegal(null)} className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-black/10 transition hover:rotate-6 hover:bg-white" aria-label="Close dialog"><X size={16} /></button>
          <p className="text-[.66rem] font-bold uppercase tracking-[.18em] text-[#6a7777]">Sterling Web Lab</p>
          <h2 id="legal-title" className="mt-3 text-3xl font-semibold tracking-[-.04em]">{legal}</h2>
          <p className="mt-5 max-w-md leading-7 text-[#5b6666]">{legalCopy[legal]}</p>
          <button className="mt-7 rounded-full bg-[#252d2e] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5" onClick={() => setLegal(null)}>Close</button>
        </div>
      </div>}
    </footer>
  );
}
