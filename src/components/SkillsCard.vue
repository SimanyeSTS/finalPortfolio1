<template>
  <div class="card">
    <div class="card-header">
      <div class="image-container">
        <img :src="image" alt="Card Image" class="card-image" loading="lazy"/>
        <div class="overlay">
          <h3 class="title">{{ title }}</h3>
        </div>
      </div>
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
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 5px;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  border: 1px solid #ff8c00;
}

.card-header {
  padding: 10px;
  text-align: center;
  flex-shrink: 0;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.card-image {
  max-width: 60%;
  height: auto;
  transition: opacity 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.title {
  color: #ff8c00;
  text-align: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .card-image {
  opacity: 0.1;
}

.image-container:hover .overlay {
  opacity: 1;
}

.image-container:hover .title {
  opacity: 1;
}

.card-body {
  padding: 10px;
  font-size: 0.8em;
  text-align: center;
}

@media (max-width: 768px) {
  .card {
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .card {
    font-size: 0.8em;
  }
}

@media (max-width: 300px) {
  .card {
    font-size: 0.7em;
  }
  .card-image {
    max-width: 50%;
  }
  .card-body {
    padding: 5px;
  }
}
</style>