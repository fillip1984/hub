import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const applicationRouter = createTRPCRouter({
  readAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.application.findMany({ orderBy: { name: "asc" } });
  }),
});
