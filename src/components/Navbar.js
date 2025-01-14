import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="#home">MyNavbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Algorithms" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Bubble_sorting">Bubble Sorting</NavDropdown.Item>
            <NavDropdown.Item href="/Quick_Sorting">Quick Sorting</NavDropdown.Item>
            <NavDropdown.Item href="/merge_Sorting">Merge Sorting</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
