<!-- frontend/src/components/ProductCard.vue -->

<template>
    <div class="product-card">
        <img :src="require(`@/assets/images/${product.image}`)" :alt="product.name" class="product-image" />
      <div class="product-details">
        <h3 class="product-title">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
        <div class="product-actions">
          <button @click="addToCart" class="cta-button">Добавить в корзину</button>
          <router-link :to="{ name: 'Product', params: { id: product.id }}" class="cta-button">Подробнее</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      addToCart() {
        this.$store.dispatch('addToCart', this.product);
      },
      formatPrice(price) {
        // Логика форматирования цены, например, добавление символа валюты
        return `₽${price}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .product-card:hover {
    transform: scale(1.05);
  }
  
  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .product-details {
    padding: 20px;
  }
  
  .product-title {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }
  
  .product-description {
    font-size: 14px;
    margin-bottom: 10px;
    color: #666;
  }
  
  .product-price {
    font-size: 16px;
    margin-bottom: 10px;
    color: #333;
  }
  
  .product-actions {
    display: flex;
    justify-content: space-between;
  }
  
  .cta-button {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    background-color: #ffd700;
    color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #333;
    color: #fff;
  }
  </style>
  