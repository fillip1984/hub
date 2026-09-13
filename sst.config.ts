// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

const DATABASE_URL = process.env.DATABASE_URL
const DATABASE_SCHEMA = process.env.DATABASE_SCHEMA

if (!DATABASE_URL || !DATABASE_SCHEMA) {
  throw new Error(
    "Missing required environment variables: DATABASE_URL or DATABASE_SCHEMA"
  )
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
      },
    })
  },
})
