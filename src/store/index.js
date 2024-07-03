import { createStore } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';

const portfolioURL = 'https://simanyests.github.io/myPorfolioData/data/';

export default createStore({
  state: {
    jobTitle: [],
    about: null,
    resume: null,
    projects: null,
    testimonials: null
  },
  getters: {
    jobTitles: state => state.jobTitle
  },
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value;
    },
    setAbout(state, value) {
      state.about = value;
    },
    setResume(state, value) {
      state.resume = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    }
  },
  actions: {
    async fetchJobTitle(context) {
      try {
        let { jobTitle } = await axios.get(portfolioURL).then(res => res.data);
        context.commit("setJobTitle", jobTitle);
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the job title",
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchAbout(context) {
      try {
        let { about } = await axios.get(portfolioURL).then(res => res.data);
        context.commit("setAbout", about);
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch about",
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchResume(context) {
      try {
        let { resume } = await axios.get(portfolioURL).then(res => res.data);
        context.commit("setResume", resume);
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the resume",
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchProjects(context) {
      try {
        let { projects } = await axios.get(portfolioURL).then(res => res.data);
        context.commit("setProjects", projects);
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the projects",
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchTestimonials(context) {
      try {
        let { testimonials } = await axios.get(portfolioURL).then(res => res.data);
        context.commit("setTestimonials", testimonials);
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the testimonials",
          icon: "error",
          timer: 2000
        });
      }
    }
  },
  modules: {
  }
});
