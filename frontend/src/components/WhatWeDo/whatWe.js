import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './whatWe.css'; // Import the external CSS file

const WhatWe = () => {
  return (
    <Container className="container container-custom">
      <Row className='align-items-center flex-row-reverse flex-md-row'>
        <Col md={4} className="text-md-left text-lg-left mb-4  text-center text-lg-start" style={{height: "fit-content" }}>
          <h6 className="h2-main">Value We Provide</h6>
          <h2 className="font-weight-bold-custom">To Our Customers</h2>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6} className="">
              <Card className="card-custom">
                <Card.Body>
                  <Card.Title className="card-title-custom">Premium Products</Card.Title>
                  <Card.Text className="card-text-custom para_main">
                  Experience our premium grooming essentials, crafted to enhance your skills and delight your clients with every cut.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="">
              <Card className="card-custom">
                <Card.Body>
                  <Card.Title className="card-title-custom">Exceptional Support</Card.Title>
                  <Card.Text className="card-text-custom para_main">
                  Experience peace of mind knowing that our dedicated support team is here to assist you 24/7 for your convenience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWe;
