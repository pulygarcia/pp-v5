<script setup lang="ts">
interface Props {
  text: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
})

const el = ref<HTMLElement | null>(null)
const progress = ref(0)
const chars = computed(() => Array.from(props.text))

let raf = 0
function update() {
  if (!el.value) return
  const rect = el.value.getBoundingClientRect()
  const vh = window.innerHeight
  // Mirrors prisma's useScroll offset: ['start 0.8', 'end 0.2']
  // start = top hits 80% of viewport, end = bottom hits 20% of viewport.
  const start = vh * 0.8
  const end = vh * 0.2
  const startPos = rect.top
  const endPos = rect.bottom
  const total = start - end + (endPos - startPos)
  const traveled = start - startPos
  const p = total > 0 ? traveled / total : 0
  progress.value = Math.min(1, Math.max(0, p))
}

function onScroll() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(update)
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  cancelAnimationFrame(raf)
})

function opacityFor(i: number) {
  const charProgress = i / chars.value.length
  const from = charProgress - 0.1
  const to = charProgress + 0.05
  const p = progress.value
  if (p <= from) return 0.2
  if (p >= to) return 1
  return 0.2 + ((p - from) / (to - from)) * 0.8
}
</script>

<template>
  <p ref="el" :class="className">
    <span
      v-for="(ch, i) in chars"
      :key="i"
      :style="{ opacity: opacityFor(i) }"
      class="transition-opacity duration-100"
    >{{ ch }}</span>
  </p>
</template>
