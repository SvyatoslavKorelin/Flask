<!-- frontend/src/views/Contact.vue -->

<template>
    <div class="contact">
      <h1 class="contact-title">Свяжитесь с нами</h1>
      <div class="contact-content">
        <p>
          Если у вас есть вопросы или предложения, не стесняйтесь связаться с нами.
        </p>
        <div class="contact-form">
          <label for="name">Ваше имя:</label>
          <input type="text" id="name" v-model="contactForm.name" />
  
          <label for="email">Ваш Email:</label>
          <input type="email" id="email" v-model="contactForm.email" />
  
          <label for="message">Ваше сообщение:</label>
          <textarea id="message" v-model="contactForm.message"></textarea>
  
          <button @click="submitForm" class="cta-button">Отправить</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppContact',
    data() {
      return {
        contactForm: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Логика отправки формы на сервер
        console.log('Форма отправлена:', this.contactForm);
        // Дополнительная логика, например, отправка данных на сервер
      },
    },
  };
  </script>
  
  <style scoped>
  .contact {
    text-align: center;
    margin-top: 40px;
  }
  
  .contact-title {
    font-size: 32px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .contact-content {
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 18px;
    color: #666;
  }
  
  .contact-content p {
    margin-bottom: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-form label {
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .contact-form button {
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
  
  .contact-form button:hover {
    background-color: #333;
    color: #fff;
  }
  </style>
  