<script setup lang="ts">
import { ArrowRight, Download } from 'lucide-vue-next'

interface Props {
  to?: string
  href?: string
  label: string
  variant?: 'solid' | 'outline'
  icon?: 'arrow' | 'download'
  download?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  icon: 'arrow',
  download: false,
})

const NuxtLinkComp = resolveComponent('NuxtLink')

const IconComp = computed(() => (props.icon === 'download' ? Download : ArrowRight))
</script>

<template>
  <component
    :is="to ? NuxtLinkComp : 'a'"
    :to="to"
    :href="href"
    :download="download ? '' : undefined"
    class="group inline-flex cursor-pointer items-center gap-3 rounded-full py-2 pl-6 pr-2 transition-all hover:gap-5"
    :class="
      variant === 'solid'
        ? 'bg-primary text-black'
        : 'border border-primary/40 bg-transparent text-primary hover:border-primary'
    "
  >
    <span class="text-sm font-medium tracking-tight md:text-base">{{ label }}</span>
    <span
      class="flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:scale-110 md:h-10 md:w-10"
      :class="variant === 'solid' ? 'bg-black text-primary' : 'bg-primary text-black'"
    >
      <component :is="IconComp" class="h-4 w-4" />
    </span>
  </component>
</template>
