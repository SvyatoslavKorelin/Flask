from flask import render_template, request, jsonify
from app import app, db
from app.models import Product  # Подставьте имя вашей модели

# Пример главной страницы
@app.route('/')
def index():
    return render_template('index.html')

# Пример эндпоинта для получения списка продуктов (замените на свои данные)
@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    product_list = [{'id': product.id, 'name': product.name, 'price': product.price} for product in products]
    return jsonify({'products': product_list})

# Пример эндпоинта для добавления нового продукта (замените на свои данные)
@app.route('/api/products', methods=['POST'])
def add_product():
    data = request.get_json()
    new_product = Product(name=data['name'], price=data['price'])
    db.session.add(new_product)
    db.session.commit()
    return jsonify({'message': 'Product added successfully'})
