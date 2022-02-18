import Vue from 'vue'
import VueRouter from 'vue-router'

import Middlewares from '@/Middlewares/Index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('@/views/appPolicy.vue'),
    meta: {
      layout: "none",
      middleware: [Middlewares.guest],
    }
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('@/views/customer/Customer.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
    //auth
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
    meta: {
      layout: "none",
      middleware: [Middlewares.guest],
    }
  },
  {
    path: '/login/check-phone',
    name: 'CheckPhone',
    component: () => import('@/views/auth/CheckPhone.vue'),
    meta: {
      layout: "none",
      middleware: [Middlewares.guest],
    }
  },
  {
    path: '/activity-log',
    name: 'ActivityLog',
    component: () => import('@/views/ActivityLog.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Activity log',
          disabled: false,
          href:'/activity-log'
        }
      ]
    }
  },
  //Admin Route
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Dashboard',
          disabled: false,
          href:'/'
        }
      ]
    }
  },
    // User
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/users/User.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'User',
          disabled: false,
          href:'/user'
        },
      ]
    },
    },
      {
        path: '/user/create',
        name: 'CreateUser',
        component: () => import('@/views/users/CreateUser'),
        meta: {
          layout: "admin",
          middleware: [Middlewares.auth],
          breadcrumb: [
            {
              text:'Create',
              disabled: false,
              href:'/user'
            }
          ]
        }
      },

  {
    path: '/user/change-phone/:id',
    name: 'ChangePhone',
    component: () => import('@/views/users/ChangePhone.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/import-file',
    name: 'ImportFile',
    component: () => import('@/components/importFile.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/driver',
    name: 'Driver',
    component: () => import('@/views/driver/Driver.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Driver',
          disabled: false,
          href:'/driver'
        }
      ]
    }
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('@/views/employee/Employee.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Employee',
          disabled: false,
          href: '/team',
        }
      ]
    }
  },
  //Team
  {
    path: '/team',
    name: 'Team',
    component: () => import('@/views/team/Team.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Team',
          disabled: false,
          href: '/team',
        }
      ]
    },

    children: [
      {
        path: '/team/:id',
        name: 'TeamDetail',
        component: () => import('@/views/team/TeamDetail.vue'),
        meta: {
          layout: "admin",
          middleware: [Middlewares.auth],
          breadcrumb: [
            {
              text:'TeamDetail',
              disabled: false,
              href:'/team',
            },
          ]
        },
      },
    ]
  },
  //Company
  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/company/Company.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Company',
          disabled: false,
          href: '/company',
        },
      ]
    },
    children: [
      {
        path: '/create/company',
        name: 'CreateCompany',
        component: () => import('@/views/company/CreateCompany.vue'),
        meta: {
          layout: "admin",
          middleware: [Middlewares.auth],
          breadcrumb: [
            {
              text:'Create',
              disabled: false,
              href:'/create/company',
            },
          ]
        },
      }
    ],
  },
  {
    path: '/company-request',
    name: 'CompanyRequest',
    component: () => import('@/views/company/companyRequest/all.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Company Request',
          disabled: false,
          href:'/company-request',
        },
      ]
    }
  },
  {
    path: '/company-request/:id/:status',
    name: 'ViewCompanyRequest',
    component: () => import('@/views/company/companyRequest/ViewCompanyRequest.vue'),
    props: true,
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  {
    path: '/edit/company/:id',
    name: 'EditCompany',
    component: () => import('@/views/company/EditCompany.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/view/company/:id',
    name: 'ViewCompany',
    component: () => import('@/views/company/ViewCompany.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  //Collection Event
  {
    path: '/collection-event',
    name: 'Collection',
    component: () => import('../views/collection/collectionEvent.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Collection',
          disabled: false,
          href:'/collection-event'
        }
      ]
    }
  },
  {
    path: '/create/collection',
    name: 'CreateCollectionEvent',
    component: () => import('../views/collection/CreateCollectionEvent.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/view/collection-event/:id',
    name: 'ViewCollectionEvent',
    component: () => import('@/views/collection/ViewCollectionEvent.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  {
    path: '/edit/collection-event/:id',
    name: 'EditCollectionEvent',
    component: () => import('@/views/collection/EditCollectionEvent.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/payment/collection-event/:id',
    name: 'PaymentCollectionEvent',
    component: () => import('@/views/collection/paymentCollection.vue'),
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
      breadcrumb: [
        {
          text:'Role',
          disabled: false,
          href:'/role'
        }
      ]
    }
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../views/customer/Customer.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Customer',
          disabled: false,
          href:'/customer'
        }
      ]
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
    path: '/view/client/:id',
    name: 'ViewClient',
    component: () => import('@/views/report/CustomerDetail.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/village',
    name: 'Village',
    component: () => import('@/views/village/VillageMange.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Village',
          disabled: false,
          href:'/village'
        }
      ]
    }
  },
  {
    path: '/edit/village/:id',
    name: 'EditVillage',
    component: () => import('@/views/village/EditVillage.vue'),
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
    component: () => import('@/views/package/PackageInfo.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Package',
          disabled: false,
          href:'/package'
        }
      ]
    }
  },

  {
    path: '/vehicle',
    name: 'Vehicle',
    component: () => import('@/views/vehicle/Vehicle.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Vehicle',
          disabled: false,
          href:'/vehicle'
        }
      ]
    }
  },
  {
    path: '/village-variation',
    name: 'VillageVariation',
    component: () => import('@/views/village/VillageVariation.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  //Plan
  {
    path: '/routeplan',
    name: 'RoutePlan',
    component: () => import('@/views/routePlan/tabindex.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Route Plan',
          disabled: false,
          href:'/routeplan'
        }
      ]
    }
  },

  {
    path: '/create/plan',
    name: 'CreatePlan',
    component: () => import('@/views/routePlan/CreatePlan.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  {
    path: '/edit/plan/:id',
    name: 'EditPlan',
    component: () => import('@/views/routePlan/EditPlan.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/create/export/plan',
    name: 'CreateExportPlan',
    component: () => import('@/views/routePlan/tabs/home/CreateExportPlan.vue'),
    props: true,
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/create/export/company/plan',
    name: 'CreateExportPlanCompany',
    component: () => import('@/views/routePlan/tabs/company/CreateExportPlanCompany.vue'),
    props: true,
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('@/views/routePlan/tabindex.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Plan',
          disabled: false,
          href:'/plan'
        }
      ]
    }
  },
  {
    path: '/plan/:id',
    name: 'ViewPlan',
    component: () => import('@/views/routePlan/tabs/home/ViewPlan.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/company/plan/:id',
    name: 'ViewCompanyRoutePlan',
    component: () => import('@/views/routePlan/tabs/company/ViewPlanCompany.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/export/plan',
    name: 'Export-Plan',
    component: () => import('@/views/routePlan/tabs/home/ExportPlan.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/export/company/plan',
    name: 'Export-Plan-Company',
    component: () => import('@/views/routePlan/tabs/company/ExportPlanCompany.vue'),
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
    //Home
  {
    path: '/select/home',
    name: 'SelectHomeRoutePlan',
    component: () => import('@/views/routePlan/tabs/home/SelectHomeToRoute.vue'),
    props: true,
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Home Customer',
          disabled: false,
          href:'/select/home'
        }
      ]
    }
  },
  {
    path: '/edit/home/no-map/plan/:id',
    name: 'EditHomeRoutePlanNoMap',
    component: () => import('@/views/routePlan/tabs/home/UpdateRoutePlanHome.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  //Plan no map
  // {
  //   path: '/select/customer',
  //   name: 'SelectCustomerRoutePlan',
  //   component: () => import('@/views/routePlan/tabs/home/SelectCustomerToRoute.vue'),
  //   props: true,
  //   meta: {
  //     layout: "admin",
  //     middleware: [Middlewares.auth],
  //   }
  // },

  {
    path: '/create/route/plan',
    name: 'CreateRoutePlan',
    component: () => import('@/views/routePlan/tabs/company/CreateRouteNoMap.vue'),
    props: true,
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/edit/company/no-map/plan/:id',
    name: 'EditPlanNoMap',
    component: () => import('@/views/routePlan/companyPlan/UpdatePlanCompany.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  //Company
  {
    path: '/select/company',
    name: 'SelectCompanyRoutePlan',
    component: () => import('@/views/routePlan/companyPlan/SelectCompanyToRoute.vue'),
    props: true,
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Company Customer',
          disabled: false,
          href:'/select/company'
        }
      ]
    }
  },

  {
    path: '/create/route/plan/company',
    name: 'CreateRoutePlanCompany',
    component: () => import('@/views/routePlan/companyPlan/CreatePlanCompany.vue'),
    props: true,
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  //Plan Calendar Detail
  {
    path: '/plan-calendar/:id/detail/:planMonthId',
    name: 'PlanCalendarDetail',
    component: () => import('@/views/calendar/tabindex.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/plan-calendar/:plan_calendar/detail/:id',
    name: 'TrashDetail',
    component: () => import('@/views/calendar/trashDetail.vue'),
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
      breadcrumb: [
        {
          text:'Calendar',
          disabled: false,
          href:'/calendar'
        }
      ]
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
      breadcrumb: [
        {
          text:'Invoice',
          disabled: false,
          href:'/invoice'
        }
      ]
    }
  },

  {
    path: '/reject',
    name: 'Reject',
    component: () => import('@/views/invoice/reject/reject.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text:'Reject',
          disabled: false,
          href:'/reject'
        }
      ]
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
    component: () => import('@/views/report/tabCollectionIndex.vue'),
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
    path: '/report/company',
    name: 'Report-Company',
    component: () => import('@/views/report/ReportCompany.vue'),
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
    path: '/view/company/:id',
    name: 'ViewCompanyDetail',
    component: () => import('@/views/report/CompanyDetail.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/report/invoice',
    name: 'Report-Invoice',
    component: () => import('@/views/report/tabInvoiceIndex.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },

  {
    path: '/report/event/trash',
    name: 'Report-Trash-Event',
    component: () => import('@views/report/TabCollectionTab/tabCollectionIndexEvent.vue'),
    meta: {
      layout: "admin",
      middleware: [Middlewares.auth],
    }
  },
  {
    path: '/report/event/invoice',
    name: 'Report-Invoice-Event',
    component: () => import('@views/report/TabCollectionTab/tabInvoiceEventIndex.vue'),
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
