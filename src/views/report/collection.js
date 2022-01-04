import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
    title() {
        return `Vientiane Waste Co-Dev|Report Invoice`;
    },
    data() {
        return {
            customers: [],
            loading: false,
            customerId: "",
            //Year
            start_year: "",
            year_menu: false,
            end_year: "",
            end_year_menu: false,
            //Month
            start_month: "",
            start_month_menu: false,
            end_month: "",
            end_month_menu: false,
            //Pagination
            offset: 12,
            pagination: {},
            per_page: 15,
            search: "",
            oldVal: "",
            invoices: [],
            summary: {},
            selectedDuration: "year",
            duration: [
                {
                    name: "ປີ",
                    duration: "year"
                },
                {
                    name: "ເດືອນ",
                    duration: "month"
                },
            ],
            selectedInvoceType: "home",
            invoiceType: [
                {
                    name: "Home",
                    value: "home"
                },
                {
                    name: "Company",
                    value: "company"
                },
            ],

            // headers: [
            //     { text: "ວັນທີ", value: "month", sortable: false },
            //     { text: "ເລກບິນ", value: "user.email", sortable: false },
            //     { text: "ລູກຄ້າ", value: "full_name" },
            //     { text: "ຈຳນວນຖົງ", value: "total_bag", sortable: false },
            //     { text: "ສ່ວນຫຼຸດ", value: "discount" },
            //     { text: "SubTotal", value: "sub_total", sortable: false },
            //     { text: "Total", value: "total", sortable: false },
            //     { text: "ສະຖານະ", value: "status", sortable: false },
            //     { text: "Type", value: "type", sortable: false },
            //     { text: "", value: "actions", sortable: false },
            // ]
        };
    },
    methods: {
        fetchData() {
            this.$store.commit("Loading_State", true);
            this.$axios
                .post("report-collection", {

                    page: this.pagination.current_page,
                    per_page: this.per_page,
                    filter: this.search,
                    duration: this.selectedDuration,
                    type: this.selectedInvoceType,

                })
                .then((res) => {
                    if (res.data.code == 200) {
                        setTimeout(() => {
                            this.$store.commit("Loading_State", false);
                            this.invoices = res.data.data.details.data;
                            this.summary = res.data.data.summary;
                            // console.log(this.summary);
                            // console.log(this.invoices)
                            this.pagination = res.data.data.pagination;
                        }, 300);
                    }
                })
                .catch((error) => {
                    this.$store.commit("Loading_State", false);
                    if (error.response.status == 422) {
                        var obj = error.response.data.errors;
                        for (let [key, message] of Object.entries(obj)) {
                            this.server_errors[key] = message[0];
                        }
                    }
                });
        },

        exportData() {
            console.log("Hi")
            this.loading = true;
            this.$axios
                .post(
                    "report-collection",
                    {
                        // page: this.pagination.current_page,
                        // per_page: this.per_page,
                        // filter: this.search,
                        duration: this.selectedDuration,
                        type: 'company',
                        download: 1,
                    },
                    { responseType: "blob" }
                )
                .then((res) => {
                    if (res.status == 200) {
                        setTimeout(() => {
                            this.loading = false;
                            const fileUrl = window.URL.createObjectURL(
                                new Blob([res.data])
                            );
                            const fileLink = document.createElement("a");
                            fileLink.href = fileUrl;
                            fileLink.setAttribute(
                                "download",
                                "Collection" + ".xlsx"
                            );
                            document.body.appendChild(fileLink);
                            fileLink.click();
                            document.body.removeChild(fileLink);
                        }, 300);
                        this.$router.push({
                            name: "Report-Trash",
                        });
                    }
                })
                .catch((error) => {
                    this.$store.commit("Toast_State", {
                        value: true,
                        color: "error",
                        msg: error.response.data.message,
                    });
                    this.loading = false;
                });
        },

        editPage(id) {
            this.$router.push({
                name: "InvoiceDetail",
                params: { id },
            });
        },
        viewPage(id) {
            this.$router.push({
                name: "InvoiceDetail",
                params: { id },
            });
        },
        Search() {
            GetOldValueOnInput(this);
        },
    },
    watch: {
        // selectedDuration: function () {
        //     this.fetchData();
        // },
        search: function (value) {
            if (value == "") {
                this.fetchData();
            }
        },
    },
    created() {
        // this.fetchData();
    },
};