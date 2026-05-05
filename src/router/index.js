import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Services from '../components/Services.vue'
import Portfolio from '../components/Portfolio.vue'
import Brief from '../components/Brief.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/brief', component: Brief }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router