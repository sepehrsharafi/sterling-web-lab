"use client";

import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/services";

export default function InteractiveServices() {
  const [active, setActive] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return <div ref={rootRef} className="mt-12 border border-[#303637]">
    {services.map((service, index) => {
      const open = active === index;
      const panelId = `service-panel-${index}`;
      return <article key={service.number} className="relative border-b border-[#303637] last:border-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setActive(open ? null : index)}
          className={`group relative z-10 grid w-full gap-3 px-5 py-5 text-left transition-[transform,filter,box-shadow,opacity] duration-300 md:grid-cols-[70px_1fr_1fr_44px] md:items-center ${visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"} ${open ? "scale-[1.012] shadow-[0_14px_32px_rgba(25,31,32,.18)]" : "hover:z-20 hover:scale-[1.018] hover:brightness-[1.06] hover:shadow-[0_16px_34px_rgba(25,31,32,.2)]"}`}
          style={{ backgroundColor: service.color }}
        >
          <span className="text-xs">{service.number}</span>
          <h3 className="text-xl font-semibold tracking-[-.03em] transition-transform duration-300 group-hover:translate-x-2">{service.title}</h3>
          <p className="text-sm leading-6 text-[#454a4c]">{service.summary}</p>
          <span className={`ml-auto grid h-9 w-9 place-items-center rounded-full border border-[#303637] transition-all duration-300 group-hover:bg-[#303637] group-hover:text-white ${open ? "rotate-45 bg-[#303637] text-white" : ""}`}><Plus size={18}/></span>
        </button>
        <div id={panelId} className={`grid overflow-hidden bg-[#303637] text-white transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="min-h-0"><div className={`grid gap-8 px-6 py-8 transition-all duration-500 md:grid-cols-[1.15fr_.85fr] md:px-12 md:py-10 ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
            <div><p className="micro-label !text-white/50">What this solves</p><p className="mt-3 max-w-2xl text-xl leading-7 tracking-[-.025em] md:text-2xl">{service.problem}</p><div className="mt-6 border-l-2 pl-4" style={{borderColor:service.color}}><p className="text-xs uppercase tracking-[.12em] text-white/45">The outcome</p><p className="mt-2 text-sm leading-6 text-white/75">{service.outcome}</p></div></div>
            <div><p className="micro-label !text-white/50">Typically includes</p><ul className="mt-3 grid grid-cols-2 gap-x-5">{service.includes.map((item,i)=><li key={item} className="border-t border-white/15 py-3 text-sm"><span className="mr-2 text-white/35">0{i+1}</span>{item}</li>)}</ul><Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-3 text-sm font-semibold transition-[gap] hover:gap-5">Explore this service <ArrowRight size={15}/></Link></div>
          </div></div>
        </div>
      </article>;
    })}
  </div>;
}
