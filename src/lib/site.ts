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

export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  liveDemoUrl?: string;
  repoUrl?: string;
  image?: string;
  featured?: boolean;
  status?: string;
};

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

export const faqs = [
  {
    question: "What does Victor Muregi build?",
    answer:
      "Multi-tenant web systems for Kenyan schools and SMEs — including EduCore, EduCore Ratiba, and Core CRM — with RBAC, tenant isolation, and M-Pesa patterns."
  },
  {
    question: "What is MuregiScore Technologies?",
    answer:
      "MuregiScore Technologies is the company founded by Victor Muregi in Nairobi to engineer education, payment, and operations software for Africa."
  }
];

