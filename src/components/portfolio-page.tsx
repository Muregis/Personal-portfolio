"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Copy,
  CreditCard,
  ExternalLink,
  Github,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  Mail,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  WalletCards,
  X
} from "lucide-react";

const roles = [
  "Building Solutions for Africa",
  "Full-Stack Developer",
  "Founder of MuregiScore Technologies",
  "React, Node.js, PostgreSQL",
  "M-Pesa Integration Specialist"
];

const projects = [
  {
    title: "Sawa Solar Solution",
    description:
      "Professional solar energy company website with service showcase, project gallery, and contact integration.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop&q=80",
    stack: ["HTML5", "CSS3", "JavaScript"],
    category: "live",
    status: "Live",
    href: "https://muregis.github.io/Sawa-solar--solution-website/"
  },
  {
    title: "Educational Institution Website",
    description:
      "Modern school website featuring academic programs, admission portal, facilities gallery, and news section.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80",
    stack: ["HTML5", "CSS3", "Bootstrap"],
    category: "live",
    status: "Live",
    href: "https://muregis.github.io/School-Website/"
  },
  {
    title: "EduCore",
    description:
      "Complete school management system with student records, fee tracking, timetabling, and automated report card generation.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&q=80",
    stack: ["React", "Node.js", "PostgreSQL", "JWT"],
    category: "product",
    status: "Live",
    href: "https://muregis.github.io/EduCore"
  },
  {
    title: "StockCore",
    description:
      "Inventory and stock intelligence platform focused on item visibility, movement tracking, reorder alerts, and business insights.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop&q=80",
    stack: ["React", "Node.js", "PostgreSQL", "Analytics"],
    category: "development",
    status: "Work in Progress",
    href: null
  },
  {
    title: "ClientCore",
    description:
      "CRM platform with contact management, sales pipeline tracking, task automation, and analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80",
    stack: ["React", "Node.js", "PostgreSQL"],
    category: "product",
    status: "Enterprise Product",
    href: null
  },
  {
    title: "Nuru AI Chatbot",
    description:
      "Multi-language AI chatbot supporting Kikuyu, Swahili, Kamba, and Dholuo with natural language processing.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&q=80",
    stack: ["NLP", "React", "Node.js"],
    category: "development",
    status: "In Development",
    href: null
  }
] as const;

const timeline = [
  {
    date: "2024 - Present",
    role: "Founder & Lead Developer",
    company: "MuregiScore Technologies",
    description:
      "Founded tech company building enterprise software. Leading product development, client relationships, and M-Pesa integrations.",
    tags: ["React", "Node.js", "PostgreSQL", "M-Pesa API"]
  },
  {
    date: "2023 - Present",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    description:
      "Delivered 15+ projects for clients including business websites, management systems, and e-commerce platforms.",
    tags: ["Web Development", "API Design", "Client Management"]
  },
  {
    date: "2023 - Present",
    role: "Computer Science Student",
    company: "Kiambu National Polytechnic",
    description:
      "Pursuing diploma in Computer Science. Coursework includes software engineering, databases, networking, and system design.",
    tags: ["Software Engineering", "Database Systems", "Networking"]
  }
];

