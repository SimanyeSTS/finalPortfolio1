<template>
  <div class="card">
  <div class="card-header" @mouseover="showTitle = true" @mouseleave="showTitle = false">
      <img :src="image" alt="Certificate Image" class="card-image" loading="lazy"/>
      <div class="title-overlay" :class="{ 'show': showTitle }">
      <h3 class="card-title">{{ title }}</h3>
      </div>
  </div>
  <div class="card-body">
      <slot></slot>
  </div>
  <div class="card-footer">
      <button @click="goToCertificate(link)" class="btn btn-primary">
      <i class="bi bi-award"></i> View Certificate
      </button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CertificatesCard',
  props: {
  image: {
      type: String,
      required: true
  },
  title: {
      type: String,
      required: true
  },
  link: {
      type: String,
      required: true
  }
  },
  data() {
  return {
      showTitle: false
  }
  },
  methods: {
  goToCertificate(url) {
      window.open(url, '');
  }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: black;
  height: 100%;
}

.card-header {
  padding: 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image {
  max-width: 60%;
  max-height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
}

.title-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.title-overlay.show {
  opacity: 1;
}

.card-title {
  color: white;
  padding: 10px;
  margin: 0;
  font-size: 1.1rem;
}

.card-body {
  padding: 15px;
  flex-grow: 1;
}

.card-footer {
  padding: 10px;
  text-align: center;
}

.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 9999px;
  transition: all 0.3s ease;
  width: 100%;
}

.btn-primary {
  background-color: white;
  color: #ff8c00;
}

.btn-primary:hover {
  background-color:rgb(103, 103, 103);
  color: white !important;
}

.card:hover {
  transform: scale(1.05);
  border: solid 1px #ff8c00;
  cursor: pointer;
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
  }
}
</style>