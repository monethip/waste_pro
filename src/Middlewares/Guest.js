import store from '../store';
// import router from '../router/index';

export default function guest({ next, router }) {
  if (store.getters['auth/isAuth']) {
    return router.push({ name: 'Welcome' });
  }
  return next();
}
