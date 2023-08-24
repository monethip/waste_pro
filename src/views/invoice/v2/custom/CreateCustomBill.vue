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
          ສ້າງບິນຢ້ອນຫຼັງ
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
                  :max="now"
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
                      v-model="data.price"
                      label="ລາຄາ *"
                      required
                      :rules="totalRules"
                      type="number"
                      class="input-number"
                      outlined
                      dense
                    />
                    <p class="errors">
                      {{ server_errors.price }}
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
                          <v-icon>
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
              <v-col cols="6">
                <v-menu
                  v-model="start_menu"
                  :close-on-content-click="true"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="start_date"
                      label="ວັນທີເລີ່ມຈ່າຍ"
                      readonly
                      outlined
                      v-bind="attrs"
                      dense
                      clearable
                      v-on="on"
                    />
                  </template>
                  <v-date-picker v-model="start_date" />
                </v-menu>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-model="due_date"
                  label="due date"
                  readonly
                  outlined
                  disabled
                  dense
                  clearable
                />
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
      start_date: new Date().toISOString().substr(0, 10),
      due_date: moment(this.start_date).add(7, 'days').format('YYYY-MM-DD'),
      billDate: new Date().toISOString().substr(0, 7),
      end_date: '',
      disabledTitle: true,
      disabledDescription: true,
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
      disabledUnit: true,
      start_menu: false,
      end_menu: false,
      invoices: [],
      loading: false,
      is_instantly: 0,
      units,
      data: {
        email: '',
      },
      user: {},
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
    'plan.name': function () {
      this.server_errors.name = '';
    },
    start_date(value) {
      this.due_date = moment(value).add(7, 'days').format('YYYY-MM-DD');
    },
    billDate(value) {
      this.data.title = `ຄ່າບໍລິການປະຈຳເດືອນ ${moment(value).format(
        'MM-YYYY',
      )}`;
      this.data.description = `ຄ່າບໍລິການປະຈຳເດືອນ ${moment(value).format(
        'MM-YYYY',
      )}`;
    },
    'calendarEdit.name': function () {
      this.server_errors.name = '';
    },
    'calendarEdit.month': function () {
      this.server_errors.month = '';
    },
  },
  computed: {
    total() {
      return this.data.price * this.data.quantity;
    },
    totalFinal() {
      return this.vat.useVat ? this.total + (typeof this.vat.valueText != 'number' ? parseInt(this.vat.valueText) : this.vat.valueText) : this.total;
    },
  },
  created() {
    this.fetchData();
    if (!this.items) this.$router.push('/v2/custom-bill');
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
    fetchData() {
      this.user = this.items;
    },
    Search() {
      GetOldValueOnInput(this);
    },

    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      const formData = {
        user_id: this.user.id,
        title: this.data.title,
        description: this.data.description,
        price: this.data.price,
        date: this.billDate,
        quantity: this.data.quantity,
        date_in_bill: this.start_date,
      };
      if (this.vat.useVat) formData.vat = this.vat.valueText;
      if (this.data.unit) formData.unit = this.data.unit;
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('custom-bill', formData)
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.$router.push({
                name: 'custom-bill',
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
              const errMsg = {};
              for (const [key, customer] of Object.entries(obj)) {
                errMsg[key] = customer[0];
              }
              this.server_errors = errMsg;
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
