import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Agency",
  description:
    "Meet Sterling Web Lab, a focused web strategy, design, and development agency helping service businesses turn their websites into stronger sales assets.",
  alternates: { canonical: "/agency" },
};

const outcomes = [
  {
    number: "01",
    title: "Clarity that earns attention",
    copy: "Visitors understand who you help, what you offer, and why it matters without decoding vague agency language.",
    shift: "From vague positioning to a clear reason to keep reading.",
    color: "#ffc36d",
  },
  {
    number: "02",
    title: "Credibility before the call",
    copy: "The quality of the website supports the quality of the business, so referrals and prospects arrive with more confidence.",
    shift: "From cautious interest to confidence before the first conversation.",
    color: "#9ed7ff",
  },
  {
    number: "03",
    title: "A simpler next step",
    copy: "Strong hierarchy, relevant proof, and deliberate calls to action help interested visitors move forward.",
    shift: "From passive browsing to one obvious, low-friction action.",
    color: "#b4a6ff",
  },
];

const heroPromises = [
  { title: "Understand the offer quickly", copy: "Clear positioning and message hierarchy", color: "#ffc36d" },
  { title: "Trust the business sooner", copy: "Credible design and relevant proof", color: "#9ed7ff" },
  { title: "Know exactly what to do next", copy: "Focused journeys and deliberate CTAs", color: "#b4a6ff" },
];

const offer = [
  { title: "Strategy", copy: "Positioning, priorities, page structure, and the journey from first visit to enquiry.", result: "A buildable plan" },
  { title: "Messaging", copy: "A clear hierarchy that turns what you know about the business into language customers understand.", result: "A sharper story" },
  { title: "Design", copy: "An original visual system that makes the company feel credible, distinctive, and easy to navigate.", result: "Visible credibility" },
  { title: "Development", copy: "A responsive Next.js build designed for speed, maintainability, essential SEO, and reliable use.", result: "A reliable website" },
  { title: "Improvement", copy: "Practical support after launch so the website can keep pace with the business.", result: "Long-term usefulness" },
];

const process = [
  {
    number: "01",
    title: "Diagnose before prescribing",
    copy: "We review the offer, audience, current website, commercial priorities, and the friction costing you attention or enquiries.",
    color: "#ffc36d",
  },
  {
    number: "02",
    title: "Make the important decisions",
    copy: "We agree on positioning, message, scope, structure, and success criteria before production makes changes expensive.",
    color: "#9ed7ff",
  },
  {
    number: "03",
    title: "Design and build as one system",
    copy: "Content, UX, visual design, and development stay connected, with clear review points and fewer handoffs.",
    color: "#b4a6ff",
  },
  {
    number: "04",
    title: "Launch, learn, improve",
    copy: "We test the essentials, launch carefully, and identify the next useful improvements instead of treating launch day as the finish line.",
    color: "#d9f0cf",
  },
];

const goodFit = [
  "Your website undersells a capable business",
  "Trust and clarity influence the sale",
  "You want direct access to the people doing the work",
  "You value sound decisions more than extra deliverables",
];

const notFit = [
  "You need a same-week template with no discovery",
  "The lowest possible price is the main decision",
  "You want guaranteed rankings or conversion claims",
  "No one can provide context, content, or approvals",
];

