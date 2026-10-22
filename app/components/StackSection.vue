<script setup lang="ts">
const { t, tm, rt } = useI18n()

type Column = {
  label: string
  items: string[]
  serif?: boolean
}

const columns = computed<Column[]>(() => [
  { label: t('stack.labels.language'), items: ['TypeScript'] },
  { label: t('stack.labels.backend'), items: ['NestJS', 'Node.js'] },
  { label: t('stack.labels.frontend'), items: ['Vue.js', 'Next.js'] },
  { label: t('stack.labels.styles'), items: ['Tailwind CSS', 'shadcn/ui'] },
  { label: t('stack.labels.database'), items: ['PostgreSQL', 'TypeORM'] },
  { label: t('stack.labels.testing'), items: ['Jest'] },
  { label: t('stack.labels.vcs'), items: ['Git', 'GitHub'] },
  { label: t('stack.labels.howIWork'), items: (tm('stack.howIWorkItems') as unknown[]).map((m) => rt(m as string)), serif: true },
  { label: t('stack.labels.aiTools'), items: ['Claude', 'Cursor'] },
])
</script>

<template>
  <section
    id="stack"
    class="relative bg-black text-primary px-4 py-24 md:px-6 md:py-32 lg:py-40"
  >
    <div class="mx-auto max-w-6xl">
      <div class="mb-12 flex flex-col items-start gap-3 md:mb-16">
        <p class="text-[10px] uppercase tracking-[0.3em] text-primary/60 sm:text-xs">{{ t('stack.eyebrow') }}</p>
        <h2 class="text-3xl font-medium leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
          {{ t('stack.headingPre') }} <span class="font-serif italic font-normal text-primary/80">{{ t('stack.headingAccent') }}</span>
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-12 md:gap-y-14">
        <div
          v-for="(c, ci) in columns"
          :key="c.label"
          class="group flex flex-col border-t border-primary/15 pt-5"
        >
          <p class="mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/50 sm:text-xs">
            <span class="h-px w-5 bg-primary/40 transition-all duration-500 ease-out group-hover:w-10 group-hover:bg-primary"></span>
            {{ c.label }}
          </p>
          <p
            v-for="(item, ii) in c.items"
            :key="item"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: {
                delay: ((ci % 3) * 0.1 + ii * 0.08) * 1000,
                duration: 800,
                ease: [0.16, 1, 0.3, 1],
              },
            }"
            :class="[
              c.serif
                ? 'font-serif italic text-xl leading-[1.2] sm:text-2xl md:text-[1.65rem]'
                : 'text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl',
              'text-primary',
            ]"
          ><span class="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2">{{ item }}</span></p>
        </div>
      </div>

    </div>
  </section>
</template>
