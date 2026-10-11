"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Github,
  Layers,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/site";

import educoreImg from "../../../public/images/projects/educore.jpg";
import coreCrmImg from "../../../public/images/projects/core-crm.jpg";
import educoreRatibaImg from "../../../public/images/projects/educore-ratiba.jpg";
import sawaSolarImg from "../../../public/images/projects/sawa-solar.jpg";
import schoolSiteImg from "../../../public/images/projects/school-site.jpg";
import livestockImg from "../../../public/images/projects/stockcore.jpg";

const projectImages: Record<string, StaticImageData> = {
  "educore": educoreImg,
  "core-crm": coreCrmImg,
  "educore-ratiba": educoreRatibaImg,
  "sawa-solar": sawaSolarImg,
  "school-website": schoolSiteImg,
  "livestock-management": livestockImg
};

type Filter = "all" | "flagship" | "live";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Engineering Projects" },
  { value: "flagship", label: "Flagship Systems" },
  { value: "live", label: "Live Deployments" }
];

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const flagshipProjects = projects.filter((p) => p.isFlagship);
  const secondaryProjects = projects.filter((p) => !p.isFlagship);

  const displayedFlagships =
    filter === "live"
      ? flagshipProjects.filter((p) => p.status === "Live")
      : flagshipProjects;

  const displayedSecondary =
    filter === "flagship"
      ? []
      : filter === "live"
      ? secondaryProjects.filter((p) => p.status === "Live")
      : secondaryProjects;

  return (
    <div className="space-y-16">
      {/* Filter Tabs */}
      <div
        className="flex flex-wrap items-center justify-between gap-4"
        role="group"
        aria-label="Filter projects by category"
      >
        <div className="flex flex-wrap gap-2">
          {filters.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                filter === value
                  ? "bg-cyan-300 text-slate-950 shadow-md shadow-cyan-300/20 font-semibold"
                  : "border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/40"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="text-xs text-slate-400">
          Showing verified production systems &amp; repositories
        </p>
      </div>

      {/* ============================================================== */}
      {/* 1. Flagship Engineering Projects (EduCore, Core CRM, EduCore Ratiba) */}
      {/* ============================================================== */}
      {displayedFlagships.length > 0 && (
        <section aria-labelledby="flagship-heading" className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3
                id="flagship-heading"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                Flagship Systems
              </h3>
              <p className="text-sm text-slate-300">
                Complex architectures solving institutional operations, data isolation, and constraint optimization.
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            {displayedFlagships.map((project) => {
              const imageSource = projectImages[project.slug] ?? educoreImg;
              return (
                <article
                  key={project.slug}
                  className="glass group relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 transition-all hover:border-cyan-300/40"
                >
                  <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
                    {/* Left: Engineering Breakdown */}
                    <div className="flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                            <Sparkles className="h-3 w-3" aria-hidden="true" />
                            Flagship
                          </span>
                          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                            {project.status}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {project.tag}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                            {project.title}
                          </h4>
                          <p className="mt-2 text-base font-medium text-cyan-200">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Problem Statement */}
                        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Problem
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-300">
                            {project.problem}
                          </p>
                        </div>

                        {/* Architecture Summary */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                            <Layers className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                            Architecture Highlight
                          </div>
                          <p className="text-sm leading-relaxed text-slate-300">
                            {project.architectureSummary}
                          </p>
                        </div>

                        {/* Engineering Challenge & Result */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                            <Cpu className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                            Engineering Challenge
                          </div>
                          <p className="text-sm leading-relaxed text-slate-300">
                            {project.engineeringChallenge}
                          </p>
                        </div>

                        {/* Stack Badges */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Primary Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-400/20 transition-opacity hover:opacity-90"
                        >
                          Technical Case Study
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>

                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40"
                          >
                            Live Demo
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}

                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40"
                          >
                            <Github className="h-3.5 w-3.5" aria-hidden="true" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Screenshot Preview & Metric Badges */}
                    <div className="flex flex-col justify-between space-y-6">
                      <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-xl">
                        <Image
                          src={imageSource}
                          alt={project.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 500px, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
                        />
                        <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/80 px-3.5 py-1 text-xs font-medium text-slate-200 backdrop-blur-md border border-white/10">
                          {project.title} Interface Preview
                        </span>
                      </div>

                      {/* Quantitative Metrics Cards */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-3">
                          {project.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center"
                            >
                              <p className="text-xl font-black text-cyan-300">{m.value}</p>
                              <p className="mt-1 text-xs font-medium text-slate-300">
                                {m.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Highlights checklist */}
                      <ul className="space-y-2 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                        {project.highlights.slice(0, 3).map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-xs text-slate-300"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* 2. Secondary Production Projects (Commercial & Client Solutions) */}
      {/* ============================================================== */}
      {displayedSecondary.length > 0 && (
        <section aria-labelledby="secondary-heading" className="space-y-8 pt-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-slate-300 border border-white/10">
              <Layers className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3
                id="secondary-heading"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                Commercial &amp; Client Projects
              </h3>
              <p className="text-sm text-slate-300">
                Production client platforms, institutional portals, and domain-specific applications.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedSecondary.map((project) => {
              const imageSource = projectImages[project.slug] ?? sawaSolarImg;
              return (
                <article
                  key={project.slug}
                  className="glass group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 transition-all hover:border-cyan-300/40"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <Image
                      src={imageSource}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
                    />
                    <span className="absolute top-4 left-4 rounded-full border border-emerald-400/30 bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
                        {project.tag}
                      </p>
                      <h4 className="mt-1.5 text-xl font-bold text-white">
                        {project.title}
                      </h4>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-auto space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1 text-cyan-200 hover:text-white"
                        >
                          Case Study
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>

                        <div className="flex items-center gap-3">
                          {project.liveDemoUrl && (
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
                            >
                              Live
                              <ExternalLink className="h-3 w-3" aria-hidden="true" />
                            </a>
                          )}
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
                            >
                              <Github className="h-3 w-3" aria-hidden="true" />
                              Repo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
