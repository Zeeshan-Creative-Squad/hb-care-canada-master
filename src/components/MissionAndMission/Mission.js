import React from 'react';
import "./Mission.css"

const Mission = () => {
    return (
     
        <div className="container mission-container">
          <div className="row">
            <div className="col-lg-6 left-section">
              <h2 className='h2_main'>MISSION & MISSION</h2>
              <h1 className='h1_main'>Vision & Mission Of <br /> Chemistry with Moosa Khan</h1>
              {/* <p className='upper-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nisl non lacus lacinia condimentum. Sed commodo tortor id tellus varius, vel venenatis quam faucibus.</p> */}
              <div className="d-flex flex-container">
                
                <div className="text-container">
                  <div>
                    
                    <p className='para_main'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                  <br/>
                  
                   
                    <p className='para_main'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>

                    <button className='connect-button'>Explore Courses</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-section">
              <img src="/images/mosa-khan.png" alt="Large Image" className='large-img'/>  
            </div>
          </div>
        </div>
      );
    };

export default Mission