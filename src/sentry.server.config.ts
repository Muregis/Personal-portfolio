import * as Sentry from "@sentry/nextjs";

/**
 * Server-side Sentry initialization.
 *
 * Active only when a DSN is configured (SENTRY_DSN or NEXT_PUBLIC_SENTRY_DSN),
 * so local builds without monitoring stay completely untouched.
 */
const dsn = process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    environment:
      process.env.SENTRY_ENVIRONMENT ?? process.env.NODE_ENV ?? "production",
    tracesSampleRate: process.env.SENTRY_TRACES_SAMPLE_RATE
      ? Number(process.env.SENTRY_TRACES_SAMPLE_RATE)
      : 0.1
  });
}
