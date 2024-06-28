import React from 'react'
import ServicesNumber1Hero from '../../components/ServicesNumber1/ServicesNumber1Hero'
import NavbarCS from '../../components/Header/NavbarCS'
import ExpertTeam from '../../components/ExpertTeamMembersSection/ExpertTeam'
import DiscoverServices from '../../components/DiscoverServicesSection/DiscoverServices'
import ExpertSection from '../../components/AnotherExpertSection/ExpertSection'
import ContactForm from '../../components/ContactForm/ContactForm'
import FooterHero from '../../components/Footer/footerHero';
import ExpertSectionSecondPart from '../../components/ExpertSectionPartTwo/ExpertSectionSecondPart'

const ServicesPage = () => {
  return (
    <div>
        <NavbarCS />
        <ServicesNumber1Hero />
        <ExpertSection />

        <DiscoverServices />
        <ExpertSectionSecondPart />
        <ContactForm padding="0px"/>
        <FooterHero />
        

    </div>
  )
}

export default ServicesPage