<script setup lang="ts">
interface Props {
  text: string
  delayOffset?: number
  className?: string
  showAsterisk?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  delayOffset: 0,
  className: '',
  showAsterisk: false,
})

const words = computed(() => props.text.split(' '))
</script>

<template>
  <span class="inline-flex flex-wrap">
    <span
      v-for="(word, i) in words"
      :key="`${word}-${i}`"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          delay: (delayOffset + i * 0.08) * 1000,
          duration: 800,
          ease: [0.16, 1, 0.3, 1],
        },
      }"
      class="relative inline-block whitespace-pre"
      :class="className"
    >{{ word }}{{ i < words.length - 1 ? ' ' : '' }}<span
      v-if="showAsterisk && i === words.length - 1"
      class="absolute text-[0.31em]"
      style="top: 0.65em; right: -0.3em"
    >*</span></span>
  </span>
</template>
