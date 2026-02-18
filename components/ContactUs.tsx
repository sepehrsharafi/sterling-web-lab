"use client";

import React, { useState, useTransition, useEffect } from "react";
import { ArrowLeft, Mail, Phone, Send, Loader, Check, X } from "lucide-react";
import Link from "next/link";
import { sendEmail } from "@/app/actions/sendEmail";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Web Development",
    message: "",
  });
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
  }>({});
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (result?.success) {
      const timer = setTimeout(() => {
        setResult(null);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [result]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);

    const newErrors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      message?: string;
    } = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    startTransition(async () => {
      const { success } = await sendEmail(formData);
      if (success) {
        setResult({
          success: true,
          message: "Your message has been sent successfully!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          service: "Web Development",
          message: "",
        });
        setErrors({});
      } else {
        setResult({
          success: false,
          message: "Something went wrong. Please try again.",
        });
      }
    });
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-black">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Get in <span className="text-brand-accent">Touch.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-lg leading-relaxed">
              Have a project in mind? We'd love to hear about it. Send us a
              message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Us</h3>
                  <a
                    href="mailto:sterlingweblab@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    sterlingweblab@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Call Us</h3>
                  <p className="text-gray-400">+98 936 767 7180</p>
                  <p className="text-gray-400">+98 915 409 3785</p>
                  <p className="text-gray-500 text-sm mt-1">
                    All day, Every day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl -z-10" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`bg-black/20 border ${
                      errors.firstName ? "border-red-500" : "border-white/10"
                    } rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`bg-black/20 border ${
                      errors.lastName ? "border-red-500" : "border-white/10"
                    } rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-black/20 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all appearance-none"
                >
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                  <option>Branding</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`bg-black/20 border ${
                    errors.message ? "border-red-500" : "border-white/10"
                  } rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {result && (
                <div
                  className={`relative rounded-lg p-3 ${
                    result.success
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {result.success ? <Check size={18} /> : <X size={18} />}
                    <p className="text-sm">{result.message}</p>
                  </div>
                  {result.success && (
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-green-500/20">
                      <div className="h-1 bg-green-500 animate-progress"></div>
                    </div>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="bg-brand-accent text-white font-bold py-4 rounded-xl mt-4 hover:bg-cyan-600 transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-brand-accent/20 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
