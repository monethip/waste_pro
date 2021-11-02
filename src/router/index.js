import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Package from '../views/package/PackageInfo.vue'
//import Village from '../views/village/VillageManage.vue'

import Middlewares from '@/Middlewares/Index'
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
      layout: "none",
      middleware: [Middlewares.guest],
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
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/users/User.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/role',
    name: 'Role',
    component: () => import('../views/roles/Role.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  // {
  //   path: '/customer',
  //   name: 'Customer',
  //   component: () => import('../views/customer/Customer.vue'),
  //   meta: {
  //     layout: "admin",
  //     middleware: [Middlewares.auth],
  //   }
  // },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../views/customer/Customer.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/create/customer',
    name: 'CreateCustomer',
    component: () => import('../views/customer/CreateCustomer.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/edit/customer/:id',
    name: 'EditCustomer',
    component: () => import('../views/customer/EditCustomer.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


function nextCheck(context, middleware, index) {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) return context.next();

  return (...parameters) => {
    context.next(...parameters);
    const nextMidd = nextCheck(context, middleware, index + 1);

    nextMiddleware({ ...context, nextMidd });
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const ctx = {
      from,
      next,
      router,
      to
    }

    const nextMiddleware = nextCheck(ctx, middleware, 1);
    return middleware[0]({ ...ctx, nextMiddleware });

  }
  return next();
});

export default router
