import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Freelance case studies: one Markdown file per project and language in
// src/content/work/<lang>/. The file name becomes the URL, e.g.
// en/sparked-host.md -> /work/sparked-host and ro/sparked-host.md -> /ro/work/sparked-host.
// A study missing from ro/ falls back to the English one.
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Type of work, shown above the title on the case study page
      category: z.string(),
      // One-line hook shown under the title on the homepage cards and the "next case study" link.
      // Falls back to category when missing.
      tagline: z.string().optional(),
      // One or two sentences shown at the top of the case study
      summary: z.string(),
      cover: image(),
      coverAlt: z.string(),
      client: z.string(),
      role: z.string(),
      year: z.string(),
      services: z.array(z.string()),
      // The live site, or the Behance project when the live site doesn't show your design
      website: z.string().url().optional(),
      // Lower numbers show first on the homepage
      order: z.number().default(0),
      // Screenshots shown as a simple gallery instead of the scrolling case study layout
      gallery: z.array(z.object({ image: image(), caption: z.string() })).optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
