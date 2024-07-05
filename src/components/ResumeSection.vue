<template>
  <div class="resume">
    <h1>
      Resume
      <span>
        <button @click="downloadResume" class="btn btn-primary">
          <i class="bi bi-file-earmark-arrow-down"></i></button></span>
    </h1>
    <section class="education">
      <h2>Education:</h2>
      <div class="grid-container">
        <div v-for="educationEntry in resume && resume.Education" :key="educationEntry.id" class="skills-card">
          <SkillsCard :image="educationEntry.image">
            <template v-slot:default>
              <p>{{ educationEntry.description }}</p>
            </template>
          </SkillsCard>
        </div>
      </div>
    </section>
    <section class="skills">
      <h2>Skills:</h2>
      <div class="grid-container">
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
  methods: {
    downloadResume() {
      window.open('https://drive.google.com/file/d/1Kvx3wcvvMgBis9nw-B2PGo760CPoUTKz/view?usp=sharing', '_blank');
    }
  }
};
</script>

<style scoped>
.skills-card, .skill-entry {
  margin-bottom: 10px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
}
.resume {
  text-align: center;
}
.btn-primary {
  background-color: transparent;
  color: #ff8c00;
}
h1, h2, h3, p {
  color: white;
  font-weight: bold;
}
h2 {
  margin-top: 20px;
}
</style>
