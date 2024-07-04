<template>
    <div class="testimonials-section">
      <h2>Testimonials</h2>
      <div class="testimonials-grid">
        <div v-for="testimonial in testimonialsCard1" :key="testimonial.id" class="testimonial-card">
          <TestimonialsCard1 :testimonial="testimonial" />
        </div>
        <div v-for="testimonial in testimonialsCard2" :key="testimonial.id" class="testimonial-card">
          <TestimonialsCard2 :testimonial="testimonial" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import TestimonialsCard1 from '@/components/TestimonialsCard1.vue';
  import TestimonialsCard2 from '@/components/TestimonialsCard2.vue';
  
  export default {
    name: 'TestimonialsSection',
    components: {
      TestimonialsCard1,
      TestimonialsCard2
    },
    computed: {
      ...mapState({
        testimonials: state => state.testimonials
      }),
      testimonialsCard1() {
        return this.testimonials ? this.testimonials.filter(testimonial => [1, 3, 5].includes(testimonial.id)) : [];
      },
      testimonialsCard2() {
        return this.testimonials ? this.testimonials.filter(testimonial => [2, 4, 6].includes(testimonial.id)) : [];
      }
    },
    mounted() {
      this.fetchTestimonials();
    },
    methods: {
      ...mapActions(['fetchTestimonials'])
    }
  };
  </script>
  
  <style scoped>
  .testimonials-section {
    margin-top: 40px;
    padding: 0 20px;
  }
  
  .testimonials-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .testimonial-card {
    width: calc(50% - 10px);
  }
  </style>
  