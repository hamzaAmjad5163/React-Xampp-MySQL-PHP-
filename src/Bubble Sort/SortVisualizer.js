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
            const highlightedNodes =
                currentStep === index
                    ? [index, index + 1] 
                    : [];

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
                                            fill: (node) => (node.attributes.highlighted ? "#ff6f61" : "#5c727d"),
                                            stroke: (node) => (node.attributes.highlighted ? "#ff6f61" : "#000"),
                                            strokeWidth: (node) => (node.attributes.highlighted ? 3 : 1.5),
                                        },
                                    }}
                                    styles={{
                                        links: {
                                            link: {
                                                stroke: (linkData) => (linkData.target.attributes.highlighted ? "#ff6f61" : "#000"),
                                                strokeWidth: (linkData) => (linkData.target.attributes.highlighted ? 3 : 1.5),
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

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Bubble Sort Visualizer</h1>
            <Row>{renderSteps()}</Row>
            <div style={{ marginTop: "20px" }}>
                {/* <button
                    onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                    disabled={currentStep === 0}
                    style={{
                        padding: "10px 20px",
                        marginRight: "10px",
                        background: "#5c727d",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: currentStep === 0 ? "not-allowed" : "pointer",
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={() =>
                        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
                    }
                    disabled={currentStep === steps.length - 1}
                    style={{
                        padding: "10px 20px",
                        background: "#a0af50",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor:
                            currentStep === steps.length - 1 ? "not-allowed" : "pointer",
                    }}
                >
                    Next
                </button> */}
            </div>
        </div>
    );
};

export default SortVisualizer;
