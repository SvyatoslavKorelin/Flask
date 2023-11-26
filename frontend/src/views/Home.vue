<!-- frontend/src/views/Home.vue -->

<template>
    <div class="home">
      <h1>Welcome to Damage.Inc</h1>
      <p class="description">
        Discover a world of sound culture and musical style in our curated selection of products.
      </p>
      <ProductList :products="products" />
    </div>
  </template>
  
  <script>
  import ProductList from "@/components/ProductList";  // Убедитесь, что путь верный
  
  export default {
    name: "AppHome",
    components: {
      ProductList
    },
    data() {
      return {
        products: []  // Предполагается, что у вас есть массив продуктов для отображения
      };
    },
    mounted() {
      // Возможно, здесь вы будете загружать данные о продуктах с сервера
      // И обновлять this.products с помощью полученных данных
    }
  };
  </script>
  