export default function AgencyPage() {
  return (
    <main className="overflow-hidden bg-[#f4f7f8] text-[#25292a]">
      <section className="relative border-b border-[#d7ddde] pb-20 pt-36 lg:pb-28 lg:pt-44">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(255,195,109,.33),transparent_27%),radial-gradient(circle_at_87%_22%,rgba(158,215,255,.42),transparent_30%),radial-gradient(circle_at_64%_88%,rgba(180,166,255,.23),transparent_27%)]" />
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
          <p className="micro-label">A focused web partner for service businesses</p>
          <div className="mt-7 grid items-start gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
            <h1 className="max-w-3xl text-[clamp(2.75rem,4.7vw,5rem)] font-medium leading-[.98] tracking-[-.05em]">
              Make your website easier to trust—and easier to buy from.
            </h1>
            <div className="max-w-lg lg:pt-1">
              <p className="text-lg leading-8 text-[#576164]">
                Sterling Web Lab connects strategy, messaging, design, and development to turn an underperforming website into a useful part of the sales process.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="cta-primary group inline-flex items-center gap-3 bg-[#293132] px-5 py-3 text-sm font-semibold text-white">
                  Request a free audit <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/services" className="cta-secondary inline-flex items-center gap-3 border border-[#293132] px-5 py-3 text-sm font-semibold">
                  Explore services <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-3 sm:grid-cols-3 lg:mt-20">
            {heroPromises.map((item, index) => (
              <article
                key={item.title}
                tabIndex={0}
                className="group relative min-h-40 cursor-default overflow-hidden rounded-[1.15rem] border border-[#c9d0d2] bg-white/55 p-5 outline-none backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#aab5b7] hover:bg-white hover:shadow-[0_18px_38px_rgba(42,51,53,.1)] focus:-translate-y-1 focus:border-[#8d9a9c] focus:bg-white focus:shadow-[0_18px_38px_rgba(42,51,53,.1)] active:scale-[.985]"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-focus:scale-x-100" style={{ backgroundColor: item.color }} />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#7b8587]">0{index + 1}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#edf1f2] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#293132] group-hover:text-white group-focus:rotate-45 group-focus:bg-[#293132] group-focus:text-white">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <h2 className="mt-6 text-base font-semibold tracking-[-.02em]">{item.title}</h2>
                <p className="mt-2 text-xs leading-5 text-[#697376] transition-colors group-hover:text-[#4f595b] group-focus:text-[#4f595b]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="micro-label">The real problem</p>
              <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1] tracking-[-.045em] lg:text-5xl">
                Most weak websites do not have a decoration problem.
              </h2>
            </div>
            <div className="max-w-2xl lg:justify-self-end lg:pt-12">
              <p className="text-2xl leading-[1.3] tracking-[-.025em] text-[#424b4d]">
                They have a decision problem: the audience is too broad, the offer is hard to explain, the proof appears too late, and the next step asks for too much confidence.
              </p>
              <p className="mt-6 leading-7 text-[#626c6e]">
                A visual refresh alone cannot solve that. We work through the decisions underneath the page, then use design and technology to make those decisions visible.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.number} tabIndex={0} className="group relative min-h-[390px] cursor-default overflow-hidden rounded-[1.3rem] border border-[#cbd2d3] bg-[#f4f7f8] p-7 outline-none transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_24px_55px_rgba(42,51,53,.11)] focus:-translate-y-2 focus:bg-white focus:shadow-[0_24px_55px_rgba(42,51,53,.11)] active:scale-[.985] lg:p-9">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-focus:scale-x-100" style={{ backgroundColor: outcome.color }} />
                <span aria-hidden className="absolute -right-16 -top-16 h-40 w-40 scale-50 rounded-full opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-20 group-focus:scale-100 group-focus:opacity-20" style={{ backgroundColor: outcome.color }} />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#7a8486]">{outcome.number}</span>
                  <span className="h-3 w-3 rounded-full transition-transform duration-500 group-hover:scale-[1.8] group-focus:scale-[1.8]" style={{ backgroundColor: outcome.color }} />
                </div>
                <h3 className="mt-16 text-2xl font-semibold tracking-[-.035em] transition-transform duration-500 group-hover:-translate-y-1 group-focus:-translate-y-1">{outcome.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[#626c6e]">{outcome.copy}</p>
                <div className="absolute inset-x-7 bottom-7 border-t border-[#cbd2d3] pt-5 lg:inset-x-9 lg:bottom-9">
                  <p className="text-[.62rem] font-bold uppercase tracking-[.15em] text-[#7a8486]">The shift</p>
                  <p className="mt-2 text-xs leading-5 text-[#555f61]">{outcome.shift}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2d3536] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="micro-label !text-white/45">One connected offer</p>
            <h2 className="mt-5 max-w-lg text-4xl font-medium leading-[1] tracking-[-.045em] lg:text-6xl">
              Fewer handoffs. More useful work.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-white/60">
              The value is not a longer list of deliverables. It is having the right decisions carried through the entire website by one focused partner.
            </p>
          </div>
          <div className="space-y-2">
            {offer.map((item, index) => (
              <article
                key={item.title}
                tabIndex={0}
                className="group relative grid cursor-default gap-3 overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/[.025] p-5 outline-none transition-all duration-500 hover:translate-x-2 hover:border-white/20 hover:bg-white/[.075] focus:translate-x-2 focus:border-white/20 focus:bg-white/[.075] active:scale-[.99] sm:grid-cols-[3rem_9rem_1fr] sm:items-center lg:p-6"
              >
                <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-[#9ed7ff] transition-transform duration-500 group-hover:scale-y-100 group-focus:scale-y-100" />
                <span className="font-mono text-xs text-white/30 transition-colors group-hover:text-white/70 group-focus:text-white/70">0{index + 1}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div>
                  <p className="max-w-lg text-sm leading-6 text-white/55 transition-colors group-hover:text-white/75 group-focus:text-white/75">{item.copy}</p>
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-[.65rem] font-semibold uppercase tracking-[.1em] text-white/45 transition-all duration-500 group-hover:border-white/20 group-hover:text-white/75 group-focus:border-white/20 group-focus:text-white/75">
                    {item.result}<ArrowRight size={11} className="transition-transform duration-500 group-hover:translate-x-1 group-focus:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef2f3] py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="micro-label">How the work moves</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1] tracking-[-.045em] lg:text-6xl">
                Reduce uncertainty before adding complexity.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#606a6c]">
              Clear stages keep momentum high and make feedback useful. You always know what is being decided, what comes next, and why it matters.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {process.map((step) => (
              <article key={step.number} tabIndex={0} className="group relative min-h-72 cursor-default overflow-hidden rounded-[1.3rem] border border-[#cbd3d5] bg-white p-7 outline-none transition-all duration-500 hover:-translate-y-1.5 hover:border-[#aebabc] hover:shadow-[0_22px_48px_rgba(42,51,53,.1)] focus:-translate-y-1.5 focus:border-[#aebabc] focus:shadow-[0_22px_48px_rgba(42,51,53,.1)] active:scale-[.99] lg:p-9">
                <span aria-hidden className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-[.12] transition-transform duration-700 group-hover:scale-x-100 group-focus:scale-x-100" style={{ backgroundColor: step.color }} />
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full font-mono text-xs text-[#4e585a] transition-all duration-500 group-hover:scale-110 group-focus:scale-110" style={{ backgroundColor: step.color }}>{step.number}</span>
                  <ArrowUpRight size={18} className="text-[#879193] transition-all duration-500 group-hover:rotate-45 group-hover:text-[#293132] group-focus:rotate-45 group-focus:text-[#293132]" />
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-.035em] transition-transform duration-500 group-hover:translate-x-1 group-focus:translate-x-1">{step.title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-[#626c6e] transition-colors group-hover:text-[#4f595b] group-focus:text-[#4f595b]">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid items-end gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="micro-label">A useful partnership starts with fit</p>
              <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1] tracking-[-.045em] lg:text-5xl">Know whether this model works for you.</h2>
            </div>
            <div className="relative hidden h-48 overflow-hidden rounded-[1.3rem] lg:block">
              <Image src="/agancy-footer-1.png" alt="A website interface created by Sterling Web Lab" fill sizes="55vw" className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#293132]/20 to-transparent" />
            </div>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article tabIndex={0} className="group relative overflow-hidden rounded-[1.5rem] border border-[#c8dcd0] bg-[#edf7f1] p-7 outline-none transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(48,91,68,.12)] focus:-translate-y-1 focus:shadow-[0_22px_48px_rgba(48,91,68,.12)] active:scale-[.99] lg:p-10">
              <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#b8d8aa]/25 transition-transform duration-700 group-hover:scale-125 group-focus:scale-125" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#d4eadb] text-[#315a43]"><Check size={19} /></span>
                <div><p className="micro-label !text-[#547061]">Strong fit</p><h3 className="mt-1 text-2xl font-semibold tracking-[-.035em]">We will likely work well together if…</h3></div>
              </div>
              <ul className="relative mt-8 space-y-2">
                {goodFit.map((item) => <li key={item} className="flex items-center gap-3 rounded-xl border border-transparent bg-white/50 px-4 py-3 text-sm leading-6 transition-all duration-300 group-hover:border-[#c8dcd0] group-hover:bg-white group-focus:border-[#c8dcd0] group-focus:bg-white"><Check size={16} className="shrink-0 text-[#3f6753]" />{item}</li>)}
              </ul>
            </article>
            <article tabIndex={0} className="group relative overflow-hidden rounded-[1.5rem] border border-[#e0d2c7] bg-[#f8f2ec] p-7 outline-none transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(101,73,56,.1)] focus:-translate-y-1 focus:shadow-[0_22px_48px_rgba(101,73,56,.1)] active:scale-[.99] lg:p-10">
              <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#e5bba6]/20 transition-transform duration-700 group-hover:scale-125 group-focus:scale-125" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#eeded4] text-[#825847]"><X size={19} /></span>
                <div><p className="micro-label !text-[#86695e]">Not the best fit</p><h3 className="mt-1 text-2xl font-semibold tracking-[-.035em]">Another route may serve you better if…</h3></div>
              </div>
              <ul className="relative mt-8 space-y-2">
                {notFit.map((item) => <li key={item} className="flex items-center gap-3 rounded-xl border border-transparent bg-white/50 px-4 py-3 text-sm leading-6 transition-all duration-300 group-hover:border-[#e0d2c7] group-hover:bg-white group-focus:border-[#e0d2c7] group-focus:bg-white"><X size={16} className="shrink-0 text-[#8a5d52]" />{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#d5dcde] py-20 lg:py-28">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_12%_85%,rgba(255,195,109,.55),transparent_29%),radial-gradient(circle_at_83%_18%,rgba(158,215,255,.6),transparent_34%),radial-gradient(circle_at_57%_90%,rgba(180,166,255,.34),transparent_32%)]" />
        <div className="relative mx-auto flex max-w-[1320px] flex-col justify-between gap-10 px-6 md:flex-row md:items-end lg:px-10">
          <div>
            <p className="micro-label">The first step costs nothing</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[.98] tracking-[-.05em] lg:text-6xl">
              Find out what your website should fix first.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-6 text-[#566164]">
              Request a free audit. We will review the current website and send practical priorities for clarity, credibility, conversion, and essential SEO—without forcing a sales call.
            </p>
            <Link href="/contact" className="cta-primary group mt-6 inline-flex items-center gap-3 bg-[#293132] px-5 py-3 text-sm font-semibold text-white">
              Request my free audit <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
