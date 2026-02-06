import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../types";
import WorkClient from "./WorkClient";

async function getProjects(): Promise<ProjectItem[]> {
  try {
    const sanityUrl = process.env.NEXT_PUBLIC_SANITY_URL;
    if (!sanityUrl) {
      console.error("Sanity URL is not defined in environment variables.");
      return [];
    }
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
    const response = await fetch(new URL(sanityUrl, baseUrl), {
      cache: "no-store",
    });
    const data = await response.json();
    return data.result || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

const Work: React.FC = async () => {
  const projects = await getProjects();

  return (
    <section id="work" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-left text-4xl md:text-6xl font-display font-bold">
            Selected <span className="text-brand-accent">Works</span>
          </h2>
          <button className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-brand-accent transition-colors">
            View all projects <ArrowUpRight size={16} />
          </button>
        </div>
        <WorkClient projects={projects} />
      </div>
    </section>
  );
};

export default Work;