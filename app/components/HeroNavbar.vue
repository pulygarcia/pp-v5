<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const NuxtLink = resolveComponent('NuxtLink')

const items = computed(() => [
  { label: t('nav.about'), href: '#about', route: false },
  { label: t('nav.projects'), href: localePath('/projects'), route: true },
  { label: t('nav.stack'), href: '#stack', route: false },
  { label: t('nav.contact'), href: '#contact', route: false },
])
</script>

<template>
  <nav
    class="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-black px-4 py-3 md:rounded-b-3xl md:px-8 md:py-4"
  >
    <ul class="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
      <li v-for="item in items" :key="item.href">
        <component
          :is="item.route ? NuxtLink : 'a'"
          :to="item.route ? item.href : undefined"
          :href="item.route ? undefined : item.href"
          class="whitespace-nowrap text-[10px] uppercase tracking-wider text-primary/80 transition-colors hover:text-primary sm:text-xs md:text-sm"
        >
          {{ item.label }}
        </component>
      </li>
      <li>
        <LangSwitcher />
      </li>
    </ul>
  </nav>
</template>
