<!-- frontend/src/views/Product.vue -->

<template>
    <div class="product-details">
      <div v-if="product" class="product-container">
        <img :src="product.imageUrl" alt="Product Image" class="product-image" />
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <p class="product-price">${{ product.price }}</p>
          <p class="product-description">{{ product.description }}</p>
        </div>
      </div>
      <div v-else class="no-product">
        <p>No product details available</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Product',
    data() {
      return {
        product: null
      };
    },
    mounted() {
      // Возможно, здесь вы будете загружать данные о продукте с сервера
      // И обновлять this.product с помощью полученных данных
      // Пример:
      // this.product = { id: 1, name: 'Example Product', price: 50, description: 'Lorem ipsum dolor sit amet...' };
    }
  };
  </script>
  