"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "We craft award-winning sites that are not just beautiful but performant.",
    image: "/help-section/tirza-van-dijk-o1SKqmgSDbg-unsplash.jpg",
  },
  {
    id: 2,
    title: "Development",
    description:
      "From simple CMS to complex web apps, we build scalable solutions.",
    image: "/help-section/luca-bravo-XJXWbfSo2f0-unsplash.jpg",
  },
  {
    id: 3,
    title: "Branding",
    description:
      "Identities that speak to your audience and stand the test of time.",
    image: "/help-section/job-vermeulen-qiUMSb2-IDQ-unsplash.jpg",
  },
  {
    id: 4,
    title: "SEO & Marketing",
    description:
      "Data-driven strategies to get your brand seen by the right people.",
    image: "/help-section/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash.jpg",
  },
];

const ServicesHome: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    const detectLowPerformance = () => {
      const userAgent = navigator.userAgent;
      const isOldDevice = /iPhone OS [1-9]_|Android [1-6]\./.test(userAgent);
      const deviceMemory = (navigator as any).deviceMemory;
      const hasLowMemory = deviceMemory && deviceMemory < 2;
      const hardwareConcurrency = navigator.hardwareConcurrency;
      const hasFewCores = hardwareConcurrency && hardwareConcurrency <= 2;
      
      setIsLowPerformance(isOldDevice || hasLowMemory || hasFewCores);
    };

    detectLowPerformance();
  }, []);

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            How we <span className="text-brand-accent">help.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                className={`group p-6 border-b border-white/10 cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? "bg-white/5 border-transparent rounded-xl"
                    : "hover:bg-white/5 hover:border-transparent hover:rounded-xl"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3
                    className={`text-2xl md:text-3xl font-display font-bold transition-colors ${
                      activeService === index
                        ? "text-white"
                        : "text-gray-500 group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    className={`w-6 h-6 transition-all duration-300 ${
                      activeService === index
                        ? "text-brand-accent opacity-100 rotate-45"
                        : "text-gray-500 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeService === index
                      ? "max-h-20 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden hidden md:block">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                  activeService === index
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-105 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={isLowPerformance ? 60 : 75}
                  onLoadingComplete={() => handleImageLoad(index)}
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <span className="text-4xl md:text-6xl font-display font-bold text-white/10 absolute -top-8 md:-top-12 -left-4">
                    0{index + 1}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold relative">
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;