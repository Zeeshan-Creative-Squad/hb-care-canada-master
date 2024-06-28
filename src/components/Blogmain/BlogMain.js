import React from 'react';
import './BlogMain.css';

const BlogMain = () => {
  return (
    <div className='blog-inner'>
    <div className="container">
     
     
      <div className="subheading-container">
      <h2 className='upperheading-h2'>Laudantium perferendis ad vel consequator dolorem deleniti</h2>
          <p className='upperpara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  </p>
      
        <div className="subheading-content">
          <h2 className='heading-h2'>Laudantium perferendis ad vel consequator dolorem deleniti</h2>
          <p className='para_main'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
        </div>

        <p className='para-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, so thats the reason that why we are eligible</p>
      </div>

      <div className="subheading-work">
          <h2 className='heading-h2'>Laudantium perferendis ad vel consequator dolorem deleniti</h2>
          <p className='para_main'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
      </div>

      {/* New section with horizontal lines, text, and social media icons */}
     
        <hr className="divider" />
        <div className="blog-content">
          <p className="footer-text mb-0">Share this post:</p>
          <div className="social-icons mt-0">
      <img src="/images/fb.svg" alt="Facebook" className="icon" />
      <img src="/images/insta.svg" alt="Instagram" className="icon" />
      <img src="/images/twitter.svg" alt="Twitter" className="icon" />
      <img src="/images/linkedln.svg" alt="LinkedIn" className="icon" />
    </div>
        </div>
        
      </div>
      </div>
  )
}

export default BlogMain