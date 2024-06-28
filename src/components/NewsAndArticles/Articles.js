import React, { useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './Articles.css'; // Ensure you have your custom CSS for additional styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Pagination } from "swiper/modules";
import 'swiper/css/pagination';

const Articles = ({ backgroundColor }) => {
  const [startIndex, setStartIndex] = useState(0); // State to track the index of the first visible card

  // Function to move to the next set of cards (right arrow)
  const nextSlide = () => {
    if (startIndex + 2 < 3) { // Assuming there are 3 cards in total (change this if you have more cards)
      setStartIndex(prev => prev + 1);
    }
  };

  // Function to move to the previous set of cards (left arrow)
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  const blogData = [
    {Title:" Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi",blogImg:"/images/blog1.png"},
    {Title:" Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi",blogImg:"/images/blog2.png"},
    {Title:" Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi",blogImg:"/images/blog1.png"},
    {Title:" Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi",blogImg:"/images/blog2.png"},
   
   
  ]

  return (
    <div className='articles-container' style={{ backgroundColor: backgroundColor }}>
      <Container className="mt-5">
        {/* Slider buttons placed on the sides */}
        {/* <div className="slider-buttons left" onClick={prevSlide}>{'<'}</div>
        <div className="slider-buttons right" onClick={nextSlide}>{'>'}</div> */}

        <Row className="align-items-center mb-4 flex-row-reverse flex-lg-row">
          <Col xs={12} lg={6} className="mb-3 mb-md-0">
            <h2 className="h2_main">Latest News</h2>
            <h3 className="h1_main">News & Articles</h3>
            <p className="para_main">Expert Insights, Trend Updates. Stay Sharp with HB Care.</p>
          </Col>
          <Col xs={12} lg={6} className="d-flex justify-content-md-end justify-content-center">
            <div className="btn-container">
              <button className="primary-button">Our Blogs</button>
            </div>
          </Col>
        </Row>
        <Row>
        <Swiper
            spaceBetween={40}
            // slidesPerView={1}
            // pagination={{ clickable: true }}
            autoplay={{ delay: 1500,disableOnInteraction:false }}
            loop={true}
            modules={[Autoplay]}
            observer ={true}
            observeParents={true}
            parallax={true}
            className="testimonials-list "
            id="articles-cards-slider"

            breakpoints={{
              280: {
                slidesPerView: 1,
              },
              800:{
                slidesPerView: 2,
              },
              
              
            }}
            >
              {blogData.map((ele, index) => (
                <SwiperSlide>
                  <Col key={index} xs={12}>
              <Card className="mb-4 custom-card">
                <Card.Img variant="top" src={ele.blogImg} className="custom-card-img"/>
                <Card.Body className="custom-card-body">
                  <Card.Text className="custom-card-text">
                    {ele.Title}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a href="#" className="readmore-btn custom-card-link">Read More →</a>
                    <span className="text-muted">19, August, 23</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
                </SwiperSlide>
              ))}
              
              </Swiper>
          {/* Render only the cards based on startIndex */}
          {/* {[0, 1, 2].slice(startIndex, startIndex + 2).map((index) => (
            
          ))} */}
        </Row>
      </Container>
    </div>
  );
};

export default Articles;
