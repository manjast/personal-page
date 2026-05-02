import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    locale: z.enum(['en', 'sr']),
    translationKey: z.string(),
    routeSlug: z.string(),
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
