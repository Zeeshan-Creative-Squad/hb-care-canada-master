import React from "react";
import "./homeHero.css";
import { Navigate, useNavigate } from 'react-router-dom';


const HomeHero = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
};
  return (
    <>
      <div className="home-hero">
      <div className="Homehero-content-overlay">
        <div className="Homehero-content text-center">
          <h1>Welcome to HB Care  <br/> Your Source for Barbering Excellence!</h1>
          <p>Premium grooming essentials and unparalleled support, customized to elevate your craft and delight your clients. Join the HB Care family today and take your barbering game to new heights!</p>
          <a onClick={() => handleClick("/contact")}> <button className="connect-button">Let's Connect</button></a>
        </div>
      </div>
    </div>
  {/* <div className={styles.logosCont}>
    <Swiper
      loop={true}
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        778: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <img className="img-fluid" src="/images/top1.svg" alt="top1 img" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img className="img-fluid" src="/images/trustpilot.svg" alt="trustpilot img" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img className="img-fluid" src="/images/top2.svg" alt="top2 img" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img className="img-fluid" src="/images/bni.webp" alt="bni img" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img className="img-fluid" src="/images/clutch.svg" alt="clutch img" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          className="img-fluid"
          src="/images/googlepartner.svg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  </div> */}
  {/* Content Overlay */}



    </>
  );
};

export default HomeHero;
