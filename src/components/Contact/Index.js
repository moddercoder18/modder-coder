import React from "react";
import "../Contact/Index.css";
import { FaGoogle, FaPhoneAlt, FaMapMarkerAlt, FaMailBulk, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaFacebook } from 'react-icons/fa'
import { Button, Row, Col, Container, fluid, FormControl, Form } from 'react-bootstrap';
import { ImMail2 } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Map from './Map';

const Contact = () => {
  return (
    < Container fluid >
      <Row className="Upper-section ">
        <h3 className="text-white">Drop Us A Note</h3>
        <p className="fw-lighter text-white mt-2" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.</p>
      </Row>
      <Row lg="12" md sm className="d-flex bg-dark p-5 justify-content-center border align-item-center">
        <Col lg="5" md="5" sm="12" className=" border">
          <Form className="p-3">
            <FormControl type="text" className="p-3 " placeholder="Your Name" />
            <FormControl type="email" className="p-3 mt-4 " placeholder="Email" />
            <FormControl type="text" className=" p-3 mt-4 " placeholder="Subject" />
          </Form>
        </Col>
        <Col lg="5" md="5" sm="12" className="border ">
          <Form className="p-3">
            <textarea type="text" id="w3review" name="w3review" className="form-control p-3  " rows="4" cols="40" placeholder="Message">
            </textarea>
            <Button type="Submit" className=" btn btn-secondary text-white  w-100 ">Send Message</Button>
          </Form>
        </Col>
        <Col lg="5" md="5" sm="12" className="p-5 Second-section border">
          <h4 className="text-secondary">Stop By For A visit<hr/></h4>
          <p className="text-secondary icons"><span className="me-3 text-secondary"><FiMapPin /></span>North Main Street,Brooklyn Australia</p>
          <p className="text-secondary icons"><span className="me-3 text-secondary"><ImMail2 /></span>Email: contact@mail.com</p>
          <p className="text-secondary icons"><span className="me-3 text-secondary"><BsTelephone /></span>Phone:+88 01672 506 744</p>

          <p className="icons mt-3">
            <a href="https://www.google.com/"><span className="me-3"><FaGoogle className="text-secondary" /></span></a>
            <a href="https://www.linkedin.com/home"><span className="me-3"><FaLinkedin className="text-secondary" /></span></a>
            <a href="https://www.instagram.com/accounts/login/"><span className="me-4"><FaInstagram className="text-secondary" /></span></a>
            <a href="https://twitter.com/"><span className="me-3"><FaTwitter className="text-secondary" /></span></a>
            <a href="https://in.pinterest.com/login/"><span className="me-3"><FaPinterest className="text-secondary" /></span></a>
            <a href="https://www.facebook.com/"><span className="me-3"><FaFacebook className="text-secondary" /></span> </a>
          </p>

        </Col>
        <Col lg="5" md="5" sm="12" className="border p-5">
          <Map />
        </Col>
      </Row>

    </Container>
  );
}
export default Contact;


