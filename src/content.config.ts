import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    organization: z.string(),
    workContext: z.string(),
    outcome: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    services: z.array(z.enum(['Build', 'Hardening', 'Advisory'])).default([]),
    technologies: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    signalLabel: z.string().optional(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
};
