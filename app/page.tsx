import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ScrollHandler } from "@/components/ScrollHandler";
import ScrollFillStatement from "@/components/ScrollFillStatement";
import InteractiveServices from "@/components/InteractiveServices";
import InteractiveProcess from "@/components/InteractiveProcess";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development for Service Businesses",
  description:
    "Sterling Web Lab designs and builds clear, high-performing websites that help service businesses earn trust, attract better-fit clients, and generate enquiries.",
  alternates: { canonical: "/" },
};

const painPoints = [
  { number: "01", color: "#ffc36d", problem: "People arrive interested—and leave unsure what you actually do.", cost: "When the message takes effort to decode, good prospects assume the offer is not for them and move on.", fix: "We clarify the positioning, message, and page hierarchy so the right visitor understands the value quickly." },
  { number: "02", color: "#9ed7ff", problem: "Your website lowers confidence before you ever get to speak.", cost: "A generic or dated experience makes a capable business feel less established, less considered, and harder to trust.", fix: "We build a credible visual and UX system that makes the quality of the business visible from the first impression." },
  { number: "03", color: "#b4a6ff", problem: "Qualified visitors hesitate instead of starting a conversation.", cost: "Weak proof, vague offers, and uncertain next steps turn genuine buying intent into another closed browser tab.", fix: "We strengthen the offer, surface the right evidence, and create a clear path from interest to enquiry." },
  { number: "04", color: "#d9f0cf", problem: "The website falls behind while the business keeps moving.", cost: "When every update is difficult, old messaging and neglected details quietly weaken the site month after month.", fix: "We create a maintainable foundation and provide focused support so the website keeps earning its place." },
];

const carePlans = [
  {
    name: "Maintain",
    price: "$50",
    color: "#d9f0cf",
    badge: "Essential coverage",
    outcome: "Keep your website dependable.",
    copy: "For a stable website that needs regular checks and occasional changes—without finding help from scratch each time.",
    bestFor: "Best for websites that rarely change",
    includes: ["Monthly technical health check", "1 focused content or design update", "Form and dependency check", "Email support when questions come up"],
  },
  {
    name: "Improve",
    price: "$100",
    color: "#9ed7ff",
    badge: "Steady progress",
    outcome: "Keep pace with the business.",
    copy: "For teams that need the website to stay current, polished, and gradually improve as their offer and priorities evolve.",
    bestFor: "Best for active service-business websites",
    includes: ["Everything in Maintain", "2 focused updates each month", "Performance and essential SEO review", "A clear next-improvement recommendation"],
  },
  {
    name: "Optimize",
    price: "$350",
    color: "#ffc36d",
    badge: "Focused growth",
    outcome: "Turn attention into better action.",
    copy: "For websites tied closely to sales, where informed monthly improvements can reduce friction and strengthen the path to enquiry.",
    bestFor: "Best for websites that actively support sales",
    includes: ["Everything in Improve", "1 focused improvement sprint", "Analytics and conversion-path review", "Prioritized monthly improvement roadmap"],
  },
];

