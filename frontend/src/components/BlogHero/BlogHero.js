import React from 'react';
import './BlogHero.css';

const BlogHero = ({
 date="",
title=""
}) => {
  return (
    <div className="blog-hero">
      <div className="Bloghero-content-overlay">
        <div className="Bloghero-content text-center">
        <div className="headset">
        <button className='blog-btn'>Most Popular</button>
        <h6>By CreativeFusion</h6>
        <h6>{date}</h6>
      </div>
          <h1>{title}</h1>
        
        </div>
      </div>
    </div>
  )
}

export default BlogHero