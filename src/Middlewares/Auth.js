import store from '../store';

export default function auth({ next, router }) {
  if (!store.getters['auth/isAuth']) {
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
