import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './views/Home.vue';
import AppAbout from './views/About.vue';
import AppProduct from './views/Product.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome,
  },
  {
    path: '/about',
    name: 'About',
    component: AppAbout,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: AppProduct,
    props: true,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
