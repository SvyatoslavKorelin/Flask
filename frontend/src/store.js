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
      // В данном примере используются тестовые данные
      const products = [
        {
          id: 1,
          name: 'Продукт 1',
          description: 'Released  3 October 1980\nRecorded  February-April 1980[1]\nStudio  Old Smithy Recording Studio, Worcester, England\nGenre  Heavy metal\nLength  41:37\nLabel  Happy Face\nProducer  Reg Fellows',
          price: 1000,
          image: 'image1.jpg',
        },
        {
          id: 2,
          name: 'Продукт 2',
          description: 'Описание продукта 2',
          price: 1500,
          image: 'image2.jpg',
        },
        {
          id: 3,
          name: 'Популярный продукт 1',
          description: 'Описание популярного продукта 1',
          price: 1200,
          image: 'image3.jpg',
        },
        {
          id: 4,
          name: 'Популярный продукт 2',
          description: 'Описание популярного продукта 2',
          price: 1800,
          image: 'image4.jpg',
        },
        // Добавьте еще продукты по мере необходимости
      ];
      commit('setProducts', products);
    },
    fetchFeaturedProducts({ commit }) {
      // Логика получения данных о популярных продуктах с сервера
      // В данном примере используются тестовые данные
      const featuredProducts = [
        {
          id: 3,
          name: 'Популярный продукт 1',
          description: 'Описание популярного продукта 1',
          price: 1200,
          image: 'image3.jpg',
        },
        {
          id: 4,
          name: 'Популярный продукт 2',
          description: 'Описание популярного продукта 2',
          price: 1800,
          image: 'image4.jpg',
        },
        // Добавьте еще популярные продукты по мере необходимости
      ];
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
    cartTotal: state => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    getProductById: state => id => state.products.find(product => product.id == id),
  },
});
