import React from 'react'
import NavbarCS from '../../components/Header/NavbarCS'
import BlogMain from '../../components/Blogmain/BlogMain'
import BlogHero from '../../components/BlogHero/BlogHero'
import Articles from '../../components/NewsAndArticles/Articles';
import FooterHero from '../../components/Footer/footerHero';


const BlogPage = () => {
  return (
    <div>
        <NavbarCS />
        <BlogHero />
        <BlogMain />
        <Articles backgroundColor="#F9F9F9" />

        <FooterHero />
       
        
    </div>
  )
}

export default BlogPage