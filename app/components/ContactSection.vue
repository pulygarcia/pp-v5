<script setup lang="ts">
const { t, locale } = useI18n()

function scrollToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}

const links = [
  {
    label: 'Email',
    value: 'pulygarcia09@gmail.com',
    href: 'mailto:pulygarcia09@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'pulygarcia',
    href: 'https://github.com/pulygarcia',
  },
  {
    label: 'LinkedIn',
    value: 'jose-ignacio-robledo',
    href: 'https://www.linkedin.com/in/jose-ignacio-robledo/',
  },
]
</script>

<template>
  <section id="contact" class="bg-black px-4 pb-4 md:px-6 md:pb-6">
    <div class="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-16 md:rounded-[2rem] md:px-12 md:py-24 lg:px-20 lg:py-32">

      <!-- Heading -->
      <h2 class="mx-auto max-w-2xl text-center text-3xl font-medium leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
        <WordsPullUp :key="locale" :text="t('contact.heading')" />
      </h2>

      <p class="mx-auto mt-6 max-w-md text-center text-base leading-relaxed text-primary/50 md:text-lg">
        {{ t('contact.subtitle') }}
      </p>

      <!-- CTA -->
      <div class="mt-10 flex justify-center">
        <PillCTA href="mailto:pulygarcia09@gmail.com" :label="t('contact.cta')" />
      </div>

      <!-- Links -->
      <div class="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          class="group flex flex-col items-center gap-1 transition-opacity hover:opacity-100 opacity-60"
        >
          <span class="text-[10px] uppercase tracking-[0.25em] text-primary/40">{{ link.label }}</span>
          <span class="text-sm font-medium text-primary group-hover:underline underline-offset-4">{{ link.value }}</span>
        </a>
      </div>

    </div>

    <!-- Footer -->
    <footer class="mx-auto flex max-w-6xl items-center justify-between px-2 py-6 md:px-4">
      <span class="text-xs text-primary/30">Ignacio (Puly) G. · © {{ new Date().getFullYear() }}</span>
      <button
        type="button"
        class="text-xs text-primary/30 transition-colors hover:text-primary/60"
        @click="scrollToTop"
      >
        {{ t('contact.backToTop') }}
      </button>
    </footer>
  </section>
</template>
