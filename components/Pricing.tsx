import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$2,500",
    features: ["Custom Landing Page", "Mobile Responsive", "Basic SEO Setup", "1 Month Support"]
  },
  {
    name: "Growth",
    price: "$5,000",
    features: ["5 Page Website", "CMS Integration", "Advanced SEO", "Analytics Dashboard", "3 Months Support"],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Full Product Design", "Custom Web App", "API Integration", "Priority Support", "Dedicated Manager"]
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-400">Transparent packages for your next big idea.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {plans.map((plan, index) => (
                <div 
                    key={index} 
                    className={`relative rounded-3xl p-8 transition-all duration-300 ${
                        plan.isPopular 
                        ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-brand-accent/50 shadow-2xl shadow-brand-accent/10 z-10 scale-105' 
                        : 'bg-white/5 border border-white/10 hover:border-white/20'
                    }`}
                >
                    {/* Fixed Badge: Absolute position within relative container, ensuring visual clarity */}
                    {plan.isPopular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap z-20">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-300 mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold font-display">{plan.price}</div>
                        {plan.price !== 'Custom' && <span className="text-sm text-gray-500">/project</span>}
                    </div>

                    <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                <Check size={16} className="text-brand-accent mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button className={`w-full py-3 rounded-xl font-medium transition-colors ${
                        plan.isPopular 
                        ? 'bg-brand-accent text-white hover:bg-white hover:text-black' 
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}>
                        Choose Plan
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
