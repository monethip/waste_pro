<template>
  <v-container>
    <v-col>
      <v-btn> Package </v-btn>
    </v-col>
    <v-col justify="center">
      <v-card class="pa-2" max-width="1000">
        <v-card-title>
          ຂໍ້ມູນແພັກເກັດ
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Package",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Size", value: "name" },
        { text: "ໄລຍະເວລາ(ອາທິດ)", value: "duration" },
        { text: "ຈໍານວນ/ຖົງ", value: "amount" },
        { text: "ລາຄາ/ແພັກເກັດ", value: "price" },
      ],
      desserts: [
        {
          id: "1",
          name: "S",
          duration: 1,
          amount: 4,
          price: 40000,
          protein: 4.0,
        },
        {
          id: "2",
          name: "M",
          duration: 1,
          amount: 8,
          price: 40000,
        },
        {
          id: "3",
          name: "L",
          duration: 1,
          amount: 12,
          price: 40000
        },
      ],
    };
  },
};
</script>

<style>
</style>