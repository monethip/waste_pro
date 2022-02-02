import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    phone: "",
    modalAddState: false,
    modalEditState: false,
    modalDeleteState: false,
    modalView: false,
    notificationToastState: false,
    progressLoading: false,
    message: '',
    color: '',
    isLoading: false,
  },
  mutations: {
    SET_LOGGED_IN(state) {
      state.isLogged = true
    },
    modalAdd_State(state, value) {
      state.modalAddState = value;
    },
    modalEdit_State(state, value) {
      state.modalEditState = value;
    },
    modalView_State(state, value) {
      state.modalView = value;
    },
    modalDelete_State(state, value) {
      state.modalDeleteState = value;
    },
    Toast_State(state, result) {
      state.notificationToastState = result.value;
      state.message = result.msg;
      state.color = result.color;
    },
    Loading_State(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
  },
  modules: {
    auth:auth(),
  }
})
