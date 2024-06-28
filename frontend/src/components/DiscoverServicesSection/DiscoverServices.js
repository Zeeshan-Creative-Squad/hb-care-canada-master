import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DiscoverServices.css';

const DiscoverServices = () => {
  return (
    <div className="important-div">
      <div className="container my-5 services-container">
        <div className="row">
          <div className="col-md-5">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action active">
              Product Suppliers
              </a>
              <a href="#" className="list-group-item list-group-item-action">
              Premium Product Providers
              </a>
              <a href="#" className="list-group-item list-group-item-action">
              24/7 Customer Support
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="head-h1">Our Services</h2>
            <p className="para_main">
            At HB Care, we're all about making Canadian barbers feel sharp and stylish! We provide premium haircutting and barber salon products that keep you looking your best.
            </p>
            <button className="connect-button">Let's Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverServices;
