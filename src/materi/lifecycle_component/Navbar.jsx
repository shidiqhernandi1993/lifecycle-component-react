import React from "react";
import { Container, Navbar as NavbarBootstrap, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <NavbarBootstrap expand="lg" bg="light" className="shadow">
      <Container>
        <NavbarBootstrap.Brand className="fw-bold" href="#home">
          Shidiq Hernandi Andrian
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}
