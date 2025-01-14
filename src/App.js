import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Login from './components/Login'; 
import Registration from './components/Registration'; 
import Home from './views/Home'; 
import AlgorithmVisualizer from "../src/Bubble Sort/AlgorithmVisualizer";
import QuickSort from "../src/Quick Sort/QuickSort";
import MergeSort from "../src/Merge Sort/Merge-sort";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/Bubble_sorting" element={<AlgorithmVisualizer />} /> 
        <Route path="/Quick_Sorting" element={<QuickSort />} /> 
        <Route path="/merge_Sorting" element={<MergeSort />} /> 
      </Routes>
    </div>
  );
}

export default App;
