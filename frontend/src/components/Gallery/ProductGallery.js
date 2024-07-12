import React, { useState } from 'react';
import "./ProductGallery.css";
import Modal from '../Model/Modal';

const galleryImages = [
  "/images/gallery/BarberRazors/3-min-min.jpg",
  "/images/gallery/BarberRazors/4-min-min.jpg",
  "/images/gallery/BarberRazors/5-min-min.jpg",
  "/images/gallery/BarberRazors/6-min-min.jpg",
  "/images/gallery/BarberRazors/7-min-min.jpg",
  "/images/gallery/BarberRazors/8-min-min.jpg",
  "/images/gallery/BarberRazors/9-min-min.jpg",
  "/images/gallery/BarberRazors/10-min-min.jpg",
  "/images/gallery/BarberRazors/11-min-min.jpg",
  "/images/gallery/BarberRazors/12-min-min.jpg",
  "/images/gallery/BarberRazors/13-min-min.jpg",
  "/images/gallery/BarberRazors/14-min-min.jpg",
  "/images/gallery/BarberRazors/15-min-min.jpg",
  "/images/gallery/BarberRazors/16-min-min.jpg",
  "/images/gallery/BarberRazors/17-min-min.jpg",
  "/images/gallery/BarberRazors/18-min-min.jpg",
  "/images/gallery/BarberRazors/19-min-min.jpg",
  "/images/gallery/BarberRazors/20-min-min.jpg"
];

const ProductGallery = () => {
  const [visible, setVisible] = useState(10); // Track how many images are visible
  const [show, setShow] = useState(false);
  const [img, SetImg] = useState("");

   // Function to generate sequence
   function generateSequence(limit) {
    const sequence = [];
    let index = 0;
    while (index < limit) {
      sequence.push(index);
      index += 3;
      if (index < limit) sequence.push(index);
      index += 1;
    }
    return sequence;
  }
  
  // Generate sequence based on galleryImages length
  const sequence = generateSequence(galleryImages.length);

  const handleloadmore = () => {
    setVisible(prevVisible => prevVisible + 10); // Increase visible images by 10
  }

  const closeModal = () => {
    setShow(false);
  }

  // Determine if "Load more" button should be visible
  const showLoadMoreButton = visible < galleryImages.length;

  return (
    <div className='gallery-container'>
      <div className="container">
        <div className="gallery-section">
          <div className="gallery">
            <div className='d-flex flex-column flex-lg-row '>
              <div className="gallery-item ">
                <img src="/images/gallery/BarberRazors/1-min-min.png" alt="Image 2" className="gallery-image2" onClick={() => {
                  setShow(true); SetImg("/images/gallery/BarberRazors/1-min-min.png")
                }} />
              </div>
              <div className="gallery-item">
                <img src="/images/gallery/BarberRazors/2-min-min.png" alt="Image 1" className="gallery-image1" onClick={() => {
                  setShow(true); SetImg("/images/gallery/BarberRazors/2-min-min.png")
                }} />
              </div>
            </div>

            <div className='gallery-transform w-100'>
              <div className='row gy-4'>
                {galleryImages.slice(0, visible).map((ele, index) => (
                  <div className={`col-lg-${sequence.includes(index) ? "7" : "5"}`} key={index}>
                    <div className='w-100 img-box' style={{backgroundImage:`url(${ele})`}} onClick={() => {
                      setShow(true); SetImg(ele)
                    }}>
                    </div>
                  </div>
                ))}
              </div>
              
              {showLoadMoreButton && (
                <div className='w-100 text-center'>
                  <button className='primary-button my-5' onClick={handleloadmore}>Load more</button>
                </div>
              )}
              
            </div>
          </div>
        </div>
        <Modal 
          status={show}
          closeModal={closeModal}
          img={img}
        />
      </div>
    </div>
  );
}

export default ProductGallery;
