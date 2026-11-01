/**
 * Central site configuration & content.
 *
 * Shared by server-rendered pages and interactive islands.
 * Keep this module free of JSX so both can import it safely.
 */

export const site = {
  name: "Victor Muregi",
  brand: "MuregiScore Technologies",
  tagline: "Multi-tenant software for Kenyan schools, SMEs, and local businesses",
  role: "Full-Stack Developer & Founder",
  location: "Nairobi, Kenya",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://portfolio.muregiscore.me",
  email: "i.am.muregi@gmail.com",
  phoneDisplay: "+254 797 846 126",
  phoneE164: "+254797846126",
  whatsapp: "https://wa.me/254797846126",
  github: "https://github.com/Muregis",
  linkedin: "https://www.linkedin.com/in/victor-muregi",
  instagram: "https://www.instagram.com/i_am.muregi",
  facebook: "https://www.facebook.com/profile.php?id=61555801086570",
  socials: [
    { label: "GitHub", href: "https://github.com/Muregis" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/victor-muregi" },
    { label: "Instagram", href: "https://www.instagram.com/i_am.muregi" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61555801086570" }
  ],
  mpesa: {
    till: "5159614",
    tillName: "MuregiScore Technologies",
    phone: "0797846126"
  },
  logo: {
    svg: "/muregiscore-logo.svg",
    png: "/muregiscore-logo.png"
  },
  resumeUrl: "/Victor_Muregi_Resume.pdf"
};

export function absolute(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "Engineering", href: "/#engineering" },
    { label: "Experience", href: "/#experience" },
    { label: "CV / Resume", href: "/cv" },
    { label: "Academic", href: "/academic" },
    { label: "Contact", href: "/#contact" }
  ]
};

export const roles = [
  "Full-Stack Software Engineer",
  "Systems Builder",
  "M-Pesa Integration Specialist",
  "Founder, MuregiScore Technologies"
];

export interface Project {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  liveDemoUrl?: string;
  repoUrl?: string;
  image?: string;
  featured?: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    slug: "educore",
    name: "EduCore",
    summary:
      "Multi-tenant school management SaaS — students, fees, academics, RBAC, and payment integration points with school_id isolation.",
    stack: ["React", "Vite", "Node/Express", "PostgreSQL", "RBAC"],
    liveDemoUrl: "https://educore.muregiscore.me",
    repoUrl: "https://github.com/Muregis/educore-school-management-system",
    image: "/images/projects/educore.jpg",
    featured: true,
    status: "Live"
  },
  {
    slug: "educore-ratiba",
    name: "EduCore Ratiba",
    summary:
      "Whole-school timetable engine for CBC / 8-4-4 with clash detection and constraint solving.",
    stack: ["PHP", "FET", "MySQL", "CI"],
    liveDemoUrl: "https://ratiba.muregiscore.me",
    repoUrl: "https://github.com/Muregis/Educore-Ratiba",
    image: "/images/projects/educore-ratiba.jpg",
    featured: true,
    status: "Live"
  },
  {
    slug: "core-crm",
    name: "Core CRM",
    summary:
      "Multi-tenant CRM for Kenyan SMEs — pipeline, tenants, BullMQ jobs, vertical modules.",
    stack: ["React", "Node/Express", "MySQL", "BullMQ", "Redis"],
    repoUrl: "https://github.com/Muregis/Core-Crm-model",
    featured: true,
    status: "In development"
  },
  {
    slug: "livestock",
    name: "Livestock Management",
    summary: "AgriTech MVP — animal records, health views, and farm tasks.",
    stack: ["React", "TypeScript", "Vite"],
    liveDemoUrl: "https://livestock-management-app.vercel.app",
    repoUrl: "https://github.com/Muregis/Livestock-Management-App",
    status: "MVP"
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export const stats = [
  { label: "Flagship systems", value: "3+" },
  { label: "Live demos", value: "EduCore + Ratiba" },
  { label: "CI on flagships", value: "Yes" },
  { label: "Founded MuregiScore", value: "2024" }
];

export const journey = [
  { year: "2023", event: "Enrolled in Diploma Level 6 Computer Science at Kiambu National Polytechnic" },
  { year: "2024", event: "Founded MuregiScore Technologies to build software for Kenyan schools and SMEs" },
  { year: "2025–2026", event: "Shipped EduCore, Core CRM, and EduCore Ratiba with tests, CI, and public demos" },
  { year: "2026+", event: "Open to software engineering roles and focused product/implementation work" }
];

export const values = [
  { icon: "shield", title: "Tenant isolation first", text: "school_id / tenant_id boundaries as a design constraint, not an afterthought." },
  { icon: "rocket", title: "Ship real systems", text: "Public demos, tests, and honest scope over vaporware slides." },
  { icon: "grad", title: "Learn by building", text: "Diploma coursework paired with production patterns: RBAC, queues, payments." }
];

export interface TimelineItem {
  year: string;
  title: string;
  detail: string;
}

export const timeline: TimelineItem[] = [
  { year: "2024 – Present", title: "Founder & Full-Stack Developer", detail: "MuregiScore Technologies — EduCore, Ratiba, Core CRM." },
  { year: "2023 – Present", title: "Client web work", detail: "Institutional and marketing sites for local businesses." },
  { year: "2023 – Present", title: "Computer Science (Diploma L6)", detail: "Kiambu National Polytechnic." }
];

export const skillGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "PHP", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind"] },
  { title: "Backend", items: ["Node/Express", "PHP", "REST", "Webhooks"] },
  { title: "Data & jobs", items: ["PostgreSQL", "MySQL", "BullMQ", "Redis"] },
  { title: "Payments", items: ["M-Pesa Daraja", "Paystack"] },
  { title: "Ops", items: ["GitHub Actions", "Vercel", "Render"] }
];

export const proficiency = [
  { name: "React / TypeScript", level: 85 },
  { name: "Node / Express", level: 80 },
  { name: "PostgreSQL / MySQL", level: 78 },
  { name: "RBAC & multi-tenancy", level: 82 },
  { name: "M-Pesa patterns", level: 75 }
];

export const products = [
  { name: "EduCore", blurb: "School management SaaS" },
  { name: "EduCore Ratiba", blurb: "Timetable engine" },
  { name: "Core CRM", blurb: "SME CRM architecture" }
];

export const education = {
  school: "Kiambu National Polytechnic",
  program: "Diploma in Computer Science (Level 6)",
  period: "2023 – Present (expected 2026)",
  notes: "Programming, databases, software engineering, networks, systems analysis."
};

export const testimonials: { quote: string; name: string; role: string }[] = [];

export const faqs = [
  {
    q: "What roles are you targeting?",
    a: "Software engineering roles and focused product/implementation work — especially edtech, SME SaaS, and African-market products."
  },
  {
    q: "Where should a reviewer start?",
    a: "EduCore (live multi-tenant school SaaS), Core CRM (tests + BullMQ on GitHub), and EduCore Ratiba (live timetable + clash tests)."
  },
  {
    q: "What is MuregiScore Technologies?",
    a: "The company founded by Victor Muregi in Nairobi to engineer education, payment, and operations software."
  }
];

export const academic = {
  institution: "Kiambu National Polytechnic",
  program: "Diploma in Computer Science (Level 6)",
  period: "2023 – Present",
  highlights: [
    "Top 5 Innovator, Kiambu Polytechnic Innovation Challenge (2024) — EduCore",
    "Hands-on systems work alongside coursework"
  ]
};
