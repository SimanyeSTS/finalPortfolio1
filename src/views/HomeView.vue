<template>
  <div class="container">
    <section class="row" id="home">
      <HomeSection />
    </section>
    <hr>
    <section class="row" id="about">
      <AboutSection />
    </section>
    <hr>
    <section class="row" id="resume">
      <ResumeSection />
    </section>
    <hr>
    <section class="row projects">
      <ProjectsSection />
    </section>
    <hr>
    <section class="row" id="testimonials">
      <TestimonialsSection />
    </section>
    <hr>
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
#home{
  width: 110.7%;
  background: linear-gradient(to right, #36454F 25%, #ff8c00 50%);
}

#about{
  margin-left: -15%;
  background: linear-gradient(to right, #ff8c00 50%, #36454F 100%);

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
hr{
  background-color: #ff8c00;
}
</style>
