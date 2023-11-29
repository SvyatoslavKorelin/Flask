<template>
    <div class="login">
      <h1 class="login-title">Войти в аккаунт</h1>
      <div class="login-form">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="loginForm.email" />
  
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="loginForm.password" />
  
        <button @click="submitForm" class="cta-button">Войти</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppLogin',
    data() {
      return {
        loginForm: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Логика отправки формы на сервер
        console.log('Форма входа отправлена:', this.loginForm);
        // Дополнительная логика, например, отправка данных на сервер
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    text-align: center;
    margin-top: 40px;
  }
  
  .login-title {
    font-size: 32px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 18px;
    color: #666;
  }
  
  .login-form label {
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
  }
  
  .login-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .login-form button {
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
  
  .login-form button:hover {
    background-color: #333;
    color: #fff;
  }
  </style>
  