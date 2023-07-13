export default [
  {
    title: 'ຈັດການຂັ້ນສູງ',
    icon: 'mdi-account-supervisor-circle',
    except_roles: ['kbt'],
    group_permissions: ['delete_any_customers', 'delete_any_bills'],
    menu: [
      {
        icon: 'mdi-delete-alert',
        title: 'ລຶບລູກຄ້າສາຍບ້ານ',
        to: '/delete-home',
        permissions: ['delete_any_customers'],
      },
      {
        icon: 'mdi-delete-alert',
        title: 'ລຶບລູກຄ້າສາຍທຸລະກິດ',
        to: '/delete-company',
        permissions: ['delete_any_customers'],
      },
      {
        icon: 'mdi-delete-alert',
        title: 'ລຶບ-ແກ້ໄຂບີນ',
        to: '/delete-billing',
        permissions: ['delete_any_bills'],
      },
    ],
  },
  {
    title: 'Home',
    icon: 'mdi-home',
    group_permissions: ['get_dashboard', 'get_activity'],
    menu: [
      {
        icon: 'mdi-home',
        title: 'home',
        to: '/welcome',
        permissions: [],
      },
      {
        icon: 'mdi-monitor-dashboard',
        title: 'dashboard',
        to: '/',
        permissions: ['get_dashboard'],
        except_roles: ['kbt'],
      },
      {
        icon: 'mdi-apps',
        title: 'Activity Log',
        to: '/activity-log',
        permissions: ['get_activity'],
        except_roles: ['kbt'],
      },
    ],
  },
  {
    title: 'ຈັດການຂໍ້ມູນ',
    icon: 'mdi-cog',
    group_permissions: [
      'get_role',
      'get_user',
      'get_customer',
      'get_driver',
      'get_address',
    ],
    except_roles: ['kbt'],
    menu: [
      {
        icon: 'mdi-file-import',
        title: 'Import User',
        to: '/import-file',
        permissions: ['create_driver'],
      },
      {
        icon: 'mdi-account-key',
        title: 'Roles',
        to: '/role',
        permissions: ['get_role', 'create_role'],
      },
      {
        icon: 'mdi-package',
        title: 'ຈັດການຂໍ້ມູນບໍລິການ',
        to: '/package',
        permissions: ['get_package', 'get_customer'],
      },
      {
        icon: 'mdi-home-account',
        title: 'ຈັດການທີ່ຢູ່',
        to: '/village',
        permissions: ['get_address', 'get_driver'],
      },
      {
        icon: 'mdi-home-account',
        title: 'ຈັດການລາຍລະອຽດທີ່ຢູ່',
        to: '/village-variation',
        permissions: ['get_address', 'get_driver'],
      },
      {
        icon: 'mdi-car-multiple',
        title: 'ຈັດການພາຫະນະ',
        to: '/vehicle',
        permissions: ['get_vehicle'],
      },
    ],
  },
  {
    title: 'ຂໍ້ມູນຜູ້ໃຊ້',
    icon: 'mdi-account-supervisor',
    except_roles: ['kbt'],
    group_permissions: [
      'get_role',
      'get_user',
      'get_customer',
      'get_driver',
      'get_address',
    ],
    menu: [
      {
        icon: 'mdi-account-group-outline',
        title: 'ຜູ້ໃຊ້ທັງໝົດ',
        to: '/user',
        permissions: ['get_user'],
      },
      {
        icon: 'mdi-briefcase-account-outline',
        title: 'Sale Users',
        to: '/user-sale',
        permissions: ['get_user'],
      },
      {
        icon: 'mdi-dump-truck',
        title: 'Drivers',
        to: '/driver',
        permissions: ['get_driver'],
      },
      {
        icon: 'mdi-badge-account',
        title: 'ແອກລົດ',
        to: '/employee',
        permissions: ['get_employee'],
      },
      {
        icon: 'mdi-account-group',
        title: 'Team',
        to: '/team',
        permissions: ['get_team'],
      },
    ],
  },

  {
    title: 'ຂໍ້ມູນລູກຄ້າ',
    icon: 'mdi-database',
    group_permissions: ['get_customer'],
    menu: [
      {
        icon: 'mdi-account-alert-outline',
        title: 'ລູກຄ້າທີ່ຍັງບໍ່ເຂົ້າບໍລິການ',
        to: '/pre-customer',
        permissions: ['get_customer'],
        except_roles: ['kbt'],
      },
      {
        icon: 'mdi-account-group',
        title: 'ລູກຄ້າຄົວເຮືອນ',
        to: '/customer',
        permissions: ['get_customer'],
      },
      {
        icon: 'mdi-office-building',
        title: 'ລູກຄ້າຫົວໜ່ວຍທຸລະກິດ',
        to: '/company',
        permissions: ['get_customer'],
        except_roles: ['kbt'],
      },
      {
        icon: 'mdi-account-group',
        title: 'ລູກຄ້າສົງຄຳຮ້ອງຂໍເຂົ້າມາ',
        to: '/company-request',
        permissions: ['get_customer'],
        except_roles: ['kbt'],
      },
    ],
  },
  {
    title: 'ແຜນເສັ້ນທາງ',
    icon: 'mdi-map',
    except_roles: ['kbt'],
    group_permissions: ['get_route_plan'],
    menu: [
      {
        icon: 'mdi-sitemap',
        title: 'ເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ',
        to: '/plan',
        permissions: ['get_route_plan'],
      },
      {
        icon: 'mdi-calendar-month',
        title: 'ຈັດແຜນເດີນລົດ',
        to: '/calendar',
        permissions: ['get_plan_calendar'],
      },
    ],
  },
  {
    icon: 'mdi-delete',
    title: 'ເກັບຂີ້ເຫື້ຍອພິເສດ',
    except_roles: ['kbt'],
    permissions: ['manage_event', 'get_customer'],
    to: '/v2/event-invoice',
    menu: [],
  },
  // {
  //   title: "ບິນແບບເກົ່າ",
  //   icon: "mdi-note-outline",
  //   group_permissions: ["get_invoice"],
  //   menu: [
  //     {
  //       icon: "mdi-note-outline",
  //       title: "ຈັດການຂໍ້ມູນບິນ",
  //       to: "/invoice",
  //       permissions: ["get_invoice"],
  //     },
  //     {
  //       icon: "mdi-close-circle-outline",
  //       title: "ເຫດຜົນຍົກເລີກບິນ",
  //       to: "/reject",
  //       permissions: ["get_invoice"],
  //     },
  //   ],
  // },

  {
    title: 'ຈັດການບິນ',
    icon: 'mdi-credit-card',
    except_roles: ['kbt'],
    group_permissions: ['get_invoice'],
    menu: [
      {
        icon: 'mdi-note-search',
        title: 'ຄົ້ນຫາບິນ',
        to: '/search-billing',
        permissions: ['get_invoice'],
      },
      {
        icon: 'mdi-note-outline',
        title: 'ບິນທັງໝົດ',
        to: '/billing',
        permissions: ['get_invoice'],
      },

      {
        icon: 'mdi-note-outline',
        title: 'ຈັດການບິນຢ້ອນຫຼັງ',
        to: '/v2/custom-bill',
        permissions: ['get_invoice'],
      },
      {
        icon: 'mdi-note-outline',
        title: 'ຈັດການບິນລ່ວງໜ້າ',
        to: '/future-invoice',
        permissions: ['get_invoice'],
      },
    ],
  },

  {
    title: 'ລາຍງານ',
    icon: 'mdi-finance',
    except_roles: ['kbt'],
    group_permissions: ['report', 'report'],
    menu: [
      {
        icon: 'mdi-chart-bubble',
        title: 'ເກັບຂີ້ເຫຍື້ອຕາມລົດໃໝ່',
        to: '/report/driver/collection/v2',
        permissions: ['report'],
      },
      // {
      //   icon: "mdi-chart-bubble",
      //   title: "ເກັບຂີ້ເຫຍື້ອຕາມລົດ",
      //   to: "/report/driver/collection",
      //   permissions: ["report"]
      // },
      {
        icon: 'mdi-chart-bubble',
        title: 'ເກັບຂີ້ເຫຍື້ອຕາມບ້ານ',
        to: '/report/address/collection',
        permissions: ['report'],
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'ລາຍງານການເກັບຂີ້ເຫຍື້ອ',
        to: '/report/trash',
        permissions: ['report'],
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'ລາຍງານເກັບຂີ້ເຫຍື້ອພິເສດ',
        to: '/report/event/trash',
        permissions: ['report'],
      },
      {
        icon: 'mdi-cash',
        title: 'ລາຍງານບິນ',
        to: '/report/billing/main',
        permissions: ['report'],
      },
      {
        icon: 'mdi-cash',
        title: 'ການເຄື່ອນໄຫວ Bcel-bill-payment',
        to: '/report/transaction',
        permissions: ['report'],
      },
      {
        icon: 'mdi-cash',
        title: 'ລາຍງານບິນລູກຄ້າ',
        to: '/report/billing/customer',
        permissions: ['report'],
      },
      {
        icon: 'mdi-cash',
        title: 'ລາຍງານບິນເຊວ',
        to: '/report/invoice',
        permissions: ['report'],
      },
      {
        icon: 'mdi-cash',
        title: 'ຂໍ້ມູນບັນຊີເກັບພິເສດ',
        to: '/report/event/invoice',
        permissions: ['report'],
      },
      {
        icon: 'mdi-chart-areaspline',
        title: 'ລາຍງານຂໍ້ມູນຄົນຂັບລົດ',
        to: '/report/driver',
        permissions: ['report'],
      },
      {
        icon: 'mdi-chart-bar',
        title: 'ລາຍງານຂໍ້ມູນລູກຄ້າ',
        to: '/report/customer',
        permissions: ['report'],
      },
      {
        icon: 'mdi-chart-bar',
        title: 'ລາຍງານຫົວໜ່ວຍທຸລະກິດ',
        to: '/report/company',
        permissions: ['report'],
      },
    ],
  },
];
