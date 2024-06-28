import React from 'react';
import './ContactPage.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
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
                        <Form>
                            <Row className='gy-3'>
                                <Col lg={12}>
                                    <Form.Group controlId="formName">
                                        <Form.Control type="text" placeholder="Your Full Name" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12}>
                                    <Form.Group controlId="formPhoneNumber">
                                        <Form.Control type="text" placeholder="Your Phone Number" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formEmail" className='mt-4'>
                                <Form.Control type="email" placeholder="Your Email Address" />
                            </Form.Group>
                            <Form.Group controlId="formMessage" className='mt-5'>
                                <Form.Control type="text" placeholder='Type Your Message' rows={3} />
                            </Form.Group>
                            <Button variant="dark" type="submit" className="mt-5 submit-button w-100">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
