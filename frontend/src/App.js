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
import ProductGalleryThree from "./components/Gallery/ProductGalleryThree";
import ProductGalleryFour from "./components/Gallery/ProductGalleryFour";
import ProductGalleryFive from "./components/Gallery/ProductGalleryFive";
import ProductGallerySix from "./components/Gallery/ProductGallerySix";
import ProductGallerySeven from "./components/Gallery/ProductGallerySeven";
import ProductGalleryEight from "./components/Gallery/ProductGalleryEight";
import ProductGalleryNine from "./components/Gallery/ProductGalleryNine";

   
const App = () => { 
  return (

    <Router>

      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services' element={<ServicesHome />} />
      <Route path='/services_number' element={<ServicesPage />} />
      <Route path='/barber-razors' element={<ProductPage />} />
      <Route path='/barber-scissors' element={<ProductGalleryOne />} />
      <Route path='/eyebrow-tweezers' element={<ProductGalleryTwo />} />
      <Route path='/eyelash-tweezers' element={<ProductGalleryThree />} />
      <Route path='/nailcutting' element={<ProductGalleryFour />} />
      <Route path='/nailcutting-scissor' element={<ProductGalleryFive />} />
      <Route path='/nipper' element={<ProductGallerySix />} />
      <Route path='/pushers' element={<ProductGallerySeven />} />
      <Route path='/medical-tools' element={<ProductGalleryEight />} />
      <Route path='/pedicure-footfilers' element={<ProductGalleryNine />} />
      <Route path='/news' element={<NewsUpdatesPage />} />
      <Route path='/blogs' element={<BlogPage />} />
      <Route path='/contact' element={<ContactPageMain />} />
      </Routes>

    </Router>
    
  );
}

export default App; 