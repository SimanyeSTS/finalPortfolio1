<template>
    <section class="about-section">
      <div class="container">
        <div class="text-container">
          <h1>About</h1>
          <p>{{ aboutText }}</p>
        </div>
        <div class="image-container">
          <img :src="profileImage" alt="Profile Picture" class="profile-image" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'AboutSection',
    computed: {
      ...mapState({
        about: state => state.about
      }),
      aboutText() {
        return this.about ? this.about[0].description : '';
      },
      profileImage() {
        return this.about ? this.about[0].image : '';
      }
    },
    mounted() {
      this.$store.dispatch('fetchAbout');
    }
  };
  </script>
  
  <style scoped>
  .about-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: #2e2e2e;
    color: white;
  }
  
  .container {
    display: flex;
    max-width: 1200px;
    width: 100%;
  }
  
  .text-container {
    flex: 1;
    padding: 20px;
    background-color: #ff6600;
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
  </style>
  