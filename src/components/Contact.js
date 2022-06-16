import React from "react";
import './Contact.css';
import { FaGoogle, FaPhoneAlt, FaMapMarker, FaMailBulk, FaLinkedinIn, FaInstagram, FaTwitter, FaPinterest, FaFacebook } from 'react-icons/fa'
import { Button, Row, Col } from 'react-bootstrap';
import Map from './Map';

const Contact = () => {
  return (
    <section >

      <div className="Upper-section ">
        <h3 className="text-white">Drop Us A Note</h3>
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.</p>
      </div>
      <div className="row d-flex bg-dark ">
        <Row className="d-flex  border justify-content-center p-5">
          <Col lg="5" md sm className="   mt-5">
            <input type="text" className=" form-control p-3" placeholder="Your Name" />
            <input type="email" className="form-control  p-3 mt-4" placeholder="Email" />
            <input type="text" className="form-control p-3 mt-4 " placeholder="Subject" />

          </Col>
          <Col  lg="5" md  sm className=" mt-5 ">
            <textarea type="text" id="w3review" name="w3review" className="form-control " rows="5" cols="50" placeholder="Message">
            </textarea>
            <Button type="button" className=" btn btn-secondary text-white  w-100 mt-3 p-3">Send Message</Button>
          </Col>
        </Row>
        <Row className=" border d-flex justify-content-center p-5">
          <Col  lg="5" md sm  className="  p-2  text-white">
            <h4 className="mb-4 me-2 text-secondary">Stop By For A visit<hr className="Hr-line"/></h4>
            <p className="text-secondary"><span className="me-3 text-secondary"><FaMapMarker /></span>North Main Street,Brooklyn Australia</p>
            <p className="text-secondary"> <span className="me-3 text-secondary"><FaMailBulk /></span>Email: contact@mail.com</p>
            <p className="text-secondary"><span className="me-3 text-secondary"><FaPhoneAlt /></span>Phone:+88 01672 506 744</p>

            <p>
              <span className="me-4"><FaGoogle className="text-secondary" /></span>
              <span className="me-4"><FaLinkedinIn className="text-secondary" /></span>
              <span className="me-4"><FaInstagram className="text-secondary" /></span>
              <span className="me-4"><FaTwitter className="text-secondary" /></span>
              <span className="me-4"><FaPinterest className="text-secondary" /></span>
              <span className="me-4"><FaFacebook className="text-secondary" /></span>
            </p>
          </Col>
          <Col lg="5" md sm className=" border ">
            
            <Map />
          </Col>
        </Row>





      </div>
    </section>
  );
}
export default Contact;


