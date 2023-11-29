// frontend/src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './views/AppHome.vue';
import AppAbout from './views/AppAbout.vue';
import AppProductList from './components/AppProductList.vue';
import AppContact from './views/AppContact.vue';
import AppProduct from './views/AppProduct.vue';
import AppLogin from './views/AppLogin.vue';
import AppRegister from './views/AppRegister.vue';

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
  {
    path: '/contact',
    component: AppContact,
    name: 'Contact',
  },
  {
    path: '/product/:id',
    component: AppProduct,
    name: 'Product',
  },
  {
    path: '/login',
    component: AppLogin,
    name: 'Login',
  },
 {
    path: '/register',
    component: AppRegister,
    name: 'Register',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
