import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../types";

const projects: ProjectItem[] = [
  {
    id: "01",
    client: "Caerweb",
    category: "Fintech Interface",
    stats: "+82% Lead Gen",
    image: "https://picsum.photos/800/600?random=1",
    //project vercel link or another link
  },
  {
    id: "02",
    client: "Artcore",
    category: "E-commerce",
    stats: "3x Conversion",
    image: "https://picsum.photos/800/600?random=2",
    //project vercel link or another link
  },
  {
    id: "03",
    client: "Electic",
    category: "SaaS Platform",
    stats: "+45% Retention",
    image: "https://picsum.photos/800/600?random=3",
    //project vercel link or another link
  },
  {
    id: "04",
    client: "Velvet",
    category: "Fashion Brand",
    stats: "Award Winning",
    image: "https://picsum.photos/800/600?random=4",
  },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header - Fixed Alignment for Mobile (text-left) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-left text-4xl md:text-6xl font-display font-bold">
            Selected <span className="text-brand-accent">Works</span>
          </h2>
          <button className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-brand-accent transition-colors">
            View all projects <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 text-black text-xs font-bold rounded-full">
                    {project.stats}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4 group-hover:border-brand-accent transition-colors">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{project.client}</h3>
                  <p className="text-gray-400 text-sm">{project.category}</p>
                </div>
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-transparent group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-8 md:hidden text-center">
          <button className="flex items-center gap-2 text-sm font-medium mx-auto hover:text-brand-accent transition-colors">
            View all projects <ArrowUpRight size={16} />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Work;
