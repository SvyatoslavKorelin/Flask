<!-- frontend/src/components/Header.vue -->

<template>
  <header class="app-header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" alt="Damage.Inc" />
        </router-link>
        <nav class="nav">
          <router-link to="/">Главная</router-link>
          <router-link to="/about">О нас</router-link>
          <router-link to="/products">Продукция</router-link>
          <router-link to="/contact">Контакты</router-link>
        </nav>
        <div class="user-actions">
          <router-link to="/login">Войти</router-link>
          <router-link to="/register">Регистрация</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 150px;
  height: auto;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: #ffd700; /* Измените на цвет, который вам нравится */
}

.user-actions a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
  transition: color 0.3s ease;
}

.user-actions a:hover {
  color: #ffd700; /* Измените на цвет, который вам нравится */
}
</style>
