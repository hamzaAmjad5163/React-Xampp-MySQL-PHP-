import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Helper function to merge and capture the steps
def merge(left, right):
    merged = []
    steps = []
    while left and right:
        if left[0] < right[0]:
            merged.append(left.pop(0))
        else:
            merged.append(right.pop(0))
        steps.append({"stage": "Merge", "array": merged + left + right, "left": merged[:], "right": left + right})
    merged.extend(left or right)
    steps.append({"stage": "Merge", "array": merged, "left": merged[:], "right": []})
    return merged, steps

# Recursive merge sort function with steps tracking
def merge_sort(arr):
    if len(arr) <= 1:
        return arr, [{"stage": "Conquer", "array": arr, "left": [], "right": []}]
    
    mid = len(arr) // 2
    left, left_steps = merge_sort(arr[:mid])
    right, right_steps = merge_sort(arr[mid:])
    
    steps = [{"stage": "Divide", "array": arr, "left": arr[:mid], "right": arr[mid:]}] + left_steps + right_steps
    merged, merge_steps = merge(left, right)
    steps += merge_steps
    return merged, steps

@app.route('/mergesort', methods=['POST'])
def mergesort():
    data = request.get_json()
    numbers = data.get('numbers')

    if not numbers:
        return jsonify({"error": "No numbers provided."}), 400

    try:
        start_time = time.time()
        sorted_numbers, steps = merge_sort(numbers)
        end_time = time.time()

        return jsonify({
            "sorted_numbers": sorted_numbers,
            "steps": steps,
            "execution_time": end_time - start_time
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5002)
