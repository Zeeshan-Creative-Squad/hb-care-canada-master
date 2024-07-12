import React from 'react';
import './TeamMembers.css';

const teamMembers = [
  { name: 'Tahir Nadeem', title: 'Founder & CEO', imgSrc: '/images/Tahir-Nadeem.jpg' },
  { name: 'Fakhra Atiq', title: 'Business Development Manager', imgSrc: '/images/Fakhra-Atiq.jpg' },
  { name: 'Umer Razaq', title: 'Director', imgSrc: '/images/Umer-Razzaq.jpg' },

];

const TeamMembers = () => {
  return (
    <div className='maindiv'>
      <div className="container text-center my-5 team-container">
        <h2 className="headtop">OUR TEAM</h2>
        <h3 className="mb-5 head-h1">HB Care Canada Team</h3>
        <div className="row align-items-center">
          {teamMembers.map((member, index) => (
            <div className="col-6 col-md-4 mb-4" key={index}>
              <div className="card h-100 border-0">
                <img src={member.imgSrc} className="card-img-top" alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
