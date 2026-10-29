import Link from "next/link";
import { Github, Instagram, Linkedin, Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl supports-[backdrop-filter]:bg-[#07111f]/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <nav
          aria-label="Main navigation"
          className="flex h-16 items-center justify-between gap-3 sm:h-[4.25rem]"
        >
          <Link
            href="/"
            className="rounded-xl focus-visible:outline-2 focus-visible:outline-cyan-300"
            aria-label="Victor Muregi — home"
          >
            <Wordmark compact />
          </Link>

          {/* Desktop links */}
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
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} profile`}
                className="text-slate-300 transition-colors hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={cta?.href ?? "/#contact"}
              className="hidden rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-400/20 sm:inline-flex"
            >
              {cta?.label ?? "Hire Me"}
            </Link>

            {/* Mobile menu */}
            <details className="group relative lg:hidden">
              <summary
                aria-label="Open menu"
                className="flex cursor-pointer list-none items-center rounded-full border border-white/15 bg-white/10 p-2.5 text-slate-100 [&::-webkit-details-marker]:hidden"
              >
                <Menu className="h-5 w-5 group-open:hidden" aria-hidden="true" />
                <X className="hidden h-5 w-5 group-open:block" aria-hidden="true" />
              </summary>

              <div className="absolute right-0 z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-white/15 bg-[#0b1524]/95 shadow-2xl shadow-black/50 backdrop-blur-xl">
                <div className="flex flex-col p-2">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-white/10" />
                  <Link
                    href={cta?.href ?? "/#contact"}
                    className="rounded-xl bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-4 py-3 text-center text-sm font-semibold text-slate-950"
                  >
                    {cta?.label ?? "Hire Me"}
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </nav>
      </div>
    </header>
  );
}
