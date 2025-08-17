// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "hub",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    // tags?
    new sst.aws.Nextjs("hub", {
      domain: { name: "hub.illizen.com" },
      server: {
        runtime: "nodejs22.x",
      },
      environment: {
        DATABASE_URL: process.env.DATABASE_URL ?? "unknown",
      },
    });
  },
});
