import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const commonCaseStudyFields = {
  translationKey: z.string(),
  routeSlug: z.string(),
  title: z.string(),
  summary: z.string(),
  organization: z.string(),
  workContext: z.string(),
  outcome: z.string(),
  order: z.number(),
  featured: z.boolean().default(false),
  technologies: z.array(z.string()).default([]),
  ogImage: z.string().optional(),
  metricType: z.enum(['outcome', 'adoption', 'scale', 'feedback', 'cost', 'other']).optional(),
} as const;

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.discriminatedUnion('locale', [
    z.object({
      locale: z.literal('en'),
      ...commonCaseStudyFields,
      services: z.array(z.enum(['Build', 'Hardening', 'Advisory'])).default([]),
    }),
    z.object({
      locale: z.literal('sr'),
      ...commonCaseStudyFields,
      services: z.array(z.enum(['Израда', 'Стабилизација', 'Саветовање'])).default([]),
    }),
  ]),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    displayDate: z.string(),
    ogImage: z.string().optional(),
    locale: z.enum(['en', 'sr']),
    translationKey: z.string(),
    routeSlug: z.string(),
    draft: z.boolean().default(false),
    heroStat: z
      .object({
        value: z.string(),
        label: z.string(),
        attr: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  'writing': writing,
};