const skills = [
  { title: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express", "PostgreSQL", "JWT Auth", "REST APIs"] },
  { title: "Payments", items: ["M-Pesa Daraja", "STK Push", "Paystack"] },
  { title: "DevOps & Workflow", items: ["Git", "GitHub", "Railway", "Vercel"] }
];

const skillProgress = [
  { label: "React & Frontend", value: 90 },
  { label: "Node.js & Backend", value: 85 },
  { label: "M-Pesa Integration", value: 88 },
  { label: "PostgreSQL & Data", value: 80 }
];

const gallery = [
  {
    title: "Dashboard UI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    desc: "Analytics dashboard concept in the MuregiScore style."
  },
  {
    title: "Landing Page",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80",
    desc: "Hero section for a fintech client with CTA focus."
  },
  {
    title: "Mobile Preview",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&q=80",
    desc: "Responsive mobile layout preview."
  }
];

const testimonials = [
  {
    quote:
      "EduCore has completely transformed how we manage our school. Student records, fee tracking, and report generation are now seamless.",
    name: "Jane Kamau",
    role: "School Administrator"
  },
  {
    quote:
      "The M-Pesa integration works flawlessly. Our members can now track their savings and loans in real-time. Highly professional.",
    name: "Peter Mwangi",
    role: "Sacco Chairperson"
  },
  {
    quote:
      "Sawa Solar Solution website has brought us so many leads. Victor understood our business perfectly.",
    name: "David Kipchoge",
    role: "Solar Company CEO"
  }
];

const faqs = [
  {
    q: "What's your core stack?",
    a: "React + TypeScript on the front, Node.js/Express + PostgreSQL on the back, and M-Pesa Daraja for payments. Tooling: Vite, Tailwind, GitHub, Railway/Vercel."
  },
  {
    q: "How long do projects take?",
    a: "Brochure sites: 1-2 weeks. Full web apps with auth, database, and payments: 4-6 weeks. Enterprise suites like EduCore and StockCore take phased releases."
  },
  {
    q: "Do you handle support and updates?",
    a: "Yes. Ongoing maintenance packages include security patches, bug fixes, feature tweaks, and uptime monitoring."
  },
  {
    q: "Can you integrate payments?",
    a: "Absolutely. I build M-Pesa STK Push, C2B, B2C flows, plus Paystack or card rails when needed, with callbacks and transaction verification."
  }
];

function Typewriter() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(id);
  }, []);

  return <p className="text-lg text-cyan-200 md:text-xl">{roles[index]}</p>;
}

