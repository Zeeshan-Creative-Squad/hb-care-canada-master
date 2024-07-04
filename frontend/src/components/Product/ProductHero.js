import React, { useState } from 'react';
import "./ProductHero.css";
import { useNavigate } from 'react-router-dom';

const ProductHero = ({currentNum}) => {
    const [activeButton, setActiveButton] = useState(currentNum);
    const navigate = useNavigate();

    const handleButtonClick = (buttonNumber, path) => {
        // setActiveButton(buttonNumber);
        navigate(path);
    };

    return (
        <div className='product-hero'>
        <div className="container">
            <div className="overlay">
                <div className="hero-content text-center">
                    <h1>Product Gallery</h1>
                    <p>Browse through our collection of premium grooming essentials, handpicked to meet the diverse needs of barbers across Canada. Get inspired and find the perfect tools to elevate your craft.</p>
                    <div className="button-container">
                        <button
                            className={`product-button ${activeButton === 1 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(1, "/barber-razors")}
                        >
                            Barber Razors
                        </button>
                        <button
                            className={`product-button ${activeButton === 2 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(2, "/barber-scissors")}
                        >
                            Barber Scissors
                        </button>
                        <button
                            className={`product-button ${activeButton === 3 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(3, "/eyebrow-tweezers")}
                        >
                            Eyebrow Tweezers
                        </button>
                        <button
                            className={`product-button ${activeButton === 4 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(4, "/eyelash-tweezers")}
                        >
                            Eyelash Tweezers
                        </button>
                        <button
                            className={`product-button ${activeButton === 5 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(5, "/nailcutting")}
                        >
                            NailCutting
                        </button>
                        </div>
                        <br/>
                        <div className="button-container">
                        <button
                            className={`product-button ${activeButton === 6 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(6, "/nailcutting-scissor")}
                        >
                            NailCutting Scissor
                        </button>
                        <button
                            className={`product-button ${activeButton === 7 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(7, "/nipper")}
                        >
                            Nippers
                        </button>
                        <button
                            className={`product-button ${activeButton === 8 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(8, "/pushers")}
                        >
                            Pushers
                        </button>
                        <button
                            className={`product-button ${activeButton === 9 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(9, "/medical-tools")}
                        >
                            Medical Tools
                        </button>
                        
                        <button
                            className={`product-button ${activeButton === 10 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(10, "/pedicure-footfilers")}
                        >
                            Pedicure FootFilers
                        </button>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductHero;
