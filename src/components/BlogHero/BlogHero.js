import React from 'react';
import './BlogHero.css';

const BlogHero = () => {
  return (
    <div className="blog-hero">
      <div className="Bloghero-content-overlay">
        <div className="Bloghero-content text-center">
        <div className="headset">
        <button className='blog-btn'>Most Popular</button>
        <h6>ByCreativeFusion</h6>
        <h6>March 15, 2024</h6>
      </div>
          <h1>How to design a simple, yet unique
          and memorable brand</h1>
          <p>Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur in elementum placerat sed viverra risus in turpis vitae sed est tincidunt vitae.</p>
          {/* <button className="connect-button">Let's Connect</button> */}
        </div>
      </div>
    </div>
  )
}

export default BlogHero