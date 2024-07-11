import React from 'react';
import FooterHero from '../../components/Footer/footerHero';
import NavbarCS from '../../components/Header/NavbarCS';
import Mission from '../../components/MissionAndMission/Mission';
// import Values from '../../components/OurValues/Values';
import Story from '../../components/MyStory/Story';
import MyServices from '../../components/MyServices/MyServices';
import AboutHero from '../../components/About/AboutHero';
import DiscoverServices from '../../components/DiscoverServicesSection/DiscoverServices';
import AboutUs from '../../components/AboutUs/aboutUs';
import TeamMembers from '../../components/TeamMembers/teamMembers'
import WhatWeDo from '../../components/WhatWeDo/whatWe';
import ContactForm from '../../components/ContactForm/ContactForm';







const AboutPage = () => {
  return (
    <div>
        <NavbarCS />
        <AboutHero content="About HB Care Canada" paragragh="Discover our commitment to raising grooming standards through premium products and unparalleled support for barbers across North America."/>
        <AboutUs />
        <TeamMembers />
        <WhatWeDo />
        {/* <DiscoverServices /> */}
        
        {/* <Mission /> */}
        {/* <MyServices /> */}
        {/* <Values /> */}
        {/* <Story /> */}
        <ContactForm padding="0px" />
     
        <FooterHero />
    </div>
  )
}

export default AboutPage