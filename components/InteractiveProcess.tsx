"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const steps = [
  { number:"01", title:"Audit", summary:"Review the current site, goals, positioning, and opportunities.", detail:"We identify the gaps costing clarity, confidence, and action before prescribing work.", accent:"#ffc36d", rotation:-9 },
  { number:"02", title:"Strategy", summary:"Set the structure, priorities, message, and creative direction.", detail:"We turn the diagnosis into a focused plan—what matters, what can wait, and why.", accent:"#9ed7ff", rotation:-3 },
  { number:"03", title:"Design", summary:"Build a focused visual and UX system around clarity and action.", detail:"We make the strategy tangible through hierarchy, interaction, visual language, and key pages.", accent:"#b4a6ff", rotation:4 },
  { number:"04", title:"Build / launch", summary:"Develop, test, optimize, and launch the finished website.", detail:"We connect the system, content, code, quality assurance, and launch into one careful finish.", accent:"#d9f0cf", rotation:9 },
];

export default function InteractiveProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return <section id="process" className="relative scroll-mt-20 overflow-hidden bg-[#414748] py-20 text-white lg:py-28">
    <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
      <div className="relative z-10">
        <p className="micro-label !text-[#c9d0d1]">Our process</p>
        <h2 className="mt-4 max-w-xl text-4xl font-medium leading-[1.01] tracking-[-.04em] lg:text-5xl">Fast-moving.<br/>Careful where it matters.</h2>
        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {steps.map((item,index) => {
            const selected = active === index;
            return <button key={item.number} type="button" aria-pressed={selected} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={`group relative min-h-[178px] overflow-hidden border p-5 text-left transition-all duration-300 ${selected ? "-translate-y-1 border-white bg-white text-[#313738] shadow-[0_18px_36px_rgba(0,0,0,.22)]" : "border-white/20 bg-white/[.025] hover:-translate-y-1 hover:border-white/60 hover:bg-white/10"}`}>
              <span className="absolute inset-x-0 top-0 h-1 origin-left transition-transform duration-500" style={{backgroundColor:item.accent, transform:selected ? "scaleX(1)" : "scaleX(0)"}}/>
              <div className="flex items-center justify-between"><span className={`text-xs ${selected ? "text-[#747d7f]" : "text-[#c2c9ca]"}`}>{item.number}</span><span className={`grid h-8 w-8 place-items-center rounded-full border transition-all duration-300 ${selected ? "rotate-0 border-[#313738] bg-[#313738] text-white" : "rotate-45 border-white/25 text-white/50 group-hover:rotate-0 group-hover:border-white"}`}><ArrowUpRight size={14}/></span></div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-.03em]">{item.title}</h3>
              <p className={`mt-2 text-sm leading-6 ${selected ? "text-[#60696b]" : "text-[#c7cdce]"}`}>{item.summary}</p>
            </button>;
          })}
        </div>
      </div>

      <div className="relative min-h-[480px] lg:min-h-0">
        <div className="absolute right-0 top-1/2 h-[72%] w-[88%] -translate-y-1/2 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]" style={{transform:`translateY(-50%) rotate(${step.rotation}deg)`}}>
          <div className="absolute inset-0 translate-x-20 bg-white/10 [clip-path:polygon(18%_0,100%_26%,82%_100%,0_75%)] transition-transform duration-700" style={{transform:`translateX(${72 + active * 9}px)`}}/>
          <div className="absolute inset-0 translate-x-10 bg-white/20 [clip-path:polygon(18%_0,100%_26%,82%_100%,0_75%)] transition-transform duration-700" style={{transform:`translateX(${36 + active * 5}px)`}}/>
          <div className="absolute inset-0 bg-[#eef4f4] [clip-path:polygon(18%_0,100%_26%,82%_100%,0_75%)]"/>
          <div className="absolute inset-[34%] [clip-path:polygon(18%_0,100%_26%,82%_100%,0_75%)] transition-colors duration-500" style={{backgroundColor:step.accent}}/>
        </div>
        <div className="absolute bottom-3 left-0 max-w-[440px] border-l-2 bg-[#343a3b]/90 p-5 backdrop-blur-sm transition-all duration-300 lg:bottom-8" style={{borderColor:step.accent}}>
          <div className="flex items-center gap-3"><span className="text-xs text-white/45">{step.number} / 04</span><span className="text-xs font-bold uppercase tracking-[.12em]" style={{color:step.accent}}>What happens here</span></div>
          <p className="mt-3 text-sm leading-6 text-white/75">{step.detail}</p>
        </div>
      </div>
    </div>
  </section>;
}
