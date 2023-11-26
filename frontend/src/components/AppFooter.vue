<!-- frontend/src/components/Footer.vue -->

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h2>Связаться с нами</h2>
          <p>
            Если у вас есть вопросы или предложения, свяжитесь с нами.
          </p>
          <ul class="contact-info">
            <li>Email: info@damageinc.com</li>
            <li>Телефон: +7 (XXX) XXX-XX-XX</li>
          </ul>
        </div>
        <div class="footer-section">
          <h2>Подписывайтесь на нас</h2>
          <p>Будьте в курсе новостей и акций.</p>
          <div class="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <!-- <img src="@/assets/icons/facebook.svg" alt="Facebook" /> -->
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <!-- <img src="@/assets/icons/twitter.svg" alt="Twitter" /> -->
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <!-- <img src="@/assets/icons/instagram.svg" alt="Instagram" /> -->
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 Damage.Inc. Все права защищены.</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: #333;
  color: #fff;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  margin-right: 30px;
}

.footer-section h2 {
  font-size: 24px;
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 15px 0;
}

.contact-info li {
  margin-bottom: 8px;
}

.social-links {
  display: flex;
}

.social-links a {
  margin-right: 15px;
}

.social-links img {
  width: 30px;
  height: 30px;
}

.footer-bottom {
  margin-top: 20px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #555;
}
</style>
