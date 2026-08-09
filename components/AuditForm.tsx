"use client";

import { useState, useTransition, type ChangeEvent, type FormEvent } from "react";
import { Check, Loader, Send, X } from "lucide-react";
import { sendAuditEmail } from "@/app/actions/sendEmail";
import { FormField, formInputClass } from "@/components/FormField";

const initialData = { name: "", email: "", website: "", business: "", message: "" };

export default function AuditForm() {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<{ name?: string; email?: string; website?: string }>({});
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(current => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    const nextErrors: typeof errors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = "Enter a valid email address.";
    try {
      const url = new URL(formData.website);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
    } catch {
      nextErrors.website = "Enter a complete website URL, including https://";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    startTransition(async () => {
      const { success } = await sendAuditEmail(formData);
      if (success) {
        setFormData(initialData);
        setErrors({});
        setResult({ success: true, message: "Your audit request has been sent. We’ll be in touch soon." });
      } else {
        setResult({ success: false, message: "Something went wrong. Please try again or email us directly." });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[1.5rem] border border-[#d8dddc] bg-[#f7f8f5] p-6 shadow-[0_18px_45px_rgba(42,51,53,.07)] sm:p-8">
      <div className="mb-7">
        <p className="micro-label">Request details</p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-.035em]">Where should we start?</h3>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" error={errors.name}>
          <input aria-invalid={!!errors.name} name="name" autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className={`${formInputClass} ${errors.name ? "!border-[#c56a63] !ring-[#c56a63]/10" : ""}`} />
        </FormField>
        <FormField label="Email address" error={errors.email}>
          <input aria-invalid={!!errors.email} name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className={`${formInputClass} ${errors.email ? "!border-[#c56a63] !ring-[#c56a63]/10" : ""}`} />
        </FormField>
        <FormField label="Website URL" error={errors.website} wide>
          <input aria-invalid={!!errors.website} name="website" type="url" inputMode="url" value={formData.website} onChange={handleChange} placeholder="https://yourwebsite.com" className={`${formInputClass} ${errors.website ? "!border-[#c56a63] !ring-[#c56a63]/10" : ""}`} />
        </FormField>
        <FormField label="Business type" wide>
          <input name="business" value={formData.business} onChange={handleChange} placeholder="Consultancy, local service, eCommerce..." className={formInputClass} />
        </FormField>
        <FormField label="What should the website do better?" wide>
          <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us where visitors hesitate, what feels unclear, or what result you want..." className={`${formInputClass} resize-none`} />
        </FormField>

        {result && <div role="status" className={`flex items-center gap-3 rounded-xl p-3.5 text-sm sm:col-span-2 ${result.success ? "bg-[#dff0d8] text-[#38543c]" : "bg-[#f5dddd] text-[#743f3d]"}`}>
          {result.success ? <Check size={17} /> : <X size={17} />}<span>{result.message}</span>
        </div>}

        <button type="submit" disabled={isPending} className="group mt-1 inline-flex items-center justify-between rounded-xl bg-[#2d3536] px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a4546] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-55 sm:col-span-2">
          <span>{isPending ? "Sending your request..." : "Request my free audit"}</span>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 transition-transform duration-300 group-hover:translate-x-1">{isPending ? <Loader size={15} className="animate-spin" /> : <Send size={15} />}</span>
        </button>
        <p className="text-center text-[.68rem] leading-5 text-[#687274] sm:col-span-2">No obligation. Your details are used only to review and respond to this request.</p>
      </div>
    </form>
  );
}
