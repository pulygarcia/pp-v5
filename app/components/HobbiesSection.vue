<script setup lang="ts">
const { t, tm, rt, locale } = useI18n()

const list = computed(() => (tm('hobbies.list') as unknown[]).map((m) => rt(m as string)))
</script>

<template>
  <section class="bg-black px-4 py-24 md:px-6 md:py-32">
    <div class="mx-auto max-w-6xl">

      <div class="max-w-2xl">

        <div class="flex flex-col gap-6">
          <div>
            <p class="mb-4 text-[10px] uppercase tracking-[0.3em] text-primary/50 sm:text-xs">{{ t('hobbies.eyebrow') }}</p>
            <h2 class="text-3xl font-medium leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
              <WordsPullUp :key="locale" :text="t('hobbies.heading')" />
            </h2>
          </div>

          <p class="max-w-md text-base leading-relaxed text-primary/50">
            {{ t('hobbies.paragraph') }}
          </p>

          <ul class="space-y-3">
            <li
              v-for="item in list"
              :key="item"
              class="flex items-center gap-3 text-sm text-primary/50"
            >
              <span class="h-px w-4 bg-primary/30 shrink-0" />
              {{ item }}
            </li>
          </ul>

        </div>

      </div>
    </div>
  </section>
</template>
