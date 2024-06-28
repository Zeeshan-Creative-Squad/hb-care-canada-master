import React, { useState } from 'react';
import "./ProductGallery.css";
import { Prev } from 'react-bootstrap/esm/PageItem';
import Modal from '../Model/Modal';


const galleryImages = [
  "/images/gallery/Scissors/3-min.jpg",
  "/images/gallery/Scissors/4-min.jpg",
  "/images/gallery/Scissors/5-min.jpg",
  "/images/gallery/Scissors/6-min.jpg",
  "/images/gallery/Scissors/7-min.jpg",
  "/images/gallery/Scissors/8-min.jpg",
  "/images/gallery/Scissors/9-min.jpg",
  "/images/gallery/Scissors/10-min.jpg",
  "/images/gallery/Scissors/11-min.jpg",
  "/images/gallery/Scissors/12-min.jpg",
  "/images/gallery/Scissors/13-min.jpg",
  "/images/gallery/Scissors/14-min.jpg",
  "/images/gallery/Scissors/15-min.jpg",
  "/images/gallery/Scissors/16-min.jpg",
  "/images/gallery/Scissors/17-min.jpg",
  "/images/gallery/Scissors/18-min.jpg",
  "/images/gallery/Scissors/19-min.jpg",
  "/images/gallery/Scissors/20-min.jpg",
  "/images/gallery/Scissors/21-min.jpg",
  "/images/gallery/Scissors/22-min.jpg",
  
  "/images/gallery/Scissors/23-min.jpg",
  "/images/gallery/Scissors/24-min.jpg",
  "/images/gallery/Scissors/25-min.jpg",
  "/images/gallery/Scissors/26-min.jpg",
  "/images/gallery/Scissors/27-min.jpg",
  "/images/gallery/Scissors/28-min.jpg",
  "/images/gallery/Scissors/29-min.jpg",
  "/images/gallery/Scissors/30-min.jpg",
  "/images/gallery/Scissors/31-min.jpg",
  "/images/gallery/Scissors/32-min.jpg",
  "/images/gallery/Scissors/33-min.jpg",
  "/images/gallery/Scissors/34-min.jpg",
  "/images/gallery/Scissors/35-min.jpg",
  "/images/gallery/Scissors/36-min.jpg",
  "/images/gallery/Scissors/37-min.jpg",
  "/images/gallery/Scissors/38-min.jpg",
  "/images/gallery/Scissors/39-min.jpg",
  "/images/gallery/Scissors/40-min.jpg",
  "/images/gallery/Scissors/43-min.jpg",
  "/images/gallery/Scissors/44-min.jpg",
  "/images/gallery/Scissors/47-min.jpg",
  "/images/gallery/Scissors/48-min.jpg",
  "/images/gallery/Scissors/49-min.jpg",
  "/images/gallery/Scissors/55-min.jpg",
  "/images/gallery/Scissors/56-min.jpg",
  
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
    <div className='gallery-container'>
    <div className="container">

  
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
  </div>
  )
}

export default ProductGallery;