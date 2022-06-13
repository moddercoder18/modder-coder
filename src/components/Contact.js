import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faWater} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-solid-svg-icons'



//import FeatureBG from './featue-bg.jpg'



const Contact = () => {
  return (
    <Container fluid="lg" className="border d-flex justify-content-center align-item-center" >
    <Row className="section-1" >
      <Row className="my-5">
      <h4 className="border ">Drop Us A Note</h4>
      <p className="border ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.</p>
      </Row>

      <Row className="my-5 ">

        <Col className="border border-dark mx-4">

          <input type="text" placeholder="Name" className="form-control  mt-1 p-3 bg-light border border-0" ></input>
          <input type="email" placeholder="Email" className="form-control  mt-3  p-3 bg-light border border-0"></input>
          <input type="text" placeholder="Subject" className="form-control mt-3 p-3  bg-light border border-0 "></input>


        </Col >
        <Col className="border border-dark mx-4">
          <textarea type="text" id="message" name="message" rows="5" cols="50" placeholder="Your message" className="form-control bg-light border border-0" ></textarea>
          <button className="btn btn-secondary w-100  mt-3 p-3" >Send message</button>
        </Col>

      </Row>

      <Row className="my-5 section-2">

        <Col className="mx-4 border border-dark ">
        <h2>Stop By For A visit</h2>
        <p className="fs-6">North Main Street,Brooklyn Australia</p>
        <p className="fs-6">Email: contact@mail.com</p>
        <p className="fs-6">Phone:+88 01672 506 744</p>
        <p><FontAwesomeIcon icon={faCoffee}/></p>
        <p><FontAwesomeIcon icon={faWater}/></p>

        
       

        </Col>
        <Col className="mx-4 border border-dark ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" 
        width="450" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </Col>

      </Row>

    </Row>
    </Container>
  );
}
export default Contact;