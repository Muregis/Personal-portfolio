import type { Metadata } from "next";
import { site, absolute, faqs, type Project } from "@/lib/site";

/** Share card used by Open Graph & Twitter (generated, see scripts/generate-assets.mjs). */
export const shareImage = {
  url: absolute("/og.png"),
  width: 1200,
  height: 630,
  alt: "Victor Muregi — Full-Stack Software Engineer and Founder of MuregiScore Technologies",
  type: "image/png" as const
};

const description =
  "Victor Muregi | Full-stack developer at MuregiScore Technologies, Nairobi. Multi-tenant SaaS, M-Pesa Daraja, EduCore school systems, React, Node, PostgreSQL.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Victor Muregi | Full-Stack Software Engineer & Founder",
    template: "%s | Victor Muregi"
  },
  description,
  applicationName: "Victor Muregi — Engineering Portfolio",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Victor Muregi",
    "Victor Muregi Nairobi",
    "Victor Muregi MuregiScore",
    "Victor Muregi full-stack developer",
    "MuregiScore Technologies",
    "Full-Stack Software Engineer Kenya",
    "React TypeScript developer Nairobi",
    "Node Express PostgreSQL developer Kenya",
    "M-Pesa Daraja API integration specialist",
    "EduCore School Management System",
    "EduCore Ratiba Timetabling Engine",
    "Core CRM Kenya"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: site.url,
    siteName: `${site.name} — ${site.brand}`,
    title: `${site.name} | Full-Stack Developer & Founder | MuregiScore Technologies`,
    description,
    images: [shareImage]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Full-Stack Developer | MuregiScore · Nairobi`,
    description,
    images: [shareImage],
    creator: "@i_am.muregi"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "technology"
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Victor Muregi",
  alternateName: ["Muregi", "I_am.muregi", "Muregis"],
  jobTitle: "Full-Stack Software Engineer & Founder",
  worksFor: {
    "@type": "Organization",
    name: "MuregiScore Technologies",
    url: "https://muregiscore.me"
  },
  url: site.url,
  sameAs: [site.github, site.linkedin, "https://muregiscore.me"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE"
  },
  email: site.email,
  description
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MuregiScore Technologies",
  url: "https://muregiscore.me",
  logo: absolute("/muregiscore-logo.png"),
  founder: {
    "@type": "Person",
    name: "Victor Muregi",
    url: site.url
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE"
  },
  sameAs: [site.github]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Victor Muregi — Engineering Portfolio",
  url: site.url,
  description,
  publisher: {
    "@type": "Person",
    name: "Victor Muregi"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: "q" in item ? item.q : (item as { question: string }).question,
    acceptedAnswer: {
      "@type": "Answer",
      text: "a" in item ? item.a : (item as { answer: string }).answer
    }
  }))
};

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absolute(item.href) } : {})
    }))
  };
}

export function projectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: project.liveDemoUrl || project.repoUrl,
    author: {
      "@type": "Person",
      name: "Victor Muregi"
    }
  };
}
