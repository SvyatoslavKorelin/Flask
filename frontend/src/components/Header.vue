<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
        <!-- Добавьте другие ссылки по необходимости -->
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    padding: 10px 0;
    text-align: center;
  }
  
  nav {
    display: flex;
    justify-content: space-around;
  }
  
  router-link {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
  }
  
  router-link:hover {
    background-color: #555;
  }
  </style>
  