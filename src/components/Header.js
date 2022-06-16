import React from "react";
import './Header.css';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import logo from'./logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { BsList } from "react-icons/bs";
const Header = () => {
    return (
      
         <Container fluid className="d-flex justify-content-between   text-dark fw-bold text-capitalize  py-4 w-100" style={{paddingRight:'0', paddingLeft:'0'}}>
         <Navbar  expand="lg" style={{backgroundColor: 'white' ,width:'80%', margin:'auto'}}>
          
  
    <Navbar.Brand href="#home" style={{width:'30%'}}>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="151"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    </Navbar.Brand>
  
    
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto d-flex justify-content-right align-items-right" style={{width:"70%" ,marginLeft:'30%'}} >
        <Nav.Link href="#home" className=" text-decoration-underline text-dark ms-4" >HOME</Nav.Link>
        <NavDropdown title="PORTFOLIO" id="basic-nav-dropdown" className=" color ms-4">
          <NavDropdown.Item href="#action/3.1" className="  ">PORTFOLIO FILTER</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2 " className="  ">PORTFOLIO SINGLE</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="  ">SUB MENU</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#SERVICE" className="ms-4 text-dark">SERVICE</Nav.Link>
        <NavDropdown title="BLOG" id="basic-nav-dropdown" className="color  ms-4">
          <NavDropdown.Item href="#action/3.1" className="">BLOG GRID</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="">BLOG SINGLE</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="">BLOG RIGHT SIDEBAR</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="">BLOG LEFT SIDEBAR</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="">BLOG FULL WIDTH</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="">SUB MENU</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="PAGES" className="color  ms-4" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1" className="">ABOUT US</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="">COMING SOON</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="">404 PAGES</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="  ">FAQ </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="  ">PRICING TABLE </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#CONTACT" className="ms-4 text-dark">CONTACT</Nav.Link>


      </Nav>
    </Navbar.Collapse>
    

</Navbar>


         </Container>
      )
}
export default Header;