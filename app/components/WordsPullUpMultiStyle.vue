<script setup lang="ts">
interface Segment {
  text: string
  className?: string
}

interface Props {
  segments: Segment[]
  delayOffset?: number
}

const props = withDefaults(defineProps<Props>(), {
  delayOffset: 0,
})

const words = computed(() =>
  props.segments.flatMap((seg) =>
    seg.text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, className: seg.className ?? '' })),
  ),
)
</script>

<template>
  <span class="inline-flex flex-wrap justify-center">
    <span
      v-for="(item, i) in words"
      :key="`${item.word}-${i}`"
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
      class="inline-block whitespace-pre"
      :class="item.className"
    >{{ item.word }}{{ i < words.length - 1 ? ' ' : '' }}</span>
  </span>
</template>
