import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";
import { SiteHeader } from "@/components/chrome/site-header";
import { SiteFooter } from "@/components/chrome/site-footer";
import { Breadcrumb } from "@/components/chrome/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { ResumeActions } from "@/components/interactive/resume-actions";
import { site, nav, absolute } from "@/lib/site";
import { personSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV) & Resume | Victor Muregi",
  description:
    "CV of Victor Muregi, Full-Stack Developer & Founder of MuregiScore Technologies (Nairobi). React, Node, PHP, multi-tenant SaaS, RBAC, and M-Pesa patterns.",
  alternates: {
    canonical: "/cv"
  },
  openGraph: {
    type: "profile",
    url: absolute("/cv"),
    title: "Victor Muregi — Full-Stack Developer CV",
    description:
      "Full-stack developer & founder in Nairobi. React, TypeScript, Node/Express, PHP, PostgreSQL/MySQL, RBAC, queues, and M-Pesa integration patterns.",
    images: [
      {
        url: absolute("/og.png"),
        width: 1200,
        height: 630,
        alt: "Victor Muregi — Software Developer Resume"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Muregi — Full-Stack Developer CV",
    description:
      "Full-stack developer & founder in Nairobi. React, Node/Express, PHP, multi-tenant systems, RBAC, BullMQ, M-Pesa patterns.",
    images: [absolute("/og.png")]
  }
};

const atsPlainText = `VICTOR MUREGI
Full-Stack Developer & Founder · Multi-tenant systems, APIs & payments
Nairobi, Kenya | +254 797 846 126 | i.am.muregi@gmail.com
Portfolio: portfolio.muregiscore.me
GitHub: github.com/Muregis | LinkedIn: linkedin.com/in/victor-muregi

SUMMARY
Full-stack developer and founder of MuregiScore Technologies (Nairobi). Builds multi-tenant web systems for Kenyan schools and SMEs using React, TypeScript, Node.js/Express, PHP, and PostgreSQL/MySQL. Focus areas: role-based access control (RBAC), tenant isolation, background jobs (BullMQ/Redis patterns), and Safaricom M-Pesa / Paystack integration patterns. Diploma in Computer Science (Level 6) at Kiambu National Polytechnic; hands-on product work since 2023–2024.

TECHNICAL COMPETENCIES
- Languages: TypeScript, JavaScript, PHP, SQL, Python
- Frontend: React, Next.js, Vite, Tailwind CSS, responsive UI
- Backend & APIs: Node.js, Express, PHP, REST APIs, webhooks, validation
- Databases: PostgreSQL, MySQL, schema design, indexing, audit-friendly designs
- Security: JWT/session auth, RBAC, tenant scoping (school_id / tenant_id)
- Queues & async: BullMQ, Redis, background workers, job status APIs
- Payments: M-Pesa Daraja patterns (STK Push / C2B-style flows), Paystack hooks
- Tooling: Git, GitHub Actions, Linux basics, Vercel, Render, Docker basics

ENGINEERING EXPERIENCE
FOUNDER & FULL-STACK DEVELOPER | MuregiScore Technologies | 2024 – Present
- Design and ship three flagship systems: EduCore (multi-tenant school management), Core CRM (SME CRM with tenants, RBAC, BullMQ), and EduCore Ratiba (whole-school timetable engine with FET and clash checks).
- Implement school/tenant isolation, role-aware APIs, and payment integration points suitable for Kenyan institutions.
- Add automated tests and GitHub Actions CI on flagship repositories; document architecture and setup honestly (including phased rollout for Core CRM).

FREELANCE / CLIENT WEB WORK | 2023 – Present
- Delivered marketing and institutional sites for local clients (e.g. solar company site, school information portal) with mobile-first layouts and clear CTAs.
- Scope focused on usable, deployable frontends rather than overstated enterprise claims.

FLAGSHIP PROJECTS
EDUCORE — Multi-tenant school management SaaS (Live)
- Student records, fees, academics, RBAC, and Paystack/M-Pesa integration points with school_id isolation.
- Stack: React, Vite, Node/Express, Supabase PostgreSQL.
- Demo: educore-school-management-system-pi.vercel.app | github.com/Muregis/educore-school-management-system

CORE CRM — Multi-tenant CRM for Kenyan SMEs (In development)
- Customers, leads, pipeline, tenant isolation, RBAC, BullMQ report workflow, vertical modules (land, commercial, legal).
- Stack: React, Vite, Node/Express, MySQL, Redis, BullMQ, Jest/Supertest.
- Code: github.com/Muregis/Core-Crm-model

EDUCORE RATIBA — Whole-school timetable engine, CBC / 8-4-4 (Live)
- PHP + FET solver, pre-flight checks, teacher/room/class clash detection, CI tests.
- Demo: educoreratiba.vercel.app | github.com/Muregis/Educore-Ratiba

EDUCATION
Diploma in Computer Science (Level 6) | Kiambu National Polytechnic | 2023 – Present (expected 2026)
Coursework: programming, data structures, databases, software engineering, networks, systems analysis, operating systems.

SELECTED RECOGNITION
- Top 5 Innovator, Kiambu Polytechnic Innovation Challenge (2024) — EduCore demonstration.

OPEN TO
Junior full-stack, junior software engineer, backend, and product/implementation roles (Nairobi or remote-friendly). Available for technical interviews and project walkthroughs.
`;

export default function CvPage() {
  return (
    <div className="section-grid min-h-screen">
      <SiteHeader items={nav.primary} cta={{ label: "Hire Me", href: "/#contact" }} />

      <main id="main-content" className="mx-auto max-w-5xl px-6 py-8 lg:px-10 lg:py-12">
        <div className="mb-6 print:hidden">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Curriculum Vitae" }
            ]}
          />
        </div>

        <div className="mb-6 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Portfolio Homepage
          </Link>
        </div>

        <div className="mb-8 rounded-3xl border border-white/10 bg-slate-950/60 p-6 md:p-8 backdrop-blur-md print:hidden">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Application-ready profile
              </span>
              <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Curriculum Vitae & Resume
              </h1>
              <p className="mt-1 text-base text-slate-300">
                Full-Stack Developer · Multi-tenant systems, APIs & payments
              </p>
            </div>

            <ResumeActions pdfUrl={site.resumeUrl} plainText={atsPlainText} />
          </div>
        </div>

        <article className="glass rounded-[2rem] border border-white/15 p-8 md:p-12 shadow-2xl print:m-0 print:border-none print:bg-white print:p-0 print:text-slate-900 print:shadow-none">
          <header className="border-b border-cyan-400/30 pb-6 print:border-cyan-700">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl print:text-3xl print:text-slate-950">
                  VICTOR MUREGI
                </h2>
                <p className="mt-1 text-base font-semibold text-cyan-300 print:text-cyan-800">
                  Full-Stack Developer & Founder · Multi-tenant systems, APIs & payments
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 print:hidden">
                Open to opportunities
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300 print:text-slate-700">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 print:text-cyan-800" aria-hidden="true" />
                Nairobi, Kenya
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-cyan-400 print:text-cyan-800" aria-hidden="true" />
                +254 797 846 126
              </span>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white print:text-slate-900"
              >
                <Mail className="h-3.5 w-3.5 text-cyan-400 print:text-cyan-800" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white print:text-slate-900"
              >
                <Github className="h-3.5 w-3.5 text-cyan-400 print:text-cyan-800" aria-hidden="true" />
                github.com/Muregis
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white print:text-slate-900"
              >
                <Linkedin className="h-3.5 w-3.5 text-cyan-400 print:text-cyan-800" aria-hidden="true" />
                linkedin.com/in/victor-muregi
              </a>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white print:text-slate-900"
              >
                Portfolio
              </a>
            </div>
          </header>

          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <Code2 className="h-4 w-4" aria-hidden="true" />
              Professional Summary
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 print:text-slate-800">
              <strong className="text-white print:text-slate-950 font-semibold">Full-stack developer</strong> and founder of{" "}
              <strong className="text-white print:text-slate-950 font-semibold">MuregiScore Technologies</strong> (Nairobi).
              Builds multi-tenant web systems for Kenyan schools and SMEs with{" "}
              <strong className="text-cyan-200 print:text-slate-950 font-semibold">
                React, TypeScript, Node.js/Express, PHP, and PostgreSQL/MySQL
              </strong>
              . Focus areas:{" "}
              <strong className="text-white print:text-slate-950 font-semibold">RBAC</strong>, tenant isolation,{" "}
              <strong className="text-white print:text-slate-950 font-semibold">BullMQ/Redis</strong> background jobs, and{" "}
              <strong className="text-white print:text-slate-950 font-semibold">M-Pesa / Paystack</strong> integration patterns.
              Diploma in Computer Science (Level 6) at Kiambu National Polytechnic; product work since 2023–2024.
            </p>
          </section>

          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
              Technical Competencies
            </h3>
            <div className="mt-4 grid gap-3 text-sm">
              {[
                { label: "Languages", list: "TypeScript, JavaScript, PHP, SQL, Python" },
                {
                  label: "Frontend",
                  list: "React, Next.js, Vite, Tailwind CSS, responsive UI, performance-minded layouts"
                },
                {
                  label: "Backend & APIs",
                  list: "Node.js, Express, PHP, REST APIs, webhooks, validation, error handling"
                },
                {
                  label: "Databases",
                  list: "PostgreSQL, MySQL, schema design, indexing, audit-friendly designs"
                },
                {
                  label: "Security & tenancy",
                  list: "JWT/session auth, RBAC, tenant scoping (school_id / tenant_id)"
                },
                {
                  label: "Queues & async",
                  list: "BullMQ, Redis, background workers, job status APIs"
                },
                {
                  label: "Payments",
                  list: "M-Pesa Daraja patterns (STK Push / C2B-style flows), Paystack hooks"
                },
                {
                  label: "Tooling",
                  list: "Git, GitHub Actions CI/CD, Linux basics, Vercel, Render, Docker basics"
                }
              ].map(({ label, list }) => (
                <div key={label} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-4">
                  <span className="font-bold text-white print:text-slate-950">{label}:</span>
                  <span className="text-slate-300 print:text-slate-800">{list}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
              Engineering Experience
            </h3>

            <div className="mt-5 space-y-6">
              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-base font-bold text-white print:text-slate-950">
                    Founder & Full-Stack Developer
                  </h4>
                  <span className="text-xs font-semibold text-slate-400 print:text-slate-600">
                    2024 – Present
                  </span>
                </div>
                <p className="text-sm font-semibold text-cyan-200 print:text-cyan-900">
                  MuregiScore Technologies · Nairobi
                </p>
                <ul className="mt-2 space-y-1.5 pl-5 list-disc text-sm text-slate-300 print:text-slate-800">
                  <li>
                    Design and ship three flagship systems:{" "}
                    <strong className="text-white print:text-slate-950">EduCore</strong> (multi-tenant school
                    management), <strong className="text-white print:text-slate-950">Core CRM</strong> (SME CRM
                    with tenants, RBAC, BullMQ), and{" "}
                    <strong className="text-white print:text-slate-950">EduCore Ratiba</strong> (whole-school
                    timetable engine with FET and clash checks).
                  </li>
                  <li>
                    Implement school/tenant isolation, role-aware APIs, and payment integration points for Kenyan
                    institutions.
                  </li>
                  <li>
                    Add automated tests and GitHub Actions CI on flagship repos; document architecture and setup
                    honestly, including phased rollout for Core CRM.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-base font-bold text-white print:text-slate-950">
                    Freelance / Client Web Work
                  </h4>
                  <span className="text-xs font-semibold text-slate-400 print:text-slate-600">
                    2023 – Present
                  </span>
                </div>
                <p className="text-sm font-semibold text-cyan-200 print:text-cyan-900">
                  Independent · Kenya
                </p>
                <ul className="mt-2 space-y-1.5 pl-5 list-disc text-sm text-slate-300 print:text-slate-800">
                  <li>
                    Delivered marketing and institutional sites for local clients (solar company site, school
                    information portal) with mobile-first layouts and clear inquiry paths.
                  </li>
                  <li>Focus on usable, deployable frontends rather than inflated enterprise scope.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <Code2 className="h-4 w-4" aria-hidden="true" />
              Flagship Projects
            </h3>

            <div className="mt-5 space-y-6">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-base font-bold text-white print:text-slate-950">EduCore</h4>
                  <span className="text-xs font-semibold text-emerald-300 print:text-emerald-800">Live</span>
                </div>
                <p className="text-xs font-semibold text-cyan-300 print:text-cyan-800">
                  React · Vite · Node/Express · Supabase PostgreSQL · RBAC
                </p>
                <p className="mt-1 text-sm text-slate-300 print:text-slate-800">
                  Multi-tenant school management SaaS — student records, fees, academics, school_id isolation, and
                  payment integration points.
                </p>
                <ul className="mt-2 space-y-1 pl-5 list-disc text-xs sm:text-sm text-slate-300 print:text-slate-800">
                  <li>Tenant boundaries keyed by school_id across school-scoped modules.</li>
                  <li>Role-aware staff workflows and ops-oriented health/readiness endpoints.</li>
                </ul>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href="https://educore-school-management-system-pi.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:underline print:text-slate-700"
                  >
                    Live demo <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/Muregis/educore-school-management-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:underline print:text-slate-700"
                  >
                    GitHub <Github className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <Link
                    href="/projects/educore"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:underline print:hidden"
                  >
                    Case study <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-base font-bold text-white print:text-slate-950">Core CRM</h4>
                  <span className="text-xs font-semibold text-amber-300 print:text-amber-800">
                    In development
                  </span>
                </div>
                <p className="text-xs font-semibold text-cyan-300 print:text-cyan-800">
                  React · Node/Express · MySQL · Redis · BullMQ · Jest/Supertest
                </p>
                <p className="mt-1 text-sm text-slate-300 print:text-slate-800">
                  Multi-tenant CRM for Kenyan SMEs — pipeline, tenants, RBAC, BullMQ reports, and vertical modules
                  (land, commercial, legal). Production rollout is phased.
                </p>
                <ul className="mt-2 space-y-1 pl-5 list-disc text-xs sm:text-sm text-slate-300 print:text-slate-800">
                  <li>Tenant-scoped resources and role guards under automated tests.</li>
                  <li>BullMQ report workflow: enqueue → worker → status/result API.</li>
                </ul>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href="https://github.com/Muregis/Core-Crm-model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-slate-300 hover:text-white print:text-slate-700"
                  >
                    GitHub <Github className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <Link
                    href="/projects/core-crm"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:underline print:hidden"
                  >
                    Case study <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-base font-bold text-white print:text-slate-950">EduCore Ratiba</h4>
                  <span className="text-xs font-semibold text-emerald-300 print:text-emerald-800">Live</span>
                </div>
                <p className="text-xs font-semibold text-cyan-300 print:text-cyan-800">
                  PHP 8 · MySQL/PostgreSQL · FET · Dompdf
                </p>
                <p className="mt-1 text-sm text-slate-300 print:text-slate-800">
                  Whole-school timetable engine for CBC / 8-4-4 — FET generation, pre-flight checks, and clash
                  detection with CI tests.
                </p>
                <ul className="mt-2 space-y-1 pl-5 list-disc text-xs sm:text-sm text-slate-300 print:text-slate-800">
                  <li>Teacher / room / class conflict checks and workload pre-checks.</li>
                  <li>Automated tests in CI; live demo for reviewers.</li>
                </ul>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href="https://educoreratiba.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:underline print:text-slate-700"
                  >
                    Live demo <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/Muregis/Educore-Ratiba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-slate-300 hover:text-white print:text-slate-700"
                  >
                    GitHub <Github className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <Link
                    href="/projects/educore-ratiba"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:underline print:hidden"
                  >
                    Case study <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Education
            </h3>
            <div className="mt-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-base font-bold text-white print:text-slate-950">
                  Diploma in Computer Science (Level 6)
                </h4>
                <span className="text-xs font-semibold text-slate-400 print:text-slate-600">
                  2023 – Present (expected 2026)
                </span>
              </div>
              <p className="text-sm font-semibold text-cyan-200 print:text-cyan-900">
                Kiambu National Polytechnic
              </p>
              <p className="mt-2 text-sm text-slate-300 print:text-slate-800">
                Coursework includes programming, data structures, databases, software engineering, networks,
                systems analysis, and operating systems — applied directly in shipped products.
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <Award className="h-4 w-4" aria-hidden="true" />
              Selected Recognition
            </h3>
            <ul className="mt-3 space-y-2 pl-5 list-disc text-sm text-slate-300 print:text-slate-800">
              <li>
                <strong className="text-white print:text-slate-950 font-semibold">
                  Top 5 Innovator, Kiambu Polytechnic Innovation Challenge (2024):
                </strong>{" "}
                Recognized for designing and demonstrating EduCore.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Open To
            </h3>
            <p className="mt-3 text-sm text-slate-300 print:text-slate-800">
              Junior full-stack, junior software engineer, backend, and product/implementation roles (Nairobi or
              remote-friendly). Available for technical interviews and project walkthroughs of EduCore, Core CRM,
              and EduCore Ratiba.
            </p>
          </section>
        </article>

        <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 p-8 text-center print:hidden">
          <h3 className="text-2xl font-bold text-white">Ready to schedule an interview?</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
            Open to junior software engineering roles and focused product work. Happy to walk through architecture,
            tests, and demos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Interview Inquiry — Victor Muregi")}`}
              className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-500/20 hover:opacity-90"
            >
              Email Victor
            </a>
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent("Hi Victor, I reviewed your CV and would like to discuss an opportunity.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-400/20"
            >
              WhatsApp
            </a>
            <Link
              href="/#projects"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-300/40"
            >
              Explore projects
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />

      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Curriculum Vitae", href: "/cv" }
        ])}
      />
      <JsonLd data={personSchema} />
    </div>
  );
}
