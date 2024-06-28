import React from 'react';
import Aboutus from '../../components/AboutUs/aboutUs';
import FooterHero from '../../components/Footer/footerHero';

import NavbarCS from '../../components/Header/NavbarCS';
import StartToSuccessComponent from '../../components/StartToSuccess/StartToSuccessComponent ';
import Articles from '../../components/NewsAndArticles/Articles';
import HomeHero from '../../components/Home/homeHero';
import Testimonials from '../../components/OurTestimonials/Testimonials';
import WhatWeDo from '../../components/WhatWeDo/whatWe';
import MyServices from '../../components/MyServices/MyServices';
import OurServices from '../../components/OurServices/ourServices'
import ContactForm from '../../components/ContactForm/ContactForm'

const HomePage = () => {
  return (
    <div>
      
      <NavbarCS  />
      <HomeHero />
      <Aboutus />
      <OurServices />
      <Articles />
      
      <Testimonials />
      <ContactForm />
      
     
     
     
      <FooterHero />
    </div>
  )
}

export default HomePage;