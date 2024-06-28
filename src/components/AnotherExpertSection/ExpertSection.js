import React from 'react'

const ExpertSection = (  ) => {
  return (
    <div className="expert-container">
    <div className='container'>
      <div className="row">
        <div className="col-lg-6 left-section">
          <h1 className='headh1'>Our Diverse Portfolio
            </h1>
          <div className="d-flex flex-container">
            <div className="text-container">
              <div>
                <p className='para_main'>Discover the essence of barbering excellence with HB Care's diverse portfolio of premium grooming essentials. From state-of-the-art clippers to precision scissors and luxurious grooming products, each item in our collection is meticulously crafted to enhance your skills and delight your clients. 
Whether you're a seasoned professional or just starting your journey in the world of barbering, our portfolio offers everything you need to elevate your grooming experience to new heights. Experience our selection today and elevate your craft with HB Care.
</p>
                <br/>
                <button className='primary-button'>Let's Connect</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 right-section">
          <img src="/images/Our-Diverse-Portfolio.png" alt="Large Image" className='large-img'/>  
        </div>
      </div>
    </div>
  </div>
  )
}

export default ExpertSection