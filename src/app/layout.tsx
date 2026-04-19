import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Muregi | Full-Stack Developer",
  description:
    "Full-stack developer portfolio for Victor Muregi featuring React, Node.js, PostgreSQL, M-Pesa integrations, and product work across Africa."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

