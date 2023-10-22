import { z } from "zod";

export const applicationSchema = z.object({
  id: z.string().nullish(),
  name: z.string().min(1).max(100),
  description: z.string().min(10).max(500),
  url: z.string().url(),
});

export type ApplicationSchemaType = z.infer<typeof applicationSchema>;
