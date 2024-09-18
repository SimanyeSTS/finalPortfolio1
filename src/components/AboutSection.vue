#ff8c00<template>
  <div>
    <SpinnerComp v-if="loading" />
    <div v-else>
      <h1>About</h1>
      <section class="about-section">
        <div class="container">
          <div class="text-container">
            <p>{{ aboutText }}</p>
          </div>
          <div class="skills-and-arrows">
            <div class="skills-container">
              <h3>Technical Skills:</h3>
              <div class="skills-grid">
                <div v-for="skillEntry in skillsWithLogo" :key="skillEntry.id" class="skill-card">
                  <SkillsCard :image="skillEntry.logo" :title='skillEntry.title' class="small-card">
                    <template v-slot:default>
                      <p>{{ skillEntry['description-1'] }}</p>
                      <p>{{ skillEntry['description-2'] }}</p>
                      <p>{{ skillEntry['description-3'] }}</p>
                    </template>
                  </SkillsCard>
                </div>
              </div>
              <div class="additional-skills">
                <h3>Soft Skills:</h3>
                <ul>
                  <li v-for="skillEntry in skillsWithoutLogo" :key="skillEntry.id">
                    {{ skillEntry.description }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="scroll-arrows visible">
              <div class="up-arrow" @click="scrollUpSkills">
                <i class="fas fa-arrow-up" style="color: orange;"></i>
              </div>
              <div class="down-arrow" @click="scrollDownSkills">
                <i class="fas fa-arrow-down" style="color: orange;"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import SkillsCard from '@/components/SkillsCard.vue';
import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp, faArrowDown);

export default {
  name: 'AboutSection',
  components: {
    SpinnerComp,
    SkillsCard
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState({
      about: state => state.about,
      resume: state => state.resume
    }),
    aboutText() {
      return this.about ? this.about[0].description : '';
    },
    skillsWithLogo() {
      return this.resume && this.resume.Skills ? this.resume.Skills.filter(skill => skill.logo) : [];
    },
    skillsWithoutLogo() {
      return this.resume && this.resume.Skills ? this.resume.Skills.filter(skill => !skill.logo) : [];
    }
  },
  mounted() {
    Promise.all([this.$store.dispatch('fetchAbout'), this.$store.dispatch('fetchResume')]).then(() => {
      this.loading = false;
    });
  },
  methods: {
  scrollUpSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.scrollTop -= 100; // Scroll up by 100 pixels
    skillsContainer.scroll({
      top: skillsContainer.scrollTop,
      behavior: 'smooth'
    });
  },
  scrollDownSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.scrollTop += 100; // Scroll down by 100 pixels
    skillsContainer.scroll({
      top: skillsContainer.scrollTop,
      behavior: 'smooth'
    });
  },
}
};
</script>

<style scoped>
.about-section {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  color: white;
}

.container {
  display: flex;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
}

.text-container {
  flex: 1;
  padding: 20px;
  text-align: center;
  margin-bottom: 5%;
  font-size: 130%;
}

.skills-and-arrows {
  display: flex;
  justify-content: space-between;
}

.skills-container {
  flex: 1;
  padding-left: 180px;
  padding-bottom: 5%;
  max-height: 600px;
  overflow-y: auto; /* Show scrollbar */
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.skill-card {
  display: flex;
  justify-content: center;
  background-color: #36454F !important;
  border-radius: 3%;
}

.additional-skills {
  margin-top: 20px;
  text-align: left;
}

.additional-skills ul {
  list-style-type: none;
  padding-left: 0;
}

.additional-skills li {
  margin-bottom: 10px;
}

h1, h3, h4 {
  color: white;
  text-align: center;
}

p, h5 {
  font-weight: bold;
  color: white;
}

p {
  font-size: 100%;
}

.small-card {
  width: 100%;
  height: auto;
  font-size: 0.8em;
  background-color: #36454F !important;
}

.scroll-arrows {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  opacity: 1; /* Adjust opacity */
  transition: opacity 0.2s ease;
}

.scroll-arrows.visible {
  opacity: 1;
}

.up-arrow, .down-arrow {
  cursor: pointer;
  font-size: 24px;
  transition: opacity 0.2s ease;
}

.up-arrow:hover, .down-arrow:hover {
  opacity: 0.8;
}

/* Responsive styles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    font-size: small;
  }

  .text-container, .skills-container {
    flex: none;
    width: 100%;
    font-size: small;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .skills-container {
    padding-left: 20px;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 10px;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  p {
    font-size: small;
  }

  .skills-container {
    overflow-y: visible; /* Remove scrollbar on mobile views */
    max-height: none; /* Remove max-height on mobile views */
    padding: 10px; /* Adjust padding on mobile views */
    margin-bottom: 20px; /* Adjust margin on mobile views */
  }
}

@media (max-width: 300px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skills-container {
    padding-left: 10px;
    padding-bottom: 20px;
  }

  p {
    font-size: 85%;
  }

  /* Adjust text-container for mobile */
  .text-container {
    padding: 10px;
    margin-bottom: 10px;
    font-size: small !important; /* Reduce font size */
  }

  .additional-skills {
    margin-top: 10px;
  }
}

/* Hide scrollbar */
::-webkit-scrollbar {
  display: none;
}

/* For IE and Edge */
body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (max-width: 768px) {
  .scroll-arrows {
    display: none;
  }
}
</style>