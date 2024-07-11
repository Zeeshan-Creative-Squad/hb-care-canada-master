import React from 'react';
import "./AboutHero.css";

const AboutHero = ({title, content, subtitle, paragragh}) => {

  return (
    <div className="about-hero">
    <div className="Abouthero-content-overlay">
      <div className="Abouthero-content text-center">
        
        <h1>{title}{content}</h1>
        <p>{subtitle}{paragragh}</p>
        {/* <button className="connect-button">Let's Connect</button> */}
      </div>
    </div>
  </div>
  )
}

export default AboutHero;