import { z } from "astro:content";

export type People = z.infer<ReturnType<typeof zPeople>>;
export const zPeople = () =>
  z.object({
    name: z.string(),
    avatar: z.string().url(),
    role: z.string(),
    profileUrl: z.string().url(),
  });
