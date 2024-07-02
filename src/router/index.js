import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'HomeSection',
        component: HomeSection  
      },
      {
        path: 'about',
        name: 'AboutSection',
        component: AboutSection
      },
      {
        path: 'resume',
        name: 'ResumeSection',
        component: ResumeSection
      },
      {
        path: 'projects',
        name: 'ProjectsSection',
        component: ProjectsSection
      },
      {
        path: 'testimonials',
        name: 'TestimonialsSection',
        component: TestimonialsSection
      },
      {
        path: 'contact',
        name: 'ContactSection',
        component: ContactSection
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
