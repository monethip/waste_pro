export const getBgColor = function (status) {
    switch (status) {
        case "created":
        case "ລໍຖ້າອະນຸມັດ":
            return "#73b8fd";
        case "approved":
        case "ອະນຸມັດແລ້ວ":
            return "#0080fc";
        case "canceled":
        case "ບິນຖືກຍົກເລີກ":
            return "#eb004c";
        case "rejected":
        case "ການຈ່າຍຖືກປະຕິເສດ":
            return "#740127";
        case "to_confirm_payment":
        case "ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ":
            return "#9c540d";
        case "success":
        case "ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ":
            return "#02a38a";
    }
}