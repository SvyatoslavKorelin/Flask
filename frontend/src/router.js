// frontend/src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './views/AppHome.vue';
import AppAbout from './views/AppAbout.vue';
import AppProductList from './components/AppProductList.vue';
// import Contact from './views/Contact.vue';
import AppProduct from './views/AppProduct.vue';
// import Login from './views/Login.vue';
// import Register from './views/Register.vue';

const routes = [
  {
    path: '/',
    component: AppHome,
    name: 'Home',
  },
  {
    path: '/about',
    component: AppAbout,
    name: 'About',
  },
  {
    path: '/products',
    component: AppProductList,
    name: 'ProductList',
  },
//   {
//     path: '/contact',
//     component: Contact,
//     name: 'Contact',
//   },
  {
    path: '/product/:id',
    component: AppProduct,
    name: 'Product',
  },
//   {
//     path: '/login',
//     component: Login,
//     name: 'Login',
//   },
//   {
//     path: '/register',
//     component: Register,
//     name: 'Register',
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
