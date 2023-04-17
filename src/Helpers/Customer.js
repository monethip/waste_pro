export const getLaoCompanyCostBy = function (costBy) {
  switch (costBy) {
    case 'container':
      return 'ຄອນເທນເນີ';
    case 'fix_cost':
      return 'ເປັນຖ້ຽວ';
    case 'chartered':
      return 'ມອບເໝົາ';
    case 'bag':
      return 'ບໍລິມາດ';
    case 'infect':
      return 'ຂີ້ເຫຍື້ອຕິດເຊື້ອ';
    case '32km':
      return 'ຫຼັກ32';
    default: return costBy;
  }
};

export const getCompanyCostBy = [
  {
    en: 'container',
    la: 'ຄອນເທນເນີ',
  },
  {
    en: 'fix_cost',
    la: 'ເປັນຖ້ຽວ',
  },
  {
    en: 'chartered',
    la: 'ມອບເໝົາ',
  },
  {
    en: 'bag',
    la: 'ບໍລິມາດ',
  },
  {
    en: 'infect',
    la: 'ຂີ້ເຫຍື້ອຕິດເຊື້ອ',
  },
  {
    en: '32km',
    la: 'ຫຼັກ32',
  },
];

export const getPaymentMethod = [
  {
    en: 'bcel',
    la: 'ແນບຮູບບິນ',
  },
  {
    en: 'cash',
    la: 'ເງິນສົດ',
  },
  {
    en: 'bcel_online',
    la: 'Bcel Bill Payment',
  },
];

export const getLaoCustomerType = function (type) {
  switch (type) {
    case 'company':
      return 'ຫົວໜ່ວຍທຸລະກິດ';
    case 'home':
      return 'ຄົວເຮືອນ';
    default: return type;
  }
};
export const getLaoInvoiceTypes = function (type) {
  switch (type) {
    case 'FutureInvoice':
      return 'ຫົວໜ່ວຍທຸລະກິດ';
    case 'NewInvoice':
      return 'ຄົວເຮືອນ';
    case 'NewCollectionEvent':
      return 'ຄົວເຮືອນ';
    case 'CustomBill':
      return 'ຄົວເຮືອນ';
    default: return type;
  }
};

export const getCustomerUnit = function (costBy) {
  switch (costBy) {
    case 'bag':
    case 'chartered':
    case '32km':
    case 'infect':
      return 'ຖົງ';
    case 'container':
      return 'ຄອນເທນເນີ';
    case 'fix_cost':
      return 'ຖ້ຽວ';
    default: return costBy;
  }
};

export const getEventStatus = [
  {
    en: 'requested',
    la: 'ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ',
    color: '#34495e',
  },
  {
    en: 'rejected',
    la: 'ປະຕິເສດລູກຄ້າແລ້ວ',
    color: '#eff3f5',
  },
  {
    en: 'approved',
    la: 'ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ',
    color: '#54a0ff',
  },
  {
    en: 'collected',
    la: 'ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ',
    color: '#c1c40f',
  },
  {
    en: 'collect_confirm',
    la: 'ລູກຄ້າຢືນຢັນການເກັບແລ້ວ',
    color: '#30cb83',
  },
  {
    en: 'collect_reject',
    la: 'ລູກຄ້າປະຕິເສດການເກັບ',
    color: '#e74c3c',
  },
];

export const billDateList = [
  {
    text: 'ວັນທີຈ່າຍບິນ',
    value: 'paided_at',
  },
  {
    text: 'ວັນທີສ້າງບິນ',
    value: 'created_at',
  },
  {
    text: 'ວັນທີອະນຸມັດບິນ',
    value: 'approved_at',
  },

  {
    text: 'ວັນທີກວດສອບບິນສຳເລັດ',
    value: 'confirmed_payment_at',
  },
];

export const concatPackage = (packageArr = []) => {
  const connateArr = [];

  for (const packageItem of packageArr) {
    connateArr.push({
      id: packageItem.id,
      name: `${packageItem.name} (${Intl.NumberFormat().format(packageItem.price)} ກີບ)`,
    });
  }

  return connateArr;
};

export const getCustomerCanCollect = [
  {
    value: '',
    text: 'ທັງໝົດ',
  },
  {
    value: 'can',
    text: 'ເກັບໄດ້',
  },
  {
    value: 'not',
    text: 'ເກັບບໍ່ໄດ້',
  },
];
