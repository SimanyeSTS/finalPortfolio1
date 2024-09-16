<template>
  <div class="card">
    <div class="card-header">
      <img :src="image" alt="Card Image" class="card-image" loading="lazy"/>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsCard',
  props: {
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  width: 18rem; /* Fixed width */
  height: 25rem; /* Fixed height */
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  color: black;
  overflow: hidden; /* Hide excess content */
  display: flex;
  flex-direction: column;
}

.card-header {
  padding: 10px;
  text-align: center;
  flex-shrink: 0; /* Maintain header size */
}

.card-image {
  max-width: 60%;
}

.card-body {
  padding: 15px;
  overflow-y: auto; /* Scrollable content */
  flex-grow: 1; /* Take up remaining space */
}

.card:hover{
  border: solid #ff8c00;
  cursor: pointer;
}

/* Media queries for responsiveness */

@media (max-width: 768px) {
  .card {
    width: 80vw; /* Responsive width */
    height: 40vw; /* Responsive height */
  }
}

@media (max-width: 480px) {
  .card {
    width: 90vw; /* Responsive width */
    height: 50vw; /* Responsive height */
  }
}

@media (max-width: 300px) {
  .card {
    width: 100vw; /* Responsive width */
    height: 60vw; /* Responsive height */
  }
}
</style>