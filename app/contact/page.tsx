import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactPage = () => {
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
                  <p className="text-gray-400">sterlingweblab.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-400">123 Innovation Dr.</p>
                  <p className="text-gray-400">San Francisco, CA 94103</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Mon-Fri, 9am-6pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl -z-10" />

            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">
                  Service Interested In
                </label>
                <select className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all appearance-none">
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
                  rows={5}
                  className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:bg-white/5 transition-all resize-none"
                ></textarea>
              </div>

              <button className="bg-brand-accent text-white font-bold py-4 rounded-xl mt-4 hover:bg-cyan-600 transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-brand-accent/20">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
