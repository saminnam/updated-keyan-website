import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";
import 'aos/dist/aos.css';
import AOS from 'aos'

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/services" element={<ServicePage />}></Route>
            <Route path="/portfolios" element={<PortfolioPage />}></Route>
            <Route path="/blogs" element={<BlogsPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
