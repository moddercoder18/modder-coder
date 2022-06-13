import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Contact.css';
//import { Container } from "react-bootstrap";
//import FeatureBG from './featue-bg.jpg'



const Contact = () => {
  return (
    <Container fluid="lg" className="border d-flex justify-content-center align-item-center" >
    <Row className="section-1" >
      <Row className="my-5">
      <h4 className="border ">Drop Us A Note</h4>
      <p className="border ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.</p>
      </Row>

      <Row className="my-5">

        <Col>

          <input type="text" placeholder="Name" className="form-control mb-3 p-3  bg-light border border-0" ></input>
          <input type="email" placeholder="Email" className="form-control mb-3 p-3 bg-light border border-0"></input>
          <input type="text" placeholder="Subject" className="form-control p-3 bg-light border border-0 "></input>


        </Col>
        <Col>
          <textarea type="text" id="message" name="message" rows="5" cols="50" placeholder="Your message" className="form-control bg-light border border-0" ></textarea>
         <button className="btn btn-secondary w-100 p-3 mt-3" >Send message</button>
        </Col>

      </Row>

      <Row className="my-5 section-2">

        <Col >
        <h2>Stop By For A visit</h2>
        <p>North Main Street,Brooklyn Australia</p>
        <p>Email: contact@mail.com</p>
        <p>Phone:+88 01672 506 744</p>
        <Row>
        
        </Row>

        </Col>
        <Col>
          <textarea type="text" id="message" name="message" rows="5" cols="50" placeholder="Your message" className="form-control" ></textarea>
         <button className="btn btn-secondary w-100 p-3 mt-3" >Send message</button>
        </Col>

      </Row>

    </Row>
    </Container>
  );
}
export default Contact;