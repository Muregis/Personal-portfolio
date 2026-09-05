import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle
} from "lucide-react";
import { site } from "@/lib/site";
import { BrandMark } from "@/components/chrome/logo";

const socialLinks = [
  { label: "GitHub", href: site.github, Icon: Github },
  { label: "LinkedIn", href: site.linkedin, Icon: Linkedin },
  { label: "Instagram", href: site.instagram, Icon: Instagram },
  { label: "Facebook", href: site.facebook, Icon: Facebook }
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Academic Portfolio", href: "/academic" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Victor Muregi — home"
            >
              <BrandMark className="h-12 w-12" />
              <span>
                <span className="block font-semibold text-white">Victor Muregi</span>
                <span className="block text-sm text-slate-400">
                  Founder, {site.brand}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Full-stack developer building enterprise software for African
              businesses — school management, payments, and business intelligence.
            </p>
            <ul className="mt-5 flex gap-3" aria-label="Social profiles">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer — explore">
            <h2 className="text-sm font-semibold tracking-[0.18em] text-cyan-200 uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.18em] text-cyan-200 uppercase">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  {site.phoneDisplay} (WhatsApp)
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Victor Muregi · {site.brand}. All rights
            reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
