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
      <h2>Work Experience:</h2>
      <div v-for="experience in resume && resume['Work Experience']" :key="experience.id">
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
import Swal from 'sweetalert2';
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
    Swal.fire("Error fetching education & experience:", err);
  });
},
methods: {
  downloadResume() {
    window.open('https://drive.google.com/file/d/1tXSYh8UiUmeT27_EmQ4sm7ZOfr_CODbn/view?usp=sharing', '_blank');
  }
}
};
</script>

<style scoped>
.resume {
  text-align: center;
  padding: 10px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
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
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
}

.card {
  width: 100%;
  max-width: 280px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  color: black;
}

.skills .skills-card .card-body {
  flex-grow: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.skills .skills-card .card-body p {
  margin: 0;
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.btn-primary {
  background-color: transparent;
  color: #ff8c00;
  border: none
}

.btn-primary:hover {
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

.education-title {
  color: #ff8c00 !important;
}

@media (max-width: 300px) {
  .grid-container {
    gap: 5px;
  }

  .skills-card, .card {
    max-width: 260px;
  }

  h1, h2 {
    font-size: 18px;
  }
}
</style>
