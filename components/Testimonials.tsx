import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sterling Web Lab transformed our digital presence. The team's attention to detail and creative approach is unmatched.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Working with them was seamless. They understood our vision immediately and delivered beyond expectations.",
    author: "Michael Chen",
    role: "Founder, StartUp Inc",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The ROI we've seen since launching the new site has been incredible. Truly a partner in growth.",
    author: "Elena Rodriguez",
    role: "Director, Creative Solutions",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
            <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
                Trusted by <span className="text-gray-500">Industry Leaders.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors relative flex flex-col justify-between h-full">
                    <Quote className="text-brand-accent w-10 h-10 mb-6 opacity-50" />
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">"{item.quote}"</p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                        <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full object-cover border-2 border-brand-accent/20" />
                        <div>
                            <h4 className="font-bold text-white">{item.author}</h4>
                            <p className="text-sm text-gray-500">{item.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;