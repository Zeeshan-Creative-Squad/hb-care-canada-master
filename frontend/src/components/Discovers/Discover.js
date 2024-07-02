import React from 'react';
import './Discover.css'; 
import { Navigate, useNavigate } from 'react-router-dom';

const services = [
  { title: 'Product Suppliers', description: 'Looking for the best tools of the trade? HB Care partners with top-notch product suppliers to bring you the finest haircutting and beauty saloon products salon products on the market. Whether you need high-quality clippers, precision scissors, or premium grooming products, we have got everything you need to keep your clients looking fresh and fabulous', icon: '/images/Supply.svg' },
  { title: 'Premium Product Providers', description: ' At HB Care, we believe that every beauty saloon deserves the best. Thats why we offer a selection of premium products designed to elevate your grooming experience. From professional-grade clippers to luxurious grooming essentials, our products are crafted with quality and precision in mind. Get ready to take your skills to the next level with HB Care.', icon: '/images/Premium-Products.svg' },
  { title: '24/7 Customer Support', description: 'Got a question or need assistance? Dont worry, we have got your back! At HB Care, our dedicated customer support team is available 24/7 to help you with any queries you may have. Whether you need product recommendations, troubleshooting assistance, or just a friendly chat, we are here to ensure that your experience with HB Care is nothing short of exceptional.', icon: '/images/24-7.svg' }
];



const Discover = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
};
  return (
    <div className="discover-background">
      <div className="container text-center my-5 discover-container">
        <h2 className="mb-3 head-h1">What We Offer</h2>
        <p className="mb-5 para_main">At HB Care, we're all about making Canadian barbers feel sharp and stylish! We provide premium haircutting and barber salon products that keep you <br/> looking your best. </p>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <img src={service.icon} className="card-img-top mb-3" alt={service.title} style={{width: '50px', height: '50px'}} />
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <a onClick={() => handleClick("/contact")}> <button class="primary-button">Learn More →</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
