import React, { useState } from 'react';
import "./ProductGallery.css";
import Modal from '../Model/Modal';
import NavbarCS from '../Header/NavbarCS';
import ProductHero from '../Product/ProductHero';
import ContactForm from '../../components/ContactForm/ContactForm'
import FooterHero from '../../components/Footer/footerHero';

const galleryImages = [
  "/images/gallery/PedicureFootFilers/4-min-min.jpg",
  "/images/gallery/PedicureFootFilers/5-min-min.jpg",
  "/images/gallery/PedicureFootFilers/6-min-min.jpg",
  "/images/gallery/PedicureFootFilers/7-min-min.jpg",
  "/images/gallery/PedicureFootFilers/8-min-min.jpg",
];

const ProductGalleryNine = () => {
  const [visible, setVisible] = useState(10);
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

 
  const sequence = generateSequence(galleryImages.length);

  
  const handleLoadMore = () => {
    setVisible(prevVisible => prevVisible + 10);
  }

 
  const closeModal = () => {
    setShow(false);
  }

 
  const showLoadMoreButton = visible < galleryImages.length;

  return (
    <>
      <NavbarCS />
      <ProductHero currentNum={10}/>

      <div className='gallery-container'>
        <div className="container">
          <div className="gallery-section">
            <div className="gallery">
              <div className='d-flex flex-column flex-lg-row '>
                <div className="gallery-item ">
                  <img src="/images/gallery/PedicureFootFilers/1-min-min.png" alt="Img 2" className="gallery-image2" onClick={() => {
                    setShow(true); SetImg("/images/gallery/PedicureFootFilers/1-min-min.png")
                  }} />
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery/PedicureFootFilers/2-min-min.png" alt="Img 1" className="gallery-image1" onClick={() => {
                    setShow(true); SetImg("/images/gallery/PedicureFootFilers/2-min-min.png")
                  }} />
                </div>
              </div>

              <div className='gallery-transform w-100'>
                <div className='row gy-4'>
                  {galleryImages.slice(0, visible).map((ele, index) => (
                    <div className={`col-lg-${sequence.includes(index) ? "7" : "5"}`} key={index}>
                      <div className='w-100 img-box' style={{ backgroundImage: `url(${ele})` }} onClick={() => {
                        setShow(true); SetImg(ele)
                      }}>
                      </div>
                    </div>
                  ))}
                </div>

                {showLoadMoreButton && (
                  <div className='w-100 text-center'>
                    <button className='primary-button my-5' onClick={handleLoadMore}>Load more</button>
                  </div>
                )}

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
      <ContactForm padding="0px"/>
      <FooterHero />
    </>
  )
}

export default ProductGalleryNine;
