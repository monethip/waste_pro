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
    path: '/driver',
    name: 'Driver',
    component: () => import('../views/driver/Driver.vue'),
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
  {
    path: '/view/customer/:id',
    name: 'ViewCustomer',
    component: () => import('@/views/customer/ViewCustomer.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/village',
    name: 'Village',
    component: () => import('../views/village/VillageMange.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/edit/village/:id',
    name: 'EditVillage',
    component: () => import('../views/village/EditVillage.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/view/village/:id',
    name: 'ViewVillage',
    component: () => import('@/views/village/ViewVillage.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/package',
    name: 'Package',
    component: () => import('../views/package/PackageInfo.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  // {
  //   path: '/addpackage',
  //   name: 'Addpackage',
  //   component: () => import('../views/package/PackageAddSize.vue'),
  //   meta: {
  //     layout: "admin",
  //     middleware: [Middlewares.auth],
  //   }
  // },
  {
    path: '/village-variation',
    name: 'VillageVariation',
    component: () => import('../views/village/VillageVariation.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  //Plan
  {
    path: '/create/plan',
    name: 'CreatePlan',
    component: () => import('@/views/routeplan/CreatePlan.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/edit/plan/:id',
    name: 'EditPlan',
    component: () => import('@/views/routeplan/EditPlan.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/create/export/plan',
    name: 'CreateExportPlan',
    component: () => import('@/views/routeplan/CreateExportPlan.vue'),
    props: true,
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('@/views/routeplan/Plan.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/plan/:id',
    name: 'ViewPlan',
    component: () => import('@/views/routeplan/ViewPlan.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/export/plan',
    name: 'Export-Plan',
    component: () => import('@/views/routeplan/ExportPlan.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/plan-month/:id/plan-calendar',
    name: 'PlanCalendar',
    component: () => import('@/views/calendar/PlanCalendar.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  //Plan Calendar Detail
  {
    path: '/plan-calendar/:id/detail',
    name: 'PlanCalendarDetail',
    component: () => import('@/views/calendar/PlanCalendarDetail.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  //Calendar
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('@/views/calendar/Calendar.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  //Invoice
  {
    path: '/invoice',
    name: 'Invoice',
    component: () => import('@/views/invoice/invoice.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  {
    path: '/reject',
    name: 'Reject',
    component: () => import('@/views/invoice/reject/reject.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/invoice/month/:id/',
    name: 'InvoiceTab',
    component: () => import('@/views/invoice/tabindex.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/invoice/:id',
    name: 'InvoiceDetail',
    component: () => import('@/views/invoice/invoiceDetail.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/invoice/payment/:id',
    name: 'Payment',
    component: () => import('@/views/invoice/payment.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  //Notification
  {
    path: '/notification',
    name: 'NotificationTab',
    component: () => import('@/views/notification/tabindex.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/notification/:id',
    name: 'NotificationView',
    component: () => import('@/views/notification/viewNotification.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  //Report 
  {
    path: '/report/trash',
    name: 'Report-Trash',
    component: () => import('@/views/report/Trash.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/report/customer',
    name: 'Report-Customer',
    component: () => import('@/views/report/Customer.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/report/driver',
    name: 'Report-Driver',
    component: () => import('@/views/report/ReportDriver.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/report/invoice',
    name: 'Report-Invoice',
    component: () => import('@/views/report/ReportInvoice.vue'),
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
