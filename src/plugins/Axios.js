import Vue from 'vue';
import axios from 'axios';
import store from '../store';
import router from '@/router/index';

// Check Auth && Set Token To Header
if (store.getters['User/isAuth']) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters['User/getToken'];
    axios.defaults.headers.common['Content-Language'] = 'la';
}
export const $axios = axios.create(
    {
        baseURL: process.env.VUE_APP_BASE_API_URL,
    }
);
export const normalAxios = axios.create(
    {
        baseURL: process.env.VUE_APP_BASE_URL,
    }
);

$axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status == 401) {
        store.dispatch("User/destroyToken");
        router.push({ name: 'Login' })
    }

    if (error.response.status == 403) {
        this.router.push({ name: 'Login' })
    }
    return Promise.reject(error);
});

Vue.prototype.$axios = $axios;
Vue.prototype.$http = normalAxios;
