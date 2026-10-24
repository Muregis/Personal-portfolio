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
  // Stable public deployment. Override per environment with NEXT_PUBLIC_SITE_URL.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://personal-portfolio-ochre-seven-62.vercel.app",
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
  /** M-Pesa (Safaricom) payment details used for "support the work". */
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

/** Absolute URL helper (keeps canonical/OG values correct behind a proxy). */
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

/** Rotating headline phrases (hero). */
export const roles = [
  "Full-Stack Developer · React · Node/Express · PostgreSQL · MySQL",
  "Founder, MuregiScore Technologies · Nairobi",
  "Multi-tenant SaaS · RBAC · BullMQ · M-Pesa patterns",
  "EduCore · Core CRM · EduCore Ratiba",
  "Computer Science (Diploma Level 6) · Kiambu National Polytechnic"
];

export interface ProjectArchitectureLayer {
  layer: string;
  detail: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  tag: string;
  isFlagship: boolean;
  status: "Live" | "In Development" | "Production";
  stack: string[];
  problem: string;
  users: string[];
  architecture: ProjectArchitectureLayer[];
  architectureSummary: string;
  engineeringChallenge: string;
  result: string;
  metrics: ProjectMetric[];
  liveDemoUrl?: string;
  repoUrl?: string;
  image: string;
  imageAlt: string;
  accent: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "educore",
    title: "EduCore",
    tagline: "Multi-tenant school management SaaS",
    summary:
      "School operations platform for Kenyan institutions: student records, fees, academics, multi-campus tenancy, RBAC, and Paystack / M-Pesa integration points.",
    tag: "Flagship · School Management",
    isFlagship: true,
    status: "Live",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Supabase PostgreSQL",
      "JWT / sessions",
      "RBAC",
      "Tailwind CSS"
    ],
    problem:
      "Schools need enrollment, fee collection, academics, and parent communication across campuses without one school's data leaking into another. Spreadsheets and single-tenant tools do not scale cleanly.",
    users: [
      "School administrators & principals",
      "Teachers & academic staff",
      "Bursars & finance teams",
      "Parents (where enabled)"
    ],
    architecture: [
      {
        layer: "Frontend",
        detail:
          "React + Vite SPA with role-aware views and mobile-friendly layouts for school staff."
      },
      {
        layer: "API",
        detail:
          "Node.js / Express REST API with JWT-style sessions and school-scoped authorization."
      },
      {
        layer: "Data",
        detail:
          "Supabase PostgreSQL + storage; tenant boundaries keyed by school_id on school-scoped queries."
      },
      {
        layer: "Payments",
        detail:
          "Paystack / M-Pesa integration points with webhook-oriented fee posting patterns."
      }
    ],
    architectureSummary:
      "React frontend (Vercel) → Express API (Render) → Supabase PostgreSQL, isolated by school_id.",
    engineeringChallenge:
      "Enforcing tenant isolation across modules and payment webhooks so retries do not double-credit ledgers — documented with in-repo security notes and health/readiness endpoints for ops.",
    result:
      "A live multi-tenant education SaaS case study: fees, academics, and RBAC with explicit school boundaries.",
    metrics: [
      { value: "Live", label: "Public demo" },
      { value: "school_id", label: "Tenant key" },
      { value: "CI", label: "GitHub Actions" }
    ],
    liveDemoUrl: "https://educore-school-management-system-pi.vercel.app",
    repoUrl: "https://github.com/Muregis/educore-school-management-system",
    image: "/images/projects/educore.jpg",
    imageAlt:
      "EduCore school management dashboard showing student records, fees, and academic modules.",
    accent: "from-cyan-400/80 via-sky-500/70 to-blue-600/80",
    highlights: [
      "Multi-tenant isolation by school_id",
      "RBAC for school staff roles",
      "Fees and payment gateway hooks",
      "Health / readiness ops endpoints"
    ]
  },
  {
    slug: "core-crm",
    title: "Core CRM",
    tagline: "Multi-tenant CRM for Kenyan SMEs",
    summary:
      "CRM and operations platform: customers, leads, pipeline, tenant isolation, RBAC, BullMQ background reports, and vertical modules for land, commercial, and legal workflows.",
    tag: "Flagship · CRM & Operations",
    isFlagship: true,
    status: "In Development",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "Redis",
      "BullMQ",
      "Jest / Supertest"
    ],
    problem:
      "SMEs and SACCOs lose pipeline visibility when deals and payments live in WhatsApp and spreadsheets — without shared roles, tenant boundaries, or async reporting.",
    users: [
      "Sales teams & managers",
      "SME / SACCO operators",
      "Land brokers & commercial staff",
      "Small legal practices"
    ],
    architecture: [
      {
        layer: "API & auth",
        detail:
          "Express REST API with JWT, RBAC, and tenant_id scoping across domain tables."
      },
      {
        layer: "Data",
        detail:
          "MySQL 8 in production patterns; SQLite fallback for local development and CI."
      },
      {
        layer: "Jobs",
        detail:
          "BullMQ + Redis: enqueue reports → worker process → job status / result API."
      },
      {
        layer: "Vertical modules",
        detail:
          "Land parcels & installments, commercial quotes/invoices, legal matters & billable time, analytics hooks."
      }
    ],
    architectureSummary:
      "React → Express → MySQL with BullMQ workers on Redis; automated Jest suites and GitHub Actions CI.",
    engineeringChallenge:
      "Keeping tenant isolation and async jobs honest under test: auth/RBAC coverage, multi-tenant lifecycle tests, and CI that fails when no tests are discovered.",
    result:
      "A flagship engineering portfolio system with documented architecture, worker pipeline, and expanding test depth — production rollout is phased.",
    metrics: [
      { value: "BullMQ", label: "Async jobs" },
      { value: "RBAC", label: "Role guards" },
      { value: "CI", label: "Strict test job" }
    ],
    repoUrl: "https://github.com/Muregis/Core-Crm-model",
    image: "/images/projects/core-crm.jpg",
    imageAlt:
      "Core CRM sales pipeline dashboard showing deal stages and customer activity.",
    accent: "from-sky-300/80 via-blue-500/70 to-indigo-600/80",
    highlights: [
      "Tenant-scoped CRM resources",
      "BullMQ report workflow",
      "Jest + Supertest suite on main",
      "Land / commercial / legal modules"
    ]
  },
  {
    slug: "educore-ratiba",
    title: "EduCore Ratiba",
    tagline: "Whole-school timetable engine (CBC / 8-4-4)",
    summary:
      "Multi-school timetable management using PHP, MySQL/PostgreSQL, and the FET solver — with pre-flight checks, clash detection, and automated tests in CI.",
    tag: "Flagship · Scheduling",
    isFlagship: true,
    status: "Live",
    stack: [
      "PHP 8",
      "MySQL / PostgreSQL",
      "FET (fet-cl)",
      "Dompdf",
      "Composer"
    ],
    problem:
      "Administrators spend days building term timetables. Shared teachers and labs make class-by-class scheduling collide under KICD grade-band rules.",
    users: [
      "Academic deans & deputies",
      "Timetabling committees",
      "Department heads",
      "Subject teachers"
    ],
    architecture: [
      {
        layer: "Application",
        detail:
          "PHP 8 admin UI with multi-school isolation and PDO database access."
      },
      {
        layer: "Solver",
        detail:
          "Whole-school FET XML generation and safe proc_open execution of fet-cl."
      },
      {
        layer: "Clash rules",
        detail:
          "ClashDetector for pre-flight workloads, post-generation checks, and manual edit validation."
      },
      {
        layer: "Export",
        detail: "PDF / print timetable export via Dompdf."
      }
    ],
    architectureSummary:
      "PHP + FET constraint solver with pure-PHP clash unit tests and GitHub Actions CI.",
    engineeringChallenge:
      "Validating teacher/room/class conflicts and FET failures without relying on production school data — unit tests cover double-booking and workload pre-checks; live quality still depends on school configuration.",
    result:
      "A live demo plus automated clash and FET diagnostic tests — a strong differentiator versus CRUD-only portfolios.",
    metrics: [
      { value: "Live", label: "Public demo" },
      { value: "Tests", label: "Clash + FET CI" },
      { value: "CBC", label: "Band templates" }
    ],
    liveDemoUrl: "https://educoreratiba.vercel.app",
    repoUrl: "https://github.com/Muregis/Educore-Ratiba",
    image: "/images/projects/educore-ratiba.jpg",
    imageAlt:
      "EduCore Ratiba schedule matrix showing class and teacher periods.",
    accent: "from-teal-400/80 via-cyan-500/70 to-blue-600/80",
    highlights: [
      "FET whole-school generation",
      "Teacher / room / class clash detection",
      "Pre-flight workload checks",
      "CI-run automated tests"
    ]
  },
  {
    slug: "livestock-management",
    title: "Livestock Management",
    tagline: "AgriTech operations MVP",
    summary:
      "Prototype for livestock records, health views, task management, and basic operational metrics — useful product exploration, not a finished commercial system.",
    tag: "MVP · AgriTech",
    isFlagship: false,
    status: "Live",
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS", "MySQL (optional)"],
    problem:
      "Farms often track animals, treatments, and tasks informally, making health and operational follow-up hard to share across a team.",
    users: ["Farm owners", "Herd managers", "Field staff"],
    architecture: [
      {
        layer: "Frontend",
        detail: "React + TypeScript UI for dashboards, health views, and tasks."
      },
      {
        layer: "Data",
        detail: "Relational model sketched for animals, health, and tasks (see repo docs)."
      }
    ],
    architectureSummary:
      "React MVP with optional MySQL backend patterns documented in-repo.",
    engineeringChallenge:
      "Scoping an honest MVP: ship useful records and task UX without over-claiming production hardening.",
    result:
      "A supporting portfolio project that shows frontend breadth and domain interest in agritech.",
    metrics: [
      { value: "MVP", label: "Scope" },
      { value: "Live", label: "Demo" }
    ],
    liveDemoUrl: "https://livestock-management-app.vercel.app",
    repoUrl: "https://github.com/Muregis/Livestock-Management-App",
    image: "/images/projects/stockcore.jpg",
    imageAlt: "Livestock management dashboard with animal and health metrics.",
    accent: "from-lime-300/80 via-green-500/70 to-emerald-700/80",
    highlights: [
      "Animal and health-oriented UI",
      "Task management views",
      "Honest MVP positioning"
    ]
  },
  {
    slug: "sawa-solar",
    title: "Sawa Solar Solution",
    tagline: "Commercial clean-energy website",
    summary:
      "Marketing site for a Nairobi solar provider — project showcase and lead capture on a lightweight static stack.",
    tag: "Client · Web",
    isFlagship: false,
    status: "Live",
    stack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    problem:
      "A solar installer needed a fast, mobile-friendly presence to showcase work and capture inquiries.",
    users: ["Residential & commercial prospects", "Sales staff"],
    architecture: [
      {
        layer: "Site",
        detail: "Static, mobile-first pages tuned for Kenyan mobile networks."
      }
    ],
    architectureSummary: "Lightweight static site deployed on Vercel.",
    engineeringChallenge:
      "Keeping assets light for variable 3G/4G connectivity.",
    result: "Public marketing site with clear CTAs for inquiries.",
    metrics: [{ value: "Live", label: "Demo" }],
    liveDemoUrl: "https://sawa-solar-solution-website.vercel.app",
    repoUrl: "https://github.com/Muregis/Sawa-solar--solution-website",
    image: "/images/projects/sawa-solar.jpg",
    imageAlt: "Solar panels representing the Sawa Solar website.",
    accent: "from-amber-300/80 via-orange-400/70 to-orange-600/70",
    highlights: ["Mobile-first layout", "Lead-oriented CTAs"]
  },
  {
    slug: "school-website",
    title: "Gracious Love Academy",
    tagline: "School information website",
    summary:
      "Public academy site for curriculum, admissions information, and notices.",
    tag: "Client · Web",
    isFlagship: false,
    status: "Live",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem:
      "The school needed a single place for parents to find fees, admissions, and notices.",
    users: ["Parents", "School admin"],
    architecture: [
      {
        layer: "Site",
        detail: "Multi-page responsive informational site."
      }
    ],
    architectureSummary: "Static institutional website.",
    engineeringChallenge:
      "Clear content hierarchy for smartphone users.",
    result: "Reduced repetitive phone inquiries for standard information.",
    metrics: [{ value: "Live", label: "Demo" }],
    liveDemoUrl: "https://graciousloveacademy-school-website.vercel.app",
    repoUrl: "https://github.com/Muregis/School-Website",
    image: "/images/projects/school-site.jpg",
    imageAlt: "School website showing campus and admissions information.",
    accent: "from-emerald-300/80 via-teal-500/70 to-cyan-700/80",
    highlights: ["Admissions information", "Mobile-friendly layout"]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export const stats = [
  { value: "3", label: "Flagship systems" },
  { value: "Live", label: "EduCore + Ratiba demos" },
  { value: "CI", label: "Tests on flagship repos" },
  { value: "2024", label: "Founded MuregiScore" }
];

export const journey = [
  "Diploma-level Computer Science at Kiambu National Polytechnic",
  "Founded MuregiScore Technologies to ship practical systems",
  "Built EduCore, Core CRM, and EduCore Ratiba as flagship products",
  "Applying for junior full-stack, backend, and product engineering roles"
];

export const values = [
  {
    title: "Evidence over slogans",
    body: "Document what works, what is MVP, and what needs ops setup — then back it with tests and demos."
  },
  {
    title: "Tenant boundaries",
    body: "Multi-tenant products fail closed: school_id / tenant_id scoping is a first-class design concern."
  },
  {
    title: "Local market fit",
    body: "KES, M-Pesa patterns, CBC/8-4-4, and intermittent connectivity shape real product decisions."
  }
];

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export const timeline: TimelineItem[] = [
  {
    period: "2024 – Present",
    role: "Founder & Full-Stack Developer",
    company: "MuregiScore Technologies",
    description:
      "Design and ship multi-tenant education and SME systems: EduCore, Core CRM, and EduCore Ratiba. Focus on RBAC, tenant isolation, payment integration patterns, and automated tests.",
    tags: ["React", "Node.js", "PHP", "PostgreSQL", "MySQL", "BullMQ", "CI/CD"]
  },
  {
    period: "2023 – Present",
    role: "Computer Science Student (Diploma Level 6)",
    company: "Kiambu National Polytechnic",
    description:
      "Formal curriculum in software engineering, databases, algorithms, networks, and systems analysis.",
    tags: ["Software Engineering", "Databases", "Algorithms", "Networks"]
  }
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "Responsive UI"]
  },
  {
    title: "Backend & API Architecture",
    items: ["Node.js", "Express", "PHP", "RESTful APIs", "Webhooks", "Input Validation"]
  },
  {
    title: "Databases & Data Integrity",
    items: ["PostgreSQL", "MySQL", "Schema Design", "Indexing", "Audit Logging"]
  },
  {
    title: "Security & Access Control",
    items: ["JWT Authentication", "RBAC", "Session patterns", "Tenant isolation"]
  },
  {
    title: "Queues & Async",
    items: ["BullMQ", "Redis", "Background workers", "Idempotent payment patterns"]
  },
  {
    title: "Testing & DevOps",
    items: ["Jest / Supertest", "GitHub Actions", "Docker basics", "Vercel", "Render"]
  },
  {
    title: "Product & Payments",
    items: ["M-Pesa Daraja patterns", "Paystack hooks", "Kenyan market workflows"]
  }
];

