import React from "react";
import Tree from "react-d3-tree";
import { Row, Col, Card } from "react-bootstrap";

const QuickSortVisualizer = ({ steps }) => {
  const generateTreeData = (array, pivot) => {
    if (!array || array.length === 0) return null;

    const buildTree = (arr) => {
      if (arr.length === 0) return null;

      const mid = Math.floor(arr.length / 2);
      const root = arr[mid];
      const left = arr.slice(0, mid);
      const right = arr.slice(mid + 1);

      return {
        name: `${root}`,
        attributes: { isPivot: root === pivot },
        children: [buildTree(left), buildTree(right)].filter(Boolean),
      };
    };

    return [buildTree(array)];
  };

  const renderStepText = (step, index) => {
    return (
      <div key={index} style={{ marginBottom: "10px" }}>
        <strong>Step {index + 1}:</strong>
        <p>Choose a Pivot: {step.pivot}</p>
        <p>Partition the Array:</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          {step.array.map((value, idx) => (
            <div
              key={idx}
              style={{
                display: "inline-block",
                padding: "10px",
                margin: "0 5px",
                border: "1px solid #000",
                backgroundColor: "#fff",
                color: "#000",
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
  };

  return (
    <>
      {steps.map((step, index) => (
        <Row key={index} className="mb-4">
          <Col md={6} lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>Step {index + 1}</Card.Title>
                <div style={{ height: "300px" }}>
                  <Tree
                    data={generateTreeData(step.array, step.pivot)}
                    orientation="vertical"
                    translate={{ x: 150, y: 50 }}
                    pathFunc="straight"
                    nodeSvgShape={{
                      shape: "circle",
                      shapeProps: {
                        r: 20,
                        fill: (node) =>
                          node.attributes?.isPivot ? "#ff6f61" : "#5c727d",
                        stroke: "#000",
                        strokeWidth: 1.5,
                      },
                    }}
                    styles={{
                      links: {
                        link: {
                          stroke: "#000",
                          strokeWidth: 1.5,
                        },
                      },
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={8}>
            <div>{renderStepText(step, index)}</div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default QuickSortVisualizer;
