import React from 'react';
import { Layout, Smartphone, Search, BarChart } from 'lucide-react';

const expertiseItems = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'UI/UX Design',
    desc: 'Crafting intuitive interfaces that users love to interact with.'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Development',
    desc: 'Robust front-end and back-end solutions using modern stacks.'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO & Growth',
    desc: 'Data-driven strategies to increase visibility and conversions.'
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Brand Strategy',
    desc: 'Positioning your business to stand out in crowded markets.'
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="relative py-24 md:py-32">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-accent/20 to-purple-600/20 rounded-full blur-3xl animate-pulse pointer-events-none opacity-60 mix-blend-screen" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Our area of <br />
                <span className="text-gray-500">Expertise.</span>
            </h2>
            <p className="max-w-md text-gray-400 text-lg">
                We combine creative thinking with technical excellence to deliver results that matter.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseItems.map((item, index) => (
                <div key={index} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-accent/50 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm">
                    <div className="mb-6 p-4 rounded-full bg-white/5 w-fit text-brand-accent group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
