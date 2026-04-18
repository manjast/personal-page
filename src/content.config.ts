import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    client: z.string(),
    clientContext: z.string(),
    outcome: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    services: z.array(z.enum(['Build', 'Productionize', 'Advise'])).default([]),
    technologies: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.date().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  writing,
};
