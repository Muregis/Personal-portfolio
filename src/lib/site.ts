/**
 * Central site configuration & content.
 *
 * Shared by server-rendered pages and the small interactive islands.
 * Keep this module free of JSX so both can import it safely.
 */

export const site = {
  name: "Victor Muregi",
  brand: "MuregiScore Technologies",
  tagline: "Scoring Solutions, Empowering Africa",
  role: "Full-Stack Developer",
  location: "Nairobi, Kenya",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://victormuregi.dev",
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
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" }
  ]
};

/** Rotating headline phrases (hero). */
export const roles = [
  "Building solutions for Africa",
  "Full-stack developer · Java · Python · C++ · React",
  "Founder of MuregiScore Technologies",
  "M-Pesa Daraja integration specialist",
  "Computer science student, Kiambu National Polytechnic"
];

export interface Project {
  title: string;
  summary: string;
  stack: string[];
  status: "Live" | "Enterprise" | "In Development";
  href?: string;
  hrefLabel?: string;
  accent: string;
  tag: string;
  /** Alt text for the card splash image (kept truthful to the photo source). */
  imageAlt: string;
}

export const projects: Project[] = [
  {
    title: "EduCore",
    tag: "School Management",
    summary:
      "Complete school management system with student records, fee tracking, timetabling, and automated report-card generation.",
    stack: ["React", "Node.js", "PostgreSQL", "JWT"],
    status: "Live",
    href: "https://muregis.github.io/EduCore",
    hrefLabel: "View live product",
    accent: "from-cyan-400/80 via-sky-500/70 to-blue-600/80",
    imageAlt:
      "A stack of school textbooks with an apple, representing EduCore's school-management work."
  },
  {
    title: "Sawa Solar Solution",
    tag: "Business Website",
    summary:
      "Professional solar-energy company website with service showcase, project gallery, and lead-focused contact integration.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    status: "Live",
    href: "https://muregis.github.io/Sawa-solar--solution-website/",
    hrefLabel: "View live site",
    accent: "from-amber-300/80 via-orange-400/70 to-orange-600/70",
    imageAlt:
      "Solar panels outdoors in bright sunlight, representing the Sawa Solar company website."
  },
  {
    title: "Educational Institution Website",
    tag: "Web Platform",
    summary:
      "Modern website for a technical polytechnic featuring academic programs, admission information, facilities, and a news section.",
    stack: ["HTML5", "CSS3", "Bootstrap"],
    status: "Live",
    href: "https://muregis.github.io/School-Website/",
    hrefLabel: "View live site",
    accent: "from-emerald-300/80 via-teal-500/70 to-cyan-700/80",
    imageAlt:
      "Students walking through a university campus, representing the polytechnic website project."
  },
  {
    title: "StockCore",
    tag: "Inventory Intelligence",
    summary:
      "Inventory and stock-intelligence platform focused on item visibility, movement tracking, reorder alerts, and business insights.",
    stack: ["React", "Node.js", "PostgreSQL", "Analytics"],
    status: "In Development",
    accent: "from-violet-400/80 via-purple-500/70 to-indigo-700/80",
    imageAlt:
      "Shelves of binders and archive boxes, representing StockCore's inventory platform."
  },
  {
    title: "ClientCore",
    tag: "CRM Platform",
    summary:
      "CRM platform with contact management, sales-pipeline tracking, task automation, and an analytics dashboard.",
    stack: ["React", "Node.js", "PostgreSQL"],
    status: "Enterprise",
    accent: "from-sky-300/80 via-blue-500/70 to-indigo-600/80",
    imageAlt:
      "A business team meeting around a table, representing the ClientCore CRM platform."
  },
  {
    title: "Nuru AI Chatbot",
    tag: "NLP Assistant",
    summary:
      "Multi-language AI chatbot supporting Kikuyu, Swahili, Kamba, and Dholuo built on local natural-language processing.",
    stack: ["NLP", "React", "Node.js"],
    status: "In Development",
    accent: "from-fuchsia-400/80 via-pink-500/70 to-rose-700/80",
    imageAlt:
      "A robot technology display, representing the Nuru AI chatbot."
  }
];

export const stats = [
  { value: "15+", label: "Projects delivered" },
  { value: "5", label: "Production products" },
  { value: "20+", label: "Technologies" },
  { value: "6+", label: "Programming languages" }
];

export const journey = [
  { year: "2022", event: "Wrote my first line of code (Python)" },
  { year: "2023", event: "Started Computer Science at Kiambu National Polytechnic" },
  { year: "2024", event: "Founded MuregiScore Technologies" },
  { year: "2025", event: "Shipped enterprise software for Kenyan schools & Saccos" }
];

export const values = [
  {
    title: "Problem-First",
    text: "I build what solves real pain points, not what looks good in a demo.",
    icon: "shield"
  },
  {
    title: "Fast Learner",
    text: "Self-taught across six languages and always expanding the stack.",
    icon: "rocket"
  },
  {
    title: "African Roots",
    text: "Building affordable, dependable tools for businesses in Africa.",
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
    role: "Founder & Lead Developer",
    company: "MuregiScore Technologies",
    description:
      "Founded a software company building enterprise products for Kenyan institutions. Leading product development, client relationships, and M-Pesa integrations.",
    tags: ["React", "Node.js", "PostgreSQL", "M-Pesa API"]
  },
  {
    period: "2023 – Present",
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    description:
      "Delivered 15+ client projects — business websites, management systems, and e-commerce platforms — from requirements to deployment.",
    tags: ["Web Development", "API Design", "Client Management"]
  },
  {
    period: "2023 – Present",
    role: "Computer Science Student",
    company: "Kiambu National Polytechnic",
    description:
      "Diploma in Computer Science covering software engineering, database systems, networking, and system design.",
    tags: ["Software Engineering", "Database Systems", "Networking"]
  }
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "FastAPI", "REST APIs", "JWT Auth"]
  },
  {
    title: "Languages",
    items: ["Java", "Python", "C++", "JavaScript", "SQL", "VB.NET"]
  },
  {
    title: "Data & Payments",
    items: ["PostgreSQL", "MySQL", "Redis", "M-Pesa Daraja", "Paystack", "Webhooks"]
  },
  {
    title: "DevOps & Workflow",
    items: ["Git", "GitHub", "Docker", "Linux", "Railway", "Vercel"]
  }
];

