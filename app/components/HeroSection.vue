<script setup lang="ts">
const videoSrc =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4'
</script>

<template>
  <section class="relative h-screen w-full bg-black p-4 md:p-6">
    <div
      class="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900 md:rounded-[2rem]"
    >
      <video
        :src="videoSrc"
        class="absolute inset-0 h-full w-full object-cover"
        autoplay
        loop
        muted
        playsinline
      />

      <div class="noise-overlay absolute inset-0 mix-blend-overlay opacity-[0.7]" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
      />

      <HeroNavbar />

      <div class="relative z-10 flex h-full flex-col">
        <div class="mt-auto grid grid-cols-12 items-end gap-4 p-6 md:p-10 lg:p-14">
          <div class="col-span-12 lg:col-span-8">
            <p class="mb-6 text-base font-medium uppercase tracking-[0.3em] text-primary md:mb-8 md:text-xl lg:text-2xl">
              I am ...
            </p>
            <h1
              class="font-medium leading-[0.85] tracking-[-0.07em] text-primary text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13vw] xl:text-[12vw] 2xl:text-[13vw]"
            >
              <span class="relative inline-block">
                Ignacio G.<span
                  class="absolute text-[0.31em]"
                  style="top: 0.65em; right: -0.3em"
                >*</span>
              </span>
            </h1>
          </div>

          <div class="col-span-12 flex flex-col gap-6 lg:col-span-4 lg:pb-6">
            <div class="max-w-sm space-y-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <p class="text-lg font-semibold leading-tight text-primary md:text-xl">
                Fullstack Web Developer.
              </p>
              <p class="text-sm leading-snug text-primary/90 md:text-base">
                Building clean and modern software.
              </p>
              <p class="text-sm leading-snug text-primary/90 md:text-base">
                +1 year of professional fintech experience.
              </p>
              <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary md:text-sm">
                <span>23 years old</span>
                <span class="h-1 w-1 rounded-full bg-primary/50" />
                <span>Tucumán, Argentina</span>
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3 self-start">
              <PillCTA to="/projects" label="Latest projects" />
              <PillCTA
                href="/Jose-Robledo-CV-Full-Stack-Developer.pdf"
                label="Download CV"
                variant="outline"
                icon="download"
                download
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
