"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/site";

import educoreImg from "../../../public/images/projects/educore.jpg";
import sawaSolarImg from "../../../public/images/projects/sawa-solar.jpg";
import schoolSiteImg from "../../../public/images/projects/school-site.jpg";
import stockcoreImg from "../../../public/images/projects/stockcore.jpg";
import clientcoreImg from "../../../public/images/projects/clientcore.jpg";
import nuruAiImg from "../../../public/images/projects/nuru-ai.jpg";

const projectImages: Record<string, StaticImageData> = {
  "EduCore": educoreImg,
  "Sawa Solar Solution": sawaSolarImg,
  "Educational Institution Website": schoolSiteImg,
  "StockCore": stockcoreImg,
  "ClientCore": clientcoreImg,
  "Nuru AI Chatbot": nuruAiImg
};

type Filter = "all" | Project["status"];

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "Live", label: "Live Sites" },
  { value: "In Development", label: "In Development" }
];

function statusStyle(status: Project["status"]) {
  return status === "Live"
    ? "bg-emerald-300 text-emerald-950"
    : "bg-amber-300 text-amber-950";
}

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by status"
      >
        {filters.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              filter === value
                ? "bg-cyan-300 text-slate-950"
                : "border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/40"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <article
            key={project.title}
            className="glass group flex flex-col overflow-hidden rounded-[2rem]"
          >
            <div className="relative h-44 overflow-hidden bg-slate-900">
              <Image
                src={projectImages[project.title]}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10"
              />
              <span
                className={cn(
                  "absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm",
                  statusStyle(project.status)
                )}
              >
                {project.status === "Live" ? "Live" : "In Development"}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-200 uppercase">
                  {project.tag}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{project.summary}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-cyan-200 transition-colors hover:text-white"
                >
                  {project.hrefLabel ?? "View project"}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-amber-200">
                  Available on request
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
