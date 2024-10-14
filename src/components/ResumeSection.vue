<template>
<div>
  <h1>
    Education & Experience
    <span>
      <button @click="downloadResume" class="btn btn-primary">
        <i class="bi bi-file-earmark-arrow-down"></i>
      </button>
    </span>
  </h1>
  <div v-if="loading" class="loading-spinner">
    <SpinnerComp />
  </div>
  <div v-else class="resume">
    <section class="education">
  <h2>Education:</h2>
  <div class="grid-container">
    <div v-for="educationEntry in resume && resume.Education" :key="educationEntry.id" class="skills-card">
      <SkillsCard :image="educationEntry.image" :title="educationEntry.title" class="education-title">
        <template v-slot:default>
          <p>{{ educationEntry.description }}</p>
        </template>
      </SkillsCard>
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
    <section class="employment">
      <h2>Employment Experiencing:</h2>
      <div v-for="experience in resume && resume['Employment Experience']" :key="experience.id">
        <div class="exprience-entry">
          <h3>{{ experience.title }}</h3>
          <p>{{ experience.description   }}</p>
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
</div>
</template>
<script>
import SkillsCard from '@/components/SkillsCard.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
name: 'ResumeSection',
components: {
  SkillsCard,
  SpinnerComp
},
computed: {
  resume() {
    return this.$store.state.resume;
  },
  loading() {
    return this.$store.state.loadingResume;
  }
},
created() {
  this.$store.dispatch("fetchResume").catch(err => {
    console.error("Error fetching resume:", err);
  });
},
methods: {
  downloadResume() {
    window.open('https://drive.google.com/file/d/1Kvx3wcvvMgBis9nw-B2PGo760CPoUTKz/view?usp=sharing', '_blank');
  }
}
};
</script>

<style scoped>
.resume {
  text-align: center;
  padding: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  justify-items: center;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skills-card, .skill-entry {
  margin-bottom: 10px;
}

.card {
  width: 18rem;
  height: 25rem; 
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  color: black;
}

.skills .skills-card .card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px; 
  padding: 20px;
}

.skills .skills-card .card-body p {
  margin: 0; 
  text-align: center; 
  line-height: 1.5; 
}

.btn-primary {
  background-color: transparent;
  color: #ff8c00;
}

.btn-primary:hover{
  background-color: rgb(0, 85, 255) !important;
  color: white !important;
}

h1, h2, h3, p {
  color: white;
  font-weight: bold;
}

h2 {
  margin-top: 20px;
}

h1 {
  text-align: center;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.education-title{
  color: #ff8c00 !important;
}
</style>