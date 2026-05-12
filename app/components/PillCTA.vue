<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

interface Props {
  to?: string
  href?: string
  label: string
}

defineProps<Props>()

const NuxtLinkComp = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="to ? NuxtLinkComp : 'a'"
    :to="to"
    :href="href"
    class="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-primary py-2 pl-6 pr-2 text-black transition-all hover:gap-5"
  >
    <span class="text-sm font-medium tracking-tight md:text-base">{{ label }}</span>
    <span
      class="flex h-9 w-9 items-center justify-center rounded-full bg-black text-primary transition-transform group-hover:scale-110 md:h-10 md:w-10"
    >
      <ArrowRight class="h-4 w-4" />
    </span>
  </component>
</template>
