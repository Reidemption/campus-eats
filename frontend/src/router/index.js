import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Orders from '../views/Orders.vue'
import News from '../views/News.vue'
import Account from '../views/Account.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Browse',
    component: Browse
  },
  {
    path: '/Orders',
    component: Orders
  },
  {
    path: '/News',
    component: News
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
