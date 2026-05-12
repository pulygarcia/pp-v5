<script setup lang="ts">
const { data: projects } = useLazyAsyncData('projects', () =>
  queryCollection('projects')
    .where('draft', '<>', true)
    .order('order', 'ASC')
    .all()
)
</script>

<template>
  <section id="projects" class="bg-black px-4 py-24 md:px-6 md:py-32 lg:py-40">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-12 flex flex-col items-start gap-3 md:mb-16">
        <p class="text-[10px] uppercase tracking-[0.3em] text-primary/60 sm:text-xs">Projects</p>
        <h2 class="text-3xl font-medium leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
          Selected work
        </h2>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px]">
        <!-- Featured card (first project, spans 2 cols) -->
        <ProjectCard
          v-if="projects?.[0]"
          :key="projects[0].slug"
          :title="projects[0].title"
          :summary="projects[0].summary"
          :role="projects[0].role"
          :tags="projects[0].tags"
          :cover="projects[0].cover"
          :slug="projects[0].slug"
          :index="0"
          variant="featured"
          class="lg:col-span-2"
        />

        <!-- Tile cards (projects 2 & 3) -->
        <ProjectCard
          v-for="(project, i) in projects?.slice(1, 3)"
          :key="project.slug"
          :title="project.title"
          :summary="project.summary"
          :role="project.role"
          :tags="project.tags"
          :cover="project.cover"
          :slug="project.slug"
          :index="i + 1"
          variant="tile"
        />
      </div>

      <!-- View all -->
      <div class="mt-10 flex justify-end">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-2 text-sm font-medium text-primary/70 transition-colors duration-200 hover:text-primary"
        >
          View all projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="rotate-[-45deg]"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
