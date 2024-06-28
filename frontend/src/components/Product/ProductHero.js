import React, { useState } from 'react';
import "./ProductHero.css";
import { Navigate, useNavigate } from 'react-router-dom';

const ProductHero = () => {
    const [activeButton, setActiveButton] = useState(1);
    const navigate = useNavigate();

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
      };

      
  return (
    <div className="product-hero">
      <div className="overlay">
        <div className="hero-content text-center">
          <h1>Product Gallery</h1>
          <p>Browse through our collection of premium grooming essentials, handpicked to meet the diverse needs of barbers across Canada. Get inspired and find the perfect tools to elevate your craft.</p>
          <div className="button-container">
  <a onClick={() => {navigate("/product")}}>
    <button
      className={`product-button ${activeButton === 1 ? 'active' : ''}`}
      onClick={() => handleButtonClick(1)}
    >
     Scissors
    </button>
  </a>
  <a onClick={() => {navigate("/product-gallery-one")}}>
    <button
      className={`product-button ${activeButton === 2 ? 'active' : ''}`}
      onClick={() => handleButtonClick(2)}
    >
     Foot Scrubber
    </button>
  </a>
  <a onClick={() => {navigate("/product-gallery-two")}}>
    <button
      className={`product-button ${activeButton === 3 ? 'active' : ''}`}
      onClick={() => handleButtonClick(3)}
    >
     Nail Care Tools
    </button>
  </a>
</div>
        </div>
      </div>
    </div>
  )
}

export default ProductHero