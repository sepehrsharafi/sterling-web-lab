"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { ProjectItem } from "../types";
import WorkArticle from "./WorkArticle";

interface WorkClientProps {
  projects: ProjectItem[];
}

const WorkClient: React.FC<WorkClientProps> = ({ projects }) => {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const backdropGradients = useMemo(
    () => [
      "from-brand-accent/30 via-transparent to-brand-dark",
      "from-amber-400/20 via-transparent to-brand-dark",
      "from-emerald-400/20 via-transparent to-brand-dark",
      "from-sky-400/20 via-transparent to-brand-dark",
    ],
    [],
  );

  const gradientForProject = (project: ProjectItem) => {
    const numeric = parseInt(project._id.slice(-6), 16);
    const idx =
      Number.isFinite(numeric) && numeric >= 0
        ? numeric % backdropGradients.length
        : 0;
    return backdropGradients[idx];
  };

  const openModal = (project: ProjectItem) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setSelected(project);
    setModalVisible(false);
    requestAnimationFrame(() => setModalVisible(true));
  };

  const closeModal = () => {
    setModalVisible(false);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setSelected(null);
      closeTimer.current = null;
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <WorkArticle
            key={project._id}
            project={project}
            openModal={openModal}
          />
        ))}
      </div>

      {selected && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:py-16 transition-opacity duration-300 ${
            modalVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ${
              modalVisible ? "bg-black/80" : "bg-black/0"
            }`}
            onClick={closeModal}
          />
          <div
            className={`relative w-full max-w-5xl bg-brand-dark/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-accent/20 transition-all duration-300 ease-out ${
              modalVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-[0.98]"
            }`}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradientForProject(
                  selected,
                )} opacity-40`}
              />
            </div>
            <div className="relative grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.client}
                  className="w-full h-full object-cover md:min-h-[520px]"
                />
              </div>
              <div className="md:col-span-2 p-6 md:p-8 space-y-6 bg-black/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      {selected.year || "Recent"}
                    </p>
                    <h3 className="text-3xl font-bold leading-tight">
                      {selected.client}
                    </h3>
                    <p className="text-brand-accent mt-1 font-medium">
                      {selected.category}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition"
                    aria-label="Close project details"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed">
                  {selected.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selected.deliverables.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selected.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm text-gray-100"
                      >
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((stack) => (
                    <span
                      key={stack}
                      className="px-2.5 py-1 text-xs rounded border border-white/10 bg-white/5 text-gray-200"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
                    Outcome
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {selected.result}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-brand-accent font-semibold">
                    <span>{selected.stats}</span>
                    <span className="h-px w-8 bg-brand-accent/60" />
                    <span>{selected.category}</span>
                  </div>
                </div>

                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-accent transition"
                  >
                    View live <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkClient;