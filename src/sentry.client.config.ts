import * as Sentry from "@sentry/nextjs";

/**
 * Client-side Sentry initialization.
 *
 * The DSN must be a NEXT_PUBLIC_* variable so it is inlined into the browser
 * bundle at build time. No-ops when unset, which keeps local development quiet.
 */
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    environment:
      process.env.SENTRY_ENVIRONMENT ?? process.env.NODE_ENV ?? "production",
    tracesSampleRate: process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE
      ? Number(process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE)
      : 0.1
  });
}
