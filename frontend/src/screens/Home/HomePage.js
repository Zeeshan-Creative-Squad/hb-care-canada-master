import React from 'react';
import Aboutus from '../../components/AboutUs/aboutUs';
import FooterHero from '../../components/Footer/footerHero';
import NavbarCS from '../../components/Header/NavbarCS';
import Articles from '../../components/NewsAndArticles/Articles';

import Testimonials from '../../components/OurTestimonials/Testimonials';
import OurServices from '../../components/OurServices/ourServices'
import ContactForm from '../../components/ContactForm/ContactForm'
import HomeHero from '../../components/Home/homeHero'


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