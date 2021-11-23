 <template>
  <v-container>
    <v-data-table :headers="header" :items="packages"> </v-data-table>
  </v-container>
</template>
 
 <script>
export default {
  data() {
    return {
      packages: [],

      header: [
        { text: "id", value: "id" },
        { text: "name", value: "name" },
        { text: "price", value: "price" },
      ],
    };
  },

  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("package")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.packages = res.data.data;
              this.pagination = res.data.data.pagination;
              console.log("data", this.packages);
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.respones.status == 422) {
            var obj = error.respones.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
  },

  created() {
    this.fetchData();
  },
};
</script>
 
 <style>
</style> 