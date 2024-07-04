import {React, useState} from 'react';
import FooterHero from '../../components/Footer/footerHero';
import NavbarCS from '../../components/Header/NavbarCS';
import ProductHero from '../../components/Product/ProductHero';
import ProductGallery from '../../components/Gallery/ProductGallery';
import ContactForm from '../../components/ContactForm/ContactForm';

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const setter = (num) => {
    setActiveCategory(num)
  }

  return (
    <div>
          <NavbarCS  />
          <ProductHero currentNum={1}/>
          <ProductGallery />
          <ContactForm padding="0px"/>
      
      
      
     
     
      <FooterHero />
    </div>
  )
}

export default ProductPage