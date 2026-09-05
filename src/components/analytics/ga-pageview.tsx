"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a page_view hit to GA4 on client-side route changes.
 * The initial server-rendered load is already counted by the gtag snippet,
 * so the first pathname is deliberately skipped to avoid double counting.
 */
export function GaPageview() {
  const pathname = usePathname();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_title: document.title
    });
  }, [pathname]);

  return null;
}
