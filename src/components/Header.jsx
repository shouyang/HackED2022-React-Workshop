import React from "react";
import {
  Navbar,
  Nav
} from "react-bootstrap";

export function Header() {
  return (
    <Navbar>
      <Navbar.Brand> React-To-Do</Navbar.Brand>
      <Nav className="me-auto"></Nav>
    </Navbar>
  );
}
