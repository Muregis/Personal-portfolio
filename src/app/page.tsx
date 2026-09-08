import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  CreditCard,
  Download,
  Github,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star
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
  "Full-Stack Developer",
  "Founder",
  "CS Student",
  "M-Pesa Integration Specialist"
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
    label: "Resume",
    value: "Download PDF",
    href: site.resumeUrl,
    external: false,
    icon: Download
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
                  className="h-2.5 w-2.5 rounded-full bg-emerald-300"
                  aria-hidden="true"
                />
                Open to freelance, product, and full-time work
              </p>

              <div className="flex flex-wrap gap-3 text-sm">
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
                  Full-stack developer and founder of{" "}
                  <span className="font-semibold text-white underline decoration-cyan-300/60 underline-offset-4">
                    MuregiScore Technologies
                  </span>{" "}
                  — building web software for Kenyan schools and businesses with
                  React, Node.js, PostgreSQL, and M-Pesa Daraja integrations. I&apos;m
                  also a Computer Science student at Kiambu National Polytechnic.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-opacity hover:opacity-90"
                >
                  View Projects
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-300/40"
                >
                  Hire Me
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
                    className="glass flex flex-col rounded-3xl px-5 py-5"
                  >
                    <dt className="order-2 text-sm text-slate-300">
                      {stat.label}
                    </dt>
                    <dd className="order-1 text-3xl font-black text-white">
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
            <div className="glass rounded-[2rem] p-8">
              <SectionBadge icon={Sparkles}>About Me</SectionBadge>
              <h2
                id="about-heading"
                className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              >
                From curiosity to code
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  I&apos;m a Computer Science student at{" "}
                  <span className="font-semibold text-white">
                    Kiambu National Polytechnic
                  </span>{" "}
                  who discovered programming as a way to solve real problems I saw
                  around me.
                </p>
                <p>
                  Growing up in Kenya, I watched schools, Saccos, and small
                  businesses struggle with outdated systems — or software they
                  couldn&apos;t afford. That became my mission: build modern,
                  dependable technology for African businesses at a price they can
                  sustain.
                </p>
                <p>
                  Since founding MuregiScore Technologies, I&apos;ve shipped
                  products used by schools and businesses across Kenya — from
                  automated report generation to M-Pesa payment flows.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-[2rem] p-8">
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
                    <div key={title} className="glass rounded-[1.5rem] p-5">
                      <Icon className="h-6 w-6 text-cyan-200" aria-hidden="true" />
                      <h3 className="mt-4 text-lg font-semibold text-white">
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
              <SectionBadge icon={BriefcaseBusiness}>Featured Work</SectionBadge>
            }
            title="Live Projects & Products"
            intro="Websites and management systems built for real clients — several are running today."
          />
          <ProjectGrid />
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
            title="Professional Journey"
            intro="Self-taught in 2022 — now building products for schools and businesses across Kenya."
          />
          <div className="space-y-6">
            {timeline.map((item) => (
              <article key={item.role} className="glass rounded-[2rem] p-6 md:p-8">
                <p className="text-sm font-semibold tracking-[0.18em] text-cyan-200 uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {item.role}
                </h3>
                <p className="text-slate-300">{item.company}</p>
                <p className="mt-4 max-w-4xl leading-7 text-slate-300">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
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
            title="Skills & Technologies"
            intro="Languages and tooling I reach for across frontend, backend, data, and payments."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="grid gap-6">
              {skillGroups.map((group) => (
                <div key={group.title} className="glass rounded-[2rem] p-6">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="glass h-fit rounded-[2rem] p-6 lg:sticky lg:top-6">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Where I work day to day
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {proficiency.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-6 text-slate-400">
                Frontend-heavy full stack: React and TypeScript apps talking to
                Node.js APIs over PostgreSQL, with M-Pesa Daraja payment flows.
                Java and Python come in for coursework and automation work.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------- Education ---------------------------- */}
        <section
          id="education"
          aria-labelledby="education-heading"
          className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24"
        >
          <div className="glass rounded-[2rem] p-8">
            <SectionBadge icon={GraduationCap}>Education</SectionBadge>
            <h2
              id="education-heading"
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
            >
              Academic Background
            </h2>
            <div className="mt-6 space-y-3 text-slate-300">
              <p className="text-lg font-semibold text-white">
                {education.institution}
              </p>
              <p>
                {education.program}, {education.period}
              </p>
              <p className="max-w-xl leading-7">
                Comprehensive computer science program covering software
                development, database management, networking, and system
                administration.
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
              View Academic Portfolio
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="glass rounded-[2rem] p-8">
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
              {site.brand}
            </h2>
            <p className="mt-3 text-slate-300">
              What I&apos;m building at MuregiScore — software for Kenyan schools
              and businesses.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h3 className="font-semibold text-white">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {product.text}
                  </p>
                </div>
              ))}
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
              title="What Clients Say"
              intro="Feedback from the people running the products I&apos;ve built."
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
            eyebrow={<SectionBadge icon={Sparkles}>FAQ</SectionBadge>}
            title="Common Questions"
            intro="Practical answers about stack, timelines, and support."
          />
          <FaqBlock />
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
                  Payments I build
                </p>
                <h2
                  id="payments-heading"
                  className="mt-5 text-3xl font-bold text-white sm:text-4xl"
                >
                  M-Pesa & payment integrations
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
                  Production M-Pesa flows built with the Safaricom Daraja API for
                  EduCore and partner businesses — STK Push, C2B, B2C, webhook
                  callbacks, and transaction verification.
                </p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {["STK Push", "C2B", "B2C", "Callbacks", "Verification", "Paystack"].map(
                    (item) => (
                      <li
                        key={item}
                        className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>                <p className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                  <MessageCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300"
                    aria-hidden="true"
                  />
                  Building a payment flow for your product? That&apos;s exactly what I
                  do — M-Pesa, Paystack, or card rails. Tell me about it on WhatsApp
                  and I&apos;ll walk you through the approach.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/35 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Need M-Pesa in your product?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tell me what you&apos;re building and I&apos;ll reply with how I&apos;d
                  handle the payment flow — STK Push, C2B/B2C, callbacks, and
                  verification.
                </p>
                <a
                  href={`${site.whatsapp}?text=${encodeURIComponent(
                    "Hi Victor, I'd like to discuss an M-Pesa integration for my product."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 via-green-400 to-lime-400 px-6 py-3 font-semibold text-slate-950 transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Contact ---------------------------- */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10"
        >
          <div className="glass rounded-[2rem] p-8 md:p-10">
            <h2
              id="contact-heading"
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Let&apos;s work together
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Available for freelance projects, collaborations, and full-time
              opportunities. Based in Nairobi, working with clients across Africa
              and worldwide.
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
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {site.location} · {site.tagline}
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
