import type { Metadata } from "next";
import { site, absolute, faqs } from "@/lib/site";

/** Share card used by Open Graph & Twitter (generated, see scripts/generate-assets.mjs). */
export const shareImage = {
  url: absolute("/og.png"),
  width: 1200,
  height: 630,
  alt: "Victor Muregi — Full-Stack Developer and Founder of MuregiScore Technologies",
  type: "image/png" as const
};

const description =
  "Full-stack developer and founder in Nairobi, Kenya building enterprise software for African businesses — React, Node.js, PostgreSQL and M-Pesa Daraja integrations.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Victor Muregi | Full-Stack Developer & Founder",
    template: "%s | Victor Muregi"
  },
  description,
  applicationName: "Victor Muregi — Portfolio",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Victor Muregi",
    "full-stack developer Kenya",
    "M-Pesa integration developer",
    "React developer Nairobi",
    "MuregiScore Technologies",
    "software engineer Africa",
    "school management system Kenya"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: site.url,
    siteName: `${site.name} — ${site.brand}`,
    title: `${site.name} | Full-Stack Developer & Founder`,
    description,
    images: [shareImage]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Full-Stack Developer & Founder`,
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

/** Person schema for the site owner (single source of truth). */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  image: absolute(site.logo.png),
  email: `mailto:${site.email}`,
  telephone: site.phoneE164,
  jobTitle: "Full-Stack Developer & Founder",
  worksFor: { "@id": `${site.url}/#organization` },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Kiambu National Polytechnic"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE"
  },
  knowsAbout: [
    "Full-stack web development",
    "M-Pesa Daraja API integration",
    "School management systems",
    "Financial reporting systems",
    "Java, Python, C++, JavaScript"
  ],
  sameAs: [site.github, site.linkedin, site.instagram, site.facebook]
};

/** LocalBusiness (ProfessionalService) schema for MuregiScore Technologies. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.brand,
  url: site.url,
  image: absolute(site.logo.png),
  logo: absolute(site.logo.svg),
  email: site.email,
  telephone: site.phoneE164,
  slogan: site.tagline,
  foundingDate: "2024",
  founder: { "@id": `${site.url}/#person` },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE"
  },
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "Continent", name: "Africa" }
  ],
  priceRange: "$$",
  sameAs: [site.github, site.linkedin, site.instagram, site.facebook]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: `${site.name} — Full-Stack Developer`,
  description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en"
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a }
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
