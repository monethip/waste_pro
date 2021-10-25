<template>
  <v-container>
    <v-card class="mx-auto my-12" elevation="8" max-width="1000">
      <v-data-table
        :headers="headers"
        :items="village"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Village",
  data() {
    return {
      village: [],
      headers: [
        {
          text: "ID",
          align: "start",
          value: "id",
          sortable: false,
        },
        {
          text: "ບ້ານ",
          align: "start",
          value: "name",
          sortable: false,
        },
        {
          text: "ເມືອງ",
          align: "start",
          value: "distName",
        },
        { text: "ແຂວງ", value: "proName" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
};
</script>

<style>
</style>