import type { Config } from "drizzle-kit"

import { env } from "@/env"

// having trouble making postgres support both local (doesn't support ssl) and remote (which requires ssl)...
const databaseUrl = new URL(env.DATABASE_URL)
type DBCredentials =
  | {
      host: string
      port: number
      user: string
      password: string
      database: string
      ssl: "require" | "prefer"
    }
  | {
      url: string
    }

const dbCredentials: DBCredentials = databaseUrl.hostname.includes("localhost")
  ? {
      url: env.DATABASE_URL,
    }
  : {
      host: databaseUrl.hostname,
      port: databaseUrl.port ? Number(databaseUrl.port) : 5432,
      user: decodeURIComponent(databaseUrl.username),
      password: decodeURIComponent(databaseUrl.password),
      database: databaseUrl.pathname.replace(/^\//, ""),
      ssl: "require",
    }

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials,
  schemaFilter: [env.DATABASE_SCHEMA],
} satisfies Config
