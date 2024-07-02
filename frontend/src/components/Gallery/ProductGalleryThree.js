import React, { useState } from 'react';
import "./ProductGallery.css";
import { Prev } from 'react-bootstrap/esm/PageItem';
import Modal from '../Model/Modal';
import NavbarCS from '../Header/NavbarCS';
import ProductHero from '../Product/ProductHero';
import FooterHero from '../../components/Footer/footerHero';


const galleryImages = [

    "/images/gallery/EyelashExtensionsTweezers/3-min.jpg",
    "/images/gallery/EyelashExtensionsTweezers/4-min.jpg",
    "/images/gallery/EyelashExtensionsTweezers/5-min.jpg",
    "/images/gallery/EyelashExtensionsTweezers/6-min.jpg",
    "/images/gallery/EyelashExtensionsTweezers/7-min.jpg",
    "/images/gallery/EyelashExtensionsTweezers/8-min.jpg",
    "/images/gallery/EyelashExtensionsTweezers/9-min.jpg",
    "/images/gallery/EyelashExtensionsTweezers/10-min.jpg",
    "/images/gallery/EyelashExtensionsTweezers/11-min.jpg",
  
  
 
  
]




const ProductGalleryThree = () => {
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
    <>
   <NavbarCS />
   <ProductHero />


    <div className='gallery-container'>
    <div className="container">

  
    <div className="gallery-section">
      <div className="gallery">
      <div className='d-flex flex-column flex-lg-row '>
        <div className="gallery-item ">
          <img src="/images/gallery/EyelashExtensionsTweezers/1-min.png" alt="Img 2" className="gallery-image2" onClick={()=> {
                setShow(true) ; SetImg("/images/gallery/EyelashExtensionsTweezers/1-min.png")
              }} />
        </div>
        <div className="gallery-item">
          <img src="/images/gallery/EyelashExtensionsTweezers/2-min.png" alt="Img 1" className="gallery-image1" onClick={()=> {
                setShow(true) ; SetImg("/images/gallery/EyelashExtensionsTweezers/2-min.png")
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
  <FooterHero />
  </div>
  </>
  )
}

export default ProductGalleryThree;