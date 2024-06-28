import React from 'react';

import './HappyCustomer.css'; // Custom CSS for additional styling if needed

const stats = [
  { icon: '/images/112.svg', String: "1000+", label: 'Our Clients' },
  { icon: 'images/Group-1360.svg', String: "2000+", label: 'Projects Done to Team' },
  { icon: 'images/Group-1361.svg', String: "13+", label: 'Years Experience' },
  { icon: 'images/Group-1362.svg', String: "1500+", label: 'Repeat Orders' }
];

const HappyCustomer = () => {
  return (
    <div className="container text-center my-5 customer-container">
      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <img src={stat.icon} className="mb-3 custom-icons" alt={stat.label} />
            <h3 className="display-4" style={{ color: '#4c1d28' }}>{stat.String}</h3>
            <p style={{ color: '#717C93' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomer;
