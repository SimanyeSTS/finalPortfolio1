<template>
  <section v-if="jobTitles.length > 0" class="home-section">
    <div class="container">
      <div class="image-container">
        <img :src="currentJobImage" alt="Profile Picture" class="profile-image" loading="lazy"/>
      </div>
      <div class="text-container">
        <h1>
          Hi, this is <br />
          <span class="name">Simanye Somdaka</span>
        </h1>
        <h2>
          And I am 
          <div class="job-title-container">
            <span class="job-title">{{ displayJobTitle }}</span>
          </div>
        </h2>
        <div class="buttons-container">
          <button @click="downloadResume" class="btn btn-primary">
            <i class="bi bi-file-earmark-person-fill"></i>Resume
          </button>
          <button @click="viewVideoIntro" class="btn btn-secondary">
            <i class="bi bi-camera-reels-fill"></i>Video Intro
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeSection',
  data() {
    return {
      currentJobTitle: '',
      currentJobImage: '',
      jobTitleIndex: 0,
      displayJobTitle: '',
      typing: true, 
      typingSpeed: 150,
      erasingSpeed: 100,
      delayBeforeErase: 1500,
      delayBeforeType: 500,
    };
  },
  computed: {
    ...mapState({
      jobTitles: state => state.jobTitle
    })
  },
  watch: {
    jobTitles: {
      handler(newVal) {
        if (newVal && newVal.length > 0) {
          this.currentJobTitle = newVal[this.jobTitleIndex].title;
          this.currentJobImage = newVal[this.jobTitleIndex].image;
          this.typeJobTitle();
        }
      },
      immediate: true
    }
  },
  created() {
    this.$store.dispatch('fetchJobTitle');
  },
  methods: {
    typeJobTitle() {
      let fullTitle = this.jobTitles[this.jobTitleIndex].title;
      let currentText = '';
      let index = 0;

      const typeInterval = setInterval(() => {
        if (index < fullTitle.length) {
          currentText += fullTitle[index];
          this.displayJobTitle = currentText;
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => this.eraseJobTitle(), this.delayBeforeErase);
        }
      }, this.typingSpeed);
    },

    eraseJobTitle() {
      let currentText = this.displayJobTitle;
      let index = currentText.length;

      const eraseInterval = setInterval(() => {
        if (index > 0) {
          currentText = currentText.substring(0, index - 1);
          this.displayJobTitle = currentText;
          index--;
        } else {
          clearInterval(eraseInterval);
          this.jobTitleIndex = (this.jobTitleIndex + 1) % this.jobTitles.length;
          this.currentJobTitle = this.jobTitles[this.jobTitleIndex].title;
          this.currentJobImage = this.jobTitles[this.jobTitleIndex].image;
          setTimeout(() => this.typeJobTitle(), this.delayBeforeType);
        }
      }, this.erasingSpeed);
    },

    downloadResume() {
      window.open('https://drive.google.com/file/d/1tXSYh8UiUmeT27_EmQ4sm7ZOfr_CODbn/view?usp=sharing');
    },
    viewVideoIntro() {
      window.open('https://www.youtube.com/@simanyesomdaka3513');
    }
  }
}
</script>

<style scoped>
.home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: clamp(1rem, 5vw, 3rem);
  background-color: transparent;
  color: white;
}

.container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: clamp(1rem, 4vw, 3rem);
  padding: clamp(1rem, 3vw, 2rem);
  margin: 0 auto;
}

.image-container {
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 50%;
}

.profile-image {
  width: min(100%, 500px);
  height: auto;
  border-radius: 1rem;
  box-shadow: 
    -15px 0 15px -15px rgba(255, 140, 0, 0.3),
    15px 0 15px -15px rgba(255, 140, 0, 0.3),
    -15px -15px 15px -15px rgba(255, 140, 0, 0.3),
    15px -15px 15px -15px rgba(255, 140, 0, 0.3),
    -15px 15px 15px -15px rgba(255, 140, 0, 0.3),
    15px 15px 15px -15px rgba(255, 140, 0, 0.3);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
}

.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 2rem);
  justify-content: center;
  max-width: 50%;
}

h1 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: white;
  font-weight: bold;
  line-height: 1.3;
  margin: 0;
}

.name {
  color: black;
  font-weight: bold;
  display: block;
  margin-top: 0.5rem;
}

h2 {
  font-size: clamp(1.2rem, 3vw, 2rem);
  margin: 0;
}

.job-title-container {
  height: 2.4em;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.job-title {
  color: black;
  font-weight: bold;
  font-size: clamp(1.2rem, 3vw, 2rem);
}

.buttons-container {
  display: flex;
  gap: 1rem;
  margin-top: clamp(1rem, 3vw, 2rem);
}

.btn {
  padding: clamp(0.5rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem);
  border: none;
  cursor: pointer;
  font-size: clamp(0.875rem, 2vw, 1rem);
  border-radius: 9999px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn i {
  font-size: 1.1em;
}

.btn-primary {
  background-color: white;
  color: #ff8c00;
}

.btn-primary:hover {
  background-color: rgb(103, 103, 103);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background-color: white;
  color: #ff8c00;
}

.btn-secondary:hover {
  background-color: rgb(103, 103, 103);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto 2rem;
    max-width: 100%;
  }

  .text-container {
    width: 100%;
    align-items: center;
    max-width: 100%;
  }

  .buttons-container {
    justify-content: center;
  }
}

@media (width <= 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .text-container {
    width: 100%;
    align-items: center;
  }

  .buttons-container {
    justify-content: center;
  }
}

@media (width <= 480px) {
  .buttons-container {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .profile-image {
    width: min(90%, 300px);
  }
}

@media (width <= 300px) {
  .home-section {
    padding: 0.5rem;
  }

  .container {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .profile-image {
    width: min(90%, 200px);
  }

  .buttons-container {
    max-width: 200px;
  }

  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}
</style>