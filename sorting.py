from flask import Flask, request, jsonify
from flask_cors import CORS
from Algorithms.sorting import bubble_sort

app = Flask(__name__)
CORS(app)

@app.route('/sort', methods=['POST'])
def sort():
    data = request.get_json()
    algorithm = data.get('algorithm')
    array = data.get('array')

    if not array or not isinstance(array, list):
        return jsonify({'error': 'Invalid array input'}), 400

    if algorithm == 'bubble_sort':
        try:
            steps = bubble_sort(array)
            return jsonify({'steps': steps})
        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Unsupported algorithm'}), 400


if __name__ == '__main__':
    app.run(debug=True)
