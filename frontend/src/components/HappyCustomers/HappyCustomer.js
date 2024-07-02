import React from 'react';
import './HappyCustomer.css'; // Import your custom CSS for additional styling if needed

const stats = [
  { icon: '/images/112.svg', value: "1000+", label: 'Our Clients' },
  { icon: '/images/Group-1360.svg', value: "2000+", label: 'Projects Completed' },
  { icon: '/images/Group-1361.svg', value: "13+", label: 'Years of Experience' },
  { icon: '/images/Group-1362.svg', value: "1500+", label: 'Repeat Orders' }
];

const HappyCustomer = () => {
  return (
    <div className="container text-center my-5 customer-container">
      <h1 className='head-h1'>Our Achievements</h1>
      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <img src={stat.icon} className="mb-3 custom-icons" alt={stat.label} />
            <h3 className="display-4" style={{ color: '#4c1d28' }}>{stat.value}</h3>
            <p style={{ color: '#717C93' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomer;
