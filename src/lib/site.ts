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
    stack: ["React", "Vite", "Node.js", "Express", "Supabase PostgreSQL", "JWT / sessions", "RBAC", "Tailwind CSS"],
    problem:
      "Schools need enrollment, fee collection, academics, and parent communication across campuses without one school's data leaking into another.",
    users: ["School administrators & principals", "Teachers & academic staff", "Bursars & finance teams", "Parents (where enabled)"],
    architecture: [
      { layer: "Frontend", detail: "React + Vite SPA with role-aware views and mobile-friendly layouts for school staff." },
      { layer: "API", detail: "Node.js / Express REST API with JWT-style sessions and school-scoped authorization." },
      { layer: "Data", detail: "Supabase PostgreSQL + storage; tenant boundaries keyed by school_id." },
      { layer: "Payments", detail: "Paystack / M-Pesa integration points with webhook-oriented fee posting patterns." }
    ],
    architectureSummary: "React (Vercel) → Express (Render) → Supabase PostgreSQL, isolated by school_id.",
    engineeringChallenge:
      "Enforcing tenant isolation and payment webhook retries without double-crediting — documented with in-repo security notes and health endpoints.",
    result: "Live multi-tenant education SaaS case study with fees, academics, and RBAC.",
    metrics: [
      { value: "Live", label: "Public demo" },
      { value: "school_id", label: "Tenant key" },
      { value: "CI", label: "GitHub Actions" }
    ],
    liveDemoUrl: "https://educore-school-management-system-pi.vercel.app",
    repoUrl: "https://github.com/Muregis/educore-school-management-system",
    image: "/images/projects/educore.jpg",
    imageAlt: "EduCore school management dashboard.",
    accent: "from-cyan-400/80 via-sky-500/70 to-blue-600/80",
    highlights: ["Multi-tenant isolation by school_id", "RBAC for school staff roles", "Fees and payment gateway hooks", "Health / readiness ops endpoints"]
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
    stack: ["React", "Vite", "Node.js", "Express", "MySQL", "Redis", "BullMQ", "Jest / Supertest"],
    problem:
      "SMEs and SACCOs lose pipeline visibility when deals live in WhatsApp and spreadsheets — without shared roles, tenant boundaries, or async reporting.",
    users: ["Sales teams & managers", "SME / SACCO operators", "Land brokers & commercial staff", "Small legal practices"],
    architecture: [
      { layer: "API & auth", detail: "Express REST API with JWT, RBAC, and tenant_id scoping." },
      { layer: "Data", detail: "MySQL 8 in production patterns; SQLite fallback for local/CI." },
      { layer: "Jobs", detail: "BullMQ + Redis: enqueue reports → worker → status / result API." },
      { layer: "Vertical modules", detail: "Land parcels, commercial quotes/invoices, legal matters, analytics hooks." }
    ],
    architectureSummary: "React → Express → MySQL with BullMQ workers; Jest suite + GitHub Actions CI.",
    engineeringChallenge:
      "Tenant isolation and async jobs under test — CI fails when no tests are discovered.",
    result: "Flagship engineering system with documented architecture and expanding tests; production rollout is phased.",
    metrics: [
      { value: "BullMQ", label: "Async jobs" },
      { value: "RBAC", label: "Role guards" },
      { value: "CI", label: "Strict test job" }
    ],
    repoUrl: "https://github.com/Muregis/Core-Crm-model",
    image: "/images/projects/core-crm.jpg",
    imageAlt: "Core CRM pipeline dashboard.",
    accent: "from-sky-300/80 via-blue-500/70 to-indigo-600/80",
    highlights: ["Tenant-scoped CRM resources", "BullMQ report workflow", "Jest + Supertest on main", "Land / commercial / legal modules"]
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
    stack: ["PHP 8", "MySQL / PostgreSQL", "FET (fet-cl)", "Dompdf", "Composer"],
    problem:
      "Administrators spend days building term timetables; shared teachers and labs collide under KICD grade-band rules.",
    users: ["Academic deans & deputies", "Timetabling committees", "Department heads", "Subject teachers"],
    architecture: [
      { layer: "Application", detail: "PHP 8 admin UI with multi-school isolation and PDO access." },
      { layer: "Solver", detail: "Whole-school FET XML generation and safe proc_open execution of fet-cl." },
      { layer: "Clash rules", detail: "ClashDetector for pre-flight, post-gen, and manual edit validation." },
      { layer: "Export", detail: "PDF / print export via Dompdf." }
    ],
    architectureSummary: "PHP + FET with pure-PHP clash unit tests and GitHub Actions CI.",
    engineeringChallenge:
      "Proving teacher/room/class conflict rules without production school data; live quality still depends on configuration.",
    result: "Live demo plus automated clash and FET diagnostic tests.",
    metrics: [
      { value: "Live", label: "Public demo" },
      { value: "Tests", label: "Clash + FET CI" },
      { value: "CBC", label: "Band templates" }
    ],
    liveDemoUrl: "https://educoreratiba.vercel.app",
    repoUrl: "https://github.com/Muregis/Educore-Ratiba",
    image: "/images/projects/educore-ratiba.jpg",
    imageAlt: "EduCore Ratiba schedule matrix.",
    accent: "from-teal-400/80 via-cyan-500/70 to-blue-600/80",
    highlights: ["FET whole-school generation", "Teacher / room / class clash detection", "Pre-flight workload checks", "CI-run automated tests"]
  },
  {
    slug: "livestock-management",
    title: "Livestock Management",
    tagline: "AgriTech operations MVP",
    summary:
      "Prototype for livestock records, health views, and tasks — product exploration, not a finished commercial system.",
    tag: "MVP · AgriTech",
    isFlagship: false,
    status: "Live",
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    problem: "Farms often track animals and tasks informally, making shared follow-up hard.",
    users: ["Farm owners", "Herd managers", "Field staff"],
    architecture: [
      { layer: "Frontend", detail: "React + TypeScript UI for dashboards, health views, and tasks." },
      { layer: "Data", detail: "Relational model sketched in-repo for animals, health, and tasks." }
    ],
    architectureSummary: "React MVP with optional MySQL patterns documented in-repo.",
    engineeringChallenge: "Honest MVP scope without over-claiming production hardening.",
    result: "Supporting portfolio project showing frontend breadth and agritech interest.",
    metrics: [
      { value: "MVP", label: "Scope" },
      { value: "Live", label: "Demo" }
    ],
    liveDemoUrl: "https://livestock-management-app.vercel.app",
    repoUrl: "https://github.com/Muregis/Livestock-Management-App",
    image: "/images/projects/stockcore.jpg",
    imageAlt: "Livestock management dashboard.",
    accent: "from-lime-300/80 via-green-500/70 to-emerald-700/80",
    highlights: ["Animal and health-oriented UI", "Task management views", "Honest MVP positioning"]
  },
  {
    slug: "sawa-solar",
    title: "Sawa Solar Solution",
    tagline: "Commercial clean-energy website",
    summary: "Marketing site for a Nairobi solar provider — showcase and lead capture.",
    tag: "Client · Web",
    isFlagship: false,
    status: "Live",
    stack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    problem: "A solar installer needed a fast, mobile-friendly online presence.",
    users: ["Residential & commercial prospects", "Sales staff"],
    architecture: [{ layer: "Site", detail: "Static, mobile-first pages tuned for Kenyan mobile networks." }],
    architectureSummary: "Lightweight static site on Vercel.",
    engineeringChallenge: "Light assets for variable 3G/4G connectivity.",
    result: "Public marketing site with clear inquiry CTAs.",
    metrics: [{ value: "Live", label: "Demo" }],
    liveDemoUrl: "https://sawa-solar-solution-website.vercel.app",
    repoUrl: "https://github.com/Muregis/Sawa-solar--solution-website",
    image: "/images/projects/sawa-solar.jpg",
    imageAlt: "Solar panels representing Sawa Solar.",
    accent: "from-amber-300/80 via-orange-400/70 to-orange-600/70",
    highlights: ["Mobile-first layout", "Lead-oriented CTAs"]
  },
  {
    slug: "school-website",
    title: "Gracious Love Academy",
    tagline: "School information website",
    summary: "Public academy site for curriculum, admissions information, and notices.",
    tag: "Client · Web",
    isFlagship: false,
    status: "Live",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem: "The school needed one place for parents to find fees, admissions, and notices.",
    users: ["Parents", "School admin"],
    architecture: [{ layer: "Site", detail: "Multi-page responsive informational site." }],
    architectureSummary: "Static institutional website.",
    engineeringChallenge: "Clear hierarchy for smartphone users.",
    result: "Standard school information available without phone tag.",
    metrics: [{ value: "Live", label: "Demo" }],
    liveDemoUrl: "https://graciousloveacademy-school-website.vercel.app",
    repoUrl: "https://github.com/Muregis/School-Website",
    image: "/images/projects/school-site.jpg",
    imageAlt: "School website campus information.",
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
  { year: "2023", event: "Enrolled in Diploma Level 6 Computer Science at Kiambu National Polytechnic" },
  { year: "2024", event: "Founded MuregiScore Technologies to build software for Kenyan schools and SMEs" },
  { year: "2025–2026", event: "Shipped EduCore, Core CRM, and EduCore Ratiba with tests, CI, and public demos" },
  { year: "2026+", event: "Applying for junior full-stack, backend, and product engineering roles" }
];

