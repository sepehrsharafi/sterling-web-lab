"use client";

import { useEffect, useState, useTransition, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, Check, Globe2, Loader, Mail, Send, X } from "lucide-react";
import Link from "next/link";
import { sendEmail } from "@/app/actions/sendEmail";

const inputClass =
  "w-full rounded-xl border border-[#d8dddc] bg-white px-4 py-3.5 text-sm text-[#293234] outline-none transition-all duration-300 placeholder:text-[#9aa2a3] hover:border-[#b7c0bf] focus:border-[#667676] focus:ring-4 focus:ring-[#9ed7ff]/20";
const services = [
  "Website strategy",
  "Design & development",
  "Conversion optimization",
  "SEO foundations",
  "Ongoing support",
  "Not sure yet",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Design & development",
    message: "",
  });
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; email?: string; message?: string }>({});
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (!result?.success) return;
    const timer = setTimeout(() => setResult(null), 5000);
    return () => clearTimeout(timer);
  }, [result]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    const nextErrors: typeof errors = {};
    if (!formData.firstName) nextErrors.firstName = "First name is required.";
    if (!formData.lastName) nextErrors.lastName = "Last name is required.";
    if (!formData.email) nextErrors.email = "Email is required.";
    if (!formData.message) nextErrors.message = "Message is required.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    startTransition(async () => {
      const { success } = await sendEmail(formData);
      if (success) {
        setResult({ success: true, message: "Your message has been sent. We’ll be in touch soon." });
        setFormData({ firstName: "", lastName: "", email: "", service: "Design & development", message: "" });
        setErrors({});
      } else setResult({ success: false, message: "Something went wrong. Please try again." });
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f7f8] pb-24 pt-36 text-[#25292a] lg:pt-40">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_10%_28%,rgba(255,195,109,.45),transparent_29%),radial-gradient(circle_at_60%_5%,rgba(180,166,255,.32),transparent_30%),radial-gradient(circle_at_92%_36%,rgba(158,215,255,.5),transparent_34%)]"
      />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-[#59666b] transition hover:text-[#25292a]"
        >
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        <div className="mt-10 grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_28px_70px_rgba(42,51,53,.11)] lg:grid-cols-[.82fr_1.18fr]">
          <section className="relative flex flex-col overflow-hidden bg-[#2d3536] p-7 text-white sm:p-10 lg:p-12">
            <div aria-hidden className="absolute -right-24 -top-20 h-72 w-72 rotate-12 bg-[#9ed7ff]/20" />
            <div aria-hidden className="absolute -right-10 top-24 h-64 w-64 rotate-12 bg-[#b4a6ff]/15" />
            <div className="relative">
              <p className="micro-label !text-white/50">Contact Sterling Web Lab</p>
              <h1 className="mt-6 max-w-xl text-[clamp(2.8rem,4vw,4.35rem)] font-medium leading-[1.01] tracking-[-.04em]">
                Let’s talk about what your website needs to do.
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-white/60">
                Tell us where the website is falling short, what the business needs next, and what a useful result would
                look like.
              </p>
            </div>

            <div className="relative mt-14 space-y-3 lg:mt-auto lg:pt-16">
              <a
                href="mailto:sterlingweblab@gmail.com"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-transparent bg-white/[.055] p-3 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:translate-x-1 hover:border-white/10 hover:bg-white/[.085] hover:shadow-[0_14px_34px_rgba(0,0,0,.16)]"
              >
                <span className="absolute inset-y-3 left-0 w-1 origin-center scale-y-0 rounded-r-full bg-[#ffc36d] transition-transform duration-500 group-hover:scale-y-100" />
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ffc36d] text-[#293132] transition-all duration-500 group-hover:rotate-[-4deg] group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(255,195,109,.22)]">
                  <Mail size={18} />
                </span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  <strong className="block text-sm">Email us</strong>
                  <span className="mt-1 block text-xs text-white/50">sterlingweblab@gmail.com</span>
                </span>
                <span className="ml-auto grid h-8 w-8 place-items-center rounded-full bg-white/0 text-white/45 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white/10 group-hover:text-white"><ArrowUpRight size={14} /></span>
              </a>
              <div className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-transparent bg-white/[.055] p-3 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:translate-x-1 hover:border-white/10 hover:bg-white/[.085] hover:shadow-[0_14px_34px_rgba(0,0,0,.16)]">
                <span className="absolute inset-y-3 left-0 w-1 origin-center scale-y-0 rounded-r-full bg-[#9ed7ff] transition-transform duration-500 group-hover:scale-y-100" />
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#9ed7ff] text-[#293132] transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(158,215,255,.2)]">
                  <Globe2 size={18} />
                </span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  <strong className="block text-sm">Working worldwide</strong>
                  <span className="mt-1 block text-xs text-white/50">Remote, direct, and clearly communicated.</span>
                </span>
                <span className="ml-auto rounded-full bg-white/[.055] px-2.5 py-1 text-[.58rem] font-bold uppercase tracking-[.12em] text-white/40 transition-colors duration-500 group-hover:bg-[#9ed7ff] group-hover:text-[#293132]">Remote</span>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f8f5] p-6 sm:p-10 lg:p-12">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="micro-label">Project enquiry</p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-.035em]">Tell us a little about the work.</h2>
              </div>
              <p className="max-w-[220px] text-xs leading-5 text-[#6b7476]">
                You’ll receive a considered response - not an automated sales sequence.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
              <Field label="First name" error={errors.firstName}>
                <input
                  aria-invalid={!!errors.firstName}
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className={`${inputClass} ${errors.firstName ? "!border-[#c56a63] !ring-[#c56a63]/10" : ""}`}
                />
              </Field>
              <Field label="Last name" error={errors.lastName}>
                <input
                  aria-invalid={!!errors.lastName}
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className={`${inputClass} ${errors.lastName ? "!border-[#c56a63] !ring-[#c56a63]/10" : ""}`}
                />
              </Field>
              <Field label="Email address" error={errors.email} wide>
                <input
                  aria-invalid={!!errors.email}
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={`${inputClass} ${errors.email ? "!border-[#c56a63] !ring-[#c56a63]/10" : ""}`}
                />
              </Field>
              <Field label="Where do you need help?" wide>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </Field>
              <Field label="What should the website do better?" error={errors.message} wide>
                <textarea
                  aria-invalid={!!errors.message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="A little context about the business, the current problem, and the outcome you want..."
                  className={`${inputClass} resize-none ${errors.message ? "!border-[#c56a63] !ring-[#c56a63]/10" : ""}`}
                />
              </Field>

              {result && (
                <div
                  role="status"
                  className={`flex items-center gap-3 rounded-xl p-3.5 text-sm sm:col-span-2 ${result.success ? "bg-[#dff0d8] text-[#38543c]" : "bg-[#f5dddd] text-[#743f3d]"}`}
                >
                  {result.success ? <Check size={17} /> : <X size={17} />}
                  <span>{result.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="group mt-1 inline-flex items-center justify-between rounded-xl bg-[#2d3536] px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a4546] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-55 sm:col-span-2"
              >
                <span>{isPending ? "Sending your message..." : "Send message"}</span>
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  {isPending ? <Loader size={15} className="animate-spin" /> : <Send size={15} />}
                </span>
              </button>
              <p className="text-center text-[.68rem] leading-5 text-[#788184] sm:col-span-2">
                No obligation. Your details are used only to respond to this enquiry.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  error,
  wide,
  children,
}: {
  label: string;
  error?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={`block text-[.72rem] font-semibold text-[#4e595b] ${wide ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-[.68rem] font-medium text-[#a34e49]">{error}</span>}
    </label>
  );
}
