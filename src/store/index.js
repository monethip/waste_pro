import Vue from 'vue'
import Vuex from 'vuex'
import User from './user';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    username: "Monethip",

    modalAddState: false,
    modalEditState: false,
    modalDeleteState: false,
    modalView: false,
    notificationToastState: false,
    progressLoading: false,
    message: '',
    color: '',
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
  },
  actions: {
  },
  modules: {
    User,
  }
})
