<template>
  <h1>Projects</h1>
  <div class="projects-section">
    <div class="projects-list">
      <ProjectsCard
        v-for="project in projects"
        :key="project.id"
        :image="project.image"
      >
        <template v-slot:default>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="card-footer">
            <button @click="goToHost(project.hostedUrl)" class="btn btn-primary">
              <i class="fa fa-file"></i> Hosted Demo
            </button>
            <button @click="goToGit(project.gitUrl)" class="btn btn-primary">
              <i class="fa fa-file"></i> Github Repo
            </button>
          </div>
        </template>
      </ProjectsCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProjectsCard from '@/components/ProjectsCard.vue';

export default {
  name: 'ProjectsSection',
  components: {
    ProjectsCard
  },
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    ...mapActions(['fetchProjects']),
    goToHost(url) {
      window.open(url, '_blank');
    },
    goToGit(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.projects-section {
  margin-top: 40px;
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
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
}

.btn-primary {
  background-color: white;
  color: #ff8c00;
}
h1, h2, h3, p {
  color: white;
  font-weight: bold;
}
h1{
  margin-top: 20px;
  text-align: center;
}
</style>
