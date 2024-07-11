import React from 'react';
import './LocationContent.css'

const LocationContent = ({heading, paragraph}) => {
    return (
        <div className='location_content'>
            <h2 className='heading_capital body-heading'><span>{heading}</span></h2>
            <p className='para_main body-paragraph'><div dangerouslySetInnerHTML={{ __html: paragraph }} /></p>
        </div>
    )
};

export default LocationContent;