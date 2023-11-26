import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [], // Initial empty array, you can replace it with your data
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    // Add more mutations as needed
  },
  actions: {
    fetchProducts({ commit }) {
      // Replace this with your actual API call to fetch products
      const fakeApiData = [
        { id: 1, name: 'Product 1', price: 50 },
        { id: 2, name: 'Product 2', price: 75 },
        // Add more products as needed
      ];
      commit('setProducts', fakeApiData);
    },
    addNewProduct({ commit }, product) {
      // Replace this with your actual API call to add a new product
      // After adding the product, commit 'addProduct' mutation
      commit('addProduct', product);
    },
    // Add more actions as needed
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    // Add more getters as needed
  },
});

export default store;
