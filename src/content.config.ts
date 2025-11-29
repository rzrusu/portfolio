import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			thumbnail: image().optional(),
			heroImage: image().optional(),
			link: z.string().optional(),
			github: z.string().optional(),
			type: z.enum(['project', 'freelance']),
			tags: z.array(z.string()).optional(),
			date: z.coerce.date().optional(),
			featured: z.boolean().default(false),
		}),
});

export const collections = { blog, projects };
