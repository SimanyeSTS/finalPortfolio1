<template>
  <div class="card">
    <div class="card-image">
      <img :src="testimonial.image" alt="Testimonial Image" />
    </div>
    <div class="card-body">
      <h3>{{ testimonial.title }}</h3>
      <p>{{ testimonial.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsCard1',
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card-image {
  margin-right: 20px;
}

.card-image img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.card-body {
  flex: 1;
}
</style>
