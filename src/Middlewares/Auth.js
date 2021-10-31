// import store from '../store';
// import router from '../router/index';

export default function auth({ next, router }) {
    if (!localStorage.getItem('access_token')) {
        return router.push({ name: 'Login' });
    }

    // const userProfile = window.localStorage.getItem('user_profile');
    // const roleUsers = JSON.parse(userProfile).roleUsers;

    // if(roleUsers.includes('branchdelivery')){
    //     return router.push({name: 'delivery.tab.order.request'});
    //    //return next({name: 'delivery.list.order'});
    // }
    return next();
}