<template>
  <h1>Home</h1>
  <section v-if="jobTitles.length > 0" class="home-section">
    <div class="container">
      <div class="image-container">
        <img :src="currentJobImage" alt="Profile Picture" class="profile-image" />
      </div>
      <div class="text-container">
        <h1>
          Hi, my name is <br />
          <span class="name">Simanye Somdaka</span>
        </h1>
        <h2>And I am an Aspiring {{ currentJobTitle }}.</h2>
        <div class="buttons-container">
          <button @click="downloadResume" class="btn btn-primary">
            <i class="fa fa-file"></i> Resume</button>
          <button @click="viewVideoIntro" class="btn btn-secondary">
            <i class="fa fa-video"></i> Video Intro</button>
        </div>
      </div>
    </div>
  </section>
  <div v-else>Loading...</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'HomeSection',
  data() {
    return {
      currentJobTitle: '',
      currentJobImage: '',
      jobTitleIndex: 0
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
          this.startJobTitleRotation();
        }
      },
      immediate: true
    }
  },
  created() {
    this.$store.dispatch('fetchJobTitle');
  },
  methods: {
    startJobTitleRotation() {
      setInterval(() => {
        this.jobTitleIndex = (this.jobTitleIndex + 1) % this.jobTitles.length;
        this.currentJobTitle = this.jobTitles[this.jobTitleIndex].title;
        this.currentJobImage = this.jobTitles[this.jobTitleIndex].image;
      }, 5000);
    },
    downloadResume() {
      window.open('@/components/ResumeSection');
    },
    viewVideoIntro() {
      window.open('https://www.youtube.com/watch?v=underConstruction');
    }
  }
};
</script>

<style scoped>
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
  /* background: linear-gradient(to right, #36454F 25%, #ff8c00 50%); */
}
.image-container {
  flex: 1;
  padding: 20px;
}
.profile-image {
  width: 100%;
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
.btn-secondary {
  background-color: white;
  color: #ff8c00;
}
</style>