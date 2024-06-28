import React from 'react';
import NavbarCS from '../../components/Header/NavbarCS';
import ContactPage from '../../components/ContactPage/ContactPage';
import FooterHero from '../../components/Footer/footerHero';

const ContactPageMain = () => {
  return (
    <div>
         <NavbarCS />
         <ContactPage />
         <FooterHero />
    </div>
  )
}

export default ContactPageMain