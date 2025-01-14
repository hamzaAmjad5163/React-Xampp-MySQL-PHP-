from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

def quicksort(array):
    steps = []

    def _quicksort(arr):
        if len(arr) <= 1:
            return arr
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        steps.append({'array': left + middle + right, 'pivot': pivot})  # Log each step
        return _quicksort(left) + middle + _quicksort(right)

    sorted_array = _quicksort(array)
    return sorted_array, steps


@app.route('/quicksort', methods=['POST', 'OPTIONS'])
def sort_numbers():
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        response.headers.add("Access-Control-Allow-Methods", "POST")
        return response

    try:
        data = request.json
        if not data or 'numbers' not in data:
            return jsonify({'error': 'Invalid input'}), 400
        
        numbers = data['numbers']
        sorted_numbers, steps = quicksort(numbers)
        response = jsonify({'sorted_numbers': sorted_numbers, 'steps': steps})
        response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
        return response
    except Exception as e:
        response = jsonify({'error': str(e)})
        response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
        return response, 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)
