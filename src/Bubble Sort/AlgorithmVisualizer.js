import React, { useState } from "react";
import axios from "axios";
import SortVisualizer from "./SortVisualizer";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
const AlgorithmVisualizer = () => {
  const [array, setArray] = useState([]);
  const [steps, setSteps] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const visualizeSorting = async (algorithm) => {
    try {
      const response = await axios.post("http://localhost:5000/sort", {
        algorithm,
        array,
      });
      setSteps(response.data.steps);
    } catch (error) {
      console.error("Error making API request", error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleArrayChange = () => {
    const newArray = inputValue
      .split(",")
      .map((num) => Number(num.trim()))
      .filter((num) => !isNaN(num));
    if (newArray.length === 0) {
      alert("Please enter a valid list of numbers separated by commas.");
      return;
    }
    setArray(newArray);
    setSteps([]);
  };

  return (
    <>
      <Navbar />
      <Container>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Enter numbers separated by commas"
              value={inputValue}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                width: "300px",
                marginRight: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleArrayChange}
              style={{
                padding: "10px 20px",
                background: "#a0af50",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Set Array
            </button>
          </div>
          <SortVisualizer steps={steps} />
          <button
            onClick={() => visualizeSorting("bubble_sort")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#5c727d",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Bubble Sort
          </button>
        </div>
      </Container>
    </>
  );
};

export default AlgorithmVisualizer;
