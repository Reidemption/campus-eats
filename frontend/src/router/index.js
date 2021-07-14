import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Account from '../views/Account.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Orders',
    component: Orders
  },
  {
    path: '/Account',
    component: Account
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
