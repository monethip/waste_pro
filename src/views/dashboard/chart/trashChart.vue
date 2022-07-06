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
              @input="fetchData()"
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
    <apexchart :options="options" :series="series"></apexchart>
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
      modal: false,
      homeCollection: [],
      compnayCollection: [],
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
      // xaxis: {
      //   categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      // },
      series: [],
      options: {
        labels: [],
        noData: {
          text: "Loading ...",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: "#00c1d2",
            fontSize: "14px",
          },
        },
        chart: {
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        title: {
          text: "ຈຳນວນການເກັບຂີ້ເຫື້ຍອລາຍເດືອນ",
          align: "center",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily:
                "NotoSanLao, Google Sans, arial, serif, sans-serif !important",
            color: "#263238",
          },
        },

        xaxis: {
          // categories: [
          //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          //   20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          // ],
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
            text: "ຈຳນວນຂີ້ເຫື້ຍອ",
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
            formatter: function (val) {
              return "" + Intl.NumberFormat().format(val);
            },
          },
          x: {
            formatter: function (val) {
              return "ເດືອນ " + val;
            },
          },
        },
      },
      // series: [
      //   {
      //     name: "series-1",
      //     data: [
      //       30, 40, 45, 50, 49, 60, 70, 91, 95, 100, 30, 40, 45, 50, 49, 60, 70,
      //       91, 95, 100, 30, 40, 45, 0, 0, 0, 0, 0, 0, 0,
      //     ],
      //   },
      // ],
    };
  },
  methods: {
    async fetchData() {
      const dataSet = {
        data: [],
        labels: [],
      };
      dataSet.labels = [];
      dataSet.data = [];
      this.$store.commit("Loading_State", true);
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
          .post("report-collection", data)
          .then((res) => {
            if (res.data.code == 200) {
                this.$store.commit("Loading_State", false);
                this.homeCollection = res.data.data.summary;

                if (this.homeCollection.length == 0) {
                  dataSet.labels = [];
                  dataSet.data = [];
                }
                // this.compnayCollection = res.data.data

                this.homeCollection.map((item) => {
                  if (this.selectedCollection == "home") {
                    this.options.labels.push(item.month);
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
                    window.dispatchEvent(new Event("resize"));
                  } else if (this.selectedCollection == "company") {
                    // dataSet.data.push(item.company.container_amount);
                    dataSet.labels.push(item.month);
                    for (const [sumKey, sumItem] of Object.entries(item.company)) {
                      if (this.inArray(sumKey, ['success_count', 'wait_to_confirm_count', 'reject_count', 'pending_count'])) {
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
                    window.dispatchEvent(new Event("resize"));
                  }
                });
            }
          })
          .catch(() => {
            this.$store.commit("Loading_State", false);
          });
      // this.series[0].data = dataSet.data;
      // this.options.labels.include(dataSet.labels);
      // console.log(this.options.labels);
      window.dispatchEvent(new Event("resize"));
    },
    inArray(needle, haystack) {
      console.log(haystack)
      let length = haystack.length;
      for (let i = 0; i < length; i++) {
        if (haystack[i] == needle) return true;
      }
      return false;
    },
  },
  watch: {
    selectedCollection: function () {
      this.series.name = [];
      this.series.data = [];
      this.fetchData();
    },
    month_to: function () {
      this.options.labels = [];
      this.series = [];
      this.fetchData();
    },
    month_from: function () {
      this.options.labels = [];
      this.series = [];
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>