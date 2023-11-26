<!-- frontend/src/App.vue -->

<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/Header";
import AppFooter from "@/components/Footer";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      // Ваши данные здесь
    };
  },
  methods: {
    // Ваши методы здесь
  },
  mounted() {
    // Логика, которая выполняется после монтирования компонента
  }
};
</script>

<style scoped>
@import './assets/styles/main.css';
</style>
