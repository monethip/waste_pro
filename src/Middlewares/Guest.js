// import store from '../store';
// import router from '../router/index';

export default function guest({next, router}){
    if(localStorage.getItem('access_token')){
        return router.push({name: 'dashboard'});
    }
    return next();
} 