<!-- frontend/src/components/ProductList.vue -->

<template>
    <div class="product-list">
      <div v-if="products.length === 0" class="no-products">
        <p>No products available</p>
      </div>
      <div v-else class="products-container">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.imageUrl" alt="Product Image" class="product-image" />
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="product-price">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    props: {
      products: Array // Принимаем список продуктов через props
    }
  };
  </script>
  