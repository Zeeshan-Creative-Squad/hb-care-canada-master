import React, { useState } from 'react';
import axios from "axios"
import {Spinner} from "react-bootstrap"
import { Form, Button, Row, Col } from 'react-bootstrap';
import './ContactForm.css'; 






function ContactForm({ padding }) {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);



const formSubmitHandler = (e) => {
  e.preventDefault();
  setLoading(true);
  axios
    .post("/send-contact-form-main", {
      email: email,
      name:name,
      message:message,
      phoneNum:phone,
      formType: "Message genrated through Contact form",
    })
    .then((response) => {
      if (response.data.msg === "success") {
        setError(false);
        setSuccess("Message sent Successfully!");
        setLoading(false);
        setEmail("");
        window.open("/thank-you", '_blank');
      } else if (response.data.msg === "fail") {
        setSuccess(false);
        setError("Failed to send message, try again by reloading the page.");
        setLoading(false);
        setEmail("");
      }
    });
};


const handlePhoneChange = (e) => {
  const numericValue = e.target.value.replace(/\D/g, ''); 
  const maxLength = 25;


  if (numericValue.length <= maxLength) {
    setPhone(numericValue);
  }
};
const handleNameChange = (e) => {
  const inputValue = e.target.value;
  const regex = /^[a-zA-Z\s]*$/;

  if (regex.test(inputValue) || inputValue === '') {
    setName(inputValue);
  }
};




  return (
    <div className='contact-main' style={{ padding: padding }}>
      <div className="container contact-form-container">
        <Row className='flex-row-reverse flex-lg-row gy-4 text-center text-lg-start'>
          <Col lg={6} className="left-content">
            <h2 className="h2_main">LET'S CONNECT</h2>
            <h1 className="h1_main">Reach Out and Let's Chat!</h1>
            <p className="para_main">
            Got questions or want to learn more about our products and services? Get in touch with us today, and let's start a conversation about how HB Care can support your beauty, grooming and surgical products needs!
            </p>
          </Col>
          <Col lg={6}>
            <Form onSubmit={formSubmitHandler}>
              <Row className='gy-3'>
                <Col lg={6}>
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Your Full Name"  onChange={handleNameChange}/>
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Control type="text" placeholder="Your Phone Number"  onChange={handlePhoneChange}/>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formEmail" className='mt-4'>
                <Form.Control type="email" placeholder="Your Email Address"  onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formMessage" className='mt-5'>
                <Form.Control type='text' placeholder='Type Your Message' rows={3}  onChange={(e) => setMessage(e.target.value)}/>
              </Form.Group>
              <Button variant="dark" type="submit" className="mt-5 submit-button w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactForm;