/** Day-to-day stack chips. */
export const proficiency = [
  "React & TypeScript frontends",
  "Node.js & Express REST APIs",
  "PHP backends (Ratiba)",
  "PostgreSQL & MySQL",
  "RBAC & multi-tenancy",
  "BullMQ / Redis workers",
  "M-Pesa integration patterns",
  "GitHub Actions CI"
];

export const products = [
  {
    name: "EduCore",
    text: "Multi-tenant school management SaaS — fees, academics, RBAC, and payment integration points. Flagship product."
  },
  {
    name: "Core CRM",
    text: "Multi-tenant CRM for SMEs — pipeline, tenants, BullMQ jobs, M-Pesa patterns, and vertical modules."
  },
  {
    name: "EduCore Ratiba",
    text: "Whole-school timetable engine (CBC / 8-4-4) — FET solver, clash detection, and automated tests."
  }
];

export const education = {
  institution: "Kiambu National Polytechnic",
  program: "Diploma in Computer Science (Level 6)",
  focus: "Software engineering, databases, and systems analysis"
};

export const testimonials: { quote: string; name: string; role: string }[] = [];

export const faqs = [
  {
    q: "What roles are you targeting?",
    a: "Junior full-stack, junior software engineer, backend, and product/implementation engineering roles — especially edtech, SME SaaS, and African-market products."
  },
  {
    q: "Where should a reviewer start?",
    a: "EduCore (live multi-tenant school SaaS), Core CRM (tests + BullMQ on GitHub), and EduCore Ratiba (live timetable + clash tests)."
  },
  {
    q: "Are all systems production-complete?",
    a: "EduCore and Ratiba have public demos. Core CRM is under active development with automated tests; treat production rollout as phased. Livestock is an honest MVP."
  }
];