export function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mpesaOpen, setMpesaOpen] = useState(false);
  const [copied, setCopied] = useState<"till" | "phone" | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, []);
  useEffect(() => {
    if (!mpesaOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMpesaOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mpesaOpen]);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const copyText = async (value: string, type: "till" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  return (
    <main className="section-grid min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(87,199,255,0.16),transparent_35%),linear-gradient(180deg,rgba(3,7,18,0.4),rgba(3,7,18,0.95))]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: "url('/muregiscore-logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "420px auto"
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <nav className="glass flex items-center justify-between rounded-full px-5 py-4">
            <div className="flex items-center gap-3">
              <img src="/muregiscore-logo.svg" alt="MuregiScore logo" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 p-1" />
              <div>
                <p className="text-sm font-semibold tracking-[0.24em] text-cyan-200 uppercase">Victor Muregi</p>
                <p className="text-sm text-slate-300">Full-Stack Developer</p>
              </div>
            </div>
            <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="#contact" className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100">Hire Me</a>
          </nav>

          <div className="relative py-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                Open for freelance, product, and full-time work
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                {["Full-Stack Developer", "Founder", "CS Student", "M-Pesa Builder"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">{item}</span>
                ))}
              </div>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">Hi, I&apos;m Victor Muregi</h1>
                <Typewriter />
                <p className="max-w-3xl text-lg leading-8 text-slate-300">
                  Computer Science student at Kiambu National Polytechnic, specializing in full-stack development with React, Node.js, PostgreSQL, and the M-Pesa Daraja API for seamless payments. Founder of MuregiScore Technologies, building enterprise software that solves real African business problems.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30">View Projects<ArrowUpRight className="h-4 w-4" /></a>
                <Link href="https://muregis.github.io/EduCore" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white">EduCore Live<ExternalLink className="h-4 w-4" /></Link>
                <button type="button" onClick={() => setMpesaOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-6 py-3 font-semibold text-emerald-100">Try M-Pesa Demo<CreditCard className="h-4 w-4" /></button>
                <Link href="https://github.com/Muregis" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white">GitHub<Github className="h-4 w-4" /></Link>
                <a href="../first-portfolio.html" className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-6 py-3 font-semibold text-fuchsia-100">Academic Portfolio<GraduationCap className="h-4 w-4" /></a>
                <Link href="https://www.linkedin.com/in/victor-muregi" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-300/10 px-6 py-3 font-semibold text-blue-100">LinkedIn<Linkedin className="h-4 w-4" /></Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { value: "15+", label: "Projects Delivered" },
                  { value: "5", label: "Products Built" },
                  { value: "20+", label: "Technologies" },
                  { value: "100%", label: "Client Focus" }
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-3xl px-5 py-5"><div className="text-3xl font-black text-white">{stat.value}</div><div className="text-sm text-slate-300">{stat.label}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="glass rounded-[2rem] p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"><Sparkles className="h-4 w-4" />About Me</div>
            <h2 className="text-4xl font-bold text-white">From curiosity to code</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
              <p>I&apos;m a Computer Science student at <span className="font-semibold text-white">Kiambu National Polytechnic</span> who discovered programming as a way to solve real problems I saw around me.</p>
              <p>Growing up in Kenya, I noticed how many businesses struggled with outdated systems or could not afford expensive software. That became my motivation to build modern, affordable tech solutions specifically for African businesses.</p>
              <p>At 20 years old, I&apos;ve already built products used by schools, businesses, and operators across Kenya.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass rounded-[2rem] p-8">
              <h3 className="text-xl font-semibold text-white">Journey</h3>
              <div className="mt-6 space-y-5">
                {[
                  ["2022", "Wrote my first line of code"],
                  ["2023", "Started CS at Kiambu National Polytechnic"],
                  ["2024", "Founded MuregiScore Technologies"],
                  ["2025", "Building enterprise software for Africa"]
                ].map(([year, label]) => (
                  <div key={year} className="border-l border-cyan-300/30 pl-4"><div className="text-sm font-semibold tracking-[0.2em] text-cyan-200 uppercase">{year}</div><div className="mt-1 text-slate-300">{label}</div></div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { icon: ShieldCheck, title: "Problem-First", text: "I build what solves real pain points." },
                { icon: Rocket, title: "Fast Learner", text: "Self-taught and always expanding skills." },
                { icon: GraduationCap, title: "Kenyan Roots", text: "Building solutions for Africa." }
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="glass rounded-[1.5rem] p-5"><Icon className="h-6 w-6 text-cyan-200" /><h4 className="mt-4 text-lg font-semibold text-white">{title}</h4><p className="mt-2 text-sm leading-6 text-slate-300">{text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"><BriefcaseBusiness className="h-4 w-4" />Featured Work</div>
            <h2 className="mt-4 text-4xl font-bold text-white">Live Projects & Products</h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">Production websites and enterprise software solutions.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[ ["all", "All Projects"], ["live", "Live Sites"], ["product", "Products"], ["development", "In Development"] ].map(([value, label]) => (
              <button key={value} type="button" onClick={() => setFilter(value)} className={`rounded-full px-4 py-2 text-sm font-medium ${filter === value ? "bg-cyan-300 text-slate-950" : "border border-white/10 bg-white/5 text-slate-200"}`}>{label}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.title} className="glass overflow-hidden rounded-[2rem]">
              <div className="relative"><img src={project.image} alt={project.title} className="h-60 w-full object-cover" /><span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${project.status === "Live" ? "bg-emerald-300 text-emerald-950" : "bg-amber-300 text-amber-950"}`}>{project.status}</span></div>
              <div className="space-y-5 p-6">
                <div><h3 className="text-2xl font-semibold text-white">{project.title}</h3><p className="mt-3 leading-7 text-slate-300">{project.description}</p></div>
                <div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{item}</span>)}</div>
                {project.href ? <Link href={project.href} target="_blank" className="inline-flex items-center gap-2 text-cyan-200">View project<ExternalLink className="h-4 w-4" /></Link> : <span className="inline-flex items-center gap-2 text-amber-200">{project.status}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"><LayoutDashboard className="h-4 w-4" />Work Experience</div>
          <h2 className="mt-4 text-4xl font-bold text-white">Professional Journey</h2>
          <p className="mt-3 max-w-2xl text-lg text-slate-300">My path from learning to building enterprise solutions.</p>
        </div>
        <div className="space-y-6">
          {timeline.map((item) => (
            <div key={item.role} className="glass rounded-[2rem] p-6">
              <div className="text-sm font-semibold tracking-[0.18em] text-cyan-200 uppercase">{item.date}</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
              <p className="text-slate-300">{item.company}</p>
              <p className="mt-4 max-w-4xl leading-7 text-slate-300">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"><Code2 className="h-4 w-4" />Technical Expertise</div>
          <h2 className="mt-4 text-4xl font-bold text-white">Skills & Technologies</h2>
          <p className="mt-3 max-w-2xl text-lg text-slate-300">Modern JavaScript stack with payments and production ops.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6">
            {skills.map((group) => (
              <div key={group.title} className="glass rounded-[2rem] p-6">
                <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200">{item}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="glass rounded-[2rem] p-6">
            <h3 className="text-2xl font-semibold text-white">Proficiency Snapshot</h3>
            <div className="mt-6 space-y-5">
              {skillProgress.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300"><span>{item.label}</span><span>{item.value}%</span></div>
                  <div className="h-3 rounded-full bg-white/10"><div className="h-3 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500" style={{ width: `${item.value}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"><Sparkles className="h-4 w-4" />Gallery</div>
          <h2 className="mt-4 text-4xl font-bold text-white">Recent visuals and UI snapshots</h2>
          <p className="mt-3 max-w-2xl text-lg text-slate-300">Recent snapshots and UI highlights.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {gallery.map((item) => (
            <article key={item.title} className="glass overflow-hidden rounded-[2rem]">
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
              <div className="p-6"><h3 className="text-2xl font-semibold text-white">{item.title}</h3><p className="mt-3 leading-7 text-slate-300">{item.desc}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="glass rounded-[2rem] p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"><GraduationCap className="h-4 w-4" />Education</div>
          <h2 className="mt-4 text-4xl font-bold text-white">Academic Background</h2>
          <div className="mt-6 space-y-5 text-slate-300">
            <p className="text-lg text-white">Kiambu National Polytechnic</p>
            <p>Diploma in Computer Science, 2023 - Present (Expected 2026)</p>
            <p>Comprehensive computer science program covering software development, database management, networking, and system administration.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Programming","Data Structures","Database Systems","Software Engineering","Web Development","Computer Networks","System Analysis","IT Project Management"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{item}</span>)}
          </div>
        </div>
        <div className="glass rounded-[2rem] p-8">
          <div className="mb-4 flex items-center gap-3">
            <img src="/muregiscore-logo.svg" alt="MuregiScore logo" className="h-11 w-11 rounded-xl border border-white/10 bg-white/5 p-1" />
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-cyan-200 uppercase">MuregiScore</p>
              <p className="text-sm text-slate-300">Scoring Solutions, Empowering Africa</p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-white">MuregiScore Technologies</h3>
          <p className="mt-3 text-slate-300">Scoring Solutions, Empowering Africa.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["EduCore", "School management system transforming how Kenyan schools handle student records, fees, and academics."],
              ["StockCore", "Inventory and stock-focused business platform currently in progress."],
              ["ClientCore", "CRM built for practical business workflows and sales execution."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4"><h4 className="font-semibold text-white">{title}</h4><p className="mt-2 text-sm leading-6 text-slate-300">{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"><Star className="h-4 w-4" />Client Feedback</div>
          <h2 className="mt-4 text-4xl font-bold text-white">What Clients Say</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-[2rem] p-8">
            <div className="flex gap-1 text-amber-300">{Array.from({ length: 5 }).map((_, idx) => <Star key={idx} className="h-5 w-5 fill-current" />)}</div>
            <p className="mt-6 text-2xl leading-10 text-white">&quot;{testimonials[activeTestimonial].quote}&quot;</p>
            <div className="mt-6"><p className="font-semibold text-white">{testimonials[activeTestimonial].name}</p><p className="text-slate-300">{testimonials[activeTestimonial].role}</p></div>
          </div>
          <div className="space-y-4">
            {testimonials.map((item, index) => (
              <button key={item.name} type="button" onClick={() => setActiveTestimonial(index)} className={`glass w-full rounded-[1.5rem] p-5 text-left ${index === activeTestimonial ? "border-cyan-300/50" : ""}`}>
                <p className="font-semibold text-white">{item.name}</p><p className="text-sm text-slate-300">{item.role}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"><WalletCards className="h-4 w-4" />FAQ</div>
          <h2 className="mt-4 text-4xl font-bold text-white">Common Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={item.q} className="glass rounded-[1.5rem] p-5">
                <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 text-left">
                  <span className="text-lg font-semibold text-white">{item.q}</span><span className="text-cyan-200">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen ? <p className="mt-4 max-w-4xl leading-7 text-slate-300">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </section>
      <section id="mpesa-demo" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_32%),linear-gradient(135deg,rgba(3,7,18,0.92),rgba(6,20,31,0.9))] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100"><CreditCard className="h-4 w-4" />Live M-Pesa Integration Demo</div>
              <h2 className="mt-5 text-4xl font-bold text-white">See M-Pesa STK Push in Action</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">Try my Daraja API implementation. Buy me a coffee and watch the automated payment flow.</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">Powered by Safaricom Daraja API · Real-time STK Push</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/35 p-6">
              <div className="mb-5 flex items-center gap-3"><div className="rounded-2xl bg-emerald-300/15 p-3"><WalletCards className="h-6 w-6 text-emerald-200" /></div><div><p className="font-semibold text-white">Capabilities Included</p><p className="text-sm text-slate-300">Real payment integration experience</p></div></div>
              <div className="flex flex-wrap gap-3">{["STK Push", "C2B", "B2C", "Callbacks", "Verification"].map((item) => <span key={item} className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">{item}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <h2 className="text-4xl font-bold text-white">Let&apos;s Work Together</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Available for freelance projects, collaborations, and full-time opportunities.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {[
              { label: "WhatsApp", value: "+254 797 846 126", href: "https://wa.me/254797846126", icon: MessageCircle },
              { label: "Email", value: "i.am.muregi@gmail.com", href: "mailto:i.am.muregi@gmail.com", icon: Mail },
              { label: "GitHub", value: "@Muregis", href: "https://github.com/Muregis", icon: Github },
              { label: "Academic Portfolio", value: "View first portfolio", href: "../first-portfolio.html", icon: GraduationCap },
              { label: "LinkedIn", value: "Victor Muregi", href: "https://www.linkedin.com/in/victor-muregi", icon: Linkedin }
            ].map(({ label, value, href, icon: Icon }) => (
              <Link key={label} href={href} target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : undefined} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"><Icon className="h-6 w-6 text-cyan-200" /><h3 className="mt-4 text-lg font-semibold text-white">{label}</h3><p className="mt-2 text-sm text-slate-300">{value}</p></Link>
            ))}
        </div>
        </div>
        <footer className="py-8 text-center text-sm text-slate-400"><div className="mb-4 flex justify-center"><img src="/muregiscore-logo.svg" alt="MuregiScore logo" className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 p-2" /></div><p>© 2026 Victor Muregi - MuregiScore Technologies</p><p className="mt-2">Scoring Solutions, Empowering Africa</p></footer>
      </section>

      {mpesaOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <button type="button" aria-label="Close M-Pesa modal" className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setMpesaOpen(false)} />
          <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#07111f] p-6 shadow-2xl shadow-black/40 md:p-8">
            <button type="button" onClick={() => setMpesaOpen(false)} className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-slate-300"><X className="h-4 w-4" /></button>
            <div className="mb-6 pr-10 text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg"
                alt="M-Pesa"
                className="mx-auto h-14 w-auto"
              />
              <h3 className="mt-4 text-3xl font-bold text-white">M-Pesa STK Push Demo</h3>
              <p className="mt-3 leading-7 text-slate-300">See Daraja API integration in action</p>
            </div>
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Phone Number</label>
                <input type="tel" placeholder="0712345678" maxLength={10} className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none" />
                <p className="mt-2 text-sm text-slate-400">Kenyan number starting with 07 or 01</p>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Amount (KES)</label>
                <input type="number" defaultValue={50} min={10} className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none" />
                <p className="mt-2 text-sm text-slate-400">Minimum KES 10</p>
              </div>
              <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 via-green-400 to-lime-400 px-6 py-3 font-semibold text-slate-950">Send Payment Prompt<ArrowUpRight className="h-4 w-4" /></button>
              <div className="relative py-2 text-center text-sm text-slate-400"><span className="bg-[#07111f] px-3">or</span><div className="absolute left-0 right-0 top-1/2 -z-10 h-px bg-white/10" /></div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <h4 className="text-lg font-semibold text-white">Manual Payment</h4>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4"><p className="text-sm text-slate-400">Till Number</p><div className="mt-2 flex items-center justify-between gap-3"><span className="text-xl font-bold text-white">5159614</span><button type="button" onClick={() => copyText("5159614", "till")} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"><Copy className="h-4 w-4" />{copied === "till" ? "Copied" : "Copy"}</button></div></div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4"><p className="text-sm text-slate-400">Phone</p><div className="mt-2 flex items-center justify-between gap-3"><span className="text-xl font-bold text-white">0797846126</span><button type="button" onClick={() => copyText("0797846126", "phone")} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"><Copy className="h-4 w-4" />{copied === "phone" ? "Copied" : "Copy"}</button></div></div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">This is a live demo of M-Pesa Daraja API integration with STK Push, callback handling, and transaction verification.</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
