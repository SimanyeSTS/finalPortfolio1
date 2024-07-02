<template>
  <div class="wrapper">
    <NavBar />
    <main>
      <router-view />
      <HomeSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
    <FooterComp />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AboutSection from '@/components/AboutSection.vue'
import FooterComp from '@/components/FooterComp.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import HomeSection from '@/components/HomeSection.vue'

export default {
  components: {
    NavBar,
    AboutSection,
    FooterComp,
    ProjectsSection,
    ResumeSection,
    TestimonialsSection,
    HomeSection
  }
}
</script>

<style>

</style>
