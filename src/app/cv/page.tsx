import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  ExternalLink,
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
    "Official Curriculum Vitae of Victor Muregi — Full-Stack Software Engineer & Founder of MuregiScore Technologies. Review engineering experience, flagship systems (EduCore, Core CRM, EduCore Ratiba), technical skills, and education.",
  alternates: {
    canonical: "/cv"
  },
  openGraph: {
    type: "profile",
    url: absolute("/cv"),
    title: "Victor Muregi — Software Engineer CV & Resume",
    description:
      "Full-stack software engineer & founder in Nairobi, Kenya. Experienced in React, TypeScript, Node/Express, PHP, PostgreSQL, RBAC, queues, and Safaricom M-Pesa Daraja payment workflows.",
    images: [
      {
        url: absolute("/og.png"),
        width: 1200,
        height: 630,
        alt: "Victor Muregi — Software Engineer Resume"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Muregi — Software Engineer CV & Resume",
    description:
      "Full-stack software engineer & founder in Nairobi, Kenya. Experienced in React, TypeScript, Node/Express, PHP, PostgreSQL, RBAC, queues, and M-Pesa Daraja.",
    images: [absolute("/og.png")]
  }
};

const atsPlainText = `VICTOR MUREGI
Full-Stack Software Engineer & Founder · Systems, APIs & Payments
Nairobi, Kenya | +254 797 846 126 | i.am.muregi@gmail.com
Portfolio: personal-portfolio-muregis-projects.vercel.app
GitHub: github.com/Muregis | LinkedIn: linkedin.com/in/victor-muregi

SUMMARY
Production-focused Full-Stack Software Engineer and founder of MuregiScore Technologies with 3+ years of experience architecting and shipping mission-critical institutional software. Proven track record building end-to-end multi-tenant systems in React, TypeScript, Node.js/Express, PHP, and PostgreSQL/MySQL. Experienced solving complex operational challenges: idempotent Safaricom M-Pesa Daraja payment workflows, granular Role-Based Access Control (RBAC), background worker queues, and Constraint Satisfaction (CSP) timetabling algorithms.

TECHNICAL COMPETENCIES
- Languages: TypeScript, JavaScript, PHP, SQL, Python, Java, C++
- Frontend Architecture: React 19, Next.js, Tailwind CSS, Responsive Design, State Management, Web Performance
- Backend & APIs: Node.js, Express.js, PHP, RESTful APIs, Webhook Ingestion, API Versioning, Error Handling
- Databases & Integrity: PostgreSQL, MySQL, 3NF Normalization, Indexing & Query Optimization, ACID Transactions
- Security & RBAC: Granular Role-Based Access Control (RBAC), JWT Authentication, Session Cookies, Bcrypt
- Queues & Async: Background Job Queues (Redis/BullMQ patterns), Asynchronous Workers, Batch Report Generators
- Payment Integrations: Safaricom M-Pesa Daraja API (STK Push, C2B, B2C, Idempotent Callbacks), Paystack
- DevOps & Tooling: Git, GitHub Actions CI/CD, Linux (Ubuntu), Nginx, Docker basics, Vercel, Railway

ENGINEERING EXPERIENCE
FOUNDER & LEAD SOFTWARE ENGINEER | MuregiScore Technologies | 2024 – Present
- Architected, developed, and deployed 3 flagship production platforms: EduCore (school management & CBC report cards), Core CRM (sales pipeline & operations), and EduCore Ratiba (combinatorial timetable scheduling engine).
- Engineered Safaricom M-Pesa Daraja STK Push and C2B payment integrations with idempotent webhook listeners and database transaction locks, guaranteeing zero double-crediting under spotty mobile cellular connections.
- Established automated CI/CD deployment pipelines on GitHub Actions enforcing TypeScript compilation, ESLint, and automated builds to Vercel and Linux servers.

FREELANCE FULL-STACK DEVELOPER | Client Solutions | 2023 – Present
- Delivered 15+ web applications, portals, and database systems from client requirements gathering to production hosting.
- Architected Sawa Solar Solution (commercial clean-energy platform) and Gracious Love Academy (institutional admissions portal).
- Built Livestock Management Platform, modeling recursive breeding lineages and daily milk yield tracking.
- Optimized frontend assets to achieve sub-second First Contentful Paint (FCP) on low-spec Android devices.

FLAGSHIP SYSTEMS
- EduCore: School management & CBC report cards with M-Pesa Daraja (Live: educore-school-management-system-pi.vercel.app | Repo: github.com/Muregis/educore-school-management-system)
- Core CRM: Sales pipeline & RBAC operations engine (Repo: github.com/Muregis/Core-Crm-model)
- EduCore Ratiba: Constraint-satisfaction timetable engine (<3s compilation for 40 streams, 0 clashes) (Live: educoreratiba.vercel.app | Repo: github.com/Muregis/Educore-Ratiba)

EDUCATION
Diploma in Computer Science (Level 6) | Kiambu National Polytechnic | 2023 – Present (Expected 2026)
Core coursework: Software Engineering, Data Structures & Algorithms, Relational Databases (RDBMS), Operating Systems, Computer Networks.

AWARDS
- Top 5 Innovator, Kiambu Polytechnic Innovation Challenge (2024) - EduCore System
- Safaricom Daraja API Implementer - Recognized for resilient transaction ledgers
`;

export default function CvPage() {
  return (
    <div className="section-grid min-h-screen">
      <SiteHeader items={nav.primary} cta={{ label: "Hire Me", href: "/#contact" }} />

      <main id="main-content" className="mx-auto max-w-5xl px-6 py-8 lg:px-10 lg:py-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 print:hidden">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Curriculum Vitae" }
            ]}
          />
        </div>

        {/* Back Link */}
        <div className="mb-6 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Portfolio Homepage
          </Link>
        </div>

        {/* Action Header Card */}
        <div className="mb-8 rounded-3xl border border-white/10 bg-slate-950/60 p-6 md:p-8 backdrop-blur-md print:hidden">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Verified Engineering Profile
              </span>
              <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Curriculum Vitae &amp; Resume
              </h1>
              <p className="mt-1 text-base text-slate-300">
                Full-Stack Software Engineer · Production Systems, RBAC &amp; M-Pesa Rails
              </p>
            </div>

            <ResumeActions pdfUrl={site.resumeUrl} plainText={atsPlainText} />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Printable & Interactive CV Document Sheet */}
        {/* ========================================================================= */}
        <article className="glass rounded-[2rem] border border-white/15 p-8 md:p-12 shadow-2xl print:m-0 print:border-none print:bg-white print:p-0 print:text-slate-900 print:shadow-none">
          {/* Header Block */}
          <header className="border-b border-cyan-400/30 pb-6 print:border-cyan-700">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl print:text-3xl print:text-slate-950">
                  VICTOR MUREGI
                </h2>
                <p className="mt-1 text-base font-semibold text-cyan-300 print:text-cyan-800">
                  Full-Stack Software Engineer &amp; Founder · Systems, APIs &amp; Payments
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 print:hidden">
                Open to Opportunities
              </span>
            </div>

            {/* Contact Details Strip */}
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
            </div>
          </header>

          {/* Section: Professional Summary */}
          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <Code2 className="h-4 w-4" aria-hidden="true" />
              Professional Summary
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 print:text-slate-800">
              Production-focused <strong className="text-white print:text-slate-950 font-semibold">Full-Stack Software Engineer</strong> and founder of <strong className="text-white print:text-slate-950 font-semibold">MuregiScore Technologies</strong> with 3+ years of experience architecting and shipping mission-critical institutional software. Proven track record building end-to-end multi-tenant systems in <strong className="text-cyan-200 print:text-slate-950 font-semibold">React, TypeScript, Node.js/Express, PHP, and PostgreSQL/MySQL</strong>. Experienced solving complex operational challenges: idempotent <strong className="text-white print:text-slate-950 font-semibold">Safaricom M-Pesa Daraja payment workflows</strong>, granular <strong className="text-white print:text-slate-950 font-semibold">Role-Based Access Control (RBAC)</strong>, <strong className="text-white print:text-slate-950 font-semibold">background worker queues</strong>, and <strong className="text-white print:text-slate-950 font-semibold">Constraint Satisfaction (CSP) timetabling algorithms</strong>. Adept at engineering resilient applications optimized for entry-level mobile devices and spotty network bandwidth across Africa.
            </p>
          </section>

          {/* Section: Technical Competencies */}
          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
              Technical Competencies
            </h3>
            <div className="mt-4 grid gap-3 text-sm">
              {[
                { label: "Languages", list: "TypeScript, JavaScript, PHP, SQL, Python, Java, C++" },
                { label: "Frontend Architecture", list: "React 19, Next.js, Tailwind CSS, Responsive Design, State Management, HTML5, CSS3, Web Performance (Core Web Vitals)" },
                { label: "Backend & APIs", list: "Node.js, Express.js, PHP, RESTful APIs, Webhook Ingestion, API Versioning, Error Handling, Middleware" },
                { label: "Databases & Integrity", list: "PostgreSQL, MySQL, 3NF Normalization, Indexing & Query Optimization, ACID Transactions, Audit Ledgers" },
                { label: "Security & RBAC", list: "Granular Role-Based Access Control (RBAC), JWT Authentication, Session Cookies, Bcrypt, Data Isolation" },
                { label: "Queues & Async", list: "Background Job Queues (Redis/BullMQ patterns), Asynchronous Workers, Batch Report Generators" },
                { label: "Payment Integrations", list: "Safaricom M-Pesa Daraja API (STK Push, C2B, B2C, Idempotent Callback Verification), Paystack" },
                { label: "DevOps & Tooling", list: "Git, GitHub, GitHub Actions CI/CD, Linux (Ubuntu), Nginx, Docker (basics), Vercel, Railway" }
              ].map(({ label, list }) => (
                <div key={label} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-4">
                  <span className="font-bold text-white print:text-slate-950">{label}:</span>
                  <span className="text-slate-300 print:text-slate-800">{list}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Professional Experience */}
          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
              Engineering Experience
            </h3>

            {/* Job 1 */}
            <div className="mt-5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h4 className="text-base font-bold text-white print:text-slate-950">
                    Founder &amp; Lead Software Engineer
                  </h4>
                  <p className="text-sm font-semibold text-cyan-300 print:text-cyan-800">
                    MuregiScore Technologies · Nairobi, Kenya
                  </p>
                </div>
                <span className="text-xs font-semibold uppercase text-slate-400 print:text-slate-600">
                  2024 – Present
                </span>
              </div>
              <ul className="mt-2 space-y-1.5 pl-5 list-disc text-sm text-slate-300 print:text-slate-800">
                <li>
                  Founded engineering firm delivering institutional enterprise web systems and fintech integrations for Kenyan schools and commercial SMEs.
                </li>
                <li>
                  Architected, developed, and deployed 3 flagship production platforms: <strong className="text-white print:text-slate-950 font-semibold">EduCore</strong> (school operations &amp; CBC report cards), <strong className="text-white print:text-slate-950 font-semibold">Core CRM</strong> (sales pipeline &amp; customer intelligence), and <strong className="text-white print:text-slate-950 font-semibold">EduCore Ratiba</strong> (combinatorial timetable scheduling engine).
                </li>
                <li>
                  Engineered Safaricom <strong className="text-white print:text-slate-950 font-semibold">M-Pesa Daraja STK Push and C2B payment integrations</strong> with idempotent webhook listeners and database transaction locks, guaranteeing <strong className="text-white print:text-slate-950 font-semibold">zero double-crediting</strong> under spotty mobile cellular connections.
                </li>
                <li>
                  Established automated CI/CD deployment pipelines on <strong className="text-white print:text-slate-950 font-semibold">GitHub Actions</strong> enforcing TypeScript compilation, ESLint, and automated builds to Vercel and Linux servers.
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="mt-6 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h4 className="text-base font-bold text-white print:text-slate-950">
                    Freelance Full-Stack Developer
                  </h4>
                  <p className="text-sm font-semibold text-cyan-300 print:text-cyan-800">
                    Client Solutions &amp; Engineering Contracts · Nairobi / Remote
                  </p>
                </div>
                <span className="text-xs font-semibold uppercase text-slate-400 print:text-slate-600">
                  2023 – Present
                </span>
              </div>
              <ul className="mt-2 space-y-1.5 pl-5 list-disc text-sm text-slate-300 print:text-slate-800">
                <li>
                  Delivered <strong className="text-white print:text-slate-950 font-semibold">15+ web applications, portals, and database systems</strong> from client requirements gathering to production hosting.
                </li>
                <li>
                  Architected <strong className="text-white print:text-slate-950 font-semibold">Sawa Solar Solution</strong> (commercial clean-energy platform with instant WhatsApp quotation bridge) and <strong className="text-white print:text-slate-950 font-semibold">Gracious Love Academy</strong> (institutional admissions portal).
                </li>
                <li>
                  Built <strong className="text-white print:text-slate-950 font-semibold">Livestock Management Platform</strong>, modeling recursive breeding lineages and daily milk yield tracking.
                </li>
                <li>
                  Optimized frontend assets and bundle sizes to achieve <strong className="text-white print:text-slate-950 font-semibold">sub-second First Contentful Paint (FCP)</strong> on low-spec Android devices.
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Flagship Systems & Deep Dives */}
          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Flagship Systems &amp; Case Studies
            </h3>

            <div className="mt-5 space-y-6">
              {/* Project 1 */}
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 print:border-slate-300 print:bg-slate-50">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white print:text-slate-950">
                    EduCore — Comprehensive School Operations System
                  </h4>
                  <span className="text-xs font-semibold text-cyan-300 print:text-cyan-800">
                    React · TypeScript · Node/Express · PostgreSQL · M-Pesa API
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-300 print:text-slate-800">
                  Multi-tenant institutional administration platform powering student records, CBC grading, automated term report cards, fee tracking, and M-Pesa payment reconciliation for Kenyan primary and secondary schools.
                </p>
                <ul className="mt-2 space-y-1 pl-5 list-disc text-xs sm:text-sm text-slate-300 print:text-slate-800">
                  <li><strong className="text-white print:text-slate-950 font-semibold">Idempotent Payment Engine:</strong> Handled Safaricom M-Pesa STK Push callbacks with database transactions, eliminating duplicate receipts and keeping student ledgers <strong className="text-white print:text-slate-950 font-semibold">100% reconciled in real time</strong>.</li>
                  <li><strong className="text-white print:text-slate-950 font-semibold">Batch Report-Card Generation:</strong> Optimized automated PDF report card compilation for hundreds of student records from minutes to <strong className="text-white print:text-slate-950 font-semibold">2.3 seconds</strong> without blocking the Node.js event loop.</li>
                  <li><strong className="text-white print:text-slate-950 font-semibold">Role-Based Access Control (RBAC):</strong> Enforced 5-tier granular authorization separating Administrator, Principal, Teacher, Bursar, and Guardian access boundaries.</li>
                </ul>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href="https://educore-school-management-system-pi.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-300 hover:underline print:text-cyan-800"
                  >
                    Live Demo <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/Muregis/educore-school-management-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-slate-300 hover:text-white print:text-slate-700"
                  >
                    GitHub Code <Github className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <Link
                    href="/projects/educore"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:underline print:hidden"
                  >
                    Detailed Architecture Case Study <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 print:border-slate-300 print:bg-slate-50">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white print:text-slate-950">
                    Core CRM — Sales Pipeline &amp; Customer Intelligence Engine
                  </h4>
                  <span className="text-xs font-semibold text-cyan-300 print:text-cyan-800">
                    React · TypeScript · Node/Express · PostgreSQL · REST APIs
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-300 print:text-slate-800">
                  Customer operations and deal pipeline platform built for Kenyan SMEs to eliminate lost sales inquiries across scattered WhatsApp threads and notebooks.
                </p>
                <ul className="mt-2 space-y-1 pl-5 list-disc text-xs sm:text-sm text-slate-300 print:text-slate-800">
                  <li><strong className="text-white print:text-slate-950 font-semibold">Interactive Kanban Pipeline:</strong> Developed drag-and-drop deal stage management with automated follow-up reminders, increasing lead conversion visibility to <strong className="text-white print:text-slate-950 font-semibold">100%</strong>.</li>
                  <li><strong className="text-white print:text-slate-950 font-semibold">High-Performance Relational Schema:</strong> Engineered normalized PostgreSQL models for organizations, contacts, deals, and communication logs with <strong className="text-white print:text-slate-950 font-semibold">&lt;50ms query response latency</strong> on complex joins.</li>
                  <li><strong className="text-white print:text-slate-950 font-semibold">Multi-User Data Isolation:</strong> Designed 4-tier hierarchical permissions ensuring sales representatives only access assigned prospects while executives view organization-wide metrics.</li>
                </ul>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href="https://github.com/Muregis/Core-Crm-model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-slate-300 hover:text-white print:text-slate-700"
                  >
                    GitHub Code <Github className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <Link
                    href="/projects/core-crm"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:underline print:hidden"
                  >
                    Detailed Architecture Case Study <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Project 3 */}
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 print:border-slate-300 print:bg-slate-50">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-white print:text-slate-950">
                    EduCore Ratiba — Constraint-Satisfaction Timetable Engine
                  </h4>
                  <span className="text-xs font-semibold text-cyan-300 print:text-cyan-800">
                    TypeScript · React · Node.js · CSP Algorithms · Export Engines
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-300 print:text-slate-800">
                  Intelligent academic schedule optimization engine that solves the multi-constraint timetabling problem for schools and polytechnics.
                </p>
                <ul className="mt-2 space-y-1 pl-5 list-disc text-xs sm:text-sm text-slate-300 print:text-slate-800">
                  <li><strong className="text-white print:text-slate-950 font-semibold">Combinatorial CSP Engine:</strong> Formulated timetabling as a Constraint Satisfaction Problem utilizing heuristic backtracking and constraint propagation to eliminate teacher and room collisions.</li>
                  <li><strong className="text-white print:text-slate-950 font-semibold">Rapid Computation:</strong> Reduced timetable compilation cycle from <strong className="text-white print:text-slate-950 font-semibold">4–5 days of tedious manual drafting to under 3 seconds</strong> for 40 multi-subject streams with <strong className="text-white print:text-slate-950 font-semibold">0 clashes</strong>.</li>
                  <li><strong className="text-white print:text-slate-950 font-semibold">Multi-Format Sync:</strong> Generated printable master school timetables, class schedules, and teacher workload cards with direct export and EduCore synchronization.</li>
                </ul>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href="https://educoreratiba.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-300 hover:underline print:text-cyan-800"
                  >
                    Live Demo <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/Muregis/Educore-Ratiba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-slate-300 hover:text-white print:text-slate-700"
                  >
                    GitHub Code <Github className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <Link
                    href="/projects/educore-ratiba"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:underline print:hidden"
                  >
                    Detailed Architecture Case Study <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Education & Credentials */}
          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Education &amp; Academic Credentials
            </h3>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h4 className="text-base font-bold text-white print:text-slate-950">
                  Diploma in Computer Science (Level 6)
                </h4>
                <p className="text-sm font-semibold text-cyan-300 print:text-cyan-800">
                  Kiambu National Polytechnic · Nairobi, Kenya
                </p>
              </div>
              <span className="text-xs font-semibold uppercase text-slate-400 print:text-slate-600">
                2023 – Present (Expected 2026)
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 print:text-slate-800">
              <strong className="text-white print:text-slate-950 font-semibold">Core Coursework:</strong> Software Engineering &amp; SDLC, Data Structures &amp; Algorithms, Relational Database Management Systems (RDBMS), Operating Systems (Linux &amp; Windows), Computer Networks &amp; Distributed Protocols, System Analysis &amp; Design, Web Application Development.
            </p>
          </section>

          {/* Section: Recognition */}
          <section className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-200 border-b border-white/10 pb-2 print:border-slate-300 print:text-cyan-900">
              <Award className="h-4 w-4" aria-hidden="true" />
              Awards &amp; Technical Recognition
            </h3>
            <ul className="mt-3 space-y-1.5 pl-5 list-disc text-sm text-slate-300 print:text-slate-800">
              <li>
                <strong className="text-white print:text-slate-950 font-semibold">Top 5 Innovator, Kiambu Polytechnic Innovation Challenge (2024):</strong> Awarded for designing and demonstrating EduCore School Management System.
              </li>
              <li>
                <strong className="text-white print:text-slate-950 font-semibold">Safaricom Daraja API Implementer:</strong> Recognized for production STK Push and C2B transaction ledger resilience under mobile network retries.
              </li>
            </ul>
          </section>
        </article>

        {/* Bottom CTA Strip */}
        <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 p-8 text-center print:hidden">
          <h3 className="text-2xl font-bold text-white">Ready to Schedule an Interview?</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
            I am available for software engineering roles, institutional system contracts, and technical consulting.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Interview Inquiry — Victor Muregi")}`}
              className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-500/20 hover:opacity-90"
            >
              Email Victor Directly
            </a>
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent("Hi Victor, I reviewed your CV and would like to discuss an opportunity.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-400/20"
            >
              Connect on WhatsApp
            </a>
            <Link
              href="/#projects"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-300/40"
            >
              Explore Live Projects
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />

      {/* Structured data */}
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
