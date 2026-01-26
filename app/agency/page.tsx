import { ArrowLeft, Users, Trophy, Target, Globe } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agancy",
};

const AgencyPage = () => {
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

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight">
            More than an <br />
            <span className="text-brand-accent">Agency.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 max-w-2xl">
            Sterling Web Lab is a creative collective defined by our relentless
            pursuit of the extraordinary. We don't just build websites; we
            engineer the future of brands.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/10 py-12">
          {[
            { label: "Projects Shipped", value: "250+" },
            { label: "Awards Won", value: "14" },
            { label: "Happy Clients", value: "98%" },
            { label: "Years Active", value: "5+" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="relative h-[500px] rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team Collaboration"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold">Collaborative by Design</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Our Culture
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We believe that great work comes from happy people. We foster an
              environment of radical transparency, continuous learning, and
              creative freedom.
            </p>
            <ul className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "People First",
                  desc: "We invest in our team's growth and well-being.",
                },
                {
                  icon: Target,
                  title: "Impact Driven",
                  desc: "We focus on outcomes, not just output.",
                },
                {
                  icon: Globe,
                  title: "Global Mindset",
                  desc: "Remote-first team with diverse perspectives.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-brand-accent">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
          <div className="md:col-span-2 h-full rounded-3xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Office"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Headquarters
            </div>
          </div>
          <div className="flex flex-col gap-4 h-full">
            <div className="h-1/2 rounded-3xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Brainstorming"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="h-1/2 rounded-3xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Meeting"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyPage;
