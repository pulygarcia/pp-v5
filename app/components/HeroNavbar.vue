<script setup lang="ts">
const items = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav
    class="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-black px-4 py-3 md:rounded-b-3xl md:px-8 md:py-4"
  >
    <ul class="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
      <li v-for="item in items" :key="item.label">
        <a
          :href="item.href"
          class="whitespace-nowrap text-[10px] uppercase tracking-wider text-primary/80 transition-colors hover:text-primary sm:text-xs md:text-sm"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
