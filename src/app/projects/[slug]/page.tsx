import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Github,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench
} from "lucide-react";
import { SiteHeader } from "@/components/chrome/site-header";
import { SiteFooter } from "@/components/chrome/site-footer";
import { Breadcrumb } from "@/components/chrome/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import {
  nav,
  projects,
  getProject,
  absolute
} from "@/lib/site";
import { breadcrumbSchema, projectSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found."
    };
  }

  const title = `${project.title} — Technical Case Study & Architecture`;
  const url = absolute(`/projects/${project.slug}`);

  return {
    title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      type: "article",
      url,
      title: `${project.title} | Victor Muregi Engineering Portfolio`,
      description: project.summary,
      images: [
        {
          url: absolute(project.image),
          width: 1200,
          height: 675,
          alt: project.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Victor Muregi`,
      description: project.summary,
      images: [absolute(project.image)]
    }
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section-grid min-h-screen">
      <SiteHeader items={nav.primary} cta={{ label: "Hire Me", href: "/#contact" }} />

      <main id="main-content" className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/#projects" },
              { label: project.title }
            ]}
          />
        </div>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to All Projects
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {project.isFlagship ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Flagship Engineering Project
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-slate-300">
                Production System
              </span>
            )}
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-400/30">
              {project.status}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {project.tag}
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="max-w-4xl text-xl leading-relaxed text-slate-300">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-opacity hover:opacity-90"
              >
                Launch Live Demo
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-300/40"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                View Source Repository
              </a>
            )}

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-300 transition-colors hover:text-white"
            >
              Discuss System Integration
            </Link>
          </div>
        </header>

        {/* Key Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <section aria-label="Key project metrics" className="my-10">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glass flex flex-col rounded-3xl p-6 border border-white/10"
                >
                  <dt className="order-2 text-sm text-slate-300">{metric.label}</dt>
                  <dd className="order-1 text-3xl font-black text-cyan-300">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Screenshot Hero Banner */}
        <section aria-label="Project visual preview" className="my-10">
          <div className="glass relative aspect-video w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"
            />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-slate-950/70 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md border border-white/10">
                {project.imageAlt}
              </span>
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow hover:bg-cyan-300"
                >
                  Open Live Application
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Detailed Engineering Case Study Grid */}
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Case Study Column */}
          <div className="space-y-10 lg:col-span-2">
            {/* Section 1: The Problem */}
            <article className="glass rounded-[2rem] p-8 border border-white/10">
              <div className="flex items-center gap-3 text-cyan-200">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-white">The Problem &amp; Context</h2>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {project.problem}
              </p>
            </article>

            {/* Section 2: Users & Workflows */}
            <article className="glass rounded-[2rem] p-8 border border-white/10">
              <div className="flex items-center gap-3 text-cyan-200">
                <Users className="h-6 w-6" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-white">Target Users &amp; Stakeholders</h2>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.users.map((user) => (
                  <li
                    key={user}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-200"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium leading-relaxed">{user}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Section 3: System Architecture */}
            <article className="glass rounded-[2rem] p-8 border border-white/10">
              <div className="flex items-center gap-3 text-cyan-200">
                <Layers className="h-6 w-6" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-white">System Architecture</h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {project.architectureSummary}
              </p>
              <div className="mt-6 space-y-4">
                {project.architecture.map((item, idx) => (
                  <div
                    key={item.layer}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-bold text-cyan-200 border border-cyan-400/20">
                        0{idx + 1}
                      </span>
                      <h3 className="font-semibold text-white">{item.layer}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* Section 4: Engineering Challenge */}
            <article className="glass rounded-[2rem] p-8 border border-white/10">
              <div className="flex items-center gap-3 text-cyan-200">
                <Cpu className="h-6 w-6" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-white">Core Engineering Challenge</h2>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {project.engineeringChallenge}
              </p>
            </article>

            {/* Section 5: Results & Impact */}
            <article className="glass rounded-[2rem] p-8 border border-white/10">
              <div className="flex items-center gap-3 text-emerald-300">
                <BarChart3 className="h-6 w-6" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-white">Result &amp; Operational Impact</h2>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {project.result}
              </p>
            </article>
          </div>

          {/* Sidebar Specifications */}
          <aside className="space-y-8">
            {/* Tech Stack Card */}
            <div className="glass rounded-[2rem] p-7 border border-white/10">
              <div className="flex items-center gap-2.5 text-cyan-200">
                <Wrench className="h-5 w-5" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white">Technology Stack</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="glass rounded-[2rem] p-7 border border-white/10">
              <h3 className="text-xl font-bold text-white">Architectural Highlights</h3>
              <ul className="mt-5 space-y-3.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                  >
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-cyan-300"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Links Card */}
            <div className="glass rounded-[2rem] p-7 border border-white/10">
              <h3 className="text-xl font-bold text-white">Access &amp; Code</h3>
              <div className="mt-5 space-y-3">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-400/20"
                  >
                    <span>View Live Deployment</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40"
                  >
                    <span>Inspect GitHub Repository</span>
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                <Link
                  href="/#projects"
                  className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  <span>Explore Other Projects</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom CTA Banner */}
        <section className="mt-16 rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Interested in Building Something Similar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            I engineer reliable full-stack systems, institutional platforms, and M-Pesa payment workflows for Kenyan schools and businesses.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:opacity-90"
            >
              Get in Touch with Victor
            </Link>
            <Link
              href="/#projects"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white hover:border-cyan-300/40"
            >
              Back to Projects
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Structured data */}
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Projects", href: "/#projects" },
          { label: project.title, href: `/projects/${project.slug}` }
        ])}
      />
      <JsonLd data={projectSchema(project)} />
    </div>
  );
}
