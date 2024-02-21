import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar-color">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{ justifyContent: "center" }}>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <NavDropdown title="Brand" id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/brand/sony">
              Sony
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brand/samsung">
              Samsung
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brand/LG">
              Life Good
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brand/xiaomi">
              Xiaomi
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brand/realme">
              Realme
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brand/oneplus">
              One Plus
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Form className="d-flex" style={{ marginLeft: "40px" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "auto" }}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
