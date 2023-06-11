import Vue from 'vue';
import VueRouter from 'vue-router';
import Middlewares from '@/Middlewares/Index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('@/views/appPolicy.vue'),
    meta: {
      layout: 'none',
      middleware: [Middlewares.guest],
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@views/Contact.vue'),
    meta: {
      layout: 'none',
      middleware: [Middlewares.guest],
    },
  },
  {
    path: '/delete-home',
    name: 'DeleteHome',
    component: () => import('@/views/deleteCustomer/Customer.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Delete Home Customer',
          disabled: false,
          href: '/delete-home',
        },
      ],
    },
  },
  {
    path: '/delete-company',
    name: 'DeleteCompany',
    component: () => import('@/views/deleteCompany/Company.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Delete Company Customer',
          disabled: false,
          href: '/delete-company',
        },
      ],
    },
  },
  {
    path: '/delete-billing',
    name: 'deleteBilling',
    component: () => import('@/views/invoice/v2/billing/DeleteBill'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລຶບ-ແກ້ໄຂບິນ',
          disabled: true,
          href: '/deleteBilling',
        },
      ],
    },
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('@/views/customer/Customer.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Home Customer',
          disabled: true,
          href: '/customer',
        },
        {
          text: 'Home Customer',
          disabled: false,
          href: '/customer',
        },
      ],
    },
  },
  {
    path: '/pre-customer',
    name: 'PreCustomer',
    component: () => import('@/views/customer/PreCustomer.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'PreCustomer',
          disabled: true,
          href: '/customer',
        },
        {
          text: 'PreCustomer',
          disabled: false,
          href: '/pre-customer',
        },
      ],
    },
  },
  // auth
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
    meta: {
      layout: 'none',
      middleware: [Middlewares.guest],
    },
  },
  {
    path: '/login/check-phone',
    name: 'CheckPhone',
    component: () => import('@/views/auth/CheckPhone.vue'),
    meta: {
      layout: 'none',
      middleware: [Middlewares.guest],
    },
  },
  {
    path: '/activity-log',
    name: 'ActivityLog',
    component: () => import('@/views/ActivityLog.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Activity log',
          disabled: true,
          href: '/activity-log',
        },
      ],
    },
  },
  // Admin Route
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Dashboard',
          disabled: true,
          href: '/',
        },
      ],
    },
  },
  // User
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/users/User.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'User',
          disabled: true,
          href: '/user',
        },
      ],
    },
  },
  {
    path: '/user/create',
    name: 'CreateUser',
    component: () => import('@/views/users/CreateUser'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'User',
          disabled: false,
          href: '/user',
        },
        {
          text: 'Create',
          disabled: true,
          href: '/user/create',
        },
      ],
    },
  },

  {
    path: '/user/change-phone/:id',
    name: 'ChangePhone',
    component: () => import('@/views/users/ChangePhone.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  {
    path: '/import-file',
    name: 'ImportFile',
    component: () => import('@/components/importFile.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Import User',
          disabled: true,
          href: '/import-file',
        },
      ],
    },
  },
  {
    path: '/user-sale',
    name: 'UserSale',
    component: () => import('@/views/users/SaleUser.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'SaleUser',
          disabled: true,
          href: '/user-sale',
        },
      ],
    },
  },
  {
    path: '/driver',
    name: 'Driver',
    component: () => import('@/views/driver/Driver.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Driver',
          disabled: true,
          href: '/driver',
        },
      ],
    },
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('@/views/employee/Employee.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Employee',
          disabled: true,
          href: '/team',
        },
      ],
    },
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Welcome',
          disabled: true,
          href: '/welcome',
        },
      ],
    },
  },
  // Team
  {
    path: '/team',
    name: 'Team',
    component: () => import('@/views/team/Team.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Team',
          disabled: true,
          href: '/team',
        },
      ],
    },
  },
  {
    path: '/team/:id',
    name: 'TeamDetail',
    component: () => import('@/views/team/TeamDetail.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Team',
          disabled: false,
          href: '/team',
        },
        {
          text: 'Detail',
          disabled: true,
        },
      ],
    },
  },

  // Company
  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/company/Company.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Company Customer',
          disabled: true,
          href: '/company',
        },
      ],
    },
  },
  {
    path: '/create/company',
    name: 'CreateCompany',
    component: () => import('@/views/company/CreateCompany.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Company Customer',
          disabled: false,
          href: '/company',
        },
        {
          text: 'Create',
          disabled: true,
        },
      ],
    },
  },

  {
    path: '/company-request',
    name: 'CompanyRequest',
    component: () => import('@/views/company/companyRequest/all.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Company Request',
          disabled: true,
          href: '/company-request',
        },
      ],
    },
  },
  {
    path: '/company-request/:id/:status',
    name: 'ViewCompanyRequest',
    component: () => import('@/views/company/companyRequest/ViewCompanyRequest.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Company Request',
          disabled: false,
          href: '/company-request',
        },
        {
          text: 'Detail',
          disabled: true,
        },
      ],

    },
  },

  {
    path: '/edit/company/:id',
    name: 'EditCompany',
    component: () => import('@/views/company/EditCompany.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Company Customer',
          disabled: false,
          href: '/company',
        },
        {
          text: 'Edit',
          disabled: true,
        },
      ],
    },
  },
  // {
  //     path: '/view/company/:id',
  //     name: 'ViewCompany',
  //     component: () => import('@/views/company/ViewCompany.vue'),
  //     meta: {
  //         layout: "admin",
  //         middleware: [Middlewares.auth],
  //         breadcrumb: [
  //             {
  //                 text: 'ລູກຄ້າຫົວໜ່ວຍທຸລະກິດ',
  //                 disabled: false,
  //                 href: '/company',
  //             },
  //             {
  //                 text: 'View',
  //                 disabled: true,
  //             },
  //         ]
  //     }
  // },
  // Collection Event
  {
    path: '/collection-event',
    name: 'Collection',
    component: () => import('../views/collection/collectionEvent.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Collection',
          disabled: true,
          href: '/collection-event',
        },
      ],
    },
  },
  {
    path: '/create/collection',
    name: 'CreateCollectionEvent',
    component: () => import('../views/collection/CreateCollectionEvent.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Collection',
          disabled: false,
          href: '/collection-event',
        },
        {
          text: 'Create',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/view/collection-event/:id',
    name: 'ViewCollectionEvent',
    component: () => import('@/views/collection/ViewCollectionEvent.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Collection',
          disabled: false,
          href: '/collection-event',
        },
        {
          text: 'View',
          disabled: true,
        },
      ],
    },
  },

  {
    path: '/edit/collection-event/:id',
    name: 'EditCollectionEvent',
    component: () => import('@/views/collection/EditCollectionEvent.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Collection',
          disabled: false,
          href: '/collection-event',
        },
        {
          text: 'Edit Collection',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/payment/collection-event/:id',
    name: 'PaymentCollectionEvent',
    component: () => import('@/views/collection/paymentCollection.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },

  {
    path: '/role',
    name: 'Role',
    component: () => import('../views/roles/Role.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Role',
          disabled: true,
          href: '/role',
        },
      ],
    },
  },
  // {
  //     path: '/customer',
  //     name: 'Customer',
  //     component: () => import('../views/customer/Customer.vue'),
  //     meta: {
  //         layout: "admin",
  //         middleware: [Middlewares.auth],
  //         breadcrumb: [
  //             {
  //                 text: 'Home Customer',
  //                 disabled: false,
  //                 href: '/customer'
  //             },
  //         ]
  //     }
  // },
  {
    path: '/create/customer',
    name: 'CreateCustomer',
    component: () => import('../views/customer/CreateCustomer.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລູກຄ້າຄົວເຮືອນ',
          disabled: false,
          href: '/customer',
        },
        {
          text: 'Create',
          disabled: true,
          href: '/customer',
        },
      ],
    },
  },
  {
    path: '/edit/customer/:id',
    name: 'EditCustomer',
    component: () => import('../views/customer/EditCustomer.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລູກຄ້າຄົວເຮືອນ',
          disabled: false,
          href: '/customer',
        },
        {
          text: 'ແກ້ໄຂ',
          disabled: true,
          href: '/customer',
        },
      ],
    },

  },
  {
    path: '/view/customer/:id',
    name: 'ViewCustomer',
    component: () => import('@/views/customer/ViewCustomer.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລູກຄ້າຄົວເຮືອນ',
          disabled: false,
          href: '/customer',
        },
        {
          text: 'ລາຍລະອຽດ',
          disabled: true,
          href: '/customer',
        },
      ],
    },
  },

  {
    path: '/village',
    name: 'Village',
    component: () => import('@/views/village/VillageMange.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ຂໍ້ມູນບ້ານ',
          disabled: true,
          href: '/village',
        },
      ],
    },
  },
  {
    path: '/edit/village/:id',
    name: 'EditVillage',
    component: () => import('@/views/village/EditVillage.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  {
    path: '/view/village/:id',
    name: 'ViewVillage',
    component: () => import('@/views/village/ViewVillage.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ຂໍ້ມູນບ້ານ',
          disabled: false,
          href: '/village',
        },
        {
          text: 'ລາຍລະອຽດ',
          disabled: true,
          href: '/village',
        },
      ],
    },
  },
  {
    path: '/package',
    name: 'Package',
    component: () => import('@/views/package/PackageInfo.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Package',
          disabled: true,
          href: '/package',
        },
      ],
    },
  },

  {
    path: '/vehicle',
    name: 'Vehicle',
    component: () => import('@/views/vehicle/Vehicle.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ພາຫະນະ',
          disabled: true,
          href: '/vehicle',
        },
      ],
    },
  },
  {
    path: '/village-variation',
    name: 'VillageVariation',
    component: () => import('@/views/village/VillageVariation.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍລະອຽດທີ່ຢູ່',
          disabled: true,
          href: '/vehicle',
        },
      ],
    },
  },

  // Plan
  {
    path: '/routeplan',
    name: 'RoutePlan',
    component: () => import('@/views/routePlan/tabindex.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: true,
          href: '/routeplan',
        },
      ],
    },
  },

  {
    path: '/create/plan',
    name: 'CreatePlan',
    component: () => import('@/views/routePlan/CreatePlan.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'Create',
          disabled: true,
        },
      ],
    },
  },

  {
    path: '/edit/plan/:id',
    name: 'EditPlan',
    component: () => import('@/views/routePlan/EditPlan.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'Edit',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/create/export/plan',
    name: 'CreateExportPlan',
    component: () => import('@/views/routePlan/tabs/home/CreateExportPlan.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  {
    path: '/create/export/company/plan',
    name: 'CreateExportPlanCompany',
    component: () => import('@/views/routePlan/tabs/company/CreateExportPlanCompany.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('@/views/routePlan/tabindex.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Plan',
          disabled: true,
          href: '/plan',
        },
      ],
    },
  },
  {
    path: '/plan/:id',
    name: 'ViewPlan',
    component: () => import('@/views/routePlan/tabs/home/ViewPlan.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'View',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/company/plan/:id',
    name: 'ViewCompanyRoutePlan',
    component: () => import('@/views/routePlan/tabs/company/ViewPlanCompany.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'Company',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/export/plan',
    name: 'Export-Plan',
    component: () => import('@/views/routePlan/tabs/home/ExportPlan.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  {
    path: '/export/company/plan',
    name: 'Export-Plan-Company',
    component: () => import('@/views/routePlan/tabs/company/ExportPlanCompany.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  {
    path: '/plan-month/:id/plan-calendar',
    name: 'PlanCalendar',
    component: () => import('@/views/calendar/PlanCalendar.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  // Home
  {
    path: '/select/home',
    name: 'SelectHomeRoutePlan',
    component: () => import('@/views/routePlan/tabs/home/SelectHomeToRoute.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'Home Customer',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/edit/home/no-map/plan/:id',
    name: 'EditHomeRoutePlanNoMap',
    component: () => import('@/views/routePlan/tabs/home/UpdateRoutePlanHome.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'Edit',
          disabled: true,
        },
      ],
    },
  },

  // Plan no map
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
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'ລູກຄ້າຄົວເຮືອນ',
          disabled: false,
          href: '/select/home',
        },
        {
          text: 'ເພີ່ມຂໍ້ມູນ',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/edit/company/no-map/plan/:id',
    name: 'EditPlanNoMap',
    component: () => import('@/views/routePlan/companyPlan/UpdatePlanCompany.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'ແກ້ໄຂ',
          disabled: true,
        },
      ],
    },
  },
  // Company
  {
    path: '/select/company',
    name: 'SelectCompanyRoutePlan',
    component: () => import('@/views/routePlan/companyPlan/SelectCompanyToRoute.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'Select Company',
          disabled: true,
        },
      ],
    },
  },

  {
    path: '/create/route/plan/company',
    name: 'CreateRoutePlanCompany',
    component: () => import('@/views/routePlan/companyPlan/CreatePlanCompany.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Route Plan',
          disabled: false,
          href: '/routeplan',
        },
        {
          text: 'Select Company',
          disabled: false,
          href: '/select/company',
        },
        {
          text: 'Create',
          disabled: true,
        },
      ],
    },
  },

  // Plan Calendar Detail
  {
    path: '/plan-calendar/:id/detail/:planMonthId',
    name: 'PlanCalendarDetail',
    component: () => import('@/views/calendar/tabindex.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  {
    path: '/plan-calendar/:plan_calendar/trash/detail/:id',
    name: 'TrashDetail',
    component: () => import('@/views/calendar/trashDetail.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  // Calendar
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('@/views/calendar/Calendar.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'Calendar',
          disabled: true,
          href: '/calendar',
        },
      ],
    },
  },

  // Invoice
  {
    path: '/invoice',
    name: 'Invoice',
    component: () => import('@/views/invoice/invoice.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ບິນເກັບເງິນຄ່າຂີ້ເຫື້ຍອ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },
  // v2 Invoice
  {
    path: '/search-billing',
    name: 'searchbilling',
    component: () => import('@/views/invoice/v2/billing/searchBill'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ຄົ້ນຫາບິນ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },
  {
    path: '/billing',
    name: 'billing',
    component: () => import('@/views/invoice/v2/billing/tabIndex'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ບິນເກັບເງິນຄ່າຂີ້ເຫື້ຍອ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },
  {
    path: '/v2/billing/:id',
    name: 'billing-detail',
    component: () => import('@views/invoice/v2/billing/billingDetail.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍລະອຽດບິນ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },

  // {
  //     path: '/billing',
  //     name: 'billing',
  //     component: () => import('@/views/invoice/v2/billing/tabIndex'),
  //     meta: {
  //         layout: "admin",
  //         middleware: [Middlewares.auth],
  //         breadcrumb: [
  //             {
  //                 text: 'ບິນເກັບເງິນຄ່າຂີ້ເຫື້ຍອ',
  //                 disabled: true,
  //                 href: '/invoice'
  //             }
  //         ]
  //     }
  // },
  //
  // Custom bill
  {
    path: '/v2/custom-bill',
    name: 'custom-bill',
    component: () => import('@/views/invoice/v2/custom/CustomBill.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ບິນຢ້ອນຫຼັງ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },

  {
    path: '/chose/user',
    name: 'chose-user',
    component: () => import('@views/invoice/v2/custom/ShowUser'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ເລືອກ User',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },

  {
    path: '/v2/create/custom-bill',
    name: 'create-custom-bill',
    component: () => import('@/views/invoice/v2/custom/CreateCustomBill.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ບິນຢ້ອນຫຼັງ',
          disabled: false,
          href: '/v2/custom-bill',
        },
        {
          text: 'ສ້າງບິນ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },

  // v2 event invoice
  {
    path: '/v2/event-invoice',
    name: 'event-invoice',
    component: () => import('@views/invoice/v2/event/EventInvoice.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ເກັບຂີ້ເຫື້ຍອພິເສດ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },
  {
    path: '/v2/create/event-invoice',
    name: 'CreateCollectionEventInvoice',
    component: () => import('../views/invoice/v2/event/CreateEventInvoice.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ເກັບຂີ້ເຫື້ຍອພິເສດ',
          disabled: false,
          href: '/v2/event-invoice',
        },
        {
          text: 'ເພີ່ມຂໍ້ມູນ',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/v2/edit/event-invoice/:id',
    name: 'EditCollectionEventInvoice',
    component: () => import('../views/invoice/v2/event/EditEventInvoice.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ເກັບຂີ້ເຫື້ຍອພິເສດ',
          disabled: false,
          href: '/v2/event-invoice',
        },
        {
          text: 'ແກ້ໄຂຂໍ້ມູນ',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/v2/edit/event-driver/:id',
    name: 'EditCollectionEventDriver',
    component: () => import('../views/invoice/v2/event/EditEventDriver.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ເກັບຂີ້ເຫື້ຍອພິເສດ',
          disabled: false,
          href: '/v2/event-driver',
        },
        {
          text: 'ແກ້ໄຂຂໍ້ມູນ',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/v2/event-invoice/:id',
    name: 'EventInvoiceDetail',
    component: () => import('../views/invoice/v2/event/EventInvoiceDetail.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ເກັບຂີ້ເຫື້ຍອພິເສດ',
          disabled: false,
          href: '/v2/event-invoice',
        },
        {
          text: 'ລາຍລະອຽດ',
          disabled: true,
        },
      ],
    },
  },

  {
    path: '/future-invoice',
    name: 'future-invoice',
    component: () => import('@views/invoice/v2/future/FutureInvoice.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ຈັດການບິນລ່ວງໜ້າ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },
  {
    path: '/v2/invoice/:id',
    name: 'invoice-detail',
    component: () => import('@views/invoice/v2/InvoiceDetail.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ຈັດການບິນລ່ວງໜ້າ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },
  // chose customer to create future invoice
  {
    path: '/chose/customer',
    name: 'chose-customer',
    component: () => import('@views/invoice/v2/future/BeforeCreate.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ເລືອກລຸກຄ້າ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },
  // create invoice future
  {
    path: '/create/future/invoice',
    name: 'create-future-customer',
    component: () => import('@views/invoice/v2/future/CreateFutureInvoice.vue'),
    props: true,
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ສ້າງບິນ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },

  {
    path: '/reject',
    name: 'Reject',
    component: () => import('@/views/invoice/reject/reject.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ປະຕິເສດ',
          disabled: true,
          href: '/reject',
        },
      ],
    },
  },
  {
    path: '/invoice/month/:id/',
    name: 'InvoiceTab',
    component: () => import('@/views/invoice/tabindex.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ໃບບິນເກັບເງິນຄ່າຂີ້ເຫື້ຍອ',
          disabled: false,
          href: '/invoice',
        },
        {
          text: 'ລາຍເດືອນ',
          disabled: true,
          href: '/invoice',
        },
      ],
    },
  },
  {
    path: '/invoice/:id',
    name: 'InvoiceDetail',
    component: () => import('@/views/invoice/invoiceDetail.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ບິນເກັບເງິນຄ່າຂີ້ເຫື້ຍອ',
          disabled: false,
          href: '/invoice',
        },
        {
          text: 'ລາຍເດືອນ',
          disabled: true,
          href: '/invoice',
        },
        {
          text: 'ລາຍເດືອນ',
          disabled: true,
          href: '',
        },
      ],
    },
  },
  {
    path: '/invoice/payment/:id',
    name: 'Payment',
    component: () => import('@/views/invoice/payment.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  // Notification
  {
    path: '/notification',
    name: 'NotificationTab',
    component: () => import('@/views/notification/tabindex.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  {
    path: '/notification/:id',
    name: 'NotificationView',
    component: () => import('@/views/notification/viewNotification.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  // Report
  {
    path: '/report/trash',
    name: 'Report-Trash',
    component: () => import('@/views/report/tabCollectionIndex.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານເກັບຂີ້ເຫຍື້ອ',
          disabled: true,
          href: '/report/trash',
        },
      ],
    },
  },
  // Report by driver
  {
    path: '/report/driver/collection/v2',
    name: 'Report-Driver-Collection-V2',
    component: () => import('@/views/report/v2/ReportCollection.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານເກັບຂີ້ເຫຍື້ອຕາມລົດ',
          disabled: true,
          href: '/report/driver/collection/v2',
        },
      ],
    },
  },
  // Report by driver
  {
    path: '/report/driver/collection',
    name: 'Report-Driver-Collection',
    component: () => import('@/views/report/ReportCollection.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານເກັບຂີ້ເຫຍື້ອຕາມລົດ',
          disabled: true,
          href: '/report/driver/collection',
        },
      ],
    },
  },
  // Report by address
  {
    path: '/report/address/collection',
    name: 'Report-Address-Collection',
    component: () => import('@/views/report/ReportCollectionByAddress.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານເກັບຂີ້ເຫຍື້ອຕາມບ້ານ',
          disabled: true,
          href: '/report/address/collection',
        },
      ],
    },
  },

  // Report by address
  {
    path: '/report/billing/main',
    name: 'Report-Billing-Main',
    component: () => import('@/views/report/ReportBillingMain.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານບິນຄ່າຂີ້ເຫຍື້ອທຸລະກິດ',
          disabled: true,
          href: '/report/address/collection',
        },
      ],
    },
  },

  {
    path: '/report/billing/customer',
    name: 'Report-Billing-Customer',
    component: () => import('@/views/report/ReportCustomerBill.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານບິນລູກຄ້າ',
          disabled: true,
          href: '/report/customer-billing',
        },
      ],
    },
  },

  {
    path: '/report/customer',
    name: 'Report-Customer',
    component: () => import('@/views/report/Customer.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານລູກຄ້າຄົວເຮືອນ',
          disabled: true,
          href: '/report/r',
        },
      ],
    },
  },

  {
    path: '/view/client/:id',
    name: 'ViewClient',
    component: () => import('@/views/report/CustomerDetail.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານລູກຄ້າ',
          disabled: false,
          href: '/report/customer',
        },
        {
          text: 'ລາຍລະອຽດ',
          disabled: true,
        },
      ],

    },
  },
  {
    path: '/report/company',
    name: 'Report-Company',
    component: () => import('@/views/report/ReportCompany.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານຂໍ້ມູນຫົວໜ່ວຍທຸລະກິດ',
          disabled: true,
          href: '/report/company',
        },
      ],
    },
  },
  {
    path: '/report/driver',
    name: 'Report-Driver',
    component: () => import('@/views/report/ReportDriver.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານພະນັກງານຂັບລົດ',
          disabled: true,
          href: '/report/driver',
        },
      ],
    },
  },
  {
    path: '/view/company/:id',
    name: 'ViewCompanyDetail',
    component: () => import('@/views/report/CompanyDetail.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
      breadcrumb: [
        {
          text: 'ລາຍງານຂໍ້ມູນຫົວໜ່ວຍທຸລະກິດ',
          disabled: false,
          href: '/report/company',
        },
        {
          text: 'ລາຍລະອຽດ',
          disabled: true,
        },
      ],
    },
  },
  {
    path: '/report/invoice',
    name: 'Report-Invoice',
    component: () => import('@/views/report/tabInvoiceIndex.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },

  {
    path: '/report/event/trash',
    name: 'Report-Trash-Event',
    component: () => import('@views/report/TabCollectionTab/homeCollectionEvent.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
  {
    path: '/report/event/invoice',
    name: 'Report-Invoice-Event',
    component: () => import('@views/report/TabCollectionTab/homeInvoice.vue'),
    meta: {
      layout: 'admin',
      middleware: [Middlewares.auth],
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

function nextCheck(context, middleware, index) {
  const nextMiddleware = middleware[index];
  if (!nextMiddleware) return context.next();

  return (...parameters) => {
    context.next(...parameters);
    const nextMidd = nextCheck(context, middleware, index + 1);

    nextMiddleware({ ...context, nextMidd });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const ctx = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextCheck(ctx, middleware, 1);
    return middleware[0]({ ...ctx, nextMiddleware });
  }
  return next();
});
export default router;
