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
      
         <Container fluid className="d-flex justify-content-between bg-light  text-dark  fw-bold text-capitalize  py-4 w-100" style={{paddingRight:'0', paddingLeft:'0'}}>
         <Navbar  expand="lg" className=" fixed-top bg-light  " style={{backgroundColor: 'white' ,width:'100%', margin:'auto'}}>
          
  
    <Navbar.Brand href="#home" style={{width:'40%'}}>
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
    <Navbar.Collapse id="basic-navbar-nav c">
      <Nav className="me-auto d-flex justify-content-flex-end  " style={{width:"60%" ,marginLeft:'20%'}} >
        <Nav.Link href="#home" className=" text-decoration-underline text-dark ms-4 fw-bold active" >HOME</Nav.Link>
        <NavDropdown title="PORTFOLIO" id="basic-nav-dropdown" className=" color ms-4 fw-bold" renderMenuOnMount={true}>
          <NavDropdown.Item href="#action/3.1" className=" c ">PORTFOLIO FILTER</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2 " className="c  ">PORTFOLIO SINGLE</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className=" c ">SUB MENU</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#SERVICE" className="ms-4 c text-dark">SERVICE</Nav.Link>
        <NavDropdown title="BLOG" id="basic-nav-dropdown" className="c scroll-smooth ms-4" renderMenuOnMount={true}>
          <NavDropdown.Item href="#action/3.1" className="c">BLOG GRID</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="c">BLOG SINGLE</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="c">BLOG RIGHT SIDEBAR</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="c">BLOG LEFT SIDEBAR</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="c">BLOG FULL WIDTH</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="c">SUB MENU</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="PAGES" className="c  ms-4" id="basic-nav-dropdown" renderMenuOnMount={true}>
          <NavDropdown.Item href="#action/3.1" className="c">ABOUT US</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="c">COMING SOON</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="c">404 PAGES</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="c">FAQ </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="c">PRICING TABLE </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#CONTACT" className="ms-4 c text-dark">CONTACT</Nav.Link>
        


      </Nav>
    </Navbar.Collapse>
    

</Navbar>


         </Container>
        
      )
}
export default Header;