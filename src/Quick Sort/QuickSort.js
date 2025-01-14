import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import QuickSortVisualizer from "./QuickSortVisualizer";
import "./QuickSortApp.css"; 

const QuickSortApp = () => {
  const [numbers, setNumbers] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleInputChange = (e) => setNumbers(e.target.value);

  const handleSort = async () => {
    try {
      const response = await fetch("http://localhost:5001/quicksort", {
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
      console.log("API Response:", data); // Debug log

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
          <h1>QuickSort Algorithm</h1>
          <input
            type="text"
            value={numbers}
            onChange={handleInputChange}
            placeholder="Enter numbers separated by commas"
          />
          <Button onClick={handleSort} className="ml-2">
            Sort
          </Button>
        </div>
          <div className="sorted-numbers-box">
            <h2>Sorted Numbers:</h2>
            <p>{sortedNumbers.join(", ")}</p>
          </div>
        <div style={{ marginTop: "20px" }}>
          <h2>QuickSort Visualization</h2>
          <QuickSortVisualizer steps={steps || []} />
        </div>
      </Container>
    </>
  );
};

export default QuickSortApp;
