import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

const portfolioURL = 'https://simanyests.github.io/myPorfolioData/data/'

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    resume: null,
    projects: null,
    testimonials: null
  },
  getters: {
  },
  mutations: {
    setjobTitle(state, value) {
      state.jobTitle = value
    },
    setabout(state, value) {
      state.about = value
    },
    setresume(state, value) {
      state.resume = value
    },
    setprojects(state, value) {
      state.projects = value
    },
    settestimonials(state, value) {
      state.testimonials = value
    }
  },
  actions: {
    async fetchjobTitle(context) {
      try {
        let { jobTitle } = await axios.get(portfolioURL).then(res => res.data)
        context.commit("setjobTitle", jobTitle)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the job title",
          icon: "error",
          timer: 2000
        })
      } 
    },
    async fetchabout(context) {
      try {
        let { about } = await axios.get(portfolioURL).then(res => res.data)
        context.commit("setabout", about)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch about",
          icon: "error",
          timer: 2000
        })
      } 
    },
    async fetchresume(context) {
      try {
        let { resume } = await axios.get(portfolioURL).then(res => res.data)
        context.commit("setresume", resume)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the resume",
          icon: "error",
          timer: 2000
        })
      } 
    },
    async fetchprojects(context) {
      try {
        let { projects } = await axios.get(portfolioURL).then(res => res.data)
        context.commit("setprojects", projects)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the projects",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchtestimonials(context) {
      try {
        let { testimonials } = await axios.get(portfolioURL).then(res => res.data)
        context.commit("settestimonials", testimonials)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the testimonials",
          icon: "error",
          timer: 2000
        })
      } 
    }
  },
  modules: {
  }
})
