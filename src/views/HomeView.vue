<template>
  <div class="container">
    <section class="row" id="home">
      <HomeSection />
    </section>
    <section class="row" id="about">
      <AboutSection />
    </section>
    <section class="row" id="resume">
      <ResumeSection />
    </section>
    <section class="row projects">
      <ProjectsSection />
    </section>
    <section class="row" id="testimonials">
      <TestimonialsSection />
    </section>
    <section class="row" id="contact">
      <ContactSection />
    </section>
  </div>
</template>

<script>
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  components: {
    HomeSection,
    AboutSection,
    ResumeSection,
    ProjectsSection,
    TestimonialsSection,
    ContactSection
  }
}
</script>

<style>
</style>
