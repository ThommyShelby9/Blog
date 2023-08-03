import AppVue from '@/App.vue'
import pageDetail from '@/views/detail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: '/detail',
      component: pageDetail
    }
  ]
})

export default router
