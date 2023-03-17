<template>
  <div>
    <v-container>
      <v-breadcrumbs
        large
        class="pt-0"
      >
        ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ຍອພິເສດ
      </v-breadcrumbs>
      <v-row class="mb-n6">
        <v-col>
          <v-btn
            class="btn-primary"
            :loading="loading"
            :disabled="loading"
            @click="exportData()"
          >
            Export
          </v-btn>
        </v-col>
        <v-col>
          <v-select
            v-model="selectedDuration"
            outlined
            dense
            :items="duration"
            item-text="name"
            item-value="duration"
            label="ຊ່ວງເວລາ"
          />
        </v-col>
        <v-col v-if="selectedDuration == 'year'">
          <section>
            <date-picker
              v-model="year_from"
              style="height: 40px"
              type="year"
              format="YYYY"
              placeholder="ເລີ່ມປີ"
            />
          </section>
        </v-col>
        <v-col v-if="selectedDuration == 'year'">
          <section>
            <date-picker
              v-model="year_to"
              type="year"
              format="YYYY"
              placeholder="ຫາປີ"
            />
          </section>
        </v-col>
        <v-col v-if="selectedDuration == 'month'">
          <section>
            <date-picker
              v-model="month_from"
              type="month"
              placeholder="ເລີ່ມເດືອນ"
              @input="fetchData()"
            />
          </section>
        </v-col>
        <v-col v-if="selectedDuration == 'month'">
          <section>
            <date-picker
              v-model="month_to"
              type="month"
              placeholder="ຫາເດືອນ"
              @input="fetchData()"
            />
          </section>
        </v-col>

        <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
          <section>
            <date-picker
              v-model="date_from"
              style="height: 40px"
              type="date"
              placeholder="ເລີ່ມວັນທີ"
              @input="fetchData()"
            />
          </section>
        </v-col>
        <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
          <section>
            <date-picker
              v-model="date_to"
              style="height: 40px"
              type="date"
              placeholder="ຫາວັນທີ"
              @input="fetchData()"
            />
          </section>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols>
          <v-select
            v-model="selectedCollectionStatus"
            outlined
            dense
            :items="collectionStatus"
            item-text="dis_play"
            item-value="name"
            label="ສະຖານະບໍລິການ"
            multiple
            clearable
          />
        </v-col>
        <v-col col>
          <v-select
            v-model="selectedPaymentStatus"
            outlined
            dense
            :items="paymentStatus"
            item-text="dis_play"
            item-value="name"
            label="ສະຖານະການຊຳລະ"
            multiple
            clearable
          />
        </v-col>
      </v-row>

      <div v-if="selectedDuration =='merge'">
        <div v-if="summaryMerge">
          <v-row>
            <v-col class="sum-total">
              ຄຳຂໍຖືກອານຸມັດ: {{ summaryMerge.approved_count }}
            </v-col>
            <v-col class="sum-total">
              ລົງເກັບແລະລູກຄ້າຢືຢັນແລ້ວ: {{ summaryMerge.collect_confirm_count }}
            </v-col>
            <v-col class="sum-total">
              ລູກຄ້າປະຕິເສດການລົງເກັບ: {{ summaryMerge.collect_reject_count }}
            </v-col>
            <v-col class="sum-total">
              ລົງເກັບແລ້ວ(ລໍຖ້າຢືນຢັນ): {{ summaryMerge.collected_count }}
            </v-col>
            <v-col class="sum-total">
              ຕ້ອງລົງເກັບທັງໝົດ: {{ summaryMerge.number_of_times_to_collect }}
            </v-col>
            <v-col class="sum-total">
              ຄຳຂໍທີ່ປະຕິເສດແລ້ວ: {{ summaryMerge.rejected_count }}
            </v-col>
            <v-col class="sum-total">
              ຄຳຂໍລໍຖ້າຢືນຢັນ: {{ summaryMerge.requested_count }}
            </v-col>
          </v-row>
        </div>
      </div>
      <div v-else>
        <div v-if="summary">
          <v-row
            v-for="(sum, index) in summary"
            :key="index"
            class="mb-n6 mt-0"
          >
            <v-col>
              <p v-if="selectedDuration =='year'">
                ປີ: {{ sum.year }}
              </p>
              <p v-if="selectedDuration =='month'">
                ເດືອນ: {{ sum.month }}
              </p>
              <p v-if="selectedDuration =='date'">
                ວັນທີ: {{ moment(sum.date_collect).format("DD-MM-YY") }}
              </p>
            </v-col>
            <v-col>
              <p>
                ຄຳຂໍຖືກອານຸມັດ
                <span class="success--text">{{ sum.approved_count }}</span>
              </p>
            </v-col>
            <v-col>
              <p>
                ລົງເກັບແລະລູກຄ້າຢືຢັນແລ້ວ
                <span class="success--text">{{ sum.collect_confirm_count }}</span>
              </p>
            </v-col>
            <v-col>
              <p>
                ລູກຄ້າປະຕິເສດການລົງເກັບ
                <span class="success--text">{{ sum.collect_reject_count }}</span>
              </p>
            </v-col>
            <v-col>
              <p>
                ຕ້ອງລົງເກັບທັງໝົດ
                <span class="success--text">{{
                  sum.number_of_times_to_collect
                }}</span>
              </p>
            </v-col>
            <v-col>
              <p>
                ຄຳຂໍທີ່ປະຕິເສດແລ້ວ
                <span class="success--text">{{
                  sum.rejected_count
                }}</span>
              </p>
            </v-col>
            <v-col>
              <p>
                ລົງເກັບແລ້ວ(ລໍຖ້າຢືນຢັນ)
                <span class="success--text">{{
                  sum.collected_count
                }}</span>
              </p>
            </v-col>
            <v-col>
              <p>
                ຄຳຂໍລໍຖ້າຢືນຢັນ
                <span class="success--text">{{
                  sum.requested_count
                }}</span>
              </p>
            </v-col>
          </v-row>
        </div>
      </div>
      <v-card>
        <v-card-text>
          <v-data-table
            v-if="homeCollection"
            :headers="headers"
            :items="homeCollection"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <!--        <template v-slot:item.status="{ item }">-->
            <!--          <div>-->
            <!--            <span class="success&#45;&#45;text">{{ item.status }}</span>-->
            <!--          </div>-->
            <!--        </template>-->
            <!--             <template>-->
            <!--               <v-chip label color="primary">{{paymentStatusText(item.payment_status)}}</v-chip>-->
            <!--             </template>-->
            <template v-slot:item.status="{ item }">
              <!--               <div>{{item.collect_status}}</div>-->
              <v-chip
                label
                color="primary"
              >
                {{ collectStatus(item.collect_status) }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>

      <br>
      <template>
        <Pagination
          v-if="pagination.total_pages > 1"
          :pagination="pagination"
          :offset="offset"
          @paginate="fetchData()"
        />
      </template>
    </v-container>
  </div>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import colleciton from '@views/report/TabCollectionTab/collectionEvent';

export default {
  name: 'HomeInvoice',
  mixins: [colleciton],
  // props: ["tab"],
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice`;
  },
  data() {
    return {
      customers: [],
      loading: false,
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      headers: [
        { text: 'ວັນທີ', value: 'date', sortable: false },
        { text: 'ລູກຄ້າ', value: 'full_name' },
        // { text: "ຈຳນວນຖົງ", value: "bag", sortable: false, align: "center" },
        { text: 'ສະຖານທີ່', value: 'name', sortable: false },
        { text: 'ສະຖານະເກັບ', value: 'status', sortable: false },
        // { text: "ສະຖານະຊຳລະ", value: "payment_status", sortable: false },
        // { text: "", value: "actions", sortable: false },
      ],
    };
  },
  watch: {
    tab() {
      if (this.tab == 'tab-1') {
        // this.fetchData();
      }
    },
  },
  created() {
    this.pagination = [];
  },
  methods: {
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == 'success') return 'success';
      if (value == 'pending') return 'primary';
      return 'info';
    },
    collectStatus(status) {
      if (status == 'requested') return 'ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ';
      if (status == 'rejected') return 'ປະຕິເສດເກັບຂີ້ເຫື້ຍອ';
      if (status == 'approved') return 'ອະນຸມັດເກັບຂີ້ເຫື້ຍອ';
      if (status == 'collected') return 'ເກັບຂີເຫື້ຍອສຳເລັດ';
      if (status == 'collect_confirm') return 'ລູກຄ້າຢືນຢັນການເກັບ';
      if (status == 'collect_reject') return 'ການເກັບຖືກປະຕິເສດ';
      return '';
    },
    paymentStatusText(status) {
      if (status == 'pending') return 'ລໍຖ້າເກັບເງິນ';
      if (status == 'to_confirm_payment') return 'ລໍຖ້າຢືນຢັນຊຳລະ';
      if (status == 'rejected') return 'ປະຕິເສດການຊຳລະ';
      if (status == 'success') return 'ຊຳລະສຳເລັດ';
      return '';
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";

.mx-input {
  height: 40px !important;
}

.sum-total {
  color: #000000;
}
</style>
