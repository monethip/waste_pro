import { GetOldValueOnInput } from "@/Helpers/GetValue";
import moment from "moment";
export default {
    title() {
        return `Vientiane Waste Co-Dev|Report Invoice`;
    },
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
            //Pagination
            offset: 12,
            pagination: {},
            per_page: 15,
            search: "",
            oldVal: "",
            invoices: [],
            summary: {},
            // companyInvoices: [],
            // companySummary: {},
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
            invoiceType: "home",
        };
    },
    methods: {
        fetchData() {
            const data = new FormData();
            data.append("page", this.pagination.current_page);
            data.append("per_page", this.per_page);
            data.append("type", this.invoiceType);
            data.append("duration", this.selectedDuration);
            if ((this.year_from !== "" && this.year_to !== "") && (this.selectedDuration == 'year')) {
                data.append("year_from", this.moment(this.year_from).format("YYYY"));
                data.append("year_to", this.moment(this.year_to).format("YYYY"));
            }
            if ((this.month_from !== "" && this.month_to !== "") && (this.selectedDuration == 'month')) {
                data.append("month_from", this.moment(this.month_from).format("YYYY-MM"));
                data.append("month_to", this.moment(this.month_to).format("YYYY-MM"));
            }
            this.$store.commit("Loading_State", true);
            this.$axios
                .post("report-invoice", data
                    //  {
                    //     params: {
                    //         page: this.pagination.current_page,
                    //         per_page: this.per_page,
                    //         filter: this.search,
                    //         duration: this.selectedDuration,
                    //         type: this.selectedInvoceType,
                    //     },
                    // }
                )
                .then((res) => {
                    if (res.data.code == 200) {
                        setTimeout(() => {
                            this.$store.commit("Loading_State", false);
                            this.invoices = res.data.data.details.data;
                            this.summary = res.data.data.summary;
                            this.pagination = res.data.data.details.pagination;
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
            const data = new FormData();
            data.append("type", this.invoiceType);
            data.append("duration", this.selectedDuration);
            data.append("download", 1);
            if ((this.year_from !== "" && this.year_to !== "") && (this.selectedDuration == 'year')) {
                data.append("year_from", this.moment(this.year_from).format("YYYY"));
                data.append("year_to", this.moment(this.year_to).format("YYYY"));
            }
            if ((this.month_from !== "" && this.month_to !== "") && (this.selectedDuration == 'month')) {
                data.append("month_from", this.moment(this.month_from).format("YYYY-MM"));
                data.append("month_to", this.moment(this.month_to).format("YYYY-MM"));
            }
            this.loading = true;
            this.$axios
                .post(
                    "report-invoice", data,
                    // {
                    //     params: {
                    //         duration: this.selectedDuration,
                    //         type: this.selectedInvoceType,
                    //         download: 1,
                    //     }
                    // },
                    // { responseType: "blob" }
                )
                .then((res) => {
                    if (res.status == 200) {
                        if(res.data.data.download_link != null){
                            window.open(res.data.data.download_link)
                        }
                        this.loading = false;
                        // setTimeout(() => {
                        //     this.loading = false;
                        //     const fileUrl = window.URL.createObjectURL(
                        //         new Blob([res.data])
                        //     );
                        //     const fileLink = document.createElement("a");
                        //     fileLink.href = fileUrl;
                        //     fileLink.setAttribute(
                        //         "download",
                        //         "Report_Invoice" + ".xlsx"
                        //     );
                        //     document.body.appendChild(fileLink);
                        //     fileLink.click();
                        //     document.body.removeChild(fileLink);
                        // }, 300);
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
        selectedDuration: function () {
            this.pagination.current_page ='';
            this.fetchData();
        },
        search: function (value) {
            this.pagination.current_page ='';
            if (value == "") {
                this.fetchData();
            }
        },

        year_from: function (value) {
            let year_from = moment(value).format("YYYY")
            let year_to = moment(this.year_to).format("YYYY")
            this.pagination.current_page ='';
            if(year_from !== '' && year_to !== ''){
                if(year_from > year_to){
                    this.year_from = '';
                }
            }
            this.fetchData();
        },
        year_to: function (value) {
            let year_to = moment(value).format("YYYY")
            let year_from = moment(this.year_from).format("YYYY")
            this.pagination.current_page ='';
            if(year_to !== '' && year_from !== ''){
                if(year_to < year_from){
                    this.year_to = '';
                }
            }
            this.fetchData();
        },
        month_from: function (value){
            let month_from = moment(value).format("YYYY-MM")
            let month_to = moment(this.month_to).format("YYYY-MM")
            if(month_from !== '' && month_to !== ''){
                if(month_from > month_to){
                    this.month_from = '';
                }
            }
            this.pagination.current_page ='';
            this.fetchData();
        },
        month_to: function (value){
            let month_from = moment(this.month_from).format("YYYY-MM")
            let month_to = moment(value).format("YYYY-MM")
            this.pagination.current_page ='';
            if(month_from !== '' && month_to !== ''){
                if(month_to < month_from){
                    this.month_to = '';
                }
            }
            this.pagination.current_page ='';
            this.fetchData();
        },
        tab: function (value) {
            if (value == "tab-1") {
                this.fetchData();
                this.invoiceType = 'home';
                this.$router
                    .push({ name: "Report-Invoice", query: { tab: "home" } })
                    .catch(() => { });
            } else if (value == "tab-2") {
                this.fetchData();
                this.invoiceType = 'company';
                this.$router
                    .push({
                        name: "Report-Invoice",
                        query: { tab: "company" },
                    })
                    .catch(() => { });
            }
        },
    },
    created() {
        if (this.$route.query.tab == "home") {
            this.tab = "tab-1";
            this.invoiceType = "home";
            this.fetchData();
        } else if (this.$route.query.tab == "company") {
            this.tab = "tab-2";
            this.invoiceType = "company";
            this.fetchData();
        }
        this.pagination = [];
    },
};