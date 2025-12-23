import { pgSchema, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { env } from "~/env";

const hubSchema = pgSchema(env.DATABASE_SCHEMA || "public");

export const applications = hubSchema.table("application", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  name: text("name").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
});
