import Vue from 'vue';
import axios from 'axios';
import store from '../store';
// import router from '@/router/index';

// Check Auth && Set Token To Header
if (store.getters['User/isAuth']) {
  axios.defaults.headers.common.Authorization = `Bearer ${store.getters['User/getToken']}`;
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

// $axios.interceptors.response.use(function (response) {
//     return response;
// },
//     function (error) {
//     // console.log(error.response.status)
//     if (error.response.status == 401) {
//         store.dispatch("destroyToken");
//         router.push({ name: 'Login' });
//         localStorage.removeItem('access_token');
//         // localStorage.removeItem('user')
//     }
//
//     if (error.response.status == 403) {
//         store.dispatch("destroyToken");
//         router.push({ name: 'Login' });
//         localStorage.removeItem('access_token');
//         // localStorage.removeItem('user')
//     }
//     return Promise.reject(error);
// });

Vue.prototype.$axios = $axios;
Vue.prototype.$http = normalAxios;
