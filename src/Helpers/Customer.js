export const getLaoCompanyCostBy = function (costBy) {
    switch (costBy) {
        case "container":
            return "ຄອນເທນເນີ"
        case "fix_cost":
            return "ເປັນຖ້ຽວ"
        case "chartered":
            return "ມອບເໝົາ"
        case "bag":
            return "ບໍລິມາດ"
        default: return costBy
    }
}

export const getCompanyCostBy = [
    {
        en: "container",
        la: "ຄອນເທນເນີ"
    },
    {
        en: "fix_cost",
        la: "ເປັນຖ້ຽວ"
    },
    {
        en: "chartered",
        la: "ມອບເໝົາ"
    },
    {
        en: "bag",
        la: "ບໍລິມາດ"
    },
]

export const getLaoCustomerType = function (type) {
    switch (type) {
        case "company":
            return "ຫົວໜ່ວຍທຸລະກິດ"
        case "home":
            return "ຄົວເຮືອນ"
        default: return type
    }
}
export const getLaoInvoiceTypes = function (type) {
    switch (type) {
        case "FutureInvoice":
            return "ຫົວໜ່ວຍທຸລະກິດ"
        case "NewInvoice":
            return "ຄົວເຮືອນ"
        case "NewCollectionEvent":
            return "ຄົວເຮືອນ"
        case "CustomBill":
            return "ຄົວເຮືອນ"
        default: return type
    }
}