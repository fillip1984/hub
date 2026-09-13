import { text } from "drizzle-orm/pg-core"
import { baseFields, baseSchema } from "./base"

export const applications = baseSchema.table("application", {
  ...baseFields,
  name: text("name").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
})

export type Application = typeof applications.$inferSelect
export type NewApplication = typeof applications.$inferInsert
