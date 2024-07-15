import React,{useState,useEffect} from 'react';
import Aboutus from '../../components/AboutUs/aboutUs';
import FooterHero from '../../components/Footer/footerHero';
import NavbarCS from '../../components/Header/NavbarCS';
import Articles from '../../components/NewsAndArticles/Articles';

import Testimonials from '../../components/OurTestimonials/Testimonials';
import OurServices from '../../components/OurServices/ourServices'
import ContactForm from '../../components/ContactForm/ContactForm'
import HomeHero from '../../components/Home/homeHero'

import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';



const HomePage = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()


  let blogAPICalledId = false;
  let allBlogsCalled = false;

  const getAllBlogs = async () => {
    if (allBlogsCalled) return;
    allBlogsCalled = true;

    setLoading(true);
    
    axios
      .get(`/blogs`, {})
      .then((res) => {
        if (res.data.status === "success") {
          let Updated_recent_blogs = [];

          res.data.data.forEach((item) => {
            Updated_recent_blogs.push({
              id: item.blog_id,
              slug_url: item.slug_url,
              logo: item.blog_image,
              blog_description: item.title,
              date: item.published_date,
            });
          });
          setRecentBlogs(Updated_recent_blogs.slice(0, 2));
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (slug_url) => {
    if (!slug_url) return;
    navigate(`/blogs/${slug_url}`);
  };
  return (
    <div>
      
      <NavbarCS  />
      <HomeHero />
      <Aboutus />
      <OurServices />
      {
        loading?
          <div
            style={{ width: "100%", height: "100vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner
              style={{ color: "#3F1626", width: "120px", height: "120px" }}
            />
          </div>
        :
        <>
        recentBlogs &&
          <Articles 
            recentBlogCard={recentBlogs}
            redirectionFunction={redirectUserToBlog}
          />
        </>
      }
      
      <Testimonials />
      <ContactForm />
      
     
     
     
      <FooterHero />
    </div>
  )
}

export default HomePage;