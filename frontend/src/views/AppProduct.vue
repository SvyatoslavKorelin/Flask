<!-- frontend/src/views/Product.vue -->

<template>
  <div class="product-details">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <h1 class="product-title">{{ product.name }}</h1>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ formatPrice(product.price) }}</p>
      <div class="product-actions">
        <button @click="addToCart" class="cta-button">Добавить в корзину</button>
        <button @click="buyNow" class="cta-button">Купить сейчас</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppProduct',
  computed: {
    ...mapGetters(['getProductById']),
  },
  methods: {
    ...mapActions(['addToCart', 'buyNow']),
    formatPrice(price) {
      // Логика форматирования цены, например, добавление символа валюты
      return `₽${price}`;
    },
  },
  created() {
    // Получаем ID продукта из параметра маршрута
    const productId = this.$route.params.id;
    // Вызываем действие для получения информации о продукте по ID
    this.fetchProductById(productId);
  },
};
</script>

<style scoped>
.product-details {
  display: flex;
  margin-top: 40px;
}

.product-image {
  flex: 1;
}

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-info {
  flex: 1;
  margin-left: 40px;
}

.product-title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
}

.product-description {
  font-size: 18px;
  margin-bottom: 20px;
  color: #666;
}

.product-price {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.product-actions {
  display: flex;
  gap: 20px;
}

.cta-button {
  padding: 10px 20px;
  font-size: 18px;
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
