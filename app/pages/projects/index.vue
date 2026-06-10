<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const { data: projects } = await useAsyncData('all-projects', () =>
  queryCollection('projects')
    .where('draft', '<>', true)
    .order('order', 'ASC')
    .all()
)
</script>

<template>
  <div class="min-h-screen bg-black text-primary">
    <section class="px-4 py-24 md:px-6 md:py-32">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16">
          <NuxtLink :to="localePath('/')" class="mb-8 inline-flex items-center gap-2 text-xs text-primary/50 hover:text-primary">
            ← {{ t('projectsPage.back') }}
          </NuxtLink>
          <h1 class="mt-6 text-4xl font-medium tracking-tight text-primary md:text-5xl">{{ t('projectsPage.title') }}</h1>
        </div>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="project in projects"
            :key="project.slug"
            :to="localePath(`/projects/${project.slug}`)"
            class="group flex flex-col overflow-hidden rounded-2xl bg-[#212121]"
          >
            <img v-if="project.cover" :src="project.cover" :alt="project.title" class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="p-6">
              <p class="mb-1 text-[10px] uppercase tracking-[0.25em] text-primary/50">{{ project.role }}</p>
              <h2 class="text-lg font-medium text-primary">{{ project.title }}</h2>
              <p class="mt-2 text-sm text-primary/60">{{ project.summary }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
