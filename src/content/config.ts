import { zConference } from "@/schemas/conferences";
import { zPeople } from "@/schemas/people";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

export const collections = {
  conferences: defineCollection({
    schema: zConference,
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/conferences",
    }),
  }),
  people: defineCollection({
    schema: zPeople,
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/people",
    }),
  }),
};
