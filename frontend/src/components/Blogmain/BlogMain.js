import React from 'react';
import './BlogMain.css';

const BlogMain = ({text,blogContent}) => {
  return (
    <div className='blog-inner'>
    <div className="container">
    <div className="subheading-container">
    <div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
      {blogContent.map((item) => (
        <>
          <h2 className="heading-h2" style={{textTransform:"capatalize"}}>{item.heading}</h2>
          <div className={`para_main my-3`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
        </>
      ))}
     
    </div>

      {/* New section with horizontal lines, text, and social media icons */}
     
        <hr className="divider" />
        {/* <div className="blog-content">
          <p className="footer-text mb-0">Share this post:</p>
          <div className="social-icons mt-0">
      <img src="/images/fb.svg" alt="Facebook" className="icon" />
      <img src="/images/insta.svg" alt="Instagram" className="icon" />
      <img src="/images/twitter.svg" alt="Twitter" className="icon" />
      <img src="/images/linkedln.svg" alt="LinkedIn" className="icon" />
    </div>
        </div> */}
        
      </div>
      </div>
  )
}

export default BlogMain