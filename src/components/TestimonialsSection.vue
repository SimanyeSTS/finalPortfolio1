<template>
    <div class="testimonials">
      <h1>Testimonials</h1>
      <ul>
        <li v-for="testimonial in testimonials" :key="testimonial.id">
          <component
            :is="testimonial.id % 2 === 0 ? 'TestimonialsCard1' : 'TestimonialsCard2'"
            :testimonial="testimonial"
          >
            <template v-slot:cardHeader>
              <h2>{{ testimonial.title }}</h2>
            </template>
            <template v-slot:cardBody>
              <p>{{ testimonial.description }}</p>
            </template>
          </component>
        </li>
      </ul>
    </div>
  </template>
  <script>
  import { mapState, mapActions } from 'vuex';
  export default {
    name: 'TestimonialsSection',
    computed: {
      ...mapState({
        testimonials: state => state.testimonials
      })
    },
    created() {
      this.fetchTestData();
    },
    methods: {
      ...mapActions(['fetchTestimonials'])
    }
  };
  </script>
  <style scoped>
  .testimonials {
    padding: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 30px;
  }
  </style>