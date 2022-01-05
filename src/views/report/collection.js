import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
    title() {
        return `Vientiane Waste Co-Dev|Report Invoice`;
    },
    // props: ['collectionType'],
    data() {
        return {
            tab: 'tab-1',
            customers: [],
            loading: false,
            customerId: "",
            //Year
            year_from: "",
            year_to: "",
            //Month
            month_from: "",
            month_to: "",
            //Date
            date_from: "",
            date_to: "",
            //Pagination
            offset: 12,
            pagination: {},
            per_page: 15,
            search: "",
            oldVal: "",
            collections: [],
            homeCollection: [],
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
                {
                    name: "ວັນທີ",
                    duration: "date"
                },
                {
                    name: "Merge",
                    duration: "merge"
                },
            ],
            collectionType: "home",

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
            const data = new FormData();
            data.append("page", this.pagination.current_page);
            data.append("per_page", this.per_page);
            data.append("type", this.collectionType);
            data.append("duration", this.selectedDuration);
            if ((this.year_from !== "" && this.year_to !== "") && (this.selectedDuration == 'year')) {
                data.append("year_from", this.moment(this.year_from).format("YYYY"));
                data.append("year_to", this.moment(this.year_to).format("YYYY"));
            }
            if ((this.month_from !== "" && this.month_to !== "") && (this.selectedDuration == 'month')) {
                data.append("month_from", this.moment(this.month_from).format("YYYY-MM"));
                data.append("month_to", this.moment(this.month_to).format("YYYY-MM"));
            }
            if ((this.date_from !== "" && this.date_to !== "") && (this.selectedDuration == 'date')) {
                data.append("date_from", this.moment(this.date_from).format("YYYY-MM-DD"));
                data.append("date_to", this.moment(this.date_to).format("YYYY-MM-DD"));
            }
            this.$store.commit("Loading_State", true);
            this.$axios
                .post("report-collection", data
                    // {
                    //     page: this.pagination.current_page,
                    //     per_page: this.per_page,
                    //     filter: this.search,
                    //     duration: this.selectedDuration,
                    //     type: this.collectionType,
                    //     year_from: this.moment(this.year_from).format("YYYY"),
                    //     year_to: this.moment(this.year_to).format("YYYY"),
                    //     // month_from: month_from,
                    //     // month_to: month_to,
                    //     date_from: this.date_from,
                    //     date_to: this.date_to,
                    // }
                )
                .then((res) => {
                    if (res.data.code == 200) {
                        setTimeout(() => {
                            this.$store.commit("Loading_State", false);
                            this.homeCollection = res.data.data.details.data;
                            this.collections = res.data.data.details.data;
                            this.summary = res.data.data.summary;
                            // console.log(this.summary);
                            // console.log(this.collections)
                            // console.log(this.homeCollection)
                            this.pagination = res.data.data.details.pagination;
                            // console.log(this.pagination)
                        }, 300);
                    }
                })
                .catch((error) => {
                    this.$store.commit("Loading_State", false);
                    this.$store.commit("Toast_State", {
                        value: true,
                        color: "error",
                        msg: error.response.data.message,
                    });
                });
        },

        exportData() {
            let data = new FormData();
            data.append("type", this.collectionType);
            data.append("duration", this.selectedDuration);
            data.append("download", 1)
            if ((this.year_from !== "" && this.year_to !== "") && (this.selectedDuration == 'year')) {
                data.append("year_from", this.moment(this.year_from).format("YYYY"));
                data.append("year_to", this.moment(this.year_to).format("YYYY"));
            }
            if ((this.month_from !== "" && this.month_to !== "") && (this.selectedDuration == 'month')) {
                data.append("month_from", this.moment(this.month_from).format("YYYY-MM"));
                data.append("month_to", this.moment(this.month_to).format("YYYY-MM"));
            }
            if ((this.date_from !== "" && this.date_to !== "") && (this.selectedDuration == 'date')) {
                data.append("date_from", this.moment(this.date_from).format("YYYY-MM-DD"));
                data.append("date_to", this.moment(this.date_to).format("YYYY-MM-DD"));
            }
            this.loading = true;
            this.$axios
                .post(
                    "report-collection",
                    data,
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
                                "Report_Collection" + ".xlsx"
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
        selectedDuration: function () {
            this.fetchData();
        },
        search: function (value) {
            if (value == "") {
                this.fetchData();
            }
        },
        tab: function (value) {
            if (value == "tab-1") {
                this.collectionType = "home";
                this.fetchData();
                this.$router
                    .push({ name: "Report-Trash", query: { tab: "home" } })
                    .catch(() => { });
            } else if (value == "tab-2") {
                this.collectionType = "company";
                this.fetchData();
                this.$router
                    .push({
                        name: "Report-Trash",
                        query: { tab: "company" },
                    })
                    .catch(() => { });
            }
        },
    },

    created() {
        if (this.$route.query.tab == "home") {
            this.tab = "tab-1";
            this.collectionType = "home";
            this.fetchData();
        } else if (this.$route.query.tab == "company") {
            this.tab = "tab-2";
            this.collectionType = "company";
            this.fetchData();
        }
        // this.fetchData();
        // console.log(this.tab);
    },
};