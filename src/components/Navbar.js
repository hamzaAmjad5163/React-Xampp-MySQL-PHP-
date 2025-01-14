import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartDiagram } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <FontAwesomeIcon
          icon={faChartDiagram}
          className="me-2"
          style={{ color: "#a0af50" }}
        />
        Sort
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Algorithms" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Bubble_sorting">
              Bubble Sorting
            </NavDropdown.Item>
            <NavDropdown.Item href="/Quick_Sorting">
              Quick Sorting
            </NavDropdown.Item>
            <NavDropdown.Item href="/merge_Sorting">
              Merge Sorting
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
