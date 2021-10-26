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
    component: Home,
    meta: {
      layout: "home"
    }
  },
  {
    path: '/package',
    name: 'Package',
    component: () => import('../views/package/PackageInfo.vue'),
    meta: {
      layout: "admin"
    }
  },
  {
    path: '/village',
    name: 'Village',
    component: () => import('../views/village/VillageMange.vue'),
    meta: {
      layout: "admin"
    }
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../views/customer/Customer.vue'),
    meta: {
      layout: "admin"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: "none"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


  //Admin Route
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    meta: {
      layout: "admin"
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/users/User.vue'),
    meta: {
      layout: "admin"
    }
  },
  {
    path: '/role',
    name: 'Role',
    component: () => import('../views/roles/Role.vue'),
    meta: {
      layout: "admin"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
