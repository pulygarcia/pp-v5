import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        summary: z.string(),
        role: z.string(),
        tags: z.array(z.string()),
        cover: z.string(),
        gallery: z.array(z.string()).default([]),
        clientRepo: z.string().optional(),
        apiRepo: z.string().optional(),
        demoUrl: z.string().optional(),
        order: z.number().default(99),
        draft: z.boolean().default(false),
      }),
    }),
  },
})
