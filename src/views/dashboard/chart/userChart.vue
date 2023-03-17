<template>
  <div>
    <v-row>
      <v-col
        cols="11"
        sm="5"
      >
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="ເລືອກເດືອນ"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="date"
            type="month"
            no-title
            scrollable
          >
            <v-spacer />
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <apexchart
      :options="options"
      :series="series"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      options: {
        chart: {
          type: 'bar',
        },
        title: {
          text: 'ຈຳນວນລູກຄ້າລົງທະບຽນ',
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily:
              'NotoSanLao, Google Sans, arial, serif, sans-serif !important',
            color: '#263238',
          },
        },

        xaxis: {
          categories: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          ],
          title: {
            text: 'Date',
            style: {
              fontSize: '16px',
              fontWeight: 400,
            },
          },
        },
        yaxis: {
          title: {
            text: 'Amount',
            style: {
              fontSize: '16px',
              fontWeight: 400,
            },
          },
        },
      },
      series: [
        {
          name: 'series-1',
          data: [
            30, 40, 45, 50, 49, 60, 70, 91, 95, 100, 30, 40, 45, 50, 49, 60, 70,
            91, 95, 100, 30, 40, 45, 50, 49, 60, 70, 91, 95, 100,
          ],
        },
      ],
    };
  },
};
</script>
