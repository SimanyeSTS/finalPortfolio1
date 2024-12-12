<template>
  <div>
    <SpinnerComp v-if="loading" />
    <div v-else class="about-wrapper">
      <h1 class="main-title">About</h1>
      <section class="about-section">
        <div class="container">
          <div class="text-container">
            <p class="about-text">{{ aboutText }}</p>
          </div>
          <div class="skills-and-arrows">
            <div class="skills-container">
              <h3 class="skills-title">Technical Skills:</h3>
              <div class="skills-grid">
                <div v-for="skillEntry in skillsWithLogo" :key="skillEntry.id" class="skill-card">
                  <SkillsCard :image="skillEntry.logo" :title='skillEntry.title' class="small-card">
                    <template v-slot:default>
                      <h6 class="skill-name">{{ skillEntry['skill'] }}</h6>
                      <p class="skill-desc">{{ skillEntry['description-1'] }}</p>
                      <p class="skill-desc">{{ skillEntry['description-2'] }}</p>
                      <p class="skill-desc">{{ skillEntry['description-3'] }}</p>
                    </template>
                  </SkillsCard>
                </div>
              </div>
              <div class="certificates-section">
                <h3 class="skills-title">Industry Certificates:</h3>
                <div class="certificates-grid">
                  <div v-for="badge in badges" :key="badge.id" class="certificate-item">
                    <CertificatesCard 
                      :image="badge.image" 
                      :title="badge.title"
                      :link="badge.link"
                    >
                      <p class="certificate-desc">{{ badge.description }}</p>
                    </CertificatesCard>
                  </div>
                </div>
              </div>
              <div class="additional-skills">
                <h3 class="skills-title">Soft Skills:</h3>
                <ul class="soft-skills-list">
                  <li v-for="skillEntry in skillsWithoutLogo" :key="skillEntry.id" class="soft-skill-item">
                    {{ skillEntry.description }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="scroll-arrows visible">
              <button class="arrow-btn up-arrow" @click="scrollUpSkills" aria-label="Scroll Up">
                <i class="fas fa-arrow-up"></i>
              </button>
              <button class="arrow-btn down-arrow" @click="scrollDownSkills" aria-label="Scroll Down">
                <i class="fas fa-arrow-down"></i>
              </button>
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
import CertificatesCard from '@/components/CertificatesCard.vue';
import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp, faArrowDown);

export default {
  name: 'AboutSection',
  components: {
    SpinnerComp,
    SkillsCard,
    CertificatesCard
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
    },
    badges() {
      return this.resume && this.resume.Badges ? this.resume.Badges : [];
    }
  },
  mounted() {
    Promise.all([
      this.$store.dispatch('fetchAbout'),
      this.$store.dispatch('fetchResume')
    ]).then(() => {
      this.loading = false;
    });
  },
  methods: {
    scrollUpSkills() {
      const skillsContainer = document.querySelector('.skills-container');
      skillsContainer.scroll({
        top: skillsContainer.scrollTop - 150,
        behavior: 'smooth'
      });
    },
    scrollDownSkills() {
      const skillsContainer = document.querySelector('.skills-container');
      skillsContainer.scroll({
        top: skillsContainer.scrollTop + 150,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.about-wrapper {
  min-height: 100vh;
  padding: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

.main-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: white;
  text-align: center;
  font-weight: bold;
  margin: clamp(1rem, 4vw, 2rem) auto;
  padding: 0 1rem;
}

.about-section {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  gap: clamp(1rem, 4vw, 3rem);
  flex-wrap: wrap;
}

.text-container {
  flex: 1 1 300px;
  min-width: 0;
  padding: 1rem;
}

.about-text {
  font-size: clamp(1rem, 2vw, 1.3rem);
  line-height: 1.6;
  font-weight: 500;
  color: white;
  text-align: left;
}

.skills-and-arrows {
  flex: 1 1 300px;
  min-width: 0;
  display: flex;
  gap: 1rem;
}

.skills-container {
  flex: 1;
  max-height: 600px;
  overflow-y: auto;
  padding: 1rem;
  scrollbar-width: thin;
  scrollbar-color: #ff8c00 transparent;
}

.skills-container::-webkit-scrollbar {
  width: 6px;
  display: block;
}

.skills-container::-webkit-scrollbar-track {
  background: transparent;
}

.skills-container::-webkit-scrollbar-thumb {
  background-color: #ff8c00;
  border-radius: 3px;
}

.skills-title {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: white;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
  gap: 1rem;
  width: 100%;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
}

.skill-card, .certificate-item {
  width: 100%;
  min-width: 0;
}

.certificates-section {
  margin-top: 2rem;
}

.certificate-desc {
  color: white;
  font-size: 0.9rem;
  line-height: 1.4;
}

.skill-card {
  background-color: #36454F;
  border-radius: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.2);
}

.small-card {
  width: 100%;
  height: 100%;
  padding: clamp(0.5rem, 2vw, 1rem);
  background-color: #36454F !important;
}

.skill-name {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  color: #ff8c00;
  margin-bottom: 0.5rem;
}

.skill-desc {
  font-size: clamp(0.8rem, 1.3vw, 0.9rem);
  color: white;
  margin: 0.25rem 0;
}

.additional-skills {
  margin-top: 2rem;
}

.soft-skills-list {
  list-style-type: none;
  padding: 0;
}

.soft-skill-item {
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  margin-bottom: 0.75rem;
  padding-left: 1rem;
  position: relative;
}

.soft-skill-item::before {
  content: "•";
  color: #ff8c00;
  position: absolute;
  left: 0;
}

.scroll-arrows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

.arrow-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #ff8c00;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.arrow-btn:hover {
  background: rgba(255, 140, 0, 0.1);
  transform: scale(1.1);
}

/* Mobile-first responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding: 0.5rem;
  }
  
  .text-container,
  .skills-container {
    flex: 1 1 100%;
    padding: 0.5rem;
  }
  
  .scroll-arrows {
    display: none;
  }
  
  .skills-container {
    max-height: none;
    overflow: visible;
  }
}

@media (max-width: 480px) {
  .skills-grid,
  .certificates-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .main-title {
    margin: 1rem auto;
  }
}

@media (max-width: 300px) {
  .container {
    padding: 0.25rem;
  }
  
  .text-container,
  .skills-container {
    padding: 0.25rem;
  }
  
  .skills-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  
  .skill-name {
    font-size: 0.9rem;
  }
  
  .skill-desc,
  .certificate-desc {
    font-size: 0.8rem;
  }
}
</style>