<template>
  <div>
    <SpinnerComp v-if="loading" />
    <div v-else>
      <h1>About</h1>
      <section class="about-section">
        <div class="container">
          <div class="text-container">
            <p>{{ aboutText }}</p>
          </div>
          <div class="image-container">
            <img :src="profileImage" alt="Profile Picture" class="profile-image" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import { mapState } from 'vuex';

export default {
  name: 'AboutSection',
  components: {
    SpinnerComp
  },
  data() {
    return {
      loading: true
    };
  },
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
    this.$store.dispatch('fetchAbout').then(() => {
      this.loading = false;
    });
  }
};
</script>

<style scoped>
.about-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: transparent;
  color: white;
  margin-left: 50px;
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
  margin-top: 10%;
}

h1 {
  color: white;
  text-align: center;
  margin-left: 15%;
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

p, h1 {
  font-weight: bold;
}

p {
  font-size: 120%;
}

@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
  }
  .container {
    flex-direction: column;
  }
  .text-container, .image-container {
    flex: 0;
    width: 100%;
  }
  .profile-image {
    width: 80%;
    margin: 20px auto;
  }
  .image-container {
    order: 2;
  }
  .text-container {
    order: 1;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 20px;
  }
  .text-container {
    padding: 10px;
  }
  .image-container {
    padding: 10px;
  }
  p {
    font-size: 100%;
  }
}
</style>