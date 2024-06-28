import React, { useState } from 'react';
import "./ProductGallery.css";
import { Prev } from 'react-bootstrap/esm/PageItem';
import Modal from '../Model/Modal';


const galleryImages = [
  "/gallery/scissors/3-min.jpg",
  "/gallery/scissors/4-min.jpg",
  "/gallery/scissors/5-min.jpg",
  "/gallery/scissors/6-min.jpg",
  "/gallery/scissors/7-min.jpg",
  "/gallery/scissors/8-min.jpg",
  "/gallery/scissors/9-min.jpg",
  "/gallery/scissors/10-min.jpg",
  "/gallery/scissors/11-min.jpg",
  "/gallery/scissors/12-min.jpg",
  "/gallery/scissors/13-min.jpg",
  "/gallery/scissors/14-min.jpg",
  "/gallery/scissors/15-min.jpg",
  "/gallery/scissors/16-min.jpg",
  "/gallery/scissors/17-min.jpg",
  "/gallery/scissors/18-min.jpg",
  "/gallery/scissors/19-min.jpg",
  "/gallery/scissors/20-min.jpg",
  "/gallery/scissors/21-min.jpg",
  "/gallery/scissors/22-min.jpg",
  
  "/gallery/scissors/23-min.jpg",
  "/gallery/scissors/24-min.jpg",
  "/gallery/scissors/25-min.jpg",
  "/gallery/scissors/26-min.jpg",
  "/gallery/scissors/27-min.jpg",
  "/gallery/scissors/28-min.jpg",
  "/gallery/scissors/29-min.jpg",
  "/gallery/scissors/30-min.jpg",
  "/gallery/scissors/31-min.jpg",
  "/gallery/scissors/32-min.jpg",
  "/gallery/scissors/33-min.jpg",
  "/gallery/scissors/34-min.jpg",
  "/gallery/scissors/35-min.jpg",
  "/gallery/scissors/36-min.jpg",
  "/gallery/scissors/37-min.jpg",
  "/gallery/scissors/38-min.jpg",
  "/gallery/scissors/39-min.jpg",
  "/gallery/scissors/40-min.jpg",
  "/gallery/scissors/43-min.jpg",
  "/gallery/scissors/44-min.jpg",
  "/gallery/scissors/47-min.jpg",
  "/gallery/scissors/48-min.jpg",
  "/gallery/scissors/49-min.jpg",
  "/gallery/scissors/55-min.jpg",
  "/gallery/scissors/56-min.jpg",
  
]




const ProductGallery = () => {
  const [visible, setVisible] = useState(10)
  const [show, setShow] = useState(false);
  const [img, SetImg] = useState("");
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
  
  function getClass(index, sequence) {
    return sequence.includes(index) ? 'special-class' : '';
  }

  const sequence = generateSequence(galleryImages.length)

  const handleloadmore = ()=> {
    setVisible((Prev) => Prev + 10)
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <div className="container gallery-container">

  
    <div className="gallery-section">
      <div className="gallery">
      <div className='d-flex flex-column flex-lg-row '>
        <div className="gallery-item ">
          <img src="/images/1.png" alt="Image 2" className="gallery-image2" onClick={()=> {
                setShow(true) ; SetImg("/images/1.png")
              }} />
        </div>
        <div className="gallery-item">
          <img src="/gallery/Scissors/2-min.png" alt="Image 1" className="gallery-image1" onClick={()=> {
                setShow(true) ; SetImg("/images/2.png")
              }} />
        </div>
        </div>
        
        <div className='gallery-transform w-100'>
          <div className='row gy-4'>
          {galleryImages.slice(0, visible).map((ele, index) => {
          return (
            <div className={`${sequence.includes(index)? "col-lg-7" : "col-lg-5"}`}>
              {/* <img src={ele} alt="Image 3" className="gallery-image" /> */}
              <div className='w-100 img-box' style={{backgroundImage:`url(${ele})`}} onClick={()=> {
                setShow(true) ; SetImg(ele)
              }}>
              </div>
            </div>
          )
          })}
           </div>
          {/* <div className='d-flex'>
        <div className="gallery-item">
          <img src="/images/cutting-3.png" alt="Image 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src="/images/cutting-4.png" alt="Image 3" className="gallery-image" />
        </div>
        </div>
        <div className='d-flex'>
        <div className="gallery-item">
          <img src="/gallery/5-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src="/gallery/6-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        </div>
        <div className='d-flex'>
        <div className="gallery-item">
          <img src="/gallery/7-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src="/gallery/8-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        </div>
        <div className='d-flex'>
        <div className="gallery-item">
          <img src="/gallery/9-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src="/gallery/10-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        </div>
        <div className='d-flex'>
        <div className="gallery-item">
          <img src="/gallery/11-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src="/gallery/12-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        </div>
        <div className='d-flex'>
        <div className="gallery-item">
          <img src="/gallery/13-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src="/gallery/14-min.jpg" alt="Image 3" className="gallery-image" />
        </div>
        </div> */}
        <div className='w-100 text-center'>
        <button className='primary-button my-5' onClick={handleloadmore}>Load more</button>
        </div>
        
        </div>
      </div>
    </div>
    <Modal 
    status={show}
    closeModal={closeModal}
    img={img}
    />
  </div>
  )
}

export default ProductGallery;