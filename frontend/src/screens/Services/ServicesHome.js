import React from 'react';
import FooterHero from '../../components/Footer/footerHero';
import NavbarCS from '../../components/Header/NavbarCS';
import Mission from '../../components/MissionAndMission/Mission';
import Story from '../../components/MyStory/Story';
import OurServices from '../../components/OurServices/ourServices';
import TeamMembers from '../../components/TeamMembers/teamMembers';
import Discover from '../../components/Discovers/Discover';
import HappyCustomer from '../../components/HappyCustomers/HappyCustomer';
import ContactForm from '../../components/ContactForm/ContactForm';
import ServicesHero from '../../components/Services/ServicesHero';
import ExpertTeam from '../../components/ExpertTeamMembersSection/ExpertTeam';
import Testimonials from '../../components/OurTestimonials/Testimonials';


const ServicesHome = () => {
  return (
    <div>
         <NavbarCS />
         <ServicesHero />
         <ExpertTeam />
         {/* <OurServices/> */}
         
        
        {/* <Mission />
      <TeamMembers /> */}
      <Discover />
      <HappyCustomer />
     
     
        {/* <Values /> */}
        {/* <Story /> */}
        <Testimonials />
        <ContactForm />
     
        <FooterHero />
    </div>
  )
};

export default ServicesHome