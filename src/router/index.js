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
        path: '/contact',
        name: 'Contact',
        component: () => import('@views/Contact.vue'),
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
            breadcrumb: [
                {
                    text: 'Home Customer',
                    disabled: true,
                    href: '/customer'
                }
            ]
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
                    text: 'Activity log',
                    disabled: true,
                    href: '/activity-log'
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
                    text: 'Dashboard',
                    disabled: true,
                    href: '/'
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
                    text: 'User',
                    disabled: true,
                    href: '/user'
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
                    text: 'User',
                    disabled: false,
                    href: '/user'
                },
                {
                    text: 'Create',
                    disabled: true,
                    href: '/user/create'
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
            breadcrumb: [
                {
                    text: 'Import User',
                    disabled: true,
                    href: '/import-file'
                },
            ]
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
                    text: 'Driver',
                    disabled: true,
                    href: '/driver'
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
                    disabled: true,
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
                    disabled: true,
                    href: '/team',
                }
            ]
        },
    },
    {
        path: '/team/:id',
        name: 'TeamDetail',
        component: () => import('@/views/team/TeamDetail.vue'),
        meta: {
            layout: "admin",
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
            ]
        },
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
                    text: 'Company Customer',
                    disabled: true,
                    href: '/company',
                },
            ]
        },
    },
    {
        path: '/create/company',
        name: 'CreateCompany',
        component: () => import('@/views/company/CreateCompany.vue'),
        props:true,
        meta: {
            layout: "admin",
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
            ]
        },
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
                    text: 'Company Request',
                    disabled: true,
                    href: '/company-request',
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
            ]

        }
    },

    {
        path: '/edit/company/:id',
        name: 'EditCompany',
        component: () => import('@/views/company/EditCompany.vue'),
        meta: {
            layout: "admin",
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
            ]
        }
    },
    {
        path: '/view/company/:id',
        name: 'ViewCompany',
        component: () => import('@/views/company/ViewCompany.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Company Customer',
                    disabled: false,
                    href: '/company',
                },
                {
                    text: 'View',
                    disabled: true,
                },
            ]
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
                    text: 'Collection',
                    disabled: true,
                    href: '/collection-event'
                }
            ]
        },
    },
    {
        path: '/create/collection',
        name: 'CreateCollectionEvent',
        component: () => import('../views/collection/CreateCollectionEvent.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Collection',
                    disabled: false,
                    href: '/collection-event'
                },
                {
                    text: 'Create',
                    disabled: true,
                }
            ]
        }
    },
    {
        path: '/view/collection-event/:id',
        name: 'ViewCollectionEvent',
        component: () => import('@/views/collection/ViewCollectionEvent.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Collection',
                    disabled: false,
                    href: '/collection-event'
                },
                {
                    text: 'View',
                    disabled: true,
                }
            ]
        }
    },

    {
        path: '/edit/collection-event/:id',
        name: 'EditCollectionEvent',
        component: () => import('@/views/collection/EditCollectionEvent.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Collection',
                    disabled: false,
                    href: '/collection-event'
                },
                {
                    text: 'Edit Collection',
                    disabled: true,
                }
            ]
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
                    text: 'Role',
                    disabled: true,
                    href: '/role'
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
                    text: 'Home Customer',
                    disabled: false,
                    href: '/customer'
                },
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
            breadcrumb: [
                {
                    text: 'Home Customer',
                    disabled: false,
                    href: '/customer'
                },
                {
                    text: 'Create',
                    disabled: true,
                    href: '/customer'
                }
            ]
        }
    },
    {
        path: '/edit/customer/:id',
        name: 'EditCustomer',
        component: () => import('../views/customer/EditCustomer.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Home Customer',
                    disabled: false,
                    href: '/customer'
                },
                {
                    text: 'Edit',
                    disabled: true,
                    href: '/customer'
                }
            ]
        }

    },
    {
        path: '/view/customer/:id',
        name: 'ViewCustomer',
        component: () => import('@/views/customer/ViewCustomer.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Home Customer',
                    disabled: false,
                    href: '/customer'
                },
                {
                    text: 'View',
                    disabled: true,
                    href: '/customer'
                }
            ]
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
                    text: 'Village',
                    disabled: true,
                    href: '/village'
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
            breadcrumb: [
                {
                    text: 'Village',
                    disabled: false,
                    href: '/village'
                },
                {
                    text: 'Detail',
                    disabled: true,
                    href: '/village'
                }
            ]
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
                    text: 'Package',
                    disabled: true,
                    href: '/package'
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
                    text: 'Vehicle',
                    disabled: true,
                    href: '/vehicle'
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
            breadcrumb: [
                {
                    text: 'Village Detail',
                    disabled: true,
                    href: '/vehicle'
                }
            ]
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
                    text: 'Route Plan',
                    disabled: true,
                    href: '/routeplan'
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
            breadcrumb: [
                {
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'Create',
                    disabled: true,
                }
            ]
        }
    },

    {
        path: '/edit/plan/:id',
        name: 'EditPlan',
        component: () => import('@/views/routePlan/EditPlan.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'Edit',
                    disabled: true,
                }
            ]
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
                    text: 'Plan',
                    disabled: true,
                    href: '/plan'
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
            breadcrumb: [
                {
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'View',
                    disabled: true,
                }
            ]
        }
    },
    {
        path: '/company/plan/:id',
        name: 'ViewCompanyRoutePlan',
        component: () => import('@/views/routePlan/tabs/company/ViewPlanCompany.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'Company',
                    disabled: true,
                }
            ]
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
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'Home Customer',
                    disabled: true,
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
            breadcrumb: [
                {
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'Edit',
                    disabled: true,
                }
            ]
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
            breadcrumb: [
                {
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'Home Customer',
                    disabled: false,
                    href: '/select/home'
                },
                {
                    text: 'Create',
                    disabled: true,
                }
            ]
        }
    },
    {
        path: '/edit/company/no-map/plan/:id',
        name: 'EditPlanNoMap',
        component: () => import('@/views/routePlan/companyPlan/UpdatePlanCompany.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'Edit',
                    disabled: true,
                }
            ]
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
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'Select Company',
                    disabled: true,
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
            breadcrumb: [
                {
                    text: 'Route Plan',
                    disabled: false,
                    href: '/routeplan'
                },
                {
                    text: 'Select Company',
                    disabled: false,
                    href: '/select/company'
                },
                {
                    text: 'Create',
                    disabled: true,
                }
            ]
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
                    text: 'Calendar',
                    disabled: true,
                    href: '/calendar'
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
                    text: 'Invoice',
                    disabled: true,
                    href: '/invoice'
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
                    text: 'Reject',
                    disabled: true,
                    href: '/reject'
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
            breadcrumb: [
                {
                    text: 'Invoice',
                    disabled: false,
                    href: '/invoice'
                },
                {
                    text: 'Monthly',
                    disabled: true,
                    href: '/invoice'
                }
            ]
        }
    },
    {
        path: '/invoice/:id',
        name: 'InvoiceDetail',
        component: () => import('@/views/invoice/invoiceDetail.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Invoice',
                    disabled: false,
                    href: '/invoice'
                },
                {
                    text: 'Monthly',
                    disabled: true,
                    href: '/invoice'
                },
                {
                    text: 'Invoice Detail',
                    disabled: true,
                    href: ''
                }
            ]
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
            breadcrumb: [
                {
                    text: 'Report Trash',
                    disabled: true,
                    href: '/report/trash'
                },
            ]
        }
    },
    //Report by driver
    {
        path: '/report/driver/collection',
        name: 'Report-Driver-Collection',
        component: () => import('@/views/report/ReportCollection.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Report Driver Collection',
                    disabled: true,
                    href: '/report/driver/collection'
                },
            ]
        }
    },
    //Report by address
    {
        path: '/report/address/collection',
        name: 'Report-Address-Collection',
        component: () => import('@/views/report/ReportCollectionByAddress.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Report by address Collection',
                    disabled: true,
                    href: '/report/address/collection'
                },
            ]
        }
    },

    {
        path: '/report/customer',
        name: 'Report-Customer',
        component: () => import('@/views/report/Customer.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Report Customer',
                    disabled: true,
                    href: '/report/customer'
                },
            ]
        }
    },

    {
        path: '/view/client/:id',
        name: 'ViewClient',
        component: () => import('@/views/report/CustomerDetail.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Report Customer',
                    disabled: false,
                    href: '/report/customer'
                },
                {
                    text: 'Detail',
                    disabled: true,
                },
            ]

        }
    },
    {
        path: '/report/company',
        name: 'Report-Company',
        component: () => import('@/views/report/ReportCompany.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Report Company',
                    disabled: true,
                    href: '/report/company'
                },
            ]
        }
    },
    {
        path: '/report/driver',
        name: 'Report-Driver',
        component: () => import('@/views/report/ReportDriver.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Report Driver',
                    disabled: true,
                    href: '/report/driver'
                },
            ]
        }
    },
    {
        path: '/view/company/:id',
        name: 'ViewCompanyDetail',
        component: () => import('@/views/report/CompanyDetail.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
            breadcrumb: [
                {
                    text: 'Report Company',
                    disabled: false,
                    href: '/report/company'
                },
                {
                    text: 'Detail',
                    disabled: true,
                },
            ]
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
        component: () => import('@views/report/TabCollectionTab/homeCollectionEvent.vue'),
        meta: {
            layout: "admin",
            middleware: [Middlewares.auth],
        }
    },
    {
        path: '/report/event/invoice',
        name: 'Report-Invoice-Event',
        component: () => import('@views/report/TabCollectionTab/homeInvoice.vue'),
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

        nextMiddleware({...context, nextMidd});
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
        return middleware[0]({...ctx, nextMiddleware});

    }
    return next();
});
export default router
