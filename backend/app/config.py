# backend/app/config.py

import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your_secret_key'  # Замените на реальный секретный ключ
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///site.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Дополнительные настройки, если необходимо
    # Например, для включения режима отладки Flask
    DEBUG = False
