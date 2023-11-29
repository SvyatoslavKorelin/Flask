<!-- frontend/src/views/Product.vue -->

<template>
  <div v-if="product" class="product-details">
    <img :src="require(`@/assets/images/${product.image}`)" :alt="product.name" class="product-image" />
    <div class="product-info">
      <h1 class="product-title">{{ product.name }}</h1>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ formatPrice(product.price) }}</p>
      <button @click="addToCart" class="cta-button">Добавить в корзину</button>
    </div>
  </div>
  <div v-else>
    <p>Продукт не найден.</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductDetails',
  methods: {
    ...mapActions(['addToCart']),
    ...mapActions(['fetchProducts']),
    formatPrice(price) {
      // Логика форматирования цены, например, добавление символа валюты
      return `₽${price}`;
    },
  },
  data() {
    return {
      productId: null,
    };
  },
  created() {
    this.productId = this.$route.params.id;
    // Вызываем метод для загрузки продуктов
    this.fetchProducts();
  },
  computed: {
    ...mapGetters(['getProductById']),
    product() {
      return this.getProductById(this.productId);
    },
  },
};
</script>

<style scoped>
.product-details {
  display: flex;
  margin-top: 40px;
}

.product-image {
  width: 300px;
  height: auto;
  border-radius: 8px;
}

.product-info {
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
