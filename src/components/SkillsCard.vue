<template>
  <div class="card">
    <div class="card-header">
      <img :src="image" alt="Card Image" class="card-image" />
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
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  color: black;
}
.card-header {
  padding: 10px;
  text-align: center;
}
.card-image {
  max-width: 100%;
}
</style>