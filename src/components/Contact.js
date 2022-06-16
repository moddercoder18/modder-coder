import React from "react";
import './Contact.css';
import { FaGoogle,FaPhoneAlt,FaMapMarker,FaMailBulk ,FaLinkedinIn,FaInstagram, FaTwitter,FaPinterest, FaFacebook} from 'react-icons/fa'
import { Container , Button } from 'react-bootstrap';








const Contact = () => {
  return (
    <section className=" ">

      <div className="Upper-section ">
        <h3>Drop Us A Note</h3>
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.</p>
      </div>
      <div className="row  d-flex bg-dark ">
        <Container className="  d-flex justify-content-center p-5">
          <div className="col-lg-4 col-md-12 d-grid me-4 mt-5">
            <input type="text" className=" form-control p-3" placeholder="Your Name" />
            <input type="email" className="form-control  p-3 mt-4" placeholder="Email" />
            <input type="text" className="form-control p-3 mt-4 " placeholder="Subject" />

          </div>
          <div className="col-lg-4  col-md-12 mt-5 ">
          <textarea type="text" id="w3review" name="w3review" className="form-control " rows="5" cols="50" placeholder="Message">
          </textarea>
          <Button type="button" className=" btn btn-secondary text-white  w-100 mt-3 p-3">Send Message</Button>
                     </div>
        </Container>
        <Container className=" d-flex justify-content-center p-5">
        <div className="col-lg-4 col-md-12  p-2 me-4 text-white">
          <h4 className="mb-4 me-2">Stop By For A visit</h4>
          <p ><span className="me-3"><FaMapMarker/></span>North Main Street,Brooklyn Australia</p>
          <p> <span className="me-3"><FaMailBulk/></span>Email: contact@mail.com</p>
          <p><span className="me-3"><FaPhoneAlt/></span>Phone:+88 01672 506 744</p>

          <p>
              <span className="me-5"><FaGoogle className="FaGoogle"/></span>
              <span className="me-5"><FaLinkedinIn/></span>
              <span className="me-5"><FaInstagram/></span>
              <span className="me-5"><FaTwitter/></span>
              <span className="me-5"><FaPinterest/></span>
              <span className="me-5"><FaFacebook/></span>
          </p>
        </div>
        <div className="col-lg-4 col-md-12  ">
        <h1>map</h1>
        </div>


        </Container>

            



      </div>
    </section>
  );
}
export default Contact;


