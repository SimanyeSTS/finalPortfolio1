<template>
  <div>
    <h1>Testimonials</h1>

    <div v-if="loading" class="loading-spinner">
      <SpinnerComp />
    </div>
    <div v-else class="container text-center">
      <div class="row">
        <div v-for="(testimonial, index) in sortedTestimonials" :key="testimonial.id" class="col-12 mb-4">
          <div class="row">
            <div class="col-md-4">
              <TestimonialsCard1 v-if="index % 2 === 0" :testimonial="testimonial" />
            </div>
            <div class="col-md-4 ms-auto">
              <TestimonialsCard2 v-if="index % 2 !== 0" :testimonial="testimonial" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TestimonialsCard1 from '@/components/TestimonialsCard1.vue';
import TestimonialsCard2 from '@/components/TestimonialsCard2.vue';
import SpinnerComp from '@/components/SpinnerComp.vue'; // Import the spinner component

export default {
  name: 'TestimonialsSection',
  components: {
    TestimonialsCard1,
    TestimonialsCard2,
    SpinnerComp // Include the spinner component in your components section
  },
  computed: {
    ...mapState({
      testimonials: (state) => state.testimonials,
      loading: (state) => state.loadingTestimonials // Track loading state from Vuex
    }),
    sortedTestimonials() {
      return this.getSortedTestimonials();
    },
  },
  mounted() {
    this.fetchTestimonials();
  },
  methods: {
    ...mapActions(['fetchTestimonials']),
    getSortedTestimonials() {
      if (!this.testimonials) return [];
      return [...this.testimonials].sort((a, b) => a.id - b.id);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 40px;
}
h1 {
  color: white;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
</style>
