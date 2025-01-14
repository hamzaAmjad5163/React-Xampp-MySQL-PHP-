import React, { useState } from "react";
import Tree from "react-d3-tree";
import { Row, Col, Card } from "react-bootstrap";
import "../App.css";

const SortVisualizer = ({ steps }) => {
  const [currentStep] = useState(0);

  const generateTreeData = (step, highlightedNodes) => {
    const array = step || [];
    const treeData = {
      name: "Array",
      children: array.map((value, index) => ({
        name: `${value}`,
        attributes: {
          highlighted: highlightedNodes.includes(index),
        },
      })),
    };
    return [treeData];
  };

  const renderSteps = () => {
    return steps.map((step, index) => {
      const highlightedNodes = currentStep === index ? [index, index + 1] : [];

      const treeData = generateTreeData(step, highlightedNodes);

      return (
        <Col md={6} lg={4} key={index}>
          <Card
            className={`mb-4 ${currentStep === index ? "border-primary" : ""}`}
          >
            <Card.Body>
              <Card.Title>Step {index + 1}</Card.Title>
              <div style={{ height: "300px" }}>
                <Tree
                  data={treeData}
                  orientation="vertical"
                  translate={{ x: 150, y: 50 }}
                  pathFunc="straight"
                  nodeSvgShape={{
                    shape: "circle",
                    shapeProps: {
                      r: 20,
                      fill: (node) =>
                        node.attributes.highlighted ? "#ff6f61" : "#5c727d",
                      stroke: (node) =>
                        node.attributes.highlighted ? "#ff6f61" : "#000",
                      strokeWidth: (node) =>
                        node.attributes.highlighted ? 3 : 1.5,
                    },
                  }}
                  styles={{
                    links: {
                      link: {
                        stroke: (linkData) =>
                          linkData.target.attributes.highlighted
                            ? "#ff6f61"
                            : "#000",
                        strokeWidth: (linkData) =>
                          linkData.target.attributes.highlighted ? 3 : 1.5,
                      },
                    },
                    nodes: {
                      node: {
                        circle: {
                          stroke: "#000",
                          strokeWidth: 1.5,
                        },
                      },
                    },
                  }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  const renderStepText = () => {
    return steps.map((step, index) => {
      // Identify the indices that will be swapped in the next step
      const nextStep = steps[index + 1];
      const swapIndices = [];
      if (nextStep) {
        for (let i = 0; i < step.length; i++) {
          if (step[i] !== nextStep[i]) {
            swapIndices.push(i);
          }
        }
      }

      return (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>Step {index + 1}:</strong>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5px",
            }}
          >
            {step.map((value, idx) => (
              <div
                key={idx}
                style={{
                  display: "inline-block",
                  padding: "10px",
                  margin: "0 5px",
                  border: swapIndices.includes(idx)
                    ? "2px solid #ff6f61"
                    : "1px solid #000",
                  backgroundColor: swapIndices.includes(idx)
                    ? "#ff6f61"
                    : "#fff",
                  color: swapIndices.includes(idx) ? "#fff" : "#000",
                  borderRadius: "5px",
                  minWidth: "30px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Bubble Sort Visualizer</h1>
      <Row>{renderSteps()}</Row>
      <div style={{ marginTop: "20px" }}>{renderStepText()}</div>
    </div>
  );
};

export default SortVisualizer;
