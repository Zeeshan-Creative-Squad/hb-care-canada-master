import React, { Fragment, useEffect, useState } from 'react';
import './LandingPage.css';
import { Helmet } from 'react-helmet';
// import PartnershipAwards from './components/PartnershipAwards';
import OurServices from '../../components/OurServices/ourServices'
// import BusinessGrowth from './components/BusinessGrowth';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import FooterHero from '../../components/Footer/footerHero';
// import NotFound from '../../screens/NotFound';
// import Footer from '../Footer/Footer';


// import Header from '../Header/Header';
// import TextContent from '../TextContent/TextContent';

const LocationPages = () => {
    const [locationPage, setLocationPage] = useState({});
    const [loading, setLoading] = useState(false);
    const {slug} = useParams();

    let locationDataCalled = false

    useEffect(() => {
        fetchLocationPageDataById()
    }, []);

    const fetchLocationPageDataById = () => {
        if(locationDataCalled) return;
        locationDataCalled = true;

        setLoading(true)
        axios.get(`/api/locationpages/url/${slug}`, {})
        .then((res) => {
            if (res.data.status === "success") {
                
                setLoading(false)
                setLocationPage(res.data.data)
            }else { setLoading(false)  }
        }).catch((err) => { setLoading(false) })
    }

    const MapHelmetMetaTags = () => {
        return(
            <Helmet>
                <title>{locationPage?.meta_title}</title>
                <meta name="keywords" content={locationPage?.meta_keywords} />
                <link rel="canonical" href={locationPage?.meta_link} />
                <meta name="description" content={locationPage?.meta_description} />
            </Helmet>
        )
    };

    const isEmpty = (obj) => { return Object.keys(obj).length === 0 };

    const LocationPageModule = () => {
        return ( 
            <div className='location_page_wrapper'>
                { MapHelmetMetaTags() }
                {/* <Header
                    darkBg={true}
                /> */}
                {/* <ImgContentSection
                    LogoSectionHeading={locationPage?.main_heading}
                    LogoSectionHeadingSpan=''
                    LogoSectionParagraph={locationPage?.main_paragraph}
                    LogoStripReq={false}
                    LogoSection={true}  
                    imgUrl={"/images/creatives/ecom-img-5.png"} 
                    reverse={'flex-row-reverse'}
                /> */}
                {/* <TextContent
                    heading={locationPage?.main_heading}
                    content={locationPage?.main_paragraph}
                    img={"/images/creatives/home-text-1.webp"}

                /> */}
                {/* <PartnershipAwards /> */}
                <OurServices heading={locationPage?.heading_1} paragraph={locationPage?.paragraph_1} />
                <OurServices heading={locationPage?.heading_2} paragraph={locationPage?.paragraph_2} />
                <OurServices normalHeading={locationPage?.highlighted_heading} highlightedHeading={''} />
                <OurServices heading={locationPage?.heading_3} paragraph={locationPage?.paragraph_3} />
                <OurServices heading={locationPage?.heading_4} paragraph={locationPage?.paragraph_4} />
                {/* <Contactform TopSpace={false} /> */}
                <div style={{height:"50px"}}>

                </div>
                <FooterHero
                    newsletterSection={false}
                />
            </div>
        )
    }

    return ( 
        <Fragment> 
            {/* { loading ? <div className='w-100 text-center'> <Spinner style={{color: 'white', width: '120px', height: '120px'}} /> </div> : ( isEmpty(locationPage) ? <NotFound /> : LocationPageModule()) } */}
        </Fragment>
    )
};

export default LocationPages;