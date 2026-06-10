<script setup lang="ts">
import { ref } from 'vue'

const { t, tm, rt, locale } = useI18n()
const interacted = ref(false)

const list = computed(() => (tm('hobbies.list') as unknown[]).map((m) => rt(m as string)))
const hobbies = computed(() => (tm('hobbies.hobbies') as unknown[]).map((m) => rt(m as string)))
</script>

<template>
  <section class="bg-black px-4 py-24 md:px-6 md:py-32">
    <div class="mx-auto max-w-6xl">

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">

        <!-- Left: copy -->
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

          <div class="mt-2">
            <p class="mb-3 text-[10px] uppercase tracking-[0.25em] text-primary/30">{{ t('hobbies.notCoding') }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="hobby in hobbies"
                :key="hobby"
                class="rounded-full border border-primary/15 px-3 py-1 text-xs text-primary/40"
              >{{ hobby }}</span>
            </div>
          </div>
        </div>

        <!-- Right: canvas -->
        <div
          class="relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#0a0a0a] ring-1 ring-primary/10"
          style="height: 460px;"
          @mousedown="interacted = true"
          @touchstart="interacted = true"
        >
          <ClientOnly>
            <TunnelCanvas />
          </ClientOnly>

          <!-- Vignette -->
          <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#0a0a0a_100%)]" />

          <!-- Drag hint -->
          <div
            class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-500"
            :class="interacted ? 'opacity-0' : 'opacity-100'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="animate-bounce text-primary/40">
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
            </svg>
            <p class="text-[10px] uppercase tracking-[0.25em] text-primary/35">{{ t('hobbies.dragHint') }}</p>
          </div>

          <!-- Label -->
          <div class="pointer-events-none absolute bottom-4 right-5">
            <p class="text-[10px] uppercase tracking-[0.2em] text-primary/25">{{ t('hobbies.canvasLabel') }}</p>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
