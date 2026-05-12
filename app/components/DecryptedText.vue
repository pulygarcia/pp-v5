<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  duration?: number
}>(), {
  duration: 800,
})

const displayed = ref(props.text)
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'
let raf: number | null = null

function scramble() {
  if (raf) cancelAnimationFrame(raf)
  const start = performance.now()
  const target = props.text

  function step(now: number) {
    const progress = Math.min((now - start) / props.duration, 1)
    const resolved = Math.floor(progress * target.length)

    displayed.value = target
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' '
        if (i < resolved) return char
        return chars[Math.floor(Math.random() * chars.length)]
      })
      .join('')

    if (progress < 1) {
      raf = requestAnimationFrame(step)
    } else {
      displayed.value = target
    }
  }

  raf = requestAnimationFrame(step)
}

function reset() {
  if (raf) cancelAnimationFrame(raf)
  displayed.value = props.text
}
</script>

<template>
  <span
    class="cursor-default select-none font-mono tracking-tight"
    @mouseenter="scramble"
    @mouseleave="reset"
  >{{ displayed }}</span>
</template>
