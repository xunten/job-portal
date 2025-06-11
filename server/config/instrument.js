// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://f4e4a5a1b546b6452d5e573f2b0f8377@o4509440994967552.ingest.us.sentry.io/4509478517211136",
  integrations: [
    Sentry.mongoIntegration()
  ],

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});