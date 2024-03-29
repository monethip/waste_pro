export const getBgColor = function (status) {
  switch (status) {
    case 'created':
    case 'ລໍຖ້າອະນຸມັດ':
      return '#73b8fd';
    case 'approved':
    case 'ອະນຸມັດແລ້ວ':
      return '#0080fc';
    case 'canceled':
    case 'ບິນຖືກຍົກເລີກ':
      return '#eb004c';
    case 'rejected':
    case 'ການຈ່າຍຖືກປະຕິເສດ':
      return '#740127';
    case 'to_confirm_payment':
    case 'ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ':
      return '#9c540d';
    case 'success':
    case 'ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ':
      return '#02a38a';
  }
};

export const getLaoStatus = function (status) {
  switch (status) {
    case 'created':
      return 'ລໍຖ້າອະນຸມັດ';
    case 'approved':
      return 'ອະນຸມັດແລ້ວ';
    case 'canceled':
      return 'ບິນຖືກຍົກເລີກ';
    case 'rejected':
      return 'ການຈ່າຍຖືກປະຕິເສດ';
    case 'to_confirm_payment':
      return 'ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ';
    case 'success':
      return 'ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ';
    case 'cash':
      return 'ຊຳລະເງິນສົດ';
    case 'bcel':
      return 'BCEL';
    default:
      return status;
  }
};

export const getLaoBillingType = function (type) {
  switch (type) {
    case 'CustomBill':
      return 'ບິນຍ້ອນຫຼັງ';
    case 'NewCollectionEvent':
      return 'ບີນບໍລີການຂີ້ເຫຍື້ອພິເສດ';
    case 'FutureInvoice':
      return 'ບິນບໍລິການລ່ວງໜ້າ';
    case 'NewInvoice':
      return 'ບິນບໍລິການປະຈຳເດືອນ';
    default:
      return type;
  }
};

export const getLaoCollectStatus = function (status) {
  switch (status) {
    case 'requested':
      return 'ລູກຄ້າຮ້ອງຂໍເຂົ້າມາ';
    case 'rejected':
      return 'ປະຕິເສດລູກຄ້າແລ້ວ';
    case 'approved':
      return 'ອະນຸມັດແລ້ວ ລໍຖ້າລົງເກັບ';
    case 'collected':
      return 'ເກັບແລ້ວ ລໍຖ້າຢືນຢັນ';
    case 'collect_confirm':
      return 'ລູກຄ້າຢືນຢັນການເກັບແລ້ວ';
    case 'collect_reject':
      return 'ລູກຄ້າປະຕິເສດການເກັບ';
    default:
      return status;
  }
};

export const payment_methods = [
  {
    value: 'cash',
    text: 'ເງິນສົດ',
  },
  {
    value: 'bcel',
    text: 'ເງິນໂອນ',
  },
  {
    value: 'bcel_online',
    text: 'bcel bill payments',
  },
];

export const normal = ['created', 'approved', 'to_confirm_payment', 'success'];
export const red = ['rejected', 'canceled'];

export const units = ['kg', 'ຖົງ', 'container', 'ຄັ້ງ'];
