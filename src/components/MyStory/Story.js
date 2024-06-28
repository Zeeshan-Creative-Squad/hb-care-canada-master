import React from 'react';
import "./Story.css"

const Story = () => {
  return (
    <div className="container my-5 story-container">
      <div className="text-center mb-5">
        <h5 className="text-danger">My Story</h5>
        <h1 className='h1_main'>Moosa Khan Story</h1>
        <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur in <br/> elementum placerat sed viverra risus in turpis vitae sed est tincidunt vitae.</p>
      </div>
      <div className="row">
        <div className="col-lg-6 story-box">
          <div className="row">
            <div className='col-lg-6'>
            <div className="timeline-item">
              <h5 className="text-primary1">2023</h5>
              <p className='para_mainn'>Launched course #300</p>
              <p className='para_main'>Lorem ipsum dolor sit amet omerler consecte adipiscing elit sed do eiusmod tempor.</p>
            </div>
            </div>
            <div className='col-lg-6'>
            <div className="timeline-item">
              <h5 className="text-primary2">2022</h5>
              <p className='para_mainn'>Launched course #300</p>
              <p className='para_main'>Lorem ipsum dolor sit amet omerler consecte adipiscing elit sed do eiusmod tempor.</p>
            </div>
            </div>
            <div className='col-lg-6'>
            <div className="timeline-item">
              <h5 className="text-primary3">2023</h5>
              <p className='para_mainn'>Launched course #300</p>
              <p className='para_main'>Lorem ipsum dolor sit amet omerler consecte adipiscing elit sed do eiusmod tempor.</p>
            </div>
            </div>
            <div className='col-lg-6'>
            <div className="timeline-item">
              <h5 className="text-primary4">2022</h5>
              <p className='para_mainn'>Launched course #300</p>
              <p className='para_main'>Lorem ipsum dolor sit amet omerler consecte adipiscing elit sed do eiusmod tempor.</p>
            </div>
            </div>
            
            
            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-center">
            <img src="/images/Mask-Group-74.png" alt="Moosa Khan" className="img-fluid rounded story-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
