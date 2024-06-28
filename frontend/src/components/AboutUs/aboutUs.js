import React from 'react';
import "./aboutUs.css"; 

const AboutUs = () => {
  return (
    <div className="container about-container">
      <div className="row">
        <div className="col-lg-6 left-section text-center text-lg-start">
          <h2 className='h2_main'>ABOUT HB CARE CANADA</h2>
          <h1 className='h1_main'>Your Partner in Grooming Success</h1>
          <p className='upper-paragraph para_main'>At HB Care, we're more than just a supplier of grooming products – we're your dedicated partner in grooming success. With over 13 years of industry experience, we've been running since 2011, and our passion for excellence and commitment to customer satisfaction remain as strong as ever. 
 We're here to support you every step of the way.
</p>
          <div className="d-flex flex-container">
            {/* <div className="image-container">
              
              
            </div> */}
            <div className="text-container">
              <div className='d-flex flex-column flex-lg-row gap-5  align-items-center align-items-lg-start text-center text-lg-start'>
              <img src="/images/Vision.png" alt="Logo 1" className='img1'  />
                <div>
                <h3 className='h3_main'>Vision</h3>
                <p className='para_main mb-0'>We aim to redefine the barbering experience by setting new standards in product quality, customer service, and industry innovation.</p>
                </div>
              </div>
              <div className='d-flex flex-column flex-lg-row gap-5  align-items-center align-items-lg-start text-center text-lg-start'>
              <img src="/images/Mission.png" alt="Logo 1" className='img2' />
              <div>
                <h3 className='h3_main'>Mission</h3>
                <p className='para_main'>At HB Care, we're dedicated to raising grooming standards by offering premium products and exceptional support to barbers .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 right-section">
          <img src="/images/about-side-img.png" alt="Large Image" className='large-img'/>  
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
