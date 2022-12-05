import { createWebHashHistory } from 'vue-router'
import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue'),
    name: "Home"
  },
  {
    path: '/about',
    component: () => import('./views/About.vue'),
    name: "About"
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router