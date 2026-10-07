import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Freelance case studies: one Markdown file per project in src/content/work.
// The file name becomes the URL, e.g. sparked-host.md -> /work/sparked-host
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Short label shown under the card title on the homepage
      category: z.string(),
      // One or two sentences shown at the top of the case study
      summary: z.string(),
      cover: image(),
      coverAlt: z.string(),
      client: z.string(),
      role: z.string(),
      year: z.string(),
      services: z.array(z.string()),
      website: z.string().url().optional(),
      // Lower numbers show first on the homepage
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
