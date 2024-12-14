from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from database import *
import os

# load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": [os.getenv('FRONTEND_URL'), 'http://localhost:5173']}}, headers=["Content-Type", "Authorization", "Origin"])

@app.route('/')
def index():
    return 'Hello world!'

@app.route('/grocery', methods=['GET'])
def retrieve():
    try:
        return jsonify({ 'groceries': get_groceries() }), 200
    except Exception as exp:
        return jsonify({ 'Server error occurred in retrieval': str(exp) }), 500

@app.route('/grocery/add', methods=['POST'])
def addition():
    try:
        response: str = add_grocery(request.get_json().get('item'))
        return jsonify({ 'message': response }), 201
    except Exception as exp:
        return jsonify({ 'Server error occurred in insertion': str(exp) }), 500

@app.route('/grocery/update', methods=['PUT'])
def updating():
    try:
        data = request.get_json()
        response: str = update_grocery(data.get('prev'), data.get('next'))
        return jsonify({ 'message': response }), 200
    except Exception as exp:
        return jsonify({ 'Server error occurred in updating': str(exp) }), 500

@app.route('/grocery/delete/<former>', methods=['DELETE'])
def deletion(former: str):
    try:
        response: str = delete_grocery(former)
        return jsonify({ 'message': response }), 200
    except Exception as exp:
        return jsonify({ 'Server error occurred in deletion': str(exp) }), 500


# run the server
if __name__ == '__main__':
    app.run(port=5000)
