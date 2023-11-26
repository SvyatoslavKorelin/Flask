// frontend/src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],          // Список всех продуктов
    featuredProducts: [],  // Популярные продукты (выделенные)
    cart: [],              // Корзина покупок
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setFeaturedProducts(state, featuredProducts) {
      state.featuredProducts = featuredProducts;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  actions: {
    fetchProducts({ commit }) {
      // Логика получения данных о продуктах с сервера
      const products = []; // Замените на фактический вызов API
      commit('setProducts', products);
    },
    fetchFeaturedProducts({ commit }) {
      // Логика получения данных о популярных продуктах с сервера
      const featuredProducts = []; // Замените на фактический вызов API
      commit('setFeaturedProducts', featuredProducts);
    },
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
  },
  getters: {
    products: state => state.products,
    featuredProducts: state => state.featuredProducts,
    cart: state => state.cart,
  },
});
