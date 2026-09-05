"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report the crash to Sentry when monitoring is configured.
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      Sentry.captureException(error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background: "#020617",
            color: "#e5eef9",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif'
          }}
        >
          <div
            style={{
              maxWidth: "28rem",
              textAlign: "center",
              border: "1px solid rgba(148,163,184,0.25)",
              borderRadius: "2rem",
              padding: "2.5rem",
              background: "rgba(7,17,31,0.9)",
              boxShadow: "0 18px 50px rgba(2,6,23,0.4)"
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#57c7ff"
              }}
            >
              Unexpected error
            </p>
            <h1
              style={{
                margin: "1rem 0 0.5rem",
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#ffffff"
              }}
            >
              Something went wrong
            </h1>
            <p style={{ margin: 0, lineHeight: 1.7, color: "#94a3b8" }}>
              The error has been reported. Try again, or head back to the
              homepage.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
                marginTop: "1.75rem",
                flexWrap: "wrap"
              }}
            >
              <button
                type="button"
                onClick={reset}
                style={{
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "0.75rem 1.5rem",
                  fontWeight: 600,
                  background: "linear-gradient(90deg,#67e8f9,#38bdf8,#3b82f6)",
                  color: "#020617"
                }}
              >
                Try again
              </button>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- full reload is intentional: the router context is unavailable in the root error boundary */}
              <a
                href="/"
                style={{
                  border: "1px solid rgba(148,163,184,0.3)",
                  borderRadius: "9999px",
                  padding: "0.75rem 1.5rem",
                  fontWeight: 600,
                  color: "#e5eef9",
                  textDecoration: "none"
                }}
              >
                Back to homepage
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
