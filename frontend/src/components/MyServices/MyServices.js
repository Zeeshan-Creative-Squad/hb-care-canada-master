import React from 'react';
import './MyServices.css';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import Bootstrap components
import { useNavigate } from 'react-router-dom';

const cardData = [
    {
        icon: "/images/Group-1918.svg",
        title: "Commitment",
        content: "We create memorable brands that resonate with your audience. From logo design to complete brand identities, our team crafts visuals that tell your unique story.",
        link: "#",
    },
    {
        icon: "/images/Rectangle-547.svg",
        title: "Accessibility",
        content: "Our websites are built to impress and perform. We design and develop fast, secure, and user-friendly websites customized to meet your business goals.",
        link: "#",
    },
    {
        icon: "/images/Group-1918.svg",
        title: "E-Commerce Development",
        content: "Sell with ease and confidence. We develop powerful e-commerce platforms that offer seamless shopping experiences for your customers and efficient management tools for you.",
        link: "#",
    },
    {
        icon: "/images/Rectangle-547.svg",
        title: "Application Development",
        content: "Turn your ideas into reality with our custom app development. We build applications that are intuitive, reliable, and accessible across all devices.",
        link: "#",
    },
    // {
    //     icon: "/images/icons/service-card-4.png",
    //     title: "Ui/Ux Development",
    //     content: "Enhance user satisfaction with our expert UI/UX design. We create intuitive interfaces that ensure your digital products are a joy to use.",
    //     link: "#",
    // },
];

function ServiceCard({ icon, title, content, link = "#" }) {
    const navigate = useNavigate();

    return (
        <div className='service-card-container p-4 mb-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 icon-container d-flex'>
                <img 
                            className='img-fluid values-image' 
                            alt='service icon' 
                            src={icon} 
                            onClick={() => { navigate(link) }} 
                            style={{ cursor: 'pointer' }}
                        />
                </div>
                <div className='col-lg-9'>
                    <h3 className={`card-title h3_main mb-3 ${title === "Branding" ? "color-red" : "color-white"}`}>{title}</h3>
                    <p className='body-paragraph card-content my-1 para_main'>{content}</p>
                </div>
            </div>
        </div>
    </div>
);
}

function MyServices() {
  return (
    <Container fluid className="MyServices-container py-5">
      <Row className="justify-content-center">
        <Col lg={6} md={6} sm={12} className="sliding-card">
          <div className='card-sized-box'>
            {cardData.map((ele, index) => (
              <ServiceCard
                key={index}
                icon={ele.icon}
                title={ele.title}
                content={ele.content}
                link={ele.link}
              />
            ))}
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="text-content text-center text-lg-start">
          <h2 className="h2_main">OUR VALUES</h2>
          <h1 className="h1_main">My Work Values</h1>
          <div className="text-container">
            <p className="para_main">Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam  ultrices sit cras nascetur in elementumplacerat sed viverra risus in turpis vitae</p>
            <button className="connect-button">Explore Courses</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyServices;
