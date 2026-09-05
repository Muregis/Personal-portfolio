import Image from "next/image";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  imgClassName
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center justify-center", className)}>
      <Image
        src={site.logo.svg}
        alt="MuregiScore Technologies logo"
        width={40}
        height={40}
        className={cn(
          "h-full w-full rounded-xl border border-white/10 bg-white/5 object-contain p-1",
          imgClassName
        )}
      />
    </span>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <BrandMark className="h-10 w-10 shrink-0" />
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-[0.18em] text-cyan-200 uppercase">
          Victor Muregi
        </span>
        {!compact ? (
          <span className="block text-sm text-slate-300">Full-Stack Developer</span>
        ) : null}
      </span>
    </span>
  );
}
