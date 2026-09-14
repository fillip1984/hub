// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

const DATABASE_URL = process.env.DATABASE_URL
const DATABASE_SCHEMA = process.env.DATABASE_SCHEMA
const AUTH_SECRET = process.env.AUTH_SECRET
const AUTH_URL = process.env.AUTH_URL
const AUTH_DISABLE_SIGN_UPS = process.env.AUTH_DISABLE_SIGN_UPS
const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET

if (!DATABASE_URL || !DATABASE_SCHEMA) {
  throw new Error(
    "Missing required environment variables: DATABASE_URL or DATABASE_SCHEMA"
  )
}

if (!AUTH_SECRET) {
  throw new Error("Missing required environment variable: AUTH_SECRET")
}

if (!AUTH_URL) {
  throw new Error("Missing required environment variable: AUTH_URL")
}

if (!AUTH_DISABLE_SIGN_UPS) {
  throw new Error(
    "Missing required environment variable: AUTH_DISABLE_SIGN_UPS"
  )
}

if (!AUTH_GOOGLE_ID) {
  throw new Error("Missing required environment variable: AUTH_GOOGLE_ID")
}

if (!AUTH_GOOGLE_SECRET) {
  throw new Error("Missing required environment variable: AUTH_GOOGLE_SECRET")
}

export default $config({
  app(input) {
    return {
      name: "hub",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    }
  },
  async run() {
    new sst.aws.Nextjs("hub", {
      domain: "hub.illizen.com",
      environment: {
        DATABASE_URL,
        DATABASE_SCHEMA,
        AUTH_SECRET,
        AUTH_URL,
        AUTH_DISABLE_SIGN_UPS,
        AUTH_GOOGLE_ID,
        AUTH_GOOGLE_SECRET,
      },
    })
  },
})
