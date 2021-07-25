import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Account from '../views/Account.vue'
import Restaurant from '../views/Restaurant.vue'
import Checkout from '../views/Checkout.vue'

import Homc from "../views/redirecting/Homc.vue"
import Restaurani from '../views/redirecting/Restaurani.vue'
import Chcckout from "../views/redirecting/Chcckout.vue"

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
    path: '/.',
    name: 'Homc',
    component: Homc
  },
  {
    path: '/Restaurani',
    name: 'Restaurani',
    component: Restaurani
  },
  {
    path: '/Chcckout',
    name: 'Chcckout',
    component: Chcckout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
