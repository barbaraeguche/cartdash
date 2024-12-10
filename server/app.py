from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Hello world!'

@app.route('/grocery', methods=['GET'])
def retrieve():
    pass

@app.route('/grocery/add', methods=['POST'])
def addition():
    pass

@app.route('/grocery/update', methods=['PUT'])
def updating():
    pass

@app.route('/grocery/delete/<former>', methods=['DELETE'])
def deletion(former: str):
    try:
        pass
    except Exception as exp:
        return jsonify({ 'Error occurred in deletion: ': str(e) }), 500


# run the server
if __name__ == '__main__':
    app.run(host='localhost', port=5000)
