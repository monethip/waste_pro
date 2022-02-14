import axios from 'axios';
import User from '@/store/models/User';
import Credential from "@/store/models/auth/Credential";
import router from "@/router";
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
            ///User login state
            isAuth(state, getter) {
                // return !!getter.token;
                return !!getter.token;
                // return state.token && state.token !== null;
            },
            ShowMsgErrors(state) {
                return state.msgErrors;
            }
        },
        mutations: {
            setCredential(state, payload) {
                const {authUser} = payload;
                const credential = new Credential();
                const user = new User();
                localStorage.setItem('phone', payload.data.phone);
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
                        ...payload, ...{user}
                    }
                );
                state.credential = credential;
                // console.log(state.credential)
                localStorage.setItem(ID_TOKEN, state.credential.access_token);
                // localStorage.setItem(ACCESS_TOKEN_KEY, state.credential.access_token);
            },
            setUserProfile(state, payload) {

                state.userProfile = payload;
            },
            Commit_ErrorLogin(state, payload) {
                state.msgErrors = payload;
            },
            Toast_State(state, result) {
                state.notificationToastState = result.value;
                state.message = result.msg;
                state.color = result.color;
            },
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
                            const {data} = response;
                            localStorage.setItem('confirmAccount', JSON.stringify(user));
                            // this.userConfirm = user;
                            /// Commit credential to data
                            router.push({name: 'CheckPhone'}).then();
                            context.commit('setCredential', data);
                            /// Make then get called
                            resolve(data);
                        }
                    ).catch((error) => {
                        ///Make Catch tet called
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

            confirmLogin(context, data) {
                return new Promise((resolve, reject) => {
                    axios.post(`${apiUrl}auth/login`, {
                        credential: data.credential,
                        password: data.password,
                        id_token: data.id_token,
                    })
                        .then(response => {
                            resolve(response)
                            const token = (response.data.data.access_token);
                            localStorage.setItem('access_token', token);   // ເກັບ Token ໄວ້ໃນ Localstorage ເພື່ອຈະນຳໄປໃຊ້ຂໍຂໍ້ມູນ
                            window.localStorage.setItem('user', JSON.stringify(response.data.data.user));
                            window.localStorage.setItem('roles', JSON.stringify(response.data.data.user.roles));
                            // context.commit('setUserProfile', response.data.data.user);
                        })
                        .catch(error => {
                            reject(error)
                            if (error.response.status === 401) {
                                context.commit('Commit_ErrorLogin', error.response.data.message);
                                setTimeout(() => {
                                    context.commit('Commit_ErrorLogin', '');
                                }, 3000);
                            } else if (error.response.status === 400) {
                                context.commit('Commit_ErrorLogin', error.response.data.message);
                                setTimeout(() => {
                                    context.commit('Commit_ErrorLogin', error.response.data.message);
                                }, 3000);
                            }
                        }).finally(response => {
                        resolve(response)
                        localStorage.removeItem('phone');
                        localStorage.removeItem('id_token');
                        localStorage.removeItem('confirmAccount');

                        setTimeout(() => {
                            const user_role = window.localStorage.getItem('roles');
                            const roleUsers = JSON.parse(user_role);
                             roleUsers.filter(item => {
                                if(item.name.includes('customer')){
                                    localStorage.removeItem('phone');
                                    localStorage.removeItem('id_token');
                                    localStorage.removeItem('confirmAccount');
                                    localStorage.removeItem('access_token');
                                    router.push({name:'Login'}).then(() =>{
                                        window.location.reload();
                                    });
                                } else if(item.name.includes('company')){
                                    localStorage.removeItem('phone');
                                    localStorage.removeItem('id_token');
                                    localStorage.removeItem('confirmAccount');
                                    localStorage.removeItem('access_token');
                                    router.push({name:'Login'}).then(() =>{
                                        window.location.reload();
                                    });
                                } else if(item.name.includes('pre_customer')){
                                    localStorage.removeItem('phone');
                                    localStorage.removeItem('id_token');
                                    localStorage.removeItem('confirmAccount');
                                    localStorage.removeItem('access_token');
                                    router.push({name:'Login'}).then(() =>{
                                        window.location.reload();
                                    });
                                } else if(item.name.includes('driver')){
                                    localStorage.removeItem('phone');
                                    localStorage.removeItem('id_token');
                                    localStorage.removeItem('confirmAccount');
                                    localStorage.removeItem('access_token');
                                    router.push({name:'Login'}).then(() =>{
                                        window.location.reload();
                                    });
                                }
                                else {
                                      router.push({name: 'Dashboard'}).then(() =>{
                                          window.location.reload();
                                      });
                                }
                            })
                        }, 300);
                    }).catch(() => {
                    });
                })
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
