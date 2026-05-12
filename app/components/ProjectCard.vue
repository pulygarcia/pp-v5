<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{
  title: string
  summary: string
  role: string
  tags: string[]
  cover?: string
  slug: string
  index: number
  variant: 'featured' | 'tile'
}>()

const cardEl = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const { stop } = useIntersectionObserver(
  cardEl,
  ([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      stop()
    }
  },
  { rootMargin: '-100px', threshold: 0 }
)
</script>

<template>
  <div
    ref="cardEl"
    :style="{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.95)',
      transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.15}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.15}s`,
    }"
    class="h-full"
  >
    <NuxtLink
      :to="`/projects/${slug}`"
      class="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
    >
      <!-- Featured card -->
      <template v-if="variant === 'featured'">
        <div class="relative h-[340px] w-full lg:h-full">
          <img
            v-if="cover"
            :src="cover"
            :alt="title"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div class="absolute bottom-0 left-0 p-6">
            <p class="mb-1 text-[10px] uppercase tracking-[0.25em] text-primary/60">{{ role }}</p>
            <h3 class="text-xl font-medium leading-tight text-primary">{{ title }}</h3>
            <p class="mt-2 text-sm text-primary/70">{{ summary }}</p>
            <div class="mt-3 flex flex-wrap gap-1.5">
              <span
                v-for="tag in tags.slice(0, 4)"
                :key="tag"
                class="rounded-full border border-primary/20 px-2 py-0.5 text-[10px] text-primary/60"
              >{{ tag }}</span>
            </div>
          </div>
        </div>
      </template>

      <!-- Tile card -->
      <template v-else>
        <div class="flex h-full flex-col bg-[#212121]">
          <div v-if="cover" class="relative h-36 w-full overflow-hidden">
            <img
              :src="cover"
              :alt="title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#212121]/60" />
          </div>
        <div class="flex flex-1 flex-col p-6 lg:p-8">
          <div class="mb-auto">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <span class="text-lg font-bold text-primary">{{ String(index).padStart(2, '0') }}</span>
            </div>
            <p class="mb-1 text-[10px] uppercase tracking-[0.25em] text-primary/50">{{ role }}</p>
            <h3 class="text-lg font-medium leading-snug text-primary">{{ title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-primary/60">{{ summary }}</p>
          </div>

          <div class="mt-6">
            <div class="mb-4 flex flex-wrap gap-1.5">
              <span
                v-for="tag in tags.slice(0, 3)"
                :key="tag"
                class="rounded-full border border-primary/20 px-2 py-0.5 text-[10px] text-primary/50"
              >{{ tag }}</span>
            </div>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="rotate-[-45deg] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
        </div>
      </template>
    </NuxtLink>
  </div>
</template>
