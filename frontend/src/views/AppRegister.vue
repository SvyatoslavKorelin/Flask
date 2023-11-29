<template>
    <div class="register">
      <h1 class="register-title">Регистрация</h1>
      <div class="register-form">
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="registerForm.username" />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="registerForm.email" />
  
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="registerForm.password" />
  
        <label for="confirmPassword">Подтвердите пароль:</label>
        <input type="password" id="confirmPassword" v-model="registerForm.confirmPassword" />
  
        <button @click="submitForm" class="cta-button">Зарегистрироваться</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppRegister',
    data() {
      return {
        registerForm: {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Логика отправки формы на сервер
        console.log('Форма регистрации отправлена:', this.registerForm);
        // Дополнительная логика, например, отправка данных на сервер
      },
    },
  };
  </script>
  
  <style scoped>
  .register {
    text-align: center;
    margin-top: 40px;
  }
  
  .register-title {
    font-size: 32px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .register-form {
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 18px;
    color: #666;
  }
  
  .register-form label {
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
  }
  
  .register-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .register-form button {
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
  
  .register-form button:hover {
    background-color: #333;
    color: #fff;
  }
  </style>
  