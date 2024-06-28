import "./Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import 'swiper/css/pagination';

function Testimonials() {
  
  const testimonialData = [
    {clientName:"Emma S",clientImg:"/images/testimonials-client.png",clientReview:"HB Care has been a game-changer for my barbershop! Their products are top-notch, and their customer service is unmatched. I wouldn't trust my business with anyone else!"},
    {clientName:"David R",clientImg:"/images/testimonials-client.png",clientReview:"I've been using HB Care products for years, and they never disappoint. The quality is consistently excellent, and their support team is always there to help. Highly recommended!"},
    {clientName:"Sophia M",clientImg:"/images/testimonials-client.png",clientReview:"As a barber, I rely on top-quality tools to deliver exceptional results. HB Care provides exactly that and more. Their range of products has elevated my craft, and their customer service is second to none."},
    {clientName:"Olivia B",clientImg:"/images/testimonials-client.png",clientReview:"HB Care has exceeded my expectations in every way. From their fast shipping to their incredible product selection, I couldn't ask for more. I'm proud to be a part of the HB Care family!"},
   
  ]

  
  return (
    <div className="container Testimonials-container py-5">
      <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-md-12 text-center">
        <p className="sub-heading h2_main mb-2">Our Testimonials</p>
        <h3 className="text-center main-heading mb-4 h1_main pb-3">What Our Client Say</h3>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500,disableOnInteraction:false }}
            loop={true}
            modules={[Autoplay,Pagination]}
            observer ={true}
            observeParents={true}
            parallax={true}
            className="testimonials-list "
            id="articles-cards-slider"
            >
              {
                testimonialData.map((clientData,ind)=>{
                  return(<>
                    <SwiperSlide key={ind}>
                      <TestimonialCard clientImg={clientData.clientImg} clientName={clientData.clientName} clientReview={clientData.clientReview} />
                    </SwiperSlide>
                     </>)
                })
              }
        </Swiper>
        
      </div>
      </div>
  </div>
</div>
  )
}

export default Testimonials