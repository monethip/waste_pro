import Vue from 'vue';
import App from './App.vue';
import store from '@/store';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@/store/apis';
import moment from 'moment';
import * as VueGoogleMaps from 'vue2-google-maps';
import can from '@/Helpers/Can';
import role from '@/Helpers/Role';
import mixin from '@/Helpers/Mixin';
import openRoute from '@/Helpers/RouteOpen';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
// import VueOtp2 from 'vue-otp-2';
import OtpInput from '@bachdgvn/vue-otp-input';
// import VueBreadcrumbs from 'vue-breadcrumbs'
// Plugin
import VueApexCharts from 'vue-apexcharts';

import Pagination from '@/plugins/pagination/pagination';
import firebase from 'firebase/app';
import ModalDelete from './components/modals/Delete';
import ModalView from './components/modals/View';
import ModalEdit from './components/modals/Edit';
import ModalAdd from './components/modals/Add';
import router from './router';
import vuetify from './plugins/vuetify';

const firebaseConfig = {
  apiKey: 'AIzaSyA_2SWi3bfLjdLhUrOD1jfc8MXsxGoemrw',
  authDomain: 'waste-pro-co-dev.firebaseapp.com',
  projectId: 'waste-pro-co-dev',
  storageBucket: 'waste-pro-co-dev.appspot.com',
  messagingSenderId: '440912269765',
  appId: '1:440912269765:web:e3353375567a6350187bac',
};
firebase.initializeApp(firebaseConfig);

// Google Map
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBgBma-6WcEd08JKxipUvzyc4qYTgawyF4',
    // key: 'AIzaSyCgUsajH7cANXTJDpXJCT9x2n2Hj9kN0OE',

    //        key: 'AIzaSyBqImytznl-2J2gMc9tBH8R-yejuTiJ8h0',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
});
Vue.use(DatePicker);
Vue.config.productionTip = false,
Vue.component('ModalAdd', ModalAdd);
Vue.component('ModalEdit', ModalEdit);
Vue.component('ModalView', ModalView);
Vue.component('ModalDelete', ModalDelete);
Vue.component('Pagination', Pagination);
// Vue.use(VueBreadcrumbs)

// Vue.use(VueOtp2)
Vue.component('v-otp-input', OtpInput);
Vue.prototype.moment = moment;
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);
Vue.prototype.$can = can;
Vue.prototype.$role = role;
Vue.mixin(mixin);
Vue.prototype.$openRoute = openRoute;
// Vue.use(VueBreadcrumbs,{
//   template: '<nav class="breadcrumb" v-if="$breadcrumbs.length"> ' +
//       '<router-link class="breadcrumb-item" v-for="(crumb, key) in $breadcrumbs" :to="linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link> ' +
//       '</nav>'
// })

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
