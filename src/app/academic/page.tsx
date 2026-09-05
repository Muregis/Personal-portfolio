import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Brain,
  Code2,
  Compass,
  Database,
  Facebook,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Palette,
  Wrench,
  Network
} from "lucide-react";
import { SiteHeader } from "@/components/chrome/site-header";
import { SiteFooter } from "@/components/chrome/site-footer";
import { Breadcrumb } from "@/components/chrome/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { site, academic, absolute } from "@/lib/site";
import { breadcrumbSchema, personSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Computer Science Portfolio & Academic Work",
  description:
    "Academic portfolio for Victor Muregi — Diploma Level 6 Computer Science student at Kiambu National Polytechnic. Coursework in software development, databases, networking, AI, and systems.",
  alternates: { canonical: "/academic" },
  openGraph: {
    type: "profile",
    url: absolute("/academic"),
    title: "Computer Science Portfolio & Academic Work | Victor Muregi",
    description:
      "Diploma Level 6 Computer Science student at Kiambu National Polytechnic — coursework in software development, databases, networking, AI, and systems."
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Science Portfolio & Academic Work | Victor Muregi",
    description:
      "Diploma Level 6 Computer Science student at Kiambu National Polytechnic — coursework in software development, databases, networking, AI, and systems."
  }
};

const focusIcons: Record<string, typeof Code2> = {
  code: Code2,
  wrench: Wrench,
  brain: Brain,
  network: Network,
  palette: Palette
};

const sectionLink = [
  { label: "Home", href: "/" },
  { label: "Focus Areas", href: "/academic#focus-areas" },
  { label: "Skills", href: "/academic#skills" },
  { label: "Contact", href: "/#contact" }
];

export default function AcademicPage() {
  return (
    <div className="section-grid min-h-screen">
      <SiteHeader
        items={sectionLink}
        cta={{ label: "Professional Portfolio", href: "/" }}
      />

      <main id="main-content" className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="pt-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Academic Portfolio" }
            ]}
          />
        </div>

        {/* ------------------------------ Hero ------------------------------ */}
        <section
          aria-labelledby="academic-hero-heading"
          className="py-14 lg:py-20"
        >
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-100">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              {academic.badge}
            </p>
            <h1
              id="academic-hero-heading"
              className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Academic Portfolio
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              {academic.bio}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-300 via-purple-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/20 transition-opacity hover:opacity-90"
              >
                View Professional Work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={site.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-fuchsia-300/40"
              >
                Download Resume
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* --------------------------- Focus areas -------------------------- */}
        <section
          id="focus-areas"
          aria-labelledby="focus-heading"
          className="py-14 lg:py-20"
        >
          <div className="mb-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-fuchsia-200">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Curriculum
            </p>
            <h2
              id="focus-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Academic Focus Areas
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">
              The core Computer Science topics I&apos;m studying at diploma level.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {academic.focusAreas.map((area) => {
              const Icon = focusIcons[area.icon] ?? Code2;
              return (
                <article
                  key={area.title}
                  className="glass rounded-[2rem] p-6"
                >
                  <Icon className="h-6 w-6 text-fuchsia-300" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {area.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-6 text-slate-300"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300/70"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}

            {/* CTA card */}
            <article className="flex flex-col justify-between rounded-[2rem] border border-fuchsia-300/20 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,0.18),transparent_45%),linear-gradient(135deg,rgba(3,7,18,0.9),rgba(15,10,30,0.92))] p-6">
              <div>
                <Bot className="h-6 w-6 text-fuchsia-300" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Coursework in practice
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  What I learn in class I ship in production — EduCore (school
                  management), StockCore (inventory), and M-Pesa integrations for
                  real businesses.
                </p>
              </div>
              <Link
                href="/#projects"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-fuchsia-200 transition-colors hover:text-white"
              >
                See production projects
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        {/* ------------------------------ Skills ---------------------------- */}
        <section id="skills" aria-labelledby="academic-skills-heading" className="py-14 lg:py-20">
          <div className="mb-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-fuchsia-200">
              <Code2 className="h-4 w-4" aria-hidden="true" />
              Toolbox
            </p>
            <h2
              id="academic-skills-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Technical Skills
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">
              Languages and tools exercised through coursework, labs, and
              self-driven projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {academic.skills.map((group) => (
              <div key={group.title} className="glass rounded-[2rem] p-6">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------- Journey ----------------------------- */}
        <section id="journey" aria-labelledby="journey-heading" className="py-14 lg:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/30 p-8 md:p-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-fuchsia-200">
              <Database className="h-4 w-4" aria-hidden="true" />
              Current Focus
            </div>
            <h2 id="journey-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Learning Journey
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              I believe in continuous improvement and hands-on learning. Every
              project is a chance to practice problem-solving and persistence —
              not just to write code.
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {academic.currentFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-fuchsia-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ----------------------------- Contact ---------------------------- */}
        <section aria-labelledby="academic-contact-heading" className="py-14 lg:py-20">
          <div className="glass rounded-[2rem] p-8 md:p-10">
            <h2
              id="academic-contact-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Get in touch
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Open to collaboration, internships, learning opportunities, and
              connecting with fellow developers.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Email",
                  value: site.email,
                  href: `mailto:${site.email}`,
                  icon: Mail
                },
                {
                  label: "GitHub",
                  value: "@Muregis",
                  href: site.github,
                  icon: Github
                },
                {
                  label: "LinkedIn",
                  value: "Victor Muregi",
                  href: site.linkedin,
                  icon: Linkedin
                },
                {
                  label: "Instagram",
                  value: "@i_am.muregi",
                  href: site.instagram,
                  icon: Instagram
                },
                {
                  label: "Facebook",
                  value: "Victor Muregi",
                  href: site.facebook,
                  icon: Facebook
                },
                {
                  label: "WhatsApp",
                  value: site.phoneDisplay,
                  href: site.whatsapp,
                  icon: MessageSquare
                }
              ].map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-colors hover:border-fuchsia-300/40"
                >
                  <Icon className="h-6 w-6 text-fuchsia-300" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{label}</h3>
                  <p className="mt-2 text-sm text-slate-300">{value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Structured data */}
      <JsonLd data={personSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Academic Portfolio", href: "/academic" }
        ])}
      />
    </div>
  );
}
