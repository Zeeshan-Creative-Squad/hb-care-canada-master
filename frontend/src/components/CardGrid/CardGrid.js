import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CardGrid.css';

function CardGrid() {
  const cards = [
    {
      title: "How to design a simple, yet unique and memorable",
      text: "Latest News",
      image: "/images/basic.png", // replace with your image path
      link: "#"
    },
    {
      title: "How to design a simple, yet unique and memorable",
      text: "Latest News",
      image: "/images/basic.png", // replace with your image path
      link: "#"
    },
    {
      title: "How to design a simple, yet unique and memorable",
      text: "Latest News",
      image: "/images/basic.png", // replace with your image path
      link: "#"
    },
    {
      title: "How to design a simple, yet unique and memorable",
      text: "Latest News",
      image: "/images/basic.png", // replace with your image path
      link: "#"
    },
    {
      title: "How to design a simple, yet unique and memorable",
      text: "Latest News",
      image: "/images/basic.png", // replace with your image path
      link: "#"
    },
    {
      title: "How to design a simple, yet unique and memorable",
      text: "Latest News",
      image: "/images/basic.png", // replace with your image path
      link: "#"
    },
  ];

  return (
    <Container className='main-cardgrid'>
      <Row>
      {cards.map((card, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="mb-4">
            <Card style={{ border: 'none' }}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body className='card-body'>
                <Card.Subtitle className="mb-2 text-muted">{card.text}</Card.Subtitle>
                <Card.Title className='card-title'>{card.title}</Card.Title>
                <Card.Link className='href' href={card.link}>Read More →</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardGrid;
