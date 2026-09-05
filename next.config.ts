import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const baseConfig: NextConfig = {
  // Keep framework noise out of response headers.
  poweredByHeader: false,
  // Never ship source maps to production (Sentry uploads them when configured).
  productionBrowserSourceMaps: false,
  // Anchor the workspace root (avoids lockfile-detection warnings).
  turbopack: {
    root: process.cwd()
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()"
          }
        ]
      }
    ];
  }
};

const sentryActive = Boolean(
  process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN
);

export default sentryActive
  ? withSentryConfig(baseConfig, {
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
      telemetry: false,
      silent: true,
      // Only alter source maps when a token is present to upload them.
      sourcemaps: { disable: !process.env.SENTRY_AUTH_TOKEN }
    })
  : baseConfig;
