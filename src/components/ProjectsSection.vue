<template>
  <h1>Projects</h1>
  <div class="projects-section">
    <div v-if="loading" class="loading-spinner">
      <SpinnerComp />
    </div>
    <div v-else class="projects-list">
      <ProjectsCard
        v-for="project in projects"
        :key="project.id"
        :image="project.image"
        :hosted="project.hosted"
        :gitHub="project.gitHub"
      >
        <template v-slot:default>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </template>
      </ProjectsCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProjectsCard from '@/components/ProjectsCard.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  name: 'ProjectsSection',
  components: {
    ProjectsCard,
    SpinnerComp
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  },
  mounted() {
    this.fetchProjects().finally(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions(['fetchProjects'])
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

h1, h2, h3, p {
  color: white;
  font-weight: bold;
}

h1 {
  margin-top: 20px;
  text-align: center;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
</style>
