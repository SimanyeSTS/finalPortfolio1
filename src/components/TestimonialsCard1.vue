<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="testimonial.image" class="img-fluid rounded-start" alt="Testimonial Image">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ testimonial.title }}</h5>
          <p class="card-text">{{ testimonial.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsCard1',
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.rounded-start {
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}
.card-body {
  flex: 1;
}
.card{
  background-color: transparent;
}
.card:hover{
  border: solid #ff8c00;
  cursor: pointer;
}
h5, p{
  color: white;
  font-weight: bold;
}
</style>
