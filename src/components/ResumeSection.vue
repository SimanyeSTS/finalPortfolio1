<template>
    <div class="resume">
      <header>
        <h1>Resume <span><button @click="downloadResume" class="btn btn-primary">
              <i class="fa fa-file"></i> Download
            </button></span></h1>
          </header>
      <section class="education">
        <h2>Education:</h2>
        <div v-for="educationEntry in resume && resume.Education" :key="educationEntry.id" class="skills-card">
          <SkillsCard :image="educationEntry.image">
            <template v-slot:default>
              <p>{{ educationEntry.description }}</p>
            </template>
          </SkillsCard>
        </div>
      </section>
      <section class="skills">
        <h2>Skills:</h2>
        <div v-for="skillEntry in resume && resume.Skills" :key="skillEntry.id">
          <template v-if="skillEntry.logo">
            <div class="skills-card">
              <SkillsCard :image="skillEntry.logo">
                <template v-slot:default>
                  <p>{{ skillEntry.description }}</p>
                </template>
              </SkillsCard>
            </div>
          </template>

          <template v-else>
            <div class="skill-entry">
              <p>{{ skillEntry.description }}</p>
            </div>
          </template>
        </div>
      </section>
      <section class="extracurricular">
      <h2>Extracurricular Activities:</h2>
      <div v-for="activity in resume && resume['Extracurricular Activities']" :key="activity.id">
        <div class="activity-entry">
          <h3>{{ activity.title }}</h3>
          <p>{{ activity.description }}</p>
        </div>
      </div>
    </section>
    <section class="volunteering">
      <h2>Volunteering Experience:</h2>
      <div v-for="experience in resume && resume['Volunteering Experience']" :key="experience.id">
        <div class="experience-entry">
          <h3>{{ experience.title }}</h3>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </section>
  </div>

</template>
  <script>
  import SkillsCard from '@/components/SkillsCard.vue';
  export default {
    name: 'ResumeSection',
    components: {
      SkillsCard
    },
    computed: {
      resume() {
        return this.$store.state.resume;
      }
    },
    created() {
      this.$store.dispatch("fetchResume");
    },
  };
  </script>
  <style scoped>
  .skills-card {
    margin-bottom: 10px;
  }
  .skill-entry {
    margin-bottom: 10px;
  }
  </style>