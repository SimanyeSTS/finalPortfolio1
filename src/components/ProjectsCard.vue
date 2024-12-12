<template>
  <div class="card">
    <div class="card-header">
      <img :src="image" alt="Card Image" class="card-image" loading="lazy"/>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <button @click="goToHost(hosted)" class="btn btn-primary">
        <i class="bi bi-globe"></i> Hosted Demo
      </button>
      <button @click="goToGit(gitHub)" class="btn btn-secondary">
        <i class="bi bi-github"></i> Github Repo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsCard',
  props: {
    image: {
      type: String,
      required: true
    },
    hosted: String,
    gitHub: String
  },
  methods: {
    goToHost(url) {
      window.open(url, '');
    },
    goToGit(url) {
      window.open(url, '');
    }
  }
};
</script>

<style scoped>
.card {
  width: 18rem;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: transform 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: black;
}

.card-header {
  padding: 10px;
  text-align: center;
}

.card-image {
  max-width: 60%;
}

.card-body {
  padding: 15px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.btn {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: white;
  color: #ff8c00;
}
.btn-primary:hover{
  background-color: rgb(0, 85, 255) !important;
  color: white !important;
}

.btn-secondary{
  background-color: white;
  color: #ff8c00;
}
.btn-secondary:hover{
  background-color: rgb(103, 103, 103) !important;
  color: white !important;
}
.card:hover{
  transform: scale(1.05);
  border: solid #ff8c00;
  cursor: pointer;
}
</style>
