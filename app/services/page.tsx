import { ArrowLeft, Code, PenTool, TrendingUp, Monitor } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-brand-accent" />,
      title: "Web Development",
      description:
        "We build scalable, high-performance websites using the latest technologies like React, Next.js, and Node.js. Our code is clean, SEO-friendly, and built for speed.",
      features: [
        "Custom Web Apps",
        "CMS Development",
        "E-commerce Solutions",
        "API Integrations",
      ],
    },
    {
      icon: <PenTool className="w-10 h-10 text-brand-accent" />,
      title: "Product Design",
      description:
        "Our design process focuses on user experience and brand identity. We create intuitive interfaces that guide users towards conversion while looking stunning.",
      features: [
        "UI/UX Design",
        "Design Systems",
        "Prototyping",
        "Brand Identity",
      ],
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-brand-accent" />,
      title: "Digital Marketing",
      description:
        "We don't just build websites; we help you grow. Our data-driven marketing strategies ensure your message reaches the right audience at the right time.",
      features: [
        "SEO Optimization",
        "Content Strategy",
        "Social Media Marketing",
        "PPC Campaigns",
      ],
    },
    {
      icon: <Monitor className="w-10 h-10 text-brand-accent" />,
      title: "Maintenance & Support",
      description:
        "Your digital presence needs continuous care. We provide ongoing support, security updates, and performance monitoring to keep your business running smoothly.",
      features: [
        "24/7 Monitoring",
        "Security Audits",
        "Speed Optimization",
        "Regular Updates",
      ],
    },
  ];

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

        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-400">
            We provide end-to-end digital solutions for ambitious brands. From
            initial concept to final launch and beyond, we are your partners in
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 md:gap-16 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-accent/20 transition-all duration-300"
            >
              <div className="md:w-1/3">
                <div className="p-4 bg-white/5 rounded-2xl w-fit mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-accent" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
