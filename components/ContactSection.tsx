import React from "react";
import { ArrowRight } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/5 rounded-[3rem] p-8 md:p-16 border border-white/10 flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's create something <br />{" "}
              <span className="text-brand-accent">extraordinary.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Ready to take your brand to the next level? Drop us a line and
              let's discuss your next project.
            </p>
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <a
                href="mailto:sterlingweblab@gmail.com"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
              >
                sterlingweblab@gmail.com
              </a>
              <p>+98 936 767 7180</p>
              <p>+98 915 409 3785</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-black/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"
              ></textarea>

              <button className="bg-white text-black font-bold py-4 rounded-xl mt-2 hover:bg-brand-accent hover:text-white transition-all duration-300 flex justify-center items-center gap-2 group">
                Send Message
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
