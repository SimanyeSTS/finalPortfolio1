<template>
  <h1>Home</h1>
  <section v-if="jobTitles.length > 0" class="home-section">
    <div class="container">
      <div class="image-container">
        <img :src="currentJobImage" alt="Profile Picture" class="profile-image" loading="lazy"/>
      </div>
      <div class="text-container">
        <h1>
          Hi, my name is <br />
          <span class="name">Simanye Somdaka</span>
        </h1>
        <h2>
          And I am an Aspiring 
          <div class="job-title-container">
            <span class="job-title">{{ displayJobTitle }}</span>
          </div>
        </h2>
        <div class="buttons-container">
          <button @click="downloadResume" class="btn btn-primary">
            <i class="bi bi-file-earmark-person-fill"></i>Resume</button>
          <button @click="viewVideoIntro" class="btn btn-secondary">
            <i class="bi bi-camera-reels-fill"></i>Video Intro</button>
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
      window.open('https://drive.google.com/file/d/1Kvx3wcvvMgBis9nw-B2PGo760CPoUTKz/view?usp=sharing');
    },
    viewVideoIntro() {
      window.open('https://www.youtube.com/@simanyesomdaka3513');
    }
  }
}
</script>

<style scoped>
.job-title-container {
  height: 2.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.job-title {
  display: inline-block;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 100%;
  text-align: center;
}

h2 {
  margin-bottom: 0;
}

.home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: transparent;
  color: white;
}

.text-container {
  flex: 1;
  padding: 20px;
  text-align: center;
  margin-top: 10%;
}

h1 {
  color: white;
  text-align: center;
  font-weight: bold;
}

.container {
  display: flex;
  max-width: 1200px;
  width: 100%;
}

.image-container {
  flex: 1;
  padding: 20px;
  padding-bottom: 10%;
}

.profile-image {
  width: 70%;
  height: auto;
  border-radius: 10px;
}

.name {
  font-weight: bold;
}

.buttons-container {
  margin-top: 20px;
}

.btn {
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.btn-primary {
  background-color: white;
  color: #ff8c00;
}

.btn-primary:hover {
  background-color: rgb(0, 85, 255) !important;
  color: white !important;
}

.btn-secondary {
  background-color: white;
  color: #ff8c00;
}

.btn-secondary:hover {
  background-color: rgb(103, 103, 103) !important;
  color: white !important;
}


@media (width <= 300px) {
  .home-section {
    padding: 10px;
  }
  .container {
    padding: 10px;
  }
  .text-container {
    padding: 10px;
  }
  .image-container{
    margin-left: 20% !important;
  }
  .profile-image {
    width: 50%;
    margin: 10px auto;
  }
  .buttons-container {
    padding: 10px;
  }
  .btn {
    font-size: 12px;
    padding: 5px 10px;
  }
}

@media (width <= 480px) {
  .home-section {
    padding: 20px;
  }
  .container {
    padding: 20px;
  }
.text-container {
    padding: 20px;
  }
  .image-container{
    margin-left: 20% !important;
  }
  .profile-image {
    width: 60%;
    margin: 20px auto;
  }
  .buttons-container {
    padding: 20px;
  }
  .btn {
    font-size: 14px;
    padding: 5px 10px;
  }
}

@media (width <= 768px) {
  .home-section {
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }
  .container {
    flex-direction: column;
    align-items: center;
  }
.text-container {
    flex: 0;
    width: 100%;
    margin-bottom: 20px;
  }
  .image-container{
    margin-left: 20% !important;
  }
  .profile-image {
    width: 80%;
    margin: 20px auto;
  }
  .buttons-container {
    flex-direction: column;
    align-items: center;
  }
  .btn {
    margin-bottom: 10px;
  }
}
</style>