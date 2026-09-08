# Victor Muregi — Portfolio

Production portfolio for **Victor Muregi**, full-stack developer and founder of
**MuregiScore Technologies** (Nairobi, Kenya). Built with Next.js (App Router),
React, TypeScript, and Tailwind CSS.

## Pages

| Route       | Purpose                                                        |
| ----------- | -------------------------------------------------------------- |
| `/`         | Professional portfolio — projects, experience, skills, contact |
| `/academic` | Computer Science coursework portfolio                          |
| `*`         | Designed 404 page                                              |

## Tech stack

- **Framework:** Next.js 16 (App Router, React Server Components, static prerendering)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **Quality:** ESLint (`npm run lint`) + `tsc --noEmit` (`npm run typecheck`)

Interactive parts (role rotator, project filters, FAQ accordion, testimonial
selector, M-Pesa copy actions) are small isolated client components; the rest
of every page renders on the server — no framework or “Vite/React” branding
anywhere in the UI.

## SEO & metadata

- Unique `title`, `meta description`, and canonical URL per page
- Open Graph + Twitter share card (`public/og.png`, 1200×630)
- JSON-LD structured data: `Person`, `ProfessionalService` (LocalBusiness),
  `WebSite`, `FAQPage`, `BreadcrumbList`
- `robots.txt` & `sitemap.xml` generated from `src/app/robots.ts` /
  `src/app/sitemap.ts`; `llms.txt` in `public/`
- Multi-size favicon set (SVG + 16/32 PNG + ICO + Apple touch + PWA icons)

The canonical domain defaults to the project's Vercel URL
(`https://personal-portfolio-muregis-projects.vercel.app`); override it per
environment with `NEXT_PUBLIC_SITE_URL` (see `env.example`) once a custom
domain is attached.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run typecheck
npm run build     # production build (static)
npm run start     # serve the production build
```

## Assets

`public/muregiscore-logo.svg` is the single source for the favicon set and the
social share card. Regenerate them after changing the logo:

```bash
npm run assets
```

Outputs: `favicon*.png/svg/ico`, `apple-touch-icon.png`, `icon-192/512.png`,
`og.png`.

Project-card splash photos live in `public/images/projects/*.jpg` (16:9,
optimised, ~60–130 KB each). They are licence-clean CC0 images fetched from
Openverse; refresh or swap them with:

```bash
npm run assets:splash       # all projects
npm run assets:splash -- educore   # one project (slug)
```

## CI/CD

`.github/workflows/ci.yml` runs on every push and pull request:

1. `npm run lint` and `npm run typecheck`
2. `npm run build`

Pushing to `main` additionally deploys to Vercel production (only after the
lint/typecheck/build jobs pass).

### Required secrets (Settings → Secrets and variables → Actions)

| Secret             | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `VERCEL_TOKEN`     | Personal access token from vercel.com/account/settings/tokens |
| `VERCEL_ORG_ID`    | Your Vercel team ID (from `vercel inspect` or the team settings) |
| `VERCEL_PROJECT_ID`| Your project ID (from `vercel inspect` or the project settings) |

The deploy job also needs `NEXT_PUBLIC_SITE_URL` set in your Vercel project
environment (Production) so canonical URLs use the real domain — it falls back
to the project's Vercel URL in `src/lib/site.ts` if unset.

## Analytics & error monitoring

Both integrations are **opt-in** — nothing is loaded or initialised until the
relevant environment variable exists, so local development stays clean.

### Google Analytics 4

Set `GA4_MEASUREMENT_ID` in the Vercel project environment and the gtag snippet
loads on every page; client-side route changes report `page_view` events
without double counting the initial load.

### Sentry

Set `NEXT_PUBLIC_SENTRY_DSN` (project → Settings → Client Keys (DSN)) to
enable:

- browser error capture (`src/sentry.client.config.ts`)
- server-side capture + route instrumentation via `src/instrumentation.ts`
  (`src/sentry.server.config.ts`)
- root error boundary reporting (`src/app/global-error.tsx`)

Optionally set `SENTRY_ENVIRONMENT`. To upload source maps from CI, also add
`SENTRY_ORG`, `SENTRY_PROJECT`, and `SENTRY_AUTH_TOKEN` as GitHub secrets — the
deploy job forwards them to the Vercel build. See `env.example` for the full
list.

## Licensing

All photos used on the site are CC0 / public domain (no attribution required).
The MuregiScore emblem and generated brand assets are owned by the site owner.

## Project structure

```
src/app/            routes (layout, home, academic, 404) + robots/sitemap
src/components/     shared chrome + interactive client islands
src/lib/            site content & SEO schema modules
scripts/            brand asset generator
public/             static assets, resume PDF, llms.txt
```

## Launch checklist (traffic & indexing)

Run these once after the first production deploy — most are one-time Vercel /
Google steps, not code changes.

1. **Make the deployment public.** Vercel project → Settings → Deployment
   Protection. If "Vercel Authentication" (or SSO) is on, every visitor is
   asked to log in — turn it off (or add a domain) or nobody but you can open
   the site. Confirm the site loads in a private/incognito window.
2. **Check the canonical URL.** The site defaults to the project's Vercel URL.
   In Vercel project → Settings → Environment Variables, make sure
   `NEXT_PUBLIC_SITE_URL` (Production) matches the exact URL visitors should
   see — or delete it to use the default. Canonical tags, `sitemap.xml`,
   `robots.txt`, Open Graph, and JSON-LD all follow it.
3. **Stop the misleading GitHub Pages URL.** Repo → Settings → Pages: this
   repo has no published static build, so `muregis.github.io/Personal-portfolio`
   renders the README. Set Source to **None** unless you intentionally publish
   the static export there.
4. **Google Search Console.** Add a URL-prefix property for the public Vercel
   URL, verify it (meta tag or Google account), submit `/sitemap.xml`, then
   request indexing for `/` and `/academic`.
5. **Google Analytics 4.** Create a GA4 property, copy the Measurement ID
   (`G-…`), add it as `GA4_MEASUREMENT_ID` in Vercel → Environment Variables
   (Production), and redeploy. The snippet is already wired in
   `src/components/analytics` and loads nothing until the variable exists.
6. **Distribute.** Put the URL in your GitHub profile README, pin the repo,
   set it as the LinkedIn website field and featured link, add it to your
   email signature, WhatsApp Business, and the resume PDF. Traffic follows
   where you point people — the site itself only needs to be reachable.

## Deploying

Pushing to `main` runs lint/typecheck/build and — only when the `VERCEL_TOKEN`
/ `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` secrets exist in GitHub → Settings →
Secrets and variables → Actions — deploys to Vercel. If those secrets are
missing, connect the repo in the Vercel dashboard instead (Vercel git
integration deploys every push with no workflow needed).
