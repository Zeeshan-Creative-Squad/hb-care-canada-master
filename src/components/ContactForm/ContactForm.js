import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './ContactForm.css'; // Add custom CSS for further styling

function ContactForm({ padding }) {
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
            <Form>
              <Row className='gy-3'>
                <Col lg={6}>
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Your Full Name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Control type="text" placeholder="Your Phone Number" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formEmail" className='mt-4'>
                <Form.Control type="email" placeholder="Your Email Address" />
              </Form.Group>
              <Form.Group controlId="formMessage" className='mt-5'>
                <Form.Control type='text' placeholder='Type Your Message' rows={3} />
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
