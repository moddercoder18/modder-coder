import React from "react";
import './Contact.css';
import { FaGoogle, FaPhoneAlt, FaMapMarkerAlt, FaMailBulk, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaFacebook } from 'react-icons/fa'
import { Button, Row, Col } from 'react-bootstrap';
import { ImMail2 } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

import Map from './Map';

const Contact = () => {
  return (
    <section >

      <div className="Upper-section ">
        <h3 className="text-white">Drop Us A Note</h3>
        <p className="fw-lighter text-white mt-2" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.</p>
      </div>
      <div className="row d-flex  ">
        <Row className="d-flex   justify-content-center p-5">
          <Col lg="5" md sm className="   mt-5">
            <input type="text" className=" form-control p-3 " placeholder="Your Name"/>
            <input type="email" className="form-control  p-3 mt-4 " placeholder="Email" />
            <input type="text" className="form-control p-3 mt-4 " placeholder="Subject" />

          </Col>
          <Col lg="5" md sm className=" mt-5 ">
            <textarea type="text" id="w3review" name="w3review" className="form-control   " rows="5" cols="50" placeholder="Message">
            </textarea>
            <Button type="Submit"  className=" btn btn-secondary text-white  w-100 mt-3 p-3">Send Message</Button>
          </Col>
        </Row>
        <Row className="  d-flex justify-content-center p-5">
          <Col lg="5" md sm className="  p-2  text-white">
            <h4 className="mb-4 me-2 text-secondary">Stop By For A visit<hr className="Hr-line" /></h4>
            <p className="text-secondary"><span className="me-3 text-secondary"><FiMapPin /></span>North Main Street,Brooklyn Australia</p>
            <p className="text-secondary"> <span className="me-3 text-secondary"><ImMail2 /></span>Email: contact@mail.com</p>
            <p className="text-secondary"><span className="me-3 text-secondary"><BsTelephone /></span>Phone:+88 01672 506 744</p>

            <p className="icons">
                  <a href="https://www.google.com/"><span className="me-4"><FaGoogle className="text-secondary" /></span></a>
                  <a href="https://www.linkedin.com/"><span className="me-4"><FaLinkedin className="text-secondary" /></span></a>
                  <a href="https://www.instagram.com/accounts/login/"><span className="me-4"><FaInstagram className="text-secondary" /></span></a>
                  <a href="https://twitter.com/"><span className="me-4"><FaTwitter className="text-secondary" /></span></a>             
                  <a href="https://in.pinterest.com/login/"><span className="me-4"><FaPinterest className="text-secondary" /></span></a>
                  <a href="https://www.facebook.com/"><span className="me-4"><FaFacebook className="text-secondary" /></span> </a>            
            </p>
             
          </Col>
          <Col lg="5" md sm className="  ">

            <Map />
          </Col>
        </Row>





      </div>
    </section>
  );
}
export default Contact;


