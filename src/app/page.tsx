import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Cpu,
  CreditCard,
  Database,
  Download,
  Github,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow
} from "lucide-react";
import { SiteHeader } from "@/components/chrome/site-header";
import { SiteFooter } from "@/components/chrome/site-footer";
import { JsonLd } from "@/components/json-ld";
import { RoleRotator } from "@/components/interactive/role-rotator";
import { ProjectGrid } from "@/components/interactive/project-grid";
import { TestimonialBlock } from "@/components/interactive/testimonial-block";
import { FaqBlock } from "@/components/interactive/faq-block";
import {
  site,
  nav,
  stats,
  journey,
  values,
  timeline,
  skillGroups,
  proficiency,
  products,
  education,
  testimonials
} from "@/lib/site";
import {
  personSchema,
  organizationSchema,
  websiteSchema,
  faqSchema
} from "@/lib/seo";

const valueIcons: Record<string, typeof ShieldCheck> = {
  shield: ShieldCheck,
  rocket: Rocket,
  grad: GraduationCap
};

const chips = [
  "Full-Stack Software Engineer",
  "React · TypeScript · Node/Express · PHP",
  "PostgreSQL · MySQL · RBAC · Queues",
  "M-Pesa Daraja Payment Specialist",
  "Founder, MuregiScore Technologies"
];

function SectionBadge({
  icon: Icon,
  children
}: {
  icon: typeof Sparkles;
  children: React.ReactNode;
}) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro
}: {
  eyebrow: React.ReactNode;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-3 text-lg text-slate-300">{intro}</p> : null}
    </div>
  );
}

const contactCards = [
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsapp,
    external: true,
    icon: MessageCircle
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: true,
    icon: Mail
  },
  {
    label: "GitHub",
    value: "@Muregis",
    href: site.github,
    external: true,
    icon: Github
  },
  {
    label: "LinkedIn",
    value: "Victor Muregi",
    href: site.linkedin,
    external: true,
    icon: Linkedin
  },
  {
    label: "Curriculum Vitae",
    value: "View & Download CV",
    href: "/cv",
    external: false,
    icon: Download
  }
];

const engineeringPillars = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    tech: "React, TypeScript, Next.js, Tailwind CSS",
    description:
      "Developing component architectures with clean state management, accessible markup, and optimized rendering that loads instantly on Kenyan 3G/4G connections and ordinary mobile devices."
  },
  {
    title: "Backend & API Architecture",
    icon: Cpu,
    tech: "Node.js, Express, PHP, RESTful APIs",
    description:
      "Building modular REST APIs with route versioning, schema validation, standardized error handling, and webhook endpoints designed for high availability."
  },
  {
    title: "Relational Database Design",
    icon: Database,
    tech: "PostgreSQL, MySQL, Normalized Schemas",
    description:
      "Engineering 3NF relational schemas, indexing strategies, foreign-key constraints, and ACID database transactions that ensure zero financial discrepancies in fee ledgers."
  },
  {
    title: "Security & Role-Based Access (RBAC)",
    icon: Lock,
    tech: "JWT, Session Cookies, Bcrypt, Granular RBAC",
    description:
      "Implementing strict authentication and hierarchical authorization middleware separating Administrator, Principal, Teacher, Bursar, and Student access boundaries."
  },
  {
    title: "Asynchronous Queues & Background Jobs",
    icon: Workflow,
    tech: "Redis, BullMQ Patterns, Batch Processing",
    description:
      "Decoupling time-intensive workloads — such as end-of-term batch report-card PDF compilation and mass parental SMS notifications — without blocking the HTTP event loop."
  },
  {
    title: "M-Pesa Daraja Payment Rails",
    icon: CreditCard,
    tech: "STK Push, C2B, B2C, Idempotent Webhooks",
    description:
      "Architecting Safaricom Daraja integrations with idempotent transaction verification ledgers to prevent double-crediting during network timeouts and retries."
  },
  {
    title: "Testing, CI/CD & Deployment",
    icon: ShieldCheck,
    tech: "Automated Checks, GitHub Actions, Linux, Vercel",
    description:
      "Automating code quality through GitHub Actions CI/CD pipelines enforcing TypeScript typechecking, linting, and automated builds before production deployment."
  },
  {
    title: "Product Engineering for African Realities",
    icon: Network,
    tech: "Low-Bandwidth Resilience, Offline Tolerance",
    description:
      "Designing systems that accommodate intermittent internet connectivity, variable mobile network bandwidth, and practical operational constraints of Kenyan institutions."
  }
];

