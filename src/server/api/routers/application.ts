import { asc } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { applications } from "~/server/db/schema";

export const applicationRouter = createTRPCRouter({
  readAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.query.applications.findMany({
      orderBy: asc(applications.name),
    });
  }),
});
