import React, { useState } from 'react';
import './ContactPage.css';
import axios from "axios"
import {Spinner} from "react-bootstrap"
import { Form, Button, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
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
            formType: "Message genrated through Main Contact form",
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
        <div className="important-section">
            <div className='container contact-container'>
                <div className="contact-info">
                    <h1>Get in Touch with Us Today!</h1>
                    <p>We're here to help you every step of the way. Reach out and let's make your barbering experience exceptional!</p>
                    <div className="contact-details gap-5">
                        <p><img src="/images/Group-2233.svg" alt="Phone" /> 647-836-6940,  289-275-5050</p>
                        <p><img src="/images/Group-2078.svg" alt="Email" className='location-icon' /> sales@hbcarecanada.com</p>
                        </div>
                        <div className='d-lg-flex'>
                        <p><img src="/images/Group-2081.svg" alt="Location" /> 50 Steeles Ave E, Unit 218, Milton ON L9T 4W9</p>
                    </div>
                    <div className="social-icons">
                        <img src="/images/Group-2236.svg" alt="YouTube" className="icon" />
                        <img src="/images/Group-2237.svg" alt="LinkedIn" className="icon" />
                        <img src="/images/Group-2238.svg" alt="Instagram" className="icon" />
                        <img src="/images/Group-2239.svg" alt="Facebook" className="icon" />
                    </div>
                </div>
                <div className="contact-form">
                    <h2 className='h1_main'>Let's Get in Touch!</h2>
                    <p className='para_main'>Let's discuss your project and find out what we.</p>
                    <Col lg={12}>
                        <Form onSubmit={formSubmitHandler}>
                            <Row className='gy-3'>
                                <Col lg={12}>
                                    <Form.Group controlId="formName">
                                        <Form.Control type="text" placeholder="Your Full Name" onChange={handleNameChange}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={12}>
                                    <Form.Group controlId="formPhoneNumber">
                                        <Form.Control type="text" placeholder="Your Phone Number" onChange={handlePhoneChange}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formEmail" className='mt-4'>
                                <Form.Control type="email" placeholder="Your Email Address" onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group controlId="formMessage" className='mt-5'>
                                <Form.Control type="text" placeholder='Type Your Message' rows={3} onChange={(e) => setMessage(e.target.value)}/>
                            </Form.Group>
                            <Button variant="dark" type="submit" className="mt-5 submit-button w-100">
                                Submit
                                {loading ? (
                                    <Spinner
                                        animation="border"
                                        role="status"
                                        style={{ color: "white" ,width:"15px",height:"15px",marginLeft:"10px"}}
                                    />
                                ) : (
                                success ? (
                                    <div>
                                    {setLoading(false)}
                                    {setSuccess(false)}
                                    </div>
                                ) : (
                                    error && (
                                    <div>
                                        {setLoading(false)}
                                        {alert(error)}
                                        {setError(false)}
                                    </div>
                                    )
                                )
                                )}
                            </Button>
                        </Form>
                    </Col>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
