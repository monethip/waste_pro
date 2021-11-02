import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/Axios';
import moment from 'moment';
import * as VueGoogleMaps from 'vue2-google-maps';

import ModalAdd from './components/modals/Add';
import ModalEdit from './components/modals/Edit';
import ModalView from './components/modals/View';
import ModalDelete from './components/modals/Delete';
import Pagination from "@/plugins/pagination/pagination";

// Google Map
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCgUsajH7cANXTJDpXJCT9x2n2Hj9kN0OE',
    // key: 'AIzaSyBhAiyxlGO0Hb4-Vpu7iEYTt7KQASNO-Sk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }
});


Vue.config.productionTip = false,
  Vue.component('ModalAdd', ModalAdd);
Vue.component('ModalEdit', ModalEdit);
Vue.component('ModalView', ModalView);
Vue.component('ModalDelete', ModalDelete);
Vue.component('Pagination', Pagination);
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