export default function HomePage() {
  return (
    <div className="section-grid min-h-screen">
      <SiteHeader items={nav.primary} cta={{ label: "Hire Me", href: "/#contact" }} />

      <main id="main-content">
        {/* ------------------------------ Hero ------------------------------ */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(87,199,255,0.16),transparent_35%),linear-gradient(180deg,rgba(3,7,18,0.4),rgba(3,7,18,0.95))]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url(${site.logo.png})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "420px auto"
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-emerald-300 animate-pulse"
                  aria-hidden="true"
                />
                Available for software engineering roles, institutional contracts, and consulting
              </p>

              <div className="flex flex-wrap gap-2.5 text-xs sm:text-sm">
                {chips.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="max-w-4xl space-y-5">
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl">
                  Hi, I&apos;m Victor Muregi
                </h1>
                <RoleRotator />
                <p className="max-w-3xl text-lg leading-8 text-slate-300">
                  Full-stack software engineer and founder of{" "}
                  <span className="font-semibold text-white underline decoration-cyan-300/60 underline-offset-4">
                    MuregiScore Technologies
                  </span>{" "}
                  in Nairobi, Kenya. I build production web applications, database systems, and institutional platforms with{" "}
                  <strong className="text-white font-semibold">React</strong>,{" "}
                  <strong className="text-white font-semibold">TypeScript</strong>,{" "}
                  <strong className="text-white font-semibold">Node/Express</strong>,{" "}
                  <strong className="text-white font-semibold">PHP</strong>,{" "}
                  <strong className="text-white font-semibold">PostgreSQL/MySQL</strong>, and{" "}
                  <strong className="text-white font-semibold">M-Pesa Daraja</strong> payment workflows. Computer Science student at Kiambu National Polytechnic.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-opacity hover:opacity-90"
                >
                  Flagship Projects
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-100 transition-colors hover:bg-cyan-400/20"
                >
                  Curriculum Vitae (CV)
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#engineering"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-300/40"
                >
                  Engineering Systems
                  <Layers className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 font-semibold text-emerald-100 transition-colors hover:bg-emerald-400/20"
                >
                  Hire Me / Contact
                </a>
                <Link
                  href="/academic"
                  className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-6 py-3 font-semibold text-fuchsia-100 transition-colors hover:bg-fuchsia-300/20"
                >
                  Academic Portfolio
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-300/40"
                >
                  GitHub
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <dl className="grid gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass flex flex-col rounded-3xl px-5 py-5 border border-white/10"
                  >
                    <dt className="order-2 text-sm text-slate-300">
                      {stat.label}
                    </dt>
                    <dd className="order-1 text-3xl font-black text-cyan-300">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ------------------------------ About ----------------------------- */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"
        >
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="glass rounded-[2rem] p-8 md:p-10 border border-white/10">
              <SectionBadge icon={Sparkles}>Engineering Discipline</SectionBadge>
              <h2
                id="about-heading"
                className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              >
                From curiosity to production systems
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  I am a Computer Science student at{" "}
                  <span className="font-semibold text-white">
                    Kiambu National Polytechnic
                  </span>{" "}
                  and an active software engineer who builds systems to solve concrete operational bottlenecks in Kenya.
                </p>
                <p>
                  Across Kenyan schools, commercial businesses, and agricultural enterprises, administrators frequently depend on error-prone paper ledgers, fragmented WhatsApp communication, or bloated overseas software that fails under local network realities.
                </p>
                <p>
                  Through <strong className="text-white font-semibold">MuregiScore Technologies</strong>, I design, architect, and ship production-grade web software — such as <strong className="text-cyan-200">EduCore</strong> (school operations &amp; CBC report cards), <strong className="text-cyan-200">Core CRM</strong> (multi-tier pipeline management), and <strong className="text-cyan-200">EduCore Ratiba</strong> (combinatorial timetable scheduling engine) — paired with resilient Safaricom M-Pesa Daraja payment workflows.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-[2rem] p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white">Journey</h3>
                <ol className="mt-6 space-y-5">
                  {journey.map(({ year, event }) => (
                    <li key={year} className="border-l border-cyan-300/30 pl-4">
                      <p className="text-sm font-semibold tracking-[0.2em] text-cyan-200 uppercase">
                        {year}
                      </p>
                      <p className="mt-1 text-slate-300">{event}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {values.map(({ icon, title, text }) => {
                  const Icon = valueIcons[icon] ?? Sparkles;
                  return (
                    <div key={title} className="glass rounded-[1.5rem] p-5 border border-white/10">
                      <Icon className="h-6 w-6 text-cyan-200" aria-hidden="true" />
                      <h3 className="mt-3 text-lg font-semibold text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------- Projects ---------------------------- */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"
        >
          <SectionHeading
            eyebrow={
              <SectionBadge icon={BriefcaseBusiness}>Flagship Work &amp; Case Studies</SectionBadge>
            }
            title="Production Software & Systems"
            intro="Detailed case studies communicating real problems, system architecture, database design, engineering challenges, and verified live demos."
          />
          <ProjectGrid />
        </section>

        {/* -------------------- Engineering Architecture -------------------- */}
        <section
          id="engineering"
          aria-labelledby="engineering-heading"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"
        >
          <SectionHeading
            eyebrow={<SectionBadge icon={Layers}>Engineering Competence</SectionBadge>}
            title="Systems Architecture & Engineering Credibility"
            intro="A breakdown of how I design, secure, test, and operate production software systems."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {engineeringPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="glass flex flex-col justify-between rounded-[2rem] p-6 border border-white/10 hover:border-cyan-300/40 transition-colors"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold text-cyan-200">
                      {pillar.tech}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ----------------------------- Skills ----------------------------- */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"
        >
          <SectionHeading
            eyebrow={<SectionBadge icon={Code2}>Technical Expertise</SectionBadge>}
            title="Skills, Tools & Technologies"
            intro="Languages, databases, frameworks, security layers, and deployment tooling I use daily."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="grid gap-6">
              {skillGroups.map((group) => (
                <div key={group.title} className="glass rounded-[2rem] p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200 border border-white/5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="glass h-fit rounded-[2rem] p-6 lg:sticky lg:top-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Day-to-Day Engineering Focus
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {proficiency.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm leading-relaxed text-slate-300">
                <p className="font-semibold text-white mb-2">Engineering Philosophy</p>
                <p>
                  I prioritize strong fundamentals over superficial frameworks: relational normalization, transaction integrity, strict role-based access control, idempotent webhooks, and sub-second rendering on entry-level Android devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------- Experience --------------------------- */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"
        >
          <SectionHeading
            eyebrow={
              <SectionBadge icon={LayoutDashboard}>Work Experience</SectionBadge>
            }
            title="Professional Experience"
            intro="Leading product development at MuregiScore Technologies and delivering client engineering contracts."
          />
          <div className="space-y-6">
            {timeline.map((item) => (
              <article key={item.role} className="glass rounded-[2rem] p-6 md:p-8 border border-white/10">
                <p className="text-sm font-semibold tracking-[0.18em] text-cyan-200 uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {item.role}
                </h3>
                <p className="text-slate-300 font-medium">{item.company}</p>
                <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* --------------------------- Education ---------------------------- */}
        <section
          id="education"
          aria-labelledby="education-heading"
          className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24"
        >
          <div className="glass rounded-[2rem] p-8 md:p-10 border border-white/10">
            <SectionBadge icon={GraduationCap}>Academic Rigor</SectionBadge>
            <h2
              id="education-heading"
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
            >
              Computer Science Education
            </h2>
            <div className="mt-6 space-y-3 text-slate-300">
              <p className="text-lg font-semibold text-white">
                {education.institution}
              </p>
              <p className="text-cyan-200 font-medium">
                {education.program}, {education.period}
              </p>
              <p className="max-w-xl leading-relaxed">
                Formal curriculum in software engineering, algorithms, database management systems, networking protocols, operating systems, and computer systems analysis.
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {education.coursework.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/academic"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-6 py-3 font-semibold text-fuchsia-100 transition-colors hover:bg-fuchsia-300/20"
            >
              Explore Academic Portfolio &amp; Labs
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="glass rounded-[2rem] p-8 md:p-10 border border-white/10">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={site.logo.svg}
                alt="MuregiScore Technologies logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-xl border border-white/10 bg-white/5 object-contain p-1"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-cyan-200 uppercase">
                  {site.brand}
                </p>
                <p className="text-sm text-slate-300">{site.tagline}</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Production Product Portfolio
            </h2>
            <p className="mt-3 text-slate-300">
              Flagship systems engineered and operated under MuregiScore Technologies.
            </p>
            <div className="mt-6 grid gap-4">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h3 className="font-semibold text-white text-base">{product.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    {product.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------- Payments --------------------------- */}
        <section
          aria-labelledby="payments-heading"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"
        >
          <div className="rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_32%),linear-gradient(135deg,rgba(3,7,18,0.92),rgba(6,20,31,0.9))] p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                  <CreditCard className="h-4 w-4" aria-hidden="true" />
                  M-Pesa Daraja Payment Engineering
                </p>
                <h2
                  id="payments-heading"
                  className="mt-5 text-3xl font-bold text-white sm:text-4xl"
                >
                  Production M-Pesa &amp; Payment Rails
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-200">
                  Production Safaricom Daraja integrations engineered with idempotent webhook verification, database transaction locking, and zero double-crediting guarantees across STK Push, C2B, and B2C disbursals.
                </p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Daraja STK Push",
                    "C2B Paybill Ingestion",
                    "B2C Disbursals",
                    "Idempotent Webhooks",
                    "Transaction Verification",
                    "Audit Ledgers"
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                  <MessageCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300"
                    aria-hidden="true"
                  />
                  Integrating payments into a Kenyan business or institution? I engineer robust webhook listeners, STK push dialogs, and financial reconciliation tables.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/35 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Need Resilient Payment Integration?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Reach out on WhatsApp to review your payment requirements — STK Push, C2B callbacks, status queries, and ledger reconciliation.
                </p>
                <a
                  href={`${site.whatsapp}?text=${encodeURIComponent(
                    "Hi Victor, I'd like to discuss an M-Pesa integration for my product."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 via-green-400 to-lime-400 px-6 py-3 font-semibold text-slate-950 transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------- Testimonials -------------------------- */}
        {testimonials.length > 0 ? (
          <section
            aria-labelledby="testimonials-heading"
            className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"
          >
            <SectionHeading
              eyebrow={<SectionBadge icon={Star}>Client Feedback</SectionBadge>}
              title="Verified Feedback"
              intro="Feedback from administrators and businesses running my systems."
            />
            <TestimonialBlock />
          </section>
        ) : null}

        {/* ------------------------------ FAQ ------------------------------- */}
        <section
          aria-labelledby="faq-heading"
          className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-24"
        >
          <SectionHeading
            eyebrow={<SectionBadge icon={Sparkles}>Engineering FAQ</SectionBadge>}
            title="Frequently Asked Questions"
            intro="Straightforward technical details on architecture, RBAC, payment resilience, and delivery."
          />
          <FaqBlock />
        </section>

        {/* ----------------------------- Contact ---------------------------- */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10"
        >
          <div className="glass rounded-[2rem] p-8 md:p-10 border border-white/10">
            <h2
              id="contact-heading"
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Let&apos;s Build Dependable Software Together
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Available for full-stack engineering roles, systems contracts, and architectural consulting. Based in Nairobi, Kenya — available remotely worldwide.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {contactCards.map(({ label, value, href, external, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-colors hover:border-cyan-300/40"
                >
                  <Icon className="h-6 w-6 text-cyan-200" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{value}</p>
                </a>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              {site.location} · {site.brand}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Structured data */}
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
    </div>
  );
}
