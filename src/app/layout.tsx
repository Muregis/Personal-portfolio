import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@/components/analytics/ga";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-cyan-300 focus:px-5 focus:py-2.5 focus:font-semibold focus:text-slate-950"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
