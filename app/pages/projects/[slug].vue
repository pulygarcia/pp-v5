<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const { data: project } = await useAsyncData(
  () => `project-${locale.value}-${route.params.slug}`,
  () =>
    queryCollection('projects')
      .where('slug', '=', route.params.slug as string)
      .where('locale', '=', locale.value)
      .first(),
  { watch: [locale] }
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
            class="inline-flex items-center gap-2 rounded-full border border-primary/70 bg-primary/10 px-5 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
            {{ t('projectDetail.clientRepo') }}
          </a>
          <a
            v-if="project?.apiRepo"
            :href="project.apiRepo"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-full border border-primary/70 bg-primary/10 px-5 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
            {{ t('projectDetail.apiRepo') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Case study body -->
    <section class="px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32">
      <div class="mx-auto max-w-3xl">
        <div
          class="case-body"
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

<style scoped>
.case-body :deep(p) {
  @apply mb-6 text-base leading-[1.8] text-primary/70 md:text-lg;
}
.case-body :deep(h2) {
  @apply mb-8 mt-20 border-b border-primary/10 pb-4 text-2xl font-medium tracking-tight text-primary md:text-3xl;
}
.case-body :deep(h2:first-child) {
  @apply mt-0;
}
.case-body :deep(ul) {
  @apply mb-6 flex flex-col gap-8;
}
.case-body :deep(li) {
  @apply border-l border-primary/15 pl-5 text-base leading-[1.75] text-primary/65 md:text-[1.05rem];
}
.case-body :deep(li strong) {
  @apply font-medium text-primary;
}
.case-body :deep(a) {
  @apply text-primary underline underline-offset-4;
}
</style>
