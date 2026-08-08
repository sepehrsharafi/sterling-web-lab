import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "About", alternates: { canonical: "/about" } };

const principles = [
  {
    number: "01",
    title: "Direct collaboration",
    copy: "Talk to the person doing the work—from the first call through launch.",
    color: "#ffc36d",
  },
  {
    number: "02",
    title: "Careful execution",
    copy: "Strategy, design, and development operate as one connected process.",
    color: "#9ed7ff",
  },
  {
    number: "03",
    title: "Clear communication",
    copy: "Know what is happening, why it matters, and exactly what comes next.",
    color: "#b4a6ff",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f4f7f8] text-[#25292a]">
      <section className="relative overflow-hidden pb-20 pt-36 lg:pb-24 lg:pt-40">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_28%,rgba(255,195,109,.55),transparent_30%),radial-gradient(circle_at_72%_18%,rgba(180,166,255,.42),transparent_32%),radial-gradient(circle_at_90%_72%,rgba(158,215,255,.55),transparent_34%)]"
        />
        <div
          aria-hidden
          className="absolute -right-28 top-24 h-80 w-80 rotate-12 bg-white/20 [clip-path:polygon(10%_0,100%_18%,84%_100%,0_78%)]"
        />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[#59666b] transition hover:text-[#25292a]"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-16">
            <div>
              <p className="micro-label">About Sterling Web Lab</p>
              <h1 className="mt-6 max-w-3xl text-[clamp(3rem,4.7vw,5rem)] font-medium leading-[1] tracking-[-.042em] text-[#202829]">
                Small by design.
                <br />
                <span className="text-[#667376]">Serious about detail.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#535f62]">
                A focused web studio for businesses that need to earn trust, explain their value clearly, and make the
                next step easy.
              </p>
            </div>

            <aside className="relative overflow-hidden rounded-[1.5rem] bg-[#2d3536] p-7 text-white shadow-[0_24px_60px_rgba(36,45,46,.14)] sm:p-9">
              <div aria-hidden className="absolute -right-16 -top-20 h-52 w-52 rotate-12 bg-[#9ed7ff]/25" />
              <p className="micro-label !text-white/55">The studio model</p>
              <p className="relative mt-6 max-w-lg text-2xl font-medium leading-[1.12] tracking-[-.035em]">
                Fewer layers between the business problem and the person solving it.
              </p>
              <div className="relative mt-10 grid gap-3 sm:grid-cols-2">
                <div className="group relative overflow-hidden rounded-xl bg-white/[.06] p-4 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-1 hover:bg-white/[.11] hover:shadow-[0_14px_28px_rgba(0,0,0,.14)]">
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#ffc36d] transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[.62rem] text-white/40">01</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-35 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </div>
                  <strong className="mt-5 block text-sm">Direct access</strong>
                  <p className="mt-1 text-xs leading-5 text-white/55">No account-management relay.</p>
                </div>
                <div className="group relative overflow-hidden rounded-xl bg-white/[.06] p-4 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-1 hover:bg-white/[.11] hover:shadow-[0_14px_28px_rgba(0,0,0,.14)]">
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#9ed7ff] transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[.62rem] text-white/40">02</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-35 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </div>
                  <strong className="mt-5 block text-sm">Focused capacity</strong>
                  <p className="mt-1 text-xs leading-5 text-white/55">Fewer projects, more attention.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="micro-label">Why this model works</p>
              <h2 className="mt-5 max-w-lg text-4xl font-medium leading-[1.02] tracking-[-.045em] sm:text-5xl">
                A closer working relationship makes for better work.
              </h2>
            </div>
            <div className="max-w-2xl space-y-5 self-end text-lg leading-8 text-[#5a646a]">
              <p>
                You work directly with a senior partner throughout the project—without layers of account management or
                diluted communication.
              </p>
              <p>
                By taking on fewer projects at a time, the studio can give each one the care it needs: from positioning
                and structure to the details that hold up once a site is live.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {principles.map(({ number, title, copy, color }) => (
              <article
                key={title}
                className="group relative flex min-h-64 flex-col overflow-hidden rounded-[1.25rem] bg-[#eef2f3] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5f7f7] hover:shadow-[0_18px_40px_rgba(42,51,53,.08)] sm:p-8"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: color }}
                />
                <div className="flex items-start justify-between">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl font-mono text-xs text-[#263033] shadow-[inset_0_0_0_1px_rgba(38,48,51,.08)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ backgroundColor: color }}
                  >
                    {number}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="opacity-35 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-medium tracking-[-.035em]">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#596366]">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9eef0] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="relative aspect-[1.25] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/agancy-footer-3.png"
              alt="Sterling Web Lab workspace"
              fill
              className="object-cover transition duration-700 hover:scale-[1.025]"
            />
          </div>
          <div className="self-center lg:px-10">
            <p className="micro-label">How we work</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-.045em] sm:text-5xl">
              Thoughtful, practical, and close to the work.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#58636a]">
              The goal is not to make the process feel elaborate. It is to make the important decisions well, build them
              carefully, and launch something your business can confidently stand behind.
            </p>
            <Link
              href="/contact"
              className="cta-primary group mt-8 inline-flex items-center gap-5 rounded-full bg-[#252d2e] px-5 py-3 text-sm font-semibold text-white"
            >
              Start a conversation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
