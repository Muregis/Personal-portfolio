/**
 * Central site configuration & content.
 *
 * Shared by server-rendered pages and interactive islands.
 * Keep this module free of JSX so both can import it safely.
 */

export const site = {
  name: "Victor Muregi",
  brand: "MuregiScore Technologies",
  tagline: "Reliable web software, systems & payment solutions for Kenyan institutions",
  role: "Full-Stack Software Engineer & Founder",
  location: "Nairobi, Kenya",
  // Stable public deployment. Override per environment with NEXT_PUBLIC_SITE_URL.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://personal-portfolio-muregis-projects.vercel.app",
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
    { label: "Academic", href: "/academic" },
    { label: "Contact", href: "/#contact" }
  ]
};

/** Rotating headline phrases (hero). */
export const roles = [
  "Full-Stack Software Engineer · React · Node/Express · PostgreSQL",
  "Founder & Lead Engineer at MuregiScore Technologies",
  "Building robust systems: RBAC · Queues · APIs · M-Pesa Rails",
  "Creator of EduCore, Core CRM & EduCore Ratiba",
  "Computer Science at Kiambu National Polytechnic"
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
    tagline: "Comprehensive School Management & Academic Operations System",
    summary:
      "Multi-tenant school operations platform powering student records, CBC grading, automated term report cards, fee tracking, and M-Pesa Daraja payment reconciliation.",
    tag: "Flagship · School Management System",
    isFlagship: true,
    status: "Live",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "M-Pesa Daraja API",
      "JWT Auth",
      "RBAC",
      "Tailwind CSS"
    ],
    problem:
      "Kenyan secondary and primary schools struggle with paper-heavy administration, delayed fee reconciliation, fragmented student records, and error-prone term report-card compilation that consumes days of teacher time.",
    users: [
      "School Principals & Headteachers",
      "Academic Deans & Subject Teachers",
      "School Bursars & Accountants",
      "Parents & Guardians"
    ],
    architecture: [
      {
        layer: "Frontend Client",
        detail:
          "React SPA with TypeScript, role-tailored dashboard views, local storage caching for offline marks entry, and mobile-first responsive layout optimized for low-bandwidth school networks."
      },
      {
        layer: "API Gateway & RBAC",
        detail:
          "RESTful Node.js/Express API enforcing 5-tier Role-Based Access Control (Admin, Principal, Teacher, Bursar, Parent) with JWT authentication and strict input validation schemas."
      },
      {
        layer: "Relational Data Layer",
        detail:
          "PostgreSQL with normalized schemas, foreign-key cascade integrity, financial transaction audit tables, and indexed queries for fast grade rollups."
      },
      {
        layer: "Payment & Webhook Ingestion",
        detail:
          "Safaricom M-Pesa Daraja STK Push and C2B callback handlers with idempotent transaction logging to guarantee zero double-crediting during network timeouts."
      }
    ],
    architectureSummary:
      "Client-server architecture on React, Node/Express REST API, and PostgreSQL with M-Pesa Daraja webhook ingestion and role-gated endpoints.",
    engineeringChallenge:
      "Handling M-Pesa webhook callbacks under intermittent Kenyan mobile network conditions. Created an idempotent transaction verification pipeline with database transactions to ensure fee receipts are never duplicated, alongside asynchronous batch PDF report-card generation that avoids event-loop blocking during end-of-term surges.",
    result:
      "Eliminated paper report-card compilation time by over 80%, automated real-time fee payment reconciliation against student ledgers, and provided instant parental notification.",
    metrics: [
      { value: "80%", label: "Faster Report Cards" },
      { value: "100%", label: "Ledger Reconciliation" },
      { value: "5", label: "RBAC Access Tiers" }
    ],
    liveDemoUrl: "https://educore-school-management-system-pi.vercel.app",
    repoUrl: "https://github.com/Muregis/educore-school-management-system",
    image: "/images/projects/educore.jpg",
    imageAlt:
      "EduCore school management dashboard showing student records, fees, and academic modules.",
    accent: "from-cyan-400/80 via-sky-500/70 to-blue-600/80",
    highlights: [
      "Idempotent M-Pesa Daraja payment callbacks",
      "Automated CBC report-card generator",
      "Granular 5-tier Role-Based Access Control",
      "PostgreSQL transaction integrity for student fees"
    ]
  },
  {
    slug: "core-crm",
    title: "Core CRM",
    tagline: "Sales Pipeline, Customer Intelligence & Operations CRM",
    summary:
      "Enterprise customer relationship management platform built for Kenyan SMEs to manage sales pipelines, track omni-channel interactions, and automate follow-ups with role-based access control.",
    tag: "Flagship · CRM & Sales Engine",
    isFlagship: true,
    status: "Live",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "RBAC",
      "Tailwind CSS"
    ],
    problem:
      "Growing Kenyan businesses and sales teams lose track of customer inquiries, deals, and payment agreements when customer data is scattered across personal WhatsApp threads, spreadsheets, and notebooks without accountability.",
    users: [
      "Sales Representatives",
      "Operations Managers",
      "Business Founders",
      "Customer Success Teams"
    ],
    architecture: [
      {
        layer: "Frontend Application",
        detail:
          "Interactive Kanban sales pipeline, customer activity timeline, deal forecasting views, and contact search built with React & TypeScript."
      },
      {
        layer: "API & RBAC Layer",
        detail:
          "Express.js REST API with hierarchical Role-Based Access Control separating manager, executive, and account rep access boundaries."
      },
      {
        layer: "Database Engine",
        detail:
          "PostgreSQL relational schema modeling organizations, contacts, deals, activities, and communication logs with query optimization."
      },
      {
        layer: "Workflow Automation",
        detail:
          "Automated trigger pipelines for stage transitions, overdue deal alerts, and scheduled reminder queues."
      }
    ],
    architectureSummary:
      "Modular REST API with granular RBAC, relational audit logging in PostgreSQL, and real-time deal pipeline state transitions.",
    engineeringChallenge:
      "Designing a scalable multi-user permission model where sales reps only see assigned prospects while administrators inspect organizational-wide pipeline metrics, alongside maintaining sub-50ms query latency across relational join queries on extensive customer interaction histories.",
    result:
      "Streamlined deal stages from initial lead capture to contract closure, providing business owners full visibility into pipeline velocity and conversion bottlenecks.",
    metrics: [
      { value: "100%", label: "Pipeline Visibility" },
      { value: "4", label: "Permission Tiers" },
      { value: "<50ms", label: "Query Response Time" }
    ],
    liveDemoUrl: "https://github.com/Muregis/Core-Crm-model",
    repoUrl: "https://github.com/Muregis/Core-Crm-model",
    image: "/images/projects/core-crm.jpg",
    imageAlt:
      "Core CRM sales pipeline dashboard showing deal stages, contact activity, and conversion metrics.",
    accent: "from-sky-300/80 via-blue-500/70 to-indigo-600/80",
    highlights: [
      "Visual Kanban deal pipeline with drag-and-drop",
      "Hierarchical RBAC data isolation",
      "Activity timeline with unified contact histories",
      "Optimized PostgreSQL relational queries"
    ]
  },
  {
    slug: "educore-ratiba",
    title: "EduCore Ratiba",
    tagline: "Constraint-Driven Academic Timetabling & Schedule Optimization Engine",
    summary:
      "Intelligent academic timetable generation engine that solves the multi-constraint scheduling problem for Kenyan secondary schools, colleges, and polytechnics — eliminating teacher clashes and room collisions.",
    tag: "Flagship · Scheduling & Constraint Engine",
    isFlagship: true,
    status: "Live",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Algorithms (CSP)",
      "PostgreSQL",
      "Export Engines (PDF)"
    ],
    problem:
      "Every academic term, school administrators spend days manually constructing timetables. Balancing teacher workloads, shared science laboratories, double periods, subject quotas, and room capacities without collision is mathematically difficult and prone to disruptive manual errors.",
    users: [
      "Academic Deans & Deputy Principals",
      "Timetabling Committees",
      "Department Heads",
      "Subject Teachers"
    ],
    architecture: [
      {
        layer: "Constraint Engine",
        detail:
          "Constraint Satisfaction Problem (CSP) solver utilizing heuristic backtracking and forward-checking to allocate time slots and physical rooms."
      },
      {
        layer: "Constraint Rule Matrix",
        detail:
          "Configurable hard constraints (no teacher double-booking, room capacity bounds) and soft constraints (teacher preferred times, balanced daily workload)."
      },
      {
        layer: "User Interface",
        detail:
          "Interactive grid view with instant conflict highlighting, drag-and-drop manual adjustments, and live validation checks."
      },
      {
        layer: "Export & Sync Pipeline",
        detail:
          "Automated generation of printable master school timetables, class-specific schedules, and individual teacher allocation cards."
      }
    ],
    architectureSummary:
      "Heuristic constraint-satisfaction engine integrated with an interactive React grid and automated export pipeline.",
    engineeringChallenge:
      "Formulating the combinatorial timetabling problem to prevent state-space explosion for large multi-stream schools (e.g. 40 streams across 8 subjects). Implemented heuristic ordering (Most Constrained Variable first) and constraint propagation to produce valid conflict-free timetables in under 3 seconds.",
    result:
      "Reduced timetable generation cycle from 4–5 days of tedious manual drafting to under 3 seconds of automated computation with verified zero room/teacher clashes.",
    metrics: [
      { value: "<3s", label: "Generation Time" },
      { value: "0", label: "Schedule Collisions" },
      { value: "100%", label: "Lab Constraint Compliance" }
    ],
    liveDemoUrl: "https://educoreratiba.vercel.app",
    repoUrl: "https://github.com/Muregis/Educore-Ratiba",
    image: "/images/projects/educore-ratiba.jpg",
    imageAlt:
      "EduCore Ratiba automated schedule generation matrix showing clash-free class and teacher periods.",
    accent: "from-teal-400/80 via-cyan-500/70 to-blue-600/80",
    highlights: [
      "Constraint Satisfaction Problem (CSP) heuristic solver",
      "Zero teacher and laboratory double-booking guarantee",
      "Multi-stream class timetable generation in < 3 seconds",
      "One-click export to printable schedules & EduCore sync"
    ]
  },
  {
    slug: "sawa-solar",
    title: "Sawa Solar Solution",
    tagline: "Commercial Clean-Energy Web Platform",
    summary:
      "Commercial website and customer acquisition portal for a Nairobi solar-energy provider featuring system sizing calculators, project gallery, and lead generation.",
    tag: "Commercial Web Platform",
    isFlagship: false,
    status: "Live",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    problem:
      "A growing solar installation firm needed a fast, mobile-friendly online presence to showcase completed installations and convert residential and commercial inquiries into qualified sales leads.",
    users: [
      "Commercial & Residential Solar Customers",
      "Sales Representatives",
      "Company Management"
    ],
    architecture: [
      {
        layer: "Client Interface",
        detail:
          "Mobile-first semantic layout optimized for fast rendering on Kenyan mobile networks (3G/4G)."
      },
      {
        layer: "Interactive Tools",
        detail:
          "Client-side solar package estimator and WhatsApp direct lead-dispatch bridge."
      }
    ],
    architectureSummary:
      "Lightweight static web architecture tuned for minimal bandwidth consumption and high mobile conversion.",
    engineeringChallenge:
      "Optimizing asset delivery and media assets for mobile users with variable cellular connectivity, ensuring sub-second visual load times without heavy external libraries.",
    result:
      "Boosted customer inquiry conversion through instant WhatsApp quoting and established an authoritative digital presence for the company.",
    metrics: [
      { value: "100%", label: "Mobile Responsive" },
      { value: "<1s", label: "First Contentful Paint" }
    ],
    liveDemoUrl: "https://sawa-solar-solution-website.vercel.app",
    repoUrl: "https://github.com/Muregis/Sawa-solar--solution-website",
    image: "/images/projects/sawa-solar.jpg",
    imageAlt:
      "Solar panels outdoors in bright sunlight, representing the Sawa Solar company website.",
    accent: "from-amber-300/80 via-orange-400/70 to-orange-600/70",
    highlights: [
      "Lightweight mobile-first responsive architecture",
      "Direct WhatsApp sales quotation dispatch",
      "Optimized media compression for fast 3G loading"
    ]
  },
  {
    slug: "school-website",
    title: "Gracious Love Academy",
    tagline: "Educational Institution Web Platform",
    summary:
      "Public portal for a Kenyan educational academy providing curriculum guidelines, admissions intake workflows, school events, and administrative notice board.",
    tag: "Institutional Web Platform",
    isFlagship: false,
    status: "Live",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Layouts"],
    problem:
      "The school lacked a centralized digital presence for prospective parents seeking fee structures, admission criteria, and academic notices, leading to overwhelmed administrative phone lines.",
    users: [
      "Prospective & Current Parents",
      "School Administrators",
      "Community Members"
    ],
    architecture: [
      {
        layer: "Web Presentation",
        detail:
          "Responsive multi-page platform with admission brochures, program catalogs, and photo galleries."
      },
      {
        layer: "Admissions Inquiries",
        detail:
          "Structured intake forms routing prospective student information directly to school bursary staff."
      }
    ],
    architectureSummary:
      "Static web portal designed for ease of maintenance, accessible navigation, and rapid admission information retrieval.",
    engineeringChallenge:
      "Structuring clear content hierarchy and mobile accessibility so parents browsing from entry-level smartphones could quickly find fee breakdowns, term dates, and admission forms.",
    result:
      "Streamlined term intake inquiries and eliminated recurring repetitive phone inquiries by publishing standardized school information.",
    metrics: [
      { value: "24/7", label: "Admissions Access" },
      { value: "0", label: "Broken Links" }
    ],
    liveDemoUrl: "https://graciousloveacademy-school-website.vercel.app",
    repoUrl: "https://github.com/Muregis/School-Website",
    image: "/images/projects/school-site.jpg",
    imageAlt:
      "Gracious Love Academy school website showing campus information, admission guides, and notices.",
    accent: "from-emerald-300/80 via-teal-500/70 to-cyan-700/80",
    highlights: [
      "Admissions intake workflow and downloadable curriculum guides",
      "Mobile-optimized layout for parents on smartphones",
      "Fast-loading static architecture on Vercel"
    ]
  },
  {
    slug: "livestock-management",
    title: "Livestock Management Platform",
    tagline: "Agricultural Animal Records & Veterinary Health Tracking",
    summary:
      "Specialized agricultural software for tracking livestock health history, breeding cycles, milk yield logs, and feed inventory for Kenyan farming enterprises.",
    tag: "AgriTech Application",
    isFlagship: false,
    status: "Live",
    stack: ["TypeScript", "React", "Node.js", "Relational Database", "Tailwind CSS"],
    problem:
      "Livestock and dairy farmers face yield loss due to unrecorded vaccination schedules, untracked pedigree lineages, and ad-hoc feed expenditure tracking.",
    users: ["Farm Owners", "Herd Managers", "Veterinary Officers"],
    architecture: [
      {
        layer: "Animal Registry",
        detail:
          "Tag-based animal profile management with lineage and breeding histories."
      },
      {
        layer: "Health & Yield",
        detail:
          "Daily production logs, automated vaccination schedule alerts, and medical treatment records."
      }
    ],
    architectureSummary:
      "Data-centric application tracking animal lifecycles, health interventions, and milk production yields.",
    engineeringChallenge:
      "Designing normalized relational entities capable of modeling recursive breeding lineages and daily milk production time series without data duplication.",
    result:
      "Provided farmers with clear herd health alerts, preventing missed booster vaccines and improving production forecasting.",
    metrics: [
      { value: "100%", label: "Vaccination Audit Trail" },
      { value: "Daily", label: "Milk Production Logs" }
    ],
    liveDemoUrl: "https://livestock-management-app.vercel.app",
    repoUrl: "https://github.com/Muregis/Livestock-Management-App",
    image: "/images/projects/stockcore.jpg",
    imageAlt:
      "Livestock Management Platform tracking animal tag records, milk production logs, and veterinary history.",
    accent: "from-violet-400/80 via-purple-500/70 to-indigo-700/80",
    highlights: [
      "Tag-based animal lifecycle and pedigree tracking",
      "Automated vaccination and medical alerts",
      "Daily milk yield and production time-series tracking"
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export const stats = [
  { value: "15+", label: "Delivered Systems & Projects" },
  { value: "3+", label: "Production Flagship Products" },
  { value: "100%", label: "M-Pesa Webhook Reliability" },
  { value: "2024", label: "Founded MuregiScore" }
];

export const journey = [
  { year: "2022", event: "Wrote first software programs and founded development practice in Python & JavaScript" },
  { year: "2023", event: "Enrolled in Diploma Level 6 Computer Science at Kiambu National Polytechnic" },
  { year: "2024", event: "Founded MuregiScore Technologies to build sustainable software for Kenyan institutions" },
  { year: "2025–2026", event: "Architected and shipped EduCore, Core CRM, and EduCore Ratiba with production M-Pesa Daraja payment workflows" }
];

export const values = [
  {
    title: "Production-First Engineering",
    text: "I build systems for real operational constraints: network instability, transactional audits, and strict role security.",
    icon: "shield"
  },
  {
    title: "Architectural Discipline",
    text: "From normalized relational schemas to clean RESTful APIs and job queues, I treat software as long-lived engineering assets.",
    icon: "rocket"
  },
  {
    title: "African Context & Scalability",
    text: "Designing dependable, affordable software tailored to Kenyan schools, businesses, and mobile payment ecosystems.",
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
    role: "Founder & Lead Software Engineer",
    company: "MuregiScore Technologies",
    description:
      "Founded a software engineering firm delivering production institutional software for Kenyan schools and commercial enterprises. Architected EduCore (school management & CBC report card engine), Core CRM (pipeline tracking & client operations), and EduCore Ratiba (constraint-satisfaction academic timetabler). Implemented production Safaricom M-Pesa Daraja STK Push and C2B payment integrations with idempotent webhook transaction ledgers.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "M-Pesa Daraja API",
      "RBAC",
      "Queues"
    ]
  },
  {
    period: "2023 – Present",
    role: "Freelance Full-Stack Developer",
    company: "Client Contracts & Engineering Solutions",
    description:
      "Delivered 15+ web applications, commercial portals, and operational databases for businesses, educational institutions, and agricultural ventures. Designed REST APIs, engineered responsive mobile-first user interfaces, and configured reliable production hosting on Linux, Vercel, and Railway.",
    tags: [
      "React",
      "TypeScript",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "CI/CD"
    ]
  },
  {
    period: "2023 – Present",
    role: "Computer Science Student (Diploma Level 6)",
    company: "Kiambu National Polytechnic",
    description:
      "Comprehensive formal curriculum in Computer Science covering software engineering, relational database management systems, algorithms and data structures, computer networks, operating systems (Linux/Windows), and systems analysis.",
    tags: [
      "Software Engineering",
      "Data Structures",
      "Database Systems",
      "Operating Systems",
      "Networks"
    ]
  }
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
      "State Management",
      "HTML5 / CSS3",
      "Web Performance"
    ]
  },
  {
    title: "Backend & API Architecture",
    items: [
      "Node.js",
      "Express",
      "PHP",
      "RESTful APIs",
      "API Versioning",
      "Webhooks",
      "Input Validation",
      "Error Handling"
    ]
  },
  {
    title: "Databases & Data Integrity",
    items: [
      "PostgreSQL",
      "MySQL",
      "Schema Design",
      "Relational Normalization",
      "ACID Transactions",
      "Indexing & Query Optimization",
      "Audit Logging"
    ]
  },
  {
    title: "Security & Access Control (RBAC)",
    items: [
      "JWT Authentication",
      "Session Management",
      "Bcrypt Password Hashing",
      "Role-Based Access Control (RBAC)",
      "Middleware Authorization",
      "Data Isolation"
    ]
  },
  {
    title: "Queues & Asynchronous Processing",
    items: [
      "Background Job Queues",
      "Redis / BullMQ Concepts",
      "Asynchronous Worker Handlers",
      "Idempotent Payment Processing",
      "Batch PDF Generation"
    ]
  },
  {
    title: "Testing, CI/CD & DevOps",
    items: [
      "Unit & Integration Testing",
      "GitHub Actions CI/CD",
      "Automated Linting & Typecheck",
      "Git / GitHub Workflow",
      "Linux (Ubuntu) CLI",
      "Nginx",
      "Docker Basics",
      "Vercel & Railway Deployment"
    ]
  },
  {
    title: "Product Engineering & Payments",
    items: [
      "Safaricom M-Pesa Daraja (STK Push, C2B, B2C)",
      "Webhook Verification",
      "Offline / Low-Bandwidth Resilience",
      "User-Centric Architecture",
      "Kenyan Market Fit"
    ]
  }
];

