import React from "react";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import './Contact.css';
import { FaGoogle,FaPhoneAlt,FaMapMarker,FaMailBulk ,FaLinkedinIn,FaInstagram, FaTwitter,FaPinterest, FaFacebook} from 'react-icons/fa'
import { Container } from "react-bootstrap";



//import FeatureBG from './featue-bg.jpg'



const Contact = () => {
  return (
    <section className="border ">

      <div className="Upper-section border">
        <h3>Drop Us A Note</h3>
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.</p>
      </div>
      <div className="row border d-flex  ">
        <Container className="border  d-flex justify-content-center p-5">
          <div className="col-lg-4 col-md-12 d-grid me-4 mt-5">
            <input type="text" className=" form-control p-3" placeholder="Your Name" />
            <input type="email" className="form-control  p-3 mt-3" placeholder="Email" />
            <input type="text" className="form-control p-3 mt-3 " placeholder="Subject" />

          </div>
          <div className="col-lg-4  col-md-12 mt-5 ">
          <textarea id="w3review" name="w3review" className="form-control" rows="5" cols="50">
          </textarea>
          <button type="button" className="btn btn-secondary w-100 mt-3 p-3">Send Message</button>
                     </div>
        </Container>
        <Container className="border d-flex justify-content-center p-5">
        <div className="col-lg-4 col-md-12 border p-2 me-4">
          <h4 className="mb-4">Stop By For A visit</h4>
          <p ><span className="me-2"><FaMapMarker/></span>North Main Street,Brooklyn Australia</p>
          <p> <span className="me-2"><FaMailBulk/></span>Email: contact@mail.com</p>
          <p><span className="me-2"><FaPhoneAlt/></span>Phone:+88 01672 506 744</p>

          <p>
              <span className="me-5"><FaGoogle/></span>
              <span className="me-5"><FaLinkedinIn/></span>
              <span className="me-5"><FaInstagram/></span>
              <span className="me-5"><FaTwitter/></span>
              <span className="me-5"><FaPinterest/></span>
              <span className="me-5"><FaFacebook/></span>
          </p>
        </div>
        <div className="col-lg-4 col-md-12 border ">
          map
        </div>


        </Container>

            



      </div>
    </section>
  );
}
export default Contact;


