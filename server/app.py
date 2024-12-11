from flask import Flask, request, jsonify
from flask_cors import CORS
from database import *

app = Flask(__name__)
CORS(app)

@app.route('/')
async def index():
    return 'Hello world!'

@app.route('/grocery', methods=['GET'])
def retrieve():
    try:
        return jsonify({ 'groceries': get_groceries() }), 200
    except Exception as exp:
        return jsonify({ 'Error occurred in retrieval': str(exp) }), 500

@app.route('/grocery/add', methods=['POST'])
def addition():
    try:
        response: str | bool = add_grocery(request.get_json().get('item'))
        return jsonify({ 'message': response if isinstance(response, str) else str(response) }), 201
    except Exception as exp:
        return jsonify({ 'Error occurred in insertion': str(exp) }), 500

@app.route('/grocery/update', methods=['PUT'])
def updating():
    try:
        data = request.get_json()
        response: str | bool = update_grocery(data.get('prev'), data.get('next'))
        return jsonify({ 'message': response if isinstance(response, str) else str(response) }), 200
    except Exception as exp:
        return jsonify({ 'Error occurred in updating': str(exp) }), 500

@app.route('/grocery/delete/<former>', methods=['DELETE'])
def deletion(former: str):
    try:
        response: str | bool = delete_grocery(former)
        return jsonify({ 'message': response if isinstance(response, str) else str(response) }), 200
    except Exception as exp:
        return jsonify({ 'Error occurred in deletion': str(exp) }), 500


# run the server
if __name__ == '__main__':
    app.run(port=5000)
