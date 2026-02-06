
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../types";

interface WorkArticleProps {
  project: ProjectItem;
  openModal: (project: ProjectItem) => void;
}

const WorkArticle: React.FC<WorkArticleProps> = ({ project, openModal }) => {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => openModal(project)}
    >
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
  );
};

export default WorkArticle;