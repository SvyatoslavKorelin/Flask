<!-- frontend/src/components/ProductList.vue -->

<template>
  <div class="product-list">
    <h2>Наша Продукция</h2>
    <div class="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
// import ProductCard from "@/components/ProductCard";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  components: {
    // ProductCard,
  },
  computed: {
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.product-list {
  text-align: center;
  margin-top: 40px;
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>