export const proficiency = [
  { label: "React & frontend", value: 90 },
  { label: "Node.js & backend", value: 85 },
  { label: "M-Pesa integration", value: 88 },
  { label: "PostgreSQL & data", value: 80 }
];

export const products = [
  {
    name: "EduCore",
    text: "School management system transforming how Kenyan schools handle student records, fees, and academics."
  },
  {
    name: "StockCore",
    text: "Inventory and stock-focused business platform, currently in development."
  },
  {
    name: "ClientCore",
    text: "CRM built for practical business workflows and sales execution."
  }
];

export const education = {
  institution: "Kiambu National Polytechnic",
  program: "Diploma in Computer Science",
  period: "2023 – Present (expected 2026)",
  coursework: [
    "Programming",
    "Data Structures",
    "Database Systems",
    "Software Engineering",
    "Web Development",
    "Computer Networks",
    "System Analysis",
    "IT Project Management"
  ]
};

export const testimonials = [
  {
    quote:
      "EduCore has completely transformed how we manage our school. Student records, fee tracking, and report generation are now seamless.",
    name: "Jane Kamau",
    role: "School Administrator"
  },
  {
    quote:
      "The M-Pesa integration works flawlessly. Our members can now track savings and loans in real time. Highly professional.",
    name: "Peter Mwangi",
    role: "Sacco Chairperson"
  },
  {
    quote:
      "The Sawa Solar website brought us so many qualified leads. Victor understood our business perfectly.",
    name: "David Kipchoge",
    role: "Solar Company CEO"
  }
];

export const faqs = [
  {
    q: "What is your core technology stack?",
    a: "React and TypeScript on the frontend; Node.js, Express, and PostgreSQL on the backend; and the M-Pesa Daraja API for payments. I also work in Java, Python, and C++ for enterprise and automation work, and deploy through Railway and Vercel."
  },
  {
    q: "How long do projects take?",
    a: "Brochure and marketing sites take 1–2 weeks. Full web apps with authentication, databases, and payments typically take 4–6 weeks. Larger suites such as EduCore and StockCore ship in phased releases."
  },
  {
    q: "Do you handle support and updates after launch?",
    a: "Yes. Ongoing maintenance packages include security patches, bug fixes, feature tweaks, and uptime monitoring so your product stays healthy after launch."
  },
  {
    q: "Can you integrate M-Pesa or other payments into my product?",
    a: "Absolutely. I build M-Pesa STK Push, C2B, and B2C flows plus Paystack or card rails when needed, always with webhook callbacks and transaction verification."
  }
];

export const academic = {
  badge: "Diploma Level 6 Student · Kiambu National Polytechnic",
  bio: "Computer Science student focused on building a strong foundation in software development, systems administration, databases, and emerging technologies — and already shipping production software through MuregiScore Technologies.",
  focusAreas: [
    {
      icon: "code",
      title: "Core Computer Science",
      items: [
        "Operating systems — Windows & Linux administration, shell scripting",
        "Computer organisation & architecture — CPU operations, memory, storage",
        "Mathematics for computer science — logic, discrete maths, problem-solving"
      ]
    },
    {
      icon: "wrench",
      title: "Software Development",
      items: [
        "Fundamentals of programming — Python, Java, C#",
        "Algorithms & data structures — arrays, stacks, queues, linked lists, sorting",
        "Information systems development — full SDLC, requirements analysis"
      ]
    },
    {
      icon: "brain",
      title: "Data & Intelligence",
      items: [
        "Database management systems — relational design, SQL, normalisation",
        "Artificial intelligence — ML basics, AI algorithms, intelligent systems"
      ]
    },
    {
      icon: "network",
      title: "Networks & Web",
      items: [
        "Networking & distributed systems — LAN/WAN, IP addressing, TCP/IP, HTTP",
        "Web design — HTML5, CSS3, JavaScript, responsive design"
      ]
    },
    {
      icon: "palette",
      title: "Design & Professional Skills",
      items: [
        "Graphic design — visual communication, posters, banners, UI mockups",
        "Professional work behaviour — documentation, teamwork, project management"
      ]
    }
  ],
  skills: [
    {
      title: "Programming Languages",
      items: ["Python", "Java", "C++", "C#", "VB.NET", "JavaScript", "SQL"]
    },
    {
      title: "Web Technologies",
      items: ["HTML5", "CSS3", "React", "Responsive Design"]
    },
    {
      title: "Databases & Cloud",
      items: ["MS SQL Server", "MySQL", "PostgreSQL", "Supabase", "Firebase"]
    },
    {
      title: "Systems & Tools",
      items: ["Linux", "Windows", "Git", "GitHub"]
    }
  ],
  currentFocus: [
    "Building full-stack web applications",
    "Exploring machine learning and AI",
    "Deepening system design and architecture"
  ]
};
