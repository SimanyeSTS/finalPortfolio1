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
  width: 18rem;
  height: 25rem;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  color: black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-header {
  padding: 10px;
  text-align: center;
  flex-shrink: 0;
}

.card-image {
  max-width: 60%;
}

.card-body {
  padding: 15px;
  overflow-y: auto;
  flex-grow: 1;
}

.card:hover{
  border: solid #ff8c00;
  cursor: pointer;
}


@media (max-width: 768px) {
  .card {
    width: 80vw;
    height: 40vw;
  }
}

@media (max-width: 480px) {
  .card {
    width: 90vw;
    height: 50vw;
  }
}

@media (max-width: 300px) {
  .card {
    width: 100vw;
    height: 60vw;
  }
}
</style>