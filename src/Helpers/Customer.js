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

