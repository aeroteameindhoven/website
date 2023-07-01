import { z, defineCollection } from "astro:content";

export const collections = {
  teams: defineCollection({
    type: "data",
    schema: z.strictObject({
      name: z.string().nonempty(),
      description: z.string().nonempty(),
    }),
  }),
  members: defineCollection({
    type: "data",
    schema: z.strictObject({
      rows: z
        .strictObject({
          "first name": z.string().nonempty(),
          surname: z.string().nonempty(),
          subteam: z.string(),
          function: z.string(),
          "aero email": z.string().email().nonempty(),
          time: z.enum(["full-time", "part-time"]),
          study: z.string().optional(),
          linkedin: z.string().optional(),
        })
        .array(),
    }),
  }),
};
