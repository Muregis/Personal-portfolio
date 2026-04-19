# React Component Integration Guide

This repository is currently a static HTML/CSS/JS site. It does **not** yet include:

- React
- TypeScript
- Tailwind CSS
- shadcn/ui configuration
- the `@/` import alias used by the demo component

## What I added

- `components/ui/hero-1.tsx`
- `components/ui/demo.tsx`

These files are now in the expected shadcn-style component location, but they will not run until the project is upgraded to a React + TypeScript + Tailwind setup.

## Default paths

- Components path for shadcn projects: `components/ui`
- Global styles path in Next.js + shadcn projects: `app/globals.css` or `src/app/globals.css`
- Current styles path in this repo: `styles.css`

## Why create `components/ui`

shadcn expects reusable UI primitives and imported components to live in a predictable place. Keeping this folder helps with:

- consistent imports like `@/components/ui/hero-1`
- easier code generation from the shadcn CLI
- separation between reusable UI and page-level code
- simpler maintenance as the app grows

## Recommended setup

If you want this component to work properly, convert this project into a TypeScript React app first.

### Option 1: Next.js + shadcn/ui

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npx shadcn@latest init
npm install lucide-react
```

When `shadcn` prompts for paths, use:

- components: `@/components`
- utils: `@/lib/utils`
- styles: `src/app/globals.css`

Then move the added files to:

- `src/components/ui/hero-1.tsx`
- `src/components/ui/demo.tsx`

### Option 2: Vite + React + TypeScript + Tailwind

```bash
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install lucide-react
npx shadcn@latest init
```

For a Vite setup, the common component path is still:

- `src/components/ui`

And the common global stylesheet is:

- `src/index.css`

## Notes on this component

- Props: none
- Local state: none
- Required providers: none
- Required hooks: none
- Required dependency: `lucide-react`
- Required assets: no local images are required after replacing the logo with a Lucide icon
- Responsive behavior: mostly centered hero layout; headline was made slightly more mobile-friendly with `text-4xl sm:text-5xl`

## Best place to use it

This component fits best as:

- a landing page hero
- a marketing splash section
- the root homepage in a React app

## Next step after setup

Once the React app exists, render it from a page like:

```tsx
import { Hero1 } from "@/components/ui/hero-1";

export default function Page() {
  return <Hero1 />;
}
```
