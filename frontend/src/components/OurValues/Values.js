import React from 'react';
import './Values.css';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import Bootstrap components

const Values = () => {
  return (
    <Container fluid className="values-container">
      <Row className="justify-content-center">
        <Col lg={6} md={6} sm={12} className="left-box">
          <div className="box-content">
            <img src="/images/Group-1918.svg" alt="Image" />
            <div className="text-content">
              <h3 className='h3_main'>Commitment</h3>
              <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur Convallis vivamus</p>
            </div>
          </div>
          <div className="box-content">
            <img src="/images/Rectangle-547.svg" alt="Image" />
            <div className="text-content">
              <h3 className='h3_main'>Accessibility</h3>
              <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur Convallis vivamus</p>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="section-container">
          <h2 className="h2_main">OUR VALUES</h2>
          <h1 className="h1_main">My Work Values</h1>
          <div className="text-container">
            <p className="para_main">Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur in elementum placerat sed viverra risus in turpis vitae</p>
            <Button className="connect-button">Explore Courses</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Values;
