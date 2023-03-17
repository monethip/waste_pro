import Vue from 'vue';
import axios from 'axios';
import store from '@/store';
// import router from "@/router";
// import router from '@/router/index';

// Check Auth && Set Token To Header
if (store.getters['auth/isAuth']) {
  axios.defaults.headers.common.Authorization = `Bearer ${store.getters['auth/token']}`;
  axios.defaults.headers.common['Content-Language'] = 'la';
}
export const $axios = axios.create(
  {
    baseURL: process.env.VUE_APP_BASE_API_URL,
  },
);
export const normalAxios = axios.create(
  {
    baseURL: process.env.VUE_APP_BASE_URL,
  },
);

// const apiUrl = process.env['VUE_APP_BASE_API_URL'];
// export {
//     apiUrl
// }

$axios.interceptors.response.use((response) => response,
  (error) => {
  // Token expired
    if (error.response.status == 401) {
    // alert("Token is expired")
      store.commit('modalCheckToken_State', true);
    // store.dispatch("auth/destroyToken");
    // localStorage.removeItem('access_token');
    }
    // Permission or role change
    if (error.response.status == 403) {
      store.commit('modalCheckToken_State', true);
    // store.dispatch("auth/destroyToken");
    // localStorage.removeItem('access_token');
    }

    return Promise.reject(error);
  });

Vue.prototype.$axios = $axios;
Vue.prototype.$http = normalAxios;
