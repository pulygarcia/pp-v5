<template>
  <div class="min-h-screen bg-black text-primary">
    <HeroSection />
    <AboutSection />
    <StackSection />
    <ProjectsSection />
    <HobbiesSection />

    <!-- Signature -->
    <div class="flex justify-center overflow-hidden bg-black pb-0 pt-16">
      <p class="text-[13vw] font-medium leading-none tracking-[-0.04em] text-primary/10 transition-colors duration-300 hover:text-primary/20">
        <DecryptedText text="Contact me!" :duration="900" />
      </p>
    </div>

    <ContactSection />
  </div>
</template>
