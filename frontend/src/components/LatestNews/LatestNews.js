import React from 'react';
import './LatestNews.css';

const LatestNews = ({
  img,
  title,
  content,
  anchor,
  redirectionFunction,
}) => {
  return (
    <div className="container latest-container">
    <div className="row">
      <div className="col-lg-6">
        <img src={img} alt="Haircut" className="img-responsive" />
      </div>
      <div className="col-lg-6">
        <h4 className='h2_main'>Latest News</h4>
        <h2 className='h1_main'>{title}</h2>
        <p className='para_main'>{content}</p>
        <p href="#" class="btn btn-link" onClick={()=>{redirectionFunction(anchor)}}>Read More<img src="images/Icon-akar-arrow-left.svg" className='arrow-img' alt="Arrow Icon" /></p>

      </div>
    </div>
  </div>
  )
}

export default LatestNews