export default function Home() {
  return <main className="tsh-home bg-[#f4f7f8] text-[#25292a]">
    <ScrollHandler />

    <section className="relative min-h-[760px] overflow-hidden border-b border-[#dce1e2] pt-24">
      <div className="absolute inset-x-0 top-0 h-[590px] overflow-hidden">
        <div className="absolute -left-[7%] top-12 h-[360px] w-[41%] -skew-y-6 bg-[#fff0ce]/80" />
        <div className="absolute left-[25%] top-0 h-[430px] w-[31%] skew-y-6 bg-[#dce0ff]/70" />
        <div className="absolute right-[15%] top-8 h-[440px] w-[31%] -skew-y-6 bg-[#cbe9ff]/75" />
        <div className="absolute -right-[8%] top-16 h-[390px] w-[31%] skew-y-6 bg-[#d8f2ff]/80" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#f4f7f8]" />
      </div>
      <div className="relative mx-auto flex min-h-[670px] max-w-[1440px] flex-col justify-between px-6 pb-14 pt-16 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div className="max-w-[600px]">
            <p className="micro-label">Boutique web design & development</p>
            <h1 className="mt-5 text-[clamp(2.75rem,3.7vw,4.1rem)] font-medium leading-[1.01] tracking-[-.04em]">Turn your website into a reason to choose you.</h1>
            <p className="mt-6 max-w-[540px] text-base leading-7 text-[#575f61]">We design and hand-code clear, credible Next.js websites that help service businesses earn trust, attract better-fit clients, and turn more visits into enquiries.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#audit" className="cta-primary inline-flex items-center gap-3 bg-[#343a3b] px-5 py-3 text-sm font-semibold text-white">Get a free audit <ArrowRight size={15}/></a><a href="#work" className="cta-secondary inline-flex items-center gap-3 border border-[#343a3b] px-5 py-3 text-sm font-semibold">See selected work</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-[720px] p-5">
            <div className="absolute inset-0 bg-[#b9c7ff]/45 [clip-path:polygon(7%_5%,100%_0,94%_91%,0_100%)]" />
            <div className="relative aspect-[1.42] overflow-hidden [clip-path:polygon(4%_0,100%_7%,94%_100%,0_91%)]"><Image src="/sterling-hero.png" alt="A web designer moving from wireframes to a clear, finished website" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover"/></div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-between gap-5 border-t border-[#cdd4d6] pt-5 text-xs text-[#646c6e] sm:flex-row">
          <span>Direct senior collaboration</span><span>Custom strategy, design & build</span><span>Only a few free audits each month</span>
        </div>
      </div>
    </section>

    <section className="border-y border-[#d5dcde] bg-[#eef3f5] py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-8 border-b border-[#cbd3d5] pb-12 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <div><p className="micro-label">If this sounds familiar</p><h2 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-.04em] lg:text-5xl">A good business can still lose trust through a weak website.</h2></div>
          <p className="max-w-lg text-lg leading-8 text-[#5d6769] md:justify-self-end">The problem is rarely “we need something prettier.” It is usually a gap between the quality of the business and what visitors understand, believe, and do online.</p>
        </div>
        <div className="mt-12 grid border-l border-t border-[#cbd3d5] md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map(({ number, color, problem, cost, fix }) => <article key={number} className="group relative flex min-h-[450px] flex-col overflow-hidden border-b border-r border-[#cbd3d5] bg-[#f4f7f8] p-6 transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:bg-white hover:shadow-[0_20px_55px_rgba(42,51,53,.08)] lg:p-7">
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-x-100" style={{ backgroundColor: color }} />
            <div className="flex items-center justify-between"><span className="text-xs text-[#7a8486]">{number}</span><span className="rounded-full bg-[#e8edef] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#5f696b] transition-colors duration-500 group-hover:bg-[#293132] group-hover:text-white">The problem</span></div>
            <div className="transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-y-1">
              <h3 className="mt-9 text-[1.4rem] font-semibold leading-[1.1] tracking-[-.04em]">{problem}</h3>
              <p className="mt-5 text-sm leading-6 text-[#626c6e]">{cost}</p>
            </div>
            <div className="mt-auto border-t border-[#cbd3d5] pt-5">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150" style={{ backgroundColor: color }} /><p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#687274]">How we fix it</p></div>
              <p className="mt-3 text-sm leading-6 text-[#4f595b]">{fix}</p>
            </div>
          </article>)}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><p className="text-sm text-[#606a6c]">Not sure which problem matters most? Start with an outside perspective.</p><a href="#audit" className="cta-link inline-flex items-center gap-3 text-sm font-semibold">Get a free website audit <ArrowRight size={15}/></a></div>
      </div>
    </section>

    <ScrollFillStatement />

    <section id="services" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8"><h2 className="section-title">See tangible<br/>outcomes</h2><p className="hidden max-w-xs text-sm leading-6 text-[#697174] md:block">Focused services that make the website a stronger commercial tool.</p></div>
        <InteractiveServices />
      </div>
    </section>

    <section id="work" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8"><div><p className="micro-label mb-4">Selected work</p><h2 className="section-title">Effective websites.<br/>Made to perform.</h2></div><a href="#audit" className="cta-link hidden items-center gap-2 text-sm font-semibold md:flex">Start with an audit <ArrowRight size={15}/></a></div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="md:pt-20"><div className="relative aspect-[1.35] overflow-hidden bg-[#f3f0e8] p-7"><div className="absolute left-0 top-[15%] h-[48%] w-[22%] bg-[#fff2c7] [clip-path:polygon(0_15%,100%_0,100%_85%,0_100%)]"/><div className="relative ml-auto h-full w-[78%] overflow-hidden shadow-lg"><Image src="/agancy-footer-2.png" alt="Website design project" fill className="object-cover"/></div></div><p className="micro-label mt-5">Strategy / Design / Build</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.035em]">A clearer digital first impression</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#626a6c]">A focused website presentation shaped around trust, clarity, and the next meaningful action.</p></article>
          <article><div className="relative aspect-[1.15] overflow-hidden bg-[#fff4ad] p-8"><div className="relative h-full overflow-hidden shadow-lg"><Image src="/agancy-footer-3.png" alt="Responsive website project" fill className="object-cover"/></div><div className="absolute bottom-0 right-0 h-[32%] w-[28%] bg-[#a8ddff] [clip-path:polygon(45%_0,100%_20%,100%_100%,0_100%)]"/></div><p className="micro-label mt-5">UX / Development / SEO</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.035em]">A website built around the audience</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#626a6c]">Responsive, direct, and structured so visitors can understand the offer without working for it.</p></article>
          <article className="md:col-span-2 md:mt-6"><div className="grid bg-[#edf2f4] md:grid-cols-[.8fr_1.2fr]"><div className="relative min-h-[310px] overflow-hidden p-8"><div className="absolute inset-y-0 left-0 w-1/2 bg-[#dbe3ff] [clip-path:polygon(0_0,100%_18%,82%_100%,0_82%)]"/><div className="relative h-full overflow-hidden"><Image src="/agancy-footer-1.png" alt="Website development project" fill className="object-cover"/></div></div><div className="self-center p-8 md:p-14"><p className="micro-label">Performance / Support</p><h3 className="mt-4 max-w-lg text-3xl font-semibold leading-[1.06] tracking-[-.03em] lg:text-4xl">Careful execution from first decision to launch day.</h3><p className="mt-5 max-w-lg text-sm leading-6 text-[#626a6c]">Strategy, design, development, testing, and ongoing care stay connected throughout the project.</p></div></div></article>
        </div>
      </div>
    </section>

    <section id="about" className="scroll-mt-20 bg-[#ffc269]">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-[.85fr_1.15fr]">
        <div className="relative min-h-[420px] overflow-hidden bg-[#ffb84e]"><div className="absolute inset-[12%] bg-[#343b3c] [clip-path:polygon(0_10%,80%_0,100%_82%,18%_100%)]"/><div className="absolute inset-[18%] overflow-hidden [clip-path:polygon(0_10%,80%_0,100%_82%,18%_100%)]"><Image src="/agancy-footer-3.png" alt="Sterling Web Lab agency" fill className="object-cover"/></div></div>
        <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24"><p className="micro-label">About Sterling Web Lab</p><h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.02] tracking-[-.04em] lg:text-5xl">Small enough to stay close. Experienced enough to see the whole picture.</h2><p className="mt-6 max-w-xl leading-7 text-[#4c4c47]">Work directly with a senior partner from the first conversation through launch—fewer handoffs, focused attention, and clear communication throughout.</p><Link href="/about" className="cta-link mt-8 inline-flex items-center gap-2 text-sm font-semibold">More about the agency <ArrowRight size={15}/></Link></div>
      </div>
    </section>

    <section className="bg-[#2f3738] py-20 text-white lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <div><p className="micro-label !text-white/50">Designed and built in code</p><h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-.04em] lg:text-5xl">Custom websites—not themes with a new coat of paint.</h2><p className="mt-6 max-w-2xl leading-7 text-white/60">Each site gets its own strategy, visual direction, interface system, and production code. We build with Next.js instead of assembling WordPress themes or stacking plugins until something looks close enough.</p></div>
        <div className="grid gap-3 self-end sm:grid-cols-3 lg:grid-cols-1">{[["01","Original design","Shaped around the business and its audience."],["02","Production engineering","Responsive, maintainable Next.js code."],["03","Human judgment","AI can assist the workflow; it does not replace strategy, design, testing, or accountability."]].map(([number,title,copy])=><div key={number} className="group grid grid-cols-[2.5rem_1fr] gap-3 rounded-xl bg-white/[.045] p-4 transition-all duration-500 hover:translate-x-1 hover:bg-white/[.09]"><span className="font-mono text-xs text-white/35">{number}</span><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-white/50">{copy}</p></div></div>)}</div>
      </div>
    </section>

    <InteractiveProcess />

    <section id="pricing" className="scroll-mt-24 bg-[#eef2f3] py-20 lg:py-28">
      <div className="mx-auto max-w-[1260px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="micro-label">Monthly website care</p><h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.02] tracking-[-.04em] lg:text-5xl">Choose how actively your website should improve.</h2></div><p className="max-w-sm text-sm leading-6 text-[#626c6e]">Get dependable access to the people who understand your website—so useful updates do not sit in a backlog or require a new agency search.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {carePlans.map(plan=><article
            key={plan.name}
            tabIndex={0}
            className="group/card relative flex min-h-[410px] cursor-default flex-col overflow-hidden rounded-[1.35rem] border border-transparent bg-white p-7 outline-none transition-all duration-500 hover:-translate-y-2 hover:border-[#d1d9da] hover:shadow-[0_28px_60px_rgba(42,51,53,.14)] focus:-translate-y-2 focus:border-[#b8c3c5] focus:shadow-[0_28px_60px_rgba(42,51,53,.14)] active:scale-[.985]"
          >
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover/card:scale-x-100 group-focus/card:scale-x-100" style={{backgroundColor:plan.color}}/>
            <span aria-hidden className="absolute -right-16 -top-16 h-44 w-44 scale-75 rounded-full opacity-0 transition-all duration-700 group-hover/card:scale-110 group-hover/card:opacity-25 group-focus/card:scale-110 group-focus/card:opacity-25" style={{backgroundColor:plan.color}}/>
            <div className="relative flex items-center justify-between gap-4">
              <span className="micro-label">{plan.name}</span>
              <span className="rounded-full bg-[#f0f3f3] px-3 py-1.5 text-[.6rem] font-bold uppercase tracking-[.11em] text-[#697376] transition-all duration-500 group-hover/card:bg-[#293132] group-hover/card:text-white group-focus/card:bg-[#293132] group-focus/card:text-white">{plan.badge}</span>
            </div>
            <div className="relative mt-8 flex items-end gap-2 transition-transform duration-500 group-hover/card:translate-x-1 group-focus/card:translate-x-1">
              <strong className="text-5xl font-medium tracking-[-.04em] transition-transform duration-500 group-hover/card:scale-[1.04] group-focus/card:scale-[1.04]">{plan.price}</strong>
              <span className="pb-1 text-sm text-[#6a7476]">/ month</span>
            </div>
            <h3 className="relative mt-7 text-2xl font-semibold leading-[1.08] tracking-[-.035em]">{plan.outcome}</h3>
            <p className="relative mt-3 text-sm leading-6 text-[#5f696b]">{plan.copy}</p>
            <p className="relative mt-5 border-l-2 pl-3 text-xs font-semibold leading-5 text-[#505a5c]" style={{borderColor:plan.color}}>{plan.bestFor}</p>
            <ul className="relative mt-auto space-y-2 pt-8">
              {plan.includes.map(item=><li key={item} className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:bg-[#f5f7f7] group-focus/card:translate-x-1 group-focus/card:bg-[#f5f7f7]"><span className="h-2 w-2 rounded-full transition-all duration-500 group-hover/card:scale-150 group-focus/card:scale-150" style={{backgroundColor:plan.color}}/>{item}</li>)}
            </ul>
            <a href="#audit" className="group/cta relative mt-8 inline-flex items-center justify-between rounded-xl border border-[#9da7a9] px-4 py-3 text-sm font-semibold transition-all duration-500 hover:!bg-[#293132] hover:!text-white group-hover/card:border-[#293132] group-hover/card:bg-[#edf1f2] group-focus/card:border-[#293132] group-focus/card:bg-[#edf1f2]">Start with {plan.name} <ArrowRight size={15} className="transition-transform duration-500 group-hover/card:translate-x-1 group-hover/cta:translate-x-2 group-focus/card:translate-x-1"/></a>
          </article>)}
        </div>
        <div className="mx-auto mt-7 max-w-3xl rounded-xl border border-[#d4dbdc] bg-white/55 px-5 py-4 text-center text-xs leading-5 text-[#657072]">
          A focused update is one contained content or design change. Care plans begin after launch and are available for suitable existing websites following a technical review, so we can confirm the site is safe and practical to support.
        </div>
      </div>
    </section>

    <section id="audit" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1260px] gap-14 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
        <div><p className="micro-label">Free website audit</p><h2 className="mt-4 text-4xl font-medium leading-[.98] tracking-[-.05em] lg:text-5xl">A practical starting point, with no obligation.</h2><p className="mt-5 max-w-md leading-7 text-[#60686a]">We’ll personally review your website and send a concise roadmap for improving clarity, credibility, conversion, and essential SEO.</p><ul className="mt-7 space-y-3 text-sm">{['First impression / brand review','Conversion clarity','UX / user journey','Performance / SEO basics','Prioritized recommendations'].map(x=><li key={x} className="flex items-center gap-3"><Check size={16}/>{x}</li>)}</ul></div>
        <form className="border border-[#dce1e2] bg-[#f4f7f8] p-6 sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><label>Name<input required name="name" placeholder="Your full name" className="field"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com" className="field"/></label><label className="sm:col-span-2">Website URL<input name="website" type="url" placeholder="https://yourwebsite.com" className="field"/></label><label className="sm:col-span-2">Business type<input name="business" placeholder="Consultant, coach, agency, eCommerce..." className="field"/></label><label className="sm:col-span-2">Current challenge<textarea name="message" rows={3} placeholder="What should your website do better?" className="field resize-none"/></label><button className="button-dark mt-2 justify-center sm:col-span-2" type="submit">Request my free audit <ArrowRight size={16}/></button><p className="text-center text-xs text-[#697174] sm:col-span-2">Personally reviewed. Clear, actionable recommendations.</p></div></form>
      </div>
    </section>

    <section id="contact" className="relative overflow-hidden border-t border-[#dce1e2] py-20 lg:py-28"><div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(255,190,91,.55),transparent_28%),radial-gradient(circle_at_78%_30%,rgba(137,208,255,.55),transparent_35%),radial-gradient(circle_at_52%_80%,rgba(190,159,255,.35),transparent_34%)]"/><div className="relative mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 md:flex-row md:items-end lg:px-10"><h2 className="max-w-[690px] text-4xl font-medium leading-[1] tracking-[-.04em] lg:text-6xl">Kickstart your website with a clearer plan.</h2><div><p className="mb-5 max-w-xs text-sm leading-6">Start with a free audit and see where focused improvements can make the biggest difference.</p><a href="#audit" className="cta-primary inline-flex items-center gap-3 bg-[#343a3b] px-5 py-3 text-sm font-semibold text-white">Get a free audit <ArrowRight size={15}/></a></div></div></section>
  </main>;
}
