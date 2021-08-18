import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction.vue'
import Dashboard from '../views/Dashboard.vue'
import Add from '../views/Add'
import Swiper from '../views/Swiper'
import Hot from '../views/Hot'
import New from '../views/New'
import Recommend from '../views/Recommend'
import Category from '../views/Category'
import Good from '../views/Good'
import Guest from '../views/Guest'
import Order from '../views/Order'
import Account from '../views/Account'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    redirect: '/login' 
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/swiper',
    name: 'Swiper',
    component: Swiper
  },
  {
    path: '/hot',
    name: 'Hot',
    component: Hot
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/good',
    name: 'Good',
    component: Good
  },
  {
    path: '/guest',
    name: 'Guest',
    component: Guest
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
