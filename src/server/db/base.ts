import { createId } from "@paralleldrive/cuid2"
import { snakeCase, text, timestamp } from "drizzle-orm/pg-core"
import { env } from "../../env"

/**
 * Table schema is used to separate different applications using the same database.
 */
export const baseSchema = snakeCase.schema(env.DATABASE_SCHEMA)

/**
 * Base fields for all tables.
 */
export const baseFields = {
  id: text()
    .primaryKey()
    .$defaultFn(() => createId()),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().$onUpdate(() => /* @__PURE__ */ new Date()),
}
