<template>
  <v-autocomplete
    v-model="selectedSale"
    :items="sales"
    item-text="name"
    item-value="id"
    :label="label"
    outlined
    dense
  ></v-autocomplete>
</template>

<script>
import queryOptions from "../../Helpers/queryOption";

export default {
  props: {
    label: {
      default: 'ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ',
      type: String
    },
    firstSale:{
      default: ''
    }
  },
  data() {
    return {
      salesData: [],
      selectedSale: "",
    };
  },
  methods: {
    async fetchSale() {
      this.$store.commit("Loading_State", true);
      const res = await this.$axios
        .get("user-setting/user", {
          params: queryOptions([
            { roles: ["sale", "sale_admin"] },
            { order_by: "newest" },
          ]),
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);

          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response
              ? error.response.data.message
              : "Something went wrong",
          });
        });

      if (this.$store.state.isLoading) {
        this.salesData = res.data.data;
        this.$store.commit("Loading_State", false);
      }
    },
  },
  computed: {
    sales() {
      let data = [];
      for (const item of this.salesData) {
        let name = "";
        if (item.name) name += item.name + " ";
        if (item.phone) name += item.phone + " ";
        if (item.emp_name) name += item.emp_name + " ";
        if (item.emp_surname) name += item.emp_surname + " ";
        if (item.emp_card_id) name += item.emp_card_id;
        data.push({
          name: name,
          id: item.id,
        });
      }
      return data;
    },
  },
  watch: {
    selectedSale() {
      this.$emit("input", this.selectedSale);
    },
  },
  async created() {
    await this.fetchSale();
    if(this.firstSale) this.selectedSale = typeof this.firstSale != "number" ? Number.parseInt(this.firstSale) : this.selectedSale
  },
};
</script>
