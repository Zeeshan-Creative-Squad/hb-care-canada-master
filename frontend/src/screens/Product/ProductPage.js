import React from 'react';
import FooterHero from '../../components/Footer/footerHero';
import NavbarCS from '../../components/Header/NavbarCS';
import ProductHero from '../../components/Product/ProductHero';
import ProductGallery from '../../components/Gallery/ProductGallery';
import ContactForm from '../../components/ContactForm/ContactForm';

const ProductPage = () => {
  return (
    <div>
          <NavbarCS  />
          <ProductHero />
          <ProductGallery />
          <ContactForm />
      
      
      
     
     
      <FooterHero />
    </div>
  )
}

export default ProductPage