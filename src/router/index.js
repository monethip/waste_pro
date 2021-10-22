import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Package from '../views/package/PackageInfo.vue'
//import Village from '../views/village/VillageManage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'Home',
    component: Home
  },
  {
    path: '/package',
    name: 'Package',
    component: () => import('../views/package/PackageInfo.vue')
  },
  {
    path: '/village',
    name: 'Village',
    component: () => import('../views/village/VillageMange.vue')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: ()=> import('../views/customer/Customer.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/Login.vue'),
    meta:{
      layout: "None"
  }
  },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
