import React from 'react';
import FooterHero from '../../components/Footer/footerHero';
import NavbarCS from '../../components/Header/NavbarCS';
import NewsAndUpdatesHero from '../../components/NewsAndUpdatesHero/NewsAndUpdatesHero';
import LatestNews from '../../components/LatestNews/LatestNews';
import CardGrid from '../../components/CardGrid/CardGrid';
import PaginationPage from '../../components/Paginations/PaginationPage';
import ContactForm from '../../components/ContactForm/ContactForm';


const NewsUpdatesPage = () => {
  return (
    <div>
      <NavbarCS  />
    <NewsAndUpdatesHero />
    <LatestNews />
    <CardGrid />
    <PaginationPage />
    <ContactForm padding="0px"/>
   
    





<FooterHero />
</div>
  )
}

export default NewsUpdatesPage