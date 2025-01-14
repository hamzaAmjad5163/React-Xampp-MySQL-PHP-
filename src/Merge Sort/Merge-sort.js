import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import MergeSortVisualizer from "./MergeSortVisualizer";
import Navbar from "../components/Navbar";
import "./MergeSortApp.css";  // Import the CSS file for styling

const MergeSortApp = () => {
  const [numbers, setNumbers] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleInputChange = (e) => setNumbers(e.target.value);

  const handleSort = async () => {
    if (!numbers) {
      alert("Please enter a list of numbers.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5002/mergesort", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numbers: numbers.split(",").map(Number),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch sorted numbers");
      }

      const data = await response.json();

      if (data.sorted_numbers && data.steps) {
        setSortedNumbers(data.sorted_numbers);
        setSteps(data.steps);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert(
        "An error occurred while fetching sorted numbers. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="text-center">
          <h1>MergeSort Algorithm</h1>
          <Form.Group controlId="numbersInput">
            <Form.Label>Enter numbers separated by commas</Form.Label>
            <Form.Control
              type="text"
              value={numbers}
              onChange={handleInputChange}
              placeholder="Example: 4,3,2,1"
            />
          </Form.Group>
          <Button onClick={handleSort} className="ml-2">
            Sort
          </Button>
        </div>
        <div className="sorted-numbers-box">
          <h2>Sorted Numbers:</h2>
          <p>{sortedNumbers.join(", ")}</p>
        </div>
        <MergeSortVisualizer steps={steps} />
      </Container>
    </>
  );
};

export default MergeSortApp;
