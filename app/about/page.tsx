import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sterling Web Lab, a digital agency that specializes in web design, development, and branding.",
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-black">
      <SeoBreadcrumbs
        items={[
          { name: "Home", url: site.url },
          { name: "About", url: `${site.url}/about` },
        ]}
      />
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              We are <br />
              <span className="text-brand-accent">Sterling.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Founded in 2020, Sterling Web Lab started with a simple mission:
              to treat web design as a science. We believe that B2B websites
              should be precise, effective, and beautiful.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a collective of designers, developers, and scientists of
              the web who are obsessed with quality. We don't just ship code; we
              engineer experiences that elevate brands and drive tangible
              results.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-95 blur-xl" />
            <Image
              src="https://picsum.photos/800/800?random=10"
              alt="Team working"
              className="relative rounded-3xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              width={800}
              height={800}
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-12 border-b border-white/10 pb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision",
                desc: "We measure everything. Every pixel and every line of code has a purpose.",
              },
              {
                title: "Quality Over Quantity",
                desc: "We take on fewer projects to ensure the highest standard of delivery.",
              },
              {
                title: "Innovation",
                desc: "We act as a lab, constantly experimenting with the latest web technologies.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 rounded-2xl border border-white/5"
              >
                <h3 className="text-xl font-bold mb-4 text-white">
                  {val.title}
                </h3>
                <p className="text-gray-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white/5 rounded-3xl p-16 border border-white/5">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to join the lab?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We are always looking for talented individuals to join our
            remote-first team.
          </p>
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-brand-accent hover:text-white transition-colors">
            View Openings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
