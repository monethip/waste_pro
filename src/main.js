import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/store/apis';
import moment from 'moment';
import * as VueGoogleMaps from 'vue2-google-maps';
import can from '@/Helpers/Can'
import mixin from '@/Helpers/Mixin'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
// import VueOtp2 from 'vue-otp-2';
import OtpInput from "@bachdgvn/vue-otp-input";
//Plugin
import VueApexCharts from 'vue-apexcharts';

import ModalAdd from './components/modals/Add';
import ModalEdit from './components/modals/Edit';
import ModalView from './components/modals/View';
import ModalDelete from './components/modals/Delete';
import Pagination from "@/plugins/pagination/pagination";
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyA_2SWi3bfLjdLhUrOD1jfc8MXsxGoemrw",
  authDomain: "waste-pro-co-dev.firebaseapp.com",
  projectId: "waste-pro-co-dev",
  storageBucket: "waste-pro-co-dev.appspot.com",
  messagingSenderId: "440912269765",
  appId: "1:440912269765:web:e3353375567a6350187bac"
}
firebase.initializeApp(firebaseConfig)

// Google Map
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCgUsajH7cANXTJDpXJCT9x2n2Hj9kN0OE',
    // key: 'AIzaSyDLoUKYiwbjoybRZxuLf_uY022RQ6QakSk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }
});
Vue.use(DatePicker);
Vue.config.productionTip = false,
  Vue.component('ModalAdd', ModalAdd);
Vue.component('ModalEdit', ModalEdit);
Vue.component('ModalView', ModalView);
Vue.component('ModalDelete', ModalDelete);
Vue.component('Pagination', Pagination);
// Vue.use(VueOtp2)
Vue.component("v-otp-input", OtpInput);
Vue.prototype.moment = moment;
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts);
Vue.prototype.$can = can;
Vue.mixin(mixin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
