import { baseFields, baseSchema } from "./base"

export const applications = baseSchema.table("application", (t) => ({
  ...baseFields,
  name: t.text().notNull(),
  description: t.text().notNull(),
  url: t.text().notNull(),
}))

export type Application = typeof applications.$inferSelect
export type NewApplication = typeof applications.$inferInsert
