"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle, Phone, Store } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type CopyTarget = "till" | "phone";

function useCopy() {
  const [copied, setCopied] = useState<CopyTarget | null>(null);

  const copy = async (value: string, target: CopyTarget) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(target);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — keep the value visible.
      setCopied(null);
    }
  };

  return { copied, copy };
}

function CopyButton({
  copied,
  onCopy
}: {
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onCopy}
      aria-live="polite"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        copied
          ? "border-emerald-300/50 bg-emerald-300/10 text-emerald-200"
          : "border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/40"
      )}
    >
      {copied ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function PaymentsSupport() {
  const { copied, copy } = useCopy();

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/30 p-5">
        <p className="text-sm text-slate-400">Lipa na M-Pesa · Till</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2.5">
            <Store className="h-5 w-5 text-emerald-300" aria-hidden="true" />
            <span>
              <span className="block text-xl font-bold text-white">
                {site.mpesa.till}
              </span>
              <span className="block text-xs text-slate-400">
                {site.mpesa.tillName}
              </span>
            </span>
          </span>
          <CopyButton
            copied={copied === "till"}
            onCopy={() => copy(site.mpesa.till, "till")}
          />
        </div>
      </div>

      <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/30 p-5">
        <p className="text-sm text-slate-400">Lipa na M-Pesa · Send to phone</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2.5">
            <Phone className="h-5 w-5 text-emerald-300" aria-hidden="true" />
            <span>
              <span className="block text-xl font-bold text-white">
                {site.mpesa.phone}
              </span>
              <span className="block text-xs text-slate-400">
                M-Pesa buy goods / paybill
              </span>
            </span>
          </span>
          <CopyButton
            copied={copied === "phone"}
            onCopy={() => copy(site.mpesa.phone, "phone")}
          />
        </div>
      </div>

      <a
        href={`${site.whatsapp}?text=${encodeURIComponent(
          "Hi Victor, I'd like to buy you a coffee — and talk about a project."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 via-green-400 to-lime-400 px-6 py-3 font-semibold text-slate-950 transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Say hi on WhatsApp
      </a>
    </div>
  );
}
