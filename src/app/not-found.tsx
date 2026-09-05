import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { BrandMark } from "@/components/chrome/logo";
import { absolute } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found (404)",
  description:
    "The page you are looking for doesn't exist or has moved. Head back to Victor Muregi's homepage to explore his projects and portfolio.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Page Not Found (404) | Victor Muregi",
    description:
      "The page you are looking for doesn't exist or has moved.",
    url: absolute("/404")
  }
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="section-grid flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div className="glass w-full max-w-xl rounded-[2rem] p-10 text-center">
        <div className="mx-auto flex w-fit items-center gap-3">
          <BrandMark className="h-12 w-12" />
        </div>
        <p
          className="mt-10 text-sm font-bold tracking-[0.3em] text-cyan-200 uppercase"
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
          This page took a wrong turn
        </h1>
        <p className="mx-auto mt-5 max-w-md leading-7 text-slate-300">
          The link may be outdated, or the page may have moved. Let&apos;s get you
          back to something useful.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Homepage
          </Link>
          <Link
            href="/academic"
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-6 py-3 font-semibold text-fuchsia-100 transition-colors hover:bg-fuchsia-300/20"
          >
            <Compass className="h-4 w-4" aria-hidden="true" />
            Academic Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
