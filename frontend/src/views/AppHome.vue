<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">Добро пожаловать в Damage.Inc</h1>
      <p class="hero-subtitle">
        Ваша виртуальная столица звуковой культуры и музыкального стиля!
      </p>
      <router-link to="/products" class="cta-button">Исследовать продукцию</router-link>
    </div>
    <div class="featured-products">
      <h2>Популярные товары</h2>
      <div class="products">
        <AppProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppProductCard from "@/components/AppProductCard";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppHome',
  components: {
    AppProductCard,
  },
  computed: {
    ...mapGetters(['featuredProducts']),
  },
  methods: {
    ...mapActions(['fetchFeaturedProducts']),
  },
  created() {
    this.fetchFeaturedProducts();
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 40px;
}

.hero {
  /* background-image: url("@/assets/images/hero-bg.jpg"); */
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 100px 0;
}

.hero-title {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 24px;
  margin-bottom: 40px;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  background-color: #ffd700; /* Цвет кнопки, измените по своему вкусу */
  color: #333;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #333; /* Цвет кнопки при наведении, измените по своему вкусу */
  color: #fff;
}

.featured-products {
  margin-top: 60px;
}

.featured-products h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .cta-button {
    font-size: 16px;
    padding: 8px 16px;
  }

  .featured-products h2 {
    font-size: 28px;
    margin-bottom: 15px;
  }
}
</style>
