import React from 'react';
import './ExpertTeam.css'

const ExpertTeam = () => {
  return (
    <div className="expert-container">
    <div className='container'>
  <div className="row">
    <div className="col-lg-6 right-section">
      <img src="/images/Group-2184.png" alt="Large Image" className='large-img'/>  
    </div>
    <div className="col-lg-6 left-section">
      {/* <h2 className='secondary-h1'>OUR SERVICES</h2> */}
      <h1 className='head-h1'>Our Portfolio</h1>
      {/* <p className='upper-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nisl non lacus lacinia condimentum. Sed commodo tortor id tellus varius, vel venenatis quam faucibus.</p> */}
      <div className="d-flex flex-container">
        <div className="text-container">
          <div>
            <p className='para_main'>Discover the essence of barbering excellence with HB Care's diverse portfolio of premium grooming essentials. From state-of-the-art clippers to precision scissors and luxurious grooming products, each item in our collection is meticulously crafted to enhance your skills and delight your clients. <br/>
Whether you're a seasoned professional or just starting your journey in the world of barbering, our portfolio offers everything you need to elevate your grooming experience to new heights. Experience our selection today and elevate your craft with HB Care.
</p>
            <br/>
            {/* <p className='para_main'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p> */}
            <button className='primary-button'>Let's Connect</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
);
};

export default ExpertTeam