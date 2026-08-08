import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { notFound } from "next/navigation";
import { serviceBySlug, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceBySlug((await params).slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.hero,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = serviceBySlug((await params).slug);
  if (!service) notFound();

  return <main className="bg-[#f4f7f8] text-[#25292a]">
    <section className="relative overflow-hidden border-b border-[#d9dfe0]">
      <div className="absolute inset-0 opacity-55" style={{ background: `radial-gradient(circle at 78% 20%, ${service.color}, transparent 38%)` }} />
      <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-[#60696b] transition-[gap] hover:gap-3"><ArrowLeft size={14}/>All services</Link>
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div><p className="micro-label">Service {service.number}</p><h1 className="mt-3 max-w-xl text-[clamp(2.9rem,4.7vw,5.05rem)] font-medium leading-[.98] tracking-[-.042em]">{service.title}</h1></div>
          <div className="max-w-2xl lg:justify-self-end"><p className="text-[clamp(1.55rem,2.5vw,2.65rem)] leading-[1.02] tracking-[-.045em]">{service.hero}</p><p className="mt-6 max-w-xl leading-7 text-[#5e6769]">{service.promise}</p><div className="mt-8 flex flex-wrap gap-3"><a href="#start" className="cta-primary inline-flex items-center gap-3 bg-[#293132] px-5 py-3 text-sm font-semibold text-white">Start with an audit <ArrowRight size={15}/></a><a href="#included" className="cta-secondary inline-flex items-center gap-3 border border-[#293132] px-5 py-3 text-sm font-semibold">See what’s included</a></div></div>
        </div>
      </div>
    </section>

    <section className="bg-[#363d3e] py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-[1260px] gap-10 px-6 lg:grid-cols-2 lg:px-10"><div><p className="micro-label !text-white/45">The expensive problem</p><p className="mt-4 text-3xl leading-[1.04] tracking-[-.045em] lg:text-4xl">{service.problem}</p></div><div className="border-l-2 pl-6 lg:self-end" style={{ borderColor: service.color }}><p className="micro-label !text-white/45">The useful outcome</p><p className="mt-4 text-xl leading-8 text-white/80">{service.outcome}</p></div></div>
    </section>

    <section id="included" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="micro-label">What you are buying</p><h2 className="mt-4 text-4xl font-medium leading-[1] tracking-[-.042em] lg:text-6xl">Less ambiguity.<br/>Better decisions.</h2></div><p className="max-w-sm text-sm leading-6 text-[#626a6c]">The scope is designed around commercial usefulness—not the number of meetings, slides, or fashionable deliverables.</p></div><div className="mt-14 grid border-l border-t border-[#cad1d2] md:grid-cols-2">{service.deliverables.map((item,index)=><article key={item.title} className="group relative min-h-56 overflow-hidden border-b border-r border-[#cad1d2] p-7 transition-colors duration-500 hover:bg-[#f3f6f7] md:p-9"><span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100" style={{backgroundColor:service.color}}/><span className="text-xs text-[#7b8486]">0{index+1}</span><h3 className="mt-8 text-2xl font-semibold tracking-[-.025em] transition-transform duration-500 group-hover:translate-x-2">{item.title}</h3><p className="mt-3 max-w-lg leading-7 text-[#626a6c]">{item.copy}</p></article>)}</div></div>
    </section>

    <section className="border-y border-[#d9dfe0] py-20 lg:py-24" style={{ backgroundColor: service.color }}>
      <div className="mx-auto max-w-[1260px] px-6 lg:px-10"><p className="micro-label">How the work moves</p><div className="mt-10 grid gap-8 md:grid-cols-3">{service.process.map((step,index)=><article key={step.title} className="group rounded-b-2xl border-t border-[#343a3b] px-4 pb-5 pt-5 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-white/30 hover:shadow-[0_16px_35px_rgba(45,52,53,.08)]"><span className="text-xs">0{index+1}</span><h3 className="mt-7 text-3xl font-semibold tracking-[-.045em] transition-transform duration-500 group-hover:translate-x-1">{step.title}</h3><p className="mt-3 leading-7 text-[#454b4c]">{step.copy}</p></article>)}</div></div>
    </section>

    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1260px] px-6 lg:px-10"><div className="grid gap-px bg-[#cdd3d4] md:grid-cols-2"><div className="bg-[#f3f6f7] p-8 md:p-12"><p className="micro-label">This is likely a fit when</p><ul className="mt-8 space-y-2">{service.goodFit.map(item=><li key={item} className="group flex items-center gap-4 rounded-xl px-3 py-3 text-lg transition-all duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:translate-x-1 hover:bg-white hover:shadow-[0_10px_24px_rgba(42,51,53,.07)]"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#293132] text-white transition-all duration-[400ms] group-hover:scale-110 group-hover:rotate-[-8deg]"><Check size={14}/></span>{item}</li>)}</ul></div><div className="bg-[#f3f6f7] p-8 md:p-12"><p className="micro-label">This is probably not a fit when</p><ul className="mt-8 space-y-2">{service.notFit.map(item=><li key={item} className="group flex items-center gap-4 rounded-xl px-3 py-3 text-lg transition-all duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:translate-x-1 hover:bg-white hover:shadow-[0_10px_24px_rgba(42,51,53,.07)]"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#8e9799] transition-all duration-[400ms] group-hover:scale-110 group-hover:rotate-90 group-hover:border-[#596466] group-hover:bg-[#e8eded]"><X size={14}/></span>{item}</li>)}</ul></div></div></div>
    </section>

    <section className="border-y border-[#d9dfe0] bg-[#edf2f4] py-20 lg:py-24">
      <div className="mx-auto max-w-[1060px] px-6 lg:px-10"><p className="micro-label">Questions worth answering</p><div className="mt-8 border-t border-[#c8d0d1]">{service.faqs.map(({question,answer},index)=><div key={question} className="group grid gap-4 border-b border-[#c8d0d1] px-3 py-7 transition-all duration-500 hover:bg-white/55 md:grid-cols-[55px_.8fr_1.2fr] md:hover:px-5"><span className="text-xs text-[#7b8486] transition-colors group-hover:text-[#25292a]">0{index+1}</span><h3 className="font-semibold transition-transform duration-500 group-hover:translate-x-1">{question}</h3><p className="text-sm leading-6 text-[#626a6c]">{answer}</p></div>)}</div></div>
    </section>

    <section id="start" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28"><div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(circle at 20% 80%, ${service.color}, transparent 42%), radial-gradient(circle at 80% 25%, #b8dcff, transparent 38%)` }}/><div className="relative mx-auto flex max-w-[1260px] flex-col justify-between gap-10 px-6 md:flex-row md:items-end lg:px-10"><div><p className="micro-label">A low-friction first step</p><h2 className="mt-4 max-w-3xl text-4xl font-medium leading-[1] tracking-[-.042em] lg:text-6xl">Start with clarity, not a sales pitch.</h2></div><div className="max-w-sm"><p className="text-sm leading-6 text-[#555e60]">Request a free website audit. We’ll review the current situation and tell you where this service could help—and where it probably would not.</p><Link href="/contact" className="cta-primary mt-6 inline-flex items-center gap-3 bg-[#293132] px-5 py-3 text-sm font-semibold text-white">Request a free audit <ArrowRight size={15}/></Link></div></div></section>
  </main>;
}
