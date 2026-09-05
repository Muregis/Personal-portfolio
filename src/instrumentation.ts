export async function register() {
  // Boot the Node Sentry SDK when the server starts (guarded so the config is
  // never imported into edge or browser bundles).
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }
}
