<script setup lang="ts">
const { t, locale } = useI18n()

const headingSegments = computed(() => [
  { text: t('about.headingPart1'), className: 'text-primary' },
  { text: t('about.headingAccent'), className: 'italic font-serif text-primary' },
  { text: t('about.headingPart2'), className: 'text-primary' },
])

const paragraphs = computed(() => [t('about.p1'), t('about.p2'), t('about.p3')])
</script>

<template>
  <section id="about" class="bg-black px-4 py-24 md:px-6 md:py-32 lg:py-40">
    <div
      class="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-16 md:rounded-[2rem] md:px-12 md:py-24 lg:px-20 lg:py-32"
    >
      <div class="mb-8 flex flex-col items-center gap-4 md:mb-12">
        <p class="text-[10px] uppercase tracking-[0.3em] text-primary sm:text-xs">
          {{ t('about.eyebrow') }}
        </p>
        <span
          class="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400 sm:text-xs [text-shadow:0_0_24px_rgba(52,211,153,0.7)]"
        >
          {{ t('about.badge') }}
        </span>
      </div>

      <h2
        class="mx-auto max-w-5xl text-center font-medium leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]"
      >
        <WordsPullUpMultiStyle :key="locale" :segments="headingSegments" />
      </h2>

      <div class="mx-auto mt-12 max-w-3xl space-y-6 md:mt-16">
        <p
          v-for="(p, i) in paragraphs"
          :key="i"
          :class="[
            'text-center text-base leading-relaxed text-primary md:text-lg lg:text-xl',
            i === paragraphs.length - 1
              ? '[text-shadow:0_0_24px_rgba(52,211,153,0.5)]'
              : '',
          ].join(' ')"
        >{{ p }}</p>
      </div>
    </div>
  </section>
</template>