/** Day-to-day stack (shown as chips — grounded, verified competencies). */
export const proficiency = [
  "React & TypeScript frontends",
  "Node.js & Express REST APIs",
  "PHP & backend integrations",
  "PostgreSQL & MySQL database design",
  "Authentication & Role-Based Access Control (RBAC)",
  "Background queues & async job processing",
  "M-Pesa Daraja STK Push & C2B callbacks",
  "Automated CI/CD & production deployments"
];

export const products = [
  {
    name: "EduCore",
    text: "Comprehensive School Management — student records, CBC grading, automated term report cards, fee tracking, and M-Pesa Daraja payment reconciliation. Flagship product."
  },
  {
    name: "Core CRM",
    text: "Sales Pipeline & Operations CRM — contact histories, Kanban deal tracking, multi-tier RBAC, and client communication workflows."
  },
  {
    name: "EduCore Ratiba",
    text: "Academic Timetable Engine — constraint-satisfaction heuristic optimization allocating teachers, streams, and laboratories with zero scheduling collisions."
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

export const testimonials: {
  quote: string;
  name: string;
  role: string;
}[] = [];

export const faqs = [
  {
    q: "What is your core technology stack?",
    a: "React and TypeScript on the frontend; Node.js, Express, and PHP on the backend; PostgreSQL and MySQL for relational data; and the Safaricom M-Pesa Daraja API for payment workflows. I write tested, maintainable code with strict type-safety and deploy using automated GitHub Actions pipelines to Vercel and Linux servers."
  },
  {
    q: "How do you handle authentication and access control (RBAC)?",
    a: "I implement secure authentication using Bcrypt hashing with either JWT tokens or HTTP-only session cookies. Authorization uses granular Role-Based Access Control (RBAC) middleware where permissions are verified at both the route and database query levels to guarantee multi-tenant data isolation."
  },
  {
    q: "How do you make M-Pesa payment integrations resilient?",
    a: "M-Pesa integrations use Safaricom's Daraja API with STK Push for real-time customer billing and C2B for paybill deposits. Webhook callbacks are processed through an idempotent transaction verification pipeline backed by database transactions to guarantee payments are never double-credited, even under network retries."
  },
  {
    q: "How do you optimize performance for slower Kenyan mobile networks?",
    a: "I architect applications with static page pre-rendering (SSG), compressed modern image formats (WebP/AVIF), minimal JavaScript client boundaries, and responsive layouts that function reliably on entry-level Android devices and 3G/4G cellular connections."
  },
  {
    q: "Are you available for contract or full-time software engineering roles?",
    a: "Yes. I am available for software engineering roles, product development contracts, and architectural consulting. I bring hands-on experience building, testing, and deploying real institutional software."
  }
];

export const academic = {
  badge: "Diploma Level 6 Student · Kiambu National Polytechnic",
  bio: "Computer Science student building a rigorous foundation in software engineering, database systems, computer networking, and system architecture — while actively shipping production software through MuregiScore Technologies.",
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
        "Programming paradigms — OOP, functional programming in TypeScript, Java, Python",
        "Algorithms & data structures — trees, graphs, sorting, hash maps, complexity analysis",
        "System analysis & requirements — modeling workflows, UML diagrams, architectural design"
      ]
    },
    {
      icon: "brain",
      title: "Databases & Data Management",
      items: [
        "Relational database design — 3NF normalisation, ACID compliance, PostgreSQL, MySQL",
        "Query optimization — indexing strategies, execution plans, foreign key constraints",
        "Transaction isolation — preventing race conditions and concurrency anomalies"
      ]
    },
    {
      icon: "network",
      title: "Networking & Distributed Systems",
      items: [
        "Network fundamentals — TCP/IP stack, DNS, HTTP/HTTPS, WebSockets",
        "API architecture — REST principles, status codes, payload serialization, webhooks"
      ]
    },
    {
      icon: "palette",
      title: "Professional Engineering Practice",
      items: [
        "Version control & workflows — Git branching, pull requests, semantic commit history",
        "Technical documentation — architectural specifications, API documentation, runbooks"
      ]
    }
  ],
  skills: [
    {
      title: "Programming Languages",
      items: ["TypeScript", "JavaScript", "PHP", "Python", "Java", "C++", "SQL"]
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
      items: ["Linux", "Git", "GitHub Actions", "Docker basics", "Vercel", "Railway"]
    }
  ],
  currentFocus: [
    "Scaling distributed backend APIs with asynchronous job queues",
    "Deepening database concurrency control and query performance",
    "Formal algorithms for optimization problems (like EduCore Ratiba CSP)"
  ]
};
