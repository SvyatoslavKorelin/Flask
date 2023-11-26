# backend/app/routes/api.py
from flask import jsonify, request
from app import app, db
from app.models import Product

# Эндпоинт для получения списка продуктов
@app.route('/api/products', methods=['GET'])
def get_products_api():
    products = Product.query.all()
    product_list = [{'id': product.id, 'name': product.name, 'price': product.price} for product in products]
    return jsonify({'products': product_list})

# Эндпоинт для получения информации о конкретном продукте
@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product_api(product_id):
    product = Product.query.get_or_404(product_id)
    return jsonify({'id': product.id, 'name': product.name, 'price': product.price})

# Эндпоинт для добавления нового продукта
@app.route('/api/products', methods=['POST'])
def add_product_api():
    data = request.get_json()
    new_product = Product(name=data['name'], price=data['price'])
    db.session.add(new_product)
    db.session.commit()
    return jsonify({'message': 'Product added successfully'})

# Эндпоинт для обновления информации о продукте
@app.route('/api/products/<int:product_id>', methods=['PUT'])
def update_product_api(product_id):
    product = Product.query.get_or_404(product_id)
    data = request.get_json()

    product.name = data['name']
    product.price = data['price']

    db.session.commit()
    return jsonify({'message': 'Product updated successfully'})

# Эндпоинт для удаления продукта
@app.route('/api/products/<int:product_id>', methods=['DELETE'])
def delete_product_api(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return jsonify({'message': 'Product deleted successfully'})
