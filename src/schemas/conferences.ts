import { reference, z, type SchemaContext } from "astro:content";

export type Conference = z.infer<ReturnType<typeof zConference>>;
export const zConference = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    city: z.string(),
    image: image(),
    date: z.date(),
    speakers: z.array(reference("people")),
    vod: z.string().url().optional(),
  });
