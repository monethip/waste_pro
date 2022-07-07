<template>
  <div>
    <v-row>
      <v-col>
        <v-menu
            ref="menu"
            v-model="month_from_menu"
            :close-on-content-click="true"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="month_from"
                label="ເລືອກເດືອນ"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="month_from"
              type="month"
              no-title
              scrollable
              min="2020-NaN-NaN"
          >
            <!--
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(month_from)">
              OK
            </v-btn>
            -->
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-menu
            ref="menu"
            v-model="month_to_menu"
            :close-on-content-click="true"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="month_to"
                label="ຫາເດືອນ"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="month_to"
              type="month"
              no-title
              scrollable
              min="2020-NaN-NaN"
          >
          </v-date-picker>
        </v-menu>
      </v-col>

      <v-col>
        <v-select
            outlined
            dense
            :items="collectionType"
            v-model="selectedCollection"
            item-text="name"
            item-value="value"
            label="ປະເພດ"
        ></v-select>
      </v-col>
    </v-row>
    <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="translatedSeries"
    ></apexchart>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // month_from: new Date().toISOString().substr(0, 7),
      month_from: "",
      month_to: "",
      month_from_menu: false,
      month_to_menu: false,
      max: "",
      min: "",
      modal: false,
      homeInvoice: [],
      compnayInvoice: [],
      selectedCollection: "home",
      collectionType: [
        {
          name: "ຄົວເຮືອນ",
          value: "home",
        },
        {
          name: "ບໍລິສັດ",
          value: "company",
        },
      ],
      series: [],
      chartOptions: {
        labels: [],
        noData: {
          text: "Loading ...",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
        },
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            // horizontal: true,
            columnWidth: "50%",
            endingShape: "rounded",
          },
        },
        // dataLabels: {
        //   enabled: true,
        // },
        // stroke: {
        //   show: true,
        //   width: 2,
        //   colors: ["transparent"],
        // },
        xaxis: {
          title: {
            text: "Date",
            style: {
              colors: [],
              fontSize: "16px",
              fontWeight: 400,
            },
          },
        },
        yaxis: {
          title: {
            text: "ລາຍໄດ້",
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily:
                  "NotoSanLao, Google Sans, arial, serif, sans-serif !important",
              color: "#263238",
            },
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (text,val) {
              return Intl.NumberFormat().format(val) + " Kip";
            },
          },
          x: {
            formatter: function (val) {
              return "ເດືອນ " + val;
            },
          },
        },
      },
      translated: [
        {
          key:"sum_total",
          value:"ລວມ"
        },
        {
          key:"total_approved",
          value:"ອະນຸມັດ"
        },
        {
          key:"total_created",
          value:"ສ້າງບິນ"
        },
        {
          key:"total_rejected",
          value:"ຍົກເລີກ"
        },
        {
          key:"total_success",
          value:"ສຳເລັດ"
        },
        {
          key:"total_to_confirm_payment",
          value:"ສຳເລັດທັງໝົດ"
        },
      ],
    };
  },
  methods: {
    async fetchData() {
      this.$store.commit("Loading_State", true);
      // this.chartOptions.labels = [];
      // this.series[0].data = [];
      const data = new FormData();
      data.append("type", this.selectedCollection);
      data.append("duration", "month");
      if (this.month_from !== "" && this.month_to !== "") {
        data.append(
            "month_from",
            this.moment(this.month_from).format("YYYY-MM")
        );
        data.append("month_to", this.moment(this.month_to).format("YYYY-MM"));
      }
      await this.$axios
          .post("report-invoice", data)
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit("Loading_State", false);
              this.homeInvoice = res.data.data.summary;
              this.series = [],
                  this.chartOptions = [],
              this.homeInvoice.map((item) => {
                if (this.selectedCollection == "home") {
                  // this.series[0].data.push(item.home.sum_total);
                  this.chartOptions.labels.push(item.month);
                  for (const [sumKey, sumItem] of Object.entries(item.home)) {
                    const serieIndex = this.series.findIndex(item => item.name == sumKey)
                    if (serieIndex != -1) {
                      this.series[serieIndex].data.push(sumItem)
                    } else {
                      this.series.push({
                        name: sumKey,
                        data: [sumItem]
                      })
                    }
                  }
                } else if (this.selectedCollection == "company") {
                  // this.series[0].data.push(item.company.sum_total);
                  this.chartOptions.labels.push(item.month);
                  for (const [sumKey, sumItem] of Object.entries(item.company)) {
                    if (this.inArray(sumKey, ['sum_total', 'total_approved', 'total_created', 'total_rejected', 'total_success', 'total_to_confirm_payment'])) {
                      const serieIndex = this.series.findIndex(item => item.name == sumKey)
                      if (serieIndex != -1) {
                        this.series[serieIndex].data.push(sumItem)
                      } else {
                        this.series.push({
                          name: sumKey,
                          data: [sumItem]
                        })
                      }
                    }
                  }
                }
                window.dispatchEvent(new Event("resize"));
              });
            }
          })
          .catch(() => {
            this.$store.commit("Loading_State", false);
          });
      window.dispatchEvent(new Event("resize"));
    },
    inArray(needle, haystack) {
      let length = haystack.length;
      for (let i = 0; i < length; i++) {
        if (haystack[i] == needle) return true;
      }
      return false;
    },
  },
  computed:{
    translatedSeries(){
      const data = [];
      this.series.map((item) => {
        const [translatedItem] = this.translated.filter((f) => f.key === item.name)
        if(translatedItem) {
          data.push({
            name: translatedItem.value,
            data: item.data
          })
        }
      })
      return data;
    }
  },
  watch: {
    selectedCollection: function () {
      this.fetchData();
    },
    month_to: function () {
      this.chartOptions.labels = [];
      this.series[0].data = [];
      this.fetchData();
    },
    month_from: function () {
      this.chartOptions.labels = [];
      this.series[0].data = [];
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>