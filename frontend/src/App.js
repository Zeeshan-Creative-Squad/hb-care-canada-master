import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import HomePage from "./screens/Home/HomePage";
import AboutPage from "./screens/About/AboutPage";
import ProductPage from "./screens/Product/ProductPage";
import ServicesHome from "./screens/Services/ServicesHome";
import ServicesPage from "./screens/ServicesPage1/ServicesPage";
import NewsUpdatesPage from "./screens/NewsUpdates/NewsUpdatesPage";
import BlogPage from "./screens/Blog/BlogPage";
import ContactPageMain from "./screens/ContactPage/ContactPageMain";
import ProductGalleryOne from "./components/Gallery/ProductGalleryOne";
import ProductGalleryTwo from "./components/Gallery/ProductGalleryTwo";

   
const App = () => { 
  return (

    <Router>

      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services' element={<ServicesHome />} />
      <Route path='/services_number' element={<ServicesPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/product-gallery-one' element={<ProductGalleryOne />} />
      <Route path='/product-gallery-two' element={<ProductGalleryTwo />} />
      <Route path='/news' element={<NewsUpdatesPage />} />
      <Route path='/blogs' element={<BlogPage />} />
      <Route path='/contact' element={<ContactPageMain />} />
      </Routes>

    </Router>
    
  );
}

export default App; 