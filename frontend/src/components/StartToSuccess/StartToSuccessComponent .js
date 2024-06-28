import React from 'react';
import styles from './StartToSuccessComponent.module.css';

const StartToSuccessComponent = () => {
  return (
    <div className="container success-container">
  <div className="row">
  <div className="col-12 col-lg-6 text-center mb-3 mb-lg-0 left-section">
          <h2 className='h2_main'>Start to Success</h2>
          <h1 className='h1_main'>Why study with Sir Moosa Khan</h1>
          <p className='para_main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end">
          <div className="btn-container">
            <button className="connect-button">Enrolled Now</button>
    </div>
</div>



  </div>
    
      <div className={styles.testimonials}>
  <div className={styles.testimonial}>
    <div className={styles.imageWrapper}>
      <img src="/images/Group-518.svg" alt="Testimonial" />
    </div>
    <h3 className='h3_main'>Clear your concepts</h3>
    <p className='para_main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div className={styles.testimonial}>
    <div className={styles.imageWrapper}>
      <img src="/images/Group-519.svg" alt="Testimonial" />
    </div>
    <h3 className='h3_main'>Clear your concepts</h3>
    <p className='para_main'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
  </div>
  <div className={styles.testimonial}>
    <div className={styles.imageWrapper}>
      <img src="/images/Group-520.svg" alt="Testimonial" />
    </div>
    <h3 className='h3_main'>Clear your concepts</h3>
    <p className='para_main'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
  </div>
</div>

    </div>
  );
};

export default StartToSuccessComponent;
