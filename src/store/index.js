import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
const porftfolioURL = 'https://simanyests.github.io/myPorfolioData/data/'

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
  actions: {
  },
  modules: {
  }
})
