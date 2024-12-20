import { useEffect } from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutUs/AboutPage";
import ServicePage from "./Pages/ServicePage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogsPage from "./Pages/BlogsPage";
import Footer from "./Components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import CareerPage from "./Pages/CareerPage";
import SingleBlogPage from "./Pages/SingleBlogPage";
import ScrollToTopButton from "./Components/ScrollTopBtn";
import ContactPage from "./Pages/ContactUs/ContactPage";
import LandingPage from "./Pages/LandingPage/LandingPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/portfolios" element={<PortfolioPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
