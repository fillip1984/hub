import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { applicationSchema } from "~/types";

export const applicationRouter = createTRPCRouter({
  create: publicProcedure
    .input(applicationSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.application.create({
        data: {
          name: input.name,
          description: input.description,
          url: input.url,
        },
      });
    }),

  readAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.application.findMany({
      orderBy: { name: "desc" },
    });
  }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.application.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
