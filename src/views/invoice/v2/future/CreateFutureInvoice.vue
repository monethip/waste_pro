<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-breadcrumbs
          large
          class="pa-0"
        >
          <v-btn
            text
            class="text-primary"
            @click="backPrevios()"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          ສ້າງບິນລ່ວງໜ້າ
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text class="pa-8">
          <v-form
            ref="form"
            lazy-validation
          >
            <v-row>
              <v-col cols="4">
                <p>ວັນທີບິນ</p>
                <v-date-picker
                  v-model="billDate"
                  type="month"
                  :min="now"
                />
              </v-col>
              <v-col cols="8">
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="data.title"
                      label="ຊື່ລາຍການ *"
                      required
                      :rules="totalRules"
                      outlined
                      dense
                      :disabled="disabledTitle"
                    />
                    <p class="errors">
                      {{ server_errors.title }}
                    </p>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      color="primary"
                      @click="disabledTitle = !disabledTitle"
                    >
                      <v-icon>mdi-pen</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="data.description"
                      label="ຄຳອະທິບາຍ *"
                      required
                      :rules="totalRules"
                      outlined
                      dense
                      :disabled="disabledDescription"
                    />
                    <p class="errors">
                      {{ server_errors.description }}
                    </p>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      color="primary"
                      @click="disabledDescription = !disabledDescription"
                    >
                      <v-icon>mdi-pen</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="data.total"
                      label="ລາຄາ *"
                      required
                      :rules="totalRules"
                      type="number"
                      class="input-number"
                      outlined
                      dense
                    />
                    <p class="errors">
                      {{ server_errors.total }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="data.quantity"
                      :label="data.unit ? `ຈຳນວນ/${data.unit}` : 'ຈຳນວນ *'"
                      required
                      :rules="totalRules"
                      type="number"
                      class="input-number"
                      outlined
                      dense
                    />
                    <p class="errors">
                      {{ server_errors.quantity }}
                    </p>
                  </v-col>
                  <v-col>
                    <v-row>
                      <v-col cols="5">
                        <v-autocomplete
                          v-model="data.unit"
                          label="ຫົວໜ່ວຍ"
                          :items="units"
                          outlined
                          dense
                          :disabled="disabledUnit"
                        />
                      </v-col>
                      <v-col>
                        <v-btn
                          color="blue-grey"
                          dark
                          @click="disabledUnit = !disabledUnit"
                        >
                          <v-icon left>
                            mdi-pen
                          </v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-btn
                      v-if="!vat.useVat"
                      class="indigo"
                      dark
                      @click="vat.useVat = true"
                    >
                      <v-icon>mdi-percent</v-icon>
                      ເພີ່ມ vat
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row />
                <v-row
                  v-if="vat.useVat"
                >
                  <v-col cols="10">
                    <v-alert
                      text
                      outlined
                      color="indigo darken-1"
                      icon="mdi-percent"
                    >
                      <v-row>
                        <v-col cols="8">
                          <v-text-field
                            v-model="vat.value"
                            :label="vat.selectedVatUnit == 'percent' ? `%` : ''"
                            required
                            type="number"
                            class="input-number"
                            outlined
                            dense
                          />
                          <p class="errors">
                            {{ server_errors.vat }}
                          </p>
                        </v-col>
                        <v-col cols="4">
                          <v-autocomplete
                            v-model="vat.selectedVatUnit"
                            label="ຫົວໜ່ວຍ"
                            :items="vatUnits"
                            outlined
                            dense
                          />
                        </v-col>
                      </v-row>

                      <v-col cols="12">
                        <v-text-field
                          v-model="vat.valueText"
                          label="ມູນຄ່າ vat"
                          required
                          type="number"
                          class="input-number"
                          outlined
                          dense
                          disabled
                        />
                        <p class="errors">
                          {{ server_errors.vat }}
                        </p>
                      </v-col>
                    </v-alert>
                  </v-col>

                  <v-col>
                    <v-btn
                      color="red lighten-3"
                      dark
                      @click="vat.useVat = false"
                    >
                      <v-icon>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-form>
          <v-card-actions>
            <v-alert
              v-if="totalFinal"
              outlined
              type="success"
              text
            >
              {{ Intl.NumberFormat().format(totalFinal) }} lak
            </v-alert>
            <v-spacer />
            <v-btn
              class="elevation-0 btn-warning mr-4"
              @click="backPrevios()"
            >
              ຍ້ອນກັບ
            </v-btn>
            <v-btn
              class="elevation-0 btn-primary"
              :loading="loading"
              :disabled="loading"
              @click="AddData()"
            >
              ສ້າງບິນ
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import { units } from '@/Helpers/BillingStatus';
import moment from 'moment';

export default {
  name: 'Invoice',
  props: ['items'],
  title() {
    return `Vientiane Waste Co-Dev|Invoice`;
  },
  data() {
    return {
      tab: null,
      now: new Date().toISOString().substr(0, 7),
      billDate: new Date().toISOString().substr(0, 7),
      units,
      disabledUnit: true,
      start_menu: false,
      end_menu: false,
      invoices: [],
      loading: false,
      disabledTitle: true,
      disabledDescription: true,
      is_instantly: 0,
      payment_method: '',
      paymentType: '',
      data: {
        email: '',
      },
      customer: {},
      vat: {
        valueText: 0,
        value: 7,
        useVat: false,
        selectedVatUnit: "percent",
      },
      vatUnits: [
        {
          text: "ຈຳນວນ",
          value: "flat",
        },
        {
          text: "%",
          value: "percent",
        }],
      calendarId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      // Add Package
      packages: [],
      selectedPackage: '',
      server_errors: {},

      preview_list: [],
      image_list: [],
      image: [],
      // Filter
      totalRules: [(v) => !!v || 'Total is required'],
      paymentTypeRule: [(v) => !!v || 'Payment is required'],
    };
  },
  watch: {
    'vat.selectedVatUnit': function () {
      this.watchAndChangeVat();
    },
    'vat.value': function () {
      this.watchAndChangeVat();
    },
    total() {
      this.watchAndChangeVat();
    },
    is_instantly(value) {
      console.log(value);
    },
    search(value) {
      if (value == '') {
        this.fetchData();
      }
    },
    billDate(value) {
      this.data.title = `ຄ່າບໍລິການປະຈຳເດືອນ ${moment(value).format(
        'MM-YYYY',
      )}`;
      this.data.description = `ຄ່າບໍລິການປະຈຳເດືອນ ${moment(value).format(
        'MM-YYYY',
      )}`;
      this.server_errors.month = '';
    },
    paymentType() {
      if (this.paymentType == 0) {
        this.payment_method = 'cash';
        this.image = '';
        this.imageUrl = '';
        // this.bcel_reference_number = "";
      } else if (this.paymentType == 1) {
        this.payment_method = 'bcel';
      }
      this.server_errors.payment_method = '';
    },
  },
  computed: {
    total() {
      return this.data.total * this.data.quantity;
    },
    totalFinal() {
      return this.vat.useVat ? this.total + (typeof this.vat.valueText != 'number' ? parseInt(this.vat.valueText) : this.vat.valueText) : this.total;
    },
  },
  created() {
    this.fetchData();
    if (!this.customer) this.$router.push('/future-invoice');
  },
  methods: {
    watchAndChangeVat() {
      if (this.vat.selectedVatUnit == 'percent') {
        this.vat.valueText = Math.round(this.total * (this.vat.value / 100));
      }
      if (this.vat.selectedVatUnit == 'flat') {
        this.vat.valueText = this.vat.value;
      }
    },

    RemoveItem(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },

    previewMultiImage(event) {
      const input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while (count--) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          };
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    fetchData() {
      console.log(this.items);
      this.customer = this.items;
    },
    Search() {
      GetOldValueOnInput(this);
    },

    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      const formData = new FormData();
      formData.append('customer_id', this.customer.customer.id);
      formData.append('title', this.data.title);
      formData.append('description', this.data.description);
      formData.append('start_month', this.billDate);
      formData.append('date', this.billDate);
      formData.append('total', this.data.total);
      formData.append('quantity', this.data.quantity);

      if (this.vat.useVat) formData.vat = this.vat.valueText;
      if (this.data.unit) formData.append('unit', this.data.unit);
      if (this.is_instantly == true) {
        formData.append('is_instantly', 1);
        formData.append('payment_method', this.payment_method);
        this.image_list.map((item) => {
          formData.append('image_payments[]', item);
        });
      }

      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('future-invoice', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.$router.push({
                name: 'future-invoice',
              });
            }
          })
          .catch((error) => {
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
            this.$store.commit('Loading_State', false);
          });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main";
</style>
