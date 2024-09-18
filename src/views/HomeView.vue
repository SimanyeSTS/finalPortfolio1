<template>
  <div class="container-fluid">
    <section class="row" id="home">
      <HomeSection />
    </section>
    <hr id="homeabout">
    <section class="row" id="about">
      <AboutSection />
    </section>
    <br>
    <hr>
    <br>
    <section class="row" id="resume">
      <ResumeSection />
    </section>
    <hr>
    <section class="row projects" id="projects">
      <ProjectsSection />
    </section>
    <br>
    <hr>
    <br>
    <!-- <section class="row" id="testimonials">
      <TestimonialsSection />
    </section> -->
    <!-- <hr> -->
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
// import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  components: {
    HomeSection,
    AboutSection,
    ResumeSection,
    ProjectsSection,
    // TestimonialsSection,
    ContactSection
   }
}
</script>

<style>
#home{
  background: linear-gradient(to right, #36454F 25%, #ff8c00 50%);
}

#about{
  background: linear-gradient(to right, #ff8c00 50%, #36454F 65%);

}

#resume{
  background-color: #36454F;
}

#projects{
  background-color: #36454F;
}

#testimonials{
  background-color: #36454F;
}

#contact{
  background-color: #36454F;
}

#homeabout{
  border: none !important;
  border-top: 0px solid #ff8c00 !important;
  border-color: #ff8c00 !important;
  width: 100vw !important;
  margin: 0 !important;
  position: relative !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

hr{
  border: none !important;
  border-top: 3px solid #ff8c00 !important;
  border-color: #ff8c00 !important;
  width: 100vw !important;
  margin: 0 !important;
  position: relative !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}
</style>