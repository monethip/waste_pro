<template>
  <v-container>
    <v-breadcrumbs large class="pt-0">ລາຍງານຂໍ້ມູນເຊວ</v-breadcrumbs>
    <v-col>
      <v-row>
        <v-col>
          <v-menu
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="ເລີ່ມວັນທີ"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
                dense
                clearable
              ></v-text-field>
            </template>
            <v-date-picker v-model="start_date"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-menu
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="ຫາວັນທີ"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
                dense
                clearable
              ></v-text-field>
            </template>
            <v-date-picker v-model="start_date"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-autocomplete outlined dense label="ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ" multiple></v-autocomplete>
        </v-col>

        <v-col>
          <v-btn color="green" dark>Export</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-simple-table>
            <thead>
              <tr>
                <td>ລ/ດ</td>
                <td>ຊື່</td>
                <td>ບ້ານ</td>
                <td>ສັນຍາ</td>
                <td>ລູກຄ້າ</td>
                <td>ເງິນສົດ</td>
                <td>ເງິນໂອນ</td>
                <td>bcel bill payment</td>
                <td>ລວມຍອດ</td>
                <td>ລວມທັງໝົດ</td>
              </tr>
            </thead>

            <tbody v-for="(sale, index) in sales" :key="index">
              <tr>
                <td :rowspan="sale.villages.length">{{ index + 1 }}</td>
                <td :rowspan="sale.villages.length">{{ sale.name }}</td>
                <td>{{ sale.villages[0].name }}</td>
                <td>{{ Intl.NumberFormat().format(sale.villages[0].count) }}</td>
                <td>{{ Intl.NumberFormat().format(sale.villages[0].count_customer) }}</td>
                <td
                  v-for="(detail, index) in sale.villages[0].details"
                  :key="index"
                >{{ Intl.NumberFormat().format(detail.total) }}</td>
                <td>
                  {{
                  Intl.NumberFormat().format(sale.villages[0].total) }}
                </td>
                <td :rowspan="sale.villages.length">{{ Intl.NumberFormat().format(sale.total) }}</td>
              </tr>
              <tr v-for="(otherVillage, otherIndex) in sale.villages.slice(1)" :key="otherIndex">
                <td>{{ otherVillage.name }}</td>
                <td>{{ Intl.NumberFormat().format(otherVillage.count) }}</td>
                <td>{{ Intl.NumberFormat().format(otherVillage.count_customer) }}</td>
                <td
                  v-for="(otherVillageDetail, otherVillageIndex) in otherVillage.details"
                  :key="otherVillageIndex"
                >
                  {{
                  Intl.NumberFormat().format(otherVillageDetail.total)
                  }}
                </td>
                <td>{{ Intl.NumberFormat().format(otherVillage.total) }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  data() {
    return {
      sales: [
        {
          name: "Jonh Doe",
          total: 100000000,
          villages: [
            {
              name: "ດອນແດງ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            },
            {
              name: "ດອນກອຍ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            }
          ]
        },
        {
          name: "Jame",
          total: 100000000,
          villages: [
            {
              name: "ດອນແດງ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            },
            {
              name: "ດອນກອຍ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            },
            {
              name: "ດົງໂດກ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            }
          ]
        },
        {
          name: "Jonh Doe",
          total: 100000000,
          villages: [
            {
              name: "ດອນແດງ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            },
            {
              name: "ດອນກອຍ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            }
          ]
        },
        {
          name: "Jame",
          total: 100000000,
          villages: [
            {
              name: "ດອນແດງ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            },
            {
              name: "ດອນກອຍ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            },
            {
              name: "ດົງໂດກ",
              count: 43,
              count_customer: 9,
              total: 10000000,
              details: [
                {
                  type: "ເງິນສົດ",
                  total: 20000000
                },
                {
                  type: "ເງິນໂອນ",
                  total: 50000000
                },
                {
                  type: "bill payment",
                  total: 30000000
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id },
      // });
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id: this.data.plan_month_id },
      // });
    }
    // fetchDataPlanMonth() {
    //   this.$axios
    //     .get(
    //       "plan-month/" +
    //         this.$route.params.driverId +
    //         "/plan-calendar/" +
    //         this.$route.params.id
    //     )
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.data = res.data.data;
    //           console.log(this.data);
    //         }, 100);
    //       }
    //     })
    //     .catch(() => {});
    // },
  },
  // created() {
  //   if (this.$route.query.tab == "home") {
  //     this.tab = "tab-1";
  //     this.fetchData();
  //   } else if (this.$route.query.tab == "company") {
  //     this.tab = "tab-2";
  //     this.fetchData();
  //   }
  // },
  watch: {
    // tab: function (value) {
    //   if (value == "tab-1") {
    //     // this.fetchData();
    //     this.$router
    //       .push({ name: "Report-Invoice", query: { tab: "home" } })
    //       .catch(() => {});
    //   } else if (value == "tab-2") {
    //     this.$router
    //       .push({
    //         name: "Report-Invoice",
    //         query: { tab: "company" },
    //       })
    //       .catch(() => {});
    //   }
    // },
  }
};
</script>

<style>
.mx-input {
  height: 40px !important;
}
</style>
