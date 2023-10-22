import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { applicationSchema } from "~/types";

export const applicationRouter = createTRPCRouter({
  // TODO: Turn off since there is no route specific security yet
  // create: publicProcedure
  //   .input(applicationSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.application.create({
  //       data: {
  //         name: input.name,
  //         description: input.description,
  //         url: input.url,
  //       },
  //     });
  //   }),
  readAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.application.findMany({
      orderBy: { name: "asc" },
    });
  }),
  readOne: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.application.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
  // update: publicProcedure
  //   .input(applicationSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     if (!input.id) {
  //       throw new Error("Unable to update application without an id");
  //     }

  //     return ctx.db.application.update({
  //       where: {
  //         id: input.id,
  //       },
  //       data: {
  //         name: input.name,
  //         description: input.description,
  //         url: input.url,
  //       },
  //     });
  //   }),
  // delete: publicProcedure
  //   .input(
  //     z.object({
  //       id: z.string(),
  //     }),
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.application.delete({
  //       where: {
  //         id: input.id,
  //       },
  //     });
  //   }),
});
