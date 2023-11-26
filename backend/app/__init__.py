# backend/app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object('app.config.Config')  # Используйте конфигурацию из файла config.py
db = SQLAlchemy(app)
migrate = Migrate(app, db)  # Инициализация Flask-Migrate

from app import routes  # Подключаем маршруты
