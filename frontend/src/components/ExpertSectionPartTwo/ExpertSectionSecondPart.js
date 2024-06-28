import React from 'react';
import './ExpertSectionSecondPart.css';

const ExpertSectionSecondPart = () => {
  return (
    <div className="ExpertSecond-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 right-section">
            <img src="/images/Why-Choose-Us.png" alt="Large Image" className="large-img" />
          </div>
          <div className="col-lg-6 left-section">
            <h1 className="head-h1">Why Choose Us</h1>
            <div className="text-container">
              <p className="para_main">
              At HB Care, we're not just another supplier – we're your trusted partner in grooming success. With over a decade of industry expertise, we understand the unique needs of barbers across Canada. Our commitment to quality is unwavering, with a carefully crafted portfolio of premium products that deliver exceptional results. 
What sets us apart is our dedication to customer satisfaction, offering personalized support and guidance every step of the way. Choose HB Care and experience the difference for yourself – join us in raising the standard of barbering excellence.

              </p>
              <button className="primary-button">Let's Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertSectionSecondPart;
