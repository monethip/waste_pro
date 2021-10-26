import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/Axios';
import moment from 'moment';

import ModalAdd from './components/modals/Add';
import ModalEdit from './components/modals/Edit';
import ModalView from './components/modals/View';
import ModalDelete from './components/modals/Delete';

Vue.config.productionTip = false,
  Vue.component('ModalAdd', ModalAdd);
Vue.component('ModalEdit', ModalEdit);
Vue.component('ModalView', ModalView);
Vue.component('ModalDelete', ModalDelete);
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
