<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
  queryCollection('projects').where('slug', '=', route.params.slug as string).first()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}
</script>

<template>
  <div class="min-h-screen bg-black text-primary">

    <!-- Hero -->
    <section class="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <img
        v-if="project?.cover"
        :src="project.cover"
        :alt="project?.title"
        class="h-full w-full object-cover"
      />
      <div v-else class="h-full w-full bg-[#101010]" />
      <!-- Overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

      <!-- Back link -->
      <NuxtLink
        :to="localePath('/projects')"
        class="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-black/60 px-4 py-2 text-xs text-primary/70 backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary md:left-8 md:top-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        {{ t('projectDetail.back') }}
      </NuxtLink>

      <!-- Title block -->
      <div class="absolute bottom-0 left-0 w-full px-6 pb-10 md:px-12 md:pb-14 lg:px-20">
        <p class="mb-2 text-[10px] uppercase tracking-[0.3em] text-primary/50">{{ project?.role }}</p>
        <h1 class="text-3xl font-medium leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem]">
          {{ project?.title }}
        </h1>
        <p class="mt-3 max-w-xl text-base text-primary/60 md:text-lg">{{ project?.summary }}</p>
      </div>
    </section>

    <!-- Tags + links -->
    <section class="border-b border-primary/10 bg-[#101010] px-6 py-6 md:px-12 lg:px-20">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in project?.tags"
            :key="tag"
            class="rounded-full border border-primary/20 px-3 py-1 text-[11px] text-primary/60"
          >{{ tag }}</span>
        </div>
        <div class="flex gap-3">
          <a
            v-if="project?.demoUrl"
            :href="project.demoUrl"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-medium text-black transition-opacity hover:opacity-80"
          >
            {{ t('projectDetail.liveDemo') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="rotate-[-45deg]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            v-if="project?.clientRepo"
            :href="project.clientRepo"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2 text-xs text-primary/70 transition-colors hover:border-primary/60 hover:text-primary"
          >{{ t('projectDetail.clientRepo') }}</a>
          <a
            v-if="project?.apiRepo"
            :href="project.apiRepo"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2 text-xs text-primary/70 transition-colors hover:border-primary/60 hover:text-primary"
          >{{ t('projectDetail.apiRepo') }}</a>
        </div>
      </div>
    </section>

    <!-- Case study body -->
    <section class="px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32">
      <div class="mx-auto max-w-3xl">
        <div
          class="prose max-w-none
            prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-primary
            prose-h2:mt-12 prose-h2:text-2xl prose-h2:border-b prose-h2:border-primary/10 prose-h2:pb-3 prose-h2:md:text-3xl
            prose-p:text-primary/70 prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg
            prose-strong:text-primary prose-strong:font-medium
            prose-li:text-primary/70 prose-li:leading-relaxed
            prose-ul:space-y-2
          "
        >
          <ContentRenderer v-if="project" :value="project" />
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section v-if="project?.gallery && project.gallery.length > 1" class="px-6 pb-24 md:px-12 lg:px-20">
      <div class="mx-auto max-w-6xl">
        <p class="mb-8 text-[10px] uppercase tracking-[0.3em] text-primary/40">{{ t('projectDetail.gallery') }}</p>
        <div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <img
            v-for="(img, i) in project.gallery.slice(1)"
            :key="i"
            :src="img"
            :alt="`${project.title} screenshot ${i + 2}`"
            class="mb-4 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Footer nav -->
    <div class="border-t border-primary/10 px-6 py-10 md:px-12 lg:px-20">
      <div class="mx-auto flex max-w-6xl justify-between">
        <NuxtLink
          :to="localePath('/projects')"
          class="inline-flex items-center gap-2 text-sm text-primary/50 transition-colors hover:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          {{ t('projectDetail.allProjects') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/') + '#contact'"
          class="inline-flex items-center gap-2 text-sm text-primary/50 transition-colors hover:text-primary"
        >
          {{ t('projectDetail.contact') }}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-[-45deg]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>
