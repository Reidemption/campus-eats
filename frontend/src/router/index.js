import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Account from '../views/Account.vue'
import Restaurant from '../views/Restaurant.vue'
import Checkout from '../views/Checkout.vue'
import MealAdded from '../views/MealAdded.vue'

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
    path: '/Restaurant',
    name: 'Restaurant',
    component: Restaurant,
  },
  {
    path: '/Checkout',
    component: Checkout
  },
  {
    path: '/Restaurani',
    name: 'Restaurani',
    component: MealAdded
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