export const academic = {
  institution: "Kiambu National Polytechnic",
  program: "Diploma in Computer Science (Level 6)",
  modules: [
    {
      icon: "code",
      title: "Core Computer Science",
      items: [
        "Operating systems — Linux/Windows administration, shell scripting",
        "Computer organisation & architecture",
        "Mathematics for computing — discrete math, logic, relational algebra"
      ]
    },
    {
      icon: "wrench",
      title: "Software Engineering & SDLC",
      items: [
        "Programming paradigms — OOP and TypeScript/JavaScript practice",
        "Algorithms & data structures",
        "System analysis & requirements modeling"
      ]
    },
    {
      icon: "brain",
      title: "Databases & Data Management",
      items: [
        "Relational design — normalisation, PostgreSQL, MySQL",
        "Query optimization and constraints",
        "Transaction basics and integrity"
      ]
    },
    {
      icon: "network",
      title: "Networking & APIs",
      items: [
        "TCP/IP, HTTP/HTTPS, DNS",
        "REST APIs, status codes, webhooks"
      ]
    },
    {
      icon: "palette",
      title: "Professional Practice",
      items: [
        "Git workflows and pull requests",
        "Technical documentation and runbooks"
      ]
    }
  ],
  skills: [
    {
      title: "Programming Languages",
      items: ["TypeScript", "JavaScript", "PHP", "SQL"]
    },
    {
      title: "Web Technologies & Frameworks",
      items: ["React", "Next.js", "Express", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Databases & Storage",
      items: ["PostgreSQL", "MySQL", "Redis", "Supabase"]
    },
    {
      title: "DevOps, CI/CD & Systems",
      items: ["Linux", "Git", "GitHub Actions", "Docker basics", "Vercel", "Render"]
    }
  ],
  currentFocus: [
    "Backend APIs with asynchronous job queues",
    "Database design and tenant isolation",
    "Scheduling constraints (EduCore Ratiba / FET)"
  ]
};
