import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection from '@/component/ContactSection.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
    children [
      {
        path: '',
        name: 'HomeSection',
        component: HomeSection  
      },
      path: 'About',
      name: 'AboutSection'
      
    ]
  },
  {
   

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
