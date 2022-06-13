import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import logo from'./logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Container>
            
  <Navbar bg="light" className=" p-4 border border-dark ">
    <Row className="d-flex border border-dark">
    <Col lg={3} className="border border-dark mr-5 ">
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="151"
        height="41"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    </Col>
    <Col lg={3}></Col>
    <Col lg={6} className="border border-dark ml-5 ">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">HOME</Nav.Link>
      <NavDropdown title="PORTFOLIO" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">SERVICE</Nav.Link>
      <NavDropdown title="BLOG" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="PAGES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">CONTACT</Nav.Link>

    </Nav>
    
  </Navbar.Collapse>
    </Col>
    </Row>
  </Navbar>
  
</Container>
    )
}
export default Header;