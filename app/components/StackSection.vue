<script setup lang="ts">
type Column = {
  label: string
  items: string[]
  serif?: boolean
}

const columns: Column[] = [
  { label: 'Language', items: ['TypeScript'] },
  { label: 'Backend', items: ['NestJS', 'Node.js'] },
  { label: 'Frontend', items: ['Vue.js', 'Next.js'] },
  { label: 'Styles / Design', items: ['Tailwind CSS', 'shadcn/ui'] },
  { label: 'Database', items: ['PostgreSQL', 'TypeORM'] },
  { label: 'Testing', items: ['Jest'] },
  { label: 'Version Control', items: ['Git', 'GitHub'] },
  { label: 'How I work', items: ['AI-assisted workflows', 'Spec-Driven Development', 'Scrum'], serif: true },
  { label: 'Daily AI Tools', items: ['Claude', 'Cursor'] },
]
</script>

<template>
  <section
    id="stack"
    class="relative bg-black text-primary px-4 py-24 md:px-6 md:py-32 lg:py-40"
  >
    <div class="mx-auto max-w-6xl">
      <div class="mb-12 flex flex-col items-start gap-3 md:mb-16">
        <p class="text-[10px] uppercase tracking-[0.3em] text-primary/60 sm:text-xs">Stack</p>
        <h2 class="text-3xl font-medium leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
          What I build <span class="font-serif italic font-normal text-primary/80">with.</span>
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-12 md:gap-y-14 group/grid">
        <div v-for="c in columns" :key="c.label" class="flex flex-col">
          <p class="mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/45 sm:text-xs">
            <span class="h-px w-5 bg-primary/30"></span>
            {{ c.label }}
          </p>
          <p
            v-for="item in c.items"
            :key="item"
            :class="[
              c.serif
                ? 'font-serif italic text-xl leading-[1.2] sm:text-2xl md:text-[1.65rem]'
                : 'text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl',
              'text-primary/40 transition-all duration-300 group-hover/grid:text-primary/20 hover:!text-primary',
            ]"
          >{{ item }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
