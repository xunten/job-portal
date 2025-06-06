// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://ef254227c2ad9ac50c35ccfbbb5399e8@o4509440994967552.ingest.us.sentry.io/4509441031995392",
  integrations: [
    Sentry.mongooseIntegration()
],
  // Tracing
//   tracesSampleRate: 1.0,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});