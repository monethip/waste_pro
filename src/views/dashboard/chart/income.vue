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
      :series="series"
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
      // series: [
      //   {
      //     data: [],
      //   },
      // ],

      series: [
        {
          name: "ລາຍໄດ້",
          data: [],
          // formatter: function (val) {
          //   return "Kip " + val + " ";
          // },
        },
        // {
        //   name: "Revenue",
        //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        // },
        // {
        //   name: "Free Cash Flow",
        //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        // },
      ],
      chartOptions: {
        labels: [],
        // noData: {
        //   text: "Loading ...",
        //   align: "center",
        //   verticalAlign: "middle",
        //   offsetX: 0,
        //   offsetY: 0,
        //   style: {
        //     color: "#00c1d2",
        //     fontSize: "14px",
        //   },
        // },
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        // dataLabels: {
        //   enabled: false,
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
          //   categories: [
          //     "Feb",
          //     "Mar",
          //     "Apr",
          //     "May",
          //     "Jun",
          //     "Jul",
          //     "Aug",
          //     "Sep",
          //     "Oct",
          //   ],
        },
        yaxis: {
          title: {
            text: "Kip ລາຍໄດ້",
          },
        },
        // title: {
        //   text: "Date",
        //   style: {
        //     colors: [],
        //     fontSize: "16px",
        //     fontWeight: 400,
        //   },
        // },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
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
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.homeInvoice = res.data.data.summary;
              this.homeInvoice.map((item) => {
                if (this.selectedCollection == "home") {
                  this.series[0].data.push(item.home.sum_total);
                  this.chartOptions.labels.push(item.month);
                } else if (this.selectedCollection == "company") {
                  this.series[0].data.push(item.company.sum_total);
                  this.chartOptions.labels.push(item.month);
                }
                window.dispatchEvent(new Event("resize"));
              });
            }, 300);
          }
        })
        .catch(() => {
          this.$store.commit("Loading_State", false);
        });
      window.dispatchEvent(new Event("resize"));
    },
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