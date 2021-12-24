import client from 'axios';
import router from '@/router/index';

const axios = client.create(
    {
        baseURL: process.env.VUE_APP_BASE_API_URL,
    });

const state = {
    token: localStorage.getItem('access_token') || null,
    userProfile: {},
    userRole: [],
    msgErrors: '',
    auth: {},
};

const getters = {
    LoggedIn(state) {
        return state.token !== null;
    },
    getUserRole(state) {
        let user_Role = window.localStorage.getItem('roles');
        if (user_Role) {
            try {
                user_Role = JSON.parse(user_Role);
            } catch (err) {
                user_Role = {}
            }
        } else {
            user_Role = {};
        }

        if (Object.keys(state.userRole).length) {
            return state.userRole;
        }
        return user_Role.role_user;
    },
    getUserProfile(state) {
        let profile = window.localStorage.getItem('user');
        if (profile) {
            try {
                profile = JSON.parse(profile);
            } catch (err) {
                profile = {}
            }
        } else {
            profile = {};
        }
        if (Object.keys(state.userProfile).length) {
            return state.userProfile;
        }
        return profile.userProfile;
    },

    getToken(state) {
        return state.token;
    },
    isAuth(state) {
        return state.token && state.token !== null;
    },
    ShowMsgErrors(state) {
        return state.msgErrors;
    }
};

const mutations = {
    AdminSignin(state, token) {
        state.token = token
    },
    destroyToken(state) {
        state.token = null;
    },
    setUserRole(state, payload) {
        state.userRole = payload;
    },
    setUserProfile(state, payload) {
        state.userProfile = payload;
    },
    Commit_ErrorLogin(state, payload) {
        state.msgErrors = payload;
    },
};

const actions = {
    LoginUser(context, data) {
        return new Promise((resolve, reject) => {
            axios.post('auth/login', {
                credential: data.credential,
                password: data.password
            })
                .then(response => {
                    resolve(response)
                    const token = (response.data.data.access_token);
                    localStorage.setItem('access_token', token);   // ເກັບ Token ໄວ້ໃນ Localstorage ເພື່ອຈະນຳໄປໃຊ້ຂໍຂໍ້ມູນ
                    window.localStorage.setItem('user', JSON.stringify(response.data.data.user));
                    window.localStorage.setItem('roles', JSON.stringify(response.data.data.user.roles));
                    // window.localStorage.setItem('permissions', JSON.stringify(response.data.data.user.role_permissions));

                    context.commit('AdminSignin', token);
                    context.commit('setUserProfile', response.data.data.user);
                    router.push({ name: 'Dashboard' });
                    // const userProfile = window.localStorage.getItem('user');
                    const user_role = window.localStorage.getItem('roles');
                    const roleUsers = JSON.parse(user_role);
                    if (roleUsers.includes('super_admin', 'admin')) {
                        router.push({ name: 'dashboard' });
                    } else if (roleUsers.includes('finance', 'company')) {
                        router.push({ name: 'Invoice' })
                    }
                    setTimeout(() => {
                        window.location.reload();
                    }, 300);
                })
                .catch(error => {
                    reject(error)
                    if (error.response.status == 401) {
                        context.commit('Commit_ErrorLogin', 'ອີເມວ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ...');
                        setTimeout(() => {
                            context.commit('Commit_ErrorLogin', '');
                        }, 3000);
                    } else if (error.response.status == 400) {
                        context.commit('Commit_ErrorLogin', 'ອີເມວ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ...');
                        setTimeout(() => {
                            context.commit('Commit_ErrorLogin', '');
                        }, 3000);
                    }
                })
        })
    },

    // Logout User
    destroyToken(context) {
        if (context.getters.LoggedIn) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
                axios.post('auth/logout')
                    .then(response => {
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
                    .finally(response => {
                        resolve(response)
                        localStorage.removeItem('access_token')     // Remove Item Of Localstorage...    // Remove Item Of Localstorage...
                        localStorage.removeItem('user')
                        context.commit('destroyToken')
                        router.push({
                            name: 'Login'
                        }).catch(() => { });
                    })
            })
        }
    },

    appNotification() {

    }

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
