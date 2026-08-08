import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Focused website strategy, design, development, conversion, SEO, and support services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <main className="min-h-screen bg-[#f4f7f8] pt-28 text-[#25292a]">
    <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-10 lg:px-10 lg:pb-24">
      <Link href="/" className="group inline-flex items-center gap-2 text-xs font-semibold text-[#60696b] transition hover:text-[#25292a]"><ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1"/>Back to home</Link>
      <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-[#e7edef] lg:grid lg:min-h-[520px] lg:grid-cols-[1.35fr_.65fr]">
        <div className="flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div>
            <p className="micro-label">Services</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3rem,4.8vw,5.1rem)] font-medium leading-[1] tracking-[-.042em]">Focused help.<br/><span className="text-[#667376]">Useful outcomes.</span></h1>
          </div>
          <p className="mt-12 max-w-2xl text-lg leading-8 text-[#596466] lg:mt-8">Choose the constraint holding your website back. Each service has a clear purpose, practical deliverables, and a direct path to the next decision.</p>
        </div>
        <div className="relative flex min-h-[330px] flex-col justify-between overflow-hidden bg-[#2d3536] p-7 text-white sm:p-10 lg:min-h-0">
          <div aria-hidden className="absolute -right-24 -top-20 h-72 w-72 rotate-12 bg-[#9ed7ff]/35" />
          <div aria-hidden className="absolute -right-10 top-16 h-72 w-72 rotate-12 bg-[#c1b2ff]/25" />
          <div className="relative z-10 flex items-center gap-2 text-[.65rem] font-bold uppercase tracking-[.18em] text-white/55"><span className="h-2 w-2 rounded-full bg-[#ffc36d]"/>Five focused services</div>
          <div className="relative z-10">
            <p className="max-w-sm text-2xl font-medium leading-tight tracking-[-.035em]">Start with the bottleneck—not a predetermined package.</p>
            <Link href="#service-list" className="cta-primary group mt-7 inline-flex items-center gap-4 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#25292a] hover:bg-[#ffc36d]">Explore the services <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></Link>
          </div>
          <div aria-hidden className="relative z-10 mt-10 flex h-2 overflow-hidden rounded-full">{services.map(service=><span key={service.slug} className="flex-1" style={{backgroundColor:service.color}}/>)}</div>
        </div>
      </div>
    </section>
    <section id="service-list" className="scroll-mt-24 bg-white py-16 lg:py-20"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><div className="space-y-3">{services.map(service=><Link aria-label={`Explore ${service.title}`} key={service.slug} href={`/services/${service.slug}`} className="group relative grid min-h-28 items-center gap-4 overflow-hidden rounded-[1.25rem] px-5 py-6 shadow-[0_1px_0_rgba(35,42,43,.08)] transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:z-10 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(35,42,43,.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:grid-cols-[70px_1fr_1fr_52px] md:px-7" style={{backgroundColor:service.color}}><span aria-hidden className="absolute -right-16 -top-28 h-64 w-64 translate-x-24 rotate-12 bg-white/25 transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-0"/><span className="relative font-mono text-xs text-[#303637]/60">{service.number}</span><h2 className="relative text-2xl font-semibold tracking-[-.035em] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-2">{service.title}</h2><p className="relative max-w-md text-sm leading-6 text-[#454a4c] transition-transform duration-500 group-hover:translate-x-1">{service.summary}</p><span className="relative ml-auto grid h-10 w-10 place-items-center rounded-full border border-[#303637]/50 transition-all duration-500 group-hover:rotate-[-35deg] group-hover:scale-110 group-hover:border-[#303637] group-hover:bg-[#303637] group-hover:text-white"><ArrowRight size={16}/></span></Link>)}</div></div></section>
    <section className="bg-[#363d3e] py-20 text-white"><div className="mx-auto flex max-w-[1260px] flex-col justify-between gap-8 px-6 md:flex-row md:items-end lg:px-10"><h2 className="max-w-3xl text-4xl font-medium leading-[1.01] tracking-[-.04em] lg:text-5xl">Not sure which service you need? That is what the audit is for.</h2><Link href="/contact" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#293132] transition-all duration-300 hover:-translate-y-1 hover:gap-5 hover:bg-[#ffc36d] hover:shadow-xl">Get a free audit <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></Link></div></section>
  </main>;
}