export const values = [
  {
    title: "Evidence over slogans",
    text: "Document what works, what is MVP, and what needs ops setup — then back it with tests and demos.",
    icon: "shield"
  },
  {
    title: "Tenant boundaries",
    text: "Multi-tenant products fail closed: school_id / tenant_id scoping is a first-class design concern.",
    icon: "rocket"
  },
  {
    title: "Local market fit",
    text: "KES, M-Pesa patterns, CBC/8-4-4, and intermittent connectivity shape real product decisions.",
    icon: "grad"
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
  { title: "Frontend Engineering", items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "Responsive UI"] },
  { title: "Backend & API Architecture", items: ["Node.js", "Express", "PHP", "RESTful APIs", "Webhooks", "Input Validation"] },
  { title: "Databases & Data Integrity", items: ["PostgreSQL", "MySQL", "Schema Design", "Indexing", "Audit Logging"] },
  { title: "Security & Access Control", items: ["JWT Authentication", "RBAC", "Session patterns", "Tenant isolation"] },
  { title: "Queues & Async", items: ["BullMQ", "Redis", "Background workers", "Idempotent payment patterns"] },
  { title: "Testing & DevOps", items: ["Jest / Supertest", "GitHub Actions", "Docker basics", "Vercel", "Render"] },
  { title: "Product & Payments", items: ["M-Pesa Daraja patterns", "Paystack hooks", "Kenyan market workflows"] }
];

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
  period: "2023 – Present (expected 2026)",
  coursework: [
    "Programming Fundamentals",
    "Data Structures & Algorithms",
    "Database Management Systems (RDBMS)",
    "Software Engineering & SDLC",
    "Web Application Development",
    "Computer Networks & Protocols",
    "System Analysis & Design",
    "Operating Systems (Linux/Windows)"
  ]
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
  badge: "Diploma Level 6 Student · Kiambu National Polytechnic",
  bio: "Computer Science student building a foundation in software engineering, databases, networking, and systems — while shipping real systems through MuregiScore Technologies.",
  focusAreas: [
    {
      icon: "code",
      title: "Core Computer Science",
      items: [
        "Operating systems — Linux/Windows administration, shell scripting, process lifecycle",
        "Computer organisation & architecture — CPU operations, memory hierarchy, caching",
        "Mathematics for computing — discrete math, propositional logic, relational algebra"
      ]
    },
    {
      icon: "wrench",
      title: "Software Engineering & SDLC",
      items: [
        "Programming paradigms — OOP and TypeScript/JavaScript practice",
        "Algorithms & data structures — trees, graphs, sorting, hash maps, complexity analysis",
        "System analysis & requirements — modeling workflows and architectural design"
      ]
    },
    {
      icon: "brain",
      title: "Databases & Data Management",
      items: [
        "Relational database design — normalisation, PostgreSQL, MySQL",
        "Query optimization — indexing strategies, foreign key constraints",
        "Transaction basics and data integrity"
      ]
    },
    {
      icon: "network",
      title: "Networking & Distributed Systems",
      items: [
        "Network fundamentals — TCP/IP stack, DNS, HTTP/HTTPS",
        "API architecture — REST principles, status codes, webhooks"
      ]
    },
    {
      icon: "palette",
      title: "Professional Engineering Practice",
      items: [
        "Version control & workflows — Git branching, pull requests",
        "Technical documentation — architecture notes and API docs"
      ]
    }
  ],
  skills: [
    {
      title: "Programming Languages",
      items: ["TypeScript", "JavaScript", "PHP", "Python", "SQL"]
    },
    {
      title: "Web Technologies & Frameworks",
      items: ["React", "Next.js", "Express", "Node.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Databases & Storage",
      items: ["PostgreSQL", "MySQL", "Redis (caching/queues)", "Supabase"]
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
