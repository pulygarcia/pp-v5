<script setup lang="ts">
const headingSegments = [
  { text: 'Interfaces that look great', className: 'text-primary' },
  { text: ' and actually work ', className: 'italic font-serif text-primary' },
  { text: '> interfaces that just work.', className: 'text-primary' },
]

const paragraphs = [
  'I am a 23 years old Developer, English B1, with +1 year of professional experience working at a fintech that facilitates access to housing in Chile, Brazil and Peru, contributing to a SaaS platform for mortgage credit management — applying SOLID principles and working with a Service-oriented architecture.',
  'I develop using AI-assisted workflows and modern methodologies such as Spec-Driven Development, and I\'m always studying with best practices and modern technologies always focusing on clean code and engaging user interfaces.',
  'I\'m looking for a place that brings new challenges and learning opportunities to keep growing in my career: a team where I can contribute to products with real impact, take ownerships, and sharpen my skills alongside experienced engineers.',
]
</script>

<template>
  <section id="about" class="bg-black px-4 py-24 md:px-6 md:py-32 lg:py-40">
    <div
      class="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-16 md:rounded-[2rem] md:px-12 md:py-24 lg:px-20 lg:py-32"
    >
      <div class="mb-8 flex flex-col items-center gap-4 md:mb-12">
        <p class="text-[10px] uppercase tracking-[0.3em] text-primary sm:text-xs">
          About
        </p>
        <span
          class="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400 sm:text-xs"
        >
          Open to new opportunities
        </span>
      </div>

      <h2
        class="mx-auto max-w-5xl text-center font-medium leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]"
      >
        <WordsPullUpMultiStyle :segments="headingSegments" />
      </h2>

      <div class="mx-auto mt-12 max-w-3xl space-y-6 md:mt-16">
        <ScrollRevealParagraph
          v-for="(p, i) in paragraphs"
          :key="i"
          :text="p"
          :class-name="[
            'text-center text-base leading-relaxed text-primary md:text-lg lg:text-xl',
            i === paragraphs.length - 1
              ? '[text-shadow:0_0_16px_rgba(52,211,153,0.28)]'
              : '',
          ].join(' ')"
        />
      </div>
    </div>
  </section>
</template>
