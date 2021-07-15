import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Account from '../views/Account.vue'
import UserCart from '../views/UserCart.vue'

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
  },
  {
    path: '/UserCart',
    component: UserCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
