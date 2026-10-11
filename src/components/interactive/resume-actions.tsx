"use client";

import { useState } from "react";
import { Check, Copy, Download, Printer, Share2 } from "lucide-react";

interface ResumeActionsProps {
  pdfUrl: string;
  plainText: string;
}

export function ResumeActions({ pdfUrl, plainText }: ResumeActionsProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Victor Muregi — Software Engineer CV",
          text: "Review Victor Muregi's engineering background, flagship software projects, and technical skills.",
          url: window.location.href
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        // User cancelled
      }
    } else {
      await handleCopy();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 print:hidden">
      <a
        href={pdfUrl}
        download="Victor_Muregi_Resume.pdf"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-opacity hover:opacity-90"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download Official PDF
      </a>

      <button
        type="button"
        onClick={handlePrint}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/10"
      >
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print / Save PDF
      </button>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-300/40 hover:bg-white/10"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            <span className="text-emerald-300">Copied to Clipboard!</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" aria-hidden="true" />
            <span>Copy ATS Text</span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-300/40 hover:bg-white/10"
      >
        {shared ? (
          <>
            <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            <span className="text-emerald-300">Shared!</span>
          </>
        ) : (
          <>
            <Share2 className="h-4 w-4" aria-hidden="true" />
            <span>Share</span>
          </>
        )}
      </button>
    </div>
  );
}
