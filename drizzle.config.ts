import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  schemaFilter: [env.DATABASE_SCHEMA || "public"],
  dbCredentials: {
    url: env.DATABASE_URL,
    ssl: "require",
  },
} satisfies Config;

// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   dialect: "postgresql",
//   out: "./src/drizzle",
//   schema: "./src/drizzle/schema.ts",
//   schemaFilter: [process.env.DATABASE_SCHEMA || "public"],
//   dbCredentials: {
//     // host: process.env.DB_HOST!,
//     // port: Number(process.env.DB_PORT!),
//     // user: process.env.DB_USERNAME!,
//     // password: process.env.DB_PASSWORD!,
//     // database: process.env.DB_NAME!,
//     url: process.env.DATABASE_URL!,
//   },
//   // Print all statements
//   verbose: true,
//   // Always ask for confirmation
//   strict: true,
// });
