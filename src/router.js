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
  {
    path: '/pay',
    component: () => import('./views/Pay.vue'),
    name: "Pay"
  },
  {
    path: '/contact',
    component: () => import('./views/Contact.vue'),
    name: "Contact"
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router