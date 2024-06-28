import React from 'react';
import './LatestNews.css';

const LatestNews = () => {
  return (
    <div className="container latest-container">
    <div className="row">
      <div className="col-lg-6">
        <img src="/images/Mask-Group-101.png" alt="Haircut" className="img-responsive" />
      </div>
      <div className="col-lg-6">
        <h4 className='h2_main'>Latest News</h4>
        <h2 className='h1_main'>How to design a simple, yet unique and memorable brand</h2>
        <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam Convallis vivamus at cras porta nibh velit aliquam</p>
        <a href="#" class="btn btn-link">Read More<img src="images/Icon-akar-arrow-left.svg" className='arrow-img' alt="Arrow Icon" />
</a>

      </div>
    </div>
  </div>
  )
}

export default LatestNews