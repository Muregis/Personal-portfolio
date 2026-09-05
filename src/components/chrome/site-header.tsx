import Link from "next/link";
import { Github, Instagram, Linkedin, Menu } from "lucide-react";
import { site } from "@/lib/site";
import { Wordmark } from "@/components/chrome/logo";

export interface NavItem {
  label: string;
  href: string;
}

const socialIcons = [
  { label: "GitHub", href: site.github, Icon: Github },
  { label: "LinkedIn", href: site.linkedin, Icon: Linkedin },
  { label: "Instagram", href: site.instagram, Icon: Instagram }
];

export function SiteHeader({ items, cta }: { items: NavItem[]; cta?: NavItem }) {
  return (
    <header className="mx-auto max-w-7xl px-6 pt-6 lg:px-10">
      <nav
        aria-label="Main navigation"
        className="glass flex items-center justify-between gap-4 rounded-full px-5 py-3"
      >
        <Link
          href="/"
          className="rounded-xl focus-visible:outline-2 focus-visible:outline-cyan-300"
          aria-label="Victor Muregi — home"
        >
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-white/10" aria-hidden="true" />
          {socialIcons.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile`}
              className="text-slate-300 transition-colors hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={cta?.href ?? "/#contact"}
            className="hidden rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-400/20 sm:inline-flex"
          >
            {cta?.label ?? "Hire Me"}
          </Link>
          <details className="group relative lg:hidden">
            <summary
              aria-label="Open menu"
              className="flex cursor-pointer list-none items-center rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 [&::-webkit-details-marker]:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </summary>
            <div className="glass absolute right-0 z-50 mt-3 w-56 rounded-2xl p-3">
              <div className="flex flex-col">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={cta?.href ?? "/#contact"}
                  className="mt-1 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-4 py-2.5 text-center text-sm font-semibold text-slate-950"
                >
                  {cta?.label ?? "Hire Me"}
                </Link>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
