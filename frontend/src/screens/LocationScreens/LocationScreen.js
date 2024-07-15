import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
// import HeroBanner from '../../components/Common Banner Component/HeroBanner';
import LocationListings from './LocationListings';

const LocationScreen = () => {
    return (
        <Fragment>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
           
            <LocationListings />
        </Fragment>
    )
};

export default LocationScreen;