<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const options = computed(() =>
  (locales.value as { code: string }[]).map((l) => l.code)
)
</script>

<template>
  <div class="flex items-center gap-1 text-[10px] uppercase tracking-wider sm:text-xs">
    <template v-for="(code, i) in options" :key="code">
      <NuxtLink
        :to="switchLocalePath(code)"
        class="transition-colors"
        :class="code === locale ? 'text-primary' : 'text-primary/40 hover:text-primary/70'"
      >{{ code }}</NuxtLink>
      <span v-if="i < options.length - 1" class="text-primary/20">/</span>
    </template>
  </div>
</template>
