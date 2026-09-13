import { defineRelations } from "drizzle-orm"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import { env } from "@/env"

import * as schema from "./schema"

const client = postgres(env.DATABASE_URL, {
  prepare: false,
  ...(env.DATABASE_URL.includes("localhost")
    ? {
        // ssl doesn't work locally
      }
    : {
        ssl: {
          // necessary to ignore self-signed certificates or certs not trusted
          rejectUnauthorized: false,
        },
      }),
})

export const db = drizzle({
  client: client,
  relations: defineRelations(schema),
  logger: env.DATABASE_URL.includes("localhost") ? false : true,
})
