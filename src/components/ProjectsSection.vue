<template>
    <div class="projects-section">
      <h2>Projects</h2>
      <div class="projects-list">
        <ProjectsCard v-for="project in projects" :key="project.id" :project="project">
          <template v-slot:cardHeader>
            <img :src="project.image" alt="Project Screenshot">
          </template>
          <template v-slot:cardBody>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </template>
          <template v-slot:cardFooter>
            <button @click="goToHost" class="btn btn-primary">
                <i class="fa fa-file"></i>Hosted Demo </button>
                <button @click="goToGit" class="btn btn-primary">
                    <i class="fa fa-file"></i>Github Repo</button>
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
  }
  </style>
  