import axios from 'axios';
import User from '@/store/models/User';
import Credential from "@/store/models/auth/Credential";
import router from "@/router";
import store from "@/store";
// const ACCESS_TOKEN_KEY = 'access_token';
const ID_TOKEN = 'id_token';
const apiUrl = process.env['VUE_APP_BASE_API_URL'];
export default function create() {
    return {
        namespaced: true,
        state: {
            credential: new Credential(),
            phone: "",
            password: "",
            userConfirm: {},
            msgErrors: '',
            notificationToastState: false,
            progressLoading: false,
            message: '',
            color: '',
            isLoading: false,
            myToken: '',
            user: {},
            roles: [],
            lastMonthBill: null,
            lastMonthBillPaid: null,
            lastMonthEvent: null,
            loginPhone: "",
            callFetch: 0
        },
        getters: {
            ///check Login or not
            LoggedIn(state) {
                return state.credential.access_token !== null;
            },
            ///Current logged-in user
            auth(state) {
                return state.credential.user;
            },
            ///Current access token
            token(state) {
                return state.credential.access_token;
            },
            myToken(state) {
                return state.credential.myToken
                    ? state.credential.myToken
                    : localStorage.getItem('access_token')
            },
            getLoginPhone(state) {
                return state.loginPhone
            },
            getLastMonthBill(state) {
                return state.lastMonthBill
                    ? state.lastMonthBill
                    : localStorage.getItem('lastMonthBill')
            },
            getCallFetch(state) {
                return state.callFetch
            },
            getLastMonthBillPaid(state) {
                return state.lastMonthBillPaid
                    ? state.lastMonthBillPaid
                    : localStorage.getItem('lastMonthBillPaid')
            },
            getLastMonthEvent(state) {
                return state.lastMonthEvent
                    ? state.lastMonthEvent
                    : localStorage.getItem('lastMonthEvent')
            },
            user(state) {
                return state.credential.user
                    ? state.credential.user
                    : localStorage.getItem('user')
            },
            roles(state) {
                return state.credential.roles
                    ? state.credential.roles
                    : localStorage.getItem('roles')
            },
            ///User login state
            isAuth(state, getter) {
                // return !!getter.token;
                return getter.token ? true : false;
                // return state.token && state.token !== null;
            },
            ShowMsgErrors(state) {
                return state.msgErrors;
            }
        },
        mutations: {
            clearLogginState(state) {
                state.credential = {}
            },
            setCredential(state, payload) {
                const { authUser } = payload;
                const credential = new Credential();
                const user = new User();
                state.loginPhone = payload.data.phone;
                console.log(state.loginPhone);
                if (authUser) {
                    user.fromJSON({
                        id: authUser.userId,
                        phone: authUser.data.phone,
                        email: authUser.email,
                        name: authUser.name,
                        profile_url: authUser.userProfile,
                        notification_token: payload.payload,
                    })
                    credential.fromJSON(
                        {
                            ...payload, ...{ user }
                        }
                    );
                    state.credential = credential;
                    // console.log(state.credential)
                    localStorage.setItem(ID_TOKEN, state.credential.access_token);
                }
                // localStorage.setItem(ACCESS_TOKEN_KEY, state.credential.access_token);
            },
            setMyToken(state, payload) {
                localStorage.setItem('access_token', payload)
                state.credential.myToken = payload
            },
            setUser(state, payload) {
                localStorage.setItem('user', payload)
                state.credential.user = payload
            },
            setRoles(state, payload) {
                localStorage.setItem('roles', payload)
                state.credential.roles = payload
            },
            setUserProfile(state, payload) {

                state.userProfile = payload;
            },
            Commit_ErrorLogin(state, payload) {
                state.msgErrors = payload;
            },
            changeLastMonthBill(state, payload) {
                localStorage.setItem('lastMonthBill', payload)
                state.lastMonthBill = payload;
            },
            changeLastMonthBillPaid(state, payload) {
                localStorage.setItem('lastMonthBillPaid', payload)
                state.lastMonthBillPaid = payload;
            },
            changeLastMonthEvent(state, payload) {
                localStorage.setItem('lastMonthEvent', payload)
                state.lastMonthEvent = payload;
            },
            Toast_State(state, result) {
                state.notificationToastState = result.value;
                state.message = result.msg;
                state.color = result.color;
            },
            doCallFetch(state) {
                state.callFetch++
            }
        },
        actions: {
            login(context, user) {
                return new Promise(((resolve, reject) => {
                    ///Request to server api
                    axios.post(`${apiUrl}auth/login`,
                        {
                            credential: user.credential,
                            password: user.password,
                        }
                    ).then(
                        (response) => {
                            const { data } = response;
                            localStorage.setItem('confirmAccount', JSON.stringify(user));
                            // this.userConfirm = user;
                            /// Commit credential to data
                            router.push({ name: 'CheckPhone' }).then();
                            context.commit('setCredential', data);
                            /// Make then get called
                            resolve(data);
                        }
                    ).catch((error) => {
                        ///Make Catch tet called
                        console.log(error);
                        reject(error);
                        if (error.response.status === 401) {
                            context.commit('Commit_ErrorLogin', error.response.data.message);
                            setTimeout(() => {
                                context.commit('Commit_ErrorLogin', error.response.data.message);
                            }, 3000);
                        } else if (error.response.status === 400) {
                            context.commit('Commit_ErrorLogin', error.response.data.message);
                            setTimeout(() => {
                                context.commit('Commit_ErrorLogin', error.response.data.message);
                            }, 3000);
                        }
                    })
                }));
            },
            saveLastMonthBill(context, month) {
                context.commit('changeLastMonthBill', month ? month : "");
            },
            saveLastMonthBillPaid(context, month) {
                context.commit('changeLastMonthBillPaid', month ? month : "");
            },
            saveLastMonthEvent(context, month) {
                context.commit('changeLastMonthEvent', month ? month : "");
            },
            makeCallFetch(context) {
                context.commit('doCallFetch');
            },

            async confirmLogin(context, data) {
                try {
                    const response = await axios.post(`${apiUrl}auth/login`, {
                        credential: data.credential,
                        password: data.password,
                        id_token: data.id_token,
                    })
                    const token = (response.data.data.access_token);
                    await localStorage.setItem('access_token', token);   // ເກັບ Token ໄວ້ໃນ Localstorage ເພື່ອຈະນຳໄປໃຊ້ຂໍຂໍ້ມູນ
                    await window.localStorage.setItem('user', JSON.stringify(response.data.data.user));
                    await window.localStorage.setItem('roles', JSON.stringify(response.data.data.user.roles));


                    localStorage.removeItem('phone');
                    localStorage.removeItem('id_token');
                    localStorage.removeItem('confirmAccount');

                    // setTimeout(() => {
                    const user_role = window.localStorage.getItem('roles');
                    const roleUsers = JSON.parse(user_role);
                    roleUsers.filter(item => {
                        if (item.name.includes('customer')) {
                            localStorage.removeItem('phone');
                            localStorage.removeItem('id_token');
                            localStorage.removeItem('confirmAccount');
                            localStorage.removeItem('access_token');
                            router.push({ name: 'Login' }).then(() => {
                                window.location.reload();
                            });
                        } else if (item.name.includes('company')) {
                            localStorage.removeItem('phone');
                            localStorage.removeItem('id_token');
                            localStorage.removeItem('confirmAccount');
                            localStorage.removeItem('access_token');
                            router.push({ name: 'Login' }).then(() => {
                                window.location.reload();
                            });
                        } else if (item.name.includes('pre_customer')) {
                            localStorage.removeItem('phone');
                            localStorage.removeItem('id_token');
                            localStorage.removeItem('confirmAccount');
                            localStorage.removeItem('access_token');
                            router.push({ name: 'Login' }).then(() => {
                                window.location.reload();
                            });
                        } else if (item.name.includes('driver')) {
                            localStorage.removeItem('phone');
                            localStorage.removeItem('id_token');
                            localStorage.removeItem('confirmAccount');
                            localStorage.removeItem('access_token');
                            router.push({ name: 'Login' }).then(() => {
                                window.location.reload();
                            });
                        }
                        else {
                            window.location.reload();
                        }
                    })
                } catch (error) {
                    if (error.response.status === 400) {
                        context.commit('Commit_ErrorLogin', error.response.data.message);
                        setTimeout(() => {
                            context.commit('Commit_ErrorLogin', error.response.data.message);
                        }, 3000);
                    }
                }
            },

            // Logout User
            destroyToken(context) {
                if (context.getters.LoggedIn) {
                    return new Promise((resolve, reject) => {
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
                        axios.post(`${apiUrl}auth/logout`)
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
                                store.commit('auth/clearLogginState')
                                context.commit('destroyToken')
                                router.push({
                                    name: 'Login'
                                }).catch(() => {
                                });
                            })
                    })
                }
            },

        }
    }
}
