import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Tree from "react-d3-tree";

// Function to generate tree data for visualization
const generateTreeData = (steps) => {
  if (!steps || steps.length === 0) return [];

  const buildTree = (step) => {
    if (!step || !step.array) return null;

    const currentArray = step.array || [];
    const leftArray = step.left || [];
    const rightArray = step.right || [];

    const children = [];
    if (leftArray.length > 0) {
      children.push(buildTree({ array: leftArray, left: [], right: [] }));
    }
    if (rightArray.length > 0) {
      children.push(buildTree({ array: rightArray, left: [], right: [] }));
    }

    return {
      name: `${currentArray.join(", ")}`,
      children: children.filter(Boolean),
    };
  };

  return steps.map(step => buildTree(step));
};

// Merge Sort Visualizer component
const MergeSortVisualizer = ({ steps }) => {
  const renderStepText = (step, index) => {
    const arrayText = step?.array ? `[${step.array.join(", ")}]` : "undefined";
    const leftText = step?.left ? `[${step.left.join(", ")}]` : "undefined";
    const rightText = step?.right ? `[${step.right.join(", ")}]` : "undefined";
    const stageText = step?.stage ? step.stage : "undefined";

    return (
      <div key={index} style={{ marginBottom: "10px" }}>
        <strong>Step {index + 1} ({stageText}):</strong>
        <p>{`${arrayText} is divided into ${leftText} and ${rightText}.`}</p>
      </div>
    );
  };

  const renderFinalTree = (treeData, index) => {
    return (
      <Card key={index} style={{ marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title>Step {index + 1} Visualization:</Card.Title>
          <div style={{ height: "400px" }}>
            <Tree
              data={treeData}
              orientation="vertical"
              translate={{ x: 300, y: 50 }}
              pathFunc="straight"
              nodeSvgShape={{
                shape: "circle",
                shapeProps: {
                  r: 20,
                  fill: "#5c727d",
                  stroke: "#000",
                  strokeWidth: 1.5,
                },
              }}
            />
          </div>
        </Card.Body>
      </Card>
    );
  };

  if (!steps || steps.length === 0) {
    return <div>No steps to display.</div>; // Return a message if steps are undefined or empty
  }

  const treeData = generateTreeData(steps);

  return (
    <>
      <Row>
        {steps.map((step, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            {renderStepText(step, index)}
            {renderFinalTree(treeData[index], index)}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MergeSortVisualizer;
