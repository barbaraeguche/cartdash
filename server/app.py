from flask import Flask, request, jsonify
from flask_cors import CORS
from backend import *

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Hello world!'

@app.route('/grocery', methods=['GET'])
def retrieve():
    try:
        return jsonify({ 'groceries': get_groceries() }), 200
    except Exception as exp:
        return jsonify({ 'Error occurred in deletion: ': str(exp) }), 500

@app.route('/grocery/add', methods=['POST'])
def addition():
    try:
        add_grocery(request.get_json().get('latter')), 201
    except Exception as exp:
        return jsonify({ 'Error occurred in deletion: ': str(exp) }), 500

@app.route('/grocery/update', methods=['PUT'])
def updating():
    try:
        data = request.get_json()
        update_grocery(data.get('former'), data.get('latter')), 200
    except Exception as exp:
        return jsonify({ 'Error occurred in deletion: ': str(exp) }), 500

@app.route('/grocery/delete/<former>', methods=['DELETE'])
def deletion(former: str):
    try:
        delete_grocery(former), 200
    except Exception as exp:
        return jsonify({ 'Error occurred in deletion: ': str(exp) }), 500


# run the server
if __name__ == '__main__':
    app.run(port=5000)
